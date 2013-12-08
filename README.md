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


`files` 中的 `src` 为模版路径

`files` 中的 `dest` 为输出路径


原tmodjs有配备的watch功能,在grunt中统一使用[watch插件](https://github.com/gruntjs/grunt-contrib-watch)来实现,所以取消了grunt-tmodjs中的watch参数.具体设置方法可以参照下面带watch的配置示例,也可以参考[grunt-contrib-watch](https://github.com/gruntjs/grunt-contrib-watch)官网的说明.



其他参数和tmodjs的设置一样,只要对应在Gruntfile中进行对应的配置即可.

`debug` 默认为 `false`

`charset` 默认为 `utf-8`

`type` 默认为 `templatejs`

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
                src: 'test/tpl'
            },
            options: {
                debug : false,
                charset : "utf-8",
                type: "templatejs"
                dest: './output/'
            }
        }
    });

    grunt.loadNpmTasks('grunt-tmod');

    grunt.registerTask('default', ['tmod']);

};

```



#### 多任务配置示例

```
"use strict";

module.exports = function(grunt){

    // 项目配置
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        tmod: {
            task1 : {
                files: [{
                    src: 'test/tpl',
                    dest: './output/'
                }],
                options: {
                    debug : false,
                    charset : "utf-8",
                    type: "templatejs"
                }
            },
            task2: {
                files: [{
                    src: 'test/tpl',
                },{
                    src: 'test/tpl2',
                }],
                options: {
                    debug : true,
                    charset : "utf-8",
                    type: "templatejs"
                }
            }
        }
    });


    grunt.loadNpmTasks('grunt-tmod');

    grunt.registerTask('default', ['tmod:task1']);

};

```

注意,dest路径是相对于src而言,如上代码设置,最后的dest目录将在 `test/tpl` 下生成.

####<span name="watchExample">带watch插件配置示例(注意要先安装watch插件)</span>

```shell
npm install grunt-contrib-watch --save-dev
```

```
"use strict";

module.exports = function(grunt){

    // 项目配置
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        tmod: {
            files: {
                src: 'test/tpl',
                dest: './output/'
            },
            options: {
                debug : false,
                charset : "utf-8",
                type: "templatejs"
            }
        },
        watch: {
            scripts: {
                files: ['test/tpl/*.*'],
                tasks: ['tmod'],
                options: {}
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-tmod');

    grunt.registerTask('default', ['tmod','watch']);
    grunt.registerTask('dest', ['tmod']);

};

```

## Release History

v 0.1.6 修复dest的路径问题 , 原本`dest`属性是放在files属性里 , 0.1.6版本后建议将 `dest` 属性放在 `option` 中, 如本篇 readMe 的代码所示. 
如果有多个模版文件目录需要配置,建议使用多个任务的方式来配置,不建议在`src`中放入路径数组.  13-12-08

v 0.1.5 修复不支持多任务的bug 13-11-14

v 0.1.4 去除掉打包的tmodjs改为依赖,将内置tmod依赖改为0.0.2版本 13-11-11

v 0.1.3 第二个版本,配合npm修改版本号,加上参数识别功能  13-11-10

v 0.0.1 第一个版本  13-10-23


## License

The MIT license.