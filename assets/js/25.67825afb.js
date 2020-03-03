(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{219:function(a,s,t){"use strict";t.r(s);var e=t(28),v=Object(e.a)({},(function(){var a=this,s=a.$createElement,t=a._self._c||s;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("p",[a._v("Node.js\n")]),a._v(" "),t("h1",{attrs:{id:"珠峰"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#珠峰"}},[a._v("#")]),a._v(" 珠峰")]),a._v(" "),t("h2",{attrs:{id:"node-js-全局，核心对象，异步io"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#node-js-全局，核心对象，异步io"}},[a._v("#")]),a._v(" node.js{全局，核心对象，异步IO}")]),a._v(" "),t("h3",{attrs:{id:"分类"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#分类"}},[a._v("#")]),a._v(" 分类")]),a._v(" "),t("ul",[t("li",[a._v("全局对象:  何时何处都能访问")]),a._v(" "),t("li",[a._v("核心对象:  向系统索要,引入即可使用")]),a._v(" "),t("li",[a._v("自定义对象:  按路径引入即可")])]),a._v(" "),t("h3",{attrs:{id:"process（全局对象）"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#process（全局对象）"}},[a._v("#")]),a._v(" process（全局对象）")]),a._v(" "),t("ul",[t("li",[a._v("每个系统的环境变量几乎都不一样，可以利用环境变量中的具体某个特定的值来区分不同的机器")]),a._v(" "),t("li",[a._v("process.env 是一个对象，我们可以通过其.属性名来获取具体的环境变量值\n"),t("ul",[t("li",[a._v("设置一个特定的环境变量,以达到简单区分不同的机器,从而针对生产/开发环境运行不同的效果")])])]),a._v(" "),t("li",[a._v("process.argv 获取命令行参数")])]),a._v(" "),t("h3",{attrs:{id:"filename-dirname（全局对象）"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#filename-dirname（全局对象）"}},[a._v("#")]),a._v(" filename/dirname（全局对象）")]),a._v(" "),t("ul",[t("li",[a._v("__filename 获取当前运行文件的目录,绝对路径")]),a._v(" "),t("li",[a._v("__dirname 当前运行文件的绝对路径")])]),a._v(" "),t("h3",{attrs:{id:"node-js实现规范"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#node-js实现规范"}},[a._v("#")]),a._v(" node.js实现规范")]),a._v(" "),t("ul",[t("li",[a._v("CommonJS   :  规范JavaScript语言作为后端语言运行的标准\n"),t("ul",[t("li",[a._v("具备什么能力,该怎么做 ,比如: 具备服务器的功能/  可以操作文件 .....")]),a._v(" "),t("li",[a._v("模块应该怎么写: Module :\n"),t("ul",[t("li",[a._v("1:依赖一个模块   require('模块名(id)')")]),a._v(" "),t("li",[a._v("2: 需要被模块依赖   module.exports = 给外部的数据")]),a._v(" "),t("li",[a._v("3:一个文件是一个模块")])])])])])]),a._v(" "),t("h3",{attrs:{id:"核心对象path"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#核心对象path"}},[a._v("#")]),a._v(" 核心对象path")]),a._v(" "),t("ul",[t("li",[t("code",[a._v("const path = require('path');")])]),a._v(" "),t("li",[a._v("路径 -> 在处理路径的时候很擅长,但是,其不负责判断路径是否存在文件")]),a._v(" "),t("li",[a._v("拼接并修正路径 "),t("code",[a._v("path.join(__dirname,'a','b');")]),a._v(" 以当前目录/a/b")]),a._v(" "),t("li",[t("code",[a._v("path.resovle('./xxx') 相对转绝对")])]),a._v(" "),t("li",[a._v("接收一个合法的路径字符串，转换成一个对象")]),a._v(" "),t("li",[t("code",[a._v("let pathObj = path.parse(mypath);")])]),a._v(" "),t("li",[a._v("接收一个路径对象，转换成一个字符串路径")]),a._v(" "),t("li",[t("code",[a._v("let str = path.format(pathObj);")])])]),a._v(" "),t("div",{staticClass:"language-javascript line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-javascript"}},[t("code",[t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v(" root"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v("'C:\\\\'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n  dir"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v("'C:\\\\Users\\\\孙悟空'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n  base"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v("'金箍棒.txt'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("   "),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// 该属性可以用于修改文件名和后缀")]),a._v("\n  ext"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v("'.txt'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n  name"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v("'金箍棒'")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br"),t("span",{staticClass:"line-number"},[a._v("3")]),t("br"),t("span",{staticClass:"line-number"},[a._v("4")]),t("br"),t("span",{staticClass:"line-number"},[a._v("5")]),t("br")])]),t("ul",[t("li",[a._v("__注意:path对象是方便我们操作路径的,对于获取来讲: parse解析成对象,format转换成字符串.join拼接并修正....")]),a._v(" "),t("li",[a._v("对于修改路径对象来讲,可以用base属性更改,不能用name,ext更改__")])]),a._v(" "),t("h2",{attrs:{id:"node-js是什么"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#node-js是什么"}},[a._v("#")]),a._v(" Node.js是什么?")]),a._v(" "),t("ul",[t("li",[a._v("阻塞I/O时进程休眠等待I/O完成后进行下一步(input/outpt)")]),a._v(" "),t("li",[a._v("非阻塞:I/O时函数立即返回,进程不等待I/O完成")]),a._v(" "),t("li",[a._v("在处理高并发,I/O密集场景性能优势明显")])]),a._v(" "),t("h3",{attrs:{id:"事件驱动"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#事件驱动"}},[a._v("#")]),a._v(" 事件驱动")]),a._v(" "),t("ul",[t("li",[a._v("I/O等异步操作结束后的通知")]),a._v(" "),t("li",[a._v("观察者网模式")])]),a._v(" "),t("h3",{attrs:{id:"cpu密集-vs-i-o密集"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#cpu密集-vs-i-o密集"}},[a._v("#")]),a._v(" CPU密集 VS I/O密集")]),a._v(" "),t("ul",[t("li",[a._v("CPU: 压缩,解压,加密,解密")]),a._v(" "),t("li",[a._v("I/O: 文件操作,网络操作,数据库")])]),a._v(" "),t("h3",{attrs:{id:"web常见场景"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#web常见场景"}},[a._v("#")]),a._v(" web常见场景")]),a._v(" "),t("ul",[t("li",[a._v("静态资源读取")]),a._v(" "),t("li",[a._v("数据库操作")]),a._v(" "),t("li",[a._v("渲染页面")])]),a._v(" "),t("h3",{attrs:{id:"高并发应对之道"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#高并发应对之道"}},[a._v("#")]),a._v(" 高并发应对之道")]),a._v(" "),t("ul",[t("li",[t("p",[a._v("增加机器数")])]),a._v(" "),t("li",[t("p",[a._v("增加每台机器的CPU")])]),a._v(" "),t("li",[t("p",[t("code",[a._v("进程")]),a._v(":计算机中程序关于某数据集合上的一次运动活动,是系统进行资源分配和调度的基本单位;(一个运行的程序)")])]),a._v(" "),t("li",[t("p",[t("code",[a._v("多进程")]),a._v(":启动多个进程,多个进程同时执行多个任务.")])]),a._v(" "),t("li",[t("p",[t("code",[a._v("线程")]),a._v(":进程内的一个相对独立的,可调度的执行单元,与同属一个进程的线程共享进程的资源;")])]),a._v(" "),t("li",[t("p",[t("code",[a._v("多线程")]),a._v(":启动多个线程,多个线程同时执行多个任务")])])]),a._v(" "),t("h3",{attrs:{id:"常用场景"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#常用场景"}},[a._v("#")]),a._v(" 常用场景")]),a._v(" "),t("ul",[t("li",[a._v("web Server")]),a._v(" "),t("li",[a._v("本地代码构建")]),a._v(" "),t("li",[a._v("实用工具开发")])]),a._v(" "),t("h2",{attrs:{id:"nodejs工作模型"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#nodejs工作模型"}},[a._v("#")]),a._v(" NodeJs工作模型")]),a._v(" "),t("img",{attrs:{src:"初学Node-js/node工作模型.jpg"}}),a._v(" "),t("h3",{attrs:{id:"nodejs的单线程"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#nodejs的单线程"}},[a._v("#")]),a._v(" NodeJS的单线程")]),a._v(" "),t("ul",[t("li",[a._v("单线程只是针对主进程,I/O操作系统底层多线程调度")]),a._v(" "),t("li",[a._v("单线程不是单进程")])]),a._v(" "),t("h2",{attrs:{id:"commonsjs"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#commonsjs"}},[a._v("#")]),a._v(" CommonsJS")]),a._v(" "),t("ul",[t("li",[a._v("每个文件是一个模块,有自己的作用域")]),a._v(" "),t("li",[a._v("在文件内部的module变量代表模块本身")]),a._v(" "),t("li",[a._v("moduke.exports 属性代表模块对外接口(输出)")])]),a._v(" "),t("h2",{attrs:{id:"require规则"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#require规则"}},[a._v("#")]),a._v(" require规则")]),a._v(" "),t("ul",[t("li",[t("code",[a._v("/")]),a._v("表示绝对路径,"),t("code",[a._v("./")]),a._v("表示相对与当前文件的相对路径")]),a._v(" "),t("li",[a._v("支持js,json,node拓展名,不写依次尝试")]),a._v(" "),t("li",[a._v("不写路径则认为是build-in模块或者各级node_modules内的第三方模块")])]),a._v(" "),t("h3",{attrs:{id:"require特性"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#require特性"}},[a._v("#")]),a._v(" require特性")]),a._v(" "),t("ul",[t("li",[a._v("module被加载的时候执行,加载后缓存")]),a._v(" "),t("li",[a._v("一旦某个模块被循环加载,只输出已经执行的部分,还未执行的部分不会输出")])])])}),[],!1,null,null,null);s.default=v.exports}}]);