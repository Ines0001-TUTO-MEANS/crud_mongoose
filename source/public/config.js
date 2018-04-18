var mApp = angular.module('mForgotPassword', ['ngMaterial'])
                          .config(['$httpProvider', function ($httpProvider) {
                            $httpProvider.interceptors.push(function() {
                              return {
                               'request': function(config) {

                                    console.log('request:',config)
                                    return config;
                                },
                                
                                // optional method
                                'response': function(response) {
                                  console.log('response:',response)
                                  return response;
                                },
                              };
                            });
                          }])