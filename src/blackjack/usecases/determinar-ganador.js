
/**
 * Determina el ganador del juego por puntaje
 * @param {Number} puntosComputadora puntaje obtenido por la computadora
 * @param {Number} puntosMinimos puntaje obtenido por el jugador y minimo requerido para ganar
 */
export const determinarGanador = ( puntosComputadora, puntosMinimos ) => {

    setTimeout(() => {
        if( puntosComputadora === puntosMinimos ) {
            alert('Nadie gana :(');
        } else if ( puntosMinimos > 21 ) {
            alert('Computadora gana')
        } else if( puntosComputadora > 21 ) {
            alert('Jugador Gana');
        } else {
            alert('Computadora Gana')
        }
    }, 100 );

}