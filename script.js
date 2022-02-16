/**
 * @author      Steve Fallet <steve.fallet@divtec.ch>
 * @version     0.1
 * @since       2021-03-19
 *
 * http://usejsdoc.org/
 */

(function main() {
    "use strict"; // Demande un interprétation stricte du code

    const rectangleDeBase = {
        hauteur: '111',
        largeur: '111',
        couleurFond: 'yellow',
        couleurTexte: 'black',
        gras: false,
        souligne: false,
        texte: 'Votre texte'
    }

    /* Création d'une nouvelle application Vue sur l'élément HTML #rect-dyn-app */
    const RectDynApp = new Vue({
        name: 'RectDynApp',
        el: '#rect-dyn-app', // élément HTML lié à l'application Vue
        // objet représentant les données de l'application Vue
        data: {
            /* Pour lier un donnée à une élément deformulaire il faut
            ajouter l'attribut (v-model) à l'input :
            <input v-model="hauteur" ... />
            */
            rectangle: { ...rectangleDeBase } // Copie les propriétés et valeurs
        },
        methods: {
            validation() {
                let hauteur = parseInt(this.rectangle.hauteur);
                let largeur = parseInt(this.rectangle.largeur);

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

                return true;
            },
            modifierRectangle: function () {
                // Si saisie invalide on arrête
                if ( !this.validation() ) {
                    return;
                }

                // Largeur
                this.$refs.rectangle.style.width = this.rectangle.largeur + 'px';
                // Hauteur
                this.$refs.rectangle.style.height = this.rectangle.hauteur + 'px';
                // Couleur de fond
                this.$refs.rectangle.style.background = this.rectangle.couleurFond;
                // Couleur du texte
                this.$refs.rectangle.style.color = this.rectangle.couleurTexte;
                // Si gras est coché
                this.$refs.rectangle.style.fontWeight = this.rectangle.gras
                  ? "bold"
                  : "normal";
                // Si souligné est coché
                this.$refs.rectangle.style.textDecoration = this.rectangle.souligne
                  ? "underline"
                  : "none";
                // Texte
                this.$refs.rectangle.innerHTML = this.rectangle.texte;
            },
            reset: function () {
                this.rectangle = { ...rectangleDeBase };
                this.modifierRectangle();
            }

        }
    })
}()); // Main IIFE
