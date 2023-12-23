# Digitalisation atelier des goûts

Le projet est en travaux 🚧, c'est un projet que je compte continuer par la suite donc il n'est pas terminé

Sur cette première version je dirais que j'en suis à peu près à 35-40%.

## Objectif du projet 🏠

L'atelier des goûts permet aux architects de chez [Ouvrage](https://www.ouvrage.eu/) de définir les goûts d'un client (
parfois même de leur faire découvrir).

L'idée derrière ce projet est de transcrire de manière digitale cet atelier des goûts. Cette première version est une version POC

## Requirements
> Node.js 18

> Clone the two parts of the project (**[frontend](https://github.com/Lapanxd/atelier-des-gouts)** et **[backend](https://github.com/Lapanxd/atelier-des-gouts-strapi)**)

## Installation
```bash
# install dependancies
npm install

# run the project (dev mode)
npm run dev
```

Go to [http://localhost:5173](http://localhost:5173)


### Test account:
- mail: `john.doe@ynov.com`
- password: `ynovAdmin@2023`

## Fonctionnalitées
### Todo
- [ ] Récupération des tags d'images de flickr
- [ ] Ajout des tags sur les images
- [ ] Toute la partie client du projet (choix d'image, ajout de commentaire)
- [ ] Récupération des sessions terminées
- [ ] Page de l'analyse des résultats d'une session
- [ ] Avoir la possibilité de se connecter à son propre compte Flickr

Ainsi que tous les todo qui sont dans le code

(Je sais que sur Webstorm il y a un onglet qui les répertorie tous 🙃 mais aucune idée pour VSCode)

### Doing 
- [ ] Création d'une session atelier des gouts (sauvegarde dans la base de données) <= soucis de communication avec strapi à régler

### Done
- [x] Utilisateurs sauvegardés en base de donnée
- [x] Authentification avec JWT
  - login / logout
- [x] Context pour l'authentification
- [x] Routing de l'application avec react-router-dom
- [x] Communiation avec l'API Flickr (via SDK)
- [x] Context pour le formulaire de création d'une session en plusieurs étapes 
  - *j'ai vu ça dans [cette vidéo](https://www.youtube.com/clip/UgkxNkvsHM0dT83UprATa1NswMqyPIRe6K-d) et je me suis dit que ça pouvait être intéressant à implémenter, mais du coup ça m'a dit "perdre" pas mal de temps*

## Améliorations futures (v2, v3, v18? 👀)

La semaine dernière j'ai eu une visio très enrichissante avec l'architecte de chez [Ouvrage](https://www.ouvrage.eu/) qui a imaginé l'atelier des goûts, pour justement avoir plus de détails sur la manière dont elle imaginerait cette version digitale. 

La conclusion et le message qu'elle a voulu me faire passer c'est: *Pourquoi vouloir refaire la même chose quand tu peux faire mieux ?*

Ce qu'elle imaginerait ne serait de ne pas seulement une "transcription" de manière digitale mais plutôt de créer une **expérience**
avec une inspiration de ce qui a été fait pour
le [test du choixpeau](https://www.wizardingworld.com/sorting-hat).

Donc Techniquement je pense que les évolutions se feront là dessus:
### Côté back
- Faire un vrai backend plutôt qu'utiliser un CMS headless (pas assez modelable)
- Algo qui calculerait/interpreterait les résultats en fonction de toutes les règles/paramètres qu'un architecte pourrait prendre en compte (gros travail là-dessus parce que transcrire sous forme de code toute la réflexion et l'interprétation que fait l'archi sur les "résultats" du client me parait être un travail colossal mais super intéressant)
- Peut être partir sur une db mongo pour pouvoir mettre des résultats "en vrac" et manipuler du json facilement

### Côté front

Pour pouvoir vraiment créer une expérience dont on pourrait se souvenir il faut une interface qui sort de l'ordinaire.

- N'étant pas fan de la liberté que nous laisse React sur l'organisation et configuration du projet, je pense plutôt partir sur NextJs qui va me permettre d'avoir un projet un peu plus cadré
- (soyons fous) Intégrer [Gsap](https://gsap.com/) pour créer une expérience unique

### Autre

- Avoir en amont une réelle réflexion sur UX de l'app