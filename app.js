const activities = [
  {
    title: "Exprime ton émotion",
    category: "Socio-émotionnel",
    group: ["solo", "small", "class"],
    context: ["table", "calm", "transition"],
    duration: "short",
    goals: ["emotion", "attention", "language"],
    source: "Social-Emotional Skills",
    summary: "Chaque couleur correspond à une émotion. Les participants montrent l’émotion avec le visage, le corps ou une phrase.",
    materials: ["Six briques par participant", "Une liste d’émotions simples"],
    steps: [
      "Associe une émotion à chaque couleur.",
      "Montre une brique sans parler.",
      "Les participants miment l’émotion ou disent une phrase qui correspond.",
      "Change les associations après quelques tours."
    ],
    variation: "Demande aux participants de construire une petite scène qui représente l’émotion.",
    question: "Qu’est-ce qui peut t’aider quand tu ressens cette émotion ?"
  },
  {
    title: "Chenille coopérative",
    category: "Socio-émotionnel",
    group: ["small", "class"],
    context: ["floor", "table"],
    duration: "medium",
    goals: ["cooperation", "language", "movement"],
    source: "Social-Emotional Skills",
    summary: "Un groupe construit une longue chenille et invente ensemble sa façon de se déplacer.",
    materials: ["Un lot de six briques par participant"],
    steps: [
      "Forme des groupes de 4 à 8 participants.",
      "Chaque groupe construit une chenille commune.",
      "Le groupe décide comment la chenille avance, tourne ou s’arrête.",
      "Chaque équipe présente sa chenille aux autres."
    ],
    variation: "Ajoute une contrainte: chacun ne peut poser qu’une brique à la fois.",
    question: "Comment avez-vous décidé ensemble de la forme de votre chenille ?"
  },
  {
    title: "Traverse la rivière",
    category: "Socio-émotionnel",
    group: ["duo", "small"],
    context: ["floor", "outside"],
    duration: "medium",
    goals: ["cooperation", "movement", "attention"],
    source: "Social-Emotional Skills",
    summary: "Les briques deviennent des pierres pour traverser une rivière imaginaire sans tomber.",
    materials: ["Six briques par équipe", "Un espace au sol"],
    steps: [
      "Délimite deux rives.",
      "Les participants placent les briques comme des pierres.",
      "Ils traversent en respectant l’ordre décidé.",
      "Ils recommencent avec moins de briques ou avec un partenaire à guider."
    ],
    variation: "Un participant ferme les yeux et son partenaire le guide par la voix.",
    question: "Qu’est-ce qui rend l’aide d’un partenaire facile à comprendre ?"
  },
  {
    title: "Indicateur d’humeur",
    category: "Socio-émotionnel",
    group: ["solo", "class"],
    context: ["calm", "transition", "table"],
    duration: "short",
    goals: ["emotion", "language"],
    source: "Social-Emotional Skills",
    summary: "Chaque participant choisit une brique pour dire comment il se sent au début ou à la fin d’une activité.",
    materials: ["Six briques par participant"],
    steps: [
      "Donne une signification émotionnelle aux couleurs.",
      "Chaque participant choisit une brique discrètement.",
      "Ceux qui veulent expliquent leur choix.",
      "Termine par une stratégie pour revenir au calme ou garder l’énergie."
    ],
    variation: "Fais un avant/après: une brique au début, une brique à la fin.",
    question: "Ton choix a-t-il changé pendant l’activité ?"
  },
  {
    title: "Bloqué sur rouge",
    category: "Physique",
    group: ["class"],
    context: ["outside"],
    duration: "medium",
    goals: ["movement", "attention", "cooperation"],
    source: "Physical Skills",
    summary: "Un jeu de poursuite: quand un participant est touché, il s’immobilise avec sa brique rouge jusqu’à être libéré.",
    materials: ["Une brique rouge par participant", "Un espace sécurisé"],
    steps: [
      "Choisis un attrapeur.",
      "Les autres courent avec leur brique rouge.",
      "Quand un participant est touché, il s’arrête et pose la brique sur sa tête.",
      "Un autre participant peut le libérer en reprenant puis rendant la brique."
    ],
    variation: "Change la couleur de blocage ou ajoute deux attrapeurs.",
    question: "Comment peux-tu aider sans te faire toucher ?"
  },
  {
    title: "Patate chaude",
    category: "Physique",
    group: ["small", "class"],
    context: ["floor", "outside", "transition"],
    duration: "short",
    goals: ["attention", "movement", "cooperation"],
    source: "Physical Skills",
    summary: "Les participants se passent une brique rapidement en suivant un rythme ou une musique.",
    materials: ["Une brique", "Un signal sonore ou une chanson"],
    steps: [
      "Les participants forment un cercle.",
      "Ils se passent la brique de main en main.",
      "Au signal, celui qui tient la brique propose un mouvement.",
      "Tout le groupe imite le mouvement puis le jeu reprend."
    ],
    variation: "Utilise deux briques qui circulent en sens opposé.",
    question: "Qu’est-ce qui t’aide à rester attentif au rythme ?"
  },
  {
    title: "Brique et cuillère",
    category: "Physique",
    group: ["duo", "small", "class"],
    context: ["outside", "floor"],
    duration: "medium",
    goals: ["movement", "attention"],
    source: "Physical Skills",
    summary: "Une course d’équilibre où la brique doit voyager sur une cuillère ou une règle.",
    materials: ["Une brique par équipe", "Une cuillère ou une règle par participant"],
    steps: [
      "Trace un départ et une arrivée.",
      "Le participant transporte la brique sans la toucher avec l’autre main.",
      "Au retour, il passe le matériel au suivant.",
      "Si la brique tombe, le participant reprend depuis le dernier repère."
    ],
    variation: "Ajoute un virage, un obstacle doux ou une marche arrière.",
    question: "Quel geste rend ton transport plus stable ?"
  },
  {
    title: "Copie le chef",
    category: "Physique",
    group: ["small", "class"],
    context: ["floor", "outside", "transition"],
    duration: "short",
    goals: ["movement", "memory", "attention"],
    source: "Physical Skills",
    summary: "Un participant invente une séquence de gestes avec une brique, les autres la reproduisent.",
    materials: ["Une brique par participant"],
    steps: [
      "Choisis un meneur.",
      "Il montre deux ou trois gestes avec sa brique.",
      "Le groupe répète la séquence dans le même ordre.",
      "Change de meneur et augmente progressivement la longueur."
    ],
    variation: "Ajoute la règle miroir: droite devient gauche.",
    question: "Quel geste as-tu retenu en premier ?"
  },
  {
    title: "Toboggan de briques",
    category: "Groupes et jeux",
    group: ["small"],
    context: ["table", "floor"],
    duration: "medium",
    goals: ["cooperation", "attention", "movement"],
    source: "Groups & Games",
    summary: "En relais, une brique glisse d’une règle à l’autre sans être touchée avec les mains.",
    materials: ["Une brique par équipe", "Une règle par participant"],
    steps: [
      "Forme des équipes de 4 à 6.",
      "Chaque participant tient une règle.",
      "Le premier fait glisser la brique vers la règle suivante.",
      "L’équipe recommence si la brique tombe."
    ],
    variation: "Chronomètre le relais ou demande un trajet en zigzag.",
    question: "Comment votre équipe s’est-elle organisée pour réussir ?"
  },
  {
    title: "Collecte de couleurs",
    category: "Groupes et jeux",
    group: ["small", "class"],
    context: ["floor", "outside"],
    duration: "medium",
    goals: ["movement", "cooperation", "attention"],
    source: "Groups & Games",
    summary: "Chaque participant tire une couleur puis cherche dans la pièce des objets de cette couleur.",
    materials: ["Un set de six briques par groupe", "Un minuteur"],
    steps: [
      "Place six briques au centre.",
      "Chaque participant pioche une brique sans regarder.",
      "Pendant une minute, il trouve des objets de la même couleur.",
      "Le groupe compare et classe les trouvailles."
    ],
    variation: "Demande seulement des objets naturels, doux, durs ou ronds.",
    question: "Quelle couleur a été la plus facile à trouver ?"
  },
  {
    title: "Sans les mains",
    category: "Groupes et jeux",
    group: ["duo", "small"],
    context: ["floor", "outside"],
    duration: "medium",
    goals: ["cooperation", "movement", "attention"],
    source: "Groups & Games",
    summary: "Les participants transportent une brique ensemble sans utiliser les mains.",
    materials: ["Une brique par duo ou équipe"],
    steps: [
      "Annonce la partie du corps autorisée: coude, épaule, dos ou genou.",
      "Les participants transportent la brique jusqu’à une cible.",
      "S’ils la font tomber, ils repartent du début.",
      "Change la partie du corps à chaque tour."
    ],
    variation: "Ajoute une deuxième brique ou un parcours plus long.",
    question: "Comment avez-vous communiqué pendant le transport ?"
  },
  {
    title: "Morpion de briques",
    category: "Groupes et jeux",
    group: ["duo", "small"],
    context: ["table", "floor"],
    duration: "medium",
    goals: ["attention", "cooperation", "math"],
    source: "Groups & Games",
    summary: "Une version du morpion avec deux couleurs de briques sur une grille 3 x 3.",
    materials: ["Deux couleurs de briques", "Une grille 3 x 3 dessinée"],
    steps: [
      "Chaque joueur choisit une couleur.",
      "À tour de rôle, chacun pose une brique sur la grille.",
      "Le premier qui aligne trois briques gagne.",
      "Après chaque partie, les joueurs expliquent leur stratégie."
    ],
    variation: "Joue en équipe: chaque décision doit être discutée avant de poser.",
    question: "Quel placement bloque le mieux l’autre joueur ?"
  },
  {
    title: "Vrai ou faux en couleurs",
    category: "Numératie",
    group: ["solo", "small", "class"],
    context: ["table", "transition"],
    duration: "short",
    goals: ["math", "attention"],
    source: "Numeracy Skills",
    summary: "Deux couleurs servent à répondre rapidement à des questions vrai/faux.",
    materials: ["Deux briques par participant"],
    steps: [
      "Choisis une couleur pour vrai et une couleur pour faux.",
      "Pose une question de maths ou de logique.",
      "Les participants lèvent la brique qui correspond.",
      "Demande à un participant d’expliquer son choix."
    ],
    variation: "Remplace vrai/faux par plus grand/plus petit ou pair/impair.",
    question: "Comment sais-tu que ta réponse est juste ?"
  },
  {
    title: "Tri de couleurs",
    category: "Numératie",
    group: ["solo", "duo", "small"],
    context: ["table", "floor"],
    duration: "short",
    goals: ["math", "attention"],
    source: "Numeracy Skills",
    summary: "Les participants trient, classent et justifient leurs critères avec six briques.",
    materials: ["Six briques par participant ou par duo"],
    steps: [
      "Demande un tri par couleur chaude/froide, claire/foncée ou préférence.",
      "Les participants construisent deux ou trois groupes.",
      "Ils expliquent leur règle de tri.",
      "Un autre participant devine la règle."
    ],
    variation: "Trie par position: début, milieu, fin de ligne.",
    question: "Peut-on trier les mêmes briques autrement ?"
  },
  {
    title: "Combien de façons ?",
    category: "Numératie",
    group: ["solo", "duo", "small"],
    context: ["table"],
    duration: "medium",
    goals: ["math", "memory", "attention"],
    source: "Numeracy Skills",
    summary: "Trouver plusieurs façons de faire une tour, une ligne ou un nombre avec six briques.",
    materials: ["Six briques par participant"],
    steps: [
      "Annonce un défi: faire une tour de 4, une ligne de 6 ou deux groupes égaux.",
      "Les participants cherchent une première solution.",
      "Ils doivent ensuite trouver une solution différente.",
      "Compare les stratégies et compte les possibilités."
    ],
    variation: "Ajoute une contrainte de couleur obligatoire.",
    question: "Qu’est-ce qui change entre tes deux solutions ?"
  },
  {
    title: "Forme à construire",
    category: "Numératie",
    group: ["solo", "duo", "small"],
    context: ["table", "floor"],
    duration: "medium",
    goals: ["math", "attention", "memory"],
    source: "Numeracy Skills",
    summary: "Les participants utilisent les briques pour représenter une forme ou un volume simple.",
    materials: ["Six briques par participant", "Cartes de formes si disponibles"],
    steps: [
      "Montre ou nomme une forme.",
      "Les participants la représentent avec leurs briques.",
      "Ils décrivent les côtés, coins ou positions.",
      "Recommence avec une forme plus complexe."
    ],
    variation: "Un participant construit, l’autre décrit sans regarder le modèle.",
    question: "Quelles parties de la forme reconnais-tu dans ta construction ?"
  },
  {
    title: "Mot à construire",
    category: "Littératie",
    group: ["small", "class"],
    context: ["table", "floor"],
    duration: "medium",
    goals: ["language", "cooperation"],
    source: "Literacy Skills",
    summary: "Chaque groupe pioche un mot et construit un modèle que les autres doivent deviner.",
    materials: ["Six briques par participant", "Mots sur papiers"],
    steps: [
      "Prépare des mots adaptés au niveau.",
      "Chaque groupe pioche un mot en secret.",
      "Il construit le mot avec les briques.",
      "Les autres groupes devinent en posant des questions."
    ],
    variation: "Interdis certains mots dans les réponses pour encourager la précision.",
    question: "Quel détail de la construction t’a aidé à deviner ?"
  },
  {
    title: "Écoute, regarde et fais",
    category: "Littératie",
    group: ["solo", "small", "class"],
    context: ["table", "transition"],
    duration: "short",
    goals: ["language", "memory", "attention"],
    source: "Literacy Skills",
    summary: "Les participants suivent une consigne orale de plus en plus longue avec leurs briques.",
    materials: ["Six briques par participant"],
    steps: [
      "Donne une consigne simple: pose le rouge sur le bleu.",
      "Ajoute une deuxième action.",
      "Les participants réalisent sans parler.",
      "Vérifie ensemble et reformule la consigne."
    ],
    variation: "Un participant devient meneur et invente la consigne.",
    question: "Quelle partie de la consigne fallait-il retenir en premier ?"
  },
  {
    title: "Prépositions en briques",
    category: "Littératie",
    group: ["solo", "duo", "small"],
    context: ["table"],
    duration: "short",
    goals: ["language", "attention"],
    source: "Literacy Skills",
    summary: "Travailler sur, sous, devant, derrière, entre et à côté avec deux ou trois briques.",
    materials: ["Six briques par participant"],
    steps: [
      "Choisis deux briques de départ.",
      "Donne une préposition à représenter.",
      "Les participants placent les briques.",
      "Ils inventent ensuite une phrase avec la préposition."
    ],
    variation: "Passe en binôme: un participant décrit, l’autre place.",
    question: "Quelle phrase peux-tu faire avec cette position ?"
  },
  {
    title: "Chaîne d’histoire",
    category: "Littératie",
    group: ["small", "class"],
    context: ["floor", "table", "calm"],
    duration: "long",
    goals: ["language", "memory", "cooperation"],
    source: "Literacy Skills",
    summary: "Chaque brique ajoute un élément à une histoire collective.",
    materials: ["Six briques par groupe"],
    steps: [
      "Pose une première brique et commence une phrase.",
      "Le joueur suivant ajoute une brique et continue l’histoire.",
      "Chaque participant répète brièvement ce qui précède.",
      "Termine quand les six briques sont utilisées."
    ],
    variation: "Chaque couleur impose un type d’élément: lieu, personnage, action, émotion.",
    question: "Qu’est-ce qui rend l’histoire facile à suivre ?"
  },
  {
    title: "Tes doigts peuvent-ils voir ?",
    category: "Perception",
    group: ["solo", "duo", "small"],
    context: ["table", "calm"],
    duration: "short",
    goals: ["attention", "language", "memory"],
    source: "Perceptual Skills",
    summary: "Les participants décrivent une brique les yeux fermés en utilisant le toucher.",
    materials: ["Six briques par participant", "Un bandeau facultatif"],
    steps: [
      "Les participants ferment les yeux.",
      "Ils choisissent une brique et la touchent attentivement.",
      "Ils décrivent les picots, les bords, les creux et la forme.",
      "Ils ouvrent les yeux et vérifient."
    ],
    variation: "Un partenaire devine la couleur ou la brique décrite.",
    question: "Quels indices as-tu sentis avec tes doigts ?"
  },
  {
    title: "Découvre les six briques",
    category: "Perception",
    group: ["solo", "class"],
    context: ["table", "transition"],
    duration: "short",
    goals: ["attention", "memory"],
    source: "Perceptual Skills",
    summary: "Repérer rapidement une brique selon sa position dans une ligne.",
    materials: ["Six briques par participant"],
    steps: [
      "Les participants alignent leurs briques de gauche à droite.",
      "Demande de toucher la troisième, la première ou la dernière.",
      "Change le point de départ: depuis la droite, depuis le centre.",
      "Accélère doucement le rythme."
    ],
    variation: "Demande de fermer les yeux après avoir mémorisé l’ordre.",
    question: "Comment sais-tu où se trouve la troisième brique ?"
  },
  {
    title: "Repère l’erreur",
    category: "Perception",
    group: ["duo", "small"],
    context: ["table"],
    duration: "medium",
    goals: ["attention", "memory", "language"],
    source: "Perceptual Skills",
    summary: "Comparer deux modèles presque identiques et trouver ce qui a changé.",
    materials: ["Deux sets de six briques"],
    steps: [
      "Construis un petit modèle.",
      "Un participant le copie.",
      "Change discrètement une couleur, une position ou une orientation.",
      "Le partenaire doit trouver et expliquer l’erreur."
    ],
    variation: "Augmente à deux erreurs ou limite le temps d’observation.",
    question: "Quel détail as-tu regardé en premier ?"
  },
  {
    title: "Mémoire flash",
    category: "Perception",
    group: ["solo", "small", "class"],
    context: ["table", "transition"],
    duration: "short",
    goals: ["memory", "attention"],
    source: "Perceptual Skills",
    summary: "Observer une suite de briques quelques secondes, puis la reconstruire de mémoire.",
    materials: ["Six briques par participant", "Un modèle du meneur"],
    steps: [
      "Montre une suite de trois briques pendant cinq secondes.",
      "Cache le modèle.",
      "Les participants reconstruisent la suite.",
      "Ajoute une brique quand le groupe réussit."
    ],
    variation: "Demande aussi l’orientation des briques.",
    question: "As-tu mémorisé par couleur, par place ou par histoire ?"
  },
  {
    title: "Saute vers la couleur",
    category: "Mouvement",
    group: ["solo", "small", "class"],
    context: ["floor", "outside"],
    duration: "short",
    goals: ["movement", "attention"],
    source: "Move & Learn",
    summary: "Les participants se déplacent vers une couleur, une forme ou un nombre annoncé.",
    materials: ["Briques ou cartes de couleurs au sol"],
    steps: [
      "Dispose des repères colorés au sol.",
      "Annonce une couleur, un nombre ou une forme.",
      "Les participants sautent ou marchent vers le bon repère.",
      "Ajoute des consignes: avant, arrière, gauche, droite."
    ],
    variation: "Un participant annonce la prochaine destination.",
    question: "Comment ton corps sait-il dans quelle direction aller ?"
  },
  {
    title: "Suis le chemin",
    category: "Mouvement",
    group: ["solo", "duo", "small"],
    context: ["floor", "table"],
    duration: "medium",
    goals: ["attention", "movement", "math"],
    source: "Move & Learn",
    summary: "Suivre un trajet avec le doigt ou une brique entre couleurs, formes et nombres.",
    materials: ["Un tapis ou une feuille avec repères", "Une brique par participant"],
    steps: [
      "Place la brique sur le point de départ.",
      "Annonce une suite: va au rouge, puis au carré, puis au 2.",
      "Le participant trace le chemin avec son doigt ou déplace la brique.",
      "Il nomme le point d’arrivée."
    ],
    variation: "Demande de revenir au départ par un autre chemin.",
    question: "Quel repère as-tu visité deux fois ?"
  },
  {
    title: "B-Line positions",
    category: "Mouvement",
    group: ["solo", "duo", "class"],
    context: ["table", "floor", "transition"],
    duration: "short",
    goals: ["attention", "movement", "memory"],
    source: "XBL Daily Record",
    summary: "Placer ou déplacer les briques avec des consignes spatiales: gauche, droite, centre, haut, bas.",
    materials: ["Six briques par participant", "Une ligne ou un tapis"],
    steps: [
      "Les participants alignent les six briques.",
      "Annonce une position: rouge à gauche, bleu au centre, jaune en haut.",
      "Ils déplacent les briques rapidement.",
      "Ajoute deux briques à déplacer dans la même consigne."
    ],
    variation: "Travaille en miroir avec un partenaire placé en face.",
    question: "Qu’est-ce qui change quand ton partenaire est en face de toi ?"
  },
  {
    title: "B-Line mouvements de base",
    category: "B-Line",
    group: ["solo", "duo", "small", "class"],
    context: ["table", "floor", "transition"],
    duration: "short",
    goals: ["spatial", "movement", "attention"],
    source: "Basic Movements (H & V)",
    summary: "Les participants déplacent les six briques depuis la ligne rouge en suivant des consignes simples: haut, bas, avant, arrière, gauche ou droite.",
    materials: ["Six briques par participant", "Un tapis B-Line horizontal ou vertical"],
    steps: [
      "Place toutes les briques sur la ligne rouge, dans n’importe quel ordre.",
      "Choisis l’orientation du tapis: horizontal ou vertical.",
      "Donne une consigne courte: rouge monte, jaune descend, bleu va à droite.",
      "Augmente progressivement la vitesse quand le groupe est à l’aise."
    ],
    variation: "Remplace parfois la couleur ou le mouvement par sa première lettre.",
    question: "Quelle consigne demande de traverser la ligne rouge ?"
  },
  {
    title: "B-Line twist & flip",
    category: "B-Line",
    group: ["solo", "duo", "small"],
    context: ["table", "floor"],
    duration: "medium",
    goals: ["spatial", "attention", "executive"],
    source: "Basic Movements (H & V)",
    summary: "Les participants combinent déplacement, rotation et retournement pour travailler l’orientation spatiale et le contrôle inhibiteur.",
    materials: ["Six briques par participant", "Un tapis B-Line"],
    steps: [
      "Revois deux gestes: twist signifie tourner la brique, flip signifie la retourner.",
      "Donne une première consigne avec une couleur et un déplacement.",
      "Ajoute twist ou flip à certaines consignes.",
      "Demande aux participants de vérifier si les picots sont visibles ou non."
    ],
    variation: "En mode avancé, toutes les consignes de mouvement doivent être faites à l’inverse.",
    question: "Comment sais-tu si la brique est tournée ou retournée ?"
  },
  {
    title: "Partenaires même côté",
    category: "B-Line",
    group: ["duo", "small"],
    context: ["table", "floor"],
    duration: "medium",
    goals: ["cooperation", "spatial", "executive"],
    source: "Basic Movements (H & V)",
    summary: "Deux participants travaillent sur le même tapis: chacun contrôle une partie des briques ou ils doivent toucher la brique ensemble.",
    materials: ["Un tapis B-Line pour deux", "Six briques"],
    steps: [
      "Place les deux participants du même côté du tapis.",
      "Attribue trois briques à chaque participant ou demande qu’ils touchent ensemble toute brique déplacée.",
      "Donne des consignes de déplacement simples.",
      "Observe comment ils négocient la prise de décision et l’espace."
    ],
    variation: "Les participants gardent une main collée en high five et utilisent seulement l’autre main.",
    question: "Qu’avez-vous dû faire ensemble pour réussir sans vous gêner ?"
  },
  {
    title: "Partenaires face à face",
    category: "B-Line",
    group: ["duo", "small"],
    context: ["table", "floor"],
    duration: "medium",
    goals: ["cooperation", "spatial", "executive"],
    source: "Basic Movements - Partners Opposite Sides",
    summary: "Deux participants se placent de chaque côté du tapis. Les consignes deviennent un défi de point de vue et de flexibilité cognitive.",
    materials: ["Un tapis B-Line pour deux", "Six briques"],
    steps: [
      "Installe les partenaires sur des côtés opposés du tapis.",
      "Explique que gauche, droite, avant et arrière peuvent être perçus différemment.",
      "Donne des consignes lentes au début.",
      "Après chaque série, demande aux participants de comparer leur point de vue."
    ],
    variation: "Un partenaire ne déplace que les briques bleues, l’autre toutes les autres.",
    question: "Quand vous êtes face à face, qu’est-ce qui devient plus difficile ?"
  },
  {
    title: "Mémoire de travail B-Line",
    category: "B-Line",
    group: ["solo", "duo", "small", "class"],
    context: ["table", "floor", "transition"],
    duration: "medium",
    goals: ["memory", "executive", "spatial"],
    source: "Spatial & Working Mem (H & V)",
    summary: "Les participants attendent deux, trois ou quatre consignes avant de toucher les briques, puis les exécutent dans l’ordre.",
    materials: ["Six briques par participant", "Un tapis B-Line"],
    steps: [
      "Annonce que les mains restent immobiles pendant les consignes.",
      "Donne deux consignes courtes, puis dis go.",
      "Les participants réalisent les mouvements dans l’ordre entendu.",
      "Augmente à trois ou quatre consignes selon le niveau."
    ],
    variation: "Demande d’exécuter la série en ordre inverse pour les plus avancés.",
    question: "Quelle stratégie utilises-tu pour garder les consignes en tête ?"
  },
  {
    title: "Coordonnées spatiales",
    category: "B-Line",
    group: ["solo", "duo", "small"],
    context: ["table", "floor"],
    duration: "medium",
    goals: ["spatial", "attention", "language"],
    source: "Spatial & Working Mem (H & V)",
    summary: "Les participants placent les briques dans des zones précises: haut gauche, centre, bas droit, au-dessus ou en dessous de la ligne rouge.",
    materials: ["Six briques par participant", "Un tapis B-Line avec zones visibles"],
    steps: [
      "Présente les zones du tapis: haut, bas, gauche, droite et centre.",
      "Donne une consigne de position: vert en haut à gauche.",
      "Ajoute des relations: bleu sous jaune, orange touche rouge.",
      "Fais verbaliser la position finale par un participant."
    ],
    variation: "Un participant lit ou invente les coordonnées pour son partenaire.",
    question: "Quelle différence fais-tu entre centre au-dessus et centre au-dessous ?"
  },
  {
    title: "Symétrie sur le tapis",
    category: "B-Line",
    group: ["duo", "small"],
    context: ["table", "floor"],
    duration: "medium",
    goals: ["spatial", "math", "cooperation"],
    source: "Spatial & Working Mem (H & V)",
    summary: "Un participant construit d’un côté de la ligne, l’autre reproduit en miroir de l’autre côté.",
    materials: ["Six briques par duo", "Un tapis B-Line"],
    steps: [
      "Définis la ligne rouge comme axe de symétrie.",
      "Le premier participant place deux ou trois briques d’un côté.",
      "Le partenaire place les briques correspondantes en miroir.",
      "Le groupe vérifie les distances et les positions."
    ],
    variation: "Ajoute twist ou flip dans le modèle à reproduire.",
    question: "Qu’est-ce qui reste pareil dans une construction symétrique ?"
  },
  {
    title: "Maths B-Line de base",
    category: "B-Line",
    group: ["solo", "duo", "small", "class"],
    context: ["table", "floor"],
    duration: "medium",
    goals: ["math", "spatial", "attention"],
    source: "Basic Mathematics (H & V)",
    summary: "Les lignes du tapis deviennent des nombres. Les briques se déplacent vers le résultat d’une consigne de nombre ou de calcul simple.",
    materials: ["Six briques par participant", "Un tapis B-Line numéroté de 1 à 5 ou 1 à 10"],
    steps: [
      "Choisis une base: nombres de 1 à 5 ou de 1 à 10.",
      "Annonce une couleur et une valeur: jaune à 4, rouge à 2 + 1.",
      "Le participant déplace la brique vers la ligne de résultat.",
      "Demande parfois quelle brique a bougé en premier ou en dernier."
    ],
    variation: "Utilise +1, -1, +2 et -2 comme déplacements à partir de la position actuelle.",
    question: "Comment sais-tu sur quelle ligne placer la brique ?"
  },
  {
    title: "Calcul mental avancé",
    category: "B-Line",
    group: ["solo", "duo", "small"],
    context: ["table", "floor"],
    duration: "long",
    goals: ["math", "executive", "memory"],
    source: "Advanced Mathematics (H & V)",
    summary: "Les participants résolvent des additions, soustractions, multiplications ou divisions, puis déplacent la brique vers la ligne du résultat.",
    materials: ["Six briques par participant", "Un tapis B-Line base 10"],
    steps: [
      "Attribue une valeur ou une opération à chaque consigne.",
      "Annonce: bleu vers le résultat de 12 - 8, vert vers 3 x 2.",
      "Les participants calculent mentalement puis déplacent la brique.",
      "Fais expliciter une stratégie de calcul après quelques tours."
    ],
    variation: "En duo, un participant calcule et l’autre vérifie le déplacement.",
    question: "Quelle opération t’a demandé le plus d’effort ?"
  },
  {
    title: "B-Line avec outils",
    category: "B-Line",
    group: ["solo", "duo", "small"],
    context: ["table", "floor", "calm"],
    duration: "short",
    goals: ["movement", "attention", "executive"],
    source: "Variations & Advanced Options",
    summary: "Les briques ne sont plus déplacées à la main: les participants utilisent un crayon, une pince, une paille ou seulement certains doigts.",
    materials: ["Six briques par participant", "Crayons, pailles, pinces ou baguettes", "Un tapis B-Line"],
    steps: [
      "Choisis un outil ou une contrainte de doigts.",
      "Donne des consignes B-Line simples.",
      "Les participants doivent soulever et placer, sans faire glisser si possible.",
      "Change d’outil après une courte série."
    ],
    variation: "Une main reste sur la tête, derrière le dos ou avec un doigt sur le nez.",
    question: "Quel outil donne le plus de contrôle ?"
  },
  {
    title: "B-Line mode inhibition",
    category: "B-Line",
    group: ["solo", "duo", "small", "class"],
    context: ["table", "floor", "transition"],
    duration: "medium",
    goals: ["executive", "attention", "memory"],
    source: "Variations & Advanced Options",
    summary: "Les participants doivent attendre le signal avant de bouger, ou faire toutes les consignes à l’envers.",
    materials: ["Six briques par participant", "Un tapis B-Line"],
    steps: [
      "Annonce une règle d’inhibition: on écoute toute la série avant de toucher.",
      "Donne deux ou trois consignes.",
      "Au signal, les participants exécutent.",
      "Ajoute le mode inverse: haut devient bas, gauche devient droite."
    ],
    variation: "Un seul joueur du duo fait les consignes en inverse, l’autre les fait normalement.",
    question: "Qu’est-ce qui t’aide à ne pas bouger trop tôt ?"
  },
  {
    title: "Jeu de plateau Six Bricks",
    category: "Plateaux & feuilles",
    group: ["duo", "small"],
    context: ["table", "floor"],
    duration: "medium",
    goals: ["cooperation", "attention", "math"],
    source: "Care for Education Templates",
    summary: "Utiliser un plateau imprimé pour transformer les six briques en pions, défis ou récompenses de déplacement.",
    materials: ["Un plateau Six Bricks imprimé", "Six briques par joueur ou par équipe", "Un dé"],
    steps: [
      "Chaque joueur choisit une couleur ou une brique pion.",
      "Lance le dé et avance sur le plateau.",
      "À chaque case, annonce une mini-action: construire, compter, décrire ou imiter.",
      "Le joueur explique son choix avant de passer le tour."
    ],
    variation: "Ajoute des cases coopération où deux joueurs doivent construire ensemble.",
    question: "Quelle stratégie t’aide à avancer sans te précipiter ?"
  },
  {
    title: "Seega Six Bricks",
    category: "Plateaux & feuilles",
    group: ["duo"],
    context: ["table"],
    duration: "long",
    goals: ["attention", "spatial", "executive"],
    source: "Care for Education Templates",
    summary: "Un jeu tactique à deux sur grille, inspiré des jeux de capture, pour anticiper, bloquer et déplacer ses briques.",
    materials: ["Template Seega imprimé", "Deux couleurs de briques"],
    steps: [
      "Chaque joueur prend une couleur.",
      "Placez les briques à tour de rôle sur la grille.",
      "Déplacez une brique vers une case voisine libre.",
      "Capturez ou bloquez selon la règle choisie, puis verbalisez le coup."
    ],
    variation: "Joue en équipe: le partenaire doit expliquer le prochain déplacement possible.",
    question: "Quel déplacement protège le mieux tes briques ?"
  },
  {
    title: "Bingo First2Four",
    category: "Plateaux & feuilles",
    group: ["solo", "small", "class"],
    context: ["table", "transition"],
    duration: "medium",
    goals: ["math", "attention"],
    source: "Care for Education Templates",
    summary: "Un bingo de nombres où les participants couvrent les réponses avec leurs briques jusqu’à aligner quatre cases.",
    materials: ["Grille First2Four imprimée", "Six briques par participant", "Cartes nombres ou calculs"],
    steps: [
      "Distribue une grille à chaque participant ou duo.",
      "Annonce un nombre, un calcul ou une représentation.",
      "Les participants couvrent la case correspondante avec une brique.",
      "Le premier à obtenir quatre briques alignées explique ses réponses."
    ],
    variation: "Utilise la version nombres négatifs pour les participants plus avancés.",
    question: "Comment as-tu trouvé la case à couvrir ?"
  },
  {
    title: "Plan cartésien en briques",
    category: "Plateaux & feuilles",
    group: ["solo", "duo", "small"],
    context: ["table"],
    duration: "medium",
    goals: ["math", "spatial", "attention"],
    source: "Care for Education Templates",
    summary: "Les participants placent des briques sur un plan cartésien pour travailler coordonnées, repérage et déplacement.",
    materials: ["Plan cartésien imprimé", "Six briques par participant"],
    steps: [
      "Présente les axes horizontal et vertical.",
      "Annonce une coordonnée: rouge en A3 ou bleu en (2, 4).",
      "Les participants placent la brique sur l’intersection.",
      "Crée ensuite un chemin de plusieurs coordonnées à suivre."
    ],
    variation: "Un participant dicte les coordonnées et l’autre vérifie le trajet.",
    question: "Quel axe regardes-tu en premier pour trouver la position ?"
  },
  {
    title: "Cartes de motifs",
    category: "Plateaux & feuilles",
    group: ["solo", "duo", "small"],
    context: ["table", "calm"],
    duration: "short",
    goals: ["memory", "spatial", "attention"],
    source: "Care for Education Templates",
    summary: "Reproduire, compléter ou inventer une suite avec des cartes de motifs en couleur ou en silhouette.",
    materials: ["Cartes de motifs imprimées", "Six briques par participant"],
    steps: [
      "Montre une carte modèle.",
      "Les participants reproduisent la suite avec leurs briques.",
      "Cache la carte et demande de reconstruire de mémoire.",
      "Termine en demandant d’inventer la suite suivante."
    ],
    variation: "Utilise les cartes sans couleur pour obliger à raisonner sur la forme et l’espace.",
    question: "Qu’est-ce qui se répète dans ce motif ?"
  },
  {
    title: "Défi construction 3D",
    category: "Plateaux & feuilles",
    group: ["solo", "duo", "small"],
    context: ["table", "floor"],
    duration: "medium",
    goals: ["spatial", "memory", "language"],
    source: "Care for Education Templates",
    summary: "À partir d’un modèle 3D imprimé, les participants construisent, décrivent puis modifient une structure.",
    materials: ["Cartes 3D Builds imprimées", "Six briques par participant"],
    steps: [
      "Choisis une carte modèle.",
      "Les participants construisent la structure avec leurs six briques.",
      "Ils décrivent la position des briques: dessus, dessous, devant, derrière.",
      "Ils changent une brique et expliquent l’effet sur la structure."
    ],
    variation: "Un participant décrit la carte sans la montrer, l’autre construit.",
    question: "Quelle brique soutient le plus la construction ?"
  },
  {
    title: "Graphique fruité",
    category: "Plateaux & feuilles",
    group: ["small", "class"],
    context: ["table", "floor"],
    duration: "medium",
    goals: ["math", "language", "cooperation"],
    source: "Care for Education Templates",
    summary: "Construire un graphique simple avec un template fruit ou transport, puis lire les données ensemble.",
    materials: ["Template bar graph imprimé", "Briques comme marqueurs", "Images ou choix à classer"],
    steps: [
      "Choisis un thème: fruits, transports ou préférences du groupe.",
      "Chaque participant vote avec une brique.",
      "Place les briques dans la colonne correspondante.",
      "Compare les colonnes: plus, moins, autant, différence."
    ],
    variation: "Demande aux participants de prédire le résultat avant de voter.",
    question: "Quelle colonne en a le plus, et comment le vois-tu ?"
  },
  {
    title: "Fractions en six briques",
    category: "Plateaux & feuilles",
    group: ["solo", "duo", "small"],
    context: ["table"],
    duration: "medium",
    goals: ["math", "spatial"],
    source: "Care for Education Templates",
    summary: "Utiliser le template de fractions pour représenter moitié, tiers, quart et parties d’un ensemble de six.",
    materials: ["Template fractions imprimé", "Six briques par participant"],
    steps: [
      "Présente les six briques comme un tout.",
      "Demande de montrer la moitié, un tiers ou deux tiers.",
      "Les participants placent les briques dans les zones du template.",
      "Fais verbaliser: deux briques sur six, trois briques sur six."
    ],
    variation: "Ajoute une contrainte de couleur: la moitié doit contenir une brique bleue.",
    question: "Combien de briques représentent une moitié de six ?"
  },
  {
    title: "Grille de communication",
    category: "Plateaux & feuilles",
    group: ["duo", "small"],
    context: ["table", "calm"],
    duration: "medium",
    goals: ["language", "cooperation", "spatial"],
    source: "Care for Education Templates",
    summary: "Un participant place des briques sur une grille, puis guide un partenaire avec des consignes précises.",
    materials: ["Grille 5 x 5 ou 6 x 8 imprimée", "Six briques par duo", "Cache ou séparation facultative"],
    steps: [
      "Le premier participant construit une disposition sur sa grille.",
      "Il décrit les positions sans montrer son modèle.",
      "Le partenaire reproduit sur sa propre grille.",
      "Les deux comparent et corrigent avec des mots spatiaux."
    ],
    variation: "Interdis les noms de couleur pendant un tour: il faut décrire par position.",
    question: "Quelle consigne était la plus claire pour ton partenaire ?"
  },
  {
    title: "Cartes nombres express",
    category: "Plateaux & feuilles",
    group: ["solo", "small", "class"],
    context: ["table", "transition"],
    duration: "short",
    goals: ["math", "attention", "memory"],
    source: "Care for Education Templates",
    summary: "Piocher une carte nombre et la représenter rapidement avec les briques: quantité, décomposition ou comparaison.",
    materials: ["Cartes nombres imprimées", "Six briques par participant"],
    steps: [
      "Pioche ou montre une carte nombre.",
      "Les participants représentent la quantité avec leurs briques.",
      "Demande une autre représentation: deux groupes, plus un, moins un.",
      "Compare deux cartes avec plus grand, plus petit ou égal."
    ],
    variation: "Ajoute un sablier pour en faire un défi de rapidité calme.",
    question: "Combien de façons peux-tu représenter ce nombre ?"
  },
  {
    title: "Convoyeur humain de briques",
    category: "Play Box & communauté",
    group: ["small", "class"],
    context: ["floor", "outside"],
    duration: "medium",
    goals: ["movement", "cooperation", "attention"],
    source: "Care for Education Resources",
    summary: "Les participants deviennent une chaîne de transport: une brique passe d’un participant à l’autre avec une contrainte de mouvement.",
    materials: ["Une ou plusieurs briques", "Un espace pour former une ligne ou un cercle"],
    steps: [
      "Place les participants en ligne ou en cercle.",
      "Choisis une façon de transmettre la brique: au-dessus, dessous, derrière le dos.",
      "La brique doit arriver au dernier participant sans tomber.",
      "Change le sens ou ajoute une deuxième brique."
    ],
    variation: "Fais transporter uniquement avec les coudes, les avant-bras ou deux doigts.",
    question: "Comment le groupe peut-il aller vite tout en restant précis ?"
  },
  {
    title: "Tours bancales",
    category: "Play Box & communauté",
    group: ["solo", "duo", "small"],
    context: ["table", "floor"],
    duration: "short",
    goals: ["spatial", "attention", "executive"],
    source: "Care for Education Resources",
    summary: "Construire la tour la plus haute possible malgré une règle qui rend l’équilibre plus difficile.",
    materials: ["Six briques par participant ou duo", "Un minuteur facultatif"],
    steps: [
      "Annonce la mission: faire tenir une tour avec les six briques.",
      "Ajoute une contrainte: couleurs alternées, une seule main ou briques décalées.",
      "Observe avant de recommencer avec une autre stratégie.",
      "Compare les tours: hauteur, stabilité et méthode."
    ],
    variation: "Un partenaire donne les consignes, l’autre construit sans parler.",
    question: "Qu’est-ce qui rend ta tour stable ou instable ?"
  },
  {
    title: "Tour de passe-passe",
    category: "Play Box & communauté",
    group: ["solo", "duo", "small"],
    context: ["table", "transition"],
    duration: "short",
    goals: ["attention", "memory", "executive"],
    source: "Care for Education Resources",
    summary: "Une activité de manipulation rapide où le participant doit suivre, cacher, retrouver ou échanger une brique cible.",
    materials: ["Six briques par participant", "Un tissu ou une main pour cacher"],
    steps: [
      "Choisis une brique secrète.",
      "Mélange les briques lentement puis plus vite.",
      "Le participant suit la brique des yeux et la désigne.",
      "Inverse les rôles: le participant devient meneur."
    ],
    variation: "Ajoute deux briques cibles à suivre en même temps.",
    question: "Qu’as-tu fait pour ne pas perdre la brique des yeux ?"
  },
  {
    title: "Cache et réfléchis en 3D",
    category: "Play Box & communauté",
    group: ["duo", "small"],
    context: ["table", "calm"],
    duration: "medium",
    goals: ["spatial", "memory", "language"],
    source: "Care for Education Resources",
    summary: "Un participant observe une petite construction 3D, elle est cachée, puis il la reconstruit de mémoire.",
    materials: ["Deux sets de six briques", "Un cache ou une boîte"],
    steps: [
      "Construis un modèle avec trois à six briques.",
      "Laisse le participant observer quelques secondes.",
      "Cache le modèle.",
      "Il reconstruit, puis compare et décrit les différences."
    ],
    variation: "Demande de reconstruire en miroir ou avec les couleurs inversées.",
    question: "Quel détail de la construction as-tu mémorisé en premier ?"
  },
  {
    title: "Quelle est la lettre secrète ?",
    category: "Play Box & communauté",
    group: ["solo", "duo", "small"],
    context: ["table", "transition"],
    duration: "short",
    goals: ["language", "attention", "memory"],
    source: "Care for Education Resources",
    summary: "Les briques servent d’indices pour trouver une lettre, un son ou un mot mystère.",
    materials: ["Six briques", "Cartes lettres ou ardoise"],
    steps: [
      "Choisis une lettre secrète.",
      "Donne un indice par brique: son initial, mot qui commence pareil, forme de la lettre.",
      "Les participants proposent une réponse après trois indices.",
      "Ils construisent ensuite un objet qui commence par cette lettre."
    ],
    variation: "Remplace la lettre par une syllabe ou un phonème cible.",
    question: "Quel indice t’a vraiment aidé à trouver ?"
  },
  {
    title: "Combien de picots vois-tu ?",
    category: "Play Box & communauté",
    group: ["solo", "small", "class"],
    context: ["table", "transition"],
    duration: "short",
    goals: ["math", "attention"],
    source: "Care for Education Resources",
    summary: "Observer rapidement une construction et compter les picots visibles, cachés ou au total.",
    materials: ["Six briques par participant", "Quelques modèles simples"],
    steps: [
      "Montre une brique ou une petite construction.",
      "Demande combien de picots sont visibles.",
      "Cache une partie ou empile une brique et repose la question.",
      "Vérifie en comptant ensemble."
    ],
    variation: "Demande une estimation avant le comptage exact.",
    question: "Quels picots ne peut-on pas voir mais peut-on deviner ?"
  },
  {
    title: "Combien en reste-t-il ?",
    category: "Play Box & communauté",
    group: ["solo", "small", "class"],
    context: ["table", "transition"],
    duration: "short",
    goals: ["math", "memory", "attention"],
    source: "Care for Education Resources",
    summary: "Une activité de retrait: on part de six briques, on en cache ou enlève quelques-unes, les participants trouvent le reste.",
    materials: ["Six briques par participant", "Un tissu ou une boîte"],
    steps: [
      "Montre les six briques.",
      "Cache ou enlève une quantité sans la montrer longtemps.",
      "Demande combien il en reste ou combien ont disparu.",
      "Fais représenter l’opération avec les briques visibles."
    ],
    variation: "Les participants inventent leurs propres problèmes pour un partenaire.",
    question: "As-tu compté ce qui reste ou ce qui manque ?"
  },
  {
    title: "Estime puis vérifie",
    category: "Play Box & communauté",
    group: ["solo", "duo", "small"],
    context: ["table", "floor"],
    duration: "medium",
    goals: ["math", "attention", "language"],
    source: "Care for Education Resources",
    summary: "Les participants estiment une hauteur, une longueur, une quantité de picots ou un nombre de briques, puis vérifient.",
    materials: ["Six briques par participant", "Objets de la classe à mesurer"],
    steps: [
      "Choisis une question: combien de briques pour mesurer ce livre ?",
      "Chaque participant annonce une estimation.",
      "Il mesure ou compte avec ses briques.",
      "Compare estimation et résultat réel."
    ],
    variation: "Travaille en équipes et demande une justification avant de mesurer.",
    question: "Ton estimation était-elle trop grande, trop petite ou proche ?"
  },
  {
    title: "Construire avec le langage",
    category: "Play Box & communauté",
    group: ["duo", "small"],
    context: ["table", "calm"],
    duration: "medium",
    goals: ["language", "cooperation", "spatial"],
    source: "Care for Education Resources",
    summary: "Un participant décrit précisément une construction; l’autre doit la reproduire sans voir le modèle.",
    materials: ["Deux sets de six briques", "Un cache entre les partenaires"],
    steps: [
      "Le premier participant construit une tour de trois briques, cachée derrière un écran.",
      "Il décrit chaque couleur, chaque position et chaque orientation avec une phrase courte.",
      "Le partenaire construit uniquement à partir des mots.",
      "Ils comparent puis échangent les rôles."
    ],
    variation: "Interdis les gestes: seules les phrases sont autorisées.",
    question: "Quels mots rendent la consigne plus précise ?"
  },
  {
    title: "Donner vie à une histoire",
    category: "Play Box & communauté",
    group: ["small", "class"],
    context: ["table", "floor", "calm"],
    duration: "long",
    goals: ["language", "emotion", "cooperation"],
    source: "Care for Education Resources",
    summary: "Après une lecture, les participants reconstruisent un personnage, un lieu ou un problème de l’histoire avec six briques.",
    materials: ["Un album ou une histoire courte", "Six briques par participant ou groupe"],
    steps: [
      "Lis une histoire ou un extrait.",
      "Demande de construire un personnage, un lieu ou un moment important.",
      "Chaque participant explique son choix.",
      "Le groupe remet les constructions dans l’ordre de l’histoire."
    ],
    variation: "Inventer une suite à l’histoire avec une nouvelle construction.",
    question: "Quelle partie de l’histoire ta construction raconte-t-elle ?"
  },
  {
    title: "Glace à construire",
    category: "Play Box & communauté",
    group: ["solo", "small", "class"],
    context: ["table", "transition"],
    duration: "short",
    goals: ["language", "memory", "attention"],
    source: "Care for Education Resources",
    summary: "Les briques deviennent des parfums de glace à empiler selon une commande orale.",
    materials: ["Six briques par participant", "Cartes commandes facultatives"],
    steps: [
      "Associe chaque couleur à un parfum.",
      "Annonce une commande de deux ou trois parfums.",
      "Les participants empilent les briques dans l’ordre demandé.",
      "Ils répètent la commande en phrase complète."
    ],
    variation: "Ajoute une commande impossible ou un parfum à retirer.",
    question: "Quel ordre fallait-il retenir pour réussir la commande ?"
  },
  {
    title: "Têtes et queues",
    category: "Play Box & communauté",
    group: ["solo", "duo", "small"],
    context: ["table", "transition"],
    duration: "short",
    goals: ["language", "attention", "memory"],
    source: "Care for Education Resources",
    summary: "Associer débuts et fins de mots, de phrases ou de motifs avec des briques de couleurs différentes.",
    materials: ["Six briques", "Cartes mots ou images"],
    steps: [
      "Place les débuts d’un côté et les fins de l’autre.",
      "Le participant choisit deux briques pour former une paire correcte.",
      "Il lit ou dit le mot complet.",
      "Il invente ensuite une phrase avec ce mot."
    ],
    variation: "Utilise des rimes: la brique de fin doit rimer avec le mot de départ.",
    question: "Comment as-tu su que ces deux parties allaient ensemble ?"
  },
  {
    title: "Sac looky-feely",
    category: "Play Box & communauté",
    group: ["solo", "duo", "small"],
    context: ["table", "calm"],
    duration: "short",
    goals: ["attention", "language", "memory"],
    source: "Care for Education Resources",
    summary: "Les participants reconnaissent une brique au toucher dans un sac, puis décrivent ce qu’ils sentent.",
    materials: ["Six briques", "Un sac opaque"],
    steps: [
      "Mets les briques dans le sac.",
      "Le participant plonge la main sans regarder.",
      "Il décrit la brique avant de la sortir.",
      "Le groupe vérifie puis enrichit le vocabulaire tactile."
    ],
    variation: "Demande de trouver une couleur précise sans regarder, seulement par élimination et mémoire.",
    question: "Quels mots peux-tu utiliser pour décrire ce que tu touches ?"
  },
  {
    title: "Copy Cat Play Box",
    category: "Play Box & communauté",
    group: ["solo", "duo", "class"],
    context: ["table", "floor", "transition"],
    duration: "short",
    goals: ["memory", "attention", "movement"],
    source: "Care for Education Resources",
    summary: "Un participant ou l’adulte montre une action avec les briques; les autres copient exactement.",
    materials: ["Six briques par participant"],
    steps: [
      "Montre une action simple: empiler, toucher, tourner, cacher.",
      "Les participants copient la même action.",
      "Ajoute une deuxième action à mémoriser.",
      "Change de meneur après quelques tours."
    ],
    variation: "Passe en mode miroir: les participants font l’action opposée.",
    question: "Qu’as-tu regardé pour copier exactement ?"
  },
  {
    title: "Réveil des six briques",
    category: "Perception",
    group: ["solo", "small", "class"],
    context: ["table", "floor", "transition"],
    duration: "short",
    goals: ["attention", "memory", "language"],
    source: "LEGO Foundation Six Bricks Booklet",
    summary: "Les participants installent une routine d’observation rapide pour nommer, toucher et organiser leurs six briques.",
    materials: ["Six briques par participant"],
    steps: ["Aligne les six briques devant toi.", "Touche-les dans l’ordre annoncé.", "Ferme les yeux pendant qu’une brique change de place.", "Retrouve ce qui a changé et explique ton indice."],
    variation: "Ajoute deux changements à repérer avant de rouvrir les yeux.",
    question: "Qu’est-ce qui t’a aidé à remarquer le changement ?"
  },
  {
    title: "Mémoire flash",
    category: "Perception",
    group: ["solo", "duo", "small"],
    context: ["table", "calm"],
    duration: "short",
    goals: ["memory", "attention", "spatial"],
    source: "LEGO Foundation Six Bricks Booklet",
    summary: "Un modèle est observé quelques secondes, puis reconstruit de mémoire.",
    materials: ["Six briques par participant", "Un modèle de six briques"],
    steps: ["Montre un petit modèle pendant cinq secondes.", "Cache-le.", "Les participants reconstruisent sans parler.", "Comparez avec le modèle et verbalisez les stratégies."],
    variation: "Réduis le temps d’observation ou ajoute une rotation du modèle.",
    question: "As-tu mémorisé les couleurs, les positions ou la forme globale ?"
  },
  {
    title: "Passeport des couleurs",
    category: "Littératie",
    group: ["solo", "duo", "small"],
    context: ["table", "transition"],
    duration: "short",
    goals: ["language", "attention", "memory"],
    source: "Formation Six Bricks - ressources fournies",
    summary: "Chaque brique reçoit un mot, une action ou une qualité, puis le groupe crée une phrase courte.",
    materials: ["Six briques"],
    steps: ["Choisis une brique.", "Associe-lui un mot ou une action.", "Place-la dans une phrase.", "Ajoute une autre brique pour enrichir la phrase."],
    variation: "Demande une phrase avec deux contraintes: lieu et émotion.",
    question: "Quel mot rend ta phrase plus précise ?"
  },
  {
    title: "Tour silencieuse",
    category: "Socio-émotionnel",
    group: ["duo", "small", "class"],
    context: ["table", "floor", "calm"],
    duration: "medium",
    goals: ["cooperation", "attention", "executive"],
    source: "Care for Education Resources",
    summary: "Le groupe construit une tour commune sans parler, en observant les intentions des autres.",
    materials: ["Six briques par équipe"],
    steps: ["Posez toutes les briques au centre.", "Construisez ensemble sans parole.", "Chaque personne ajoute une brique à son tour.", "Débriefez sur les gestes qui ont aidé."],
    variation: "Ajoute une contrainte: la tour doit tenir avec une seule brique au sol.",
    question: "Comment as-tu compris ce que l’autre voulait faire ?"
  },
  {
    title: "Brique interdite",
    category: "Groupes et jeux",
    group: ["solo", "duo", "small", "class"],
    context: ["table", "floor"],
    duration: "short",
    goals: ["executive", "attention", "memory"],
    source: "IET Six Bricks Workshop Cards",
    summary: "Une couleur devient interdite pendant une construction, ce qui oblige à inhiber un automatisme.",
    materials: ["Six briques par participant"],
    steps: ["Annonce une brique interdite.", "Donne une construction simple à réaliser.", "Les participants construisent sans utiliser cette brique.", "Change la brique interdite au tour suivant."],
    variation: "La brique interdite change pendant l’activité.",
    question: "Qu’as-tu fait pour ne pas prendre la brique interdite ?"
  },
  {
    title: "Pont solide",
    category: "Physique",
    group: ["solo", "duo", "small"],
    context: ["table", "floor"],
    duration: "medium",
    goals: ["spatial", "executive", "cooperation"],
    source: "Rhodes University Teacher Handbook",
    summary: "Les participants cherchent plusieurs façons de construire un pont qui laisse passer une main ou une autre brique.",
    materials: ["Six briques par participant"],
    steps: ["Construis deux appuis.", "Ajoute une brique pour former un pont.", "Teste le passage d’une main ou d’une brique.", "Améliore la stabilité sans ajouter de matériel."],
    variation: "Construis le pont le plus haut possible qui reste stable.",
    question: "Qu’est-ce qui rend ton pont solide ?"
  },
  {
    title: "Animal express",
    category: "Littératie",
    group: ["solo", "duo", "small"],
    context: ["table", "floor"],
    duration: "short",
    goals: ["language", "creativity", "spatial"],
    source: "Six Bricks Education Idea Centre",
    summary: "Une construction rapide devient un animal à décrire, nommer et faire agir.",
    materials: ["Six briques par participant"],
    steps: ["Construis un animal en deux minutes.", "Donne-lui un nom.", "Présente deux détails de son corps.", "Fais-lui réaliser une action courte."],
    variation: "Un partenaire devine l’animal uniquement avec la description orale.",
    question: "Quel détail permet de reconnaître ton animal ?"
  },
  {
    title: "Chef d’orchestre",
    category: "Mouvement",
    group: ["small", "class"],
    context: ["floor", "outside", "transition"],
    duration: "short",
    goals: ["movement", "attention", "cooperation"],
    source: "IET Six Bricks Workshop Cards",
    summary: "Chaque couleur correspond à un geste; le meneur compose une mini-chorégraphie.",
    materials: ["Six briques visibles"],
    steps: ["Attribue un geste à chaque brique.", "Le meneur montre une suite de deux briques.", "Le groupe réalise les gestes dans l’ordre.", "Allonge la suite progressivement."],
    variation: "Les participants réalisent la suite en silence ou en miroir.",
    question: "Comment gardes-tu l’ordre des gestes en mémoire ?"
  },
  {
    title: "Code secret sans couleur",
    category: "Littératie",
    group: ["duo", "small"],
    context: ["table", "calm"],
    duration: "medium",
    goals: ["language", "memory", "executive"],
    source: "Formation Six Bricks - ressources fournies",
    summary: "Un participant décrit les briques sans nommer les couleurs; l’autre doit retrouver l’ordre.",
    materials: ["Six briques par duo"],
    steps: ["Crée une suite de briques.", "Décris chaque brique avec un objet ou une image, sans dire sa couleur.", "Le partenaire reconstruit la suite.", "Comparez puis inversez les rôles."],
    variation: "Ajoute des indices indirects: fruit, paysage, météo, émotion.",
    question: "Quel indice était le plus clair sans nommer la couleur ?"
  },
  {
    title: "Ligne 5 départ-arrivée",
    category: "Plateaux & feuilles",
    group: ["solo", "duo", "small"],
    context: ["table", "floor"],
    duration: "medium",
    goals: ["math", "spatial", "executive"],
    source: "Plateau avec 5 lignes",
    summary: "Les briques deviennent des pions à déplacer sur un plateau à lignes pour travailler repérage et consignes.",
    materials: ["Plateau avec cinq lignes", "Six briques"],
    steps: ["Place une brique au départ.", "Annonce une consigne: avance, recule, change de ligne.", "Le participant déplace la brique.", "Ajoute une deuxième brique à coordonner."],
    variation: "Le participant doit annoncer la position finale avant de déplacer.",
    question: "Comment sais-tu où se trouve ta brique sur le plateau ?"
  },
  {
    title: "Croise la ligne",
    category: "B-Line",
    group: ["solo", "duo", "small", "class"],
    context: ["floor"],
    duration: "medium",
    goals: ["movement", "attention", "spatial"],
    source: "Crossing the B-Line Mat",
    summary: "Les participants traversent une ligne avec une contrainte corporelle associée aux briques.",
    materials: ["Plateau ligné ou ligne au sol", "Six briques"],
    steps: ["Place une brique d’un côté de la ligne.", "Traverse la ligne selon la consigne.", "Dépose ou récupère la brique de l’autre côté.", "Change de main, de sens ou de rythme."],
    variation: "Ajoute une consigne de croisement: main droite vers côté gauche.",
    question: "Quelle partie du corps t’a aidé à garder ton équilibre ?"
  },
  {
    title: "Doubles consignes",
    category: "Perception",
    group: ["solo", "duo", "small"],
    context: ["table", "calm"],
    duration: "medium",
    goals: ["executive", "memory", "attention"],
    source: "Activités niveau 2",
    summary: "Deux consignes sont données avant d’agir, pour travailler mémoire de travail et inhibition.",
    materials: ["Six briques par participant"],
    steps: ["Annonce deux actions avant le départ.", "Les participants attendent le signal.", "Ils réalisent les deux actions dans l’ordre.", "Ils reformulent ce qu’ils ont fait."],
    variation: "Demande de faire la deuxième consigne avant la première.",
    question: "Quelle stratégie t’aide à garder deux consignes en tête ?"
  },
  {
    title: "Suite grandissante",
    category: "Numératie",
    group: ["solo", "duo", "small"],
    context: ["table"],
    duration: "medium",
    goals: ["math", "memory", "executive"],
    source: "LEGO Foundation Six Bricks Booklet",
    summary: "Une suite logique commence avec deux briques puis grandit avec une règle à découvrir.",
    materials: ["Six briques par participant"],
    steps: ["Pose deux briques selon une règle simple.", "Ajoute une troisième brique.", "Le participant devine la règle.", "Il continue la suite et explique son choix."],
    variation: "Utilise deux critères: couleur et orientation.",
    question: "Quelle règle as-tu repérée ?"
  },
  {
    title: "Nombre caché",
    category: "Numératie",
    group: ["solo", "duo", "small"],
    context: ["table", "calm"],
    duration: "short",
    goals: ["math", "attention", "memory"],
    source: "Care for Education Resources",
    summary: "Les briques représentent des quantités à composer, décomposer et retrouver.",
    materials: ["Six briques"],
    steps: ["Choisis un nombre cible entre 2 et 12.", "Chaque brique vaut 1 ou 2 selon son orientation.", "Construis le nombre cible.", "Explique ta décomposition."],
    variation: "Un partenaire cache une partie; l’autre trouve ce qui manque.",
    question: "De combien as-tu besoin pour compléter le nombre ?"
  },
  {
    title: "Relais précision",
    category: "Mouvement",
    group: ["small", "class"],
    context: ["floor", "outside"],
    duration: "medium",
    goals: ["movement", "cooperation", "attention"],
    source: "Six Bricks Education Idea Centre",
    summary: "Une brique circule dans l’équipe avec une contrainte de trajet ou de geste.",
    materials: ["Une ou plusieurs briques", "Un espace dégagé"],
    steps: ["Formez une ligne ou un cercle.", "Passez la brique sans la faire tomber.", "Ajoutez une façon de transmettre: au-dessus, dessous, derrière.", "Chronométrez sans perdre la précision."],
    variation: "Ajoute deux briques qui circulent en sens inverse.",
    question: "Comment aller vite tout en restant précis ?"
  },
  {
    title: "Émotions en hauteur",
    category: "Socio-émotionnel",
    group: ["solo", "small", "class"],
    context: ["table", "calm"],
    duration: "short",
    goals: ["emotion", "language", "creativity"],
    source: "Care for Education Resources",
    summary: "La hauteur d’une construction sert à représenter l’intensité d’une émotion.",
    materials: ["Six briques par participant"],
    steps: ["Choisis une émotion.", "Construis une tour plus ou moins haute selon son intensité.", "Présente ta construction.", "Propose une action pour réguler cette émotion."],
    variation: "Construis deux tours: avant et après une solution.",
    question: "Qu’est-ce qui peut faire baisser ou monter cette émotion ?"
  },
  {
    title: "Itinéraire verbal",
    category: "Littératie",
    group: ["duo", "small"],
    context: ["table", "floor"],
    duration: "medium",
    goals: ["language", "spatial", "cooperation"],
    source: "Rhodes University Teacher Handbook",
    summary: "Un participant guide oralement un trajet de briques que l’autre réalise.",
    materials: ["Six briques par duo"],
    steps: ["Place une brique de départ.", "Le guide donne une direction à la fois.", "Le constructeur déplace ou pose les briques.", "Comparez le trajet attendu et le trajet réalisé."],
    variation: "Le guide ne peut utiliser que trois mots spatiaux choisis à l’avance.",
    question: "Quelle consigne spatiale était la plus utile ?"
  },
  {
    title: "Ombres et silhouettes",
    category: "Perception",
    group: ["solo", "duo", "small"],
    context: ["table"],
    duration: "medium",
    goals: ["spatial", "attention", "creativity"],
    source: "Formation Six Bricks - ressources fournies",
    summary: "Une construction est observée comme silhouette, puis reproduite ou transformée.",
    materials: ["Six briques", "Une lampe ou une feuille claire"],
    steps: ["Construis une petite forme.", "Observe son ombre ou son contour.", "Un partenaire reconstruit à partir de la silhouette.", "Comparez les différences."],
    variation: "Tourne la construction avant de montrer l’ombre.",
    question: "Quels détails disparaissent quand on ne voit que la silhouette ?"
  },
  {
    title: "Algorithme humain",
    category: "Numératie",
    group: ["small", "class"],
    context: ["floor", "table"],
    duration: "medium",
    goals: ["math", "executive", "cooperation"],
    source: "IET Six Bricks Workshop Cards",
    summary: "Les participants créent une suite répétitive avec leurs briques et leurs gestes.",
    materials: ["Six briques par participant"],
    steps: ["Choisissez un motif de deux ou trois éléments.", "Associez une action à chaque élément.", "Réalisez la suite ensemble.", "Un participant trouve l’élément suivant."],
    variation: "Insère une erreur volontaire à détecter.",
    question: "Comment sais-tu ce qui vient après ?"
  },
  {
    title: "Marché des consignes",
    category: "Groupes et jeux",
    group: ["small", "class"],
    context: ["floor", "outside"],
    duration: "long",
    goals: ["language", "cooperation", "executive"],
    source: "Six Bricks Education Idea Centre",
    summary: "Les participants échangent des briques contre des consignes de construction ou de mouvement.",
    materials: ["Six briques par équipe", "Cartes consignes imaginées par l’adulte"],
    steps: ["Chaque équipe reçoit six briques.", "Une brique donnée permet de tirer une consigne.", "L’équipe réalise la consigne.", "Elle récupère la brique si elle explique sa stratégie."],
    variation: "Les équipes inventent les consignes pour les autres.",
    question: "Quelle consigne était la plus claire à comprendre ?"
  },
  {
    title: "Baromètre d’énergie",
    category: "Socio-émotionnel",
    group: ["solo", "small", "class"],
    context: ["transition", "calm"],
    duration: "short",
    goals: ["emotion", "attention", "language"],
    source: "Formation Six Bricks - ressources fournies",
    summary: "Les briques servent à indiquer son niveau d’énergie et à choisir une action adaptée.",
    materials: ["Six briques par participant"],
    steps: ["Pose une à six briques selon ton énergie.", "Explique ton choix avec un mot ou une phrase.", "Choisis une action: bouger, respirer, écouter, demander de l’aide.", "Reviens au baromètre après l’activité."],
    variation: "Le groupe construit un baromètre collectif.",
    question: "De quoi as-tu besoin pour être prêt à apprendre ?"
  },
  {
    title: "Coordonnées colorées",
    category: "Plateaux & feuilles",
    group: ["solo", "duo", "small"],
    context: ["table"],
    duration: "medium",
    goals: ["math", "spatial", "attention"],
    source: "Plateau avec 5 lignes",
    summary: "Les briques sont placées sur un quadrillage simple à partir de coordonnées orales.",
    materials: ["Feuille quadrillée ou plateau", "Six briques"],
    steps: ["Nomme une ligne et une colonne.", "Place la brique au bon endroit.", "Donne une nouvelle coordonnée.", "Lis ensuite tout le parcours dans l’ordre."],
    variation: "Un participant invente un parcours que l’autre doit coder.",
    question: "Quelle information te dit la ligne et laquelle te dit la colonne ?"
  },
  {
    title: "Plateau mouvement: météo des gestes",
    category: "Plateaux & feuilles",
    group: ["solo", "small", "class"],
    context: ["floor"],
    duration: "medium",
    goals: ["movement", "attention", "memory"],
    source: "Plateau de mouvement",
    summary: "Chaque zone du plateau de mouvement déclenche un geste lié à une météo imaginaire.",
    materials: ["Plateau de mouvement", "Six briques"],
    steps: ["Associe chaque zone à un geste: soleil, pluie, vent, neige.", "Déplace une brique sur le plateau.", "Réalise le geste correspondant.", "Mémorise une suite de trois zones."],
    variation: "Le groupe effectue les gestes en rythme ou en silence.",
    question: "Quel geste était le plus facile à mémoriser ?"
  },
  {
    title: "Construction miroir",
    category: "Perception",
    group: ["duo", "small"],
    context: ["table", "calm"],
    duration: "medium",
    goals: ["spatial", "attention", "cooperation"],
    source: "Care for Education Resources",
    summary: "Deux participants construisent une forme symétrique chacun de son côté.",
    materials: ["Six briques par duo", "Une ligne centrale imaginaire ou tracée"],
    steps: ["Trace ou imagine une ligne au centre.", "Un participant place une brique.", "L’autre place la brique miroir.", "Continuez jusqu’à obtenir une forme symétrique."],
    variation: "Travaillez sans parler, seulement avec le regard.",
    question: "Comment reconnais-tu la position miroir ?"
  },
  {
    title: "Histoire tactile",
    category: "Littératie",
    group: ["solo", "duo", "small"],
    context: ["calm", "table"],
    duration: "medium",
    goals: ["language", "creativity", "memory"],
    source: "LEGO Foundation Six Bricks Booklet",
    summary: "Une histoire courte est inventée à partir de l’ordre de briques tirées au toucher.",
    materials: ["Six briques", "Un sac opaque"],
    steps: ["Tire une brique sans regarder.", "Commence une phrase avec un personnage ou une action.", "Tire une deuxième brique et continue.", "Replace les briques dans l’ordre de l’histoire."],
    variation: "Raconte l’histoire sans nommer les couleurs, avec des objets qui les évoquent.",
    question: "Quel élément de ton histoire t’a aidé à garder l’ordre ?"
  },
  {
    title: "Estimation hauteur",
    category: "Numératie",
    group: ["solo", "duo", "small"],
    context: ["table"],
    duration: "short",
    goals: ["math", "spatial", "language"],
    source: "Rhodes University Teacher Handbook",
    summary: "Avant de construire, les participants estiment la hauteur possible d’une tour.",
    materials: ["Six briques par participant", "Objets de comparaison"],
    steps: ["Annonce combien de briques seront utilisées.", "Estime la hauteur avec les mains.", "Construis puis compare.", "Utilise des mots: plus haut, moins haut, égal."],
    variation: "Cherche la tour la plus basse avec les six briques.",
    question: "Ton estimation était-elle proche du résultat ?"
  },
  {
    title: "Vote en briques",
    category: "Socio-émotionnel",
    group: ["small", "class"],
    context: ["table", "floor", "transition"],
    duration: "short",
    goals: ["cooperation", "language", "emotion"],
    source: "Six Bricks Education Idea Centre",
    summary: "Les briques servent à voter, argumenter et prendre une décision de groupe.",
    materials: ["Une brique par participant ou par choix"],
    steps: ["Propose deux ou trois options.", "Chaque participant pose une brique pour voter.", "Le groupe observe le résultat.", "Quelques participants expliquent leur choix."],
    variation: "Vote secret: les briques sont cachées puis révélées ensemble.",
    question: "Comment peut-on décider quand tout le monde n’a pas choisi pareil ?"
  },
  {
    title: "Main droite, main gauche",
    category: "Physique",
    group: ["solo", "duo", "small"],
    context: ["table", "floor"],
    duration: "short",
    goals: ["movement", "attention", "executive"],
    source: "Care for Education Resources",
    summary: "Les participants manipulent les briques selon des consignes de main et de côté.",
    materials: ["Six briques par participant"],
    steps: ["Place trois briques à gauche et trois à droite.", "Annonce une main et une action.", "Le participant exécute sans changer de main.", "Ajoute une consigne croisée."],
    variation: "Inverse les consignes: droite veut dire gauche et gauche veut dire droite.",
    question: "Qu’est-ce qui devient difficile quand les consignes se croisent ?"
  },
  {
    title: "Défi 30 secondes",
    category: "Groupes et jeux",
    group: ["solo", "duo", "small", "class"],
    context: ["table", "floor", "outside"],
    duration: "short",
    goals: ["creativity", "executive", "attention"],
    source: "IET Six Bricks Workshop Cards",
    summary: "Une contrainte courte déclenche une construction rapide puis une explication.",
    materials: ["Six briques par participant", "Un minuteur"],
    steps: ["Annonce une contrainte: le plus haut, le plus plat, le plus drôle.", "Lance trente secondes.", "Les participants construisent.", "Chacun donne un titre à sa création."],
    variation: "Ajoute une contrainte surprise à mi-temps.",
    question: "Quelle décision as-tu prise en premier ?"
  },
  {
    title: "Chuchote et construis",
    category: "Littératie",
    group: ["small", "class"],
    context: ["table", "floor", "calm"],
    duration: "medium",
    goals: ["language", "memory", "cooperation"],
    source: "Six Bricks Education Idea Centre",
    summary: "Une consigne circule de personne en personne avant d’être construite.",
    materials: ["Six briques par équipe"],
    steps: ["L’adulte chuchote une consigne au premier participant.", "La consigne circule jusqu’au dernier.", "Le dernier construit ce qu’il a compris.", "Le groupe compare avec la consigne initiale."],
    variation: "La consigne contient une position, une couleur et une action.",
    question: "Qu’est-ce qui a changé pendant la transmission ?"
  },
  {
    title: "Fractions rapides",
    category: "Numératie",
    group: ["solo", "duo", "small"],
    context: ["table"],
    duration: "medium",
    goals: ["math", "language", "executive"],
    source: "Advanced Mathematics",
    summary: "Les six briques servent à représenter des parts simples d’un ensemble.",
    materials: ["Six briques par participant"],
    steps: ["Construis un ensemble de six briques.", "Montre la moitié, le tiers ou deux tiers.", "Sépare les briques en groupes.", "Explique la fraction avec une phrase."],
    variation: "Un partenaire donne une fraction, l’autre la construit.",
    question: "Comment sais-tu qu’une part est égale à une autre ?"
  },
  {
    title: "Relance créative: objet impossible",
    category: "Groupes et jeux",
    group: ["solo", "duo", "small"],
    context: ["table", "floor"],
    duration: "medium",
    goals: ["creativity", "language", "executive"],
    source: "Six Bricks Education Idea Centre",
    summary: "Les participants transforment les briques en objet imaginaire avec une fonction précise.",
    materials: ["Six briques par participant"],
    steps: ["Annonce une fonction: transporter, protéger, éclairer, calmer.", "Construis un objet qui remplit cette fonction.", "Présente son nom et son usage.", "Le groupe propose une amélioration."],
    variation: "L’objet doit avoir deux fonctions contradictoires.",
    question: "À quoi sert ton objet et comment le voit-on ?"
  },
  {
    title: "Classement libre",
    category: "Perception",
    group: ["solo", "duo", "small"],
    context: ["table", "calm"],
    duration: "short",
    goals: ["attention", "language", "executive"],
    source: "Care for Education Resources",
    summary: "Les participants classent les briques selon un critère personnel puis le font deviner.",
    materials: ["Six briques par participant"],
    steps: ["Classe les briques selon une règle secrète.", "Un partenaire observe.", "Il propose la règle.", "Explique ton critère et cherchez une autre façon de classer."],
    variation: "Classe avec deux critères successifs.",
    question: "Combien de règles différentes peut-on inventer avec les mêmes briques ?"
  },
  {
    title: "Le message du plateau",
    category: "Plateaux & feuilles",
    group: ["duo", "small"],
    context: ["table"],
    duration: "medium",
    goals: ["language", "spatial", "memory"],
    source: "sixbricks_ok_print",
    summary: "Un plateau imprimé devient un support pour coder un message avec les positions des briques.",
    materials: ["Plateau imprimé", "Six briques"],
    steps: ["Associe une zone du plateau à un mot ou une action.", "Place les briques pour créer un message.", "Un partenaire lit le message.", "Change une brique et observe le nouveau sens."],
    variation: "Utilise seulement trois briques pour créer un message plus ambigu.",
    question: "Comment la position change-t-elle le message ?"
  },
  {
    title: "Derrière le dos",
    category: "Perception",
    group: ["solo", "duo", "small"],
    context: ["table", "calm"],
    duration: "short",
    goals: ["memory", "spatial", "attention"],
    source: "Activités dos à dos",
    summary: "Un participant construit hors de vue, l’autre reproduit à partir d’une description orale.",
    materials: ["Deux jeux de six briques", "Un écran ou deux participants dos à dos"],
    steps: ["Le premier construit une petite forme.", "Il décrit sans montrer.", "Le second reproduit.", "Les deux comparent et ajustent le vocabulaire."],
    variation: "Interdiction de nommer les couleurs pendant la description.",
    question: "Quelle précision manquait pour réussir du premier coup ?"
  },
  {
    title: "Écoute et fais pareil",
    category: "Groupes et jeux",
    group: ["solo", "duo", "small", "class"],
    context: ["table", "floor"],
    duration: "short",
    goals: ["attention", "memory", "movement"],
    source: "Activités écoute et fais pareil",
    summary: "Les participants réalisent une action exactement après l’avoir entendue, sans modèle visuel.",
    materials: ["Six briques par participant"],
    steps: ["Annonce une action claire.", "Les participants écoutent sans toucher.", "Au signal, ils réalisent l’action.", "Ajoute une deuxième puis une troisième action."],
    variation: "Le groupe doit attendre cinq secondes avant d’agir.",
    question: "Qu’as-tu répété dans ta tête avant de bouger ?"
  },
  {
    title: "Parcours des contraires",
    category: "Mouvement",
    group: ["solo", "small", "class"],
    context: ["floor", "outside"],
    duration: "medium",
    goals: ["movement", "executive", "attention"],
    source: "Basic Movements",
    summary: "Chaque consigne a son contraire: haut/bas, vite/lent, près/loin, devant/derrière.",
    materials: ["Six briques", "Un espace dégagé"],
    steps: ["Associe une brique à une consigne de mouvement.", "Le participant réalise l’action.", "Annonce le mode contraire.", "Il doit faire l’inverse de ce qui est montré."],
    variation: "Change le code en cours de route.",
    question: "Comment ton corps sait-il qu’il doit faire l’inverse ?"
  },
  {
    title: "Partenaires opposés",
    category: "Mouvement",
    group: ["duo", "small", "class"],
    context: ["floor"],
    duration: "medium",
    goals: ["movement", "cooperation", "spatial"],
    source: "Basic Movements - Partners",
    summary: "Deux partenaires placés face à face réalisent des gestes complémentaires avec leurs briques.",
    materials: ["Six briques par duo"],
    steps: ["Placez-vous de chaque côté d’une ligne.", "Un partenaire pose une brique.", "L’autre réalise le geste miroir ou opposé.", "Changez les rôles après trois actions."],
    variation: "Ajoute un rythme commun: lent, rapide, stop.",
    question: "Qu’est-ce qui change quand on est face à face ?"
  },
  {
    title: "Addition en équipe",
    category: "Numératie",
    group: ["duo", "small", "class"],
    context: ["table", "floor"],
    duration: "medium",
    goals: ["math", "cooperation", "language"],
    source: "Basic Mathematics",
    summary: "Les briques de plusieurs participants sont regroupées pour composer des additions visibles.",
    materials: ["Six briques par participant"],
    steps: ["Chaque participant construit une petite quantité.", "Réunissez deux quantités.", "Annoncez l’addition.", "Représentez le total avec une nouvelle organisation."],
    variation: "Un participant cache une partie et les autres trouvent le complément.",
    question: "Comment vois-tu le total sans recompter chaque brique ?"
  },
  {
    title: "Mémoire horizontale verticale",
    category: "B-Line",
    group: ["solo", "duo", "small"],
    context: ["floor", "table"],
    duration: "medium",
    goals: ["memory", "spatial", "attention"],
    source: "Spatial & Working Mem",
    summary: "Les participants mémorisent une suite de déplacements horizontaux et verticaux.",
    materials: ["Plateau ligné ou quadrillage", "Six briques"],
    steps: ["Place une brique au centre.", "Annonce deux déplacements.", "Le participant mémorise puis déplace.", "Ajoute une troisième direction."],
    variation: "Le participant annonce le trajet inverse après l’avoir réalisé.",
    question: "Comment gardes-tu les directions dans l’ordre ?"
  },
  {
    title: "Mini-atelier d’entraide",
    category: "Socio-émotionnel",
    group: ["small", "class"],
    context: ["table", "floor"],
    duration: "long",
    goals: ["cooperation", "emotion", "language"],
    source: "Rhodes University Teacher Handbook",
    summary: "Chaque équipe reçoit une difficulté volontaire et doit demander ou offrir de l’aide.",
    materials: ["Six briques par équipe"],
    steps: ["Donne une mission différente à chaque équipe.", "Ajoute une contrainte qui bloque un peu.", "Les équipes peuvent demander une aide précise.", "Terminez par une phrase de gratitude ou de conseil."],
    variation: "Une équipe devient conseillère et ne touche pas les briques.",
    question: "Quelle demande d’aide était la plus efficace ?"
  },
  {
    title: "Rythme des briques",
    category: "Mouvement",
    group: ["solo", "small", "class"],
    context: ["floor", "transition"],
    duration: "short",
    goals: ["movement", "memory", "attention"],
    source: "LEGO Foundation Six Bricks Booklet",
    summary: "Les briques deviennent une partition de gestes ou de sons corporels.",
    materials: ["Six briques visibles"],
    steps: ["Associe une brique à un son ou un geste.", "Compose une suite de trois briques.", "Le groupe réalise la partition.", "Un participant ajoute une brique à la suite."],
    variation: "Réalise la partition en canon: un groupe commence après l’autre.",
    question: "Qu’est-ce qui t’aide à rester dans le rythme ?"
  },
  {
    title: "Mission attention stop",
    category: "Groupes et jeux",
    group: ["solo", "small", "class"],
    context: ["floor", "outside", "transition"],
    duration: "short",
    goals: ["attention", "executive", "movement"],
    source: "IET Six Bricks Workshop Cards",
    summary: "Un signal couleur déclenche l’action, un autre impose l’arrêt immédiat.",
    materials: ["Six briques visibles"],
    steps: ["Choisis une brique action et une brique stop.", "Montre une brique à la fois.", "Le groupe agit ou s’arrête selon le code.", "Change le code sans prévenir après quelques tours."],
    variation: "Ajoute une brique qui signifie ralentir au lieu de stopper.",
    question: "Comment ton corps réussit-il à s’arrêter vite ?"
  },
  {
    title: "Portrait en six briques",
    category: "Littératie",
    group: ["solo", "duo", "small"],
    context: ["table", "calm"],
    duration: "medium",
    goals: ["language", "emotion", "creativity"],
    source: "Six Bricks Education Idea Centre",
    summary: "Chaque participant construit un portrait symbolique de lui-même ou d’un personnage.",
    materials: ["Six briques par participant"],
    steps: ["Choisis une brique pour une qualité.", "Ajoute une brique pour une envie ou une force.", "Construis un portrait symbolique.", "Présente seulement ce que tu veux partager."],
    variation: "Construis le portrait d’un personnage d’histoire.",
    question: "Quelle brique représente le mieux ton idée ?"
  },
  {
    title: "Le plan du village",
    category: "Plateaux & feuilles",
    group: ["duo", "small", "class"],
    context: ["table", "floor"],
    duration: "long",
    goals: ["spatial", "language", "cooperation"],
    source: "Care for Education Templates",
    summary: "Un plateau ou une feuille devient un plan sur lequel placer bâtiments, chemins et repères.",
    materials: ["Feuille ou plateau", "Six briques par équipe"],
    steps: ["Décidez ce que représente chaque brique.", "Placez les bâtiments sur le plan.", "Tracez ou montrez un chemin.", "Présentez le village avec des mots spatiaux."],
    variation: "Un visiteur demande un trajet; l’équipe doit le guider.",
    question: "Quels repères aident à se déplacer dans votre village ?"
  },
  {
    title: "Transformation minute",
    category: "Physique",
    group: ["solo", "duo", "small"],
    context: ["table", "floor"],
    duration: "short",
    goals: ["creativity", "executive", "spatial"],
    source: "six-bricks-workshop-cards",
    summary: "Une construction doit changer de fonction sans être entièrement démontée.",
    materials: ["Six briques par participant"],
    steps: ["Construis un objet simple.", "Annonce une nouvelle fonction.", "Transforme l’objet en gardant au moins trois briques en place.", "Explique ce qui a changé."],
    variation: "Le partenaire choisit la nouvelle fonction.",
    question: "Qu’as-tu gardé et qu’as-tu transformé ?"
  }
];

