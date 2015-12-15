(function() {
	'use strict';

	angular.module("ticketing")
	.directive('comments',[comments]);

	function comments() {
		return {
				restrict: 'E',
				bindToController: true,
				controllerAs: 'vmd',
				controller: controller,
				scope:{
					comments: '@'
				},
				templateUrl: 'js/common/detail/comments.html',
			};
		
			//call ang-link if needed
		
			function controller() {
				var vmd = this;
		
				activate();
		
				function activate() {
					
				}
			}
	}
})();