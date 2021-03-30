/**5) Programa una función que invierta las palabras de una cadena de texto, 
 * pe. miFuncion("Hola Mundo") devolverá "odnuM aloH". 
 * */

const invertirPalabra = (cadena = '') => {

    // if (!cadena) return console.error('Debes ingresar una cadena de texto');
    // let invertida = '';
    // for (let i = cadena.length; i >= 0; --i) {
    //     invertida = invertida + cadena.charAt(i);
    // }
    // console.info(invertida);

    (!cadena) ?
    console.warn('Debes ingresar una cadena de texto'): console.info(cadena.split('').reverse().join(''))
}

invertirPalabra('hola');

/**5) 6) Programa una función para contar el número de veces que se repite una palabra en un texto largo, 
 * pe. miFuncion("hola mundo adios mundo", "mundo") devolverá 2.. 
 * */

const repetirPalabra = (cadena = ' ', pal = ' ') => {
    // (!cadena) ? console.error('Debes ingresar una cadena'):
    //     (!pal) ? console.error('Debes ingresar la palabar que se va a repetir') :
    //     console.log(cadena.match(new RegExp(pal, 'ig')))

    if (!cadena) return console.warn('No ingresastes el texto largo');
    if (!pal) return console.warn('No ingresastes la palabra a evaluar');
    let i = 0,
        cont = 0;
    while (i !== -1) {
        i = cadena.indexOf(pal, i);
        if (i !== -1) {
            i++;
            cont++;
        }
    }
    return console.info(`La palabra "${pal}" se repito ${cont} veces`)

}

repetirPalabra('hola mundo adios Mundo', 'mundo');

/**7) Programa una función que valide si una palabra o frase dada, es un palíndromo (que se lee igual en un sentido que en otro),
 *  pe. mifuncion("Salas") devolverá true.
 * */
const palabraPalindromo = (cadena = '') => {
    if (!cadena) return console.error('Debes ingresar una cadena de texto');
    let invertida = '';
    for (let i = cadena.length; i >= 0; --i) {
        invertida = invertida + cadena.charAt(i);
    }

    (cadena.toLowerCase === invertida.toLowerCase) ? console.info(`si es Palindromo, ${cadena} es leee igual a ${invertida}`): console.info(`La palabra "${cadena}" No es Palindromo`);
}

palabraPalindromo('Salas');

/**8) Programa una función que elimine cierto patrón de caracteres de un texto dado,
 *  pe. miFuncion("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz") devolverá  "1, 2, 3, 4 y 5. 
 * */
const eliminarPalabra = (cadena = '', patron = '') => {
    (!cadena) ?
    console.error('Debe ingresar la oracion'): (!patron) ?
        console.error('Debe ingresar un patron') :
        console.info(cadena.replace(new RegExp(patron, "ig"), ""));

}

eliminarPalabra("xyz1,xyz2,xyz3,xyz4 y xyz5", "xy2");