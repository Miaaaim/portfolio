import { motion } from 'motion/react';
import { Send, Mail } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6 max-w-7xl mx-auto">
      <div className="bg-white rounded-[4rem] border-2 border-gray-100 p-12 md:p-24 text-center space-y-12 shadow-2xl shadow-brand-orange/5">
        <div className="space-y-6 max-w-3xl mx-auto">
          <h2 className="text-5xl md:text-7xl font-bold leading-tight">
            有绝佳的项目想法？ <span className="text-brand-orange uppercase">让我们聊聊</span>
          </h2>
        </div>

        <div className="max-w-xl mx-auto relative group">
          <div className="absolute left-6 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-brand-orange transition-colors">
            <Mail size={24} />
          </div>
          <input 
            type="email" 
            placeholder="输入您的电子邮箱"
            className="w-full bg-brand-gray border-none rounded-full py-6 pl-14 pr-32 text-lg focus:ring-2 focus:ring-brand-orange outline-none transition-all shadow-inner"
          />
          <button className="absolute right-2 top-2 bottom-2 bg-brand-orange text-white px-8 rounded-full font-bold flex items-center gap-2 hover:bg-zinc-900 transition-all">
            发送提议 <Send size={20} />
          </button>
        </div>

        <div className="flex flex-wrap justify-center gap-8 pt-8">
           {[
             { label: '4.9/5 综合好评', icon: '⭐' },
             { label: '25+ 个行业奖项', icon: '🏆' },
             { label: '资深产品经理', icon: '🎨' }
           ].map((item, i) => (
             <div key={i} className="flex items-center gap-2 text-gray-500 font-semibold">
               <span>{item.icon}</span>
               <span>{item.label}</span>
             </div>
           ))}
        </div>
      </div>
    </section>
  );
}
