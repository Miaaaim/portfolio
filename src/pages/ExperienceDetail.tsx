import { motion } from 'motion/react';
import { ArrowLeft, CheckCircle2, Calendar, MapPin, Building2, Sparkles } from 'lucide-react';
import { Link, useParams } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useModal } from '../context/ModalContext';

interface WorkExperience {
  company: string;
  date: string;
  title: string;
  location: string;
  desc: string;
  achievements: string[];
  skills: string[];
  summary?: string;
  sections?: {
    title: string;
    items: (string | { title: string; points: string[] })[];
  }[];
}

const experiences: Record<string, WorkExperience> = {
  'lingkang': {
    company: '领康科技',
    date: '2024.03 – 2025.07',
    title: '资深产品经理',
    location: '杭州',
    desc: '智慧校园体育SaaS平台产品规划 with 迭代，负责整体产品方向与核心模块建设。负责学生端App与小程序设计，覆盖千万次体测数据规模，实现B2B2C体培合作模式及多维度产品运营。',
    sections: [
      {
        title: '我的职责范围',
        items: [
          '智慧校园体育SaaS平台产品规划与迭代，负责整体产品方向与核心模块建设',
          '学生端App与小程序产品设计，包括用户路径优化与增长机制设计',
          '新业务场景拓展，包括B2B2C体培合作模式与幼儿园场景的流程重构'
        ]
      },
      {
        title: '关键业务挑战',
        items: [
          '大规模数字化运营：需要支撑千万次体测数据的收集、处理与展示，服务1500+学校、150万学生',
          '多角色需求差异化：平台需要同时服务教育局、学校、服务团队三类角色，各自需求差异大',
          '多端协同复杂性：产品覆盖后台、App、小程序等多个端口，需要保证流程贯通与体验一致',
          '学生端增长瓶颈：学生作为核心用户，面临从注册到持续活跃的转化路径较长'
        ]
      },
      {
        title: '我主导的方向与机制',
        items: [
          {
            title: '1. 平台核心系统建设',
            points: [
              '搭建业务管理系统、学校管理系统、数据大屏等三大核心模块',
              '基于教育局、学校、服务团队的三层角色，进行分层需求建模，明确各角色的权限与流程',
              '推动流程标准化与多端协同机制，形成统一的业务语言'
            ]
          },
          {
            title: '2. 学生端用户增长设计',
            points: [
              '主导学生App/小程序的关键路径设计，围绕"查询-查看-训练-留存"四个阶段优化链路',
              '针对训练、成绩查询、AI体质分析报告、智能设备运动等核心场景进行深度设计',
              '建立用户分层运营机制，提升从注册到活跃的转化效率'
            ]
          },
          {
            title: '3. 新业务场景拓展',
            points: [
              '设计体培机构合作系统，形成学生成绩查询 → 购买模拟考试 → 机构服务的业务闭环',
              '针对体培场景重构体测项目与作业流程，降低系统操作难度并提升服务效率',
              '验证新业务可行性，为平台打开新的收入与增长空间'
            ]
          }
        ]
      },
      {
        title: '阶段性结果',
        items: [
          {
            title: '1. 体测数字化规模化落地',
            points: [
              '系统覆盖1500+学校、150万学生，支撑千万次体测数字化运营',
              '形成了完整的体测数据采集、处理、展示与分析链路'
            ]
          },
          {
            title: '2. 学生端注册与活跃增长',
            points: [
              '学生端App/小程序注册用户增长至20万+',
              '通过路径优化与内容运营，显著提升用户转化率与持续活跃度'
            ]
          },
          {
            title: '3. 新业务模式验证',
            points: [
              '体培机构合作系统完成初版上线，形成B2B2C业务闭环验证',
              '幼儿园场景流程重构完成，降低交付成本、提升服务交付效率'
            ]
          }
        ]
      }
    ],
    summary: '① 学会了从多角色视角建立差异化产品方案，提升了多角色需求建模与产品管理能力。\n\n② 理解了如何在复杂业务下通过流程标准化与组件化，支持平台规模化增长。\n\n③ 掌握了基于场景的用户路径优化方法，积累了将新业务想法（B2B2C、新场景）产品化落地的实战经验。',
    achievements: [], 
    skills: ['多角色建模', '大规模系统', '用户增长', 'B2B2C', '多端协同']
  },
  'netease': {
    company: '网易数帆',
    date: '2021.09 – 2023.11',
    title: '高级产品经理',
    location: '杭州',
    desc: '网易数帆面向政企客户提供云原生、大数据、低代码等产品服务。我负责企业服务 CRM 增长运营板块，核心目标是重构从线索培育到转化留存的增长体系，覆盖官网、小程序、活动页、私域和销售协同等全链路环节。',
    sections: [
      {
        title: '我的职责范围',
        items: [
          '负责 CRM 增长运营全链路策略设计，从线索获取到转化留存的端到端覆盖。',
          '主导产品改版与数据体系搭建，涵盖注册路径、落地页结构、用户分层标签等核心模块。',
          '推进 A/B 测试机制与活动组件化后台建设，提升运营与研发协同效率。',
          '联动销售、运营、研发、数据团队，统一增长目标与指标口径。'
        ]
      },
      {
        title: '关键业务挑战',
        items: [
          '转化断点明显：潜在客户集中在前几次访问内做决策，但注册承接不足、分层触达缺失，大量意向用户在关键节点流失。',
          '体验与响应不稳定：试用/咨询意向用户缺少及时跟进，线索质量差，满意度持续受影响。',
          '运营迭代效率低：活动页完全依赖研发排期，实验速度慢，增长动作难以高频验证，策略落地周期长。'
        ]
      },
      {
        title: '我主导的方向与机制',
        items: [
          '建立增长方法框架：以 AARRR 模型拆解全链路，以"有效线索转化率"为北极星指标，引入 ICE 优先级打分与标准化实验 SOP，系统管理实验池与优化节奏。',
          '重构转化入口：主导官网与小程序改版，优化注册流程与落地页信息层次，强化首屏价值表达、CTA 与表单填写路径，降低用户流失与填写负担。',
          '打通跨端数据体系：统一网页与小程序用户 ID 和事件口径，建立"来源标签 + 属性标签 + 意向标签"三层标签体系，支持高/中/低意向用户分层运营与个性化触达。',
          '推进销售协同机制：结合企微、短信、邮件建立自动化触达策略，与销售共建基于标签的跟进 SOP 与 SLA，缩短线索响应时间，提升线索转化质量。',
          '从 0 到 1 搭建 A/B 测试工具：标准化实验创建、分流、指标读取与结果归档流程，引入显著性检验与最小样本量规则，确保实验结论可信可复用。',
          '建设活动页面组件化后台：沉淀 Banner、表单、内容区、CTA 等可配置模块与模板，让运营可独立完成页面创建、发布与复用。'
        ]
      },
      {
        title: '阶段性结果',
        items: [
          '转化效率显著提升：注册转化率提升 12.7%，年度行业活动用户量同比增长 21%，A/B 工具上线后内容营销页点击率提升 30%。',
          '用户满意度持续改善：满意度后续季度环比提升 40%，咨询与信息呈现相关负面反馈降至 10% 以下，部分场景降至 5% 以下。',
          '运营效率大幅提升：活动页面产出效率提升 200%+，运营周期缩短 30%，运营团队可独立高频发起活动并快速验证效果。'
        ]
      }
    ],
    summary: '① 建立了“问题识别 - 假设设计 - 实验验证 - 复盘沉淀”的组织级增长闭环，将增长能力从单次项目经验转化为可复用的方法资产。\n\n② 形成了以数据标签为核心的用户分层运营体系，构建了一套可迁移至类似企业服务增长场景的方法论框架。\n\n③ 通过平台化工具建设（A/B 工具 + 组件化后台），实现增长能力的组织化沉淀，让团队不再依赖个人经验驱动，而是建立可持续迭代的增长基础设施。',
    achievements: [], // Keeping for compatibility or legacy access
    skills: ['增长黑客', 'A/B测试', 'CRM系统', '用户运营', '数据驱动']
  },
  'jielibang': {
    company: '接力棒科技',
    date: '2018.11 – 2021.08',
    title: '产品经理',
    location: '杭州',
    desc: '教育培训机构CRM与增长平台。负责从获客、转化、留存的全链路产品设计，主导 CRM 获客系统与数据平台从 0 到 1 的规划建设。',
    sections: [
      {
        title: '我的职责范围',
        items: [
          '教育培训机构CRM增长产品规划与迭代，负责从获客、转化、留存的全链路产品设计',
          '独立规划并上线CRM获客系统与数据平台，支撑多渠道营销矩阵运营',
          '设计并落地家校互通App与管理后台，提升家长活跃与口碑传播'
        ]
      },
      {
        title: '关键业务挑战',
        items: [
          '高获客成本与转化困难：传统获客依赖地推和试听，成本高、效率低、转化链路不清晰',
          '多渠道整合复杂：整合地推、试听、线上等多个营销渠道，建立统一的线索管理与追踪机制',
          '家长活跃度低：互动频率低，难以形成口碑传播和续费支持',
          '数据分散不可控：环节数据未被系统化收集分析，难以指导运营决策'
        ]
      },
      {
        title: '我主导的方向与机制',
        items: [
          {
            title: '1. CRM获客系统与多渠道营销矩阵建设',
            points: [
              '独立规划CRM获客系统，实现地推、试听、线上转介绍等多渠道的线索统一采集与管理',
              '构建活动模板库和表单采集体系，支持运营高频创建营销活动并快速收集线索',
              '建立从线索采集→跟进→转化→成交的完整流程闭环，形成标准化的获客漏斗'
            ]
          },
          {
            title: '2. 数据平台与效率优化',
            points: [
              '独立规划数据平台，将分散的地推、试听、线上转介绍等数据集中管理和分析',
              '搭建业务仪表板，实时展示各渠道的获客成本、转化率等关键指标，支撑决策优化',
              '通过数据分析找出高效渠道和低效环节，指导营销预算分配与活动优化'
            ]
          },
          {
            title: '3. 家校互通App与口碑传播机制',
            points: [
              '设计家校互通App，通过内容社区、消息互动与作业管理等功能强化家长活跃度',
              '建立家长口碑传播机制，激励家长分享孩子成长故事和学习成果，形成自然转介绍',
              '设计家长活跃与转介绍的激励体系，将App活跃与续费、转介绍紧密关联'
            ]
          }
        ]
      },
      {
        title: '阶段性结果',
        items: [
          {
            title: '1. 地推活动效率显著提升',
            points: [
              '通过CRM获客系统与多渠道整合，地推活动用户量增长30%',
              '优化地推流程与跟进机制，提升单次活动的转化效率'
            ]
          },
          {
            title: '2. 快速规模化线索采集',
            points: [
              '3个月内通过系统采集表单超过20万份，建立了高质量的线索库',
              '为销售团队提供充足的转化源，支撑机构快速扩张'
            ]
          },
          {
            title: '3. 家校互通与口碑传播',
            points: [
              '通过家校互通App提升了家长活跃度和参与度',
              '形成了从家长活跃→口碑传播→续费转介绍的良性增长链条'
            ]
          }
        ]
      }
    ],
    summary: '① 学会了将地推、试听、线上等多个分散渠道整合为统一 CRM 获客系统的方法，掌握了全链路转化路径优化。\n\n② 建立了从数据采集到决策优化的闭环，深刻理解了数据平台对 ToB 业务精细化运营的驱动价值。\n\n③ 理解了如何通过产品机制强化家长活跃，形成口碑传播与转介绍的良性增长引擎。',
    achievements: [], 
    skills: ['CRM系统', '多渠道获客', '数据驱动', '家校互动', 'ToB增长']
  },
  'eleme': {
    company: '饿了么',
    date: '2015.07 – 2018.10',
    title: '产品运营',
    location: '上海',
    desc: '物流侧骑手管理与履约体系。主导定位系统的全链路优化机制，建立骑手端管理规范与调度策略优化体系，实现履约质量与运营效率双向提升。',
    sections: [
      {
        title: '我的职责范围',
        items: [
          '定位系统优化与履约保障：负责定位系统从问题诊断到能力建设的全流程管理。建立全链路监控与问题闭环机制，推进从定位报备、异常地址库到服务端反查的完整能力建设。',
          '骑手端效率与管理优化：负责骑手App的功能迭代，基于业务数据与骑手反馈建立驱动机制，同时推进骑手着装、申报等管理规范的落地与持续优化。',
          '智能派单系统迭代：参与智能派单项目，系统化收集并分析一线骑手反馈，识别派单逻辑痛点并推动算法策略优化落地。',
          '骑手体验研究与功能迭代：定期组织“沉浸式”骑手体验（随单配送），撰写体验报告并将发现转化为产品迭代需求，持续改善App易用性。',
          '骑手反馈运营与补贴规则落地：建立系统性反馈分析机制，对接运营团队完成补贴与奖励规则的产品化落地，提升规则配置效率。'
        ]
      },
      {
        title: '关键业务挑战',
        items: [
          '定位不准带来的履约问题：平台上存在大量"收不到外卖"的投诉，其中相当比例来自定位系统不准确导致骑手找不到用户或用户地址输入错误。这不仅影响用户体验，还直接影响平台的履约承诺和口碑。',
          '骑手管理成本高、效率低：骑手着装标准化执行难度大，需要投入大量人力进行定期抽检；调度策略不够精准，派单准确率低导致骑手满意度下降与效率浪费。',
          '智能派单系统优化压力大：随着平台订单量快速增长，骑手对智能派单的投诉日益增多，但骑手反馈缺乏系统化的收集与分析机制，派单逻辑的优化缺乏足够的一线数据支撑。',
          '骑手App体验缺少系统性研究：产品团队对骑手实际工作场景缺乏深入了解，功能设计与骑手真实需求之间存在明显断层，需要建立直接的体验研究机制。',
          '骑手诉求与运营规则落地脱节：骑手反馈渠道分散，问题响应慢；补贴与奖励规则频繁调整，缺乏支撑快速配置与验证的运营工具。',
          '多团队协作复杂：问题涉及用户端、骑手端、平台端、地图服务商等多个系统，需要建立有效的跨团队协作与问题闭环机制。'
        ]
      },
      {
        title: '我主导的方向与机制',
        items: [
          {
            title: '方向1：定位系统全链路优化',
            points: [
              '全链路监控体系：和用户端、手淘外卖团队建立联合监控机制，实时跟踪定位相关的反馈与问题，快速发现异常',
              '定位报备能力：让用户在收不到订单时主动报备地址，形成反馈库并支持自主纠偏',
              '异常地址库建设：将高频异常地址标记沉淀，帮助骑手在实际履约中快速识别与解决',
              '多图商切换机制：引入多家地图供应商冗余，有效降低单一图商故障带来的业务停摆风险',
              '服务端反查机制：通过算法识别疑似定位异常的订单，提前进行履约预警与预前处理',
              '问题闭环：建立"反馈-分析-改进-验证"的长效循环，确保每个定位问题都有根治跟进'
            ]
          },
          {
            title: '方向2：骑手着装规范化体系',
            points: [
              '规范制定：明确着装标准与系统化检查机制，确保全网规范的可理解性与高可执行性',
              '系统化落地：在骑手App中上线着装提示与自查模块，配合自动识别算法和定期抽检机制提升着装率',
              '合规成本优化：通过系统化的机制设计和正向激励，减少对繁重纯人力抽检的依靠，用激励替代处罚驱动合规'
            ]
          },
          {
            title: '方向3：智能派单系统迭代与骑手反馈优化',
            points: [
              '骑手反馈结构化收集：设计并推行骑手派单反馈标签体系，在骑手App中上线快捷反馈入口，将零散口头抱怨转化为结构化数据',
              '数据分析与问题定位：建立派单反馈数据看板，交叉分析拒单率与反馈量，快速识别分派逻辑中的系统性瓶颈',
              '策略优化推动：将数据分析结论整理为算法需求，推动在派单权重重组中引入区域偏好、商家出餐预估等核心变量',
              'A/B验证与效果追踪：配合算法团队设计分组实验，追踪策略调整前后的骑手满意度、拒单率与超时率变化并完成闭环'
            ]
          },
          {
            title: '方向4：骑手体验研究与功能迭代',
            points: [
              '体验项目组织与执行：主导建立"骑手体验计划"，并组织产品/运营团队每季度随单或独立参与一线业务实操体验，累积超20人次',
              '体验报告撰写与沉淀：体验后主导产出包含"问题清单/痛点评级/修改排期"的结构化报告，对齐产研迭代，保障痛点按期重构',
              '功能迭代落地：推动导航与接单提示联动、取餐流程信息重新设计及结算极简明细化等数项交互优化，切实提升骑手使用流畅度',
              '长效研究常态机制化：将骑手体验计划列入季度常规定期动作，形成"体验 → 报告 → 排期 → 验证"的持续场景还原回路'
            ]
          },
          {
            title: '方向5：骑手反馈管理与补贴运营工具建设',
            points: [
              '多端反馈渠道闭环汇聚：整合App反馈、工单和客服等渠道，统一划分类别并建立规范化问题协同处置池',
              '标准化高频反馈诊断周报：制定反馈周报机制，实时透明解决效率与遗留积压，协助各部门负责人精准排危',
              '端到端闭环跟踪预警：建立"问题发现-定位到人-限期响应-销号结案"的追踪链路，对重大或高频诉求提供升级督办',
              '补贴与奖励策略工具化配置：将高峰天气防暑等多项补贴及排行榜单活动规则进行产品化建模，上线配置工具让发布提效至天级',
              '补贴与福利账单透明展示：优化骑手端收益账单可读性和图文注解，清晰还原规则，大幅削减了不解和纠纷申诉率'
            ]
          }
        ]
      },
      {
        title: '阶段性结果',
        items: [
          {
            title: '结果1：定位系统优化的履约质量提升',
            points: [
              '用户地址准确率：由96.7%提升至99.2%（提升2.5个百分点）',
              '相关反馈量：由58%（800条）降至13%（200条），相关反馈占比下降了79%',
              '业务影响：订单完成率提升、用户投诉率下降，对平台履约承诺的支撑显著提高'
            ]
          },
          {
            title: '结果2：骑手着装规范体系的成本与质量双提升',
            points: [
              '着装率：由60%提升至95%（提升35个百分点）',
              '成本节省：每周节省2名抽检人力成本，同时节省上万元的人工抽检开支',
              '业务影响：骑手整体服务形象大幅提升，用户体验与满意度相应提高'
            ]
          },
          {
            title: '结果3：智能派单优化的效率提升',
            points: [
              '拒单率下降：通过派单逻辑的系统性优化，骑手拒单率明显下降',
              '骑手满意度：派单合理性提升后，骑手超时率与投诉率下降，满意度明显改善',
              '数据闭环建立：建立了完整的派单反馈收集→分析→策略调整→验证的迭代机制'
            ]
          },
          {
            title: '结果4：骑手体验研究推动的功能改善',
            points: [
              '体验项目落地：累计组织20+人次参与骑手沉浸式体验，形成季度常规研究机制',
              '问题发现效率：相比纯线上调研，体验报告所发现的高价值问题密度提升明显，其中多个问题已转化为版本迭代需求',
              '功能改善：骑手App导航体验、取餐流程、结算明细等核心页面完成迭代优化，骑手App内功能反馈评分有所提升'
            ]
          },
          {
            title: '结果5：反馈管理与运营工具的效率提升',
            points: [
              '响应速度：骑手反馈问题平均响应时长明显缩短，高频问题解决率提升',
              '运营工具降本：补贴规则上线周期从约1周缩短至1天内，运营团队对技术资源的依赖大幅降低',
              '骑手收入透明度：补贴明细展示优化后，因收入疑问产生的客服咨询量下降'
            ]
          }
        ]
      }
    ],
    summary: '① **产品owner思维**：学会从问题诊断出发，建立全链路的监控与闭环机制。定位系统优化的案例让我理解了，要解决复杂业务问题，不能只优化单个环节，而要建立跨团队的协作与反馈体系。\n\n② **数据驱动的迭代**：每一个优化方向都是基于数据反馈与用户反馈做出的。通过建立清晰的监控指标，我学会了如何用数据指导产品决策，而非凭经验做判断。\n\n③ **系统化的规范落地**：骑手着装体系的案例让我理解了，仅有规范还不够，需要配合系统机制（激励、提示、抽检）才能真正驱动行为改变。这对后续在其他公司推进流程标准化提供了很好的参考。\n\n④ **一线沉浸研究方法**：骑手体验计划让我深刻认识到，产品经理必须真正进入用户的工作场景，才能发现那些在数据和报告中看不到的高价值问题。"去做一次骑手"揭示了导航体验、取餐流程等问题，这些在用研访谈中很难被清晰表述。\n\n⑤ **反馈→分析→跟踪的闭环机制**：通过骑手反馈管理的实践，建立了从多渠道收集、分类汇聚、优先级排序、责任归属到问题关闭的完整处理链路，培养了系统性处理用户反馈的能力。\n\n⑥ **运营产品化思维**：补贴与奖励规则的运营工具建设，让我理解了"让运营人员自助"而非"每次靠技术开发"的产品化思路，这种思路在后续领康、接力棒的运营产品设计中被持续应用。\n\n⑦ **跨部门协作能力**：定位系统优化涉及用户端、骑手端、手淘外卖、地图服务商等多个团队。学会了如何建立清晰的目标、责任分工与沟通机制，推动多团队的协作与问题闭环。',
    achievements: [], 
    skills: ['全链路优化', '物流履约', '数据驱动', '骑手管理', '运营产品化']
  }
};

