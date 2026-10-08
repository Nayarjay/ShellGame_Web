# ShellGame — site web

Site statique du studio ShellGame : vitrine des jeux et pages légales (politiques de confidentialité exigées par Google Play).

HTML et CSS purs, un seul petit script facultatif, aucune étape de build, aucun cookie, aucun traceur, rien n'est chargé depuis un serveur externe. Les fichiers fonctionnent tels quels sur GitHub Pages.

## Avant de publier : ce qu'il reste à compléter

Tout ce qui manque est affiché dans les pages sous forme d'un encadré jaune en pointillés. Pour tout retrouver, cherchez dans le projet :

| À chercher | À remplacer par | Où |
| --- | --- | --- |
| `USERNAME.github.io/ShellGame_Web` | l'adresse réelle du site (voir plus bas) | toutes les pages, `sitemap.xml`, `robots.txt` |
| `class="todo"` | le vrai contenu (description, points forts, langues, version, dates) | pages d'UFO Pickup, page du studio |

## Images

Images du studio, dans `assets/img/` :

- `logo.png` : logo ShellGame (fond transparent), utilisé dans l'en-tête, sur l'accueil et sur la page d'erreur.
- `favicon.png` et `apple-touch-icon.png` : icônes de l'onglet et de l'écran d'accueil, tirées du logo.
- `og-default.png` : image de partage par défaut, 1200 × 630.

Images d'UFO Pickup, dans `games/ufo-pickup/img/` :

- `icon.png` : icône du jeu, carrée (512 × 512).
- `feature.png` : bannière (1024 × 500), affichée entière sur l'accueil.
- `screenshot-1.jpg` à `screenshot-4.jpg` : captures d'écran en portrait.
- `og.png` : image de partage, 1200 × 630, tirée de la bannière. Obligatoirement en PNG ou JPG.

Pour remplacer une image, gardez le même nom de fichier. Si le format ou la taille change, adaptez `src`, `width` et `height` dans les pages qui l'utilisent (page du jeu en anglais et en français, cartes de l'accueil et de `/games/`).

## Publier sur GitHub Pages

