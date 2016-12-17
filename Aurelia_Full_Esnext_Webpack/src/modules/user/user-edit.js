import {inject} from "aurelia-dependency-injection";
import {UserService} from "./user-service";


@inject(UserService)
export class UserEdit {
  user = {};
  constructor(service) {
    this.service = service;
  }

  get title() {
    return this.user.username || 'User';
  }

  activate(params, routeConfig) {
    this.service.get(params.id).then(user=>this.user = user);
  }
  save(){
    this.service.save(this.user)
  }
}
