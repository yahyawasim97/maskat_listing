import Axios from "axios";
import { BASE_URL, VERSION } from '../config/global';
export const ajaxProcess = (route, headers = {}, user = null, ajaxData = new Array(), method = 'GET') => {
    var data = {};
    var params = {};

    headers.ClientId = 'anonymous';
    if(user){
        headers.Auth = md5(route+userId+authToken);
        headers.UserId = user.iD;
        headers.ClientId = 'member';
    }

    if(method === 'GET'){
        params = {...ajaxData}
    }else{
        data = {...ajaxData}
    }
    const CancelToken = Axios.CancelToken;
    const source = CancelToken.source();
    return Axios({
        method,
        url: BASE_URL+VERSION +'/'+route,
        params,
        headers,
        data,
        cancelToken: source.token
    })
}