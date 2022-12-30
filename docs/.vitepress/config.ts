import { generateSitemap as sitemap } from 'sitemap-ts'
import sidebar from "./sidebar";
import socialLinks from "./link";
import algolia from "./algolia";


export default {
  outDir: '../dist',
  title: "Fcsummer",
  description: "Front-end learning document collection.",
  lastUpdated: true,
  markdown: {
    theme: "material-palenight",
    lineNumbers: true,
  },
  themeConfig: {
    outline: 'deep',
    recommend: {
      mpwx: "https://fbk-blog-bucket.oss-cn-qingdao.aliyuncs.com/money",
    },
    footer: {
      message: "Released under the MIT License.",
      copyright: "Copyright © 2022-PRESENT Chocolate and ChoDocs contributors",
    },
    nav: [
      { text: "🔥 算法", link: "/算法/" },
      { text: "🔥 java", link: "/java/" },
      { text: "🔧 js", link: "/js/" },
      { text: "✏️ vue", link: "/vue/" },
      { text: "🌱 react", link: "/react/" },
      { text: "🔥 spring", link: "/spring/" },
      { text: "🔥 c", link: "/c/" },
      { text: "🔧 python", link: "/python/" },
      { text: "✏️ go", link: "/go/" },
      { text: "🌱 ts", link: "/ts/" },
      // { text: "🌱 计算机基础", link: "/green/ch" },
    ],
    editLink: {
      pattern: "https://github.com/fbk111",
    },
    algolia,
    sidebar,
    socialLinks,
  },
  async buildEnd() {
    await sitemap({ hostname: 'https://blogfbk.top/' });
  }
}
