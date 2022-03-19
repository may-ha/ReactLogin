import HttpRequest from "../utils/HttpRequest";

export class UsersServices{
     baseRoute = '/users/';
     login(userName,password){
        return HttpRequest(this.baseRoute + "login",{userName:userName,password:password},"POST")
    }
}