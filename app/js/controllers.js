'use strict';

/* Controllers */


function HomeCtrl() {

}
HomeCtrl.$inject = [];


function DashboardCtrl(){


}
DashboardCtrl.$inject=[];

function VentasCtrl()
{

}
VentasCtrl.$inject = [];

function ProductosCtrl(){

}
ProductosCtrl.$inject = [];


function ClientesCtrl($scope, Cliente){
	$scope.clientes = Cliente.query();
	// $http.get('sampledata/clientes.json').success(function(data) {
    //$scope.clientes = data;
 // });
 
  $scope.orderProp = 'clienteid';

}
//ClientesCtrl.$inject = ['$scope', '$http'];;