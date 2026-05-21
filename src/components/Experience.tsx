import { motion } from 'motion/react';
import { ArrowUpRight, ArrowRight, Building2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const experiences = [
  {
    id: 'lingkang',
    company: '领康科技',
    date: '2024.03 – 2025.07',
    title: '资深产品经理',
    desc: '负责智慧校园体育SaaS平台产品规划与迭代，搭建业务管理系统、学校管理系统、数据大屏等平台。系统覆盖1500+学校、150万学生，支撑千万次体测。'
  },
  {
    id: 'netease',
    company: '网易',
    date: '2021.09 – 2023.11',
    title: '高级产品经理',
    desc: '负责智慧校园体育SaaS平台产品规划与迭代，搭建业务管理系统、学校管理系统、数据大屏等平台。系统覆盖1500+学校、150万学生，支撑千万次体测。'
  },
  {
    id: 'jielibang',
    company: '接力棒科技',
    date: '2018.11 – 2021.08',
    title: '产品经理',
    desc: '负责智慧校园体育SaaS平台产品规划与迭代，搭建业务管理系统、学校管理系统、数据大屏等平台。系统覆盖1500+学校、150万学生，支撑千万次体测。'
  },
  {
    id: 'eleme',
    company: '饿了么',
    date: '2015.07 – 2018.10',
    title: '产品运营',
    desc: '负责智慧校园体育SaaS平台产品规划与迭代，搭建业务管理系统、学校管理系统、数据大屏等平台。系统覆盖1500+学校、150万学生，支撑千万次体测。'
  }
];

export default function Experience() {
  return (
    <section id="resume" className="py-24 px-6 max-w-7xl mx-auto">
      <div className="text-center space-y-4 mb-20 text-balance">
        <h2 className="text-5xl font-bold">工作 <span className="text-brand-orange">经验</span></h2>
      </div>

      <div className="relative">
        {/* Vertical line with gradient - aligned to left on mobile, 1/3 on desktop */}
        <div className="absolute left-2 md:left-[33.33%] -translate-x-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-brand-orange via-zinc-900 to-zinc-200" />
        
        <div className="space-y-16 md:space-y-20">
          {experiences.map((exp, index) => (
            <div key={index} className="relative grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-16 items-start pl-10 md:pl-0">
              {/* Timeline dot */}
              <div className="absolute left-2 md:left-[33.33%] -translate-x-1/2 top-0 md:top-8 w-6 h-6 md:w-8 md:h-8 bg-white border-4 border-brand-orange rounded-full z-10 shadow-sm" />
              
              {/* Company Info - Left side (1/3 width) */}
              <motion.div 
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="md:col-span-1 md:pr-8 flex md:justify-end"
              >
                <Link 
                  to={`/experience/${exp.id}`}
                  className="flex items-center gap-4 text-left group cursor-pointer"
                >
                  {/* Logo Placeholder */}
                  <div className="w-12 h-12 bg-brand-gray rounded-xl flex items-center justify-center border border-gray-100 group-hover:bg-brand-orange/10 transition-colors shadow-sm shrink-0">
                    <Building2 className="text-brand-orange transition-transform group-hover:scale-105" size={24} />
                  </div>
                  <div className="space-y-0.5">
                    <h3 className="text-2xl font-bold group-hover:text-brand-orange transition-colors">{exp.company}</h3>
                    <p className="text-brand-orange md:text-gray-500 font-bold md:font-medium">{exp.date}</p>
                  </div>
                </Link>
              </motion.div>

              {/* Role Info - Right side (2/3 width) */}
              <motion.div 
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="md:col-span-2 space-y-4 text-left w-full md:pl-12"
              >
                <Link 
                  to={`/experience/${exp.id}`}
                  className="block group cursor-pointer"
                >
                  <div className="flex flex-col gap-4 w-full max-w-xl">
                    <div className="flex items-center justify-between gap-4 w-full">
                      <h4 className="text-2xl md:text-3xl font-bold group-hover:text-brand-orange transition-colors">
                        {exp.title}
                      </h4>
                      <span className="text-brand-orange font-bold text-sm tracking-widest uppercase flex items-center gap-1 hover:gap-2 transition-all shrink-0">
                        查看更多 <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                      </span>
                    </div>
                    <p className="text-gray-500 text-base md:text-lg leading-relaxed w-full">
                      {exp.desc}
                    </p>
                  </div>
                </Link>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
