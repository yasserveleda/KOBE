import app from './index';

describe('app.home', () => {

  describe('HomeController', () => {
    let ctrl;

    beforeEach(() => {
      angular.mock.module(app);

      angular.mock.inject(($controller) => {
        ctrl = $controller('HomeController', {});
      });
    });

    it('should contain the test string', () => {
      expect(ctrl.testeStr).toBe('Yasser Teste String');
    });
  });
});