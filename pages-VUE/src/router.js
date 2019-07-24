import Vue from 'vue'
import Router from 'vue-router'

/*引入page页面or组件资源*/
import Home      from '@/pages/home'
import Foo       from '@/pages/foo'
import Me        from '@/pages/me'
import InputTags from '@/pages/inputTags'
import File      from '@/pages/file'
import Mind      from '@/pages/mind'



//定义路由
Vue.use(Router)

export default new Router({
    routes: [
        {
            path      : '',
            component : Home,
            meta      : {
                title        : 'ADE',
                judgeBrowser : true
            },
        },
        {
            path      : '/foo',
            component : Foo,
            meta      : {
                title        : 'Vue drag screenshot',
                judgeBrowser : true
            },
        },
        {
            path      : '/me',
            component : Me,
            meta      : {
                title        : '我的',
                judgeBrowser : true     
            },
        },
        {
            path      : '/inputTags',
            component : InputTags,
            meta      : {
                title        : 'Vue input tags',
                judgeBrowser : true     
            },
        },
        {
            path      : '/mind',
            component : Mind,
            meta      : {
                title        : 'Vue mind mapping',
                judgeBrowser : true     
            },
        },
        {
            path      : '/file',
            component : File,
            meta      : {
                title        : '技术文章',
                judgeBrowser : true     
            },
        },
    ]
})