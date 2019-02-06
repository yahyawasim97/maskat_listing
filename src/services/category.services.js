import React from 'react';
import { ajaxProcess } from './axiosHelper';

export const anonymousCategoryList = (page) => {



    return ajaxProcess('categories', {},null,[] )
    
}
