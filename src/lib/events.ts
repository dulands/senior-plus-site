export const eventNames = {
  whatsappAnnieClick: 'whatsapp_annie_click',
  whatsappFabianoClick: 'whatsapp_fabiano_click',
  phoneClick: 'phone_click',
  contactWhatsAppSubmit: 'contact_whatsapp_submit',
  careersFormClick: 'careers_form_click',
  instagramClick: 'instagram_click',
  guidesCatalogView: 'guides_catalog_view',
  guideView: 'guide_view',
  ebookCheckoutClick: 'ebook_checkout_click',
  ebookPurchase: 'ebook_purchase',
} as const;

export type EventName = (typeof eventNames)[keyof typeof eventNames];

/** Ativação futura exige implementação e aprovação explícitas. */
export const analyticsConfig = {
  enabled: false,
} as const;
