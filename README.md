# grunt-tmod

>  前端模块工具 [tmodjs](https://github.com/aui/tmodjs) 的grunt自动化插件

## Getting Started
需要环境: Grunt `~0.4.1`

如果你没有用过 [Grunt](http://gruntjs.com/) , 可以先看一下 [新手入门](http://gruntjs.com/getting-started) 指南, 里面有讲解怎么创建一个 [Gruntfile](http://gruntjs.com/sample-gruntfile) 和如何使用grunt插件. 

顺路推荐 : [中文版的grunt社区](http://www.gruntjs.org/article/home.html)


安装插件:

```shell
npm install grunt-tmod --save-dev
```

安装完插件后要在gruntfile里面加上这句代码,载入这个插件:

```js
grunt.loadNpmTasks('grunt-tmod');
```


### 概览
在你项目里面的gruntfile里面,在 `grunt.initConfig()` 里面加上相应的执行参数

```js
grunt.initConfig({
  tmod: {
    options: {
      // Task-specific options go here.
    },
    your_target: {
      // Target-specific file lists and/or options go here.
    },
  },
})
```

### 使用范例

```js
grunt.initConfig({
  tmod: {
    options: {},
    files: {
      'dest/default_options': ['src/testing', 'src/123'],
    },
  },
})
```

#### 配置示例

```js
grunt.initConfig({
  tmod: {
    options: {
      separator: ': ',
      punctuation: ' !!!',
    },
    files: {
      'dest/default_options': ['src/testing', 'src/123'],
    },
  },
})
```



## Release History

v 0.0.1 第一个版本  13-10-23