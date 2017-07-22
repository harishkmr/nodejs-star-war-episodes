
var episodesJSON = require('../episodes.json');

exports.home =  function(request, response){
	var episodes = episodesJSON.episodes;
	response.render('home', {
		title : "Movies - Home Page",
		episodes : episodes
	});
};

exports.episodes = function(request, response){
	var episodes = episodesJSON.episodes;
	response.render('episodes', {
		title : "Movies - Home Page",
		episodes : episodes
	});
};

exports.episode =  function(request, response){
	var episode_number = request.params.episode_number;
	var episodes = episodesJSON.episodes;
	var movie = episodes[episode_number-1];
	var main_characters = movie.main_characters;
	response.render('episode', {
		title : movie.title,
		movie : movie,
		main_characters : main_characters
	});
};


exports.notFound =  function(request, response){
	response.render('page_not_found',{
		title : "Page Not Found"
	});
};