1. Créez un compte sur [github.com](https://github.com) si besoin, puis un nouveau dépôt **public** (bouton **New**), par exemple `ShellGame_Web`.
2. Envoyez les fichiers de ce dossier dans le dépôt, sur la branche `main` (avec GitHub Desktop, ou en ligne de commande : `git push`).
3. Dans le dépôt : **Settings** → **Pages**.
4. Sous **Build and deployment**, choisissez **Source : Deploy from a branch**, puis **Branch : main** et le dossier **/ (root)**. Cliquez sur **Save**.
5. Patientez une à deux minutes. L'adresse du site s'affiche en haut de cette même page :
   `https://VOTRE-PSEUDO.github.io/ShellGame_Web/`
6. Remplacez partout `USERNAME.github.io/ShellGame_Web` par cette adresse (sans la barre finale), puis envoyez de nouveau les fichiers. Cette adresse sert uniquement aux images de partage, au plan du site et aux liens entre langues : la navigation, elle, utilise des chemins relatifs et marche déjà.

L'adresse à déclarer dans la Google Play Console pour UFO Pickup est :
`https://VOTRE-PSEUDO.github.io/ShellGame_Web/games/ufo-pickup/privacy/`

### Plus tard : nom de domaine

Dans **Settings** → **Pages** → **Custom domain**, saisissez le domaine. Le site fonctionne sans modification. Remplacez seulement l'adresse `…github.io/ShellGame_Web` par le nouveau domaine, comme à l'étape 6. Les anciennes adresses `github.io` redirigent automatiquement vers le domaine.

### Cas particuliers

- Le fichier `.nojekyll` demande à GitHub de publier les fichiers sans les transformer. Ne le supprimez pas.
- `robots.txt` n'est lu par les moteurs de recherche qu'à la racine d'un domaine : il ne prend effet qu'avec un nom de domaine (ou un dépôt nommé `VOTRE-PSEUDO.github.io`). Sans cela, il est simplement ignoré.
- `404.html` contient un petit script qui retrouve la racine du site. Si le dépôt s'appelle `VOTRE-PSEUDO.github.io` (site servi à la racine), ouvrez `404.html` et mettez `var SITE_ROOT = '/';`.

## Voir le site sur son ordinateur

Ouvrir `index.html` par double-clic affiche la page, mais les liens vers les dossiers ne s'ouvrent pas correctement. Lancez plutôt un petit serveur local depuis le dossier du site :

```bash
python -m http.server 8000
```

puis ouvrez `http://localhost:8000/`.

## Organisation des fichiers

```
index.html                       accueil (anglais)
games/index.html                 tous les jeux
games/ufo-pickup/index.html      page du jeu
games/ufo-pickup/privacy/        politique de confidentialité (anglais)
games/ufo-pickup/privacy/fr/     la même en français
games/ufo-pickup/img/            images du jeu
games/_template/                 dossier modèle pour un nouveau jeu
about/index.html                 le studio
contact/index.html               contact et support
404.html                         page d'erreur (anglais + français)
fr/                              version française : mêmes dossiers, mêmes noms
assets/css/site.css              l'unique feuille de style
assets/js/site.js                l'unique script (menu sur téléphone, apparition au défilement)
assets/img/                      logo, favicon, image de partage par défaut
sitemap.xml, robots.txt          référencement
```

**Les adresses ne doivent plus changer** une fois publiées (Google Play les enregistre) : ne renommez ni ne déplacez les dossiers existants.

Les politiques de confidentialité restent toujours sous `games/<jeu>/privacy/` (anglais) et `games/<jeu>/privacy/fr/` (français), y compris quand on vient du site français.

## Habillage

Toutes les couleurs, tailles de texte, espacements et arrondis sont des variables définies en haut de `assets/css/site.css`. Modifier une valeur à cet endroit la change sur tout le site. Le thème sombre redéfinit seulement quelques-unes de ces variables, juste en dessous.

Palette ShellGame :

| Couleur | Code | Usage |
| --- | --- | --- |
| Corail | `#ff6b4a` | couleur principale, boutons |
| Soleil | `#ffc93c` | touches de lumière, état « Bientôt » |
| Menthe | `#2ec4b6` | état « Disponible » |
| Encre | `#1b1f3b` | textes, pied de page |
| Crème | `#fff8ee` | fond |

Chaque jeu a ses propres couleurs, données par un attribut `style` sur sa page (balise `<main>`) et sur ses cartes :

```html
style="--game-bg:#1b1e4b; --game-accent:#7b4dff; --game-pop:#ffd23f; --game-ink:#ffffff"
```

- `--game-bg` : fond (bleu nuit pour UFO Pickup)
- `--game-accent` : couleur d'accent (violet)
- `--game-pop` : touches vives et bouton Google Play (jaune)
- `--game-ink` : couleur du texte posé sur le fond

## Ajouter un jeu

Dans l'exemple, le jeu s'appelle « Mon Jeu » et son dossier `mon-jeu` (minuscules, sans accent, tirets à la place des espaces). Ce nom de dossier fera partie de l'adresse définitive.

1. **Copier les modèles**
   - `games/_template/` → `games/mon-jeu/`
   - `fr/games/_template/` → `fr/games/mon-jeu/`
2. **Remplacer les textes** dans les quatre pages copiées (`games/mon-jeu/index.html`, `games/mon-jeu/privacy/index.html`, `games/mon-jeu/privacy/fr/index.html`, `fr/games/mon-jeu/index.html`) :
   - `_template` → `mon-jeu` (partout)
   - `GAME NAME` → `Mon Jeu`
   - `PACKAGE_NAME` → l'identifiant Google Play du jeu
   - chaque texte entre crochets (l'e-mail de contact du studio est déjà en place), et les deux phrases de description en majuscules dans l'en-tête de la page (`<meta name="description">` et `og:description`)
   - les couleurs dans l'attribut `style` de `<main>`
   - supprimez la ligne `<meta name="robots" content="noindex">` et le commentaire « TEMPLATE » en haut de page
3. **Remplacer les images** dans `games/mon-jeu/img/` : `icon`, `feature`, `screenshot-1`…, `og.png`. Si vos fichiers sont en `.png` ou `.jpg`, changez l'extension dans les `src`, et mettez la vraie taille dans `width` et `height`. Pour plus ou moins de captures, ajoutez ou retirez des lignes `<li>` dans la galerie.
4. **Coller la politique de confidentialité** entre les repères `POLICY TEXT: START` et `POLICY TEXT: END` des deux pages `privacy`, et mettre à jour le sommaire et la date.
5. **Ajouter la carte du jeu** sur les quatre pages qui affichent la grille : `index.html`, `games/index.html`, `fr/index.html`, `fr/games/index.html`. Copiez un bloc `<li>…</li>` existant de la grille (repère `GAME GRID`), placez-le en premier, puis changez les couleurs, l'image, le lien, le nom et le genre. Pour un jeu pas encore sorti, utilisez `class="badge badge--soon"` et le texte « Coming soon » / « Bientôt ».
6. **Ajouter le lien vers sa politique** :
   - dans le pied de page de **toutes** les pages (repère `One line per game`, sous « Privacy policies » / « Politiques de confidentialité ») ;
   - dans le bloc d'infos pratiques de l'accueil et sur la page contact (même repère).
   Une recherche-remplacement sur la ligne du jeu précédent permet de le faire en une fois.
7. **Choisir le jeu à la une** : sur `index.html` et `fr/index.html`, dans le bloc repéré `Featured game`, changez les couleurs du `style`, l'image, le nom, la phrase, le lien Google Play et le lien « En savoir plus ».
8. **Ajouter les nouvelles adresses** dans `sitemap.xml` (page du jeu et politique, en anglais et en français).

Le dossier `_template` est publié avec le reste, mais ses pages demandent aux moteurs de recherche de ne pas les référencer et aucun lien n'y mène.

## Afficher les réseaux sociaux

Le bloc « Suivre le studio » existe déjà sur l'accueil et sur la page contact (anglais et français), mais il est masqué. Cherchez `FOLLOW THE STUDIO`, retirez le mot `hidden` de la balise juste en dessous, puis renseignez les liens.

## Ajouter une langue

Exemple pour l'espagnol (`es`) :

1. Copiez le dossier `fr/` en `es/` et traduisez les pages. Changez `<html lang="fr">` en `<html lang="es">`.
2. Dans chaque page de chaque langue, ajoutez une ligne au sélecteur de langue de l'en-tête (`<ul class="lang-switch">`, avec un petit drapeau `<svg class="flag">` copié puis adapté) et une ligne `<link rel="alternate" hreflang="es" …>` dans l'en-tête du document.
3. Pour les politiques de confidentialité, créez `games/<jeu>/privacy/es/index.html` à partir de la version française et ajoutez un lien dans le bouton de bascule (`<nav class="lang-toggle">`).
4. Ajoutez les nouvelles adresses dans `sitemap.xml`.
