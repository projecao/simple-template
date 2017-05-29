
import * as angular from 'angular'
import 'angular-ui-router'

import app from './App'

angular.module('app', ['ui.router'])
.components( { app })
.config(['$stateProvider', ({ state }) => {

    state('app', {
        url: '',
        component: 'app'
    })

}]);

// bootstrap aplication
angular.bootstrap(document.getElementById('app'), ['app'])
