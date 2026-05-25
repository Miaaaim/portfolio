import { motion } from 'motion/react';
import { ArrowUpRight, ArrowRight, Building2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const experiences = [
  {
    id: 'lingkang',
    company: '领康科技',
    date: '2024.03 – 2025.07',
    title: '资深产品经理',
    desc: '负责智慧校园体育SaaS整体规划与迭代，覆盖业务管理系统、学校管理系统、数据大屏及学生端App/小程序。围绕教育局、学校、服务团队三类角色完成分层建模，推进多端协同与流程标准化，支撑平台规模化落地。成果上，系统覆盖1500+学校、150万学生，支撑千万次体测数字化；针对学生端优化“查询-查看-训练-留存”链路，推动注册用户增长至20万+。同时拓展体培机构合作与幼儿园场景，提升交付效率并降低运营成本。'
  },
  {
    id: 'netease',
    company: '网易',
    date: '2021.09 – 2023.11',
    title: '高级产品经理',
    desc: '负责企业服务CRM增长运营，围绕“线索培育-触达-转化-留存”搭建增长机制并持续优化。通过重构注册路径、落地页内容和企微触达策略，提升获客效率与用户体验；建立A/B测试与标签分群体系，基于行业、规模、行为和意向信号做人群细分，实现实验到复盘的增长闭环，推动自动分层与个性化触达。核心结果：注册转化率提升12.7%，满意度提升12%，负面反馈率下降80%；并建设组件化活动后台，使页面产出效率提升200%、运营周期缩短30%。'
  },
  {
    id: 'jielibang',
    company: '接力棒科技',
    date: '2018.11 – 2021.08',
    title: '产品经理',
    desc: '负责教育培训机构CRM产品，主导“获客-转化-留存”全链路设计，推动营销与销售协同。独立规划并上线CRM获客系统与数据平台，整合地推、试听、线上转介绍等多渠道，持续迭代投放和线索收集效率，支撑机构规模化增长。关键成果包括地推活动用户量提升30%，3个月累计采集表单20万+。同时推动家校互通App与后台建设，通过内容社区、消息互动、作业管理提升家长活跃与口碑传播，强化续费与转介绍增长。'
  },
  {
    id: 'eleme',
    company: '饿了么',
    date: '2015.07 – 2018.10',
    title: '产品运营',
    desc: '负责物流侧核心产品，围绕“定位准确+履约效率”推进系统优化。联动用户端、手淘外卖与服务端团队，建设定位报备、异常地址库、图商切换、反查等能力，形成监控与闭环机制，系统性解决定位偏差导致的履约问题。结果上，用户地址准确率由96.7%提升到99.2%，相关负反馈从58%降至13%；同时优化骑手管理与调度策略，着装率从60%提升到95%，每周节省2人力并降低抽检成本。'
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
