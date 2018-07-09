import app from './app/home';

describe('app.home', () => {

  describe('HomeController', () => {
    let ctrl;

    beforeEach(() => {
      angular.mock.module(app);

      angular.mock.inject(($controller) => {
        ctrl = $controller('HomeController', {});
      });
    });

    it('should contain the starter url', () => {
      expect(ctrl.url).toBe('https://github.com/preboot/angular-webpack');
    });
  });
});