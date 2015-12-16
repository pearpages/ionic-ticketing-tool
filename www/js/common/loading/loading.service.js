/**
 *
 * Loading message that can execute a callback
 */
(function() {
	'use strict';

	angular.module("ticketing")
	.factory('myLoading',['$ionicLoading','$timeout',myLoading]);

	function myLoading($ionicLoading,$timeout) {

		return {
			loading: function(callback) {
				$ionicLoading.show({
					template: 'Loading...'
				});

				$timeout(function() {
					callback();
					$ionicLoading.hide();				
				},250);
			}
		};
	}
})();