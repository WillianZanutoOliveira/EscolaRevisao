AppModule.config(function($routeProvider, $locationProvider) {

    $routeProvider
     .when('/Pessoa/novo', {
        templateUrl: 'view/Pessoa.html',
        controller: 'PessoaController'
    }).when('/', {
        templateUrl: 'view/Home.html'
    });

    //verificar se é possível separar as rotas em módulos

    $locationProvider.html5Mode(false);
});