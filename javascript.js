//make the navbar change color when scrolling down
$(function () {
  $(document).scroll(function () {
    var $nav = $(".fixed-top");
    $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
  });
});

//there might be a more general way to do that, but due to lack of time here it is the manual way
//happy
$.ajax({
  url: 'http://api.giphy.com/v1/gifs/search',
  method: 'GET',
  contentType: 'application/json; charset=UTF-8',
  data: {
    q:'happy',  // We are searching for happy
    limit: 1,  // We limit this search to 1 gif only
    api_key: 'dc6zaTOxFJmzC'  // Password to authenticate us as a legitimate Giphy user
  },
  success: handleResultsHappy  // Name of a function to be called after API call was successful
});

function handleResultsHappy(response_body) {
	response_body.data.forEach(function(item) {
		var url = item.images.fixed_height_downsampled.url;
		var image = $(document.createElement("img"));
		image.attr("src", url)
		image.appendTo("#photo-container-happy")
	})
}

//hungover
$.ajax({
  url: 'http://api.giphy.com/v1/gifs/search',
  method: 'GET',
  contentType: 'application/json; charset=UTF-8',
  data: {
    q:'hangover',
    limit: 1 ,
    api_key: 'dc6zaTOxFJmzC'
  },
  success: handleResultsHungover
});

function handleResultsHungover(response_body) {
	response_body.data.forEach(function(item) {
		var url = item.images.fixed_height_downsampled.url;
		var image = $(document.createElement("img"));
		image.attr("src", url)
		image.appendTo("#photo-container-hungover")
	})
}

//exhausted
$.ajax({
  url: 'http://api.giphy.com/v1/gifs/search',
  method: 'GET',
  contentType: 'application/json; charset=UTF-8',
  data: {
    q:'exhausted',
    limit: 1,
    api_key: 'dc6zaTOxFJmzC'
  },
  success: handleResultsExhausted
});

function handleResultsExhausted(response_body) {
	response_body.data.forEach(function(item) {
		var url = item.images.fixed_height_downsampled.url;
		var image = $(document.createElement("img"));
		image.attr("src", url)
		image.appendTo("#photo-container-exhausted")
	})
}

//partymode
$.ajax({
  url: 'http://api.giphy.com/v1/gifs/search',
  method: 'GET',
  contentType: 'application/json; charset=UTF-8',
  data: {
    q:'party',
    limit: 1,
    api_key: 'dc6zaTOxFJmzC'
  },
  success: handleResultsPartymode
});

function handleResultsPartymode(response_body) {
	response_body.data.forEach(function(item) {
		var url = item.images.fixed_height_downsampled.url;
		var image = $(document.createElement("img"));
		image.attr("src", url)
		image.appendTo("#photo-container-partymode")
	})
}

//studyhard
$.ajax({
  url: 'http://api.giphy.com/v1/gifs/search',
  method: 'GET',
  contentType: 'application/json; charset=UTF-8',
  data: {
    q:'study hard',
    limit: 1,
    api_key: 'dc6zaTOxFJmzC'
  },
  success: handleResultsStudyhard
});

function handleResultsStudyhard(response_body) {
	response_body.data.forEach(function(item) {
		var url = item.images.fixed_height_downsampled.url;
		var image = $(document.createElement("img"));
		image.attr("src", url)
		image.appendTo("#photo-container-studyhard")
	})
}

//christmas
$.ajax({
  url: 'http://api.giphy.com/v1/gifs/search',
  method: 'GET',
  contentType: 'application/json; charset=UTF-8',
  data: {
    q:'christmas',
    limit: 1,
    api_key: 'dc6zaTOxFJmzC'
  },
  success: handleResultsChristmas
});

function handleResultsChristmas(response_body) {
	response_body.data.forEach(function(item) {
		var url = item.images.fixed_height_downsampled.url;
		var image = $(document.createElement("img"));
		image.attr("src", url)
		image.appendTo("#photo-container-christmas")
	})
}
