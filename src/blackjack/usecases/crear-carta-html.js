
/**
 * La función crear la carta para ser graficada en el html
 * @param {String} carta carta extraida 
 * @returns {ElementHTML} elemento de imagen html
 */
export const crearCartaHTML = ( carta ) => {

    if( !carta ) throw new Error( 'El argumento carta es obligatorio' );

    const imgCarta = document.createElement('img');
    imgCarta.src = `assets/cartas/${ carta }.png`; //3H, JD
    imgCarta.classList.add('carta');

    return imgCarta;

}