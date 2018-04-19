var CrudMongoose = angular.module('CrudMongoose', ['ngMaterial', 'ngAnimate', 'ngMessages', 'ngAria', 'ui.router','ngResource','ngCookies'])
                          .config(['$httpProvider', '$locationProvider',  function ($httpProvider,$locationProvider) {
                            $httpProvider.interceptors.push(function($q, $cookies) {
                              return {
                               'request': function(config) {

                                    config.headers['x-access-token'] = $cookies.get('token');
                                    return config;
                                }
                              };
                            });
                            
                            /*
                            https://code.angularjs.org/1.6.9/docs/error/$location/nobase
                            
                            Note that removing the requirement for a <base> tag will have adverse side effects when resolving relative paths with $location in IE9.
                            The base URL is then used to resolve all relative URLs throughout 
                            the application regardless of the entry point into the app.
                            */
                            
                            $locationProvider.html5Mode(true);
                            
                          }])
