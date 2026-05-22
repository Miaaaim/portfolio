import { motion } from 'motion/react';

interface WordData {
  text: string;
  frequency: number;
  type: 'strength' | 'weakness';
}

interface CloudLayout {
  points: Array<{ x: number; y: number; rotate: number }>;
  leftEdge: number;
  rightEdge: number;
}

type WordOffset = { dx: number; dy: number };

// 手动微调词位置：
// dx > 0 向右，dx < 0 向左
// dy > 0 向下，dy < 0 向上
const strengthWordFineTuneOffsets: Record<string, WordOffset> = {
  '结构化': { dx: -0.1, dy: 2 },
  '需求拆解': { dx: -1.8, dy: 1.8 },
  '项目管理': { dx: -1.9, dy: -1.7 },
  '文档清晰': { dx: 1.8, dy: 0 },
  '执行稳定': { dx: 1.8, dy: 0 },
};

const wordData: WordData[] = [
  // 优势
  { text: '结果导向', frequency: 60, type: 'strength' },
  { text: '结构化', frequency: 55, type: 'strength' },
  { text: '数据驱动', frequency: 52, type: 'strength' },
  { text: '用户洞察', frequency: 50, type: 'strength' },
  { text: '需求拆解', frequency: 48, type: 'strength' },
  { text: '增长思维', frequency: 45, type: 'strength' },
  { text: '闭环意识', frequency: 42, type: 'strength' },
  { text: '跨团队协同', frequency: 40, type: 'strength' },
  { text: '推进力强', frequency: 38, type: 'strength' },
  { text: '优先级判断', frequency: 37, type: 'strength' },
  { text: '执行稳定', frequency: 35, type: 'strength' },
  { text: '项目管理', frequency: 34, type: 'strength' },
  { text: '主动担当', frequency: 33, type: 'strength' },
  { text: '目标拆解', frequency: 32, type: 'strength' },
  { text: '文档清晰', frequency: 30, type: 'strength' },
  { text: '沟通对齐', frequency: 29, type: 'strength' },
  { text: '学习敏捷', frequency: 28, type: 'strength' },
  { text: '复盘迭代', frequency: 26, type: 'strength' },
  { text: '指标设计', frequency: 25, type: 'strength' },
  { text: '流程优化', frequency: 24, type: 'strength' },
  { text: '风险识别', frequency: 23, type: 'strength' },
  { text: '问题定义', frequency: 22, type: 'strength' },
  { text: '业务理解', frequency: 21, type: 'strength' },
  { text: '资源整合', frequency: 20, type: 'strength' },
  { text: '竞品分析', frequency: 19, type: 'strength' },
  { text: 'A/B测试意识', frequency: 18, type: 'strength' },
  { text: 'B端场景理解', frequency: 17, type: 'strength' },
  { text: 'AI工具应用', frequency: 16, type: 'strength' },
  { text: '口径统一', frequency: 15, type: 'strength' },
  { text: '责任心强', frequency: 14, type: 'strength' },
  { text: '抗压稳定', frequency: 13, type: 'strength' },
  { text: '情绪稳定', frequency: 12, type: 'strength' },
  { text: '同理心强', frequency: 11, type: 'strength' },
  { text: '自驱成长', frequency: 10, type: 'strength' },
  { text: '开放反馈', frequency: 9, type: 'strength' },
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
  { text: '技术深度一般', frequency: 17, type: 'weakness' },
  { text: '财务模型薄弱', frequency: 16, type: 'weakness' },
  { text: '品牌运营经验少', frequency: 15, type: 'weakness' },
  { text: '海外市场经验少', frequency: 14, type: 'weakness' },
  { text: '大团队管理经验少', frequency: 13, type: 'weakness' },
  { text: '复杂博弈经验少', frequency: 12, type: 'weakness' },
  { text: '创新方法沉淀不足', frequency: 11, type: 'weakness' },
  { text: '公开演讲偏弱', frequency: 10, type: 'weakness' },
  { text: '中长期规划偏弱', frequency: 9, type: 'weakness' },
  { text: '生态合作经验少', frequency: 8, type: 'weakness' },
  { text: '对冲突敏感', frequency: 7, type: 'weakness' },
  { text: '决策前求稳', frequency: 6, type: 'weakness' },
  { text: '对失败容忍低', frequency: 5, type: 'weakness' },
];

