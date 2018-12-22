## 规范

## HTML

- 使用两个空格作为缩进
- 嵌套元素应当缩进一次(即两个空格)
- 对于属性的定义，确保全部使用双引号，绝不使用单引号
- 不要在自闭合元素的尾部添加斜线
- 不要省略可选的结束标签(closing tag) (例如</li>或者</body>)
- 尽量遵循 HTML 标准和语义 但是不要以牺牲实用性为代价
- HTML 标签采用小写
- HTML 属性应当按照以下给出的顺序依次排列 确保代码的易读性
  - class
  - id name
  - data-
  - src for type href value
  - title alt
  - role aria-
  - v-for v-if v-show
  - v-directives v-model v-html v-bind v-on @xxx

### css

- 使用 csscomb 遵循配置好的 csscomb 属性规则
- 类目使用单词加横杠命名(如：container-header)
- id 命名使用驼峰写法(如：personName)
- 组件内 css 类名以该组件名为前缀(如：组件名 dialog,则类名为 dialog-container)
- 类名不宜过度简单 应有意义
- 使用 less 作为预处理语言
- 无需写针对各个浏览器的前缀 前缀由 webpack 自动添加

### js

- 使用 eslint 遵循 eslint 的 standard 标准 以及 vue-cli 生成的 eslint 配置标准
- 变量命名为驼峰写法
- 命名不宜过度简洁 应有意义
