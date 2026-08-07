export const eventNames = {
  whatsappSeniorPlusClick: 'whatsapp_senior_plus_click',
  phoneClick: 'phone_click',
  contactWhatsAppSubmit: 'contact_whatsapp_submit',
  careersFormClick: 'careers_form_click',
  instagramClick: 'instagram_click',
  guidesCatalogView: 'guides_catalog_view',
  guideView: 'guide_view',
  guideSalesPageClick: 'guide_sales_page_click',
  ebookCheckoutClick: 'ebook_checkout_click',
  ebookPurchase: 'ebook_purchase',
} as const;

export type EventName = (typeof eventNames)[keyof typeof eventNames];

/** Ativação futura exige implementação e aprovação explícitas. */
export const analyticsConfig = {
  enabled: false,
} as const;
