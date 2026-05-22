import { motion } from 'motion/react';

interface WordData {
  text: string;
  frequency: number;
  type: 'strength' | 'weakness';
}

interface ShapePoint {
  x: number;
  y: number;
}

const wordData: WordData[] = [
  // 优势
  { text: '结果导向', frequency: 60, type: 'strength' },
  { text: '结构化', frequency: 55, type: 'strength' },
  { text: '数据驱动', frequency: 52, type: 'strength' },
  { text: '增长思维', frequency: 45, type: 'strength' },
  { text: '闭环意识', frequency: 42, type: 'strength' },
  { text: '跨团队协同', frequency: 40, type: 'strength' },
  { text: '推进力强', frequency: 38, type: 'strength' },
  { text: '执行稳定', frequency: 35, type: 'strength' },
  { text: '主动担当', frequency: 33, type: 'strength' },
  { text: '文档清晰', frequency: 30, type: 'strength' },
  { text: '学习敏捷', frequency: 28, type: 'strength' },
  { text: '复盘迭代', frequency: 26, type: 'strength' },
  // 劣势
  { text: '赛道深耕弱', frequency: 42, type: 'weakness' },
  { text: 'AI实战偏浅', frequency: 38, type: 'weakness' },
  { text: '战略表达弱', frequency: 35, type: 'weakness' },
  { text: '商业化偏弱', frequency: 30, type: 'weakness' },
  { text: 'ToC经验少', frequency: 28, type: 'weakness' },
  { text: '前期抠细节', frequency: 26, type: 'weakness' },
  { text: '完美主义倾向', frequency: 24, type: 'weakness' },
  { text: '行业跨度大', frequency: 22, type: 'weakness' },
  { text: '授权不足', frequency: 20, type: 'weakness' },
  { text: '风险前置弱', frequency: 18, type: 'weakness' },
];

// 归一化坐标点（0-100），用于让词语本身拼成点赞轮廓
const thumbsUpPoints: ShapePoint[] = [
  { x: 50, y: 12 },
  { x: 67, y: 20 },
  { x: 78, y: 33 },
  { x: 80, y: 48 },
  { x: 72, y: 63 },
  { x: 58, y: 71 },
  { x: 44, y: 76 },
  { x: 32, y: 67 },
  { x: 23, y: 55 },
  { x: 20, y: 41 },
  { x: 27, y: 29 },
  { x: 38, y: 20 },
];

// 归一化坐标点（0-100），用于让词语本身拼成点踩轮廓
const thumbsDownPoints: ShapePoint[] = [
  { x: 50, y: 88 },
  { x: 67, y: 80 },
  { x: 78, y: 68 },
  { x: 80, y: 52 },
  { x: 72, y: 37 },
  { x: 58, y: 29 },
  { x: 44, y: 24 },
  { x: 32, y: 33 },
  { x: 23, y: 45 },
  { x: 20, y: 59 },
];

