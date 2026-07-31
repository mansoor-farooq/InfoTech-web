import data from './data.json';

export const COMPANY_INFO = data.COMPANY_INFO;
export const NAV_SERVICES = data.NAV_SERVICES;
export const SERVICES_FULL = data.SERVICES_FULL;
export const NAV_PRODUCTS = data.NAV_PRODUCTS;
export const PRODUCTS_FULL = data.PRODUCTS_FULL;
export const TESTIMONIALS = data.TESTIMONIALS;

export const slugify = (text) => text.toLowerCase().replace(/ & /g, '-').replace(/ /g, '-');
