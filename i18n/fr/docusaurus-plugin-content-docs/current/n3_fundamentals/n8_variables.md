---
sidebar_position: 8
slug: /variables
---

# Variables


## Qu'est-ce qu'une variable?

Une variable est un emplacement nommé en mémoire qui peut être utilisé pour stocker une valeur. Les variables peuvent être utilisées pour stocker n'importe quel type de données, y compris les nombres, les chaînes, les objets, et les tableaux.

## Définition des variables

Les variables sont définies en utilisant le mot-clé `var`. La syntaxe pour définir une variable est la suivante:

```jsx
var <name> = <value>;
```

Par exemple, le code suivant définit une variable nommée `x` et la définit à la valeur 3 :
```jsx
var x = 3;
```

## Réassignation des variables
La valeur d'une variable peut être modifiée en la réaffectant. Pour réassigner une variable, utilisez simplement le mot-clé var à nouveau, suivi de la nouvelle valeur. Par exemple, le code suivant réassigne la valeur de la variable x à 4:
```jsx
var x = 3;
x = 4;
```

## Suppression des variables
Les variables peuvent être supprimées en utilisant le mot clé de suppression. La syntaxe pour supprimer une variable est la suivante:
```jsx
supprimer <name>;
```

Par exemple, le code suivant supprime la variable `x`:

```jsx
supprimer x;
```

## Erreurs courantes

Il y a quelques erreurs courantes qui peuvent être commises lorsque vous travaillez avec des variables. Une erreur courante est d'oublier de déclarer une variable. Si une variable n'est pas déclarée, elle ne sera pas accessible dans le programme. Une autre erreur courante est d'assigner une valeur à une variable qui n'est pas le bon type. Par exemple, le code suivant va générer une erreur parce que la valeur "3" est une chaîne, mais la variable x est un entier :

```jsx
var x = "3";
```

Enfin, il est important de se rappeler que les variables ont une portée. Cela signifie qu'une variable ne peut être accédée qu'à partir de la portée où elle est déclarée. Si vous essayez d'accéder à une variable en dehors de son champ d'application, vous obtiendrez une erreur.