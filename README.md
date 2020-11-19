# React App Template

React App Template 是一个快捷搭建 `webpack`+`react16` 开发环境的工具

## 使用方式

环境依赖：
nodeJS：v12.16.3

```console
> git clone https://github.com/Shadowin-Dark/react-app-template.git
> cd react-app-template
> npm install
...
> npm start
```

之后可以访问

> `http://localhost:30000/`

进行个人工程编辑

发版：

```console
>npm run build
>npm run server
```

之后可以同样访问

> `http://localhost:30000/`

浏览 PRD 版本

## 依赖说明

下面主要讲本项目的依赖包，以及与个人开发无关的可删减代码

### 前端代码编译打包相关

```code
|- package.json:
|   |- scripts
|   |    |- build
|   |    |- start
|   |- dependencies
|   |    |- babel
|   |    |- core-js
|   |    |- css-loader
|   |    |- style-loader
|   |    |- html-webpack-plugin
|   |    |- mini-css-extract-plugin
|   |    |- webpack
|   |- browserslist
|- .babelrc
|- webpack.config.js
```

> webpack

[webpack](https://webpack.js.org/) 是一个 JavaScript 应用程序的静态模块打包器(module bundler)，当 webpack 处理应用程序时,它会递归地构建一个依赖关系图(dependency graph)，其中包含应用程序需要的每个模块，然后将所有这些模块打包成一个或多个 bundle。

> > css-loader

使你能够使用类似@import 和 url（…）的方法实现 require 的功能。

> > style-loader

将所有的计算后的样式加入页面中

二者组合在一起使你能够把样式表嵌入 webpack 打包后的 js 文件中。

> > html-webpack-plugin

当使用 webpack 打包时，创建一个 html 文件，并把 webpack 打包后的静态文件自动插入到这个 html 文件当中

> > mini-css-extract-plugin

用于打包 css 文件，从 css 文件中提取 css 代码到单独的文件中，对 css 代码进行代码压缩等。

> babel

[babel](https://babeljs.io/) 是一个广泛使用的转码器，可以将 ES6 代码转为 ES5 代码，从而在现有环境执行。

> core-js

[zloirock/core-js](https://github.com/zloirock/core-js) 与 babel 连用 提供相关的的 polyfills

### websever 相关

```code
|- package.json:
|   |- scripts
|   |    |- server
|   |- dependencies
|   |    |- express
|- server.js
```

> express

[express](https://www.npmjs.com/package/express) 用于构建 webserver。本项目中 webserver 实现详见[server.js](https://github.com/Shadowin-Dark/react-app-template/blob/master/server.js)

### 代码检查优化相关

```code
|- package.json:
|   |- scripts
|   |    |- eslint
|   |    |- lint
|   |    |- stylelint
|   |- dependencies
|   |    |- lint-staged
|   |    |- eslint
|   |    |- prettier
|   |    |- stylelint
|   |    |- html-webpack-plugin
|   |    |- mini-css-extract-plugin
|   |    |- webpack
|   |- lint-staged
|   |- husky
|- .eslintrc.js
|- .prettierrc.js
|- .stylelintrc
```

> husky & lint-staged

[husky](https://www.npmjs.com/package/husky) 用于实现 Git Hook。在本项目中与 `lint-staged` 连用，实现 code commit 之前的代码检查。

[lint-staged](https://www.npmjs.com/package/lint-staged) 与 `lint` 和 `prettier` 连用，自动格式化代码。

> es-lint

> prettier

> stylelint

### 优化本地开发相关

```code
|- package.json:
|   |- scripts
|   |    |- start
|   |- dependencies
|   |    |- webpack-dev-server
|- webpack.dev.config.js
```

> webpack-dev-server

[webpack-dev-server](https://webpack.js.org/configuration/dev-server/) 是一个小型的 node.js Express 服务器,它使用 webpack-dev-middleware 中间件来为通过 webpack 打包生成的资源文件提供 Web 服务，可以为 webpack 打包生成的资源文件提供 Web 服务。

### demo publish 相关

```code
|- package.json:
|   |- scripts
|   |    |- demo
|- scripts
|   |- publish.sh
|- webpack.demo.config.js
```

用于本项目 demo 的发布，与个人项目无关
