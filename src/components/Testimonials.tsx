import { motion, AnimatePresence } from 'motion/react';
import { Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState, useEffect, useCallback } from 'react';
import { resolveAssetUrl } from '../assetUrl';

const testimonials = [
  {
    name: '潘同学',
    role: '前端开发',
    image: '/portfolio/src/assets/images/external/dicebear-seed-Pan.svg',
    text: '合作下来印象最深的就是她的文档。不是那种流于格式的东西，而是真的能把你想了解的问题一次说透。背景是什么、为什么这样决策、哪些边界需要注意、上线后要关注什么等等。这样研发测试运营拿到手就能对需求有清晰了解，使得评审更加高效。'
  },
  {
    name: '陈同学',
    role: '产品经理',
    image: '/portfolio/src/assets/images/external/dicebear-seed-Chen.svg',
    text: '她会及时处理问题反馈。比如线上突然出了状况，第一时间她就把人拉齐、分清轻重，然后就是实时跟进直到问题解决。要的就是这种有始有终、虽然问题紧急但依然保持问题处理节奏的感觉。'
  },
  {
    name: '江同学',
    role: '测试工程师',
    image: '/portfolio/src/assets/images/external/dicebear-seed-Jiang.svg',
    text: '虽然产品岗，但她经常主动扛起项目协调的活。跨部门合作最怕的就是信息不对称，但和她一起的项目从来不会这样。她会提前想到各个环节可能的坑，主动协调资源，关键时刻能亲自顶上。这才是真的协作感觉。'
  },
  {
    name: '张同学',
    role: '高级设计师',
    image: '/portfolio/src/assets/images/external/dicebear-seed-Zhang.svg',
    text: '学习能力真的强。新东西她总是主动去试，然后快速总结成大家能用的方法，分享给团队。公司很多现在用的流程、工具优化，都是她先吃螃蟹，走通了再推给大家的。这种人在团队里特别是个加号。'
  },
  {
    name: '封同学',
    role: '后端开发',
    image: '/portfolio/src/assets/images/external/dicebear-seed-Feng.svg',
    text: '她特别会组织大家一起运动。这不仅让大家有机会一起健身减肥，还在过程中增进了感情、缓解了工作压力。她本身精力特别稳定，项目再紧张也能保持节奏，这样的正能量很容易感染整个团队，让大家都想跟着她保持健康的生活状态。'
  },
  {
    name: '龙同学',
    role: '运营专家',
    image: '/portfolio/src/assets/images/external/dicebear-seed-Long.svg',
    text: '她特别会"带气氛"。复盘会、跨部门头脑风暴、团队活动，她都能把大家调动起来，让不同角色的人都愿意参与。共事下来就是舒服，工作效率高，人的感受也好。'
  }
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const next = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  }, []);

  const prev = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  }, []);

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [next, isPaused]);

  return (
    <section className="py-24 px-6 bg-brand-dark text-white rounded-[4rem] mx-4 mb-20 overflow-hidden relative">
      <div className="max-w-7xl mx-auto space-y-16 text-center relative z-10">
        <div className="space-y-4 max-w-2xl mx-auto">
          <h2 className="text-5xl font-bold leading-tight">
            同事对我的 <span className="text-brand-orange">评价</span>
          </h2>
          <p className="text-gray-400 text-lg">
            在多维度的协作中，我不仅追求业务的成功，更致力于提升团队的整体协作效率与幸福感。
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto h-[400px] md:h-[300px] flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div 
              key={currentIndex}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
              className="bg-zinc-900/50 backdrop-blur border border-white/5 p-8 md:p-12 rounded-[3rem] text-left space-y-8 relative group hover:border-brand-orange/30 transition-all w-full"
            >
              <Quote className="absolute top-8 right-8 text-brand-orange opacity-20" size={60} />
              
              <div className="flex items-center gap-6">
                 <img 
                   src={resolveAssetUrl(testimonials[currentIndex].image)} 
                   alt={testimonials[currentIndex].name} 
                   className="w-20 h-20 rounded-2xl object-cover border-2 border-brand-orange/30 bg-white/5"
                   referrerPolicy="no-referrer"
                 />
                 <div>
                    <h4 className="font-bold text-2xl">{testimonials[currentIndex].name}</h4>
                    <p className="text-brand-orange font-medium">{testimonials[currentIndex].role}</p>
                 </div>
              </div>

              <p className="text-gray-300 leading-relaxed text-xl italic font-light">
                "{testimonials[currentIndex].text}"
              </p>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Arrows */}
          <button 
            onClick={prev}
            className="absolute -left-4 md:-left-16 p-3 rounded-full bg-white/5 border border-white/10 hover:bg-brand-orange hover:text-white transition-all z-20 hidden md:block"
          >
            <ChevronLeft size={24} />
          </button>
          <button 
            onClick={next}
            className="absolute -right-4 md:-right-16 p-3 rounded-full bg-white/5 border border-white/10 hover:bg-brand-orange hover:text-white transition-all z-20 hidden md:block"
          >
            <ChevronRight size={24} />
          </button>
        </div>

        {/* Indicators */}
        <div className="flex justify-center gap-3">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentIndex(i)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                currentIndex === i 
                  ? 'bg-brand-orange w-8' 
                  : 'bg-white/20 hover:bg-white/40'
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </div>
      
      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-orange/5 blur-[120px] rounded-full" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-zinc-600/10 blur-[120px] rounded-full" />
    </section>
  );
}