const categoryColors = {
  "Socio-émotionnel": "var(--pink)",
  Physique: "var(--orange)",
  "Groupes et jeux": "var(--green)",
  Numératie: "var(--yellow-dark)",
  Littératie: "var(--blue)",
  Perception: "var(--cyan)",
  Mouvement: "var(--red)",
  "B-Line": "var(--blue)",
  "Plateaux & feuilles": "var(--green)",
  "Play Box & communauté": "var(--pink)"
};

const supportLabels = {
  free: "sans plateau",
  lined: "plateau ligné",
  movement: "plateau mouvement",
  backToBack: "dos à dos",
  listenCopy: "écoute et fais pareil"
};

const audienceLabels = {
  early: "petite enfance",
  children: "enfants",
  teens: "ados",
  adults: "adultes",
  seniors: "seniors"
};

const levelLabels = {
  easy: "facile",
  medium: "intermédiaire",
  challenge: "défi"
};

const formatLabels = {
  solo: "solo",
  duo: "duo",
  small: "petit groupe",
  class: "classe / groupe"
};

const i18n = {
  fr: {
    kicker: "La première appli française Six Bricks",
    heroText: "Des activités Six Bricks à l’infini, avec ou sans plateau, pour stimuler le langage, les mathématiques, la mémoire, l’attention, la motricité, la créativité, les fonctions exécutives, les compétences sociales et le plaisir d’apprendre, de la petite enfance jusqu’au grand âge.",
    creatorCredit: "Créée par Chloé Schmidt-Dhonneur, docteure en sciences de l’éducation et formatrice Six Bricks.",
    factoryKicker: "Aujourd’hui dans la Factory",
    factoryActivities: "activités",
    factoryModes: "modes",
    factoryColors: "couleurs",
    factoryChipActivities: "Activités",
    factoryChipStories: "Histoires",
    factoryChipMats: "Plateaux",
    factoryNote: "Une idée claire, prête à lire ou à animer, en quelques clics.",
    tabFinder: "Trouver une idée",
    tabGenerator: "Créer une activité",
    tabStories: "Créer une histoire",
    audience: "Public",
    allAudiences: "Tous les publics",
    earlyChildhood: "Petite enfance",
    children: "Enfants",
    teens: "Ados",
    adults: "Adultes",
    seniors: "Seniors",
    format: "Format",
    support: "Support",
    easyLevel: "Facile",
    mediumLevel: "Intermédiaire",
    challengeLevel: "Défi",
    soloFormat: "Solo",
    duoFormat: "Duo",
    classGroup: "Classe / groupe",
    category: "Catégorie",
    all: "Toutes",
    participants: "Participants",
    any: "Peu importe",
    solo: "1 participant",
    duo: "2 participants",
    smallGroup: "Petit groupe",
    wholeClass: "Grand groupe",
    context: "Contexte",
    table: "À table",
    floor: "Au sol",
    outside: "Dehors",
    calm: "Retour au calme",
    duration: "Durée",
    goal: "Objectif",
    attention: "Attention",
    memory: "Mémoire",
    language: "Langage",
    math: "Maths",
    movement: "Motricité",
    cooperation: "Coopération",
    emotions: "Émotions",
    spatial: "Repérage spatial",
    executive: "Fonctions exécutives",
    findActivity: "Trouver une activité",
    surprise: "Surprends-moi",
    available: "activités disponibles avec ces filtres",
    materials: "Matériel",
    steps: "Déroulé",
    variation: "Variante",
    question: "Question à poser",
    previous: "Précédente",
    anotherIdea: "Autre idée",
    favoritesTitle: "Favoris",
    favoritesText: "",
    activityFamily: "Famille d’activité",
    freeActivity: "Sans plateau",
    linedBoard: "Plateau ligné",
    movementBoard: "Plateau de mouvements",
    backToBack: "Dos à dos",
    listenCopy: "Écoute et fais pareil",
    level: "Niveau",
    generateActivity: "Créer une nouvelle activité",
    activitySheet: "Fiche d’activité",
    storyLevel: "Niveau d’histoire",
    storyLevel1: "Niveau 1 - couleurs nommées",
    storyLevel2: "Niveau 2 - couleurs sous-entendues",
    colorCount: "Nombre de couleurs",
    storyTheme: "Thème de l’histoire",
    themeRandom: "Libre / aléatoire",
    themeMarket: "Marché",
    themeForest: "Forêt",
    themeBeach: "Plage",
    themeFarm: "Ferme",
    themeBirthday: "Anniversaire",
    themeSchool: "École",
    themeGarden: "Jardin",
    themeFair: "Fête foraine",
    themeChristmas: "Noël",
    themeAnimals: "Animaux",
    themeKitchen: "Cuisine",
    themeTravel: "Voyage",
    themeSpace: "Espace",
    themePirates: "Pirates",
    themeMagic: "Magie",
    correctionOption: "Correction",
    hideCorrection: "Masquer au départ",
    showCorrection: "Afficher au départ",
    showCorrectionButton: "Afficher la correction",
    hideCorrectionButton: "Masquer la correction",
    correctionTitle: "Correction",
    colorMode: "Couleurs",
    withColors: "Citer les couleurs",
    withoutColors: "Sans citer les couleurs",
    theme: "Thème",
    adventure: "Aventure",
    nature: "Nature",
    mystery: "Mystère",
    generateStory: "Créer une nouvelle histoire",
    storyGenerator: "Fiche histoire",
    buildPrompts: "Invitations à construire",
    proposals: "Consignes orales prêtes à dire",
  },
  en: {
    kicker: "The first French Six Bricks app",
    heroText: "Infinite Six Bricks activities, with or without mats, to stimulate language, mathematics, memory, attention, motor skills, creativity, executive functions, social skills and the joy of learning, from early childhood to older age.",
    creatorCredit: "Created by Chloé Schmidt-Dhonneur, Doctor of Education Sciences and Six Bricks trainer.",
    factoryKicker: "Today in the Factory",
    factoryActivities: "activities",
    factoryModes: "modes",
    factoryColors: "colours",
    factoryChipActivities: "Activities",
    factoryChipStories: "Stories",
    factoryChipMats: "Mats",
    factoryNote: "A clear idea, ready to read or facilitate, in a few clicks.",
    tabFinder: "Find an idea",
    tabGenerator: "Create an activity",
    tabStories: "Create a story",
    audience: "Audience",
    allAudiences: "All audiences",
    earlyChildhood: "Early childhood",
    children: "Children",
    teens: "Teens",
    adults: "Adults",
    seniors: "Seniors",
    format: "Format",
    support: "Support",
    easyLevel: "Easy",
    mediumLevel: "Intermediate",
    challengeLevel: "Challenge",
    soloFormat: "Solo",
    duoFormat: "Pair",
    classGroup: "Class / group",
    category: "Category",
    all: "All",
    participants: "Participants",
    any: "Any",
    solo: "1 participant",
    duo: "2 participants",
    smallGroup: "Small group",
    wholeClass: "Large group",
    context: "Context",
    table: "At a table",
    floor: "On the floor",
    outside: "Outside",
    calm: "Calm down",
    duration: "Duration",
    goal: "Goal",
    attention: "Attention",
    memory: "Memory",
    language: "Language",
    math: "Maths",
    movement: "Motor skills",
    cooperation: "Cooperation",
    emotions: "Emotions",
    spatial: "Spatial awareness",
    executive: "Executive functions",
    findActivity: "Find an activity",
    surprise: "Surprise me",
    available: "activities available with these filters",
    materials: "Materials",
    steps: "Steps",
    variation: "Variation",
    question: "Question to ask",
    previous: "Previous",
    anotherIdea: "Another idea",
    favoritesTitle: "Favorites",
    favoritesText: "",
    activityFamily: "Activity family",
    freeActivity: "No mat",
    linedBoard: "Lined mat",
    movementBoard: "Movement mat",
    backToBack: "Back to back",
    listenCopy: "Listen and copy",
    level: "Level",
    generateActivity: "Create a new activity",
    activitySheet: "Activity sheet",
    storyLevel: "Story level",
    storyLevel1: "Level 1 - named colours",
    storyLevel2: "Level 2 - implied colours",
    colorCount: "Number of colours",
    storyTheme: "Story theme",
    themeRandom: "Free / random",
    themeMarket: "Market",
    themeForest: "Forest",
    themeBeach: "Beach",
    themeFarm: "Farm",
    themeBirthday: "Birthday",
    themeSchool: "School",
    themeGarden: "Garden",
    themeFair: "Funfair",
    themeChristmas: "Christmas",
    themeAnimals: "Animals",
    themeKitchen: "Kitchen",
    themeTravel: "Travel",
    themeSpace: "Space",
    themePirates: "Pirates",
    themeMagic: "Magic",
    correctionOption: "Correction",
    hideCorrection: "Hidden first",
    showCorrection: "Shown first",
    showCorrectionButton: "Show correction",
    hideCorrectionButton: "Hide correction",
    correctionTitle: "Correction",
    colorMode: "Colours",
    withColors: "Name the colours",
    withoutColors: "Do not name colours",
    theme: "Theme",
    adventure: "Adventure",
    nature: "Nature",
    mystery: "Mystery",
    generateStory: "Create a new story",
    storyGenerator: "Story sheet",
    buildPrompts: "Build prompts",
    proposals: "Quick proposals",
  },
  zh: {
    kicker: "首款法语 Six Bricks 应用",
    heroText: "无限生成 Six Bricks 活动，可使用或不使用垫板，用来促进语言、数学、记忆、注意力、动作能力、创造力、执行功能、社交能力以及学习的乐趣，适合从幼儿到高龄人群。",
    creatorCredit: "由 Chloé Schmidt-Dhonneur 创建。教育科学博士，Six Bricks 培训师。",
    factoryKicker: "今日 Factory",
    factoryActivities: "活动",
    factoryModes: "模式",
    factoryColors: "颜色",
    factoryChipActivities: "活动",
    factoryChipStories: "故事",
    factoryChipMats: "垫板",
    factoryNote: "几次点击即可获得清晰、可朗读或可带领的想法。",
    tabFinder: "寻找活动",
    tabGenerator: "创建活动",
    tabStories: "创建故事",
    audience: "对象",
    allAudiences: "所有对象",
    earlyChildhood: "幼儿",
    children: "儿童",
    teens: "青少年",
    adults: "成人",
    seniors: "长者",
    format: "形式",
    support: "材料支持",
    easyLevel: "简单",
    mediumLevel: "中等",
    challengeLevel: "挑战",
    soloFormat: "单人",
    duoFormat: "双人",
    classGroup: "班级 / 小组",
    category: "类别",
    all: "全部",
    participants: "参与人数",
    any: "不限",
    solo: "1名参与者",
    duo: "2名参与者",
    smallGroup: "小组",
    wholeClass: "大组",
    context: "情境",
    table: "桌面",
    floor: "地面",
    outside: "户外",
    calm: "安静时间",
    duration: "时长",
    goal: "目标",
    attention: "注意力",
    memory: "记忆",
    language: "语言",
    math: "数学",
    movement: "动作能力",
    cooperation: "合作",
    emotions: "情绪",
    spatial: "空间感",
    executive: "执行功能",
    findActivity: "寻找活动",
    surprise: "随机推荐",
    available: "个活动符合筛选",
    materials: "材料",
    steps: "步骤",
    variation: "变化玩法",
    question: "提问",
    previous: "上一个",
    anotherIdea: "另一个想法",
    favoritesTitle: "收藏",
    favoritesText: "",
    activityFamily: "活动类型",
    freeActivity: "不用垫板",
    linedBoard: "线条垫板",
    movementBoard: "动作垫板",
    backToBack: "背靠背",
    listenCopy: "听一听，照着做",
    level: "级别",
    generateActivity: "创建新活动",
    activitySheet: "活动卡",
    storyLevel: "故事级别",
    storyLevel1: "级别 1 - 明确说出颜色",
    storyLevel2: "级别 2 - 暗示颜色",
    colorCount: "颜色数量",
    storyTheme: "故事主题",
    themeRandom: "自由 / 随机",
    themeMarket: "市场",
    themeForest: "森林",
    themeBeach: "海滩",
    themeFarm: "农场",
    themeBirthday: "生日",
    themeSchool: "学校",
    themeGarden: "花园",
    themeFair: "游乐会",
    themeChristmas: "圣诞",
    themeAnimals: "动物",
    themeKitchen: "厨房",
    themeTravel: "旅行",
    themeSpace: "太空",
    themePirates: "海盗",
    themeMagic: "魔法",
    correctionOption: "答案",
    hideCorrection: "先隐藏",
    showCorrection: "先显示",
    showCorrectionButton: "显示答案",
    hideCorrectionButton: "隐藏答案",
    correctionTitle: "答案",
    colorMode: "颜色",
    withColors: "说出颜色",
    withoutColors: "不说颜色",
    theme: "主题",
    adventure: "冒险",
    nature: "自然",
    mystery: "谜题",
    generateStory: "创建新故事",
    storyGenerator: "故事卡",
    buildPrompts: "搭建提示",
    proposals: "可直接说的口令",
  }
};

