import {inject} from "aurelia-dependency-injection";
import {containerless} from "aurelia-framework";
import {Router} from "aurelia-router";

@inject(Router)
@containerless
export class Breadcrumbs {
  constructor(router) {
    while (router.parent) {
      router = router.parent;
    }
    this.router = router;
  }

  navigate(navigationInstruction) {
    console.log("Navigate to:", navigationInstruction)
    navigationInstruction.router.navigateToRoute(navigationInstruction.config.name, navigationInstruction.params);
  }
}
