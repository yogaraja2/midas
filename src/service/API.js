import {ApiPath, Method} from '_constants/Constant';
import Axios from 'axios';

export class API {
    static request = async (path, method, params = null, body = null) => {
        var api = ApiPath.BASE_URL + path;
        if (params != null) {
          const entries = Object.entries(params);
          if (entries.length > 0) {
            api += '?';
            for (let i = 0; i < entries.length; i++) {
              api += entries[i][0] + '=' + entries[i][1];
              if (i < entries.length - 1) {
                api += '&';
              }
            }
          }
        }
        let result = null;
        console.log('Request ' + method + ': ' + api);
        switch (method) {
          case Method.GET:
            result = await Axios.get(api);
            break;
          case Method.POST:
            result = await Axios.post(api, body, { headers: { Authorization: null } });
            break;
          case Method.DELETE:
            result = await Axios.delete(api);
            break;
          case Method.PUT:
            result = await Axios.put(api, body);
            break;
          default:
            throw new Error('Method not supported' + method);
        }
        console.log('response:', result.data);
        return result.data;
      };
      
      static register = async (phone) => {
        let response = await this.request(ApiPath.REGISTER, Method.POST, null, {
          phone: String(phone),
        });
        if (response) {
          return response;
        }
        return null;
      };
}
