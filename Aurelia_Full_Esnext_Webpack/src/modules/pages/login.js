import {AuthService} from "aurelia-authentication";
import {inject} from "aurelia-framework";

@inject(AuthService)
export class Login {
  constructor(authService) {
    this.authService = authService;
    this.authenticated = this.authService.authenticated;

  };

  authenticate() {
    if (this.authenticated) {
      return true;
    }
    return this.authService.authenticate()
      .then((resp) => {
        this.authenticated = this.authService.authenticated;
      });
  };

  // use authService.logout to delete stored data
  // set expiredRedirect in your settings to automatically redirect
  logout() {
    return this.authService.logout()
      .then(() => {
        this.authenticated = this.authService.authenticated;
      });
  }
}
