import Navbar from './Navbar';
import { SERVICES_FULL, PRODUCTS_FULL } from '@/lib/data';

export default function ServerNavbar() {
  const services = Object.entries(SERVICES_FULL || {}).map(([slug, s]) => ({
    slug,
    ...s
  }));

  const products = Object.entries(PRODUCTS_FULL || {}).map(([slug, p]) => ({
    slug,
    ...p
  }));

  return <Navbar services={services} products={products} />;
}

