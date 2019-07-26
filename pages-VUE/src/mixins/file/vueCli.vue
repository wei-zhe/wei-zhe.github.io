<script>

export default {
  name: 'vueCliJson',
  data (){
    return {
      vueCli : {
        type : 'Markdown',
        data : `<h2>一、调整项目结构</h2>
<p>首先用 vue-cli 创建一个 default 项目

</p>
<p>当前的项目目录是这样的：
</p>
<pre style="background: #282c34;color: #ff9401;"><code >    

    public
    src
    .getignore
    babel.config.js
    package.json
    readme.md

</code></pre>
<p>首先需要创建一个 <code>packages</code> 目录，用来存放组件

</p>
<p>然后将 src 目录改为 <code>examples</code> 用作示例
</p>
<pre style="background: #282c34;color: #ff9401;"><code >    
    
    examples
    packages
    public
    .getignore
    babel.config.js
    package.json
    readme.md

</code></pre>
<h2>二、修改配置</h2>
<p>启动项目的时候，默认入口文件是 <code>src/main.js</code>

</p>
<p>将 <code>src</code> 目录改为 <code>examples</code> 之后，就需要重新配置入口文件

</p>
<p>在根目录下创建一个 <code>vue.config.js</code> 文件

</p>
<pre style="background: #282c34;color: #ff9401;"><code >
    
    // vue.config.js

    module.exports = {
      // 将 examples 目录添加为新的页面
      pages: {
        index: {
          // page 的入口
          entry: 'examples/main.js',
          // 模板来源
          template: 'public/index.html',
          // 输出文件名
          filename: 'index.html'
        }
      }
    }

</code></pre>
<p>完成这一步之后就可以正常启动项目了

</p>
<p>vue-cli 3.x  提供了构建库的命令，所以这里不需要再为 packages 目录配置 webpack


</p>
<h2>三、开发组件</h2>
<p>之前已经创建了一个 packages 目录，用来存放组件

</p>
<p>该目录下存放每个组件单独的开发目录，和一个 index.js 整合所有组件，并对外导出

</p>
<p>每个组件都应该归类于单独的目录下，包含其组件源码目录 src，和 index.js 便于外部引用

</p>
<p>这里以 textarea 组件为例，完整的 packages 目录结构如下：
</p>
<pre style="background: #282c34;color: #ff9401;"><code >    
    
    packages
    textarea
        src
            main.vue
        index.js
    index.js

</code></pre>
<p><code>textarea/src/main.vue</code> 是组件的开发文件

</p>
<p><code>需要注意的是，组件必须声明 name，这个 name 就是组件的标签 </code>

</p>
<p><code>textarea/index.js </code> 用于导出单个组件，如果要做按需引入，也需要在这里配置
</p>
<pre style="background: #282c34;color: #ff9401;"><code >
    
    // packages/textarea/index.js

    // 导入组件，组件必须声明 name
    import Textarea from './main.vue'

    // 为组件添加 install 方法，用于按需引入
    Textarea.install = function (Vue) {
        Vue.component(Textarea.name, Textarea)
    }

    export default Textarea

</code></pre>
<h2>四、整合并导出组件</h2>
<p>编辑 <code>packages/index.js</code> 文件，实现组件的全局注册
</p>
<pre style="background: #282c34;color: #ff9401;"><code >

    // packages / index.js

    // 导入单个组件
    import Textarea from './textarea/index'

    // 以数组的结构保存组件，便于遍历
    const components = [
        Textarea
    ]

    // 定义 install 方法
    const install = function (Vue) {
        if (install.installed) return
        install.installed = true
        // 遍历并注册全局组件
        components.map(component =&gt; {
            Vue.component(component.name, component)
        })
    }

    if (typeof window !== 'undefined' &amp;&amp; window.Vue) {
        install(window.Vue)
    }

    export default {
        // 导出的对象必须具备一个 install 方法
        install,
        // 组件列表
        ...components
    }

</code></pre>
<p>到这里组件就已经开发完毕

</p>
<p>可以在 examples/main.js 中引入该组件
</p>
<pre style="background: #282c34;color: #ff9401;"><code >

    import TagTextarea from '../packages/index'
    Vue.use(TagTextarea)

</code></pre>
<h2>五、打包组件</h2>
<p>vue-cli 3.x 提供了一个库文件打包命令

</p>
<p>主要需要四个参数：

</p>
<ol>
<li><p>target: 默认为构建应用，改为 lib 即可启用构建库模式</p>
</li>
<li><p>name: 输出文件名</p>
</li>
<li><p>dest: 输出目录，默认为 dist，这里我们改为 lib</p>
</li>
<li><p>entry: 入口文件路径，默认为 src/App.vue，这里改为 packages/index.js</p>
</li>
</ol>
<p>基于此，在 <code>package.json</code> 里的 <code>scripts</code> 添加一个 <code>lib</code> 命令
</p>
<pre style="background: #282c34;color: #ff9401;"><code >
    
    // pageage.json

    {
      "scripts": {
        "lib": "vue-cli-service build --target lib --name tag-textarea --dest lib packages/index.js"
      }
    }

</code></pre>
<p>然后执行 npm run lib 命令，编译组件

</p>
<p>最重要的是我们需要先修改package.json文件

</p>
<pre style="background: #282c34;color: #ff9401;"><code > 
    
    // 这里注意 每次上到npm上需要更改版本号，不然也会错误
    "private" :false, 
      // 默认是true 私人的 需要改为false 
      // 不然发不上去 你可以试试..

    "license" : "MIT", // 许可证

    "main"   : "dist/vue-pay-keyboard.js", 
      // 这个超级重要 决定了你 
      // import xxx from “vue-pay-keyboard” 它默认就会去找
      // dist下的vue-pay-keyboard 文件

    "files"  : [  
      "dist",
      "src"
      // 用于发布忽略 当我们的包够复杂的时候我们总不能把所有本地开发
      // 全部都发布上去这个时候我们开启这个选项 意为只发布这两个文件 
      //  当然我们这个包比较简单 就不开启了
    ],

    "repository" : { 
      // 配置这个地址存放你项目在github上的位置 也尤为重要
      "type" : "git",
      "url"  : "https://github.com/yucccc/vue-pay-keyboard"
    },

</code></pre>
<p>然后创建 <code>.npmignore</code> 文件，设置忽略文件

</p>
<p>该文件的语法和 <code>.gitignore</code> 的语法一样，设置发布到 npm 时忽略哪些目录或文件
</p>
<pre style="background: #282c34;color: #ff9401;"><code >    
    
    .DS_Store
    node_modules/
    examples/
    packages/
    public/
    vue.config.js
    babel.config.js
    *.map
    *.html

    # local env files
    .env.local
    .env.*.local

    # Log files
    npm-debug.log*
    yarn-debug.log*
    yarn-error.log*

    # Editor directories and files
    .idea
    .vscode
    *.suo
    *.ntvs*
    *.njsproj
    *.sln
    *.sw*

</code></pre>
<h2>添加用户npm</h2>
<pre style="background: #282c34;color: #ff9401;" style="background: #282c34;#ff9401"><code >    
    
    npm adduser 
    Username: your name
    Password: your password
    Email: yourmail[@gmail](/user/gmail).com

    npm whoami // 看一看你是谁.. 

    npm login // 登陆 
    npm publish // 发布

</code></pre>`
      }
    }
  }
}
</script>