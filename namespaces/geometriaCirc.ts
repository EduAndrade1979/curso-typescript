namespace geometria { // É possível aninhar NAMESPACES!!
    export namespace area {
        export const PI: number = 3.14
        
        export function circunferencia(raio: number): number {
            return PI * Math.pow(raio, 2)
        }
                
    }
}