const renderFormattedText = (text: string) => {
  const parts = text.split(/(\*\*[^*]+\*\*)/g);
  return parts.map((part, index) => {
    if (part.startsWith('**') && part.endsWith('**')) {
      return <strong key={index} className="font-bold text-brand-dark">{part.slice(2, -2)}</strong>;
    }
    return part;
  });
};

export default function ExperienceDetail() {
  const { openModal } = useModal();
  const { id } = useParams();
  const exp = experiences[id as keyof typeof experiences];

  if (!exp) return <div className="text-center py-40">未找到相关经验</div>;

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main className="pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-6 mb-12">
          <Link to="/#resume" className="inline-flex items-center gap-2 text-gray-400 hover:text-brand-orange font-medium transition-colors group">
            <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
            返回经验列表
          </Link>
        </div>

        <section className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            
            {/* Sidebar with Meta Info */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="lg:col-span-4 space-y-8"
            >
              <div className="bg-brand-gray p-8 rounded-[3rem] space-y-6">
                <div className="flex items-center gap-4 text-brand-dark">
                  <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-sm">
                    <Building2 className="text-brand-orange" size={24} />
                  </div>
                  <div>
                    <div className="text-sm text-gray-400 font-bold uppercase tracking-wider">公司</div>
                    <div className="text-lg font-bold">{exp.company}</div>
                  </div>
                </div>

                <div className="flex items-center gap-4 text-brand-dark">
                  <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-sm">
                    <Calendar className="text-brand-orange" size={24} />
                  </div>
                  <div>
                    <div className="text-sm text-gray-400 font-bold uppercase tracking-wider">周期</div>
                    <div className="text-lg font-bold">{exp.date}</div>
                  </div>
                </div>

                <div className="flex items-center gap-4 text-brand-dark">
                  <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-sm">
                    <MapPin className="text-brand-orange" size={24} />
                  </div>
                  <div>
                    <div className="text-sm text-gray-400 font-bold uppercase tracking-wider">地点</div>
                    <div className="text-lg font-bold">{exp.location}</div>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-bold uppercase tracking-widest text-gray-400 px-4">核心技能</h3>
                <div className="flex flex-wrap gap-2 px-2">
                  {exp.skills.map(skill => (
                    <span key={skill} className="bg-white border border-gray-100 px-4 py-2 rounded-full text-sm font-semibold shadow-sm">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {exp.summary && (
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  className="bg-brand-gray/50 p-8 rounded-[2.5rem] border border-brand-orange/10 space-y-4"
                >
                  <h2 className="text-2xl font-bold flex items-center gap-3 text-brand-dark">
                    <Sparkles className="text-brand-orange" size={24} />
                    我的价值总结
                  </h2>
                  <p className="text-lg text-gray-600 leading-relaxed font-medium whitespace-pre-line">
                    {renderFormattedText(exp.summary)}
                  </p>
                </motion.div>
              )}
            </motion.div>

            {/* Main Content */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="lg:col-span-8 space-y-12"
            >
              <div className="space-y-6">
                 <h1 className="text-5xl md:text-7xl font-bold text-brand-dark leading-tight italic uppercase">
                   {exp.title}
                 </h1>
                 <p className="text-xl text-gray-500 leading-relaxed max-w-3xl">
                   {exp.desc}
                  </p>
                  {exp.company === '领康科技' && (
                    <motion.div 
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      className="mt-8 rounded-[2rem] overflow-hidden border border-gray-100 shadow-lg"
                    >
                      <img 
                        src="/portfolio/src/assets/images/lengkang_platform.png" 
                        alt="平台架构与学生产品路径" 
                        className="w-full h-auto"
                      />
                    </motion.div>
                  )}
                    {exp.company === '接力棒科技' && (
                      <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="mt-8 rounded-[2rem] overflow-hidden border border-gray-100 shadow-lg"
                      >
                        <img 
                          src="/portfolio/src/assets/images/JLB_platform.png" 
                          alt="接力棒 CRM 与增长平台" 
                          className="w-full h-auto"
                        />
                      </motion.div>
                    )}
                   {exp.company === '饿了么' && (
                     <motion.div 
                       initial={{ opacity: 0, y: 20 }}
                       whileInView={{ opacity: 1, y: 0 }}
                       className="mt-8 rounded-[2rem] overflow-hidden border border-gray-100 shadow-lg"
                     >
                       <img 
                         src="/portfolio/src/assets/images/ele_platform.png" 
                         alt="饿了么物流侧骑手管理与履约体系" 
                         className="w-full h-auto"
                       />
                     </motion.div>
                   )}
                 {exp.company === '网易数帆' && (
                   <motion.div 
                     initial={{ opacity: 0, y: 20 }}
                     whileInView={{ opacity: 1, y: 0 }}
                     className="mt-8 rounded-[2rem] overflow-hidden border border-gray-100 shadow-lg"
                   >
                     <img 
                       src="/portfolio/src/assets/images/org_chart_growth.png" 
                       alt="增长体系组织架构" 
                       className="w-full h-auto"
                     />
                   </motion.div>
                 )}
              </div>

              <div className="space-y-12">
                {exp.sections ? (
                  exp.sections.map((section, sIndex) => (
                    <div key={sIndex} className="space-y-6">
                      <h2 className="text-3xl font-bold flex items-center gap-4 text-brand-dark">
                        {section.title} <div className="h-0.5 flex-1 bg-gray-100" />
                      </h2>
                      <div className="grid grid-cols-1 gap-4">
                        {section.items.map((item, iIndex) => {
                          const isStringItem = typeof item === 'string';
                          if (!isStringItem) {
                            const objItem = item as { title: string; points: string[] };
                            return (
                              <motion.div 
                                key={iIndex}
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: iIndex * 0.05 }}
                                className="p-6 rounded-3xl border border-gray-50 bg-brand-gray/10 group hover:border-brand-orange/20 transition-all space-y-4"
                              >
                                <div className="flex items-center gap-3 text-brand-dark font-bold text-xl border-b border-gray-100/50 pb-3">
                                  <div className="shrink-0 w-8 h-8 rounded-full bg-brand-orange/10 flex items-center justify-center text-brand-orange">
                                    <Sparkles size={16} />
                                  </div>
                                  <h3>{objItem.title}</h3>
                                </div>
                                <div className="space-y-3.5 pl-2">
                                  {objItem.points.map((pt, pIdx) => (
                                    <div key={pIdx} className="flex gap-3">
                                      <div className="shrink-0 w-5 h-5 mt-1 rounded-full bg-brand-orange/10 flex items-center justify-center text-brand-orange">
                                        <CheckCircle2 size={12} strokeWidth={3} />
                                      </div>
                                      <p className="text-lg text-gray-600 leading-relaxed font-normal">
                                        {pt}
                                      </p>
                                    </div>
                                  ))}
                                </div>
                              </motion.div>
                            );
                          }

                          const strItem = item as string;
                          return (
                            <motion.div 
                              key={iIndex}
                              initial={{ opacity: 0, x: 20 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              transition={{ delay: iIndex * 0.05 }}
                              className="flex gap-4 p-5 rounded-2xl border border-gray-50 bg-brand-gray/20 group hover:border-brand-orange/20 transition-all"
                            >
                              <div className="shrink-0 w-6 h-6 mt-1 rounded-full bg-brand-orange/20 flex items-center justify-center text-brand-orange">
                                <CheckCircle2 size={14} strokeWidth={3} />
                              </div>
                              <p className="text-lg text-gray-600 leading-relaxed whitespace-pre-line">
                                {(() => {
                                  const idxEng = strItem.indexOf(':');
                                  const idxZho = strItem.indexOf('：');
                                  let idx = -1;
                                  if (idxEng !== -1 && idxZho !== -1) {
                                    idx = Math.min(idxEng, idxZho);
                                  } else if (idxEng !== -1) {
                                    idx = idxEng;
                                  } else {
                                    idx = idxZho;
                                  }
                                  if (idx !== -1 && idx < 30) {
                                    return (
                                      <>
                                        <strong className="font-bold text-brand-dark">{strItem.substring(0, idx + 1)}</strong>
                                        {strItem.substring(idx + 1)}
                                      </>
                                    );
                                  }
                                  return strItem;
                                })()}
                              </p>
                            </motion.div>
                          );
                        })}
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="space-y-8">
                     <h2 className="text-3xl font-bold flex items-center gap-4 text-brand-dark">
                       核心成就 <div className="h-0.5 flex-1 bg-gray-100" />
                     </h2>
                     <div className="grid grid-cols-1 gap-6">
                        {exp.achievements.map((item, index) => (
                          <motion.div 
                            key={index}
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className="flex gap-6 p-6 rounded-3xl border border-gray-100 hover:border-brand-orange/30 transition-colors bg-white group"
                          >
                            <div className="shrink-0 w-12 h-12 bg-brand-orange/10 text-brand-orange rounded-full flex items-center justify-center font-bold text-xl group-hover:bg-brand-orange group-hover:text-white transition-colors">
                              {index + 1}
                            </div>
                            <p className="text-lg text-gray-500 leading-relaxed pt-1">
                              {item}
                            </p>
                          </motion.div>
                        ))}
                     </div>
                  </div>
                )}
              </div>

              <div className="bg-brand-orange rounded-[3rem] p-12 text-white flex flex-col md:flex-row items-center justify-between gap-8">
                 <div className="space-y-2 text-center md:text-left">
                    <h3 className="text-4xl font-bold">想要获得同样的结果？</h3>
                    <p className="text-white/80 text-lg font-medium tracking-wide">让我们一起打造卓越产品。</p>
                 </div>
                  <button 
                  onClick={() => openModal()}
                  className="bg-white text-brand-dark px-10 py-4 rounded-full font-bold text-lg hover:bg-brand-dark hover:text-white transition-colors"
                 >
                    联系我
                 </button>
              </div>
            </motion.div>

          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
