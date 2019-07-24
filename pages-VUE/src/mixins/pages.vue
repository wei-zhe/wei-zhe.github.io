<script>
//  弹窗组件，所欲设置的弹窗组件
import ReturnIcon from '../components/returnIcon.vue'

export default {
    data() {
        return {
            windowSize : {
                width  : 1920,
                height : 1080,
            },
            dataArray : [],
        };
    },
    computed: {

    },
    props: [],
    watch : {
        
    },
    mounted () {
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
        
    },
    components: {
        ReturnIcon
    }
}
</script>