export default function StrengthsWeaknesses() {
  // 计算最大和最小词频以便标准化
  const frequencies = wordData.map(word => word.frequency);
  const maxFreq = Math.max(...frequencies);
  const minFreq = Math.min(...frequencies);
  
  // 计算字体大小，控制上下限防止词语互相遮挡过多
  const getFontSizeValue = (frequency: number): number => {
    const minSize = 11;
    const maxSize = 30;
    const normalized = (frequency - minFreq) / (maxFreq - minFreq);
    return minSize + normalized * (maxSize - minSize);
  };

  const getFontSize = (frequency: number): string => {
    return `${getFontSizeValue(frequency)}px`;
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

  const showCloudDebugGuides = (() => {
    if (!import.meta.env.DEV || typeof window === 'undefined') {
      return false;
    }

    try {
      const params = new URLSearchParams(window.location.search);
      if (params.get('cloudGuides') === '1') {
        return true;
      }
      return window.localStorage.getItem('cloudGuides') === '1';
    } catch {
      return false;
    }
  })();

  const createCloudPoints = (words: WordData[], seedOffset: number): CloudLayout => {
    const isStrengthCloud = words.length > 0 && words[0].type === 'strength';
    const count = words.length;
    const cols = Math.ceil(Math.sqrt(count * 1.5));
    const rows = Math.ceil(count / cols);
    const xStep = 100 / (cols + 1);
    const yStep = 100 / (rows + 1);
    const points: Array<{ x: number; y: number; rotate: number }> = new Array(count);
    const occupied: Array<{ x: number; y: number; width: number; height: number }> = [];
    const edgePaddingLeft = 3;
    const edgePaddingRight = 10;
    const edgePaddingY = 7;
    // 词云容器在不同断点宽度不同，这里使用保守换算，确保边界线能包住实际文字
    const percentPerPxX = 3.9;
    const extraTextPaddingPx = 10;

    const estimateWordBox = (word: WordData) => {
      const fontSize = getFontSizeValue(word.frequency);
      const cjkCount = (word.text.match(/[\u3400-\u9fff]/g) || []).length;
      const latinCount = word.text.length - cjkCount;
      const visualLength = cjkCount * 1 + latinCount * 0.58;
      const weightFactor = 1 + ((word.frequency / maxFreq) * 0.22);
      const estimatedTextPx = (visualLength * fontSize * 1.05) + extraTextPaddingPx;

      return {
        // 适度放大估算宽高，给高字重与中英文混排留出安全空间
        width: Math.max(11.5, (estimatedTextPx / percentPerPxX) * weightFactor),
        height: Math.max(4.8, (fontSize * 1.28) / 4),
      };
    };

    const intersects = (a: { x: number; y: number; width: number; height: number }, b: { x: number; y: number; width: number; height: number }) => {
      return (
        Math.abs(a.x - b.x) < (a.width + b.width) / 2 &&
        Math.abs(a.y - b.y) < (a.height + b.height) / 2
      );
    };

    const findSpot = (
      preferredX: number,
      preferredY: number,
      box: { width: number; height: number },
      startAngle: number
    ) => {
      const minX = edgePaddingLeft + box.width / 2;
      const maxX = 100 - edgePaddingRight - box.width / 2;
      const minY = edgePaddingY + box.height / 2;
      const maxY = 100 - edgePaddingY - box.height / 2;

      const tryCandidate = (x: number, y: number) => {
        const candidate = {
          x: Math.min(maxX, Math.max(minX, x)),
          y: Math.min(maxY, Math.max(minY, y)),
          width: box.width,
          height: box.height,
        };

        const hasCollision = occupied.some(item => intersects(candidate, item));
        return hasCollision ? null : candidate;
      };

      const direct = tryCandidate(preferredX, preferredY);
      if (direct) {
        return direct;
      }

      const radialStep = Math.max(1.2, Math.min(xStep, yStep) * (isStrengthCloud ? 0.72 : 0.62));
      const maxLayers = isStrengthCloud ? 18 : 12;
      for (let layer = 1; layer <= maxLayers; layer += 1) {
        const radius = layer * radialStep;
        const checks = 12 + layer * 3;
        for (let s = 0; s < checks; s += 1) {
          const angle = startAngle + (Math.PI * 2 * s) / checks;
          const x = preferredX + Math.cos(angle) * radius;
          const y = preferredY + Math.sin(angle) * radius;
          const candidate = tryCandidate(x, y);
          if (candidate) {
            return candidate;
          }
        }
      }

      return {
        x: Math.min(maxX, Math.max(minX, preferredX)),
        y: Math.min(maxY, Math.max(minY, preferredY)),
        width: box.width,
        height: box.height,
      };
    };

    for (let i = 0; i < count; i += 1) {
      const row = Math.floor(i / cols);
      const col = i % cols;
      const baseX = (col + 1) * xStep;
      const baseY = (row + 1) * yStep;
      const box = estimateWordBox(words[i]);

      // 轻微抖动，让分布更自然，同时确保整体仍铺满容器
      const jitterX = (((i + seedOffset) % 5) - 2) * (xStep * 0.1);
      const jitterY = ((((i * 2) + seedOffset) % 5) - 2) * (yStep * 0.1);
      const rotate = 0;
      const startAngle = ((i + seedOffset) % 8) * (Math.PI / 4);

      const placed = findSpot(baseX + jitterX, baseY + jitterY, box, startAngle);

      points[i] = {
        x: placed.x,
        y: placed.y,
        rotate,
      };

      occupied.push(placed);
    }

    // 迭代消解重叠：优先移动低频词，尽量保持高频词位置稳定
    const resolveCollisions = () => {
      const minGapX = isStrengthCloud ? 1.25 : 0.8;
      const minGapY = isStrengthCloud ? 1.0 : 0.65;
      const maxIterations = isStrengthCloud ? 96 : 60;

      for (let iter = 0; iter < maxIterations; iter += 1) {
        let hasOverlap = false;

        for (let i = 0; i < occupied.length; i += 1) {
          for (let j = i + 1; j < occupied.length; j += 1) {
            const a = occupied[i];
            const b = occupied[j];
            const dx = b.x - a.x;
            const dy = b.y - a.y;
            const overlapX = (a.width + b.width) / 2 + minGapX - Math.abs(dx);
            const overlapY = (a.height + b.height) / 2 + minGapY - Math.abs(dy);

            if (overlapX > 0 && overlapY > 0) {
              hasOverlap = true;

              const moveLowFreqMoreA = i < j ? 0.28 : 0.72;
              const moveLowFreqMoreB = 1 - moveLowFreqMoreA;

              if (overlapX < overlapY) {
                const push = overlapX / 2;
                const direction = dx >= 0 ? 1 : -1;
                a.x -= direction * push * moveLowFreqMoreA;
                b.x += direction * push * moveLowFreqMoreB;
              } else {
                const push = overlapY / 2;
                const direction = dy >= 0 ? 1 : -1;
                a.y -= direction * push * moveLowFreqMoreA;
                b.y += direction * push * moveLowFreqMoreB;
              }

              const clampToBounds = (item: { x: number; y: number; width: number; height: number }) => {
                const minX = edgePaddingLeft + item.width / 2;
                const maxX = 100 - edgePaddingRight - item.width / 2;
                const minY = edgePaddingY + item.height / 2;
                const maxY = 100 - edgePaddingY - item.height / 2;

                item.x = Math.min(maxX, Math.max(minX, item.x));
                item.y = Math.min(maxY, Math.max(minY, item.y));
              };

              clampToBounds(a);
              clampToBounds(b);
            }
          }
        }

        if (!hasOverlap) {
          break;
        }
      }
    };

    resolveCollisions();

    // 二次校正：将整组词汇的几何中心拉回容器中心，避免整体偏向某一侧
    if (occupied.length > 0) {
      const centroidX = occupied.reduce((sum, item) => sum + item.x, 0) / occupied.length;
      const centroidY = occupied.reduce((sum, item) => sum + item.y, 0) / occupied.length;
      const shiftX = 0;
      const shiftY = 50 - centroidY;

      for (let i = 0; i < occupied.length; i += 1) {
        const item = occupied[i];
        const minX = edgePaddingLeft + item.width / 2;
        const maxX = 100 - edgePaddingRight - item.width / 2;
        const minY = edgePaddingY + item.height / 2;
        const maxY = 100 - edgePaddingY - item.height / 2;

        const recenteredX = Math.min(maxX, Math.max(minX, item.x + shiftX));
        const recenteredY = Math.min(maxY, Math.max(minY, item.y + shiftY));

        points[i] = {
          ...points[i],
          x: recenteredX,
          y: recenteredY,
        };

        occupied[i] = {
          ...item,
          x: recenteredX,
          y: recenteredY,
        };
      }

      void centroidX;

      // 垂直居中后再跑一轮轻量消解，避免回弹造成局部重叠
      resolveCollisions();
    }

    const debugEdgeBuffer = 0.5;
    const leftEdge = occupied.length > 0
      ? Math.max(0, Math.min(...occupied.map(item => item.x - item.width / 2)) - debugEdgeBuffer)
      : edgePaddingLeft;
    const rightEdge = occupied.length > 0
      ? Math.min(100, Math.max(...occupied.map(item => item.x + item.width / 2)) + debugEdgeBuffer)
      : 100 - edgePaddingRight;

    return {
      points,
      leftEdge,
      rightEdge,
    };
  };

  const renderShapeCloud = (words: WordData[], points: Array<{ x: number; y: number; rotate: number }>, containerKey: string) => {
    const getFineTuneOffset = (word: WordData): { dx: number; dy: number } => {
      if (word.type !== 'strength') {
        return { dx: 0, dy: 0 };
      }

      return strengthWordFineTuneOffsets[word.text] || { dx: 0, dy: 0 };
    };

    return words.map((word, index) => {
      const colors = getColor(word.type, word.frequency);
      const point = points[index];
      const fineTune = getFineTuneOffset(word);

      if (!point) {
        return null;
      }

      const adjustedX = Math.max(2, Math.min(98, point.x + fineTune.dx));
      const adjustedY = Math.max(3, Math.min(97, point.y + fineTune.dy));

      return (
        <motion.span
          key={`${containerKey}-${index}`}
          className="absolute whitespace-nowrap"
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: index * 0.05, duration: 0.45 }}
          viewport={{ once: true }}
          style={{
            left: `${adjustedX}%`,
            top: `${adjustedY}%`,
            transform: `translate(-50%, -50%) rotate(${point.rotate}deg)`,
            fontSize: `${getFontSizeValue(word.frequency) * (word.type === 'strength' ? 0.9 : 1)}px`,
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

  const strengthLayout = createCloudPoints(strengths, 1);
  const weaknessLayout = createCloudPoints(weaknesses, 3);

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
                {showCloudDebugGuides && (
                  <>
                    <div
                      className="absolute top-0 bottom-0 border-l border-dashed border-blue-400/70"
                      style={{ left: `${strengthLayout.leftEdge}%` }}
                    />
                    <div
                      className="absolute top-0 bottom-0 border-l border-dashed border-blue-400/70"
                      style={{ left: `${strengthLayout.rightEdge}%` }}
                    />
                  </>
                )}
                {renderShapeCloud(strengths, strengthLayout.points, 'strength')}
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
                {showCloudDebugGuides && (
                  <>
                    <div
                      className="absolute top-0 bottom-0 border-l border-dashed border-orange-400/70"
                      style={{ left: `${weaknessLayout.leftEdge}%` }}
                    />
                    <div
                      className="absolute top-0 bottom-0 border-l border-dashed border-orange-400/70"
                      style={{ left: `${weaknessLayout.rightEdge}%` }}
                    />
                  </>
                )}
                {renderShapeCloud(weaknesses, weaknessLayout.points, 'weakness')}
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
