import { motion, AnimatePresence } from 'motion/react';
import { X, Phone, Mail, MessageSquare, ExternalLink } from 'lucide-react';
import { useModal } from '../context/ModalContext';
import wechatQr from '../assets/images/wechat_qr.png';

const AGENT_URL = 'https://www.coze.cn/store/agent/7629182401524236298?bot_id=true';

export default function ContactModal() {
  const { isOpen, modalType, closeModal } = useModal();

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center px-6">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
            className="absolute inset-0 bg-brand-dark/80 backdrop-blur-sm"
          />
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="relative w-full max-w-lg bg-white rounded-[3rem] overflow-hidden shadow-2xl"
          >
            <button 
              onClick={closeModal}
              className="absolute top-6 right-6 w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-brand-orange hover:text-white transition-colors z-10"
            >
              <X size={20} />
            </button>

            {modalType === 'agent' ? (
              <div className="h-[75vh] flex flex-col">
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
            ) : (
              <>
                <div className="p-12 space-y-8">
                  <div className="text-center space-y-2">
                    <h2 className="text-3xl font-bold text-brand-dark">联系我</h2>
                    <p className="text-gray-500">期待与您的合作，欢迎随时垂询</p>
                  </div>

                  {/* WeChat QR Section */}
                  <div className="flex flex-col items-center gap-6 p-8 bg-brand-gray rounded-[2rem]">
                     <div className="w-48 h-48 bg-white p-2 rounded-2xl shadow-inner border border-gray-100 overflow-hidden">
                        <img 
                          src={wechatQr} 
                          alt="WeChat QR Code"
                          className="w-full h-full object-cover"
                          onError={(e) => {
                            (e.target as HTMLImageElement).src = 'https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=WeChatID_Placeholder';
                          }}
                        />
                     </div>
                     <div className="flex items-center gap-2 text-brand-orange font-bold">
                        <MessageSquare size={20} />
                        <span>扫码添加微信</span>
                     </div>
                  </div>

                  {/* Contact Details */}
                  <div className="space-y-4">
                    <a 
                      href="tel:18817333363" 
                      className="flex items-center gap-4 p-5 rounded-2xl border border-gray-100 hover:border-brand-orange hover:bg-brand-orange/5 transition-all group"
                    >
                      <div className="w-12 h-12 bg-zinc-100 rounded-xl flex items-center justify-center text-zinc-500 group-hover:bg-brand-orange group-hover:text-white transition-colors">
                        <Phone size={20} />
                      </div>
                      <div>
                        <div className="text-xs text-gray-400 font-bold uppercase tracking-wider">手机号</div>
                        <div className="text-lg font-bold text-brand-dark">18817333363</div>
                      </div>
                    </a>

                    <a 
                      href="mailto:yuanjia0111@126.com" 
                      className="flex items-center gap-4 p-5 rounded-2xl border border-gray-100 hover:border-brand-orange hover:bg-brand-orange/5 transition-all group"
                    >
                      <div className="w-12 h-12 bg-zinc-100 rounded-xl flex items-center justify-center text-zinc-500 group-hover:bg-brand-orange group-hover:text-white transition-colors">
                        <Mail size={20} />
                      </div>
                      <div>
                        <div className="text-xs text-gray-400 font-bold uppercase tracking-wider">邮箱</div>
                        <div className="text-lg font-bold text-brand-dark">yuanjia0111@126.com</div>
                      </div>
                    </a>
                  </div>
                </div>
                
                <div className="bg-brand-dark p-6 text-center">
                  <p className="text-white/60 text-sm font-medium uppercase tracking-widest">随时欢迎新的合作机会</p>
                </div>
              </>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
