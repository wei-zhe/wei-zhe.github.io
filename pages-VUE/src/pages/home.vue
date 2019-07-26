<template>
    <div 
      class="hello"
      :style="{
        width: windowSize.width > 700 ? (windowSize.width*0.5 + 'px') : (windowSize.width*0.95 + 'px'),
      }"
    >
      <ReturnIcon 
        v-model   = "dataArray"
        :dataArray='routerTitle'
        :returnIcon="false"
      />
      
      <div 
        class="listLine"
        v-for="item in dataArray"
        v-if="item.type"
      >
        <i 
          v-if="item.type == 'text'" 
          class="iconPosition icon-file-text"
        ></i>
        <i 
          v-if="item.type == 'app'" 
          class="iconPosition icon-github"
        ></i>

        <span class="routerTitle">
          <router-link :to="item.router" style="color: #000;">
            <span class="listTitle">{{ item.title }}</span>
          </router-link>
        </span>

        <span 
          v-if="item.Introduction"
          class="listDescription"
        >
          {{ item.Introduction }}
        </span>
      </div>
    </div>
</template>

<script>
import Pages from '../mixins/pages.vue'
import Router from '../mixins/router.vue'

export default {
  name: 'home',
  mixins: [Pages, Router],
  data () {
    return {
      dataArray : {},
    }
  },
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

.hello{
  max-width: 650px;
  height: 100%;
  margin: 0 auto;
  position: relative;
  border-radius: 6px 6px 3px 3px;
  >.listLine:nth-child(odd){
    background: #eee;
  }
  >.listLine:nth-child(even){
    background: #fff;
  }
  .listLine{
    position: relative;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    text-indent: 10px;
    width: 100%;
    overflow: hidden;
    transition: all 0.3s;
    padding: 5px 0;
    box-shadow: #d8dee9 0px 0px 5px 0px;
    margin-bottom: 5px;

    &:hover{
      background: rgba(66, 185, 131, 0.8);
      .iconPosition{
        color: #fff;
      }
    }
    .iconPosition{
      position: absolute;
      top: 0;
      left: 0;
      bottom: 0;
      margin: auto;
      width: 35px;
      height: 20px;
      font-size: 20px;
      color: rgba(33, 150, 243, 1);
    }
    .routerTitle{
      width: auto;
      display: flex;
      align-items: center;
      padding-left: 40px;

      .listTitle{
        text-align: left;
        font-size: 22px;
      }
    
    }
    .listDescription{
      width: 94%;
      padding: 5px 0;
      color: #444;
      font-size: 15px;
      text-align: left;
      display: inline-block;
      padding-left: 6%;
      padding-top: 0;
    }
  }
}
</style>
