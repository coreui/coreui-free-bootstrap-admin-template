import {customElement, bindable, inject} from "aurelia-framework";
import "bootstrap-datepicker";
import {SimpleService} from "./simple-service";

@customElement('simple-select')
@inject(SimpleService)
export class SimpleSelect {
  @bindable code;
  @bindable value;
  simpleid = [];

  constructor(service) {
    this.service = service;
  }

  attached() {
    this.fetchSimpleid();
  }

  fetchSimpleid() {
    this.service.simpleQuery(this.code, '', 100).then(simpleid =>
      this.simpleid = simpleid
    );
  }
}
