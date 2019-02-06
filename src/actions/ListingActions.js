import { ON_CATEGORY_SELECT, ON_MENU_SELECT, ITEM_DETAIL } from "./Types";

export const onCategorySelect =category=>{
    return{
        type: ON_CATEGORY_SELECT,
        payload:{
            category
        }
    }
}
export const onMenuSelect =menu=>{
    return{
        type: ON_MENU_SELECT,
        payload:{
            menu
        }
    }
}

export const itemDetail = item=>{
    console.log(item);
    return{
        type: ITEM_DETAIL,
        payload:{
            item
        }
    }
}