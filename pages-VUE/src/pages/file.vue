<template>
    <div 
      class="file"
      :style="{
        width: windowSize.width > 700 ? (windowSize.width*0.7 + 'px') : (windowSize.width*0.85 + 'px'),
      }"
    >
        <ReturnIcon
          v-model   = "dataArray"
          :dataArray='fileData'
        />

        <div class="text_body">

          <div 
            class="text_list"
            v-for="item in dataArray"
          >
            <div
              class="title"
              v-if="item.title"
            >{{ item.title }}</div>

            <pre
              v-if="type == 'jsFs' && item.Introduction"
              class="introduction"
            >{{ item.Introduction }}</pre>

            <pre
              v-if="type == 'regular' && item.Introduction"
              class="introduction_regular"
            >{{ item.Introduction }}</pre>
          </div>

          <div 
            class="text_list"
            v-if="type == 'regular'"
          >
            <div
              class="title"
            >是否html标签</div>

            <pre
              class="introduction_regular"
            >/<(.*)>.*<\/\1>|<(.*) \/>/</pre>
          </div>
          <div 
            class="text_list"
            v-if="type == 'regular'"
          >
            <div
              class="title"
            >日期,如: 2000-01-01</div>

            <pre
              class="introduction_regular"
            >/^\d{4}(-)\d{1,2}\1\d{1,2}$/</pre>
          </div>
        </div>
        
    </div>
</template>

<script>
import Pages from '../mixins/pages.vue'
import JsFs from '../mixins/jsFs.vue'
import Regular from '../mixins/regular.vue'

export default {
  name: 'file',
  mixins: [Pages, JsFs, Regular],
  data (){
    return {
      type     : 'jsFs',
      fileData : [],
    }
  },
  mounted: function () {

    this.type = this.$route.query.type || 'jsFs';
    this.dataArray = this.fileData = this[this.type] || this.jsFs

  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.file{
  max-width: 800px;
  margin: 0 auto;
  position: relative;
  background: #fff;
  border-radius: 6px 6px 3px 3px;
  padding: 5%;

  .text_body{
    text-align: left;
    width: 100%;

    .text_list{
      padding: 5px 10px;
      margin-bottom: 50px;
      
      .title{

        text-align: left;
        font-size: 22px;
      }

      .introduction_regular,
      .introduction{
        padding: 10px;
        font-size: 15px;
        text-align: left;
        background: rgba(3, 10, 0, 0.6);
        color: #FFEB3B;
        border-radius: 6px 6px 3px 3px;
        white-space: pre-wrap;
        word-wrap: break-word;
      }

      .introduction_regular{
        padding: 15px;
        color: red;
        background: rgb(248, 248, 248);
      }
    }
  }
}
</style>
