# 长护险数据新闻静态网页

打开 `changhuxian-data-news.html` 即可浏览。页面使用本地 CSS、JavaScript、ECharts（若环境中可用）与本地数据文件；没有 ECharts 时，图表脚本会自动降级为可读表格。

## 目录

- `changhuxian-data-news.html`：主页面
- `assets/styles/`：基础样式与叙事样式
- `assets/scripts/`：页面动效、图表、交互与生成式背景
- `data/sources.json`：结构化数据和来源口径
- `sources/`：从两个上传 Word 文件提取的文本来源
- `_shared/js/echarts.min.js`：本地 ECharts（如可用）
- `_shared/fonts/`：本地展示字体（如可用）

## 口径说明

页面数字来自用户上传新闻稿和排版说明。新闻稿中带有“约、超、截至、预计”等限定的内容在页面中保留限定，不改写为精确统计。职业测算仅用于报道互动演示，具体缴费标准以当地政策为准。
