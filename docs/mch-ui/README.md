---
title: mch-ui安装指南
date: 2020-05-29
---

#  安装指南

##  快速上手

###     使用vue-cli创建vue项目

    > npm i -g mcf-cli
    > mcf create-vue your-project
    > npm i && npm run dev
###  引入mch-ui组件库

推荐使用 npm 的方式安装，它能更好地和 webpack 打包工具配合使用。

    npm i mch-ui -S

全局引入
在 main.js 中写入以下内容：

    import Vue from 'vue'
    import App from './App.vue'

    import MCUI from "mch-ui";
    import 'mch-ui/lib/mch-ui.css'
    Vue.use(MCUI)

    new Vue({
    el: '#app',
    render: h => h(App)
    })