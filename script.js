/**
 * @author      Jean Némarre <jean.nemarre@divtec.ch>
 * @version     0.1
 * @since       2016-09-23
 *
 * http://usejsdoc.org/
 */

(function main() {
    'use strict'; // Demande un interprétation stricte du code

    const formulaire = document.getElementById('formRect');
    const rectangle = document.getElementById('rectangle');
    const hauteur = document.getElementById('hauteur');
    const largeur = document.getElementById('largeur');

    console.log(formulaire, hauteur, largeur, rectangle);


    formulaire.addEventListener('submit', function miseAJour(event) {
        event.preventDefault(); // Stop l'envoi du formulaire
        rectangle.style.height = hauteur.value + 'px';
        rectangle.style.width = largeur.value + 'px';
    });



}()); // Main IIFE
