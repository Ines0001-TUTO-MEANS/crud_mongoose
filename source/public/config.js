var mApp = angular.module('mForgotPassword', ['ngMaterial'])
                          .config(['$locationProvider', function ($locationProvider) {
                            
                            $locationProvider.html5Mode({
                              enabled: true,
                              requireBase: false
                            });
                            
                          }])