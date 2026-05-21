import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const projects = [
  {
    id: 'ai-apps',
    title: 'APP/网页',
    category: 'AI Product / 多端协同',
    image: '/src/assets/images/ui_project_1_1779087714360.png',
    desc: '包含 AI 习惯追踪工具与心理健康辅助平台，探索人工智能在个人成长与情绪健康领域的深度应用。'
  },
  {
    id: 'ai-agent',
    title: 'Agent',
    category: 'AI Automation / 智能体',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2000&auto=format&fit=crop',
    desc: '定制化的 AI 智能体，能够理解复杂指令并自主完成跨平台的特定任务流。'
  },
  {
    id: 'ai-skills',
    title: '提示词',
    category: 'AI Logic / 结构化能力',
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2000&auto=format&fit=crop',
    desc: '基于 AI 大模型能力构建结构化 Prompt / Skills 能力库，进行提示词与 Skills 的收集、设计、调优及场景化封装，能够结合业务需求持续迭代 AI 工作流，提升内容生成质量、输出稳定性与使用效率。'
  },
  {
    id: 'ai-image',
    title: '图片',
    category: 'Generative AI / 图像生成',
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2000&auto=format&fit=crop',
    desc: '使用 Image2、Stable Diffusion（SD）等 AI 绘图工具进行视觉内容创作，可独立完成文章配图、宣传海报、社交头像等设计制作，具备良好的审美能力与创意表达能力。'
  }
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-24 px-6 max-w-7xl mx-auto space-y-16">
      <div className="flex flex-col md:flex-row justify-between items-end gap-8">
        <div className="space-y-4">
          <h2 className="text-6xl font-bold">
            我的 <span className="text-brand-orange">AI项目</span>
          </h2>
          <p className="text-gray-500 text-lg max-w-xl">
            深耕 AI 教育与 B 端增长领域，致力于通过数据驱动与技术创新解决真实业务痛点。
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
          >
            <Link to={`/project/${project.id}`} className="block group">
              <div className="space-y-4">
                <div className="relative rounded-[2rem] overflow-hidden shadow-md border border-gray-100 aspect-[4/3]">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-4 right-4 w-10 h-10 bg-white/90 backdrop-blur rounded-full flex items-center justify-center text-brand-dark group-hover:bg-brand-orange group-hover:text-white transition-all shadow-sm">
                    <ArrowUpRight size={20} />
                  </div>
                </div>
                
                <div className="px-1 space-y-1.5">
                  <span className="inline-block px-3 py-0.5 rounded-full bg-brand-orange/10 text-brand-orange font-bold text-[9px] tracking-widest uppercase">
                    {project.category}
                  </span>
                  <h3 className="text-xl font-bold group-hover:text-brand-orange transition-colors truncate">
                    {project.title}
                  </h3>
                  <p className="text-gray-500 text-xs leading-relaxed line-clamp-2">
                    {project.desc}
                  </p>
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
