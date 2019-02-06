import { ON_CATEGORY_SELECT, ON_MENU_SELECT, ITEM_DETAIL } from '../actions/Types';
const Initial_State ={
    loading:true,
    selectedCategory:'',
    selectedMenu:'',
    menuDetail:null
}
export default (state = Initial_State, action) => {
    switch(action.type){
        case ON_CATEGORY_SELECT:
            return{...state,selectedCategory:action.payload.category}
        case ON_MENU_SELECT:
            return{...state,selectedMenu:action.payload.menu}
        case ITEM_DETAIL:
            return{...state,menuDetail:action.payload.item}
        default:
            return state;
    }    
}