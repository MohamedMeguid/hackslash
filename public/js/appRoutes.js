angular.module('appRoutes', [])
    .config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

        $routeProvider

        // posts page

            .when('/login', {
                templateUrl: 'views/login.html',
                controller: 'loginCtrl'
            })
            .when('/forgot_password', {
                templateUrl: 'views/forgot_password.html',
                controller: 'pass_ctrl'
            })

            .when('/resetPassword', {
                templateUrl: 'views/reset_password.html',
                controller: 'pass_ctrl'
            })

            .when('/posts', {
                templateUrl: 'views/posts.html',
                controller: 'postsController'
            })
            .when('/post/new', {
                templateUrl: 'views/addPost.html',
                controller: 'postController'
            })
	    .when('/post/edit', {
                templateUrl: 'views/editPost.html',
                controller: 'postController'
            })
        $locationProvider.html5Mode(true);

    }]);
