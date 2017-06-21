import angular from 'angular'

import app from '@/App'
import core from '@/core'
import modules from '@/modules'
import services from '@/services'
import components from '@/components'

angular.module('app', [
    core,
    modules,
    services,
    components
])
.components( { app } )

angular.bootstrap(document, ['app'])
