import React from 'react';
import Hero from './home/Hero';
import ServicesGrid from './home/ServicesGrid';
import Testimonials from './home/Testimonials';
import ClientLogos from './home/ClientLogos';
import StatsBar from './home/StatsBar';
import WhyInfoTech from './home/WhyInfoTech';

// Map component names from the DB to actual React components
const componentMap = {
  Hero: Hero,
  ServicesGrid: ServicesGrid,
  Testimonials: Testimonials,
  ClientLogos: ClientLogos,
  StatsBar: StatsBar,
  WhyInfoTech: WhyInfoTech,
};

export default function DynamicRenderer({ components }) {
  if (!components || components.length === 0) {
    return <div className="py-20 text-center text-gray-500">No components added to this page yet.</div>;
  }

  return (
    <>
      {components.map((pageComponent) => {
        const Component = componentMap[pageComponent.component.name];
        
        if (!Component) {
          // Fallback for unknown components
          console.warn(`Component ${pageComponent.component.name} not found in componentMap.`);
          return (
            <div key={pageComponent.id} className="p-4 border border-dashed border-red-500 text-red-500 bg-red-500/10 rounded my-4 text-center">
              Unknown Component: {pageComponent.component.name}
            </div>
          );
        }

        // Pass the dynamic JSON props down to the component
        return <Component key={pageComponent.id} config={pageComponent.props} />;
      })}
    </>
  );
}