const state = {
  matches: activities,
  currentIndex: 0,
  favorites: [],
  lang: "fr",
  storyHistory: [],
  activityHistory: []
};

const filtersForm = document.querySelector("#filters");
const matchCount = document.querySelector("#matchCount");
const activityCard = document.querySelector("#activityCard");
const activityCategory = document.querySelector("#activityCategory");
const activityTitle = document.querySelector("#activityTitle");
const activityTags = document.querySelector("#activityTags");
const activitySummary = document.querySelector("#activitySummary");
const materialsList = document.querySelector("#materialsList");
const stepsList = document.querySelector("#stepsList");
const variationText = document.querySelector("#variationText");
const questionText = document.querySelector("#questionText");
const favoriteButton = document.querySelector("#favoriteButton");
const favoritesList = document.querySelector("#favoritesList");
const languageSelect = document.querySelector("#languageSelect");
const generatedActivityTitle = document.querySelector("#generatedActivityTitle");
const generatedActivityCard = document.querySelector("#generatedActivityCard");
const generatedActivityTags = document.querySelector("#generatedActivityTags");
const generatedActivitySummary = document.querySelector("#generatedActivitySummary");
const generatedMaterials = document.querySelector("#generatedMaterials");
const generatedSteps = document.querySelector("#generatedSteps");
const generatedVariation = document.querySelector("#generatedVariation");
const generatedQuestion = document.querySelector("#generatedQuestion");
const generatedProposals = document.querySelector("#generatedProposals");
const storyTitle = document.querySelector("#storyTitle");
const storyMeta = document.querySelector("#storyMeta");
const storyRule = document.querySelector("#storyRule");
const storyText = document.querySelector("#storyText");
const storyCorrectionWrap = document.querySelector("#storyCorrectionWrap");
const storyCorrection = document.querySelector("#storyCorrection");
const toggleCorrection = document.querySelector("#toggleCorrection");

