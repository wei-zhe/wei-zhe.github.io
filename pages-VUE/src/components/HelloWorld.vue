<template>
  <div class="hello">

    <div 
      class="bgColor"
      :style="{
        'background': colorMsg,
      }"
    ></div>

    <div 
      class="bgImage"
      v-if="routerTitle[routerImage]"
      :style="{
        'background-image': `url(${routerTitle[routerImage].img})`,
      }"
    ></div>

    <h1 
      class="router_title"
      v-if="routerTitle[routerImage]"
      :style="{
        'width'     : windowSize.width > 700 ? (windowSize.width*0.7 + 'px') : 'auto',
        'font-size' : windowSize.width > 700 ? '2em' : '1em',
        'background': colorTitle,
      }"
    >{{routerTitle[routerImage].title}}</h1>
        
    <router-link 
      class="meIcon" 
      to="/me"
      :style="{
        'border-color' : routerImage == 'me' ? '#42b983' : '#3d3d3d',
        'background'   : 'rgba(33, 150, 243, 0.8)',
      }"
    >
      <div 
        class="mephotoBox"
        v-if="routerImage == 'me'"
      >
      
          <div class="mephotoAni"></div>
      </div>
      <img alt="logo" width="80px" height="80px" src="../assets/img/logo/logo.png">
    </router-link>

  </div>
</template>

<script>

import Router from '../mixins/router.vue'


export default {
  name: 'HelloWorld',
  mixins: [Router],
  data () {
    return {
      colorMsg    : 'linear-gradient(45deg, #dfb7be 0%, #48afcd 33%, #c96277 66%, #c35fdf 100%)',
      colorTitle  : 'linear-gradient(45deg, #dfb7be 0%, #48afcd 33%, #c96277 66%, #c35fdf 100%)',
    }
  },
  props: {
    // 检测类型 + 其他验证
    routerImage: {
      type: String,
      default: 'index',
    },
    windowSize: {
      type: Object,
      default: {
        width  : 1920,
        height : 1080,
      },
    },
  },
  watch: {
    'routerImage' : function (val, oldVal) {

      this.colorMsg   = this.getColor();
      this.colorTitle = this.getColor();
    },
  },
  methods: {
    getColor(){
      let colorMsg   = 'linear-gradient(45deg, ';

      for(let c = 0; c < 7; c++){
        
        let color="";
        for(let i = 0; i < 6; i++){
          // let base = ['00','33','66','99','CC','FF'];     //基础色代码
          // let len = base.length;                          //基础色长度
          // let bg = new Array();                           //返回的结果
          // let random = Math.ceil(Math.random()*215+1);    //获取1-216之间的随机数
          // let res;
          // for(let r = 0; r < len; r++){  
          //     for(let g = 0; g < len; g++){  
          //         for(let b = 0; b < len; b++){   
          //             bg.push('#'+base[r].toString()+base[g].toString()+base[b].toString());
          //         }  
          //     };  
          // };
          // for(let i=0;i<bg.length;i++){
          //     res =  bg[random];
          // }
          // color =  res;

          color = '#'+Math.floor(Math.random()*(2<<23)).toString(16); ;
        }
        if(c == 6){

          colorMsg += (color + ' ' + '100%)');
        }else{

          colorMsg += (color + ' ' + (c * 33) + '%, ');
        }
      }

      return colorMsg;
    },
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.hello{
  position: absolute;
  top: 0;
  left: 0;
  z-index: 0;
  width: 100%;
  height: 100%;
  
  .meIcon{
    position: absolute;
    top: 25px;
    left: 0;
    right: 0;
    margin: 0 auto; 
    z-index: 5;
    width: 90px;
    height: 90px;
    border: 10px solid #ddd; 
    border-radius: 100%;
    overflow: hidden;
    background: rgba(33, 150, 243, 0.8);
    transition: all 0.3s;

    &:hover{
      border-color: #fff !important;
    }

    >img{
      position: absolute;
      top: 5px;
      left: 5px;
    }
  }
  >h1{
    position: absolute;
    top: 130px;
    left: 0;
    right: 0;
    margin: 0 auto; 
    z-index: 5;
    color: rgba(255, 255, 255, 1);
  }
  .router_title {
      position: relative;
      max-width: 700px;
      height: auto;
      margin: 20px auto;
      border-radius: 5px;
      z-index: 5;
      overflow: hidden;

      &::before {
        content: "";
        position: absolute;
        top: -100%;
        left: -100%;
        bottom: -100%;
        right: -100%;
        background: linear-gradient(45deg, rgba(255, 41, 0, 0.6) 0%, rgba(255, 255, 255, 0.6) 33%, rgba(64, 158, 255, 0.6) 66%, rgba(255, 255, 255, 0.6) 100%);
        background-size: 100% 100%;
        animation: bgposition 5s infinite linear alternate;
        z-index: -1;
      }

  }
  
  .bgColor{
    position: absolute;
    top: 0;
    left: 0;
    z-index: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
    
    &::before {
      content: "";
      position: absolute;
      top: -100%;
      left: -100%;
      bottom: -100%;
      right: -100%;
      background: linear-gradient(45deg, rgba(255, 41, 0, 0.6) 0%, rgba(255, 255, 255, 0.6) 33%, rgba(64, 158, 255, 0.6) 66%, rgba(255, 255, 255, 0.6) 100%);
      background-size: 100% 100%;
      animation: bgposition 7s infinite linear alternate;
      z-index: -1;
    }
  }

  .bgImage{
    position: absolute;
    top: 0;
    left: 0;
    z-index: 0;
    width: 100%;
    height: 100%;
    background-image: url('../assets/img/router/me.png');
    background-size: cover;
    background-repeat:no-repeat;
    background-position:center;
    background-attachment:fixed;
    transition: all 3s;
  }
  

}
@keyframes bgposition {
    0% {
        transform: translate(30%, 30%);
    }
    25% {
        transform: translate(30%, -30%);
    }
    50% {
        transform: translate(-30%, -30%);
    }
    75% {
        transform: translate(-30%, 30%);
    }
    100% {
        transform: translate(30%, 30%);
    }
}
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

///////

@function randomNum($max, $min: 0, $u: 1) {
	@return ($min + random($max)) * $u;
}

@function randomConicGradient() {
	$n: 16 + random(16);
	$list: ();
	
	@for $i from 0 to $n {
		$list: $list, rgba(hsl(100, randomNum(250, 5, 10%), randomNum(1, 1, 1%)), randomNum(90, 0, .01));
	}
		
	@return conic-gradient($list, nth($list, 1));
}

.mephotoBox{
    position: absolute;
    top: 0px;
    right: 0;
    bottom: 0;
    left: 0;
    margin: auto;
    width: 80px;
    height: 80px;
    z-index: 0;    
}
.mephotoAni {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    margin: auto;
    width: 80px;
    height: 80px;
	
	&:before, &:after {
		position: absolute;
		top: 50%; left: 50%;
		margin: -100vmax; 
		width: 200vmax; 
    height: 200vmax;
		opacity: .5;
		mix-blend-mode: overlay;
		animation: rotate randomNum(100, 25, .1s) ease-in-out infinite;
		content: '';
	}
	
	&:before { background: randomConicGradient(); }
	&:after {
		background: randomConicGradient();
		animation-duration: randomNum(100, 25, .1s);
		animation-direction: reverse;
	}
}

@keyframes rotate { 
    to { 
        transform: rotate(1turn); 
    } 
}
</style>
