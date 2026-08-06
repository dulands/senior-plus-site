import type { Guide } from '../types/guide';

/**
 * A área Guias permanece desativada até haver conteúdo, preço, checkout e
 * aprovação de publicação. Nenhum produto incompleto é exposto no site.
 */
export const guidesFeature = {
  enabled: false,
} as const;

export const guides: Guide[] = [];
