/*------------------------------------------------------
 * JQuery
 *------------------------------------------------------
 * Registra a biblioteca JQuery
 */
window.jQuery = window.$ = require('jquery');

import * as angular from 'angular';

/*------------------------------------------------------
 * Importa as dependência
 *------------------------------------------------------
 * Dependências compartilhada entre os modulos da 
 * aplicação.
 */
import 'angular-animate';
import 'angular-base64';
import 'angular-cookies';
import 'angular-loading-bar';
import 'angular-locale';
import 'angular-oauth2';
import 'angular-paging';
import 'angular-resource';
import 'angular-sanitize';
import 'angular-ui-router';
import 'bootstrap';
import 'file-saver';
import 'ngstorage';
import 'ng-desktop-notifications';
import 'toastr';

/*------------------------------------------------------
 * Registra os módulos 
 *------------------------------------------------------
 * Neste momento vamos registrar todos os módulos
 * compartilhado entre todos os módulos da durante
 * o clico de vida da aplicação.
 */
angular.module('app.core', [
    'ngAnimate',
    'ngLocale',
    'ngCookies',
    'ngResource',
    'ngStorage',
    'ngFileUpload',
    'ngSanitize',
    'ngDesktopNotifications',
    'ui.router',
    'ui.select',
    'bw.paging',
    'angular-loading-bar'
])

/*------------------------------------------------------
 * Execução da aplicação
 *------------------------------------------------------
 * ... 
 */
.run(['$rootScope', function($rootScope){
    $rootScope.pageTitle = '{{name}}';
}])