AppModule.controller("PessoaController", ["$scope","$http", "$routeParams", PessoaController])
        
function PessoaController($scope,$http){
    
    $scope.iniciar = funcaoIniciar;
    $scope.salvar = funcaoSalvar;
    $scope.excluir = funcaoExcluir;
    $scope.editar = funcaoEditar;
    
    $scope.pessoas = [];
    $scope.pessoa = {};
    $scope.isNovo = true;
    
    function funcaoEditar(vitima){
        $scope.pessoa = angular.copy(vitima);
        $scope.isNovo = false;
    }
    
    function funcaoExcluir(vitima){
        $http.delete("/pessoas/" + vitima.id).success(onSucess).error(onError);
        
        function onSucess(data,status){
            console.log(data);
            funcaoCarregar();
        }
        function onError(data,status){
            alert("Deu erro" + data);
        }
    }
    function funcaoSalvar(){
        alert("dados salvos")
        if ($scope.isNovo){
            $http.post("/pessoas",$scope.pessoa).success(onSucess).error(onError);
        } else {
            $http.put("/pessoas",$scope.pessoa).success(onSucess).error(onError);
        }
        function onSucess(data,status){
             console.log(data);
            funcaoCarregar();
            $scope.pessoa = {};
            $scope.isNovo = true;
        }
        function onError(dsta,status){
            alert("Deu Erro" + data);
        }
    }
    function funcaoCarregar(){
        $http.get("/pessoas").success(onSuccess).error(onError);
        function onSuccess(data,status){
            $scope.pessoas = data;
        }
        function onError(data,status){
            alert("deu erro" + data);
        }
    }
    function funcaoIniciar(){
        console.log(">>> iniciando....", "mais uma", "outra", "mais outra");
        console.log(">>> carregando pessoas....");
        funcaoCarregar();
        console.log(">>> pessoas carregados....");
    }
    
}