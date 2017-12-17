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

      function myMap() {
      var mapProp= {
          center:new google.maps.LatLng(52.3730601,4.8920707),
          zoom:12,
      };
      var map=new google.maps.Map(document.getElementById("googleMap"),mapProp);
      
      var myCenter1 = new google.maps.LatLng(52.399017,4.894131);
      var marker = new google.maps.Marker({position:myCenter1});
      marker.setMap(map);

      var myCenter2 = new google.maps.LatLng(52.367523,4.888466);
      var marker = new google.maps.Marker({position:myCenter2});
      marker.setMap(map);


      var myCenter3 = new google.maps.LatLng(52.3680606,4.8900954);
      var marker = new google.maps.Marker({position:myCenter3});
      marker.setMap(map);

      var myCenter4 = new google.maps.LatLng(52.3762687,4.8875106);
      var marker = new google.maps.Marker({position:myCenter4});
      marker.setMap(map);

      var myCenter5 = new google.maps.LatLng(52.3537736,4.9095949);
      var marker = new google.maps.Marker({position:myCenter5});
      marker.setMap(map);

      var myCenter6 = new google.maps.LatLng(52.3587285,4.8820628);
      var marker = new google.maps.Marker({position:myCenter6});
      marker.setMap(map);                                                             
                                                          
      }
