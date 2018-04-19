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
                            $locationProvider.html5Mode({
                              enabled: true,
                              requireBase: false
                            });
                            */
                            
                          }])
