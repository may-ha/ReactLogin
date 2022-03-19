import axios from "axios";
const apiUrl = 'http://localhost:3002'
export default function HttpRequest(route,data,method){
    return new Promise((resolve,reject)=>{
        axios({
            method:method,
            url:route,
            baseURL:apiUrl,
            data:data,
            headers:{"Access-Control-Allow-Origin": "*"}
        }).then(response=>{
            resolve(response.data);
        }).catch(err=>{
            reject(err);
        })
    });
}