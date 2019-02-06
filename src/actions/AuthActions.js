import {LOAD_START,EXISTANCE_SUCCESS,EXISTANCE_FAILURE, SAVE_LOCATION} from '../actions/Types';
import {exists} from '../services/auth.services';
export const memberExists =phone=>{

    return(dispatch)=>{
        dispatch({type:LOAD_START});
        exists(phone).then((res)=>{
            successExistance(res,dispatch);
            
        })
        .catch((err)=>{
            failureExistance(err,dispatch);
        })  
    }
}
const successExistance =(res,dispatch)=>{
    dispatch({
        type: EXISTANCE_SUCCESS,
        payload: res.data
    })
    
    
}
const failureExistance =(err,dispatch)=>{
    dispatch({
        type: EXISTANCE_FAILURE,
        payload: err.data
    })
}


export const saveLocation=(lat,long)=>{
    return{
        type: SAVE_LOCATION,
        payload:{
            lat,long
        }
    }
}