document.querySelectorAll(".tab-button").forEach((button) => {
  button.addEventListener("click", () => {
    document.querySelectorAll(".tab-button").forEach((tab) => tab.classList.remove("is-active"));
    document.querySelectorAll(".tab-panel").forEach((panel) => panel.classList.add("is-hidden"));
    button.classList.add("is-active");
    document.querySelector(`#${button.dataset.tab}Panel`).classList.remove("is-hidden");
  });
});

languageSelect.addEventListener("change", () => {
  state.lang = languageSelect.value;
  document.documentElement.lang = state.lang === "zh" ? "zh" : state.lang;
  translateStaticUi();
  renderGeneratedActivity();
  renderStory();
});

filtersForm.addEventListener("submit", (event) => {
  event.preventDefault();
  applyFilters();
});

filtersForm.addEventListener("change", applyFilters);

document.querySelector("#surpriseButton").addEventListener("click", () => {
  state.matches = [...activities];
  state.currentIndex = randomIndex(state.matches);
  syncMatchCount();
  renderActivity();
});

document.querySelector("#generatorForm").addEventListener("submit", (event) => {
  event.preventDefault();
  renderGeneratedActivity();
});

document.querySelector("#storyForm").addEventListener("submit", (event) => {
  event.preventDefault();
  renderStory();
});

