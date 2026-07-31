/**
 * ICON HELPER GUIDE:
 * To add an icon for a new service or product:
 * 1. Pick any icon name from https://lucide.dev/icons (e.g., Cpu, Globe, Lock, Wifi, Truck, Heart)
 * 2. Import it from 'lucide-react' at the top of this file.
 * 3. Add a case with your service/product slug in getServiceIcon() or getProductIcon().
 */

import { 
  BarChart3, 
  Code, 
  Smartphone, 
  Server, 
  Wrench, 
  CloudUpload, 
  Database, 
  Sparkles, 
  Cloud, 
  FileCheck, 
  ShieldCheck, 
  Layout, 
  ShoppingCart, 
  Users, 
  Receipt, 
  ShoppingBag, 
  Store, 
  ClipboardList, 
  TrendingUp, 
  PackageCheck, 
  BookOpen, 
  Warehouse, 
  Navigation, 
  Building2,
  Box,
  Globe,
  Cpu,
  Lock,
  Truck,
  Heart,
  DollarSign,
  Layers,
  Settings
} from 'lucide-react';

export function getServiceIcon(slug, className = "w-6 h-6") {
  switch (slug) {
    case 'bi-reports':
      return <BarChart3 className={className} />;
    case 'web-development':
      return <Code className={className} />;
    case 'mobile-application':
      return <Smartphone className={className} />;
    case 'infrastructure-management':
      return <Server className={className} />;
    case 'maintenance-enhancements':
      return <Wrench className={className} />;
    case 'migration-and-modernization':
      return <CloudUpload className={className} />;
    case 'custom-erp-development':
      return <Database className={className} />;
    case 'ai-and-machine-learning':
      return <Sparkles className={className} />;
    case 'cloud-devops':
      return <Cloud className={className} />;
    case 'fbr-e-invoicing-compliance':
      return <FileCheck className={className} />;
    case 'cybersecurity-audit':
      return <ShieldCheck className={className} />;
    case 'enterprise-ui-ux-design':
      return <Layout className={className} />;
    default:
      return <Box className={className} />;
  }
}

export function getProductIcon(slug, className = "w-6 h-6") {
  switch (slug) {
    case 'cartivo':
      return <ShoppingCart className={className} />;
    case 'hrms-&-payroll-management-system':
    case 'hrms':
      return <Users className={className} />;
    case 'digital-e-invocia-integration':
      return <Receipt className={className} />;
    case 'e-commerce-solutions':
      return <ShoppingBag className={className} />;
    case 'merchandizing-application':
      return <Store className={className} />;
    case 'order-booking':
      return <ClipboardList className={className} />;
    case 'secondary-sales':
      return <TrendingUp className={className} />;
    case 'procurement-application':
      return <PackageCheck className={className} />;
    case 'lms':
      return <BookOpen className={className} />;
    case 'warehouse-management-system-wms':
      return <Warehouse className={className} />;
    case 'field-force-&-sales-automation-sfa':
      return <Navigation className={className} />;
    case 'enterprise-crm-system':
      return <Building2 className={className} />;
    default:
      return <Box className={className} />;
  }
}
