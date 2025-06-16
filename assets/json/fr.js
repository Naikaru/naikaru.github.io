var jsonDataFr = {
    /* Navigation */
    "navigation_portfolio": "Portfolio",
    "navigation_about": "À Propos",
    "navigation_contact": "Me Contacter",

    /* About */
    "about_title": "À Propos",
    "about_text_left": "Près de 5 ans après avoir commencé en tant que Software Engineer, j'ai décidé de transférer les compétences acquises dans un environnement que j'aime, le jeu vidéo. Faire face à de nouveaux problèmes et débattre des différentes manières de les résoudre est ce que j'apprécie le plus. Bien que similaire sous plein d'aspects, faire des jeux vidéo m'a demandé d'apprendre de nombreuses nouvelles compétences et est devenu mon nouvel objectif de carrière !",
    "about_text_right": "J'admire profondemment ces artistes et créateurs qui m'ont fait voyager des milliers d'heures, ressentir plein d'émotions, et même créer des amitiés. J'aspire maitnenant à le devenir moi-même, c'est pourquoi j'ai commencé à développer mes propres projets en utilisant Unity ou GameMaker. Faire des jeu, c'est difficile, ça demande énormément de temps, d'orchestrer des centaines d'éléments ensemble, mais c'est avant tout super intéressant !",
    "about_cv": "Obtenez mon CV !",

    /* Modals Common */
    "modal_about": "À Propos",
    "modal_button_close":  "Fermer",

    /* Spell System Modal */
    "spell_system_subtitle": "<i>Inspiré par Zelda<br />Tears of the Kingdom</i>",
    "spell_system_about_description_top": "Ce mini-projet a été initié pour apprendre à développer des interactions plus complexes et avancées entre le joueur et son environnement. Nous avons tenté de reproduire (d'une manière simplifiée) certains des sorts de Zelda ToTK. Cela nous a permis de développer les points suivants :",
    "spell_system_about_task_1": "<i>Reverse engineer</i> 4 compétences du jeu : <i>Ascend</i>, <i>Fuse</i>, <i>Recall</i> and <i>Ultrahand</i>;",
    "spell_system_about_task_2": "Construire un code <b>modulable</b> et <b>évolutif</b>, par la définition d'une classe abstraite <i>Spell</i> qui utilise les <i>Scriptable Objects</i> de <i>Unity</i> et ajoutant un <i>Spell Controller</i>;",
    "spell_system_about_task_3": "Ajouter une <i>UI</i> basique pour la sélection des compétences;",
    "spell_system_about_task_4": "Développer et ajouter des effets visuels pour renforcer l'<b>immersion</b> du joueur, par l'utilisation des <i>Graph System for Particles</i> de Unity, et explorer les <i>shaders</i> avec le <i>Graph System for Shaders</i>, pour créer des <i>arcs électriques, traînées et effets de contour</i>;",
    "spell_system_about_task_5": "Enfin, construire une scène pour mettre en valeur chacun de ces éléments.",
    "spell_system_about_description_bot": "Pour en apprendre plus sur les choix d'implémentation, vous pouvez vous référez au <a class='' href='https://github.com/Naikaru/GameDev-SpellSystem' target='_blank'>Github</a> du projet.",
    "spell_system_ascend": "Cette compétence permet au joueur de créer un portal lui permettant de traverser les surfaces. Plusieurs éléments et contraintes ont été implémentées pour ce sort, tels qu'une animation à travers le portail, des <i>raycast</i> pour déterminer le début et l'arrivée de la surface à traverser, ainsi que des effets visuels.",
    "spell_system_fuse_1": "Permet au joueur d'agréger d'autres entités à sa propre <i>arme</i> et ainsi créer de nouveaux comportements et interactions avec son environnement.",
    "spell_system_fuse_2": "Dans cette démo, une torche taggée de l'élément <i>Feu</i> est agrégée à notre arme pour activer le méchanisme de l'escalier permettant d'atteindre le niveau suivant.",
    "spell_system_recall_1": "Les objets <i>Recallable</i> enregistrent leur position à un certain frame rate. Le sort <i>recall</i> arrête le temps et permet ensuite au joueur de rembobiner la position des objets ciblés.",
    "spell_system_recall_2": "Différents modes <i>(easing functions)</i> ont été ajoutés pour faire revenir les objets à leurs positions précédentes.",
    "spell_system_ultrahand_1": "Enfin, le sort <i>ultrahand</i> aide le joueur à créer de nouvelles interactions et structures physiques en liant les objets ensemble. Dans cet exemple nous construisons une platforme permettant au joueur d'utiliser la tyrolienne.", 
    "spell_system_ultrahand_2": "Ce sort est de loin le plus complexe à appréhender. De nombreuses améliorations peuvent être réalisées, telles qu'offrir la possibilité de séparer les objets précédemment liés, offrir un meilleur contrôle de la caméra lors de l'activation du sort, des directions différentes pour lier les objets selon la normale des faces plutôt que du point de contact du raycast, etc.",


    /* Open World Modal */
    "open_world_description": "Un projet d'Open World introduire un ensemble de nouvelles fonctionnalités à développer et problématiques à comprendre et résoudre ! Voici les tâches réalisées dans ce projet :",
    "open_world_task_1": "Ajouté une <b>UI</b> pour les différents <b>menus</b> et notre <b>inventaire</b>;",
    "open_world_task_2": "Architecturé une <b>State Machine</b> pour les <i>ennemies</i>, en utilisant les <i>Scriptable Objects</i> permettant une grande <b>flexibilité et maintenabilité</b> à notre code en respectant les <i>principes SOLID</i>;",
    "open_world_task_3": "Programmé un <b>Player Controller</b> pour tous ses comportements et interactions avec l'environnement (les inputs, entités, objets, events, ...);",
    "open_world_task_4": "Plongé dans l'<b>Animator</b> de Unity pour contrôler les animations de notre joueur et de nos enemies selon leurs état et actions;",
    "open_world_task_5": "Ajouté des <i>PNJs</i> et un <b>système de quêtes et de dialogues</b> basé sur les <i>Scriptable Objects</i> de Unity pour plus de modularité;",
    "open_world_task_6": "Préparé de simples <b>cinématiques</b> pour introduire les nouvelles zones ou objectifs à atteindre par le joueur;",
    "open_world_task_7": "Manipulé quelques solutions d'optimisations de Unity comme des <i>chargements partiels de scène</i> et de l'<i>occlusion culling</i>;",
    "open_world_task_8": "Ajouté des effets visuels et sonores, adapté le level design, mis en place un système de sauvegarde, permis la customisation du joueur...",
    "open_world_github": "Code source disponible sur <a href='https://github.com/Naikaru?tab=repositories' target='_blank'>Github</a>.",
    "open_world_ui_desccription": "A few screeshots to highlight the menus UI that are not shown in the project demo above.",

    /* Tower Defense Modal */
    "tower_defense_description": "Un jeu de <i>Tower Defense</i> très classique, pour travailler sur la gestion des waves, des évènements, mais surtout une meilleure architecture orientée objet.",
    "tower_defense_task_1": "De simples <b>système d'UI</b> pour construire, améliorer et vendre ses tourelles;",
    "tower_defense_task_2": "Un <b>gold manager</b> qui écoute les actions du joueur et les morts des monstres;",
    "tower_defense_task_3": "<b>Un <i>path finding</i> basique pour les IA</b> des ennemis pour atteindre la Tour;",
    "tower_defense_task_4": "<b>Système d'apparition par vague</b>, avec des caractéristiques ajustables;",
    "tower_defense_task_5": "Deux types de tourelles : certaines lançant des <i><b>projectiles</b> d'autre brûlant les ennemis à l'aide d'un <b>lance-flamme</b>;",
    "tower_defense_task_6": "Une forte emphase sur l'<b>implémentation de design patterns</b> (Factories, Builder, Observers, Object Pooling, ...);",
    "tower_defense_task_7": "Développer notre propre outil de <i>construction de niveau</i> pour accélérer le design de nos niveau;",
    "tower_defense_github": "Code source disponible sur <a href='https://github.com/Naikaru?tab=repositories' target='_blank'>Github</a>.",

    /* Survival Horror Modal */
    "survival_horror_description_1": "Grandement inspiré de mes souvenirs du mode Zombie de <i>Call of Duty - Black Ops</i> et plus spécifiquement de la map <i>Kino Der Toten</i>, mais en 2D !",
    "survival_horror_description_2": "Ce mini-projet m'a aidé à améliorer considérablement mes compétences pour la programmation 2D avec GameMaker Studio 2 :",
    "survival_horror_task_1": "Designé une map 2D et <b>tile-based collisions</b>;",
    "survival_horror_task_2": "Ajouté une IA basique pour nos ennemies de poursuite du joueur en utilisant <i>GameMaker</i> <b>path finding system</b>;",
    "survival_horror_task_3": "Implémenté une <b>State Machine</b> complète pour le joueur;",
    "survival_horror_task_4": "Codé un <b>objet <i>Gun</i> générique avec divers modes de tirs</b>, permettant le contrôle de nombreuses propriétés <i>(knockback, firing cooldown, projectiles number, dispersion, range and speed, automatic shooting, ...)</i>;",
    "survival_horror_task_5": "Mis en place un <b>système d'apparition par vague</b> des ennemis, reposant sur les spawns débloqués et un brin d'aléatoire pour rendre chaque partie unique !",
    "survival_horror_task_6": "Enfin, ajouté plein d'effets visuels et sonores d'artistes talentueux;",
    "survival_horror_github": "Code source disponible sur <a href='https://github.com/Naikaru?tab=repositories' target='_blank'>Github</a>.",

    /* Top Down RPG Modal */
    "topdown_rpg_description": "Ce premier Top-Down RPG m'a appris à construire les comportements et interactions de base, et pourtant essentiels à l'ensemble des jeux. Nous avons : ",
    "topdown_rpg_task_1": "Programmé des <b>Machines à État<b> standards pour notre joueur et nos ennemis.",
    "topdown_rpg_task_2": "Construit un système de <b>détection de collision dans une TileMap<b>;",
    "topdown_rpg_task_3": "Ajouté plusieurs équipements et interactions (un arc, une hâche, une pioche pour tirer des flèches, couper du bois, casser des rochers);",
    "topdown_rpg_task_4": "Mis en place un <b>système de quêtes et dialogues</b>;",
    "topdown_rpg_task_5": "Affiché des informations pour nos équipements, ressources récoltés et la vitalité de notre personnage;",
    "topdown_rpg_github": "Code source disponible sur <a href='https://github.com/Naikaru?tab=repositories' target='_blank'>Github</a>.",

    /* Footer */
    "footer_contact": "Me Contacter"
}