toggleCorrection.addEventListener("click", () => {
  const isHidden = storyCorrectionWrap.classList.toggle("is-hidden");
  storyCorrectionWrap.hidden = isHidden;
  toggleCorrection.textContent = isHidden
    ? i18n[state.lang].showCorrectionButton
    : i18n[state.lang].hideCorrectionButton;
});


document.querySelector("#nextButton").addEventListener("click", () => {
  if (!state.matches.length) return;
  state.currentIndex = (state.currentIndex + 1) % state.matches.length;
  renderActivity();
});

document.querySelector("#previousButton").addEventListener("click", () => {
  if (!state.matches.length) return;
  state.currentIndex = (state.currentIndex - 1 + state.matches.length) % state.matches.length;
  renderActivity();
});

favoriteButton.addEventListener("click", () => {
  const activity = state.matches[state.currentIndex];
  if (!activity) return;
  const exists = state.favorites.some((item) => item.title === activity.title);
  state.favorites = exists
    ? state.favorites.filter((item) => item.title !== activity.title)
    : [...state.favorites, activity];
  renderFavorites();
  renderActivity();
});

function applyFilters() {
  const data = new FormData(filtersForm);
  const criteria = {
    audience: data.get("audience"),
    level: data.get("level"),
    format: data.get("format"),
    support: data.get("support"),
    duration: data.get("duration")
  };

  state.matches = activities.filter((activity) => {
    const facets = getActivityFacets(activity);
    return (
      matchesList(criteria.audience, facets.audiences) &&
      matchesList(criteria.level, facets.levels) &&
      matchesList(criteria.format, facets.formats) &&
      matchesList(criteria.support, facets.supports) &&
      matchesValue(criteria.duration, activity.duration)
    );
  });

  state.currentIndex = 0;
  syncMatchCount();
  renderActivity();
}

function matchesValue(filter, value) {
  return filter === "all" || filter === value;
}

function matchesList(filter, list) {
  return filter === "all" || list.includes(filter);
}

function getActivityFacets(activity) {
  return {
    audiences: inferAudiences(activity),
    levels: inferLevels(activity),
    formats: activity.group,
    supports: inferSupports(activity)
  };
}

function inferAudiences(activity) {
  const audiences = new Set(["children"]);
  const isShort = activity.duration === "short";
  const isCalmOrTable = activity.context.some((context) => ["table", "calm", "transition"].includes(context));
  const isPhysicalOutside = activity.context.includes("outside") || activity.category === "Physique";
  const isComplex = activity.duration === "long" || activity.goals.some((goal) => ["executive", "spatial", "math"].includes(goal));

  if (isShort && !isComplex && !isPhysicalOutside) audiences.add("early");
  if (isComplex || activity.duration !== "short" || activity.goals.some((goal) => ["cooperation", "executive", "memory", "spatial", "math", "creativity"].includes(goal))) audiences.add("teens");
  if (activity.goals.some((goal) => ["language", "memory", "attention", "executive", "cooperation", "spatial"].includes(goal))) audiences.add("adults");
  if (isCalmOrTable && activity.goals.some((goal) => ["language", "memory", "attention", "spatial", "emotion", "cooperation"].includes(goal))) audiences.add("seniors");
  if (activity.category === "Perception" || activity.category === "Littératie") {
    audiences.add("early");
    audiences.add("seniors");
  }

  return [...audiences];
}

function inferLevels(activity) {
  if (activity.duration === "long" || activity.goals.includes("executive") || activity.category === "B-Line") {
    return ["challenge"];
  }
  if (activity.duration === "short" && !activity.goals.includes("math") && !activity.goals.includes("spatial")) {
    return ["easy"];
  }
  return ["medium"];
}

function inferSupports(activity) {
  const text = `${activity.title} ${activity.category} ${activity.summary} ${activity.materials.join(" ")} ${activity.steps.join(" ")}`.toLowerCase();
  const supports = new Set();

  if (activity.category === "B-Line" || /b-line|ligne|ligné|grille|plateau/.test(text)) supports.add("lined");
  if (activity.category === "Mouvement" || /mouvement|parcours|saute|marche|déplacement|avance|recule/.test(text)) supports.add("movement");
  if (/dos à dos|décrit|décrire|reconstruire|modèle secret/.test(text)) supports.add("backToBack");
  if (/écoute|copie|reproduit|reproduire|imite|imiter|chef|meneur/.test(text)) supports.add("listenCopy");
  if (!supports.size || /sans plateau|six briques par participant|six briques par enfant|une brique/.test(text)) supports.add("free");

  return [...supports];
}

function syncMatchCount() {
  matchCount.textContent = state.matches.length.toString();
}

function renderActivity() {
  const activity = state.matches[state.currentIndex];

  if (!activity) {
    activityCard.style.setProperty("--accent", "var(--red)");
    activityCategory.textContent = "Aucune correspondance";
    activityTitle.textContent = "Essaie d’élargir un filtre";
    activityTags.innerHTML = "";
    activitySummary.textContent = "Aucune activité ne correspond exactement à cette combinaison. Essaie un public plus large, un autre support ou une durée plus souple.";
    materialsList.innerHTML = "";
    stepsList.innerHTML = "";
    variationText.textContent = "";
    questionText.textContent = "";
    favoriteButton.textContent = "☆";
    return;
  }

  activityCard.style.setProperty("--accent", categoryColors[activity.category] || "var(--red)");
  const facets = getActivityFacets(activity);
  activityCategory.textContent = activity.category;
  activityTitle.textContent = activity.title;
  activitySummary.textContent = activity.summary;
  materialsList.innerHTML = activity.materials.map((item) => `<li>${item}</li>`).join("");
  stepsList.innerHTML = activity.steps.map((item) => `<li>${item}</li>`).join("");
  variationText.textContent = activity.variation;
  questionText.textContent = activity.question;
  activityTags.innerHTML = [
    audienceLabel(facets.audiences),
    levelLabel(facets.levels),
    formatLabel(facets.formats),
    supportLabel(facets.supports),
    durationLabel(activity.duration),
    goalLabel(activity.goals)
  ].filter(Boolean).map((tag) => `<span>${tag}</span>`).join("");

  const isFavorite = state.favorites.some((item) => item.title === activity.title);
  favoriteButton.textContent = isFavorite ? "★" : "☆";
}

