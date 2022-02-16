/**
 * @author      Jean Némarre <jean.nemarre@divtec.ch>
 * @version     0.1
 * @since       2016-09-23
 *
 * http://usejsdoc.org/
 */

(function main() {
    "use strict"; // Demande un interprétation stricte du code

    //Récupération des éléments HTML utiles
    const formRect = document.getElementById("formRect");
    const txtHauteur = document.getElementById("hauteur");
    const txtLargeur = document.getElementById("largeur");
    const optCouleur = document.getElementById("fond");
    const chkGras = document.getElementById("gras");
    const chkSouligne = document.getElementById("souligne");
    const txtTxt = document.getElementById("txt");
    const divRectangle = document.getElementById("rectangle");

    //Sauvegarde le style et le texte par défaut du rectangle
    // const DIV_RECTANGLE_STYLES = divRectangle.style.cssText
    const DIV_RECTANGLE_TXT = divRectangle.innerText

    /**
     * Modifie l'aspect et le contenu de la div #rectangle
     * en fonction des valeurs actuelles du formulaire.
     *
     * @return {Boolean} retourne toujours false pour stopper l'envoi du formulaire
     */
    function miseAJour(event) {
        //Stoppe l'envoi du formulaire
        event.preventDefault();

        /*** Hauteur et largeur ***/
            //Récupère la hauteur et la largeur sans oublier de les convertir en entier
        let hauteur = parseInt(txtHauteur.value, 10); //Retourne un entier ou NaN
        let largeur = parseInt(txtLargeur.value, 10);

        //Si hauteur ou largeur ne sont PAS des nombres
        if (isNaN(hauteur) || isNaN(largeur)) {
            alert("Entrez un nombre !");
            return false; //Stoppe le script, code de la fonction
        }

        //Si la hauteur ou la largeur sont inférieures à 500 et positifs
        if (hauteur > 500 || hauteur <= 0 || largeur > 500 || largeur <= 0) {
            alert("Largeur et hauteur max 500 !");
            return false;
        }

        //Modification de la hauteur et de la largeur
        divRectangle.style.height = hauteur + "px";
        divRectangle.style.width = largeur + "px";

        /*** Couleur de fond ***/
        divRectangle.style.background = optCouleur.value;

        /*** Couleur du texte ***/
        //divRectangle.style.color = getRadio(document.getElementsByName("color"));
        //ou plus efficace avec querySelector()
        //querySelector('sélecteur CSS') récupère le 1er élément HTML correspondant au sélecteur CSS en paramètre
        //querySelectorAll('sélecteur CSS') récupère tous les éléments HTML correspondant au sélecteur CSS en paramètre
        divRectangle.style.color = formRect.querySelector('[name="color"]:checked').value;

        /*** Style du texte ***/
        //Si le style gras est coché
        if (chkGras.checked) {
            divRectangle.style.fontWeight = "bold";
        } else {
            divRectangle.style.fontWeight = "normal";
        }

        //Si souligné est coché -- affectation avec condition ternaire
        divRectangle.style.textDecoration = chkSouligne.checked
            ? "underline" //Si condition vrai
            : "none"; //Si condition fausse

        /*** Texte du rectangle ***/
        divRectangle.innerHTML = txtTxt.value;

        //formRect.submit(); //Envoie le formulaire

        /*** Stoppe l'envoi du formulaure ***/
        //return false;
    }

    //Affecte la fonction miseAJour à l'envoi du formRect
    //formRect.onsubmit = miseAJour; //Pas de parenthèses
    formRect.addEventListener('submit', miseAJour);

    //Réinitialisation du carre sur le reset du formulaire
    formRect.addEventListener('reset', function resetForm() {
        // Supprime les styles appliqués par le script
        divRectangle.style.cssText = '';
        divRectangle.innerText = DIV_RECTANGLE_TXT;
    });

}()); // Main IIFE
