(function() {
	'use strict';

	angular.module("new-ticket")
	.controller('NewTicketController',[
        'myUsers',
        'myTickets',
        '$state',
        'CategoriesMocks',
        'UserMocks',
        '$cordovaCamera',
        '$ionicPlatform',
        NewTicketController]);

	function NewTicketController(myUsers,myTickets,$state,CategoriesMocks,UserMocks,$cordovaCamera,$ionicPlatform) {
		var vm = this;

		vm.ticket = null;
        vm.view = null;
        vm.show = show;
        vm.users = null;
        vm.issues = null;
        vm.me = null;
        vm.seeExpress = false;
        vm.getIssueDescription = getIssueDescription;
        vm.transformName = transformName;
        vm.setWhoOffice = setWhoOffice;
        vm.getPicture = getPicture;
        vm.submit = submit;

        activate();

        function activate() {

            if(myUsers.getCurrentUser()!== null){
                vm.ticket = myTickets.make(myTickets,myUsers.getCurrentUser().id);
                vm.me = myUsers.getCurrentUser().id;
                vm.ticket.office = myUsers.getCurrentUser().office;    

                vm.seeExpress = (myUsers.getCurrentUser().role === 'admin' ||
                myUsers.getCurrentUser().role === 'helpdesk') ? true : false;

                vm.view = 'form';
                vm.users = UserMocks.getAllOffices();
                vm.issues = CategoriesMocks.getAll();
            } else {
                $state.go('tab.account');
            }
                        
        }

        function getIssueDescription(id) {
            return CategoriesMocks.getDescription(id);
        }

        function setWhoOffice (office) {
            vm.ticket.office = office;
        }

        function show(id) {
            vm.view = id;
        }
        
        function transformName(name) {
            return UserMocks.getUserId(name);
        }

        function getPicture() {
            $ionicPlatform.ready(function() {
                var options = {
                  quality: 50,
                  destinationType: Camera.DestinationType.DATA_URL,
                  sourceType: Camera.PictureSourceType.CAMERA,
                  allowEdit: true,
                  encodingType: Camera.EncodingType.JPEG,
                  targetWidth: 100,
                  targetHeight: 100,
                  popoverOptions: CameraPopoverOptions,
                  saveToPhotoAlbum: false,
                  correctOrientation:true
                };

                $cordovaCamera.getPicture(options).then(function(imageData) {
                  
                  vm.ticket.image = "data:image/jpeg;base64," + imageData;
                }, function(err) {
                  // error
                });
            });
        }

        function submit() {
            vm.ticket.issueDescription = vm.getIssueDescription(vm.ticket.issue);
            vm.ticket.save();
            $state.go('tab.my-tickets');
        }

	}
})();