import { motion } from 'motion/react';

const skills = ['产品策略', 'AI落地', '需求分析', '数据驱动', '协同沟通', 'B端SaaS', '原型规划'];

export default function SkillsTicker() {
  return (
    <div className="bg-brand-orange py-6 overflow-hidden border-y-4 border-brand-dark">
      <motion.div 
        animate={{ x: [0, -1400] }}
        transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
        className="flex whitespace-nowrap gap-16 items-center"
      >
        {[...skills, ...skills, ...skills].map((skill, i) => (
          <div key={i} className="flex items-center gap-8">
            <span className="text-3xl font-black text-white uppercase tracking-tighter italic">
              {skill}
            </span>
            <div className="w-4 h-4 bg-white rotate-45" />
          </div>
        ))}
      </motion.div>
    </div>
  );
}
