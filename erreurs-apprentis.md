Éviter de rechercher des éléments HTML avec `getElementById` à chaque appel
de la fonction `miseAJour`. 
Rechercher les éléments du formulaire 1x au démarrage du programme,
puis uniquement récupérer leur nouvelle valeur dans `miseAJour`.

---
Transformer en entier directement à la récupération.

---
Ne pas retrouner une alert !

Afficher `alert` et ensuite `return`.

```javascript
// PAS BIEN
return alert('Entrez un nombre !');

// BIEN
alert('Entrez un nombre !');
return;
```
---
Eviter si possible les `if...else`.

```javascript
// PAS BIEN
if (!hauteur) {
    alert('Entrez un nombre !'); 
} else if (hauteur < 0 || hauteur > 500 ) {
    alert('Entrez un entre 0 et 500 !');     
} else {
    alert('Bravo !')
}

// BIEN
if (!hauteur) {
    alert('Entrez un nombre !');
    return; // Sort de la fonction
}

if (hauteur < 0 || hauteur > 500 ) {
    alert('Entrez un nombre !');
    return; // Sort de la fonction    
}

alert('Bravo !');
```
---
querySelectorAll dans le formulaire
---
Décrire avec commentaire ce que fait l'événement, la fonction décrite dans l'événement.
---