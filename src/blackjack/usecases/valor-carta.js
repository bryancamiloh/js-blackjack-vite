/**
 * Obtiene el valor numérico de la carta extraida de la baraja
 * @param {String} carta obtiene el valor alfanumérico de la carta extraida 
 * @returns {Number} devuelve el valor numérico de la carta para sumar puntos
 */
export const valorCarta = ( carta ) => {

    const valor = carta.substring(0, carta.length - 1);
    return ( isNaN( valor ) ) ? 
            ( valor === 'A' ) ? 11 : 10
            : valor * 1;
}

// export default valorCarta;