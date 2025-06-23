/**
 * Esta función permite tomar una carta de la baraja.
 * @param {Array<String>} deck obtiene la baraja que había sido creada.
 * @returns {String} devuelve la carta extraida de la baraja.
 */
export const pedirCarta = ( deck ) => {

    if ( !deck || deck.length === 0 ) {
        throw 'No hay cartas en el deck';
    }

    const carta = deck.pop();
    return carta;
}

//export default pedirCarta;