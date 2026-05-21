import { motion } from 'motion/react';
import { GraduationCap, Calendar, MapPin } from 'lucide-react';

const education = [
  {
    school: '上海对外经贸大学 & 墨尔本皇家理工学院',
    period: '2011.09 – 2015.07',
    degree: '经济学与管理学双学士，国际商务专业',
    location: '上海 / 墨尔本'
  },
  {
    school: '浙江大学',
    period: '2026.09 – 2029.01',
    degree: '工商管理硕士（MBA）',
    location: '杭州'
  }
];

export default function Education() {
  return (
    <section id="education" className="py-24 bg-brand-gray/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-baseline justify-between mb-16 gap-4">
          <h2 className="text-5xl font-bold">教育 <span className="text-brand-orange">背景</span></h2>
          <div className="h-px flex-1 bg-zinc-200 hidden md:block ml-8" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {education.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-10 rounded-[3rem] border border-zinc-100 shadow-sm hover:shadow-xl hover:border-brand-orange/20 transition-all group"
            >
              <div className="space-y-6">
                <div className="w-16 h-16 bg-brand-orange/10 rounded-2xl flex items-center justify-center text-brand-orange group-hover:bg-brand-orange group-hover:text-white transition-colors">
                  <GraduationCap size={32} />
                </div>
                
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold text-brand-dark leading-tight">
                    {item.school}
                  </h3>
                  
                  <div className="flex flex-wrap gap-4 text-gray-500 font-medium">
                    <div className="flex items-center gap-2">
                      <Calendar size={18} className="text-brand-orange" />
                      <span>{item.period}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin size={18} className="text-brand-orange" />
                      <span>{item.location}</span>
                    </div>
                  </div>

                  <p className="text-lg text-brand-dark font-semibold pt-4 border-t border-zinc-50">
                    {item.degree}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
