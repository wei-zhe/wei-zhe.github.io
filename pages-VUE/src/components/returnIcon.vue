<template>
  <div 
    class="returnList"
  >
    <span 
      v-if="returnIcon"
      class="index_icon"
    >
      <router-link to="/">
        <i class="icon-chevron-sign-left"></i>
      </router-link>
    </span>

    <div 
      v-if="search"
      class="searchBox"
    >
      <i class="icon-search"></i>
      <input class="input_message" v-model="searchSwitch.message" placeholder="请输入文字">
    </div>
  </div>
</template>

<script>
export default {
  name: 'ReturnList',
  data () {
    return {
      searchSwitch : {
        message: '',
        dataArray: [],
      },
    }
  },
  props: {
    // 检测类型 + 其他验证
    routerUrl: {
      type: String,
      default: 'index',
    },
    search: {
      type: Boolean,
      default: true,
    },
    returnIcon: {
      type: Boolean,
      default: true,
    },
    dataArray: {
      default: [],
    },
  },
  watch: {
    'searchSwitch.message' : function (val, oldVal) {
      this.searchDataArray(val);
    },
  },
  model: {
    prop: 'value',//绑定的值，通过父组件传递
    event: 'update_value'//自定义时间名
  },
  mounted () {
    this.$emit('update_value', this.dataArray)
  },
  methods: {
    searchDataArray (data) {
      if(!data){
        this.$emit('update_value', this.dataArray);
      }
      let type = this.isObject(this.dataArray),
          searchData = [];
      if(type == 'Object'){
        searchData = {}
        for(let name in  this.dataArray){
          let item = this.dataArray[name];

          if(item.type && item.title.indexOf(data) != -1){
            searchData[name] = Object.assign({}, item);
          }
        }
        this.$emit('update_value', searchData)
      }
      if(type == 'Array'){

        for(let i = 0;  i < this.dataArray.length; i++){
          let item = this.dataArray[i];

          if(item.title.indexOf(data) != -1){
            searchData.push( item );
          }
        }
        this.$emit('update_value', searchData)
      }
    },
    isObject(value) {
      return Object.prototype.toString.call(value).slice(8, -1)
    },
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.returnList{
    position: absolute;
    top: -30px;
    left: 0;
    z-index: 10;
    display: flex;

    >span{
        background: #9ea6af;
        color: #fff;
        font-size: 13px;
        border-radius: 3px;
        display: flex;
        justify-content: center;
        align-items: center;
        transition: all 0.3s;

        &:hover{
            background: #fff;
                color: #42b983;
            a{
                color: #42b983;
            }
        }
    }
    .index_icon,
    .search_icon{
        margin-right: 10px;
        font-size: 20px;
        width: 25px;
        height: 25px;
        border-radius: 100%;
        background: #42b983;
        cursor: pointer;
        a{
          color: #fff;
        }
    
    }

    .search_icon{
        font-size: 17px;
    }

    .searchBox{
      width: 200px;
      height: 22px;
      border: 1px solid #42b983;
      background: #fff;
      border-radius: 20px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding-right: 3px;
      
      >i{
        margin-left: 5px;
      }
      .input_message{
        width: 170px;
        outline-style: none;
        border: 0px;
      }
      .input_message:focus{
          border: 0px;
          outline: 0;
      }
    }

}
</style>
