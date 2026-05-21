import { motion } from 'motion/react';
import { Link, useLocation } from 'react-router-dom';
import { useModal } from '../context/ModalContext';

export default function Header() {
  const { openModal } = useModal();
  const location = useLocation();
  const isHome = location.pathname === '/';
  const navItems = [
    { label: '首页', id: 'home' },
    { label: '项目经验', id: 'service' },
    { label: '工作经验', id: 'resume' },
    { label: 'AI项目', id: 'portfolio' },
    { label: '联系方式', id: 'contact' },
  ];

  return (
    <header className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-6xl">
      <motion.nav 
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="bg-brand-dark/90 backdrop-blur-md rounded-full px-8 py-4 flex items-center justify-between text-white border border-white/10"
      >
        <Link to="/" className="flex items-center gap-2">
          <div className="w-8 h-8 bg-brand-orange rounded-full flex items-center justify-center font-bold text-xs uppercase">M</div>
          <span className="font-bold text-xl tracking-tight uppercase">Mia</span>
        </Link>
        
        <ul className="hidden md:flex items-center gap-8">
          {navItems.map((item) => {
            const anchor = `#${item.id}`;
            return (
              <li key={item.id}>
                {isHome ? (
                  <a 
                    href={anchor} 
                    className="text-sm font-medium hover:text-brand-orange transition-colors"
                  >
                    {item.label}
                  </a>
                ) : (
                  <Link 
                    to={`/${anchor}`}
                    className="text-sm font-medium hover:text-brand-orange transition-colors"
                  >
                    {item.label}
                  </Link>
                )}
              </li>
            );
          })}
        </ul>

        <button 
          onClick={openModal}
          className="bg-brand-orange text-white px-6 py-2 rounded-full text-sm font-semibold hover:bg-opacity-90 transition-all"
        >
          联系我
        </button>
      </motion.nav>
    </header>
  );
}
