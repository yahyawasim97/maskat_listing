import React from 'react';
import { ajaxProcess } from './axiosHelper';

export const anonymousMenuList = (lat,long,page,categoryId=null,searchParam=null) => {

    let params = [];

    params['page'] = page;
    if(categoryId){
        params['categoryId'] = categoryId;
    }
    if(searchParam){
        params['title']= searchParam
    }
    console.log(params)
    return ajaxProcess('properties/search', {Coordinates:`${lat},${long}`},null,params )
    
}
export const menuDetail = propertyId => {

    return ajaxProcess(`properties/${propertyId}` )
    
}

