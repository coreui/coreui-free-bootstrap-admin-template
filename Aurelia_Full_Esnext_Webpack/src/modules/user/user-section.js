export class UserSection {
  configureRouter(config, router) {
    config.map([
      {route: '', moduleId: './user-list', nav: false, title: ''},
      {route: '/:id', name: 'user-edit', moduleId: './user-edit', nav: false, title: ''},
    ]);
  }
}
