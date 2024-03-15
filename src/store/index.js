import {createStore} from 'vuex'
let defaultCity = '上海'
try {
    if(localStorage.city){
        defaultCity = localStorage.city
    }
}catch(e){}
const store = createStore({
    state:{
        city: defaultCity
    },
    mutations: {
        changeCity(state,city){
            state.city = city
            try{
                localStorage.city = city
            }catch(e){}
        }
    }
})
export default store
