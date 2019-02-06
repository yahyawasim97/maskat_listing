import {EXISTANCE_FAILURE,EXISTANCE_SUCCESS ,LOAD_START, SAVE_LOCATION} from '../actions/Types';
const Initial_State ={
    memberAuthorized: false,
    memberVerified: false,
    loading:false,
    lat:'',
    long:''
}
export default (state = Initial_State, action) => {
    switch(action.type){
        case LOAD_START:
            return {...state,loading:true}
        case EXISTANCE_SUCCESS:
            return {...state,loading:false,memberAuthorized:action.payload.data.exists,memberVerified:action.payload.data.verified}
        case EXISTANCE_FAILURE:
            return {...state,loading:false}
        case SAVE_LOCATION:
            return {...state,lat:action.payload.lat,long:action.payload.long}
        default:
            return state;
    }    
}