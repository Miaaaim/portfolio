import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const serviceGroups = [
  [
    {
      title: '增长黑客',
      image: '/src/assets/images/project-cover-growth-hacker.png',
      link: '/project/growth-hacker',
    },
    {
      title: '校园SaaS平台',
      image: '/src/assets/images/project-cover-campus-saas-platform.png',
      link: '/project/saas-system',
    },
    {
      title: '运动APP/小程序',
      image: '/src/assets/images/project-cover-sports-app-mini-program.png',
      link: '/project/sports-app',
    },
  ],
  [
    {
      title: 'CRM系统',
      image: '/src/assets/images/project-cover-crm-system.png',
      link: '/project/crm-system',
    },
    {
      title: '骑手APP',
      image: '/src/assets/images/project-cover-rider-app.png',
      link: '/project/rider-app',
    },
  ]
];

export default function Services() {
  const [activeGroup, setActiveGroup] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;
    
    const timer = setInterval(() => {
      setActiveGroup((prev) => (prev + 1) % serviceGroups.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [isPaused]);

  return (
    <section id="service" className="py-24 px-6 bg-brand-dark text-white rounded-[4rem] mx-4 mb-20 overflow-hidden relative">
      <div className="max-w-7xl mx-auto space-y-16 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div className="space-y-4">
             <h2 className="text-5xl font-bold">项目 <span className="text-brand-orange">经验</span></h2>
          </div>
          <div className="flex flex-col gap-4 max-w-lg">
            <p className="text-gray-400 text-lg">
              推动ToB平台型项目从0到1落地；独立负责核心模块迭代，以数据驱动系统完善，持续优化流程与体验。
            </p>
          </div>
        </div>

        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div 
              key={activeGroup}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5, ease: 'easeInOut' }}
              className="grid grid-cols-1 md:grid-cols-3 gap-8"
            >
              {serviceGroups[activeGroup].map((service, index) => {
                const isInternal = service.link.startsWith('/');
                const commonClassName = "bg-zinc-900 border border-white/5 rounded-[3rem] p-8 space-y-8 group hover:border-brand-orange/30 transition-all block hover:translate-y-[-4px]";
                
                const hoverHandlers = {
                  onMouseEnter: () => setIsPaused(true),
                  onMouseLeave: () => setIsPaused(false),
                  onFocus: () => setIsPaused(true),
                  onBlur: () => setIsPaused(false),
                };

                const Content = (
                  <>
                    <h3 className="text-2xl font-bold">{service.title}</h3>
                    <div className="relative aspect-[16/10] bg-zinc-800 rounded-3xl overflow-hidden shadow-2xl">
                      <img 
                        src={service.image} 
                        alt={service.title} 
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute bottom-4 right-4 w-12 h-12 bg-zinc-950 rounded-full flex items-center justify-center border border-white/10 group-hover:bg-brand-orange group-hover:border-brand-orange transition-all duration-300">
                        <ArrowUpRight size={20} className="text-white" />
                      </div>
                    </div>
                  </>
                );

                if (isInternal) {
                  return (
                    <Link 
                      key={index} 
                      to={service.link} 
                      className={commonClassName}
                      {...hoverHandlers}
                    >
                      {Content}
                    </Link>
                  );
                }

                return (
                  <a 
                    key={index} 
                    href={service.link} 
                    className={commonClassName}
                    {...hoverHandlers}
                  >
                    {Content}
                  </a>
                );
              })}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Pagination Dots at the bottom - Spacing adjusted to 50px */}
        <div className="flex justify-center gap-2 mt-[50px]">
          {serviceGroups.map((_, i) => (
            <button 
              key={i}
              onClick={() => setActiveGroup(i)}
              className={`h-2 rounded-full transition-all duration-500 ${activeGroup === i ? 'w-12 bg-brand-orange' : 'w-3 bg-zinc-700'}`}
              aria-label={`Go to group ${i + 1}`}
            />
          ))}
        </div>
      </div>
      
      {/* Visual background details */}
      <div className="absolute top-20 right-20 w-64 h-64 bg-brand-orange/10 blur-[100px] rounded-full" />
      <div className="absolute bottom-20 left-20 w-64 h-64 bg-zinc-700/20 blur-[100px] rounded-full" />
    </section>
  );
}
