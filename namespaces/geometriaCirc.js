"use strict";
var geometria;
(function (geometria) {
    let area;
    (function (area) {
        area.PI = 3.14;
        function circunferencia(raio) {
            return area.PI * Math.pow(raio, 2);
        }
        area.circunferencia = circunferencia;
    })(area = geometria.area || (geometria.area = {}));
})(geometria || (geometria = {}));
//# sourceMappingURL=geometriaCirc.js.map