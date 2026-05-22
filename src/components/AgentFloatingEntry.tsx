import { Bot } from 'lucide-react';
import catRobot from '../assets/images/cat_robot.png';
import { useModal } from '../context/ModalContext';

export default function AgentFloatingEntry() {
  const { openAgentModal } = useModal();

  return (
    <>
      <button
        type="button"
        onClick={openAgentModal}
        className="fixed right-4 bottom-5 sm:right-6 sm:bottom-6 z-[90] flex flex-col items-center gap-2 focus:outline-none"
        aria-label="打开 AI 机器人"
      >
        <span className="w-16 h-16 sm:w-[4.5rem] sm:h-[4.5rem] rounded-full shadow-2xl ring-4 ring-white/70 overflow-hidden hover:scale-105 transition-transform duration-200 focus:outline-none focus:ring-4 focus:ring-brand-orange/40">
          <img
            src={catRobot}
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
        </span>
        <span className="px-2 py-1 text-[11px] sm:text-xs font-semibold text-white bg-brand-dark/85 rounded-full whitespace-nowrap shadow-lg backdrop-blur-sm">
          Mia分身 点我咨询
        </span>
      </button>
    </>
  );
}