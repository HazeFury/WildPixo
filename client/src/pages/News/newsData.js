const newsData = [
  {
    id: 1,
    creation_date: "20/05/2024",
    title: "Devlog #1",
    intro_text:
      "Cette semaine, nous avons travaillé sur les mécanismes de base du jeu et sur l'implémentation du moteur physique.",
    content: `Cette semaine, l'équipe de développement s'est concentrée sur l'intégration des mécanismes de base du jeu. Nous avons commencé par implémenter le moteur physique qui gère les interactions entre les objets du jeu. Les premiers tests sont prometteurs et montrent que notre approche permet des mouvements fluides et réalistes. En parallèle, nous avons commencé à créer les premières ébauches des niveaux de jeu, en nous assurant qu'ils soient à la fois intéressants et équilibrés pour le joueur.`,
    author: "HazeFury",
  },
  {
    id: 2,
    creation_date: "27/05/2024",
    title: "Devlog #2",
    intro_text:
      "Nous avons fait des progrès significatifs sur le système de combat et ajouté de nouvelles animations.",
    content: `Cette semaine, notre focus principal a été le système de combat. Nous avons ajouté plusieurs nouvelles fonctionnalités, y compris des combos et des attaques spéciales, qui rendent les combats beaucoup plus dynamiques et excitants. De plus, notre équipe d'animation a créé de nouvelles animations pour les personnages, ce qui ajoute une couche supplémentaire de réalisme et de fluidité aux actions de combat.`,
    author: "HazeFury",
  },
  {
    id: 3,
    creation_date: "03/06/2024",
    title: "Devlog #3",
    intro_text:
      "L'équipe a travaillé dur sur les environnements du jeu et a commencé à implémenter les effets visuels.",
    content: `Nous avons consacré cette semaine à l'amélioration des environnements du jeu. Nos artistes ont travaillé sur des textures et des modèles détaillés pour rendre chaque niveau unique et immersif. Parallèlement, l'équipe technique a commencé à implémenter des effets visuels tels que les éclairs et les ombres dynamiques, qui ajoutent une profondeur visuelle au jeu. Nous avons également optimisé le moteur graphique pour assurer une performance fluide sur diverses configurations matérielles.`,
    author: "HazeFury",
  },
  {
    id: 4,
    creation_date: "10/06/2024",
    title: "Devlog #4",
    intro_text:
      "Nous avons amélioré l'intelligence artificielle des ennemis et ajouté de nouvelles fonctionnalités de gameplay.",
    content: `Cette semaine, l'accent a été mis sur l'amélioration de l'intelligence artificielle (IA) des ennemis. Les ennemis sont maintenant capables de réagir de manière plus stratégique aux actions du joueur, ce qui rend les combats plus engageants et moins prévisibles. De plus, nous avons ajouté plusieurs nouvelles fonctionnalités de gameplay, telles que des quêtes secondaires et des mini-jeux, qui offrent plus de diversité et de profondeur à l'expérience de jeu.`,
    author: "HazeFury",
  },
  {
    id: 5,
    creation_date: "17/06/2024",
    title: "Devlog #5",
    intro_text:
      "Nous avons finalisé le système de progression des personnages et effectué des tests de jeu approfondis.",
    content: `Cette semaine marque une étape importante avec la finalisation du système de progression des personnages. Les joueurs peuvent maintenant gagner de l'expérience, débloquer de nouvelles compétences et améliorer leurs attributs au fil du jeu. Nous avons également commencé une série de tests de jeu approfondis pour identifier et corriger les bugs, améliorer l'équilibrage du gameplay et assurer une expérience utilisateur optimale. Les premiers retours sont très positifs et nous sommes excités par les progrès réalisés.`,
    author: "HazeFury",
  },
  {
    id: 6,
    creation_date: "24/06/2024",
    title: "Devlog #6",
    intro_text:
      "Cette semaine, nous avons implémenté le système de météo dynamique et travaillé sur l'interface utilisateur.",
    content: `Nous avons consacré cette semaine à l'implémentation d'un système de météo dynamique. Désormais, les conditions météorologiques dans le jeu changeront en temps réel, passant du soleil à la pluie, et même à des tempêtes de neige. Cela ajoute une nouvelle dimension d'immersion pour les joueurs. En parallèle, notre équipe de design a travaillé sur l'interface utilisateur (UI), en rendant les menus plus intuitifs et visuellement attrayants.`,
    author: "HazeFury",
  },
  {
    id: 7,
    creation_date: "01/07/2024",
    title: "Devlog #7",
    intro_text:
      "Nous avons ajouté de nouvelles quêtes et amélioré la narration pour enrichir l'expérience du joueur.",
    content: `Cette semaine a été marquée par l'ajout de nouvelles quêtes dans le jeu. Ces quêtes apportent plus de variété et de défis pour les joueurs. De plus, nous avons travaillé sur l'amélioration de la narration, en ajoutant des dialogues plus riches et des cinématiques qui plongent les joueurs plus profondément dans l'histoire. L'objectif est de créer une expérience narrative captivante et immersive.`,
    author: "HazeFury",
  },
  {
    id: 8,
    creation_date: "08/07/2024",
    title: "Devlog #8",
    intro_text:
      "L'équipe a travaillé sur l'optimisation des performances et la réduction des temps de chargement.",
    content: `Cette semaine, notre priorité a été l'optimisation des performances du jeu. Nous avons travaillé sur la réduction des temps de chargement et l'amélioration de la fluidité du jeu sur différentes plateformes. Grâce à des techniques de compression avancées et des optimisations du code, nous avons réussi à rendre le jeu plus réactif et agréable à jouer. Ces améliorations devraient permettre à un plus grand nombre de joueurs de profiter pleinement de notre jeu, même sur des configurations matérielles moins puissantes.`,
    author: "HazeFury",
  },
  {
    id: 9,
    creation_date: "15/07/2024",
    title: "Devlog #9",
    intro_text:
      "Nous avons travaillé sur la conception sonore et ajouté de nouvelles musiques et effets sonores.",
    content: `Cette semaine, notre équipe audio a été très occupée. Nous avons ajouté de nouvelles musiques de fond qui accompagnent les différentes ambiances du jeu, ainsi que des effets sonores immersifs pour les interactions et les combats. Nous avons collaboré avec des compositeurs talentueux pour créer une bande sonore qui s'adapte parfaitement à l'atmosphère du jeu. Les tests initiaux montrent que ces ajouts enrichissent considérablement l'expérience globale du joueur.`,
    author: "HazeFury",
  },
  {
    id: 10,
    creation_date: "22/07/2024",
    title: "Devlog #10",
    intro_text:
      "Cette semaine, nous avons travaillé sur le multijoueur et les fonctionnalités sociales.",
    content: `Nous avons fait d'énormes progrès cette semaine en intégrant les fonctionnalités multijoueur. Les joueurs peuvent désormais se connecter, former des équipes et jouer ensemble en temps réel. Nous avons également ajouté des fonctionnalités sociales, telles que la possibilité de créer des guildes, de discuter avec d'autres joueurs et de partager des contenus. Ces ajouts visent à renforcer la communauté et à offrir une expérience de jeu plus interactive et connectée.`,
    author: "HazeFury",
  },
];

export default newsData;
