import { motion } from 'motion/react';
import { Star, ArrowUpRight, Quote, Download, Send, Github, MessageCircle, X } from 'lucide-react';
import { useModal } from '../context/ModalContext';
import { useEffect, useState } from 'react';

const TYPING_TEXTS = ['产品经理', '产品运营', 'vibe coder'];

export default function Hero() {
  const { openModal } = useModal();
  const [showWechat, setShowWechat] = useState(false);
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [cursorVisible, setCursorVisible] = useState(true);

  useEffect(() => {
    const blinkTimer = window.setInterval(() => {
      setCursorVisible((prev) => !prev);
    }, 500);

    return () => window.clearInterval(blinkTimer);
  }, []);

  useEffect(() => {
    const currentText = TYPING_TEXTS[currentTextIndex];
    let timer: number | undefined;

    if (!isDeleting && displayText.length < currentText.length) {
      timer = window.setTimeout(() => {
        setDisplayText(currentText.slice(0, displayText.length + 1));
      }, 120);
    } else if (!isDeleting && displayText.length === currentText.length) {
      timer = window.setTimeout(() => {
        setIsDeleting(true);
      }, 1800);
    } else if (isDeleting && displayText.length > 0) {
      timer = window.setTimeout(() => {
        setDisplayText(currentText.slice(0, displayText.length - 1));
      }, 80);
    } else if (isDeleting && displayText.length === 0) {
      timer = window.setTimeout(() => {
        setIsDeleting(false);
        setCurrentTextIndex((prev) => (prev + 1) % TYPING_TEXTS.length);
      }, 200);
    }

    return () => {
      if (timer !== undefined) {
        window.clearTimeout(timer);
      }
    };
  }, [currentTextIndex, displayText, isDeleting]);

  return (
    <section id="home" className="pt-32 pb-20 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Left Side: Text and Quote */}
        <div className="lg:col-span-4 space-y-12">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="flex items-center gap-4">
               <div className="relative inline-block">
                 <span className="bg-brand-gray px-4 py-2 rounded-full text-sm font-medium border border-gray-200">Hello!</span>
                 <motion.div 
                   animate={{ rotate: [0, 10, 0] }}
                   transition={{ duration: 2, repeat: Infinity }}
                   className="absolute -top-6 -right-6 text-brand-orange"
                 >
                   <ArrowUpRight size={24} />
                 </motion.div>
               </div>
            </div>
            
            <h1 className="text-6xl md:text-8xl font-bold leading-tight tracking-tight">
              I'm <span className="text-brand-orange">Mia</span>, <br />
              <span className="text-4xl md:text-6xl inline-flex items-center min-h-[1.25em] min-w-[10ch]">
                <span>{displayText || '\u00A0'}</span>
                <span
                  aria-hidden="true"
                  className={`ml-1 transition-opacity duration-100 ${cursorVisible ? 'opacity-100' : 'opacity-0'}`}
                >
                  |
                </span>
              </span>
            </h1>
          </motion.div>
        </div>

        {/* Center: Image */}
        <div className="lg:col-span-4 flex justify-center relative">
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative z-10 w-full aspect-[4/5] rounded-[4rem] overflow-hidden bg-brand-orange/10 border-8 border-white shadow-2xl"
          >
            <img 
              src="/src/assets/images/hero_portrait_1779087699645.png" 
              alt="Jenny Portrait" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </motion.div>
          
          {/* Decorative circles */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-brand-orange/5 rounded-full -z-1" />
          
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-4 items-center whitespace-nowrap">
             <button 
              onClick={openModal}
              className="bg-brand-orange text-white px-12 py-4 rounded-full font-bold shadow-lg hover:scale-105 transition-transform border border-brand-orange flex items-center gap-2"
            >
               <Send size={20} />
               联系我
             </button>
          </div>
        </div>

        {/* Right Side: Stats */}
        <div className="lg:col-span-4 flex flex-col justify-between items-end space-y-12">
           <motion.div 
             initial={{ opacity: 0, x: 50 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             className="text-right"
           >
             <div className="flex gap-1 justify-end text-brand-orange mb-2">
                {[...Array(5)].map((_, i) => <Star key={i} size={20} fill="currentColor" />)}
             </div>
             <div className="text-6xl font-bold">10年+</div>
             <div className="text-gray-400 text-lg uppercase tracking-widest font-bold">行业经验</div>
           </motion.div>

           <div className="space-y-4">
              <div className="w-16 h-1 bg-brand-orange ml-auto" />
              <div className="flex flex-wrap justify-end gap-2">
                {['SaaS', 'CRM', '企业数字化', '增长黑客', '后台', 'APP', '小程序', '数据分析'].map((tag) => (
                  <span key={tag} className="px-3 py-1 rounded-full bg-brand-orange/10 text-brand-orange text-sm font-medium border border-brand-orange/30">
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex justify-end gap-6 pt-2">
                <a 
                  href="https://github.com/FriesI23/mhabit" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-brand-orange hover:opacity-80 transition-all"
                  title="GitHub"
                >
                  <Github size={24} />
                </a>
                <button 
                  onClick={() => setShowWechat(true)}
                  className="text-brand-orange hover:opacity-80 transition-all"
                  title="WeChat"
                >
                  <MessageCircle size={24} />
                </button>
              </div>
           </div>

           {/* WeChat Modal */}
           {showWechat && (
             <div 
               className="fixed inset-0 z-[100] flex items-center justify-center bg-brand-dark/80 backdrop-blur-sm p-6"
               onClick={() => setShowWechat(false)}
             >
               <motion.div 
                 initial={{ scale: 0.9, opacity: 0 }}
                 animate={{ scale: 1, opacity: 1 }}
                 className="bg-white p-8 rounded-3xl max-w-sm w-full relative"
                 onClick={e => e.stopPropagation()}
               >
                 <button 
                   onClick={() => setShowWechat(false)}
                   className="absolute top-4 right-4 text-gray-400 hover:text-brand-dark transition-colors"
                 >
                   <X size={24} />
                 </button>
                 <div className="text-center space-y-6">
                   <h3 className="text-2xl font-bold text-brand-dark">扫码添加微信</h3>
                   <div className="aspect-square bg-gray-50 rounded-2xl p-4 border-2 border-gray-100">
                     <img 
                       src="/src/assets/images/wechat_qr.png" 
                       alt="WeChat QR Code" 
                       className="w-full h-full object-contain"
                       referrerPolicy="no-referrer"
                     />
                   </div>
                   <p className="text-gray-500 text-sm">
                     如果您有任何想法或建议，欢迎微信沟通
                   </p>
                 </div>
               </motion.div>
             </div>
           )}
        </div>

      </div>
    </section>
  );
}
