(() => {
  'use strict';

  const config = Object.freeze({ enabled: false });
  const allowedKeys = new Set(['event', 'contact', 'location', 'cta']);

  const track = (eventName, metadata = {}) => {
    if (!config.enabled || typeof eventName !== 'string') return false;

    const safeMetadata = {};
    for (const [key, value] of Object.entries(metadata)) {
      if (allowedKeys.has(key) && typeof value === 'string') safeMetadata[key] = value;
    }

    window.dispatchEvent(
      new CustomEvent('seniorplus:analytics', {
        detail: { event: eventName, ...safeMetadata },
      }),
    );
    return true;
  };

  window.SeniorPlusEvents = Object.freeze({ enabled: config.enabled, track });

  document.addEventListener('click', (event) => {
    const target = event.target instanceof Element ? event.target.closest('[data-event]') : null;
    if (!target) return;
    track(target.getAttribute('data-event'), {
      contact: target.getAttribute('data-contact') || '',
      location: target.getAttribute('data-location') || '',
      cta: target.getAttribute('data-cta') || '',
    });
  });
})();
