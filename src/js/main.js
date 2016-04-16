/**
 * Created by master on 16/04/2016.
 */

var miapp = angular.module("pec02_p6", []);

miapp.controller('MainController', ['$http', function($http) {
    //Buena practica: utilizamos self en lugar de this
    var self = this;

    //Cargamos el json
    $http.get('listado.json').then(function (response) {
        //Obtenemos los elementos contenidos en la raiz del json, llamada listado
        self.listado = response.data.listado;

        //Recorremos los elementos del listado
        for (var elemento in self.listado) {
            //Para cada elemento del listado añadimos un dt para el titulo y un dd para el detalle
            var obj = self.listado[elemento];
            $("#lista").append("<dt class='text-success'>"+ obj.titulo+"</dt>", "");
            $("#lista").append("<dd class='text-info'>"+ obj.detalle+"</dd>", "");
        }


    }, function (errResponse) {
        //Si falla la carga del json, se avisa en un alert
        alert('No se han podido cargar los datos');
    });
}]);