import {inject, singleton} from "aurelia-dependency-injection";
import {AppRouter} from "aurelia-router";
import {UserService} from "./user-service";


@inject(AppRouter, UserService)
@singleton()
export class UserList {
  constructor(router, service) {
    this.service = service;
    this.router = router;
  }

  users = [];
  totalItems = 100;

  pageSize = 10;

  bind() {
    return this.service.list()
      .then(users => {
        this.users = users
      });
  }
}
