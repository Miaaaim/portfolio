import { motion } from 'motion/react';
import { Facebook, Instagram, Linkedin, Twitter, Youtube, Send, ArrowUpRight } from 'lucide-react';

export default function Footer() {
  const navigationLinks = [
    { label: '首页', id: 'home' },
    { label: '项目经验', id: 'service' },
    { label: '工作经验', id: 'resume' },
    { label: 'AI项目', id: 'portfolio' },
    { label: '联系方式', id: 'contact' }
  ];

  const contactInfo = ['+20 11 43 63 73 41', 'fawzisayed1209@gmail.com', 'fawziuiux.com'];

  return (
    <footer className="bg-brand-dark text-white rounded-t-[4rem] px-6 pt-24 pb-12 overflow-hidden relative">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-16 items-start relative z-10">
        
        {/* Brand Section */}
        <div className="md:col-span-4 space-y-8">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-brand-orange rounded-full flex items-center justify-center font-bold text-lg uppercase">M</div>
            <span className="font-bold text-3xl tracking-tight uppercase">Mia</span>
          </div>
          <p className="text-gray-400 text-lg leading-relaxed max-w-sm">
            专注于 B 端产品与 AI 领域的落地实践，致力于通过优秀的产品设计为企业创造真实价值。
          </p>
          <div className="flex gap-4">
             {[Facebook, Twitter, Youtube, Linkedin, Instagram].map((Icon, i) => (
               <a key={i} href="#" className="w-10 h-10 bg-zinc-900 rounded-full flex items-center justify-center hover:bg-brand-orange transition-colors border border-white/5">
                 <Icon size={18} />
               </a>
             ))}
          </div>
        </div>

        {/* Links Sections */}
        <div className="md:col-span-4 grid grid-cols-2 gap-8">
          <div className="space-y-6">
            <h4 className="text-xl font-bold text-white uppercase tracking-widest">导航</h4>
            <ul className="space-y-4">
              {navigationLinks.map((link) => (
                <li key={link.id}>
                  <a href={`#${link.id}`} className="text-gray-400 hover:text-brand-orange transition-colors">{link.label}</a>
                </li>
              ))}
            </ul>
          </div>
          <div className="space-y-6">
            <h4 className="text-xl font-bold text-white uppercase tracking-widest">联系方式</h4>
            <ul className="space-y-4">
              {contactInfo.map((info) => (
                <li key={info} className="text-gray-400">{info}</li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="md:col-span-4 space-y-8">
           <h4 className="text-xl font-bold uppercase tracking-widest">获取最新动态</h4>
           <div className="relative group">
              <input 
                type="text" 
                placeholder="您的电子邮箱"
                className="w-full bg-zinc-900 border-none rounded-full py-4 px-6 focus:ring-1 focus:ring-brand-orange outline-none transition-all pr-14"
              />
              <button className="absolute right-1 top-1 bottom-1 bg-brand-orange text-white w-10 h-10 rounded-full flex items-center justify-center hover:bg-white hover:text-brand-dark transition-all">
                <Send size={16} />
              </button>
           </div>
           
           <div className="pt-8">
              <button className="bg-brand-orange text-white px-8 py-3 rounded-full font-bold flex items-center gap-2 w-fit hover:pr-10 transition-all group">
                联系我 <ArrowUpRight size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
           </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto pt-16 mt-16 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-gray-500">
         <p>版权所有 © 2024 Mia. 保留所有权利。</p>
         <div className="flex gap-8">
            <a href="#" className="hover:text-white">使用条款</a>
            <a href="#" className="hover:text-white">隐私政策</a>
         </div>
      </div>
      
      {/* Visual background details */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[150%] opacity-20 pointer-events-none">
         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-orange/10 blur-[150px] rounded-full" />
      </div>
    </footer>
  );
}
