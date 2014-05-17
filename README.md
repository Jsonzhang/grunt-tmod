# grunt-tmod

前端模板预编译工具 [tmodjs](https://github.com/aui/tmodjs) 的grunt自动化插件。

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

### 设置


##	src

*	类型：`String` | `Array`

模版文件

##	dest

*	类型：`String`

输出路径。

##	options

支持[tmodjs的配置](https://github.com/aui/tmodjs#配置)，还新增如下字段：

####	options.base

*	类型：`String`

指定模板的根目录，以便缩短编译后的模板id访问路径。

示例：

```
tmod: {
    template: {
        src: './tpl/src/**/*.html',
        dest: './dist/template.js',
        options: {
            base: './tpl/src'
        } 
    }
}
```

以某个模板为例，默认情况调用模板的路径将可能会很长：

	template('./tpl/src/home/main', data)
	
使用`base`后可以省略模板目录调用模板

	template('home/main', data)

##	示例

###	基本

```
module.exports = function(grunt){

    grunt.initConfig({
        tmod: {
            template: {
                src: './tpl/**/*.html',
                dest: './dist/template.js',
                options: {
                    combo: true
                } 
            }
        }
    });


    grunt.loadNpmTasks('grunt-tmod');

    grunt.registerTask('default', ['tmod']);

};

```

###	监控模板修改即时编译

> 原tmodjs有配备的watch功能,在grunt中统一使用[watch插件](https://github.com/gruntjs/grunt-contrib-watch)来实现,所以取消了grunt-tmodjs中的watch参数.具体设置方法可以参照下面带watch的配置示例,也可以参考[grunt-contrib-watch](https://github.com/gruntjs/grunt-contrib-watch)官网的说明.

先安装watch插件

```shell
npm install grunt-contrib-watch --save-dev
```

```
module.exports = function(grunt){

    grunt.initConfig({
        tmod: {
            template: {
                src: './tpl/**/*.html',
                dest: './dist/template.js',
                options: {
                    combo: true
                } 
            }
        },
        watch: {
            template: {
                files: '<%=tmod.template.src%>',
                tasks: ['tmod'],
                options: {
                    spawn: false
                }
            }
        }
    });


    grunt.loadNpmTasks('grunt-tmod');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('default', ['tmod', 'watch']);

};

```

###	使用调试模式编译

运行grunt任务的时候加上`--debug`参数即可：

	grunt --debug

## Release History

v 0.2.0 遵循标准的 grunt 路径配置规范，同时支持编译错误显示。注意：不兼容历史版本 14-04-30

v 0.1.6 修复dest的路径问题 , 原本`dest`属性是放在files属性里 , 0.1.6版本后建议将 `dest` 属性放在 `option` 中, 如本篇 readMe 的代码所示. 
如果有多个模版文件目录需要配置,建议使用多个任务的方式来配置,不建议在`src`中放入路径数组.  13-12-08

v 0.1.5 修复不支持多任务的bug 13-11-14

v 0.1.4 去除掉打包的tmodjs改为依赖,将内置tmod依赖改为0.0.2版本 13-11-11

v 0.1.3 第二个版本,配合npm修改版本号,加上参数识别功能  13-11-10

v 0.0.1 第一个版本  13-10-23


## License

The MIT license.