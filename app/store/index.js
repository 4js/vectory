import vue from 'vue'
import vuex from 'vuex'
// import getters from './getters'
// import actions from './actions'
import * as types from './types'
// import mutations from './mutations'
vue.use(vuex)

export default new vuex.Store({
    state: {


        // 网页可见区域宽和网页可见区域宽高（包括边线和滚动条的宽），用于自适应的时候，根据不同当前窗口大小做调整
        screen: {
            screenWidth: document.body.offsetWidth,
            screenHeight: document.body.offsetHeight,
        },

        //系统用户的信息集合,对应就是storage里面的member_profile集合
        member: {
            id: 0,
            name: 'hahha'
        }
    },
    getters: {

    },
    mutations: {
        [types.LOGIN]: (state, data) => {
            localStorage.token = data;
            state.token = data;
        }
    },
    actions: {},
    modules: {

    }
})