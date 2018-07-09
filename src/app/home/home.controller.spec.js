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

    it('HomeService nao nulo', () => {
      expect(ctrl.HomeService).not.toBe(null);
    });

    it('Imagem default nao nula', () => {
      expect(ctrl.img_logo).not.toBe(null);
    });

    it('Imagem default nao nula', () => {
      expect(ctrl.pageCount).toBe(1);
    });

    it('metodo view', () => {
      let movie = {poster_path: 'testeUrl'}
      ctrl.view(movie);
      expect(ctrl.pathImgModal).toBe('https://image.tmdb.org/t/p/w500/testeUrl');
    });

    it('metodo pathImage', () => {
      let movie = {backdrop_path: 'testeUrl'}
      ;
      expect(ctrl.pathImage(movie)).toBe('https://image.tmdb.org/t/p/w500/testeUrl');
    });

  });
});