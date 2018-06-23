class HomeService {
	constructor($http) {
		this.$http = $http;
		this.api_key = `c5850ed73901b8d268d0898a8a9d8bff`;
	}

	getGenres() {
		return this.$http({
			url: `https://api.themoviedb.org/3/genre/movie/list?api_key=c5850ed73901b8d268d0898a8a9d8bff&language=en-US`,
			method: `GET`
		})
		.then( response => response ).catch( error => error );
	}

	getUpcoming() {
		return this.$http({
			url: `https://api.themoviedb.org/3/movie/upcoming?api_key=${this.api_key}`,
			method: `GET`
		})
		.then( response => response ).catch( error => error );
	}

	getPage(pageCount) {
		return this.$http({
			url: `https://api.themoviedb.org/3/movie/upcoming?api_key=${this.api_key}&language=en-US&page=${pageCount}`,
			method: `GET`
		})
		.then( response => response ).catch( error => error );
	}
}

HomeService.$inject = [`$http`];

export default HomeService;