# 页面与模块清单（内容替换用）

## 1. 页面清单（Route -> Page）

| 路由 | 页面文件 | 页面用途 | 主要可替换内容入口 |
| --- | --- | --- | --- |
| `/` | `src/pages/Home.tsx` | 首页聚合页 | 首页模块编排顺序（Hero/Services/Experience...） |
| `/service/web-design` | `src/pages/ServiceDetail.tsx` | 服务详情页 | `steps` 数组（标题、描述、图片、features） |
| `/experience/:id` | `src/pages/ExperienceDetail.tsx` | 工作经历详情页 | `experiences` 对象（按 id） |
| `/project/:id` | `src/pages/ProjectDetail.tsx` | 项目详情页 | `projects` 对象（按 id） |

说明：路由定义在 `src/App.tsx`。

---

## 2. 动态 ID 清单（用于精确描述“改哪一页”）

### 2.1 工作经历 ID（`/experience/:id`）

- `lingkang`
- `netease`
- `jielibang`
- `eleme`

对应详情数据源：`src/pages/ExperienceDetail.tsx` 的 `experiences`。

### 2.2 项目 ID（`/project/:id`）

- `growth-hacker`
- `ai-apps`
- `ai-agent`
- `ai-skills`
- `ai-image`
- `sports-app`
- `saas-system`
- `crm-system`
- `student-app`
- `rider-app`

对应详情数据源：`src/pages/ProjectDetail.tsx` 的 `projects`。

---

## 3. 首页模块清单（`src/pages/Home.tsx` 渲染顺序）

1. `Header`
2. `Hero`
3. `Services`
4. `Experience`
5. `Portfolio`
6. `Testimonials`
7. `Education`
8. `StrengthsWeaknesses`
9. `SkillsTicker`
10. `Blog`
11. `Footer`
12. `AgentFloatingEntry`

---

## 4. 模块清单（按组件）

### 4.1 导航与全局交互

- `src/components/Header.tsx`
  - 导航项 `navItems`
  - 顶部“联系我”按钮（打开联系人弹窗）
- `src/components/ScrollToTop.tsx`
  - 路由切换滚动逻辑
- `src/context/ModalContext.tsx`
  - 弹窗状态：`contact` / `agent`
- `src/components/ContactModal.tsx`
  - 联系弹窗 + Agent iframe 弹窗
  - 可替换：Agent 链接、微信二维码、手机号、邮箱
- `src/components/AgentFloatingEntry.tsx`
  - 右下角 Mia 分身入口（打开 Agent 弹窗）

### 4.2 首页内容模块

- `src/components/Hero.tsx`
  - 可替换：主标题、打字词 `TYPING_TEXTS`、头像图、标签、GitHub/微信入口
- `src/components/Services.tsx`
  - 可替换：`serviceGroups`（服务卡片标题、图片、链接）
- `src/components/Experience.tsx`
  - 可替换：`experiences`（公司、时间、职位、摘要）
- `src/components/Portfolio.tsx`
  - 可替换：`projects`（项目卡片 id、标题、分类、图片、摘要）
- `src/components/Testimonials.tsx`
  - 可替换：`testimonials`（名字、角色、头像、评价）
- `src/components/Education.tsx`
  - 可替换：`education`（学校、时间、学位、地点）
- `src/components/StrengthsWeaknesses.tsx`
  - 可替换：`wordData`（优势/劣势词云内容与权重）
- `src/components/SkillsTicker.tsx`
  - 可替换：`skills`（滚动技能词）
- `src/components/Blog.tsx`
  - 可替换：`posts`（标题、图片）
- `src/components/Footer.tsx`
  - 可替换：底部 slogan 与按钮文案

### 4.3 详情页内容模块

- `src/pages/ServiceDetail.tsx`
  - 结构：返回入口、Hero、步骤区、CTA
  - 主要替换：`steps` 数组 + Hero/CTA 文案

- `src/pages/ExperienceDetail.tsx`
  - 结构：返回入口、经历头图信息、职责与挑战、成果、总结、技能标签
  - 主要替换：`experiences[id]` 下各字段（`desc`、`sections`、`summary`、`skills`）

- `src/pages/ProjectDetail.tsx`
  - 结构：返回入口、项目信息头、impact、challenge/goals、features、设计思路、Q&A、总结等（按项目不同有条件渲染）
  - 主要替换：`projects[id]` 下字段（常见：`title`、`category`、`desc`、`impact`、`tags`、`challengeAndGoals`、`features`、`designThinking`、`qas`、`summary`、`image`）

---

## 5. 目前存在但未在首页渲染的组件

- `src/components/Contact.tsx`
- `src/components/HireMe.tsx`

可作为后续新增区块候选。

---

## 6. 后续提需求推荐话术（可直接复制）

### 6.1 页面级

- 请修改 `/project/ai-agent` 页面内容，重点调整项目描述、impact 和 Q&A。
- 请把 `/experience/netease` 的“关键业务挑战”改成更偏增长运营视角。

### 6.2 模块级

- 请修改首页 `Hero`：主标题改为 XX，打字词改为 A/B/C，头像改为 XX 图片。
- 请修改首页 `Services` 第二组卡片：标题和图片替换为 XX，链接改为 `/project/xxx`。

### 6.3 字段级（最精确）

- 请修改 `ProjectDetail` 的 `projects["ai-skills"].features[0].prompt` 文案。
- 请修改 `ExperienceDetail` 的 `experiences["lingkang"].summary`，保留三段式结构。

---

## 7. 最小描述模板（你给我改内容时可直接套）

- 页面：`/project/<id>` 或 `/experience/<id>`
- 区块：如 `impact` / `features` / `summary`
- 修改类型：替换文案 / 新增条目 / 删除条目 / 调整顺序
- 风格要求：专业/口语/简洁/数据化
- 约束：字数上限、是否保留原结构、是否保留已有数据指标

示例：
“请改 `/project/growth-hacker`，只改 `impact` 和 `summary`。保留原有数据指标，语气更偏面试表达，`summary` 控制在 120 字内。”
