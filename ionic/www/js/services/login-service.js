/* =======================================================
 *
 * =======================================================
 */

var myApp;

myApp.service('LogInServ',  function ($q,$http){
	return {
		logInUsr : function (username, password ) {
			var deffered = $q.defer(), 
				promise = deffered.promise;
		    
			 if(username == 'test' && password == "test" ){
			 	deffered.resolve('Welcome ' + username+ ' !');
			 } else {
			 	deffered.reject('Something is wrong with you');
			 }

			promise.success = function(fn) {
        promise.then(fn);
        console.log("success");
        return promise;
      };

      promise.error = function(fn) {
        promise.then(null, fn);
        console.log("error");
        return promise;
      };
      return promise;
		}
	};
});

