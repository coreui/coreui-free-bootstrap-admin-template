import {Users} from '../../src/users';

class HttpStub {
  fetch(url) {
    var response = this.itemStub;
    this.url = url;
    return new Promise((resolve) => {
      resolve({ json: () => response });
    });
  }

  configure(func) {
  }
}

describe('the Users module', () => {
  it('sets fetch response to users', (done) => {
    var itemStubs = [1];
    var itemFake = [2];

    var getHttp = () => {
      var http = new HttpStub();
      http.itemStub = itemStubs;
      return http;
    };

    var sut = new Users(getHttp);

    sut.activate().then(() => {
      expect(sut.users).toBe(itemStubs);
      expect(sut.users).not.toBe(itemFake);
      done();
    });
  });
});
