"use strict";
var geometria;
(function (geometria) {
    let area;
    (function (area) {
        function retangulo(base, altura) {
            return base * altura;
        }
        area.retangulo = retangulo;
    })(area = geometria.area || (geometria.area = {}));
})(geometria || (geometria = {}));
//# sourceMappingURL=geometriaRect.js.map