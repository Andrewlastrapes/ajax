

var URL = "http://dc-coffeerun.herokuapp.com/api/coffeeorders"



var twoKeys = {
	"coffee": "Black",
	"emailAddress": "Andrewlastrapes@gmail.com"
}


$.get(URL, function(x){
	console.log(x);
})

$.post(URL, twoKeys, function(x){
	console.log(x);
})


