import app from './index';

describe('app.home', () => {

  describe('HomeService', () => {
    let service;

    beforeEach(() => {
      angular.mock.module(app);

      angular.mock.inject(($injector) => {
        service = $injector.get('HomeService');
      });
    });

    it('$http nao nulo', () => {
      expect(service.$http).not.toBe(null);
    });

    it('api_key', () => {
      expect(service.api_key).toBe('c5850ed73901b8d268d0898a8a9d8bff');
    });

    it('api_key nao nula', () => {
      expect(service.api_key).not.toBe(null);
    });

  });
});