"use strict";
// namespace geometria { // É possível aninhar NAMESPACES!!
//     export namespace area {
//         export const PI: number = 3.14
//         export function circunferencia(raio: number): number {
//             return PI * Math.pow(raio, 2)
//         }
//         export function retangulo(base: number, altura: number): number {
//             return base * altura
//         }
//     }
// }
/// <reference path='geometriaCirc.ts'/> 
/// <reference path='geometriaRect.ts'/> 
// const PI: number = 2.99 
//=> O PI de dentro do namespace permanece protegido e é possivel gerar 
// outra constante com o mesmo nome fora do escopo "NAMESPACE"
console.log(geometria.area.circunferencia(10));
console.log(geometria.area.retangulo(10, 20));
//console.log(PI) // 2.99
console.log(geometria.area.PI); // 3.14
//# sourceMappingURL=namespaces.js.map