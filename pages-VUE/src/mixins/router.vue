<script>
//  弹窗组件，所欲设置的弹窗组件

export default {
    data() {
        return {
            routerTitle: {
                index     : {
                    img          : require(`../assets/img/router/index.png`),
                    type         : '',
                    title        : 'My component and self introduction',
                    router       : '',
                    Introduction : '',
                },
                me        : {
                    img          : require(`../assets/img/router/me.png`),
                    type         : 'app',
                    title        : 'introduction',
                    router       : '/me',
                    Introduction : '',
                },
                foo       : {
                    img          : require(`../assets/img/router/foo.png`),
                    type         : 'app',
                    title        : 'vue-drag-screenshot',
                    router       : '/foo',
                    Introduction : 'A Vue component to drag-screenshot',
                },
                inputTags : {
                    img          : require(`../assets/img/router/inputTags.png`),
                    type         : 'app',
                    title        : 'vue-input-tags',
                    router       : '/inputTags',
                    Introduction : 'A Vue component to input-tags',
                },
                mind : {
                    img          : require(`../assets/img/router/mind.png`),
                    type         : 'app',
                    title        : 'vue-mind-mapping',
                    router       : '/mind',
                    Introduction : '一个类似思维导图的小工具',
                },
                jsFs      : {
                    img          : '',
                    type         : 'text',
                    title        : 'js 开发常用工具函数',
                    router       : '/file?type=jsFs',
                    Introduction : 'function ( ) { }',
                },
                regular   : {
                    img          : '',
                    type         : 'text',
                    title        : 'js 开发常用正则表达式',
                    router       : '/file?type=regular',
                    Introduction : 'var patt1 = new RegExp(/^[A-Z]+$/)',
                },
            },
        };
    },
}
</script>
