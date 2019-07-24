<template>
  <div 
    class="me"
    :style="{
      width: windowSize.width > 700 ? (windowSize.width*0.7 + 'px') : (windowSize.width*0.95 + 'px'),
    }"
  >
    <ReturnIcon 
      v-model   = "dataArray"
      :dataArray='[]'
      :search="false"
    />
    <div 
      class="introduction"
      :style="{
        width: windowSize.width > 700 ? (windowSize.width*0.7 + 'px') : (windowSize.width*0.85 + 'px'),
      }"
    >
        <div class="lineRow">
            <span class="keyname">
                <span class="iconBtn icon-user"></span>
            </span>
            <div>
                魏哲
            </div>
        </div>
        <div class="lineRow">
            <span class="keyname">
                <span class="iconBtn icon-male"></span>
            </span>
            <div>
                {{age}}
            </div>
        </div>
        <div class="lineRow">
            <span class="keyname">
                <span class="iconBtn icon-phone-sign"></span>
            </span>
            <div>
                185 - 0300 - 6427
            </div>
        </div>
        <div class="lineRow">
            <span class="keyname">
                <span class="iconBtn icon-envelope-alt"></span>
            </span>
            <div>
                weizhe.wz@qq.com
            </div>
        </div>
        <div class="lineRow">
            <span class="keyname">
                <span class="iconBtn icon-github-sign"></span>
            </span>
            <div>
                <a href="https://github.com/wei-zhe">
                    https://github.com/wei-zhe
                </a>
            </div>
        </div>
        <div class="lineRow">
            <span class="keyname">
                <span class="iconBtn icon-tags"></span>
            </span>
            <div>
                2016-10 至今：深圳市前海手绘科技文化有限公司 <i class="icon-hand-right"></i> 全栈开发工程师
            </div>
        </div>
        
        <div class="mephoto">
            <img width="100" height="auto" src="../assets/img/resource/me.jpeg" />
        </div>
    </div>
  </div>
</template>

<script>
import Pages from '../mixins/pages.vue'

export default {
  name: 'me',
  mixins: [Pages],
  data() {
    return {
      age : '1995-10-11',
    }
  },
  watch : {
  },
  mounted () {
    this.age = this.calculatingAge(this.age);
  },
  methods: {
    
    calculatingAge(csrq){
        let age = '',
            d = new Date();
        let year = d.getFullYear();
        let month = d.getMonth() + 1;
        let day = d.getDate();
        if (month < 10) {
            month = '0'+month;
        }
        if(day < 10){
            day = '0'+day;
        }
        let now = year+'-'+month+'-'+day;
        if (now.substring(0,4) >= csrq.substring(0,4) && now.substring(5,7) >=csrq.substring(5,7) 
            && now.substring(8,10)>=csrq.substring(8,10)) {
            age = year - parseInt(csrq.substring(0,4));
        }else{
            age = year - parseInt(csrq.substring(0,4)) - 1;
        }
        return age;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
>*{
  position: relative;
  z-index: 5;
}
.me{
  max-width: 1000px;
  margin: 0 auto;
  position: relative;

  .preLine{
    position: absolute;
    top: 0;
    left: 0;
  }
  .introduction{
    max-width: 680px;
    padding: 5%;
    text-align: left;
    min-height: 200px;
    margin: 0 auto;
    margin-bottom: 50px;
    border-radius: 5px;
    background: #ddd;

    .lineRow{
        position: relative;
        padding-left: 50px;
        margin-bottom: 20px;
        .keyname{
            position: absolute;
            top: -1px;
            left: 0px;
        }
    }

    .mephoto{
      width: 100px;
      height: 130px;
      position: absolute;
      top: 5%;
      right: 5%;
      overflow: hidden;
      >img{
          position: absolute;
          top: 0;
          right: 0;
          bottom: 0;
          left: 0;
          margin: auto;
          z-index: 5;
          border-radius: 5px;
      }
    }
  }

  
}
</style>
