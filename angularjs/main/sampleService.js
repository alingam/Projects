angular.module('sampleApp').factory('sampleService',SampleService);

function SampleService(){
	return{
		sayHello:function(){
			return "Hello";
		}
	}
}