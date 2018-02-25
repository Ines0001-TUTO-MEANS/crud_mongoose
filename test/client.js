var http=require("http")
var options={
	hostname:"localhost",
	port:3000,
	path:"/api/v1/users?select=name",
	method:"GET"

};

var request= http.get(options,function(response){

	response.setEncoding("utf8");
	
	response.on("data",function(chunk){
		console.log("Data:", chunk);
	})
})

request.on("error",function(e){

	console.log("Erreur request:",e.message);
})