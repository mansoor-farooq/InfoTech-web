import data from './data.json';

export const COMPANY_INFO = data.COMPANY_INFO;
export const NAV_SERVICES = data.NAV_SERVICES;
export const SERVICES_FULL = data.SERVICES_FULL;
export const NAV_PRODUCTS = data.NAV_PRODUCTS;
export const PRODUCTS_FULL = data.PRODUCTS_FULL;
export const TESTIMONIALS = data.TESTIMONIALS;

export const slugify = (text) => 
  text
    .toLowerCase()
    .trim()
    .replace(/&/g, 'and')
    .replace(/[^a-z0-9 -]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-');

export function getProductData(rawSlug) {
  if (!rawSlug) return null;
  const decoded = decodeURIComponent(rawSlug).toLowerCase();
  
  if (PRODUCTS_FULL[rawSlug]) return PRODUCTS_FULL[rawSlug];
  if (PRODUCTS_FULL[decoded]) return PRODUCTS_FULL[decoded];

  const normalizedRequested = decoded.replace(/[^a-z0-9]/g, '');
  
  for (const [key, val] of Object.entries(PRODUCTS_FULL)) {
    const normalizedKey = key.toLowerCase().replace(/[^a-z0-9]/g, '');
    if (normalizedKey === normalizedRequested) {
      return val;
    }
  }

  return null;
}

export function getServiceData(rawSlug) {
  if (!rawSlug) return null;
  const decoded = decodeURIComponent(rawSlug).toLowerCase();
  
  if (SERVICES_FULL[rawSlug]) return SERVICES_FULL[rawSlug];
  if (SERVICES_FULL[decoded]) return SERVICES_FULL[decoded];

  const normalizedRequested = decoded.replace(/[^a-z0-9]/g, '');
  
  for (const [key, val] of Object.entries(SERVICES_FULL)) {
    const normalizedKey = key.toLowerCase().replace(/[^a-z0-9]/g, '');
    if (normalizedKey === normalizedRequested) {
      return val;
    }
  }

  return null;
}
