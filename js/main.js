var sales__details__left = $(".sales__details__left");

var clickArea__left = $(".sales__left");

var detailsShow = function () {
	var currentState = sales__details__left.attr("data-state")
	if (currentState == "active") {
		sales__details__left.attr("data-state", "inactive");
	} else {
		sales__details__left.attr("data-state", "active");
	}
	
};

clickArea__left.on("click", detailsShow);

var sales__details__right = $(".sales__details__right");

var clickArea__right = $(".sales__right");

var detailsShow = function () {
	var currentState = sales__details__right.attr("data-state")
	if (currentState == "active") {
		sales__details__right.attr("data-state", "inactive");
	} else {
		sales__details__right.attr("data-state", "active");
	}
	
};

clickArea__right.on("click", detailsShow);