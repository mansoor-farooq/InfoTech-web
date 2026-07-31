import { PRODUCTS_FULL, getProductData } from '@/lib/data';
import ServerNavbar from '@/components/ServerNavbar';
import Footer from '@/components/Footer';
import Image from 'next/image';
import ImagePlaceholder from '@/components/ImagePlaceholder';
import Link from 'next/link';
import { ArrowLeft, Play, CheckCircle2, ChevronRight, Tags } from 'lucide-react';
import { notFound } from 'next/navigation';

export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  const product = getProductData(resolvedParams.slug);
  if (!product) return { title: 'Product Not Found' };
  
  return {
    title: `${product.title} | InfoTech Solutions`,
    description: product.subtitle,
  };
}

export function generateStaticParams() {
  return Object.keys(PRODUCTS_FULL).map((slug) => ({
    slug,
  }));
}

export default async function ProductDetailPage({ params }) {
  const resolvedParams = await params;
  const product = getProductData(resolvedParams.slug);
  
  if (!product) {
    notFound();
  }

  return (
    <>
      <ServerNavbar />
      <main className="min-h-screen bg-white pt-24">
        
        {/* Back Button */}
        <div className="container-xl pt-8 pb-4">
          <Link href="/products" className="inline-flex items-center text-sm font-bold text-slate-500 hover:text-blue-600 transition-colors uppercase tracking-wider">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Products
          </Link>
        </div>

        {/* Hero Section */}
        <section className="section py-12 md:py-20 bg-slate-50 relative overflow-hidden border-b border-slate-200">
          <div className="absolute inset-0 opacity-5" style={{ backgroundColor: product.accent }} />
          <div className="container-xl relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">
              
              {/* Text Content */}
              <div>
                {product.logo ? (
                  <div className="relative h-16 w-56 bg-white p-2 rounded-2xl shadow-md border border-slate-200 mb-6 flex items-center justify-center">
                    <Image 
                      src={product.logo} 
                      alt={`${product.title} Logo`} 
                      fill 
                      className="object-contain p-2" 
                    />
                  </div>
                ) : (
                  <div 
                    className="inline-block px-4 py-1.5 rounded-full text-sm font-bold mb-6 uppercase tracking-wider shadow-sm"
                    style={{ backgroundColor: `${product.accent}20`, color: product.accent }}
                  >
                    {product.title}
                  </div>
                )}

                <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-tight mb-6">
                  {product.title}
                </h1>
                <p className="text-xl md:text-2xl text-slate-600 font-medium leading-relaxed mb-8">
                  {product.subtitle}
                </p>
                <div className="flex flex-wrap gap-4">
                  <button 
                    className="btn px-8 py-4 rounded-xl text-white font-bold shadow-lg shadow-blue-500/30 hover:-translate-y-1 transition-all"
                    style={{ backgroundColor: product.accent }}
                  >
                    Request Demo
                  </button>
                </div>
              </div>

              {/* Main Product Image Placeholder */}
              <ImagePlaceholder 
                label={`${product.title} Main Hero Image`}
                pathHint={`/images/${resolvedParams.slug}-hero.png`}
                aspect="aspect-video"
              />

            </div>
          </div>
        </section>

        {/* Dynamic Detailed Content */}
        <section className="section py-20 lg:py-32">
          <div className="container-xl">
            <div className="max-w-5xl mx-auto space-y-24">
              
              {/* If product has new detailedContent array format */}
              {product.detailedContent ? (
                product.detailedContent.map((section, index) => {
                  
                  // Render regular text sections (with alternating side image placeholders)
                  if (section.type === 'text' || section.type === 'list-text') {
                     const isEven = index % 2 === 0;
                     return (
                        <div key={index} className="grid md:grid-cols-2 gap-12 items-center">
                          <div className={`order-2 ${isEven ? 'md:order-1' : 'md:order-2'}`}>
                            <ImagePlaceholder 
                              label={`${section.sectionTitle} Screenshot`}
                              pathHint={`/images/${resolvedParams.slug}-section-${index + 1}.png`}
                              aspect="aspect-square md:aspect-[4/3]"
                            />
                          </div>

                          <div className={`order-1 ${isEven ? 'md:order-2' : 'md:order-1'}`}>
                            <h2 className="heading-2 mb-6 text-slate-900">{section.sectionTitle}</h2>
                            <div className="text-lg text-slate-600 leading-relaxed mb-6 whitespace-pre-wrap">
                              {section.content}
                            </div>
                            {section.type === 'list-text' && section.points && (
                               <ul className="space-y-4 mt-6 bg-slate-50 p-8 rounded-3xl border border-slate-100">
                                 {section.points.map((point, idx) => (
                                   <li key={idx} className="flex items-start">
                                     <ChevronRight className="w-5 h-5 mr-3 flex-shrink-0 mt-1" style={{ color: product.accent }} />
                                     <span className="text-slate-700 font-medium text-lg">{point}</span>
                                   </li>
                                 ))}
                               </ul>
                            )}
                          </div>
                        </div>
                     )
                  }

                  // Render grid sections (like Core Modules)
                  if (section.type === 'grid') {
                     return (
                        <div key={index} className="bg-slate-900 text-white p-12 md:p-16 rounded-[3rem] relative overflow-hidden">
                           <div className="absolute inset-0 opacity-10" style={{ backgroundColor: product.accent }} />
                           <div className="relative z-10">
                              <h2 className="text-3xl md:text-4xl font-extrabold mb-10 text-center">{section.sectionTitle}</h2>
                              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                                 {section.items.map((item, idx) => (
                                    <div key={idx} className="bg-white/10 backdrop-blur-md border border-white/10 p-8 rounded-3xl hover:bg-white/20 transition-colors">
                                       <h3 className="text-xl font-bold mb-3" style={{ color: product.accentLight }}>{item.title}</h3>
                                       <p className="text-slate-300 leading-relaxed">{item.desc}</p>
                                    </div>
                                 ))}
                              </div>
                           </div>
                        </div>
                     )
                  }

                  // Render tags / categories sections
                  if (section.type === 'tags') {
                     return (
                        <div key={index} className="text-center">
                           <h2 className="heading-2 mb-12">{section.sectionTitle}</h2>
                           <div className="grid md:grid-cols-2 gap-12">
                              {section.tagsGroups.map((group, idx) => (
                                 <div key={idx} className="bg-slate-50 p-10 rounded-3xl border border-slate-100">
                                    <div className="flex items-center justify-center mb-6">
                                       <Tags className="w-6 h-6 mr-3" style={{ color: product.accent }} />
                                       <h3 className="text-2xl font-bold text-slate-900">{group.group}</h3>
                                    </div>
                                    <div className="flex flex-wrap gap-3 justify-center">
                                       {group.tags.map((tag, tIdx) => (
                                          <span key={tIdx} className="px-4 py-2 bg-white border border-slate-200 text-slate-700 font-medium rounded-full shadow-sm">
                                             {tag}
                                          </span>
                                       ))}
                                    </div>
                                 </div>
                              ))}
                           </div>
                        </div>
                     )
                  }

                  return null;
                })
              ) : (
                
                /* Fallback for simple products (without detailedContent) */
                <>
                  <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div className="order-2 md:order-1">
                      <ImagePlaceholder 
                        label={`${product.title} Overview Image`}
                        pathHint={`/images/${resolvedParams.slug}-overview.png`}
                        aspect="aspect-square md:aspect-[4/3]"
                      />
                    </div>
                    <div className="order-1 md:order-2">
                      <h2 className="heading-2 mb-6 text-slate-900">Comprehensive Overview</h2>
                      <p className="text-lg text-slate-600 leading-relaxed mb-6">
                        {product.description || `Detailed description of ${product.title} goes here. Learn how this powerful solution can optimize your operations and bring scalable automation to your workflow.`}
                      </p>
                      <ul className="space-y-4">
                        {(product.features || ["Advanced Analytics", "Seamless Integration", "Real-time Monitoring"]).slice(0, 3).map((feature, idx) => (
                          <li key={idx} className="flex items-start">
                            <CheckCircle2 className="w-6 h-6 mr-3 flex-shrink-0 mt-0.5" style={{ color: product.accent }} />
                            <span className="text-slate-700 font-medium text-lg">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div>
                      <h2 className="heading-2 mb-6 text-slate-900">Advanced Capabilities</h2>
                      <p className="text-lg text-slate-600 leading-relaxed mb-6">
                        Dive deeper into the features that set {product.title} apart. Our platform is built on modern architecture ensuring security, scalability, and ease of use.
                      </p>
                      <ul className="space-y-4">
                        {(product.features || ["Automated Workflows", "Cloud-Native Infrastructure", "24/7 Support"]).slice(3, 6).map((feature, idx) => (
                          <li key={idx} className="flex items-start">
                            <CheckCircle2 className="w-6 h-6 mr-3 flex-shrink-0 mt-0.5" style={{ color: product.accent }} />
                            <span className="text-slate-700 font-medium text-lg">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <ImagePlaceholder 
                        label={`${product.title} Features Screenshot`}
                        pathHint={`/images/${resolvedParams.slug}-features.png`}
                        aspect="aspect-square md:aspect-[4/3]"
                      />
                    </div>
                  </div>
                </>
              )}

              {/* Universal Video Section for ALL products */}
              <div className="text-center bg-slate-50 p-8 md:p-16 rounded-[3rem] border border-slate-100 mt-24">
                <h2 className="heading-2 mb-6 text-slate-900">See {product.title} In Action</h2>
                <p className="text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto mb-12">
                  Watch this quick video to see how it can transform your daily operations and streamline your workflow.
                </p>
                
                <div className="relative aspect-video max-w-4xl mx-auto rounded-3xl overflow-hidden bg-slate-900 shadow-2xl group cursor-pointer border-8 border-white">
                  {/* Video Thumbnail Placeholder */}
                  <div className="absolute inset-0 bg-slate-800 flex items-center justify-center opacity-90 group-hover:opacity-100 transition-opacity">
                    <span className="text-slate-500 font-bold uppercase tracking-widest text-sm">Video Thumbnail Placeholder</span>
                  </div>
                  
                  {/* Play Button Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20 group-hover:scale-110 group-hover:bg-white/30 transition-all duration-300">
                      <Play className="w-8 h-8 md:w-10 md:h-10 text-white ml-2" />
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
