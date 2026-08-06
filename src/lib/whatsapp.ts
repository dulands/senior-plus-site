import { contacts, whatsappMessages } from '../data/site';
import type { ContactKey } from '../types/site';

export type WhatsAppMessageKey = keyof typeof whatsappMessages;

export function buildWhatsAppUrl(
  contactKey: ContactKey,
  messageKey: WhatsAppMessageKey,
): string {
  const contact = contacts[contactKey];
  const message = whatsappMessages[messageKey];
  return `https://wa.me/${contact.whatsappNumber}?text=${encodeURIComponent(message)}`;
}
