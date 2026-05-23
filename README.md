<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://ai.google.dev/static/site-assets/images/share-ais-513315318.png" />
</div>

# Run and deploy your AI Studio app

This contains everything you need to run your app locally.

View your app in AI Studio: https://ai.studio/apps/0c11585c-2ec6-4808-8951-0cfdb73d66ad

## Run Locally

**Prerequisites:**  Node.js


1. Install dependencies:
   `npm install`
2. Set the `GEMINI_API_KEY` in [.env.local](.env.local) to your Gemini API key
3. Run the app:
   `npm run dev`

## 图片命名规范（src/assets/images）

为避免时间戳、临时序号和命名歧义，项目图片统一采用语义化命名。

### 1. 通用规则

1. 全部使用小写字母。
2. 单词之间使用连字符 `-`，不使用空格和下划线。
3. 文件名只表达内容语义，不包含时间戳。
4. 有顺序的素材使用两位序号：`01`、`02`、`03`。
5. 保留原始文件扩展名（如 `.png`、`.jpg`、`.webp`、`.mp4`）。

### 2. 推荐命名模板

1. 项目封面：`project-cover-{topic}.png`
2. 博客封面：`blog-cover-{topic}.png|webp`
3. 服务步骤图：`service-step-{topic}-{index}.png`
4. 头像：`avatar-profile-{index}.png`
5. 博客文章配图：`blog-post-cover-{index}.png`
6. 通用主视觉：`hero-{topic}.png`
7. 公司或品牌聚合图：`company-{topic}.png`

### 3. 本次已落地命名（15项）

1. `branding_project_1779102314777.png` -> `project-cover-branding.png`
2. `more_sides_sports_taiko_1779111382673.webp` -> `blog-cover-sports-taiko.webp`
3. `more_sides_two_cats_1779111400698.png` -> `blog-cover-two-cats.png`
4. `more_sides_mini_house_1779111416032.png` -> `blog-cover-mini-house.png`
5. `web_design_step_1_1779101525900.png` -> `service-step-web-design-01.png`
6. `web_design_step_2_1779101544609.png` -> `service-step-web-design-02.png`
7. `web_design_step_3_1779101559233.png` -> `service-step-web-design-03.png`
8. `web_design_step_4_1779101574435.png` -> `service-step-web-design-04.png`
9. `hero_portrait_1779087699645.png` -> `hero-portrait.png`
10. `avatar_1_1779087834953.png` -> `avatar-profile-01.png`
11. `avatar_2_1779087850102.png` -> `avatar-profile-02.png`
12. `blog_post_1_1779087765785.png` -> `blog-post-cover-01.png`
13. `blog_post_2_1779087782531.png` -> `blog-post-cover-02.png`
14. `company_logos_1779102971451.png` -> `company-logos.png`
15. `more_sides_sports_taiko_1779111382673.png` -> `blog-cover-sports-taiko.png`

### 4. 新增素材命名检查清单

1. 是否为小写连字符命名。
2. 是否避免时间戳、空格、下划线。
3. 是否能通过文件名直接判断用途和内容。
4. 是否与现有命名模板一致。
5. 是否在引用代码中同步更新路径。
