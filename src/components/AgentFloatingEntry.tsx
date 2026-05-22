import { useState } from 'react';
import { Bot, ExternalLink, X } from 'lucide-react';

const AGENT_URL = 'https://www.coze.cn/store/agent/7629182401524236298?bot_id=true';
const ROBOT_IMAGE =
  'https://api.dicebear.com/9.x/bottts/svg?seed=mia-agent&backgroundColor=b6e3f4,c0aede,d1d4f9';

export default function AgentFloatingEntry() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="fixed right-4 bottom-5 sm:right-6 sm:bottom-6 z-[90] w-16 h-16 sm:w-[4.5rem] sm:h-[4.5rem] rounded-full shadow-2xl ring-4 ring-white/70 overflow-hidden hover:scale-105 transition-transform duration-200 focus:outline-none focus:ring-4 focus:ring-brand-orange/40"
        aria-label="打开 AI 机器人"
      >
        <img
          src={ROBOT_IMAGE}
          alt="AI 机器人"
          className="w-full h-full object-cover bg-[#F2F7FF]"
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.style.display = 'none';
            const fallback = target.nextElementSibling as HTMLSpanElement | null;
            if (fallback) fallback.style.display = 'flex';
          }}
        />
        <span className="hidden w-full h-full items-center justify-center bg-brand-dark text-white">
          <Bot size={30} />
        </span>
      </button>

      {open && (
        <div className="fixed inset-0 z-[110] bg-black/60 backdrop-blur-sm p-3 sm:p-6">
          <div className="relative w-full h-full max-w-5xl mx-auto bg-white rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl border border-white/20">
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="absolute top-3 right-3 z-10 w-10 h-10 rounded-full bg-white/95 border border-gray-200 text-gray-700 hover:bg-brand-orange hover:text-white transition-colors flex items-center justify-center"
              aria-label="关闭弹窗"
            >
              <X size={18} />
            </button>

            <div className="h-full flex flex-col">
              <div className="h-14 border-b border-gray-100 px-5 flex items-center justify-between gap-3 bg-white/95">
                <p className="text-sm sm:text-base font-semibold text-brand-dark truncate">AI 助手</p>
                <a
                  href={AGENT_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-brand-orange font-semibold inline-flex items-center gap-1 hover:opacity-80"
                >
                  新窗口打开
                  <ExternalLink size={14} />
                </a>
              </div>

              <iframe
                src={AGENT_URL}
                title="Coze Agent"
                className="w-full flex-1 border-0"
                allow="clipboard-read; clipboard-write; microphone; camera"
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}