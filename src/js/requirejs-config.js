var requirejsConfig = {
  baseUrl: '/',
  paths: {
    'angular': 'lib/angular/angular',
    'angular-route': 'lib/angular-route/angular-route.min',
    'jquery': 'lib/jquery/jquery.min',
    'bootstrap': 'lib/bootstrap/dist/js/bootstrap.min'
  },
  shim: {
    'angular': {
      exports: 'angular'
    },
    'jquery': {
      exports: '$'
    },
    'angular-route': {
      deps: ['angular']
    },
    'bootstrap': {
      deps: ['jquery']
    }
  }
};