function renderFavorites() {
  if (!state.favorites.length) {
    favoritesList.textContent = "Aucune activité gardée pour l’instant.";
    return;
  }

  favoritesList.innerHTML = state.favorites
    .map((activity) => `<button type="button" data-title="${activity.title}">${activity.title}<span>${activity.category}</span></button>`)
    .join("");

  favoritesList.querySelectorAll("button").forEach((button) => {
    button.addEventListener("click", () => {
      const title = button.dataset.title;
      const index = activities.findIndex((activity) => activity.title === title);
      state.matches = [activities[index]];
      state.currentIndex = 0;
      syncMatchCount();
      renderActivity();
    });
  });
}

function durationLabel(duration) {
  return {
    short: "3 à 5 min",
    medium: "5 à 10 min",
    long: "10 à 15 min"
  }[duration];
}

function audienceLabel(audiences) {
  return audiences.map((audience) => audienceLabels[audience]).join(" / ");
}

function levelLabel(levels) {
  return levels.map((level) => levelLabels[level]).join(" / ");
}

function formatLabel(formats) {
  return formats.map((format) => formatLabels[format]).join(" / ");
}

function supportLabel(supports) {
  return supports.map((support) => supportLabels[support]).join(" / ");
}

function goalLabel(goals) {
  const labels = {
    attention: "attention",
    memory: "mémoire",
    language: "langage",
    math: "maths",
    movement: "motricité",
    cooperation: "coopération",
    emotion: "émotions",
    spatial: "repérage spatial",
    executive: "fonctions exécutives",
    creativity: "créativité"
  };
  return goals.map((goal) => labels[goal] || goal).join(" / ");
}

function randomIndex(items) {
  return Math.floor(Math.random() * items.length);
}

function translateStaticUi() {
  const dictionary = i18n[state.lang];
  document.querySelectorAll("[data-i18n]").forEach((node) => {
    const value = dictionary[node.dataset.i18n];
    if (value) node.textContent = value;
  });
}

function getFormValues(formId) {
  return Object.fromEntries(new FormData(document.querySelector(formId)).entries());
}

function renderGeneratedActivity() {
  const values = getFormValues("#generatorForm");
  const activity = createInfiniteActivity(values, state.lang);
  const familyAccents = {
    free: "var(--red)",
    lined: "var(--blue)",
    movement: "var(--green)",
    backToBack: "var(--pink)",
    listenCopy: "var(--orange)"
  };
  generatedActivityCard.style.setProperty("--accent", familyAccents[values.family] || "var(--orange)");
  generatedActivityTitle.textContent = activity.title;
  generatedActivityTags.innerHTML = activity.tags.map((tag) => `<span>${tag}</span>`).join("");
  generatedActivitySummary.textContent = activity.summary;
  generatedMaterials.innerHTML = activity.materials.map((item) => `<li>${item}</li>`).join("");
  generatedSteps.innerHTML = activity.steps.map((item) => `<li>${item}</li>`).join("");
  generatedVariation.textContent = activity.variation;
  generatedQuestion.textContent = activity.question;
  generatedProposals.innerHTML = activity.proposals.map((item) => `<li>${item}</li>`).join("");
}

function renderStory() {
  const values = getFormValues("#storyForm");
  const story = createStory(values, state.lang);
  storyTitle.textContent = story.title;
  storyMeta.innerHTML = story.tags.map((tag) => `<span>${tag}</span>`).join("");
  storyRule.textContent = story.instruction;
  storyText.innerHTML = story.paragraphs.map((paragraph) => `<p>${paragraph}</p>`).join("");
  storyCorrection.textContent = story.correction;
  const correctionVisible = story.showCorrection;
  storyCorrectionWrap.classList.toggle("is-hidden", !correctionVisible);
  storyCorrectionWrap.hidden = !correctionVisible;
  toggleCorrection.textContent = correctionVisible
    ? i18n[state.lang].hideCorrectionButton
    : i18n[state.lang].showCorrectionButton;
}

const storyEngine = {
  narrativeStructures: [
    "quête en trois étapes", "message reçu trop tard", "carte à compléter", "rencontre inattendue", "objet disparu", "parcours à réparer", "promesse à tenir", "règle secrète à découvrir", "rituel d’ouverture", "conversation avec un lieu",
    "départ avant le lever du jour", "choix entre deux chemins", "problème à résoudre ensemble", "mission confiée par un personnage", "collection à organiser", "passage d’une frontière", "défi chronométré", "récit circulaire", "souvenir à reconstruire", "enquête sensorielle",
    "voyage minuscule", "exploration sonore", "corps transformé en outil", "album vivant", "message codé", "suite logique à compléter", "construction interdite à modifier", "objet qui change de rôle", "itinéraire à inventer", "secret transmis en chuchotant",
    "défi coopératif", "question sans réponse unique", "scène à rejouer", "ordre bouleversé", "épreuve de patience", "mission de classement", "construction progressive", "passage du réel à l’imaginaire", "observation puis action", "histoire à trous",
    "défi de perspective", "suite à inverser", "chorégraphie de briques", "portrait à composer", "carte météo émotionnelle", "recette impossible", "chemin de retour", "sauvetage symbolique", "objet témoin", "petit conseil à préparer",
    "comparaison entre deux versions", "mission de transmission", "déplacement sur quadrillage", "enchaînement de choix", "écoute avant action"
  ],
  worlds: [
    "un phare au bord de l’océan", "une bibliothèque de quartier", "un potager après la pluie", "une station spatiale calme", "un musée fermé au public", "un train qui traverse les montagnes", "une serre tropicale", "une cuisine de cantine", "un atelier de marionnettes", "un marché aux épices",
    "un terrain de sport désert", "une cour d’école sous le vent", "une salle de spectacle", "un sentier en forêt", "une plage à marée basse", "un vieux moulin", "une maison de retraite animée", "une classe dehors", "un laboratoire de curiosités", "un observatoire d’étoiles",
    "un jardin partagé", "une péniche sur un canal", "un château de sable", "un refuge de montagne", "une ruelle peinte", "un aquarium imaginaire", "une fête de village", "un théâtre d’ombres", "un tapis volant", "un volcan endormi",
    "une île minuscule", "un verger en automne", "une grotte lumineuse", "un studio de radio", "un cabinet de curiosités", "une gare silencieuse", "un atelier de réparation de vélos", "un kiosque à musique", "un campement sous les étoiles", "une mare pleine de reflets",
    "une ville sous la neige", "un désert de dunes douces", "un pont suspendu", "un grenier rempli de boîtes", "une serre de papillons", "un chantier miniature", "un jardin japonais", "une école de danse", "un port de pêche", "un laboratoire de sons",
    "une station météo", "un planétarium", "une forêt de bambous", "un café associatif", "une route de campagne", "une cabane dans les arbres", "un atelier de calligraphie", "une rivière peu profonde", "un carnaval", "une ferme pédagogique",
    "un palais des miroirs", "une imprimerie", "une patinoire imaginaire", "un champ de tournesols", "un village de montagne", "un centre de loisirs", "une salle de motricité", "un verger nocturne", "une école sous-marine", "une horloge géante",
    "une réserve naturelle", "un jardin de sculptures", "un bus transformé en classe", "un quai de métro", "une forêt après l’orage", "un festival de lanternes", "un atelier de poterie", "une piste cyclable", "une maison aux fenêtres ouvertes", "un monde dans une goutte d’eau",
    "une librairie ambulante", "un plateau de jeu géant", "un labyrinthe de coussins", "une salle d’attente transformée", "une clairière musicale", "un village de papiers pliés", "une école de détectives", "un bal intergénérationnel", "une planète minuscule", "un cinéma sans écran",
    "un bassin aux nénuphars", "une réserve de graines", "un escalier qui raconte", "un atelier de robots doux", "une forêt de sons", "un marché nocturne", "un sentier de galets", "une maison de vacances", "un parcours de santé", "un studio photo",
    "une cabane de lecture", "une salle de yoga", "une prairie de printemps", "un refuge pour idées calmes", "une cité de nuages", "un espace calme au sol", "une salle-musée", "un jardin de mémoire", "un atelier de cartes postales", "un cercle de parole"
  ],
  missionTypes: [
    "retrouver l’ordre d’un chemin", "fabriquer un code commun", "composer un paysage en six éléments", "transmettre un message sans le répéter", "réparer une suite logique", "inventer un parcours à suivre", "classer des éléments selon une règle", "associer un geste à chaque brique", "raconter une scène en manipulant", "mémoriser une séquence avant d’agir",
    "reproduire un modèle invisible", "changer de point de vue", "choisir la meilleure stratégie", "passer d’un rythme lent à rapide", "construire une réponse collective", "transformer une erreur en nouvelle règle", "anticiper la prochaine étape", "décrire sans montrer", "écouter sans interrompre", "résoudre une contrainte spatiale",
    "comparer deux constructions", "préparer une consigne pour un partenaire", "créer une trace de l’histoire", "inventer un symbole par brique", "faire une suite croissante", "faire une suite décroissante", "lier mouvement et langage", "retenir deux actions avant de bouger", "adapter la consigne au groupe", "décider ensemble d’un ordre",
    "présenter une construction en disant ce que chaque brique représente", "organiser une mini-exposition", "retrouver l’élément manquant", "construire une réponse émotionnelle", "placer les briques selon un repère", "réaliser un déplacement précis annoncé par l’adulte", "appliquer une règle d’inhibition avec un signal stop", "passer du concret à l’abstrait", "coder une histoire avec les briques", "créer une version silencieuse",
    "suivre une consigne inversée", "associer une quantité à une action", "décomposer un problème", "préparer un relais", "créer un chemin de retour"
  ],
  manipulations: [
    "empiler", "aligner", "déplacer sans soulever", "soulever puis reposer", "retourner picots vers le bas", "tourner d’un quart de tour vers la droite", "cacher sous la main", "placer derrière le dos", "passer à un partenaire", "pincer avec deux doigts",
    "utiliser la main non dominante", "déplacer avec le coude", "déplacer avec une règle", "poser sur une feuille", "placer dans un coin", "mettre au-dessus", "mettre au-dessous", "faire une tour stable", "faire un pont", "composer un motif",
    "changer deux briques de place", "retirer une brique puis la remettre", "toucher sans déplacer", "nommer avant de bouger", "bouger en silence", "attendre un signal", "exécuter en miroir", "exécuter à l’envers", "faire une ligne brisée", "former un cercle",
    "créer une symétrie", "placer sur un repère corporel", "faire glisser sur une ligne", "construire les yeux mi-clos", "pointer avant de prendre", "choisir une brique témoin"
  ],
  objectives: [
    "attention soutenue", "attention sélective", "inhibition", "flexibilité cognitive", "mémoire de travail", "mémoire auditive", "mémoire séquentielle", "repérage spatial", "latéralisation", "langage oral",
    "vocabulaire précis", "syntaxe de consigne", "narration", "coopération", "tour de rôle", "planification", "résolution de problème", "créativité", "motricité fine", "coordination bimanuelle",
    "orientation sur support", "comparaison", "classement", "dénombrement", "estimation", "raisonnement logique", "gestion de l’impulsivité", "écoute active", "prise de décision", "confiance en soi",
    "régulation émotionnelle", "perspective sociale", "compréhension orale", "organisation visuo-spatiale", "vitesse de traitement"
  ],
  openings: [
    "Ce matin-là", "Au moment où tout semblait calme", "Juste avant de commencer", "Pendant une courte promenade", "Sans prévenir", "Après un bruit très doux", "Au milieu de l’activité", "Quand le groupe s’est installé", "Au premier regard", "En ouvrant grand les oreilles",
    "À la fin d’une chanson", "Pendant que chacun respirait doucement", "Au signal discret", "Quand la lumière a changé", "Avant même de parler"
  ],
  connectors: [
    "mais une règle nouvelle a tout changé", "et personne ne pouvait avancer sans organiser les briques", "quand une consigne mystérieuse est apparue", "mais il fallait d’abord écouter jusqu’au bout", "et le groupe devait se mettre d’accord", "pendant qu’un ordre invisible se dessinait", "alors une mission courte a commencé", "mais chaque brique avait un rôle différent"
  ],
  relaunches: [
    "Rejouer l’histoire avec un meneur différent.", "Changer le rythme de lecture et observer ce que cela modifie.", "Demander à un binôme de créer une fin alternative.", "Refaire la mission en silence.", "Ajouter un déplacement du corps entre deux briques.", "Remplacer une brique par une consigne inventée par le groupe.", "Faire raconter la scène par une seule personne puis par tout le groupe.", "Transformer la mission en défi coopératif."
  ],
  titleNouns: ["chemin", "signal", "passage", "message", "portrait", "jardin", "voyage", "plan", "accord", "rythme", "pont", "cercle", "secret", "trajet", "écho"],
  colorObjects: {
    rouge: ["une fraise", "un coquelicot", "un camion de pompier", "un foulard", "une pomme", "un tampon", "un toit", "une enveloppe"],
    orange: ["un abricot", "une citrouille", "un coucher de soleil", "un cône de chantier", "une mandarine", "un poisson", "une tuile", "un ballon"],
    jaune: ["un soleil", "un poussin", "un épi de maïs", "une étoile", "un imperméable", "une banane", "un bouton d’or", "une lampe"],
    vert: ["une feuille", "une grenouille", "un sapin", "un concombre", "une prairie", "un arrosoir", "un lézard", "une porte de jardin"],
    "bleu clair": ["une goutte d’eau", "un ciel du matin", "un coussin léger", "une plume", "un lac calme", "une bulle", "une fenêtre ouverte", "un ruban"],
    "bleu foncé": ["une nuit", "un encrier", "un manteau", "un bateau au loin", "une grotte", "un cahier", "une vague profonde", "un rideau"]
  }
};

const goalFamilies = {
  attention: ["attention soutenue", "attention sélective", "écoute active", "gestion de l’impulsivité"],
  memory: ["mémoire de travail", "mémoire auditive", "mémoire séquentielle", "organisation visuo-spatiale"],
  language: ["langage oral", "vocabulaire précis", "syntaxe de consigne", "narration", "compréhension orale"],
  math: ["dénombrement", "comparaison", "classement", "estimation", "raisonnement logique"],
  movement: ["motricité fine", "coordination bimanuelle", "latéralisation", "orientation sur support"],
  cooperation: ["coopération", "tour de rôle", "prise de décision", "perspective sociale", "confiance en soi"]
};

function createRandomId() {
  return `${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 8)}`;
}

function rememberRecent(key, entry) {
  state[key] = [entry, ...(state[key] || [])].slice(0, 10);
}

function pickFresh(items, history, key) {
  const recent = new Set((history || []).map((entry) => entry[key]));
  const pool = items.filter((item) => !recent.has(item));
  return pick(pool.length ? pool : items);
}

function capitalize(text) {
  return text.charAt(0).toUpperCase() + text.slice(1);
}

const activityColors = ["rouge", "orange", "jaune", "vert", "bleu clair", "bleu foncé"];

const familyLabels = {
  free: "sans plateau",
  lined: "plateau ligné",
  movement: "plateau de mouvements",
  backToBack: "dos à dos",
  listenCopy: "écoute et fais pareil"
};

const familyGroups = {
  free: "solo, duo ou groupe",
  lined: "solo ou petit groupe",
  movement: "solo ou groupe",
  backToBack: "2 participants minimum",
  listenCopy: "2 participants ou petit groupe"
};

const goalLabels = {
  attention: "attention",
  memory: "mémoire",
  language: "langage",
  math: "mathématiques",
  movement: "motricité",
  cooperation: "coopération",
  emotion: "émotions",
  spatial: "repérage spatial",
  executive: "fonctions exécutives"
};

