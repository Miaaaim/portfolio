import { motion } from 'motion/react';
import { resolveAssetUrl } from '../assetUrl';

const posts = [
  {
    title: '羽毛球',
    image: '/portfolio/src/assets/images/external/badminton-jump-smash.jpg',
  },
  {
    title: '网球',
    image: '/portfolio/src/assets/images/external/tennis-court-forehand.jpg',
  },
  {
    title: '游泳',
    image: '/portfolio/src/assets/images/external/swimming-pool-dive.jpg',
  },
  {
    title: '太鼓达人',
    image: '/portfolio/src/assets/images/blog-cover-sports-taiko.webp',
  },
  {
    title: '徒步',
    image: '/portfolio/src/assets/images/external/mountain-hiking-trail.jpg',
  },
  {
    title: '铲屎官',
    image: '/portfolio/src/assets/images/blog-cover-two-cats.png',
  },
  {
    title: '手工房子',
    image: '/portfolio/src/assets/images/blog-cover-mini-house.png',
  },
  {
    title: '美食',
    image: '/portfolio/src/assets/images/external/fresh-salad-ingredients.jpg',
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
                 src={resolveAssetUrl(post.image)} 
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
