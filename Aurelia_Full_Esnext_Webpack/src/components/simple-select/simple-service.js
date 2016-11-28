import {inject, LogManager} from "aurelia-framework";
import {HttpClient} from "aurelia-http-client";
import {Endpoint} from "aurelia-api";
let logger = LogManager.getLogger('SimpleService');


@inject(Endpoint.of('simple-api'))
export class SimpleService {
  resource = '';

  constructor(apiEndpoint) {
    this.apiEndpoint = apiEndpoint;
  }

  simpleQuery(code, name, max, searchParentsOnly, searchString) {
    var param = {max: max || 50};
    param.code = code;
    param.name = name;

    param.searchString = searchString;
    param.searchParentsOnly = searchParentsOnly;

    logger.debug('Pärime simpleid parameetritega:', param);
    return this.apiEndpoint.find(this.resource, param)
      .then(response => response)
      .catch(error => {
        console.error('Error !', error);
      });
  };
}
