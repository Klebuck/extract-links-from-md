/* un modulo, es un código que “exporta/expone” una serie de funciones 
mediante un objeto llamado “exports”
https://palomadeveloper.wordpress.com/2014/11/08/modulos-module-exports-de-javascript-para-autodidactas/. */

/* La declaración export es usada para exportar funciones, 
objetos o tipos de dato primitivos a partir de un archivo (o módulo). 

Al declarar la función de esta manera, permite que la misma sea usada de manera 'pública'*/

// extract es el nombre de la función que extrae los links de un archivo en formato markdown
exports.extract = function(string) {
  'use strict'; // Permite optar por una versión restringida de JavaScript.
  /* reAllLinks es la variable que almacena el patrón que se desea buscar en la
  cadena de caracteres*/
  var reAllLinks = /!?\[(.*)\]\((.*?)\)/g;
  // alllinks almacena todos los caracteres que cumplen con el patrón reAllLinks
  // match: Busca dentro de un string lo que sea igual, en este caso al patrón
  var alllinks = string.match(reAllLinks);
  // alllinksclean es un  array vacio, que almacenará todos los links que no tengan signo de admiración antes del corchete
  var alllinksclean = [];
  /* Recorrer todo el arreglo alllinks y busca cada elemento del arreglo que no tengan "!" y se
  almacenan con push en alllinksclean */
  alllinks.forEach(element => {
    if (!element.startsWith('!')) {
      alllinksclean.push(element);
    }
  });
  // Se hace un patrón llamado reBrac de expresión regular que contenga brackets (corchetes),
  var reBrac = /\[(.*?)\]/;
  // Se hace un patrón llamado rePare de expresión regular que contenga parentheses (parentesis),
  var rePare = /\((.*?)\)/;
  // Se inicializan dos arreglos vacios, uno que almacenará los textos (texts) y otro los links. 
  var texts = [];
  var links = [];
  // Se recorre el arreglo limpio alllinksclean con un forEach.
  alllinksclean.forEach(element => {
    // console.log(element);
    /* En el arreglo texts se agregan con push todos los elementos que cumplan con el patrón, 
    pero como solo queremos el contenido, se coloca lo que aparece en posición 1 */
    texts.push(element.match(reBrac)[1]);
    // console.log(element.match(reBrac));
    links.push(element.match(rePare)[1]);
    // console.log(element.match(rePare)[1]);
  });

  // console.log(texts);
  // console.log(links);

  // Se declara un arreglo vacio objarray donde se colocaran los links y los textos.
  var objarray = [];
  for (let i = 0; i < texts.length; i++) {
    let obj = {};
    obj.href = links[i];
    obj.text = texts[i];
    objarray.push(obj);
  }
  return objarray;
};
// extractLinks(str);