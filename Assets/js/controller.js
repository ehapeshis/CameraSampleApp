var app = angular.module('app', []);
app.controller('myCtrl', function($scope) {

	var cameras =   {"cameras": [
		{"name"  :"Sony"	, "quality":"1080p" , "memory": "micro SD"},
		{"name"  :"GoPro"	, "quality":"4k"	, "memory" :"micro SD"},
		{"name"  :"Garmin"	, "quality":"1080p"	, "memory" : "1GB "}]
	} 

	var editMode = false;

	$scope.edit = editMode;

	$scope.data	= cameras;

	$scope.add = function(){

		cameras.cameras.push({"name":"Brand", "quality":"1080p", "memory" : "1GB "})
	}

	$scope.delete = function(index){

		cameras.cameras.splice(index, 1);
	}
});



























