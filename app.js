	
	var app = angular.module("myApp",["ngRoute"]);
	app.controller("dbcontroller",["$scope",function($scope){
		$scope.sex = ["MALE","FEMALE"];
		$scope.category = ["GEN","OBC","SC","ST"];
		
		    $scope.studentlist= {
			items: [{
				studentname:"",
				selectedsex:"",
				relegion:"",
				date:"",
				email:"",
				fname:"",
				selectedcategory:"",
				mobilenumber:"",
				caddress:""
            
        }]};
			$scope.add = function(){
				$scope.studentlist.items.push({
				studentname:$scope.studentname,
				selectedsex:$scope.selectedsex,
				relegion:$scope.relegion,
				paddress:$scope.paddress,
				date:$scope.date,
				email:$scope.email,
				fname:$scope.fname,
				selectedcategory:$scope.selectedcategory,
				mobilenumber:$scope.mobilenumber,
				caddress:$scope.caddress,
				
			});
			window.localStorage.setItem('STUDENT',JSON.stringify($scope.studentlist.items));
			$scope.reset();
			};
			$scope.reset = function(){
			$scope.studentname="";
			$scope.selectedsex="";
			$scope.relegion="";
			$scope.selectedfriend="";
			$scope.paddress="";
			$scope.date="";
			$scope.fname="";
			$scope.selectedcategory="";
			$scope.mobilenumber="";
			$scope.caddress="";
			
		}
	
			$scope.delete = function(index){
			$scope.tempList = [];
			$scope.studentlist.items.splice(index, 1);
			if(window.localStorage.getItem('STUDENT'))
			{
				$scope.tempList= JSON.parse(window.localStorage.getItem('STUDENT'));
				$scope.tempList.splice(index, 1);
				window.localStorage.setItem('STUDENT',JSON.stringify($scope.tempList));
			}
		
		};		
	}])
	
	
	app.config(function($routeProvider) {
    $routeProvider
	.when("/studentform", {
        templateUrl : "studentform.html",
		controller : "dbcontroller"
    })
	});