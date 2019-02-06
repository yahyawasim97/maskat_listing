import React from 'react';
import { ajaxProcess } from './axiosHelper';

export const exists = (phoneNumber) => {
    return ajaxProcess('member/exists', {phoneNumber, countryCode: '92'})
    
}