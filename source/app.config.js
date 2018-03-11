var CrudMongoose = angular.module('CrudMongoose', ['ngMaterial', 'ngAnimate', 'ngMessages', 'ngAria', 'ui.router','ngResource','ngCookies'])
                          .config(['$httpProvider', function ($httpProvider) {
                            $httpProvider.interceptors.push(function($q, $cookies) {
                              return {
                               'request': function(config) {

                                    config.headers['x-access-token'] = $cookies.get('token');
                                    return config;
                                }
                              };
                            });
                          }])