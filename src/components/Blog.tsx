import { motion } from 'motion/react';
import { ArrowUpRight, Calendar, User } from 'lucide-react';

const posts = [
  {
    title: '多巴胺的分泌：不仅是运动，更是对生活节奏的掌控',
    category: '运动',
    date: '2024年',
    author: 'Mia',
    image: '/src/assets/images/more_sides_sports_taiko_1779111382673.png',
  },
  {
    title: '毛孩子们的日常：在这个小生命的世界里，耐心是最高级的爱',
    category: '铲屎官',
    date: '2024年',
    author: 'Mia',
    image: '/src/assets/images/more_sides_two_cats_1779111400698.png',
  },
  {
    title: '指尖上的流转：在手工创造中寻找那份独有的内心宁静',
    category: '手工创造',
    date: '2024年',
    author: 'Mia',
    image: '/src/assets/images/more_sides_mini_house_1779111416032.png',
  },
];

export default function Blog() {
  return (
    <section className="py-24 px-6 max-w-7xl mx-auto space-y-16">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
        <h2 className="text-6xl font-bold leading-tight">
          更多面的 <span className="text-brand-orange">我</span>
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {posts.map((post, i) => (
          <motion.article 
            key={i}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="group cursor-pointer space-y-6"
          >
            <div className="relative aspect-[4/3] rounded-[2.5rem] overflow-hidden shadow-lg">
               <img 
                 src={post.image} 
                 alt={post.title} 
                 className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                 referrerPolicy="no-referrer"
               />
               <div className="absolute bottom-4 left-4 flex gap-2">
                  <span className="bg-white/90 backdrop-blur px-4 py-1 rounded-full text-xs font-bold uppercase">
                    {post.category}
                  </span>
               </div>
               <button className="absolute bottom-4 right-4 w-12 h-12 bg-white/90 backdrop-blur rounded-full flex items-center justify-center text-brand-dark opacity-0 group-hover:opacity-100 transition-opacity">
                 <ArrowUpRight size={20} />
               </button>
            </div>
            
            <div className="space-y-4 px-2">
               <div className="flex items-center gap-4 text-xs font-bold uppercase text-gray-400">
                  <span className="flex items-center gap-1"><User size={14} className="text-brand-orange" /> {post.author}</span>
                  <span className="flex items-center gap-1"><Calendar size={14} className="text-brand-orange" /> {post.date}</span>
               </div>
               <h3 className="text-2xl font-bold leading-tight group-hover:text-brand-orange transition-colors">
                 {post.title}
               </h3>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
