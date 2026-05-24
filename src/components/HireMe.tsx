import { motion } from 'motion/react';
import { resolveAssetUrl } from '../assetUrl';
import { useModal } from '../context/ModalContext';

export default function HireMe() {
  const { openModal } = useModal();
  return (
    <section className="py-24 px-6 max-w-7xl mx-auto">
      <div className="bg-brand-gray rounded-[4rem] overflow-hidden grid grid-cols-1 lg:grid-cols-2 gap-12 p-8 md:p-20 items-center">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative aspect-square md:aspect-auto md:h-[500px] rounded-[3rem] overflow-hidden"
        >
            <img 
              src={resolveAssetUrl('src/assets/images/hero-portrait.png')} 
              alt="联系 Mia" 
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
              referrerPolicy="no-referrer"
           />
           <div className="absolute inset-0 bg-brand-orange/10 mix-blend-multiply" />
        </motion.div>

        <div className="space-y-8">
           <div className="space-y-6">
             <h2 className="text-5xl md:text-6xl font-bold leading-tight">
               为什么 <span className="text-brand-orange">选择我？</span>
             </h2>
             <p className="text-gray-500 text-xl leading-relaxed">
               如果你希望招聘一位能把想法真正落地的产品经理，我会是合适的人选。
             </p>
           </div>

           <div className="space-y-6">
              <h3 className="text-2xl font-bold text-brand-dark">我的核心价值</h3>
              <ul className="space-y-4">
                {[
                  { title: "目标导向", desc: "能从用户价值与业务目标出发，做出清晰判断。" },
                  { title: "方案落地", desc: "擅长把复杂需求拆解成团队可执行方案，推动研发、设计、测试高效协作。" },
                  { title: "问题闭环", desc: "面对线上问题快速响应，持续跟进到闭环，确保结果可衡量、可复盘。" },
                  { title: "团队协同", desc: "擅长组织协作与活动，提升团队凝聚力与执行节奏。" },
                ].map((item, idx) => (
                  <li key={idx} className="flex gap-4">
                    <span className="text-brand-orange font-bold font-mono">0{idx + 1}.</span>
                    <div>
                      <span className="font-bold text-brand-dark">{item.title}</span>：
                      <span className="text-gray-500">{item.desc}</span>
                    </div>
                  </li>
                ))}
              </ul>
           </div>

           <button 
            onClick={() => openModal()}
            className="bg-brand-dark text-white px-12 py-5 rounded-full font-bold text-lg hover:bg-brand-orange transition-colors"
          >
              联系我
           </button>
        </div>
      </div>
    </section>
  );
}
