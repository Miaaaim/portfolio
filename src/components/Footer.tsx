import { ArrowUpRight } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-brand-dark text-white rounded-t-[4rem] px-6 pt-24 pb-12 overflow-hidden relative">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="max-w-xl space-y-8">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-brand-orange rounded-full flex items-center justify-center font-bold text-lg uppercase">M</div>
            <span className="font-bold text-3xl tracking-tight uppercase">Mia</span>
          </div>
          <p className="text-gray-400 text-lg leading-relaxed max-w-sm">
            有绝佳的项目想法？ 让我们聊聊
          </p>

          <div className="pt-2">
            <button className="bg-brand-orange text-white px-8 py-3 rounded-full font-bold flex items-center gap-2 w-fit hover:pr-10 transition-all group">
              联系我 <ArrowUpRight size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
      
      {/* Visual background details */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[150%] opacity-20 pointer-events-none">
         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-orange/10 blur-[150px] rounded-full" />
      </div>
    </footer>
  );
}
