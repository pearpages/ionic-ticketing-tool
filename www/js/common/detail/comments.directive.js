(function() {
	'use strict';

	angular.module("ticketing")
	.directive('comments',['myUsers',comments]);

	function comments(myUsers) {
		return {
				restrict: 'E',
				bindToController: true,
				controllerAs: 'vmd',
				controller: controller,
				scope:{
					ticket: '='
				},
				templateUrl: 'js/common/detail/comments.html',
			};
		
			//call ang-link if needed
		
			function controller() {
				var vmd = this;
		
				vmd.form = {};
				vmd.form.comment = '';
				vmd.canAdd = canAdd;
				vmd.addComment = addComment;

				activate();
		
				function activate() {
					//directives are singletons, only run once	
				}

				function canAdd() {
					if(myUsers.getCurrentUser().id === vmd.ticket.it && vmd.ticket.status === 'open'){
						return true;
					}
					return false;
				}

				function addComment() {
					vmd.ticket.addComment(vmd.form.comment);
					vmd.form.comment = '';
				}
			}
	}
})();