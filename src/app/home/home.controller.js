import _ from 'lodash';
import img from '../../public/img/thumb-fail.png';
import img_logo from '../../public/img/tmdb-logo.svg';

class HomeController {
	constructor(HomeService) {
		this.HomeService = HomeService;
		this.movies = [];
		this.genres = [];
		this.movieModal;
		this.pathImgModal = ``;
		this.imgDefault = img;
		this.pageCount = 1;
		this.img_logo = img_logo;
		this.getGenre();
		this.getUpcoming();
	}

	view(movie) {
		this.movieModal = movie;
		this.pathImgModal = `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
	}

    getUpcoming() {
    	this.HomeService.getUpcoming().then( response => this.movies = response.data.results ).catch( error => console.log(error) );
    }

    getGenre() {
    	this.HomeService.getGenres().then( response => this.genres = response.data.genres ).catch( error => console.log(error) );
    }

    nextPage() {
    	this.pageCount++;
    	this.HomeService.getPage(this.pageCount).then( response => this.movies = response.data.results ).catch( error => console.log(error) );
    }

    prevPage() {
    	if(this.pageCount > 1) {
			this.pageCount--;
	    	this.HomeService.getPage(this.pageCount).then( response => this.movies = response.data.results ).catch( error => console.log(error) );
    
    	}
    }

    translateGenres(list) {
    	let gen = ``;
    	if(list){
			for (var i = 0; i < list.length; i++) {
	    		let genre = _.find(this.genres, function(obj) { return obj.id == list[i] });
	    		gen = `${gen}, ${genre.name}`
	    	}
    	}
    	
    	return gen.slice(1);
    }

    pathImage(movie) {
    	if( movie.backdrop_path ) return `https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`; 
    	return this.imgDefault;
    }
}

HomeController.$inject = [`HomeService`];

export default HomeController;