import { motion } from 'motion/react';

const posts = [
  {
    title: '羽毛球',
    image: 'https://images.unsplash.com/photo-1626224583764-f87db24ac4ea?auto=format&fit=crop&w=1200&q=80',
  },
  {
    title: '网球',
    image: 'https://images.unsplash.com/photo-1622279457486-62dcc4a431d6?auto=format&fit=crop&w=1200&q=80',
  },
  {
    title: '游泳',
    image: 'https://images.unsplash.com/photo-1600965962361-9035dbfd1c50?auto=format&fit=crop&w=1200&q=80',
  },
  {
    title: '太鼓达人',
    image: '/src/assets/images/more_sides_sports_taiko_1779111382673.png',
  },
  {
    title: '徒步',
    image: 'https://images.unsplash.com/photo-1551632811-561732d1e306?auto=format&fit=crop&w=1200&q=80',
  },
  {
    title: '两只猫',
    image: '/src/assets/images/more_sides_two_cats_1779111400698.png',
  },
  {
    title: '手工房子',
    image: '/src/assets/images/more_sides_mini_house_1779111416032.png',
  },
  {
    title: '美食',
    image: 'https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&w=1200&q=80',
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

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {posts.map((post, i) => (
          <motion.article 
            key={i}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="group space-y-6"
          >
            <div className="relative aspect-[4/3] rounded-[2.5rem] overflow-hidden shadow-lg">
               <img 
                 src={post.image} 
                 alt={post.title} 
                 className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                 referrerPolicy="no-referrer"
               />
               <div className="absolute bottom-4 left-4">
                  <span className="bg-white/90 backdrop-blur px-4 py-1 rounded-full text-sm font-bold text-brand-dark">
                    {post.title}
                  </span>
               </div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
