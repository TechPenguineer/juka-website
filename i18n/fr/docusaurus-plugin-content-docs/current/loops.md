---
sidebar_position: 5
---

# Boucles

## Boucle Tant que

Dans Juka, alors que la boucle est définie de la même manière que la plupart des autres langages de programmation.

Un exemple simple de la boucle «Tant »:

```jsx
int x = 0;
tant que(x < 2) {
    x = + 1 x;
}
```

Dans cet exemple, x est défini à 0. L'instruction **tandis que** vérifie et voit que x doit être inférieur à 2 et retourne true. La boucle **tant que** s'exécute. La valeur de x est augmentée de 1. C'est un moyen de Juka d'augmenter les valeurs. La boucle **tandis que** ne s'exécute que deux fois.

## Pause
Vous êtes autorisé à exécuter une boucle infinie. Cependant, vous devriez avoir une instruction break pour quitter la boucle

Un exemple simple de pause :

```jsx
int x = 0;
tant que( 1 ){
    x = + 1 x;
    if ( x > 2) {
        break;
    }
}
```

Bien que l'utilisation de **break** n'est pas recommandée, elle fournit un moyen pratique et facile de **casser** une boucle **while**.