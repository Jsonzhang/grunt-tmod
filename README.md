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


### 说明
原tmodjs有配备的watch功能,在grunt中统一使用watch插件来实现,所以取消了grunt-tmodjs中的watch参数.

其他参数和tmodjs的设置一样,只要对应在Gruntfile中进行对应的配置即可.

具体各个参数的意义及默认值请参考 [tmodjs](https://github.com/aui/tmodjs) 


#### 配置示例

```
"use strict";

module.exports = function(grunt){

    // 项目配置
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        tmod: {
            files: {
                src: 'test/tpl',
                dest: '../output/'
            },
            options: {
                watch: true,
                debug : true,
                charset : "utf-8",
                type: "templatejs"
            }
        }
    });

    grunt.loadNpmTasks('grunt-tmod');

    grunt.registerTask('default', ['tmod']);

};

```

## Release History

v 0.0.1 第一个版本  13-10-23

v 0.0.2 加上参数功能  13-11-10