import {inject} from "aurelia-framework";
import {HttpClient} from "aurelia-http-client";
import {Config} from "aurelia-api";


@inject(Config)
export class UserService {

  resource = 'users';

  constructor(apiConfig) {
    this.apiEndpoint = apiConfig.getEndpoint('data-api');
  }


  get(id) {
    return this.apiEndpoint.findOne(this.resource, id)
      .then(user => user)
      .catch(error => {
        console.error('Error !', error);
      });
  }

  save(user) {
    return this.apiEndpoint.updateOne(this.resource, user.id, {}, JSON.stringify(user))
      .then(user => user)
      .catch(error => {
        console.error('Error !', error);
      });
  }

  list(params) {

    return this.apiEndpoint.find(this.resource)
      .then(users => users)
      .catch(error => {
        console.error('Error !', error);
      });
  }
}
