import { motion } from 'motion/react';
import { ArrowUpRight, ArrowRight, Building2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const experiences = [
  {
    id: 'lingkang',
    company: '领康科技',
    date: '2024.03 – 2025.07',
    title: '资深产品经理',
    desc: '负责智慧校园体育SaaS规划迭代，覆盖管理系统、大屏及学生端App/小程序，完成教育局-学校-服务团队分层建模与流程标准化；系统落地1500+学校、150万学生，支撑千万次体测数字化，学生端注册用户增长至20万+。'
  },
  {
    id: 'netease',
    company: '网易',
    date: '2021.09 – 2023.11',
    title: '高级产品经理',
    desc: '负责企业服务CRM增长，重构注册路径、落地页与企微触达，建立A/B测试与标签分群体系，推动自动分层和个性化运营闭环；注册转化率提升12.7%，满意度提升12%，负反馈率下降80%，页面产出效率提升200%。'
  },
  {
    id: 'jielibang',
    company: '接力棒科技',
    date: '2018.11 – 2021.08',
    title: '产品经理',
    desc: '负责教育CRM，主导“获客-转化-留存”全链路，搭建获客系统与数据平台，打通地推、试听、转介绍等渠道；地推用户量提升30%，3个月采集表单20万+。并推进家校互通App，提升家长活跃、续费与转介绍。'
  },
  {
    id: 'eleme',
    company: '饿了么',
    date: '2015.07 – 2018.10',
    title: '产品运营',
    desc: '负责物流核心产品，联动多团队搭建定位报备、异常地址库与反查闭环，系统治理定位偏差和履约问题；地址准确率96.7%升至99.2%，负反馈58%降至13%，骑手着装率60%升至95%，每周节省2人力。'
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
