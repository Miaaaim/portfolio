import { motion } from 'motion/react';
import { ArrowLeft, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

const steps = [
  {
    title: '以用户为中心的架构',
    desc: '我们从绘制用户旅程开始。每一个点击、滚动和交互都有其目的，确保逻辑顺畅并达成转化。我们优先考虑易用性和直观导航，确保每位用户都能轻松上手。',
    image: '/src/assets/images/service-step-web-design-01.png',
    features: ['站点规划', '用户画像研究', '原型规划']
  },
  {
    title: '产品视觉与商业身份',
    desc: '您的产品是品牌的数字化面孔。我们打造独特的视觉身份，与您的受众产生共鸣。通过精选排版、配色与图像，讲述超越文字的商业故事。',
    image: '/src/assets/images/service-step-web-design-02.png',
    features: ['排版系统', '配色标准', '品牌视觉对齐']
  },
  {
    title: '多端适配与流畅性',
    desc: '在多设备世界中，一致性是关键。我们的设计采用多端协同思维，确保无论是在 PC 端后台还是移动端 App 上，体验依然卓越且连贯。',
    image: '/src/assets/images/service-step-web-design-03.png',
    features: ['流式网格布局', '断点优化', '触控交互精准化']
  },
  {
    title: '性能与业务优化',
    desc: '美感不应成为负担。我们优化每一个像素和每一个业务组件，确保极速加载与流畅响应。高性能的产品能留住用户，并显著提升业务转化率。',
    image: '/src/assets/images/service-step-web-design-04.png',
    features: ['核心指标关注', '流程效率优化', '数据漏斗监控']
  }
];

export default function ServiceDetail() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main className="pt-32 pb-20 overflow-hidden">
        {/* Breadcrumb / Back Button */}
        <div className="max-w-7xl mx-auto px-6 mb-12">
          <Link to="/" className="inline-flex items-center gap-2 text-gray-400 hover:text-brand-orange font-medium transition-colors group">
            <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
            返回首页
          </Link>
        </div>

        {/* Hero Section of Detail Page */}
        <section className="max-w-7xl mx-auto px-6 mb-32">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-8 text-center max-w-4xl mx-auto"
          >
            <span className="bg-brand-orange/10 text-brand-orange px-6 py-2 rounded-full text-sm font-bold uppercase tracking-widest">
              项目经验详情
            </span>
            <h1 className="text-6xl md:text-8xl font-black text-brand-dark tracking-tighter italic uppercase text-balance">
              专业的 <span className="text-brand-orange">B端产品</span> 解决方案
            </h1>
            <p className="text-xl md:text-2xl text-gray-500 leading-relaxed max-w-2xl mx-auto">
              将复杂的需求转化为简洁、高效且具备商业价值的数字化产品体验。
            </p>
          </motion.div>
        </section>

        {/* Structured Content Steps */}
        <div className="space-y-40 px-6">
          {steps.map((step, index) => (
            <section key={index} className="max-w-7xl mx-auto">
              <div className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center ${index % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
                
                {/* Text Content */}
                <motion.div 
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className={`space-y-8 ${index % 2 !== 0 ? 'lg:order-2' : ''}`}
                >
                  <div className="flex items-center gap-4">
                    <span className="text-8xl font-black text-brand-orange/10 italic">0{index + 1}</span>
                    <h2 className="text-4xl md:text-5xl font-bold text-brand-dark">{step.title}</h2>
                  </div>
                  
                  <p className="text-lg text-gray-500 leading-relaxed">
                    {step.desc}
                  </p>

                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {step.features.map((feature, fIndex) => (
                      <li key={fIndex} className="flex items-center gap-3 text-brand-dark font-semibold">
                        <CheckCircle2 size={24} className="text-brand-orange" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <button className="bg-brand-dark text-white px-8 py-4 rounded-full font-bold hover:bg-brand-orange transition-colors">
                    深入了解更多
                  </button>
                </motion.div>

                {/* Image Section */}
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  className={`relative aspect-square md:aspect-[4/3] rounded-[3rem] overflow-hidden shadow-2xl ${index % 2 !== 0 ? 'lg:order-1' : ''}`}
                >
                  <img 
                    src={step.image} 
                    alt={step.title} 
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-brand-orange/5 mix-blend-multiply" />
                </motion.div>
              </div>
            </section>
          ))}
        </div>

        {/* Final CTA */}
        <section className="max-w-7xl mx-auto px-6 mt-40">
           <div className="bg-brand-dark rounded-[4rem] p-12 md:p-24 text-center text-white relative overflow-hidden">
              <div className="relative z-10 space-y-8">
                <h2 className="text-5xl md:text-7xl font-bold leading-tight">
                   准备好打造您的 <br /> <span className="text-brand-orange uppercase">理想产品了吗？</span>
                </h2>
                <button className="bg-brand-orange text-white px-12 py-5 rounded-full font-bold text-xl hover:bg-white hover:text-brand-dark transition-all scale-100 hover:scale-110">
                   开始合作
                </button>
              </div>
              <div className="absolute top-0 right-0 w-96 h-96 bg-brand-orange/20 blur-[150px] -translate-y-1/2 translate-x-1/2" />
           </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}
