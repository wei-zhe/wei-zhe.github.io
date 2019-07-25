<template>
    <div 
      class="mind"
      :style="{
        width: windowSize.width > 700 ? (windowSize.width*0.8 + 'px') : (windowSize.width*0.95 + 'px'),
      }"
    >
        
        <div 
          class="mind_box"
          v-if="windowSize.width*0.8 > 1000"
        >
            <MindMapping 
                v-model     = "testData"
                :width      = 'width'
                :height     = 'height'
                :spacing    = '50'
                topColor    = '#646464'
                :fontSize   = '30'
                :fontLength = '10'
            ></MindMapping>
        </div>
        <div 
          class="messagebox"
          :style="{
            padding: windowSize.width > 700 ? '5%' : ' 10% 5%',
          }"
        >
          <div class="mind_message">
            {{testData}}
          </div>
          <h3 style="width: 100%;">vue-mind-mapping</h3>
          <div>
            <a href="https://github.com/wei-zhe/vue-mind-mapping" target="_blank">
              <i class="iconPosition icon-github"></i> https://github.com/wei-zhe/vue-mind-mapping
            </a>
          </div>
          <div style="width: 100%;">
              <p>一个类似思维导图的小工具</p>
              <p>## 安装</p>
              <p style="color: red;">使用之前一定要安装svg.js</p>
              <pre style="color: red;">
    svg.js
        npm install svg.js
        import svgJs from "svg.js/dist/svg"

        export default {
            install(Vue) {
                Vue.prototype.$svg = svgJs
            }
        }

    main.js
        import svgJs from "./svg.js"
        Vue.use(svgJs);

              </pre>
              <p>## 使用</p>
              <pre>
    npm install vue-mind-mapping -S
    
    import vuemindmapping from 'vue-mind-mapping'
    Vue.use(vuemindmapping)

    '<''MindMapping' 
      "v-model     = 'testData'"
      ":width      = 'width'"
      ":height     = 'height'"
      ":spacing    = '50'"
      "topColor    = '#646464'"
      ":fontSize   = '30'"
      ":fontLength = '10'"
      ":onlyColor  = 'true'"
    "><'/'MindMapping>"
              </pre>
              <div class="highlight">
              <h3>width， height</h3>
              <p>初始宽高</p>
              <h3>spacing</h3>
              <p>标题之间的横向间距，纵向间距是标题的高度</p>
              <h3>topColor</h3>
              <p>主标题的颜色以及箭头颜色</p>
              <h3>fontSize</h3>
              <p>标题文字大小，下一级标题文字大小是上一级的0.8最小是14</p>
              <h3>fontLength</h3>
              <p>每个标题显示的字数显示不玩的会用...代替</p>
              <h3>onlyColor</h3>
              <p>设置图标颜色为单一颜色</p>
              <h2>v-model</h2>
              <p>会返回一个json字符串，代表生成的导图数据格式，
              要是想要加载生成的导图，需要一开始传入导图的json字符串</p>
              <pre>
    '{
        "x":5,
        "y":400,
        "title":"主标题",
        "index":0,
        "color":"#646464",
        "size":30,
        "sprites":[
            {
                "x":185,
                "y":-171.0703125,
                "title":"随机分配颜色",
                "index":1,
                "color":"#e78ed9",
                "size":24,
                "sprites":[ ]
            }
        ]
    }',
              </pre>
              <h3>Props</h3>
              <pre>
    name	type	default	type
    value	String		必传
    width	Number	500	选择参数，也可以不传
    height	Number	500	选择参数，也可以不传
    spacing	Number	50	选择参数，也可以不传
    topColor	String	#ff2970	选择参数，也可以不传
    fontSize	Number	40	选择参数，也可以不传
    fontLength	Number	7	选择参数，也可以不传
    onlyColor	Boolean	false	选择参数，也可以不传
              </pre>
              
              </div>
                  <img width="100%" src="../assets/img/resource/mind.jpeg"/>
              </div>

        </div>
  </div>
</template>

<script>
import Pages from '../mixins/pages.vue'

export default {
  name: 'mind',
  mixins: [Pages],
  data (){
    return {
      testData : '{"x":5,"y":400,"title":"主标题","index":0,"color":"#646464","size":30,"sprites":[{"x":185,"y":-171.0703125,"title":"随机分配颜色","index":1,"color":"#e78ed9","size":24,"sprites":[]},{"x":185,"y":-95.0390625,"title":"横向间距可调节","index":1,"color":"#5119cb","size":24,"sprites":[{"x":263,"y":16.0078125,"title":"字体大小是上一级的0.8","index":2,"color":"#5119cb","size":19,"sprites":[{"x":292.40625,"y":13.5,"title":"标题文字显示有长度","index":3,"color":"#5119cb","size":15,"sprites":[]}]}]},{"x":185,"y":-19.0078125,"title":"纵向间距是标题的高","index":1,"color":"#fc7d28","size":24,"sprites":[]},{"x":185,"y":57.0234375,"title":"主要依赖svg.js","index":1,"color":"#5c3039","size":24,"sprites":[{"x":259.046875,"y":16.078125,"title":"需要安装是svgjs","index":2,"color":"#5c3039","size":19,"sprites":[]}]},{"x":185,"y":133.0546875,"title":"箭头颜色是和主标题颜色一致","index":1,"color":"#8523fa","size":24,"sprites":[{"x":355.015625,"y":16.0546875,"title":"用json保存所有的属性","index":2,"color":"#8523fa","size":19,"sprites":[]}]},{"x":185,"y":209.0859375,"title":"更新会保存所有属性","index":1,"color":"#1a4a27","size":24,"sprites":[{"x":311,"y":16.0078125,"title":"再次打开没有属性变化","index":2,"color":"#1a4a27","size":19,"sprites":[]}]}]}',
      width    : 500,
      height   : 500,
      parentValue : [
        {
          title : '第一个标签first'
        },
        {
          title : '第二个标签'
        },
        {
          title : '第三个标签'
        },
        {
          title : '第四个标签last'
        },
      ],
      setting : {
        wordage : 8,
        ArrayLength: 20,
      },
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.mind{
    max-width: 1000px;
    margin: 0 auto;
    position: relative;
    background: #fff;
    border-radius: 6px 6px 3px 3px;

    .preLine{
        position: absolute;
        top: 0;
        left: 0;
    }
    .mind_box {
        position: relative;
        width: 100%;
        height: 600px;
        margin: auto;
        border-radius: 5px;
        overflow: auto;
        >div{
            box-shadow: none;
        }        
    }
    .messagebox{
        display: flex;
        flex-flow: wrap;
        width: 90%;
        min-height: 50px;
        background: #ddd;
        border-radius: 5px;
        padding: 10px;
        margin-bottom: 50px;
        text-align: left;

    }
  
}
</style>
