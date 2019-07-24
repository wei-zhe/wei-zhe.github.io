<template>
  <div id="app">

    <HelloWorld
      :routerImage='routerImage'
      :windowSize='windowSize'
    />

    <transition name="slide-fade">
      <router-view 
        :style="{
          'min-height' : windowSize.height + 'px',
        }"
      ></router-view>
    </transition>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'app',
  data () {
    return {
      routerImage: 'index',
      windowSize : {
        width  : 1920,
        height : 1080,
      },
    }
  },
  watch: {
    '$route.path' : function (val, oldVal) {
      this.splitRouter(val);
    },
  },
  beforeRouteUpdate (to, from, next) {
  },
  mounted: function () {

    this.splitRouter(this.$route.path);
    this.windowSize.height = document.documentElement.clientHeight;
    this.windowSize.width  = document.documentElement.clientWidth;

    window.onresize = () => { // 全局尺寸改变
      // 关闭选色层

      return (() => {
        this.windowSize.height = document.documentElement.clientHeight;
        this.windowSize.width  = document.documentElement.clientWidth;
      })()
    }

  },
  methods: {
    splitRouter (data) {
      
      let router = data.split("/")[1];
      this.routerImage = router ? router : 'index';
      if(this.routerImage == 'file'){

        this.routerImage  = this.$route.query.type || 'jsFs';
      }
    
    }
  },
  components: {
    HelloWorld
  }
}
</script>

<style lang="scss">
@import './assets/css/font-awesome.min.css';
*{
  user-select: none !important;
  position: relative;
  z-index: 5;
}
a {
  color: #2196f3;
  text-decoration:none;
  &:hover{
    color: #42b983;
  }
}
html {
  height: auto;
  
}
body{
  height: 100%;
  margin: 0;
  >div{
    >*{
      position: relative;
      z-index: 5;
    }
  }
}
#app {
  height: 100%;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  padding-top: 230px;
  position: relative;
 
}
.slide-fade-enter{
  height: 0;
  opacity: 0;
} 
.slide-fade-enter-active {
  height: auto;
  transition: all .3s ease;
}
.slide-fade-leave-to{
  height: auto;
  opacity: 0;
}
.slide-fade-leave-active {
  height: 0;
  transition: all .4s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
</style>
