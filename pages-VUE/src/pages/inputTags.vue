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
          class="inputTagsBox"
          v-if="windowSize.width*0.8 > 1000"
        >
            <vue-inputTags 
                v-model   = "parentValue"
                :width    = "498"
                :height   = "150"
                :setting  = 'setting'
            >
            </vue-inputTags>
        </div>
        <div 
          class="messagebox"
          :style="{
            padding: windowSize.width > 700 ? '5%' : ' 10% 5%',
          }"
        >
            <h3 style="width: 100%;">vue-input-tags</h3>
            <div>
              <a href="https://github.com/wei-zhe/vue-input-tags" target="_blank">
                <i class="iconPosition icon-github"></i> https://github.com/wei-zhe/vue-input-tags
              </a>
            </div>
            <div style="width: 100%;">
                input-tags： 一个可以输入标签的vue组建，按回车键以添加标签<br/><br/>
                <h4 style="width: 100%;">接受参数</h4>
                v-model   = "parentValue"   // （必选）绑定数组变量，但是每个变量都必须是对象，并且含有一个title的属性<br/>
                :width    = "498"           // （必选）<br/>
                :height   = "150"           // （必选）<br/><br/>
                :setting  = 'setting'       //  设置（非必选）<br/>
                setting : { // setting参数
                    wordage : 8,    //文字数
                    ArrayLength: 20,    // 标签数
                },<br/>
                <img width="100%" src="../assets/img/resource/inputtags.jpg"/>
            </div>

        </div>
    </div>
</template>

<script>
import Pages from '../mixins/pages.vue'

export default {
  name: 'home',
  mixins: [Pages],
  data (){
    return {
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
.hello{
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
    .inputTagsBox {
        position: relative;
        width: 500px;
        height: 300px;
        margin: auto;
        padding-top: 50px;
        border-radius: 5px;
        
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