const activityTemplates = {
  free: [
    {
      id: "code-secret-couleurs",
      title: "Le code secret des couleurs",
      allowedGoals: ["attention", "memory", "language"],
      groupType: familyGroups.free,
      summary: "Les participants écoutent des consignes courtes et doivent toucher ou déplacer uniquement les briques demandées.",
      materials: ["6 briques Six Bricks par participant", "Une table ou un tapis", "Un espace calme pour poser les briques"],
      steps: ({ c }) => [
        "Place les six briques en ligne devant chaque participant, picots vers le haut.",
        `Dis: "Quand je nomme ${c[0]}, tu touches ${c[0]} avec un doigt, puis tu remets tes mains sur la table."`,
        `Dis: "Quand je nomme ${c[1]}, tu places ${c[1]} juste à droite de ${c[0]}."`,
        "Ajoute un signal d’arrêt: \"Quand je dis stop, tu gardes les mains posées et tu ne touches aucune brique.\"",
        `Fais une petite série avec ${c[0]}, ${c[1]} et stop, puis ajoute ${c[2]} si le participant réussit.`,
        "Arrête l’activité après trois réussites de suite ou au bout de cinq minutes."
      ],
      prompts: ({ c }) => [`${c[0]}: touche la brique, puis mains sur la table.`, `${c[1]}: place-la à droite de ${c[0]}.`, "Stop: mains posées, aucune brique ne bouge."],
      variation: ({ c }) => `Facile: utiliser seulement ${c[0]} et ${c[1]}. Difficile: ajouter ${c[2]} avec une consigne d’attente avant de toucher.`,
      question: "Qu’est-ce qui t’a aidé à écouter la bonne consigne ?"
    },
    {
      id: "deux-consignes-tete",
      title: "Deux consignes dans la tête",
      allowedGoals: ["memory", "attention", "language"],
      groupType: familyGroups.free,
      summary: "Les participants écoutent deux actions, attendent le signal, puis les réalisent dans l’ordre.",
      materials: ["6 briques Six Bricks par participant", "Une table ou un tapis"],
      steps: ({ c }) => [
        "Place les six briques en ligne devant le participant.",
        "Explique: \"Tu écoutes toute la consigne. Tu bouges seulement quand je dis maintenant.\"",
        `Dis: "Prends ${c[0]} avec la main droite, puis pose ${c[1]} au-dessus de ${c[0]}. Maintenant."`,
        "Laisse le participant réaliser les deux actions sans répéter.",
        `Deuxième série: "Place ${c[2]} à gauche de la petite tour, puis touche ${c[3]} sans le déplacer. Maintenant."`,
        "Arrête après trois séries ou dès que la mémorisation devient trop coûteuse."
      ],
      prompts: ({ c }) => [`Prends ${c[0]}, puis pose ${c[1]} dessus. Maintenant.`, `Place ${c[2]} à gauche, puis touche ${c[3]}. Maintenant.`, "Répète la consigne dans ta tête avant de commencer."],
      variation: () => "Facile: répéter la consigne deux fois. Difficile: donner trois actions avant le mot maintenant.",
      question: "Comment as-tu gardé les consignes dans ta tête ?"
    }
  ],
  lined: [
    {
      id: "defi-positions-lignes",
      title: "Le défi des positions",
      allowedGoals: ["spatial", "attention", "math", "memory"],
      groupType: familyGroups.lined,
      summary: "Les participants déplacent les briques sur un plateau ligné en suivant des positions simples et vérifiables.",
      materials: ["6 briques Six Bricks par participant", "Un plateau ligné ou une feuille avec cinq lignes", "Un repère départ sur la ligne du bas"],
      steps: ({ c }) => [
        "Place les six briques sur la ligne du bas du plateau.",
        `Dis: "Place ${c[0]} sur la deuxième ligne, au milieu."`,
        `Dis: "Place ${c[1]} sur la ligne juste au-dessus de ${c[0]}."`,
        `Dis: "Place ${c[2]} sur la même ligne que ${c[0]}, à gauche."`,
        `Dis: "Replace ${c[1]} sur la ligne du bas."`,
        "Vérifie avec le participant: chaque brique est-elle sur la bonne ligne ?"
      ],
      prompts: ({ c }) => [`${c[0]} va sur la deuxième ligne, au milieu.`, `${c[1]} va une ligne au-dessus.`, `${c[2]} va à gauche de ${c[0]}.`],
      variation: () => "Facile: utiliser trois lignes seulement. Difficile: annoncer deux déplacements avant de laisser agir.",
      question: "Quel repère t’a aidé à trouver la bonne ligne ?"
    },
    {
      id: "suite-a-reconstruire",
      title: "La suite à reconstruire",
      allowedGoals: ["math", "memory", "spatial"],
      groupType: familyGroups.lined,
      summary: "Les participants mémorisent une suite de couleurs puis la reconstruisent sur le plateau.",
      materials: ["6 briques Six Bricks par participant", "Un plateau ligné", "Une feuille ou un cache facultatif"],
      steps: ({ c }) => [
        `Montre trois briques dans cet ordre: ${c[0]}, ${c[1]}, ${c[2]}.`,
        "Cache le modèle après cinq secondes.",
        "Le participant reconstruit la suite sur la ligne du milieu, de gauche à droite.",
        `Ajoute une quatrième brique: ${c[3]}. Montre la nouvelle suite cinq secondes, puis cache-la.`,
        "Le participant reconstruit la suite complète sur la ligne du haut.",
        "Comparez avec le modèle et corrigez ensemble si besoin."
      ],
      prompts: ({ c }) => [`Regarde l’ordre: ${c[0]}, ${c[1]}, ${c[2]}.`, "Reconstruis de gauche à droite.", `Ajoute maintenant ${c[3]} à la fin de la suite.`],
      variation: () => "Facile: laisser le modèle visible. Difficile: demander de reconstruire la suite à l’envers.",
      question: "Qu’as-tu regardé en premier pour retenir l’ordre ?"
    }
  ],
  movement: [
    {
      id: "parcours-briques",
      title: "Le parcours des briques",
      allowedGoals: ["movement", "attention", "executive"],
      groupType: familyGroups.movement,
      summary: "Les participants associent une brique à un déplacement simple, puis reviennent au point de départ.",
      materials: ["6 briques Six Bricks par participant", "Un plateau de mouvements ou trois repères au sol", "Un espace dégagé"],
      steps: ({ c }) => [
        "Place les briques au repère de départ.",
        `Dis: "Prends ${c[0]}, marche jusqu’au repère action, pose la brique, puis reviens au départ."`,
        `Dis: "Prends ${c[1]}, marche jusqu’au repère action, tape une fois dans les mains, pose la brique, puis reviens."`,
        `Dis: "Prends ${c[2]}, avance lentement, pose la brique à côté de ${c[0]}, puis reviens."`,
        "Après chaque retour, le participant attend la consigne suivante mains libres.",
        "Arrête quand trois déplacements sont réalisés sans courir ni oublier le retour."
      ],
      prompts: ({ c }) => [`${c[0]}: marche, pose, reviens.`, `${c[1]}: marche, tape, pose, reviens.`, `${c[2]}: avance lentement, pose à côté de ${c[0]}.`],
      variation: () => "Facile: marcher sans geste ajouté. Difficile: annoncer deux briques avant le départ.",
      question: "Comment as-tu su quand revenir au départ ?"
    },
    {
      id: "stop-ou-encore",
      title: "Stop ou encore",
      allowedGoals: ["attention", "movement", "executive"],
      groupType: familyGroups.movement,
      summary: "Les participants bougent avec une brique, puis s’arrêtent immédiatement au signal.",
      materials: ["6 briques Six Bricks par participant", "Un espace au sol", "Un signal sonore ou visuel facultatif"],
      steps: ({ c }) => [
        `Le participant tient ${c[0]} dans la main, sans serrer fort.`,
        "Explique: \"Quand je dis avance, tu fais trois pas. Quand je dis stop, tu t’arrêtes et tu gardes la brique immobile.\"",
        "Fais trois essais lents avec avance et stop.",
        `Ajoute ${c[1]}: "Quand je nomme ${c[1]}, tu poses ${c[0]} au sol devant tes pieds."`,
        "Recommence avec deux ou trois signaux seulement.",
        "Arrête si le participant fatigue ou si l’arrêt devient moins précis."
      ],
      prompts: ({ c }) => ["Avance: trois pas.", "Stop: le corps et la brique ne bougent plus.", `${c[1]}: pose ${c[0]} devant tes pieds.`],
      variation: () => "Facile: garder seulement avance et stop. Difficile: varier le rythme des signaux.",
      question: "À quel moment as-tu dû freiner ton geste ?"
    }
  ],
  backToBack: [
    {
      id: "defi-dos-a-dos",
      title: "Défi dos à dos",
      allowedGoals: ["language", "memory", "cooperation", "spatial"],
      groupType: familyGroups.backToBack,
      summary: "Deux participants construisent le même modèle sans se voir: l’un décrit, l’autre construit.",
      materials: ["6 briques Six Bricks par participant", "Deux participants assis dos à dos ou séparés par un écran", "Une surface plane pour chacun"],
      steps: ({ c }) => [
        "Les deux participants prennent les mêmes six briques. Ils ne doivent pas voir la construction de l’autre.",
        "Le participant 1 construit le modèle en même temps qu’il décrit chaque étape. Le participant 2 écoute et construit.",
        `Consigne 1: "Place la brique ${c[0]} devant toi, horizontalement, picots vers le haut."`,
        `Consigne 2: "Pose la brique ${c[1]} au-dessus de la brique ${c[0]}, bien centrée."`,
        `Consigne 3: "Place la brique ${c[2]} à droite de la brique ${c[1]}, sans l’accrocher."`,
        `Consigne 4: "Pose la brique ${c[3]} verticalement sous la brique ${c[0]}."`,
        "Les deux participants comparent les modèles, puis échangent les rôles."
      ],
      prompts: ({ c }) => [`Place ${c[0]} devant toi, horizontalement.`, `Pose ${c[1]} au-dessus de ${c[0]}, bien centrée.`, `Place ${c[2]} à droite de ${c[1]}.`, `Pose ${c[3]} verticalement sous ${c[0]}.`],
      variation: () => "Facile: utiliser trois briques. Difficile: interdire les gestes et autoriser une seule répétition.",
      question: "Quels mots ont rendu la construction plus facile à refaire ?"
    },
    {
      id: "modele-secret",
      title: "Le modèle secret",
      allowedGoals: ["language", "cooperation", "spatial"],
      groupType: familyGroups.backToBack,
      summary: "Un participant décrit un modèle très simple, l’autre le reconstruit sans le voir.",
      materials: ["6 briques Six Bricks par participant", "Un cache entre les deux participants", "Une surface plane"],
      steps: ({ c }) => [
        "Le participant qui décrit place trois briques devant lui. L’autre participant ne regarde pas.",
        `Il dit: "Place ${c[0]} au centre, horizontalement."`,
        `Il dit: "Place ${c[1]} à gauche de ${c[0]}, dans le même sens."`,
        `Il dit: "Place ${c[2]} au-dessus de ${c[0]}, verticalement."`,
        "Le constructeur vérifie en silence et ne pose qu’une question si une position n’est pas claire.",
        "On enlève le cache, on compare, puis on nomme une consigne qui était précise."
      ],
      prompts: ({ c }) => [`${c[0]} au centre, horizontalement.`, `${c[1]} à gauche de ${c[0]}, dans le même sens.`, `${c[2]} au-dessus de ${c[0]}, verticalement.`],
      variation: () => "Facile: autoriser deux questions. Difficile: ajouter une quatrième brique sous le modèle.",
      question: "Quelle consigne était la plus claire ? Pourquoi ?"
    }
  ],
  listenCopy: [
    {
      id: "consigne-invisible",
      title: "La consigne invisible",
      allowedGoals: ["attention", "memory", "executive"],
      groupType: familyGroups.listenCopy,
      summary: "Les participants écoutent une suite de consignes et les réalisent tous dans le même ordre.",
      materials: ["6 briques Six Bricks par participant", "Une feuille A4 devant chaque participant", "Une table ou un tapis"],
      steps: ({ c }) => [
        `Chaque participant place les briques en ligne devant lui: ${c.join(", ")}.`,
        "Pose une feuille A4 devant la ligne de briques.",
        `Dis: "Prends ${c[0]} avec la main droite et place-la dans le coin supérieur gauche de la feuille."`,
        `Dis: "Prends ${c[1]} avec la main gauche et place-la dans le coin supérieur droit."`,
        `Dis: "Échange ${c[0]} et ${c[1]}, puis repose tes mains sur la table."`,
        `Dis: "Place ${c[2]} au centre de la feuille."`,
        "À la fin, chacun compare sa feuille avec celle de l’adulte ou du groupe."
      ],
      prompts: ({ c }) => [`Main droite: ${c[0]} dans le coin supérieur gauche.`, `Main gauche: ${c[1]} dans le coin supérieur droit.`, `Échange ${c[0]} et ${c[1]}.`, `${c[2]} au centre.`],
      variation: () => "Facile: lire chaque consigne deux fois. Difficile: lire deux consignes avant de laisser bouger.",
      question: "Quelle consigne as-tu dû écouter le plus attentivement ?"
    },
    {
      id: "suite-a-ecouter",
      title: "La suite à écouter",
      allowedGoals: ["memory", "attention", "language"],
      groupType: familyGroups.listenCopy,
      summary: "Les participants construisent une petite suite après avoir écouté l’ordre complet.",
      materials: ["6 briques Six Bricks par participant", "Une table ou un tapis", "Un cache facultatif"],
      steps: ({ c }) => [
        "Les participants gardent les mains sur la table pendant l’écoute.",
        `Lis l’ordre complet: ${c[0]}, ${c[1]}, ${c[2]}, ${c[3]}.`,
        "Dis: \"Maintenant, construis une ligne de gauche à droite avec ces quatre briques.\"",
        "Laisse le groupe construire sans répéter immédiatement.",
        "Relis l’ordre une seule fois pour vérifier.",
        "Les participants corrigent si besoin, puis expliquent leur stratégie."
      ],
      prompts: ({ c }) => [`Écoute l’ordre: ${c[0]}, ${c[1]}, ${c[2]}, ${c[3]}.`, "Construis la ligne de gauche à droite.", "Vérifie avec l’ordre relu."],
      variation: () => "Facile: utiliser trois briques. Difficile: demander de reconstruire l’ordre de droite à gauche.",
      question: "Comment as-tu retenu l’ordre des briques ?"
    }
  ]
};

function createInfiniteActivity(values) {
  const family = values.family || "free";
  const goal = values.goal || "attention";
  const templates = activityTemplates[family] || activityTemplates.free;
  const matching = templates.filter((template) => template.allowedGoals.includes(goal));
  const pool = matching.length ? matching : templates;
  const recent = state.activityHistory || [];

  for (let attempt = 0; attempt < 12; attempt += 1) {
    const colors = shuffle(activityColors).slice(0, 6);
    const recentIds = new Set(recent.slice(0, 4).map((entry) => entry.template));
    const candidates = pool.filter((template) => !recentIds.has(template.id));
    const template = pick(candidates.length ? candidates : pool);
    const activity = buildActivityFromTemplate(template, { family, goal, colors });
    if (validateGeneratedActivity(activity, { family, goal })) {
      rememberRecent("activityHistory", { template: template.id, family, goal });
      return activity;
    }
  }

  const fallback = buildActivityFromTemplate(activityTemplates.free[0], { family: "free", goal: "attention", colors: activityColors });
  rememberRecent("activityHistory", { template: activityTemplates.free[0].id, family: "free", goal: "attention" });
  return fallback;
}

function buildActivityFromTemplate(template, context) {
  const data = { c: context.colors, family: context.family, goal: context.goal };
  const groupType = template.groupType || familyGroups[context.family];
  const goalLabel = goalLabels[context.goal] || context.goal;
  return {
    title: template.title,
    tags: [familyLabels[context.family], groupType, goalLabel],
    family: context.family,
    groupType,
    summary: template.summary,
    materials: template.materials,
    steps: template.steps(data),
    variation: template.variation(data),
    question: template.question,
    proposals: template.prompts(data)
  };
}

