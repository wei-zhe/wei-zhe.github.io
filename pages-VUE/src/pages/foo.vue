<template>
  <div 
    class="hello"
    :style="{
      width: windowSize.width > 700 ? (windowSize.width*0.8 + 'px') : (windowSize.width*0.95 + 'px'),
    }"
  >
    <ReturnIcon
      v-model   = "dataArray"
      :dataArray='[]'
      :search="false"
    />
    <div 
      style="
        display: flex;
      "
      v-if="windowSize.width*0.8 > 1000"
    >
      <div 
        class="linebox"
      >
        <img 
          class="screenshotImg"
          v-if="parentValue" 
          :src="parentValue">
      </div>
      <div  
        class="linebox"
      >
        <div class="canvasBox">
          <vue-screenshot 
            v-model   = 'parentValue'
            :width    = "500"
            :height   = "500"
            :imageSrc = 'imageSrc'
            :control  = 'control'
          >
          </vue-screenshot>
        </div>

      </div>
    </div>
    <div 
      class="messagebox"
      style="
        width: 90%;
      "
      :style="{
        padding: windowSize.width > 700 ? '5%' : ' 10% 5%',
      }"
    >
      <font class="controlicon icon-cogs"> 点击查看不同的功能</font>
      <div class="controlbox">
        <div @click="setControl('narrow')">

          <i>
            narrow
          </i>
          <span 
            :class="{
              'icon-check-empty' : control.narrow ? false : true,
              'icon-check' : control.narrow ? true : false,
            }"
            style="
              vertical-align:middle;
              width: 20px;
              display: inline-block;
            "
          ></span>
          <span
            style="font-size: 13px;"
          >
            // 工具栏缩小
          </span>
        </div>
        <div @click="setControl('clears')">

          <i>
            clears
          </i>
          <span 
            :class="{
              'icon-check-empty' : control.clears ? false : true,
              'icon-check' : control.clears ? true : false,
            }"
            style="
              vertical-align:middle;
              width: 20px;
              display: inline-block;
            "
          ></span>
          <span
            style="font-size: 13px;"
          >
            // 工具栏清除
          </span>
        </div>
        <div @click="setControl('restore')">

          <i>
            restore
          </i>
          <span 
            :class="{
              'icon-check-empty' : control.restore ? false : true,
              'icon-check' : control.restore ? true : false,
            }"
            style="
              vertical-align:middle;
              width: 20px;
              display: inline-block;
            "
          ></span>
          <span
            style="font-size: 13px;"
          >
            // 工具栏还原
          </span>
        </div>
        <div @click="setControl('blowup')">
          
          <i>
            blowup
          </i>
          <span 
            :class="{
              'icon-check-empty' : control.blowup ? false : true,
              'icon-check' : control.blowup ? true : false,
            }"
            style="
              vertical-align:middle;
              width: 20px;
              display: inline-block;
            "
          ></span>
          <span
            style="font-size: 13px;"
          >
            // 工具栏放大
          </span>
        </div>
        <div @click="setControl('wheel')">
          
          <i>
            wheel
          </i>
          <span 
            :class="{
              'icon-check-empty' : control.wheel ? false : true,
              'icon-check' : control.wheel ? true : false,
            }"
            style="
              vertical-align:middle;
              width: 20px;
              display: inline-block;
            "
          ></span>
          <span
            style="font-size: 13px;"
          >
            // 滚轮放大缩小
          </span>
        </div>
        <div @click="setControl('uniform')">
          
          <i>
            uniform
          </i>
          <span 
            :class="{
              'icon-check-empty' : control.uniform ? false : true,
              'icon-check' : control.uniform ? true : false,
            }"
            style="
              vertical-align:middle;
              width: 20px;
              display: inline-block;
            "
          ></span>
          <span
            style="font-size: 13px;"
          >
            // 截图区域自动回复到区域中央
          </span>
        </div>
        <div @click="setControl('dragBox')">
          
          <i>
            dragBox
          </i>
          <span 
            :class="{
              'icon-check-empty' : control.dragBox ? false : true,
              'icon-check' : control.dragBox ? true : false,
            }"
            style="
              vertical-align:middle;
              width: 20px;
              display: inline-block;
            "
          ></span>
          <span
            style="font-size: 13px;"
          >
            // 显示拖拽按钮等
          </span>
        </div>
      </div>
    </div>
    <div 
      class="messagebox"
      :style="{
        padding: windowSize.width > 700 ? '5%' : ' 10% 5%',
      }"
    >
      <h3 style="width: 100%;">vue-drag-screenshot</h3>
      <div>
        <a href="https://github.com/wei-zhe/vue-drag-screenshot" target="_blank">
           <i class="iconPosition icon-github"></i> https://github.com/wei-zhe/vue-drag-screenshot
        </a>
      </div>
      <div>
        drag-screenshot 插件是一个可自由拖动对现有图片进行截图的插件,<br/>
        图片以及选中框均可拖动。每次拖动结束后，或鼠标弹起时可以实时返回当前选中的图片区域<br/>
        (默认图片以最大尺寸显示在操作框内)
        <h4>接受参数：</h4><br/>
        v-model   = 'parentValue' //（必选）接受参数，每次返回的图片保存在v-model变量中<br/>
        :width    = '500'         //（必选）定义可操作区域的宽高<br/>
        :height   = '500'         //（必选）定义可操作区域的宽高<br/>
        :imageSrc = 'imageSrc'    //（非必选）接受一个图片路由默认初始裁剪图片<br/><br/>
        :control  = 'control'     //（非必选）接受一个对象包含有操作按钮，可以根据定义的顺须排列按钮的顺序，<br/>
        不定义既不显示<br/>
        control：// 包含以下功能<br/>
        narrow   : true,  // 缩小<br/>
        clears   : true,  // 清除<br/>
        restore  : true,  // 还原<br/>
        blowup   : true,  // 放大<br/>
        wheel    : true,  // 滚轮缩放 ** 新增 (滚动属性，当滚动属性开启时，支持滚轮放大图片)<br/>
        uniform  : true,  // uniform状态 ** 新增 (当uniform属性开启时，每次截取区域截图都会自动居中滚轮放大会由图片转至放大选框)<br/>
        dragBox  : {      // 新增拖拽盒子固定尺寸 ** 新增<br/>
          &nbsp;&nbsp;&nbsp;width   : 160,  // <br/>
          &nbsp;&nbsp;&nbsp;height  : 90,   // <br/>
      }                     <br/>
        <br/><br/>
        <img  width="100%" height="auto" src="../assets/img/resource/action.png"/>
      </div>
    </div>
  </div>
