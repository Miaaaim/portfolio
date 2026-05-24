# GitHub + EdgeOne 部署执行清单

本清单按可执行顺序编排。你可以一条条执行并核验结果。

## 0. 目标

1. 代码托管在 GitHub。
2. 由 EdgeOne 托管并发布静态站点。
3. 使用自定义域名 + HTTPS。
4. 中国大陆可访问（免备案前提下通常可访问，但速度受跨境链路影响）。

## 1. 本地准备

在项目根目录执行：

```bash
npm ci
npm run lint
npm run build
```

预期结果：

1. `dist/` 目录成功生成。
2. 无 TypeScript 报错。

## 2. 接入 GitHub 远程

当前仓库如果已经有 Gitee 远程，建议保留为镜像远程。

```bash
git remote rename origin gitee
git remote add origin git@github.com:<你的GitHub账号>/<你的仓库名>.git
git remote -v
```

预期结果：

1. 同时看到 `origin`(GitHub) 与 `gitee`(Gitee) 两个远程。

推送主分支到 GitHub：

```bash
git push -u origin main
```

可选：同步到 Gitee：

```bash
git push -u gitee main
```

## 3. 启用 GitHub Actions CI

仓库已提供 `.github/workflows/ci.yml`。

该工作流会在 `main` 分支推送和 PR 时自动执行：

1. `npm ci`
2. `npm run lint`
3. `npm run build`

预期结果：

1. GitHub 仓库 `Actions` 页面出现 CI 记录。
2. CI 为绿色通过。

## 4. 在 EdgeOne 创建项目并绑定 GitHub

在 EdgeOne 控制台：

1. 创建 Pages/静态站点项目。
2. 连接 GitHub 仓库。
3. 选择分支 `main`。
4. 构建命令：`npm run build`
5. 输出目录：`dist`
6. Node 版本：`20`

预期结果：

1. 自动触发首次部署。
2. 获得临时访问域名并可打开首页。

## 5. 绑定自定义域名与 HTTPS

1. 在 EdgeOne 项目中添加自定义域名。
2. 按控制台提示在域名 DNS 处配置记录。
3. 开启自动 HTTPS 证书。

预期结果：

1. `https://你的域名` 可访问。
2. 无证书告警。

## 6. 配置生产规则（必须）

在 EdgeOne 规则中配置：

1. SPA 回退：非静态资源路径回退到 `/index.html`。
2. 缓存策略：
   - `/index.html` 短缓存或不缓存。
   - `/assets/*` 长缓存（例如 30 天）+ immutable。
3. 开启 Brotli/Gzip、HTTP/2/3。
4. 开启基础 WAF 与限速策略。

## 7. 验收清单

访问并测试：

1. `/`
2. `/project/ai-agent`
3. `/project/rider-app`

每个路径都执行：

1. 直接打开。
2. 刷新页面。
3. 新标签页粘贴访问。

预期结果：

1. 均可访问。
2. 刷新不 404。

## 8. 回滚策略

1. 保留 EdgeOne 历史部署版本。
2. 出现异常时一键回滚上一个稳定版本。

## 9. 安全提醒

当前项目有前端环境变量注入逻辑。生产环境不要把真实私钥直接放到前端构建产物中。
建议改为服务端代理 API，再由前端调用代理接口。