function validateGeneratedActivity(activity, values) {
  const vaguePattern = /faire parler|faire pivoter|changer la règle|mission secrète|ponton au soleil|activité magique|manipulation libre|position négociée|quelque part|modèle simple|généré|générateur|activité générée/i;
  const text = [
    activity.title,
    activity.summary,
    activity.variation,
    activity.question,
    ...activity.tags,
    ...activity.materials,
    ...activity.steps,
    ...activity.proposals
  ].join(" ");
  if (vaguePattern.test(text)) return false;
  if (!activity.title || activity.title.length < 4) return false;
  if (!activity.materials.length || !activity.steps.length || !activity.proposals.length) return false;
  if (activity.steps.some((step) => step.length < 18 || !/[.!?"”]$/.test(step.trim()))) return false;
  if (values.family === "backToBack") {
    const backText = activity.steps.join(" ").toLowerCase();
    if (!activity.groupType.includes("2")) return false;
    if (!/ne doivent pas voir|ne regarde pas|sans se voir/.test(backText)) return false;
    if (!/décrit|consigne|dit/.test(backText)) return false;
    if (!/construit|construire|place/.test(backText)) return false;
  }
  if (values.family === "lined" && !text.toLowerCase().includes("ligne")) return false;
  if (values.family === "movement" && !/repère|marche|pas|sol/i.test(text)) return false;
  return true;
}

const storyLabels = {
  rouge: "Rouge",
  orange: "Orange",
  jaune: "Jaune",
  vert: "Vert",
  bleuClair: "Bleu clair",
  bleuFonce: "Bleu foncé"
};

const storyColorKeys = ["rouge", "orange", "jaune", "vert", "bleuClair", "bleuFonce"];

const commonStoryObjects = {
  rouge: { level1: ["une fraise rouge", "une tomate rouge", "une cerise rouge", "un coquelicot rouge"], level2: ["une fraise bien mûre", "une tomate ronde", "une cerise", "un coquelicot"] },
  orange: { level1: ["une carotte orange", "une mandarine orange", "une citrouille orange", "un abricot orange"], level2: ["une carotte", "une mandarine", "une citrouille", "un abricot"] },
  jaune: { level1: ["un citron jaune", "une banane jaune", "un poussin jaune", "un pissenlit jaune"], level2: ["un citron", "une banane", "un poussin", "un pissenlit"] },
  vert: { level1: ["une feuille verte", "une salade verte", "une grenouille verte", "une prairie verte"], level2: ["une feuille d’arbre", "une salade croquante", "une grenouille", "une prairie"] },
  bleuClair: { level1: ["un ciel bleu clair", "une flaque bleu clair", "une eau bleu clair"], level2: ["un ciel d’été", "une flaque lumineuse", "une eau transparente"] },
  bleuFonce: { level1: ["un ciel bleu foncé", "une mer bleu foncé", "une myrtille bleu foncé"], level2: ["un ciel de minuit", "une mer profonde", "une myrtille", "la nuit"] }
};

function makeTheme(label, character, openings, frames, closings, objects = commonStoryObjects) {
  return { label, character, openings, frames, closings, objects };
}

const marketObjects = {
  rouge: { level1: ["une fraise rouge", "une tomate rouge", "une cerise rouge"], level2: ["une fraise bien mûre", "une tomate ronde", "une cerise"] },
  vert: { level1: ["une salade verte", "des herbes fraîches vertes", "une courgette verte"], level2: ["une salade croquante", "des herbes fraîches", "une courgette"] },
  jaune: { level1: ["un citron jaune", "une banane jaune"], level2: ["un citron", "une banane"] },
  orange: { level1: ["une carotte orange", "une mandarine orange", "une citrouille orange"], level2: ["une carotte", "une mandarine", "une citrouille"] },
  bleuClair: { level1: ["un ruban bleu clair", "une bouteille bleu clair"], level2: ["un ruban couleur ciel d’été", "une bouteille d’eau transparente"] },
  bleuFonce: { level1: ["une barquette de myrtilles bleu foncé", "un tablier bleu foncé"], level2: ["une barquette de myrtilles", "un tablier couleur nuit"] }
};

const forestObjects = {
  rouge: { level1: ["une fraise des bois rouge", "un champignon rouge", "une baie rouge", "un coquelicot rouge"], level2: ["une fraise des bois", "un champignon", "une baie", "un coquelicot"] },
  vert: { level1: ["une feuille verte", "une mousse verte", "un sapin vert", "une fougère verte"], level2: ["une feuille", "de la mousse", "un sapin", "une fougère"] },
  jaune: { level1: ["un rayon de soleil jaune", "un poussin jaune", "une fleur de pissenlit jaune"], level2: ["un rayon de soleil", "un poussin perdu", "une fleur de pissenlit"] },
  orange: { level1: ["un renard orange", "une feuille d’automne orange", "un écureuil orange"], level2: ["un renard", "une feuille d’automne", "un écureuil"] },
  bleuClair: { level1: ["un ciel bleu clair entre les branches", "une goutte d’eau bleu clair"], level2: ["un ciel d’été entre les branches", "une goutte d’eau transparente"] },
  bleuFonce: { level1: ["un ciel bleu foncé du soir", "une baie de myrtille bleu foncé"], level2: ["la nuit", "une baie de myrtille", "le ciel de minuit"] }
};

const beachObjects = {
  rouge: { level1: ["une bouée rouge", "un seau rouge", "une glace à la fraise rouge", "un crabe rouge"], level2: ["une bouée", "un seau", "une glace à la fraise", "un crabe"] },
  vert: { level1: ["une algue verte", "une pelle verte", "une serviette verte"], level2: ["une algue", "une pelle", "une serviette couleur prairie"] },
  jaune: { level1: ["du sable jaune", "un soleil jaune", "un coquillage jaune"], level2: ["du sable", "le soleil", "un coquillage doré"] },
  orange: { level1: ["un brassard orange", "un ballon orange", "une glace à l’abricot orange"], level2: ["un brassard", "un ballon couleur mandarine", "une glace à l’abricot"] },
  bleuClair: { level1: ["un ciel bleu clair", "une eau bleu clair"], level2: ["un ciel d’été", "une eau transparente"] },
  bleuFonce: { level1: ["une mer bleu foncé", "un ciel bleu foncé du soir"], level2: ["une mer profonde", "un ciel de minuit"] }
};

const kitchenObjects = {
  rouge: { level1: ["une tomate rouge", "une fraise rouge", "une cerise rouge", "une sauce tomate rouge"], level2: ["une tomate", "une fraise", "une cerise", "une sauce tomate"] },
  vert: { level1: ["une salade verte", "une courgette verte", "du basilic vert", "un concombre vert"], level2: ["une salade", "une courgette", "du basilic", "un concombre"] },
  jaune: { level1: ["un citron jaune", "une banane jaune", "du maïs jaune", "du beurre jaune"], level2: ["un citron", "une banane", "du maïs", "du beurre"] },
  orange: { level1: ["une carotte orange", "une mandarine orange", "un potiron orange"], level2: ["une carotte", "une mandarine", "un potiron"] },
  bleuClair: { level1: ["un verre bleu clair", "une carafe bleu clair"], level2: ["un verre d’eau transparente", "une petite carafe d’eau transparente"] },
  bleuFonce: { level1: ["une myrtille bleu foncé", "un tablier bleu foncé", "un bol bleu foncé"], level2: ["une myrtille", "un tablier couleur nuit", "un bol sombre"] }
};

const farmObjects = {
  rouge: { level1: ["une tomate rouge", "une pomme rouge", "une fraise rouge"], level2: ["une tomate", "une pomme d’amour", "une fraise"] },
  vert: { level1: ["une feuille de salade verte", "une courgette verte", "une herbe verte"], level2: ["une feuille de salade", "une courgette", "de l’herbe fraîche"] },
  jaune: { level1: ["un poussin jaune", "du maïs jaune", "une botte de paille jaune"], level2: ["un poussin", "du maïs", "une botte de paille"] },
  orange: { level1: ["une citrouille orange", "une carotte orange"], level2: ["une citrouille", "une carotte"] },
  bleuClair: { level1: ["un seau bleu clair", "une bassine bleu clair"], level2: ["un seau couleur ciel d’été", "une bassine d’eau transparente"] },
  bleuFonce: { level1: ["une couverture bleu foncé", "un seau bleu foncé"], level2: ["une couverture couleur nuit", "un seau sombre"] }
};

const birthdayObjects = {
  rouge: { level1: ["une fraise rouge", "une cerise rouge", "un ballon rouge"], level2: ["une fraise", "une cerise", "un ballon couleur tomate"] },
  vert: { level1: ["des feuilles de menthe vertes", "une serviette verte"], level2: ["quelques feuilles de menthe", "une serviette couleur prairie"] },
  jaune: { level1: ["une banane jaune", "une bougie jaune", "une étoile jaune"], level2: ["une banane coupée", "une bougie couleur soleil", "une étoile"] },
  orange: { level1: ["un jus de mandarine orange", "un ballon orange"], level2: ["un jus de mandarine", "un ballon couleur carotte"] },
  bleuClair: { level1: ["une assiette bleu clair", "une serviette bleu clair"], level2: ["une assiette couleur ciel d’été", "une serviette couleur matin"] },
  bleuFonce: { level1: ["une guirlande bleu foncé", "une nappe bleu foncé"], level2: ["une guirlande couleur nuit", "une nappe sombre"] }
};

const schoolObjects = {
  rouge: { level1: ["un crayon rouge", "un stylo correcteur rouge", "une gommette rouge"], level2: ["le crayon qui sert à corriger", "un stylo correcteur", "une gommette couleur fraise"] },
  vert: { level1: ["une règle verte", "un cahier vert", "un tableau vert"], level2: ["une règle couleur prairie", "un cahier couleur herbe", "le tableau"] },
  jaune: { level1: ["une règle jaune", "un post-it jaune", "une étoile jaune"], level2: ["la couleur du soleil", "un post-it", "une étoile"] },
  orange: { level1: ["un feutre orange", "une trousse orange", "une affiche orange"], level2: ["un feutre couleur mandarine", "une trousse couleur carotte", "une affiche couleur citrouille"] },
  bleuClair: { level1: ["une peinture bleu clair", "un cahier bleu clair"], level2: ["une peinture couleur ciel d’été", "un cahier couleur matin"] },
  bleuFonce: { level1: ["une encre bleu foncé", "un cartable bleu foncé"], level2: ["une encre couleur nuit", "un cartable sombre"] }
};

const fairObjects = {
  rouge: { level1: ["une pomme d’amour rouge", "un nez de clown rouge", "un ticket rouge"], level2: ["une pomme d’amour", "un nez de clown", "un ticket couleur fraise"] },
  vert: { level1: ["une grenouille verte", "un ballon vert"], level2: ["une grenouille du stand", "un ballon couleur prairie"] },
  jaune: { level1: ["une lumière jaune", "du pop-corn jaune", "un canard jaune"], level2: ["une lumière", "du pop-corn", "un canard de pêche"] },
  orange: { level1: ["un ballon orange", "une confiserie orange"], level2: ["un ballon couleur carotte", "une confiserie à la mandarine"] },
  bleuClair: { level1: ["un bassin bleu clair", "un ticket bleu clair"], level2: ["un bassin de pêche", "un ticket couleur ciel d’été"] },
  bleuFonce: { level1: ["un ciel bleu foncé", "un stand bleu foncé"], level2: ["un ciel de minuit", "le stand de la nuit"] }
};

const christmasObjects = {
  rouge: { level1: ["une boule rouge", "un ruban rouge", "un manteau rouge"], level2: ["une boule couleur fraise", "un ruban de fête", "le manteau du Père Noël"] },
  vert: { level1: ["un sapin vert", "une branche de houx verte"], level2: ["un sapin", "une branche de houx"] },
  jaune: { level1: ["une étoile jaune", "une lumière jaune", "une bougie jaune"], level2: ["une étoile", "une lumière", "une bougie"] },
  orange: { level1: ["une mandarine orange", "un feu orange"], level2: ["une mandarine", "un feu de cheminée"] },
  bleuClair: { level1: ["un flocon bleu clair", "une boule bleu clair"], level2: ["un flocon de givre", "une boule couleur glace"] },
  bleuFonce: { level1: ["une nuit bleu foncé", "un ciel bleu foncé"], level2: ["la nuit de Noël", "un ciel de minuit"] }
};

const gardenObjects = {
  rouge: { level1: ["une fraise rouge", "un coquelicot rouge", "une tomate rouge"], level2: ["une fraise bien mûre", "un coquelicot", "une tomate ronde"] },
  vert: { level1: ["une feuille verte", "une herbe verte", "une grenouille verte"], level2: ["une feuille", "de l’herbe fraîche", "une grenouille"] },
  jaune: { level1: ["un pissenlit jaune", "un tournesol jaune", "un arrosoir jaune"], level2: ["un pissenlit", "un tournesol", "un arrosoir couleur soleil"] },
  orange: { level1: ["une carotte orange", "un potiron orange", "une feuille d’automne orange"], level2: ["une carotte", "un potiron", "une feuille d’automne"] },
  bleuClair: { level1: ["une flaque bleu clair", "un ciel bleu clair", "un ruban bleu clair"], level2: ["une flaque lumineuse", "un ciel d’été", "un ruban couleur matin"] },
  bleuFonce: { level1: ["un ciel bleu foncé", "une myrtille bleu foncé", "un pot bleu foncé"], level2: ["un ciel de minuit", "une myrtille", "un pot sombre"] }
};

const animalObjects = {
  rouge: { level1: ["un collier rouge", "une mangeoire rouge", "un jouet rouge"], level2: ["un collier couleur fraise", "une mangeoire couleur tomate", "un jouet couleur cerise"] },
  vert: { level1: ["une grenouille verte", "une feuille verte", "une gamelle verte"], level2: ["une grenouille", "une feuille", "une gamelle couleur prairie"] },
  jaune: { level1: ["un poussin jaune", "une plume jaune", "un panier jaune"], level2: ["un poussin", "une plume couleur soleil", "un panier couleur citron"] },
  orange: { level1: ["un renard orange", "une carotte orange", "un coussin orange"], level2: ["un renard", "une carotte", "un coussin couleur mandarine"] },
  bleuClair: { level1: ["un bassin bleu clair", "un ruban bleu clair"], level2: ["un bassin d’eau transparente", "un ruban couleur ciel d’été"] },
  bleuFonce: { level1: ["une couverture bleu foncé", "un ciel bleu foncé"], level2: ["une couverture couleur nuit", "un ciel de minuit"] }
};

const travelObjects = {
  rouge: { level1: ["une valise rouge", "un ticket rouge", "un foulard rouge"], level2: ["une valise couleur fraise", "un ticket couleur tomate", "un foulard couleur cerise"] },
  vert: { level1: ["un carnet vert", "un panneau vert", "une gourde verte"], level2: ["un carnet couleur prairie", "un panneau de départ", "une gourde couleur herbe"] },
  jaune: { level1: ["un billet jaune", "un chapeau jaune", "une étiquette jaune"], level2: ["un billet couleur soleil", "un chapeau couleur citron", "une étiquette couleur banane"] },
  orange: { level1: ["une trousse orange", "une écharpe orange", "une carte orange"], level2: ["une trousse couleur mandarine", "une écharpe couleur carotte", "une carte couleur citrouille"] },
  bleuClair: { level1: ["un ciel bleu clair", "une bouteille bleu clair"], level2: ["un ciel d’été", "une bouteille d’eau transparente"] },
  bleuFonce: { level1: ["un sac bleu foncé", "un ciel bleu foncé"], level2: ["un sac couleur nuit", "un ciel de minuit"] }
};

const spaceObjects = {
  rouge: { level1: ["un bouton rouge", "une fusée rouge", "un voyant rouge"], level2: ["un bouton d’alerte", "une fusée couleur tomate", "un voyant de départ"] },
  vert: { level1: ["un écran vert", "une planète verte", "un signal vert"], level2: ["un écran de contrôle", "une planète couverte de prairies", "un signal de départ"] },
  jaune: { level1: ["une étoile jaune", "un soleil jaune", "un casque jaune"], level2: ["une étoile", "un soleil", "un casque couleur citron"] },
  orange: { level1: ["une comète orange", "une combinaison orange", "une planète orange"], level2: ["une comète couleur mandarine", "une combinaison couleur carotte", "une planète couleur citrouille"] },
  bleuClair: { level1: ["un hublot bleu clair", "une planète bleu clair"], level2: ["un hublot couleur ciel d’été", "une planète d’eau transparente"] },
  bleuFonce: { level1: ["un espace bleu foncé", "un casque bleu foncé"], level2: ["l’espace de minuit", "un casque couleur nuit"] }
};

const pirateObjects = {
  rouge: { level1: ["un foulard rouge", "un drapeau rouge", "un coffre rouge"], level2: ["un foulard couleur fraise", "un drapeau couleur tomate", "un coffre couleur cerise"] },
  vert: { level1: ["une bouteille verte", "une algue verte", "une carte verte"], level2: ["une bouteille couleur prairie", "une algue", "une carte couleur herbe"] },
  jaune: { level1: ["une pièce jaune", "un parchemin jaune", "une lampe jaune"], level2: ["une pièce d’or", "un parchemin", "une lampe couleur soleil"] },
  orange: { level1: ["une voile orange", "une boussole orange", "un poisson orange"], level2: ["une voile couleur mandarine", "une boussole couleur carotte", "un poisson couleur abricot"] },
  bleuClair: { level1: ["un ciel bleu clair", "une eau bleu clair"], level2: ["un ciel d’été", "une eau transparente"] },
  bleuFonce: { level1: ["une mer bleu foncé", "un ciel bleu foncé"], level2: ["une mer profonde", "un ciel de minuit"] }
};

const magicObjects = {
  rouge: { level1: ["une fiole rouge", "une plume rouge", "une cape rouge"], level2: ["une fiole couleur fraise", "une plume couleur cerise", "une cape couleur tomate"] },
  vert: { level1: ["une pierre verte", "une feuille verte", "une grenouille verte"], level2: ["une pierre couleur prairie", "une feuille", "une grenouille"] },
  jaune: { level1: ["une étoile jaune", "une bougie jaune", "une poudre jaune"], level2: ["une étoile", "une bougie couleur soleil", "une poudre couleur citron"] },
  orange: { level1: ["une étincelle orange", "une potion orange", "un ruban orange"], level2: ["une étincelle couleur mandarine", "une potion couleur carotte", "un ruban couleur citrouille"] },
  bleuClair: { level1: ["une bulle bleu clair", "un cristal bleu clair"], level2: ["une bulle couleur ciel d’été", "un cristal d’eau transparente"] },
  bleuFonce: { level1: ["un grimoire bleu foncé", "une cape bleu foncé"], level2: ["un grimoire couleur nuit", "une cape de minuit"] }
};

const storyThemes = {
  marche: makeTheme("Marché", "Sami", ["Ce matin, Sami va au marché avec son petit panier.", "Sami traverse les allées du marché en regardant chaque stand."], ["Au premier stand, la marchande lui montre {object}.", "Un peu plus loin, il remarque {object}.", "Près d’une caisse, son regard s’arrête sur {object}.", "Avant de changer d’allée, il observe {object}.", "En passant devant les fleurs, il aperçoit {object}.", "Sur le chemin du retour, il repense à {object}."], ["Quand la promenade est terminée, il redit l’ordre dans sa tête."], marketObjects),
  foret: makeTheme("Forêt", "Lina", ["Lina entre dans la forêt avec son petit sac.", "Lina suit un sentier calme entre les arbres."], ["Au bord du sentier, elle remarque {object}.", "Plus loin, elle aperçoit {object} près d’un tronc.", "Entre les branches, son regard se pose sur {object}.", "Près d’une cabane, elle observe {object}.", "En avançant doucement, elle découvre {object}.", "Avant de sortir du bois, elle regarde encore {object}."], ["Quand le chemin devient plus sombre, elle rentre chez elle."], forestObjects),
  plage: makeTheme("Plage", "Noé", ["Noé arrive sur la plage avec son seau.", "Noé marche pieds nus sur le sable avec son petit sac."], ["Près du parasol, il remarque {object}.", "Dans le sable, son regard tombe sur {object}.", "Au bord de l’eau, il aperçoit {object}.", "Entre deux rochers, il observe {object}.", "Sur le chemin des serviettes, il retrouve {object}.", "Au loin, il regarde {object}."], ["Il écoute les vagues une dernière fois avant de rentrer."], beachObjects),
  ferme: makeTheme("Ferme", "Zoé", ["À la ferme, Zoé commence sa tournée près du potager.", "Zoé aide à la ferme pendant une matinée tranquille."], ["Dans le potager, elle remarque {object}.", "Près du clapier, elle aperçoit {object}.", "Au poulailler, son regard s’arrête sur {object}.", "Contre le mur de la grange, elle trouve {object}.", "À côté du puits, elle observe {object}.", "Avant de fermer la barrière, elle regarde {object}."], ["Quand la journée se termine, elle garde la suite en mémoire."], farmObjects),
  anniversaire: makeTheme("Anniversaire", "Léo", ["Pour son anniversaire, Léo prépare la table avec sa famille.", "Léo installe la fête avant l’arrivée des invités."], ["Sur la table, il repère {object}.", "Autour des assiettes, il remarque {object}.", "Près du gâteau, il observe {object}.", "Sa famille apporte ensuite {object}.", "Avant l’arrivée des invités, il regarde {object}.", "Plus tard, il retrouve {object} dans le décor."], ["Quand les invités arrivent, tout est prêt."], birthdayObjects),
  ecole: makeTheme("École", "Inès", ["Dans la classe, Inès prépare son cahier.", "Inès s’installe à sa table et ouvre sa trousse."], ["Elle sort {object} pour commencer.", "Elle prend ensuite {object} près de son cahier.", "Sur la page, elle remarque {object}.", "Au tableau, elle observe {object}.", "Près de la fenêtre, elle voit {object}.", "Dans son casier, elle retrouve {object}."], ["Quand tout est rangé, elle montre son cahier à l’adulte."], schoolObjects),
  jardin: makeTheme("Jardin", "Maya", ["Maya entre dans le jardin avec un petit arrosoir.", "Dans le jardin, Maya suit l’allée entre les plantations."], ["Près du premier bac, elle découvre {object}.", "Sous une plante, elle remarque {object}.", "Au bord de l’allée, elle observe {object}.", "À côté du banc, son regard se pose sur {object}.", "Près de l’arrosoir, elle voit {object}.", "Avant de sortir, elle regarde {object}."], ["Elle referme la barrière et garde l’ordre dans sa tête."], gardenObjects),
  feteForaine: makeTheme("Fête foraine", "Nora", ["Nora arrive à la fête foraine avec quelques tickets.", "À la fête foraine, Nora avance entre les stands lumineux."], ["Au premier stand, elle remarque {object}.", "Près du manège, elle aperçoit {object}.", "Au jeu suivant, elle observe {object}.", "Devant la pêche aux canards, son regard s’arrête sur {object}.", "Sous les lampions, elle retrouve {object}.", "Quand le soir arrive, elle regarde {object}."], ["Elle revient vers l’entrée avec un grand sourire."], fairObjects),
  noel: makeTheme("Noël", "Élia", ["Élia prépare le salon pour la soirée de Noël.", "Dans la maison décorée, Élia vérifie le sapin."], ["Sur la table, elle remarque {object}.", "Dans le sapin, elle observe {object}.", "Près de la fenêtre, elle voit {object}.", "À côté de la cheminée, elle trouve {object}.", "Sur la vitre, son regard se pose sur {object}.", "Quand la soirée avance, elle regarde {object}."], ["Quand tout brille, elle s’assoit près du sapin."], christmasObjects),
  animaux: makeTheme("Animaux", "Tao", ["Tao visite un petit parc animalier avec l’adulte.", "Au refuge, Tao observe les animaux un par un."], ["Dans le premier enclos, il aperçoit {object}.", "Plus loin, le soigneur lui montre {object}.", "Près du bassin, il observe {object}.", "Derrière une barrière, il remarque {object}.", "Au détour du chemin, il retrouve {object}.", "Avant la sortie, il regarde {object}."], ["Avant de partir, il raconte l’ordre des rencontres."], animalObjects),
  cuisine: makeTheme("Cuisine", "Maya", ["Maya prépare une recette avec sa grand-mère.", "Dans la cuisine, Maya sort les ingrédients un par un."], ["Sur le plan de travail, elle remarque {object}.", "Puis elle pose {object} près de la planche.", "À côté du petit bol, elle observe {object}.", "Elle approche ensuite {object} de la casserole.", "Près de l’évier, elle retrouve {object}.", "Pour terminer la préparation, elle garde {object}."], ["Quand tout est prêt, elle range les ustensiles."], kitchenObjects),
  voyage: makeTheme("Voyage", "Nina", ["Nina prépare son sac pour un petit voyage.", "À la gare, Nina observe ce qui l’entoure avant de monter dans le train."], ["Dans son sac, elle repère {object}.", "Sur le quai, elle remarque {object}.", "À travers la fenêtre, elle aperçoit {object}.", "Pendant l’arrêt suivant, elle observe {object}.", "Dans son carnet, elle note {object}.", "À la fin du trajet, elle regarde {object}."], ["À l’arrivée, elle raconte tout ce qu’elle a vu dans l’ordre."], travelObjects),
  espace: makeTheme("Espace", "Iris", ["Iris prépare une petite mission dans la station spatiale.", "Dans le vaisseau, Iris vérifie le tableau de bord."], ["Sur le tableau de bord, elle repère {object}.", "Près du hublot, elle remarque {object}.", "Dans la cabine, elle observe {object}.", "Au-dessus de la planète, elle regarde {object}.", "Avant le retour, elle vérifie {object}.", "Quand les étoiles apparaissent, elle retrouve {object}."], ["La mission se termine quand le vaisseau revient au calme."], spaceObjects),
  pirates: makeTheme("Pirates", "Malo", ["Malo monte sur le bateau pirate avec une carte roulée.", "Sur le pont du bateau, Malo cherche les repères de la carte."], ["Dans le coffre, il trouve {object}.", "Près du gouvernail, il remarque {object}.", "Sur la carte, il pointe {object}.", "À côté du mât, il aperçoit {object}.", "Au bord du bateau, il observe {object}.", "Quand le soir arrive, il regarde {object}."], ["Il referme la carte et garde la séquence en mémoire."], pirateObjects),
  magie: makeTheme("Magie", "Lila", ["Lila entre dans l’atelier de magie avec son carnet.", "Dans la salle de magie, Lila prépare une formule très simple."], ["Sur la première étagère, elle choisit {object}.", "Dans un petit tiroir, elle trouve {object}.", "Au centre de la table, elle observe {object}.", "Près du livre, elle remarque {object}.", "Dans la boîte, elle retrouve {object}.", "À la fin, elle regarde {object}."], ["La formule fonctionne quand elle répète l’ordre sans se tromper."], magicObjects)
};

function createStory(values) {
  const count = Number(values.colorCount) === 3 ? 3 : 6;
  const level = values.level === "2" ? "2" : "1";
  const recent = state.storyHistory || [];
  const shouldShowCorrection = values.showCorrection === "visible";

  for (let attempt = 0; attempt < 16; attempt += 1) {
    const sequence = pickFreshSequence(storyColorKeys, recent, count);
    const themeKey = pickStoryTheme(values.theme, recent);
    const theme = storyThemes[themeKey];
    const story = buildSixBricksStory({ level, count, sequence, theme, themeKey, showCorrection: shouldShowCorrection });
    if (validateSixBricksStory(story, shouldShowCorrection)) {
      rememberRecent("storyHistory", { theme: themeKey, sequence: sequence.join("|"), level });
      return story;
    }
  }

  const fallbackSequence = count === 3
    ? ["rouge", "vert", "jaune"]
    : ["rouge", "vert", "jaune", "orange", "bleuClair", "bleuFonce"];
  const fallback = buildSixBricksStory({
    level,
    count,
    sequence: fallbackSequence,
    theme: storyThemes.marche,
    themeKey: "marche",
    showCorrection: shouldShowCorrection
  });
  rememberRecent("storyHistory", { theme: "marche", sequence: fallbackSequence.join("|"), level });
  return fallback;
}

function pickFreshSequence(colors, history, count) {
  for (let attempt = 0; attempt < 12; attempt += 1) {
    const sequence = shuffle(colors).slice(0, count);
    if (!(history || []).some((entry) => entry.sequence === sequence.join("|"))) return sequence;
  }
  return shuffle(colors).slice(0, count);
}

function pickStoryTheme(selected, history) {
  const keys = Object.keys(storyThemes);
  if (selected && selected !== "random" && storyThemes[selected]) return selected;
  const recentThemes = new Set((history || []).map((entry) => entry.theme));
  const pool = keys.filter((key) => !recentThemes.has(key));
  return pick(pool.length ? pool : keys);
}

function buildSixBricksStory({ level, count, sequence, theme, themeKey, showCorrection }) {
  const usedObjects = new Set();
  const items = sequence.map((colorKey, index) => {
    const themeObjects = theme.objects[colorKey] || commonStoryObjects[colorKey];
    const list = themeObjects[level === "1" ? "level1" : "level2"];
    const choices = list.filter((object) => !usedObjects.has(object));
    const phrase = pick(choices.length ? choices : list);
    usedObjects.add(phrase);
    return { colorKey, label: storyLabels[colorKey], phrase, frame: theme.frames[index % theme.frames.length] };
  });
  const opening = pick(theme.openings);
  const closing = count === 6 ? pick(theme.closings) : "";
  const body = items.map((item) => item.frame.replace("{object}", item.phrase));
  const paragraphs = [joinStorySentences([opening, ...body, closing].filter(Boolean))];
  const instruction = level === "1"
    ? "Écoute toute l’histoire sans toucher les briques. Quand l’histoire est terminée, replace les briques dans l’ordre des couleurs entendues."
    : "Tu peux manipuler les briques pendant l’histoire. Place-les dans l’ordre où tu reconnais les couleurs évoquées.";
  return {
    title: theme.label + (count === 3 ? " en trois couleurs" : " en six couleurs"),
    tags: ["Niveau " + level, count + " couleurs", level === "1" ? "couleurs nommées" : "couleurs sous-entendues", theme.label],
    instruction,
    paragraphs,
    sequence,
    correction: items.map((item) => item.label).join(" → "),
    showCorrection,
    level,
    themeKey
  };
}

function joinStorySentences(sentences) {
  return sentences.join(" ").replace(/\s+/g, " ").trim();
}

function validateSixBricksStory(story, requestedVisible) {
  const text = story.paragraphs.join(" ").toLowerCase();
  const level1Patterns = {
    rouge: /\brouges?\b/g,
    orange: /\boranges?\b/g,
    jaune: /\bjaunes?\b/g,
    vert: /\bvert(?:e|es|s)?\b/g,
    bleuClair: /\bbleu(?:e|es|s)?\s+clair(?:e|es|s)?\b/g,
    bleuFonce: /\bbleu(?:e|es|s)?\s+fonc(?:é|ée|és|ées|e|ee)/g
  };
  const forbiddenLevel2 = /\b(rouge|vert|jaune|orange|bleu|foncé|fonce|clair|claire|clairs|claires)\b/i;
  const validCount = story.sequence.length === 3 || story.sequence.length === 6;
  const noRepeat = new Set(story.sequence).size === story.sequence.length;
  const level1HasColors = story.level === "1"
    ? story.sequence.every((key) => (text.match(level1Patterns[key]) || []).length === 1)
    : true;
  const level2HasNoColors = story.level === "2" ? !forbiddenLevel2.test(text) : true;
  const correctionItems = story.correction.split(" → ");
  const correctionCount = correctionItems.length === story.sequence.length;
  const correctionMatches = correctionItems.every((label, index) => label === storyLabels[story.sequence[index]]);
  const sentenceCount = (story.paragraphs[0].match(/[.!?]/g) || []).length;
  const goodLength = sentenceCount >= story.sequence.length + 1 && sentenceCount <= 10;
  const notList = !/D’abord, .* Ensuite, .* Puis, .* Pour terminer,/.test(story.paragraphs[0]);
  const visibilityValid = story.showCorrection === requestedVisible;
  return validCount && noRepeat && level1HasColors && level2HasNoColors && correctionCount && correctionMatches && goodLength && notList && visibilityValid;
}

function shuffle(items) {
  return [...items].sort(() => Math.random() - 0.5);
}

function pick(items) {
  return items[Math.floor(Math.random() * items.length)];
}

translateStaticUi();
renderGeneratedActivity();
renderStory();
applyFilters();