</template>

<script>
import Pages from '../mixins/pages.vue'

export default {
  name: 'foo',
  mixins: [Pages],
  data() {
    return {
      imageSrc : require(`../assets/img/logo/logoOne.png`),
      parentValue : '',
      control  : {
        narrow   : false,   // 缩小
        clears   : false,   // 清除
        restore  : false,   // 还原
        blowup   : false,  // 放大
        wheel    : true,   // 滚轮缩放 ** 新增
        uniform  : true,   // uniform状态，图片不可拖动 ** 新增
        dragBox  : {       // 新增拖拽盒子固定尺寸 ** 新增
          width   : 160,
          height  : 90,
        },  
      },
    }
  },
  watch : {
    'parentValue': function(val, oldval) {
    },
  },
  mounted () {
    
  },
  methods: {
    setControl(data){
      switch(data){
        case 'narrow':
          this.control.narrow = !this.control.narrow;
          break;
        case 'clears':
          this.control.clears = !this.control.clears;
          break;
        case 'restore':
          this.control.restore = !this.control.restore;
          break;
        case 'blowup':
          this.control.blowup = !this.control.blowup;
          break;
        case 'wheel':
          this.control.wheel = !this.control.wheel;
          break;
        case 'uniform':
          this.control.uniform = !this.control.uniform;
          break;
        case 'dragBox':
          if(this.control.dragBox){
            this.control.dragBox = false;
          }else{
            this.control.dragBox = {      // 新增拖拽盒子固定尺寸 ** 新增
              width   : 160,
              height  : 90,
            };
          }
          break;
      }
    },
    
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
>*{
  position: relative;
  z-index: 5;
}
.hello{
  max-width: 1000px;
  margin: 0 auto;
  position: relative;
  background: #fff;
  border-radius: 6px 6px 3px 3px;
  
  .linebox {
    position: relative;
    width: 500px;
    height: 500px;
    margin: auto;
    border-radius: 5px;

    .screenshotImg{
      position: absolute;
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
      margin: auto;
      border: 1px solid #fff;
      border-radius: 3px;
    }
  }

  .canvasBox{
    width: 500px;
    height: auto;
    margin: 0 auto;    
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
    position: relative;

    .controlicon{
      position: absolute;
      top: 10px;
      left: 10px;
    }
    .controlbox{
      width: 100%;

      >div{
        -webkit-touch-callout: none;
        -webkit-user-select: none;
        -khtml-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
        padding: 5px;
        cursor: pointer;
        border-bottom: 1px dotted #c7c2c2;

        i{
          display: inline-block;
          width: 70px;
        }
      }
    }
  }
}
</style>
