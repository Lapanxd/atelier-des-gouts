# Digitalisation atelier des goûts

## Objectif du projet 🏠

L'atelier des goûts permet aux architects de chez [Ouvrage](https://www.ouvrage.eu/) de définir les goûts d'un client (
parfois même de leur faire découvrir).

L'idée derrière ce projet est de transcrire de manière digitale cet atelier des goûts

## Installation

```bash
@todo
```

## Améliorations futures (v2, v3, v18? 👀)

### Réelle digitalisation de l'atelier

L'idée serait de ne pas seulement faire une "transcription" de manière digitale mais plutôt de créer une **expérience**
avec une petite inspiration de ce qui a été fait pour
le [test du choixpeau](https://www.wizardingworld.com/sorting-hat).

### Côté back

- Faire un vrai backend plutôt qu'utiliser un CMS headless (pas assez modelable)
- Algo qui calculerait/interpreterait les résultats en fonction de toutes les règles/paramètres qu'un architect
  pourrait prendre en compte (gros travail là dessus)
- Peut être partir sur une db mongo pour pouvoir mettre des résultats "en vrac" et manipuler du json facilement

### Côté front

Pour pouvoir vraiment créer une expérience dont on pourrait se souvenir il faut une interface qui sort de l'ordinaire.

- Pourquoi pas partir sur Nextjs (voir si il y a réellement un intérêt)
- (soyons fous) Intégrer [Three.js](https://threejs.org/) et/ou [Gsap](https://gsap.com/) pour créer une expérience
  unique