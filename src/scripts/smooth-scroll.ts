import Lenis from 'lenis';
import type { TransitionBeforeSwapEvent } from 'astro:transitions/client';

const reducedMotionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
const coarsePointerQuery = window.matchMedia('(pointer: coarse)');
const pageTopOffset = 48;
const pageTopDuration = 0.22;
const pageTopScrollThreshold = 120;
let lenis: Lenis | undefined;
let shouldAnimatePageTop = false;
let isHistoryTraversal = false;

const destroySmoothScroll = () => {
  lenis?.destroy();
  lenis = undefined;
};

const initializeSmoothScroll = () => {
  destroySmoothScroll();

  if (reducedMotionQuery.matches) return;

  lenis = new Lenis({
    autoRaf: true,
    anchors: true,
    lerp: 0.12,
    smoothWheel: true,
    syncTouch: false,
    wheelMultiplier: 1,
    stopInertiaOnNavigate: true,
    prevent: (node) => node.matches('textarea, .mobile-menu__panel'),
  });
};

const preparePageNavigation = (event: TransitionBeforeSwapEvent) => {
  isHistoryTraversal = event.navigationType === 'traverse';
  shouldAnimatePageTop =
    event.navigationType === 'push' &&
    event.from.origin === event.to.origin &&
    event.from.pathname !== event.to.pathname &&
    !event.to.hash &&
    window.scrollY > pageTopScrollThreshold &&
    !reducedMotionQuery.matches &&
    !coarsePointerQuery.matches;
};

const positionIncomingPage = () => {
  if (isHistoryTraversal) {
    const { scrollX = 0, scrollY = 0 } = window.history.state ?? {};

    window.scrollTo({ left: scrollX, top: scrollY, behavior: 'instant' });

    if (!lenis) initializeSmoothScroll();
    lenis?.resize();
    lenis?.scrollTo(window.scrollY, { force: true, immediate: true });

    isHistoryTraversal = false;
    shouldAnimatePageTop = false;
    return;
  }

  const animatePageTop =
    shouldAnimatePageTop &&
    !reducedMotionQuery.matches &&
    !coarsePointerQuery.matches;

  if (animatePageTop) {
    window.scrollTo({ left: 0, top: pageTopOffset, behavior: 'instant' });
  }

  if (!lenis) initializeSmoothScroll();

  lenis?.resize();
  lenis?.scrollTo(window.scrollY, { force: true, immediate: true });

  const activeLenis = lenis;
  shouldAnimatePageTop = false;

  if (!animatePageTop || !activeLenis) return;

  requestAnimationFrame(() => {
    if (lenis !== activeLenis) return;
    activeLenis.scrollTo(0, { duration: pageTopDuration });
  });
};

const handlePageLoad = () => {
  if (!lenis) initializeSmoothScroll();
};

initializeSmoothScroll();

document.addEventListener('astro:before-swap', preparePageNavigation);
document.addEventListener('astro:after-swap', positionIncomingPage);
document.addEventListener('astro:page-load', handlePageLoad);
reducedMotionQuery.addEventListener('change', initializeSmoothScroll);