export default function StrengthsWeaknesses() {
  // 计算最大和最小词频以便标准化
  const frequencies = wordData.map(word => word.frequency);
  const maxFreq = Math.max(...frequencies);
  const minFreq = Math.min(...frequencies);
  
  // 计算字体大小（从16px到48px）
  const getFontSize = (frequency: number): string => {
    const minSize = 14;
    const maxSize = 48;
    const normalized = (frequency - minFreq) / (maxFreq - minFreq);
    const size = minSize + normalized * (maxSize - minSize);
    return `${size}px`;
  };

  // 获取颜色 - 优势用冷色，劣势用暖色
  const getColor = (type: 'strength' | 'weakness', frequency: number): { bg: string; text: string } => {
    const normalized = (frequency - minFreq) / (maxFreq - minFreq);
    
    if (type === 'strength') {
      // 冷色系：从浅青到深蓝
      if (normalized > 0.75) {
        return { bg: 'bg-blue-100', text: 'text-blue-700' };
      } else if (normalized > 0.5) {
        return { bg: 'bg-cyan-100', text: 'text-cyan-700' };
      } else if (normalized > 0.25) {
        return { bg: 'bg-sky-100', text: 'text-sky-700' };
      } else {
        return { bg: 'bg-blue-50', text: 'text-blue-600' };
      }
    } else {
      // 暖色系：从浅橙到深红
      if (normalized > 0.75) {
        return { bg: 'bg-red-100', text: 'text-red-700' };
      } else if (normalized > 0.5) {
        return { bg: 'bg-orange-100', text: 'text-orange-700' };
      } else if (normalized > 0.25) {
        return { bg: 'bg-amber-100', text: 'text-amber-700' };
      } else {
        return { bg: 'bg-orange-50', text: 'text-orange-600' };
      }
    }
  };

  // 分组并按词频排序，保证高频词更靠近视觉中心
  const strengths = [...wordData]
    .filter(w => w.type === 'strength')
    .sort((a, b) => b.frequency - a.frequency);
  const weaknesses = [...wordData]
    .filter(w => w.type === 'weakness')
    .sort((a, b) => b.frequency - a.frequency);

  const renderShapeCloud = (words: WordData[], points: ShapePoint[], containerKey: string) => {
    return words.map((word, index) => {
      const colors = getColor(word.type, word.frequency);
      const point = points[index];

      if (!point) {
        return null;
      }

      return (
        <motion.span
          key={`${containerKey}-${index}`}
          className="absolute whitespace-nowrap"
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: index * 0.05, duration: 0.45 }}
          viewport={{ once: true }}
          style={{
            left: `${point.x}%`,
            top: `${point.y}%`,
            transform: 'translate(-50%, -50%)',
            fontSize: getFontSize(word.frequency),
            fontWeight: 500 + Math.floor((word.frequency / maxFreq) * 300),
            color: colors.text.replace('text-', '').includes('blue')
              ? '#1d4ed8'
              : colors.text.replace('text-', '').includes('cyan')
                ? '#0e7490'
                : colors.text.replace('text-', '').includes('sky')
                  ? '#0369a1'
                  : colors.text.replace('text-', '').includes('red')
                    ? '#b91c1c'
                    : colors.text.replace('text-', '').includes('amber')
                      ? '#b45309'
                      : '#c2410c',
            textShadow: '0 1px 0 rgba(255,255,255,0.7)',
            lineHeight: 1,
          }}
          whileHover={{ scale: 1.1 }}
        >
          {word.text}
        </motion.span>
      );
    });
  };

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-baseline justify-between mb-16 gap-4">
          <h2 className="text-5xl font-bold">我的 <span className="text-brand-orange">优劣势</span></h2>
          <div className="h-px flex-1 bg-zinc-200 hidden md:block ml-8" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* 优势部分 - 点赞容器 */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="w-2 h-2 rounded-full bg-blue-500" />
              <h3 className="text-2xl font-bold text-brand-dark">核心优势</h3>
              <div className="flex-1 h-px bg-blue-100" />
            </div>
            
            <div className="relative h-[420px] rounded-[2.5rem] border border-blue-100/80 bg-gradient-to-br from-blue-50/60 to-cyan-50/40 overflow-hidden">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_20%,rgba(59,130,246,0.12),transparent_40%),radial-gradient(circle_at_75%_70%,rgba(14,165,233,0.10),transparent_45%)]" />
              <div className="relative h-full w-full">
                {renderShapeCloud(strengths, thumbsUpPoints, 'strength')}
              </div>
            </div>
          </motion.div>

          {/* 劣势部分 - 点踩容器 */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="w-2 h-2 rounded-full bg-orange-500" />
              <h3 className="text-2xl font-bold text-brand-dark">需要改进</h3>
              <div className="flex-1 h-px bg-orange-100" />
            </div>
            
            <div className="relative h-[420px] rounded-[2.5rem] border border-orange-100/80 bg-gradient-to-br from-orange-50/60 to-amber-50/40 overflow-hidden">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_20%,rgba(251,146,60,0.12),transparent_40%),radial-gradient(circle_at_75%_70%,rgba(245,158,11,0.10),transparent_45%)]" />
              <div className="relative h-full w-full">
                {renderShapeCloud(weaknesses, thumbsDownPoints, 'weakness')}
              </div>
            </div>
          </motion.div>
        </div>

        {/* 底部说明 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 p-6 bg-gradient-to-r from-blue-50 to-orange-50 rounded-2xl border border-zinc-100"
        >
          <p className="text-gray-600 text-center">
            <span className="text-blue-700 font-semibold">冷色</span> 代表优势，
            <span className="text-orange-700 font-semibold">暖色</span> 代表需要改进的方向。
            词汇大小代表相对的权重或出现频率。
          </p>
        </motion.div>
      </div>
    </section>
  );
}
