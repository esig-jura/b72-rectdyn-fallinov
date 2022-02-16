# Erreurs courantes 2021

## HTML
* Manque `<form>` avec ses attributs `action` et `method`
* Manque l'attribut `method` et `action`
* Manque `<ul>` et `<li>` pour structurer le formulaire
* Ajouter valeur par défaut
* Manque attribut `name`.
* valeur des attribut en `kebacase` pas `camelcase` : `couleurFond -> couleur-fond`
* Pas de caractères spéciaux dans les attributs `name`, `id`, `for`
* Valeur inutile pour les checkbox
* Utiliser les attributs `rows` et `cols` pour donner une taille initiale
* Pour les groupes de boutons radio et groupes de cases à cocher toujours utiliser un `<fieldset>` et une `<legend>`.
* Changer les valeurs des `<option>` par des valeurs CSS : `pink`, `#0000FF`
* **Pas de majuscules** dans les valeurs des attributs HTML !
* Utiliser un `name` différent pour les cases à cocher ou ajouter
  des`[]` à la fin du nom sans espace. `name="music" => name="music[]"` 
* Toujours mettre les `""` autours des valeurs des attributs.
* Supprimer espaces inutiles `value = "100"` => `value="100"`
* Toujours trier les `<option>` par ordre alphabétique.
* Toujours fournir une valeur, `value` aux `<option>`
* Ajouter attribut `selected` à la valeur sélectionnée par défaut !
* Supprimer les retours à la ligne, tabulations et espaces au début et fin de la valeur par défaut, car imprimés dans la `<textarea>`.
* Pas oublier de **cocher** par défaut le **radio noir**

## JavaScript

* querySelectorAll dans le formulaire
* Décrire avec commentaire ce que fait l'événement, la fonction décrite dans l'événement.
* Si possible, récupérer, rechercher, qu'une seule fois les éléments
  HTML en les plaçant dans des **constantes**
  et ce **en dehors de la fonction `miseAjour()`**.
* Transformer les chaines en entier avec `parseInt()`
* Tester si la hauteur et la largeur sont des nombres avec `isNaN(variable)`.
* Ajouter "px" a la valeur CSS de hauteur et largeur.
* Récupérer la valeur du groupe de boutons raidios avec
  `document.querySelector('[name="couleur"]:checked')`
* Utiliser la propriété `.checked` pour savoir si une case est cochée.
* Utiliser les ternaires pour les cases à cocher :
  https://divtec.gitbook.io/133a/javascript/introduction/conditions#loperateur-ternaire-conditionnel
* Récupérer tout le CSS d'un élément avec `style.cssText`.
* Écouter l'envoi du formulaire et non le clic du bouton.
  https://divtec.gitbook.io/133a/javascript/formulaires/capter-lenvoi-du-formulaire#evenement-submit
* Faire le querySelector sur le formulair
* Mettre en **camelcase** les constantes qui représentent des objets. 
* Appel de fonction
  - Simplifier en passant `miseAJour` en paramètre du `addEventListener`
  - passer `event` à `miseAJour` lors de sa déclaration `function miseAJour(event) {`
  - ajouter `event.preventDefault();` à `miseAJour`
* Réinitialiser tous les style d'un élément HTML : `divRectangle.style.cssText = '';`
* Utiliser `backgroundColor` si vous devez changer uniquement la couleur.
* Utiliser les tests ternaires
```javascript
//Si souligné est coché -- affectation avec condition ternaire
divRectangle.style.textDecoration = chkSouligne.checked
    ? "underline" //Si condition vrai
    : "none"; //Si condition fausse
```
