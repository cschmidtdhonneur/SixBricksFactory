const activities = [
  {
    title: "Exprime ton émotion",
    category: "Socio-émotionnel",
    group: ["solo", "small", "class"],
    context: ["table", "calm", "transition"],
    duration: "short",
    goals: ["emotion", "attention", "language"],
    source: "Social-Emotional Skills",
    summary: "Chaque couleur correspond à une émotion. Les enfants montrent l’émotion avec le visage, le corps ou une phrase.",
    materials: ["Six briques par enfant", "Une liste d’émotions simples"],
    steps: [
      "Associe une émotion à chaque couleur.",
      "Montre une brique sans parler.",
      "Les enfants miment l’émotion ou disent une phrase qui correspond.",
      "Change les associations après quelques tours."
    ],
    variation: "Demande aux enfants de construire une petite scène qui représente l’émotion.",
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
    materials: ["Un lot de six briques par enfant"],
    steps: [
      "Forme des groupes de 4 à 8 enfants.",
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
      "Les enfants placent les briques comme des pierres.",
      "Ils traversent en respectant l’ordre décidé.",
      "Ils recommencent avec moins de briques ou avec un partenaire à guider."
    ],
    variation: "Un enfant ferme les yeux et son partenaire le guide par la voix.",
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
    summary: "Chaque enfant choisit une brique pour dire comment il se sent au début ou à la fin d’une activité.",
    materials: ["Six briques par enfant"],
    steps: [
      "Donne une signification émotionnelle aux couleurs.",
      "Chaque enfant choisit une brique discrètement.",
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
    summary: "Un jeu de poursuite: quand un enfant est touché, il s’immobilise avec sa brique rouge jusqu’à être libéré.",
    materials: ["Une brique rouge par enfant", "Un espace sécurisé"],
    steps: [
      "Choisis un attrapeur.",
      "Les autres courent avec leur brique rouge.",
      "Quand un enfant est touché, il s’arrête et pose la brique sur sa tête.",
      "Un autre enfant peut le libérer en reprenant puis rendant la brique."
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
    summary: "Les enfants se passent une brique rapidement en suivant un rythme ou une musique.",
    materials: ["Une brique", "Un signal sonore ou une chanson"],
    steps: [
      "Les enfants forment un cercle.",
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
    materials: ["Une brique par équipe", "Une cuillère ou une règle par enfant"],
    steps: [
      "Trace un départ et une arrivée.",
      "L’enfant transporte la brique sans la toucher avec l’autre main.",
      "Au retour, il passe le matériel au suivant.",
      "Si la brique tombe, l’enfant reprend depuis le dernier repère."
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
    summary: "Un enfant invente une séquence de gestes avec une brique, les autres la reproduisent.",
    materials: ["Une brique par enfant"],
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
    materials: ["Une brique par équipe", "Une règle par enfant"],
    steps: [
      "Forme des équipes de 4 à 6.",
      "Chaque enfant tient une règle.",
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
    summary: "Chaque enfant tire une couleur puis cherche dans la pièce des objets de cette couleur.",
    materials: ["Un set de six briques par groupe", "Un minuteur"],
    steps: [
      "Place six briques au centre.",
      "Chaque enfant pioche une brique sans regarder.",
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
    summary: "Les enfants transportent une brique ensemble sans utiliser les mains.",
    materials: ["Une brique par duo ou équipe"],
    steps: [
      "Annonce la partie du corps autorisée: coude, épaule, dos ou genou.",
      "Les enfants transportent la brique jusqu’à une cible.",
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
    materials: ["Deux briques par enfant"],
    steps: [
      "Choisis une couleur pour vrai et une couleur pour faux.",
      "Pose une question de maths ou de logique.",
      "Les enfants lèvent la brique qui correspond.",
      "Demande à un enfant d’expliquer son choix."
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
    summary: "Les enfants trient, classent et justifient leurs critères avec six briques.",
    materials: ["Six briques par enfant ou par duo"],
    steps: [
      "Demande un tri par couleur chaude/froide, claire/foncée ou préférence.",
      "Les enfants construisent deux ou trois groupes.",
      "Ils expliquent leur règle de tri.",
      "Un autre enfant devine la règle."
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
    materials: ["Six briques par enfant"],
    steps: [
      "Annonce un défi: faire une tour de 4, une ligne de 6 ou deux groupes égaux.",
      "Les enfants cherchent une première solution.",
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
    summary: "Les enfants utilisent les briques pour représenter une forme ou un volume simple.",
    materials: ["Six briques par enfant", "Cartes de formes si disponibles"],
    steps: [
      "Montre ou nomme une forme.",
      "Les enfants la représentent avec leurs briques.",
      "Ils décrivent les côtés, coins ou positions.",
      "Recommence avec une forme plus complexe."
    ],
    variation: "Un enfant construit, l’autre décrit sans regarder le modèle.",
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
    materials: ["Six briques par enfant", "Mots sur papiers"],
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
    summary: "Les enfants suivent une consigne orale de plus en plus longue avec leurs briques.",
    materials: ["Six briques par enfant"],
    steps: [
      "Donne une consigne simple: pose le rouge sur le bleu.",
      "Ajoute une deuxième action.",
      "Les enfants réalisent sans parler.",
      "Vérifie ensemble et reformule la consigne."
    ],
    variation: "Un enfant devient meneur et invente la consigne.",
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
    materials: ["Six briques par enfant"],
    steps: [
      "Choisis deux briques de départ.",
      "Donne une préposition à représenter.",
      "Les enfants placent les briques.",
      "Ils inventent ensuite une phrase avec la préposition."
    ],
    variation: "Passe en binôme: un enfant décrit, l’autre place.",
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
      "Chaque enfant répète brièvement ce qui précède.",
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
    summary: "Les enfants décrivent une brique les yeux fermés en utilisant le toucher.",
    materials: ["Six briques par enfant", "Un bandeau facultatif"],
    steps: [
      "Les enfants ferment les yeux.",
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
    materials: ["Six briques par enfant"],
    steps: [
      "Les enfants alignent leurs briques de gauche à droite.",
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
      "Un enfant le copie.",
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
    materials: ["Six briques par enfant", "Un modèle du meneur"],
    steps: [
      "Montre une suite de trois briques pendant cinq secondes.",
      "Cache le modèle.",
      "Les enfants reconstruisent la suite.",
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
    summary: "Les enfants se déplacent vers une couleur, une forme ou un nombre annoncé.",
    materials: ["Briques ou cartes de couleurs au sol"],
    steps: [
      "Dispose des repères colorés au sol.",
      "Annonce une couleur, un nombre ou une forme.",
      "Les enfants sautent ou marchent vers le bon repère.",
      "Ajoute des consignes: avant, arrière, gauche, droite."
    ],
    variation: "Un enfant annonce la prochaine destination.",
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
    materials: ["Un tapis ou une feuille avec repères", "Une brique par enfant"],
    steps: [
      "Place la brique sur le point de départ.",
      "Annonce une suite: va au rouge, puis au carré, puis au 2.",
      "L’enfant trace le chemin avec son doigt ou déplace la brique.",
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
    materials: ["Six briques par enfant", "Une ligne ou un tapis"],
    steps: [
      "Les enfants alignent les six briques.",
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
    summary: "Les enfants déplacent les six briques depuis la ligne rouge en suivant des consignes simples: haut, bas, avant, arrière, gauche ou droite.",
    materials: ["Six briques par enfant", "Un tapis B-Line horizontal ou vertical"],
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
    summary: "Les enfants combinent déplacement, rotation et retournement pour travailler l’orientation spatiale et le contrôle inhibiteur.",
    materials: ["Six briques par enfant", "Un tapis B-Line"],
    steps: [
      "Revois deux gestes: twist signifie tourner la brique, flip signifie la retourner.",
      "Donne une première consigne avec une couleur et un déplacement.",
      "Ajoute twist ou flip à certaines consignes.",
      "Demande aux enfants de vérifier si les picots sont visibles ou non."
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
    summary: "Deux enfants travaillent sur le même tapis: chacun contrôle une partie des briques ou ils doivent toucher la brique ensemble.",
    materials: ["Un tapis B-Line pour deux", "Six briques"],
    steps: [
      "Place les deux enfants du même côté du tapis.",
      "Attribue trois briques à chaque enfant ou demande qu’ils touchent ensemble toute brique déplacée.",
      "Donne des consignes de déplacement simples.",
      "Observe comment ils négocient la prise de décision et l’espace."
    ],
    variation: "Les enfants gardent une main collée en high five et utilisent seulement l’autre main.",
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
    summary: "Deux enfants se placent de chaque côté du tapis. Les consignes deviennent un défi de point de vue et de flexibilité cognitive.",
    materials: ["Un tapis B-Line pour deux", "Six briques"],
    steps: [
      "Installe les partenaires sur des côtés opposés du tapis.",
      "Explique que gauche, droite, avant et arrière peuvent être perçus différemment.",
      "Donne des consignes lentes au début.",
      "Après chaque série, demande aux enfants de comparer leur point de vue."
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
    summary: "Les enfants attendent deux, trois ou quatre consignes avant de toucher les briques, puis les exécutent dans l’ordre.",
    materials: ["Six briques par enfant", "Un tapis B-Line"],
    steps: [
      "Annonce que les mains restent immobiles pendant les consignes.",
      "Donne deux consignes courtes, puis dis go.",
      "Les enfants réalisent les mouvements dans l’ordre entendu.",
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
    summary: "Les enfants placent les briques dans des zones précises: haut gauche, centre, bas droit, au-dessus ou en dessous de la ligne rouge.",
    materials: ["Six briques par enfant", "Un tapis B-Line avec zones visibles"],
    steps: [
      "Présente les zones du tapis: haut, bas, gauche, droite et centre.",
      "Donne une consigne de position: vert en haut à gauche.",
      "Ajoute des relations: bleu sous jaune, orange touche rouge.",
      "Fais verbaliser la position finale par un enfant."
    ],
    variation: "Un enfant lit ou invente les coordonnées pour son partenaire.",
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
    summary: "Un enfant construit d’un côté de la ligne, l’autre reproduit en miroir de l’autre côté.",
    materials: ["Six briques par duo", "Un tapis B-Line"],
    steps: [
      "Définis la ligne rouge comme axe de symétrie.",
      "Le premier enfant place deux ou trois briques d’un côté.",
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
    materials: ["Six briques par enfant", "Un tapis B-Line numéroté de 1 à 5 ou 1 à 10"],
    steps: [
      "Choisis une base: nombres de 1 à 5 ou de 1 à 10.",
      "Annonce une couleur et une valeur: jaune à 4, rouge à 2 + 1.",
      "L’enfant déplace la brique vers la ligne de résultat.",
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
    summary: "Les enfants résolvent des additions, soustractions, multiplications ou divisions, puis déplacent la brique vers la ligne du résultat.",
    materials: ["Six briques par enfant", "Un tapis B-Line base 10"],
    steps: [
      "Attribue une valeur ou une opération à chaque consigne.",
      "Annonce: bleu vers le résultat de 12 - 8, vert vers 3 x 2.",
      "Les enfants calculent mentalement puis déplacent la brique.",
      "Fais expliciter une stratégie de calcul après quelques tours."
    ],
    variation: "En duo, un enfant calcule et l’autre vérifie le déplacement.",
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
    summary: "Les briques ne sont plus déplacées à la main: les enfants utilisent un crayon, une pince, une paille ou seulement certains doigts.",
    materials: ["Six briques par enfant", "Crayons, pailles, pinces ou baguettes", "Un tapis B-Line"],
    steps: [
      "Choisis un outil ou une contrainte de doigts.",
      "Donne des consignes B-Line simples.",
      "Les enfants doivent soulever et placer, sans faire glisser si possible.",
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
    summary: "Les enfants doivent attendre le signal avant de bouger, ou faire toutes les consignes à l’envers.",
    materials: ["Six briques par enfant", "Un tapis B-Line"],
    steps: [
      "Annonce une règle d’inhibition: on écoute toute la série avant de toucher.",
      "Donne deux ou trois consignes.",
      "Au signal, les enfants exécutent.",
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
    summary: "Un bingo de nombres où les enfants couvrent les réponses avec leurs briques jusqu’à aligner quatre cases.",
    materials: ["Grille First2Four imprimée", "Six briques par enfant", "Cartes nombres ou calculs"],
    steps: [
      "Distribue une grille à chaque enfant ou duo.",
      "Annonce un nombre, un calcul ou une représentation.",
      "Les enfants couvrent la case correspondante avec une brique.",
      "Le premier à obtenir quatre briques alignées explique ses réponses."
    ],
    variation: "Utilise la version nombres négatifs pour les enfants plus avancés.",
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
    summary: "Les enfants placent des briques sur un plan cartésien pour travailler coordonnées, repérage et déplacement.",
    materials: ["Plan cartésien imprimé", "Six briques par enfant"],
    steps: [
      "Présente les axes horizontal et vertical.",
      "Annonce une coordonnée: rouge en A3 ou bleu en (2, 4).",
      "Les enfants placent la brique sur l’intersection.",
      "Crée ensuite un chemin de plusieurs coordonnées à suivre."
    ],
    variation: "Un enfant dicte les coordonnées et l’autre vérifie le trajet.",
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
    materials: ["Cartes de motifs imprimées", "Six briques par enfant"],
    steps: [
      "Montre une carte modèle.",
      "Les enfants reproduisent la suite avec leurs briques.",
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
    summary: "À partir d’un modèle 3D imprimé, les enfants construisent, décrivent puis modifient une structure.",
    materials: ["Cartes 3D Builds imprimées", "Six briques par enfant"],
    steps: [
      "Choisis une carte modèle.",
      "Les enfants construisent la structure avec leurs six briques.",
      "Ils décrivent la position des briques: dessus, dessous, devant, derrière.",
      "Ils changent une brique et expliquent l’effet sur la structure."
    ],
    variation: "Un enfant décrit la carte sans la montrer, l’autre construit.",
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
      "Chaque enfant vote avec une brique.",
      "Place les briques dans la colonne correspondante.",
      "Compare les colonnes: plus, moins, autant, différence."
    ],
    variation: "Demande aux enfants de prédire le résultat avant de voter.",
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
    materials: ["Template fractions imprimé", "Six briques par enfant"],
    steps: [
      "Présente les six briques comme un tout.",
      "Demande de montrer la moitié, un tiers ou deux tiers.",
      "Les enfants placent les briques dans les zones du template.",
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
    summary: "Un enfant place des briques sur une grille, puis guide un partenaire avec des consignes précises.",
    materials: ["Grille 5 x 5 ou 6 x 8 imprimée", "Six briques par duo", "Cache ou séparation facultative"],
    steps: [
      "Le premier enfant construit une disposition sur sa grille.",
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
    materials: ["Cartes nombres imprimées", "Six briques par enfant"],
    steps: [
      "Pioche ou montre une carte nombre.",
      "Les enfants représentent la quantité avec leurs briques.",
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
    summary: "Les enfants deviennent une chaîne de transport: une brique passe d’un enfant à l’autre avec une contrainte de mouvement.",
    materials: ["Une ou plusieurs briques", "Un espace pour former une ligne ou un cercle"],
    steps: [
      "Place les enfants en ligne ou en cercle.",
      "Choisis une façon de transmettre la brique: au-dessus, dessous, derrière le dos.",
      "La brique doit arriver au dernier enfant sans tomber.",
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
    materials: ["Six briques par enfant ou duo", "Un minuteur facultatif"],
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
    summary: "Une activité de manipulation rapide où l’enfant doit suivre, cacher, retrouver ou échanger une brique cible.",
    materials: ["Six briques par enfant", "Un tissu ou une main pour cacher"],
    steps: [
      "Choisis une brique secrète.",
      "Mélange les briques lentement puis plus vite.",
      "L’enfant suit la brique des yeux et la désigne.",
      "Inverse les rôles: l’enfant devient meneur."
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
    summary: "Un enfant observe une petite construction 3D, elle est cachée, puis il la reconstruit de mémoire.",
    materials: ["Deux sets de six briques", "Un cache ou une boîte"],
    steps: [
      "Construis un modèle avec trois à six briques.",
      "Laisse l’enfant observer quelques secondes.",
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
      "Les enfants proposent une réponse après trois indices.",
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
    materials: ["Six briques par enfant", "Quelques modèles simples"],
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
    summary: "Une activité de retrait: on part de six briques, on en cache ou enlève quelques-unes, les enfants trouvent le reste.",
    materials: ["Six briques par enfant", "Un tissu ou une boîte"],
    steps: [
      "Montre les six briques.",
      "Cache ou enlève une quantité sans la montrer longtemps.",
      "Demande combien il en reste ou combien ont disparu.",
      "Fais représenter l’opération avec les briques visibles."
    ],
    variation: "Les enfants inventent leurs propres problèmes pour un partenaire.",
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
    summary: "Les enfants estiment une hauteur, une longueur, une quantité de picots ou un nombre de briques, puis vérifient.",
    materials: ["Six briques par enfant", "Objets de la classe à mesurer"],
    steps: [
      "Choisis une question: combien de briques pour mesurer ce livre ?",
      "Chaque enfant annonce une estimation.",
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
    summary: "Un enfant décrit précisément une construction; l’autre doit la reproduire sans voir le modèle.",
    materials: ["Deux sets de six briques", "Un cache entre les partenaires"],
    steps: [
      "Le premier enfant construit un modèle simple.",
      "Il décrit les couleurs, positions et orientations.",
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
    summary: "Après une lecture, les enfants reconstruisent un personnage, un lieu ou un problème de l’histoire avec six briques.",
    materials: ["Un album ou une histoire courte", "Six briques par enfant ou groupe"],
    steps: [
      "Lis une histoire ou un extrait.",
      "Demande de construire un personnage, un lieu ou un moment important.",
      "Chaque enfant explique son choix.",
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
    materials: ["Six briques par enfant", "Cartes commandes facultatives"],
    steps: [
      "Associe chaque couleur à un parfum.",
      "Annonce une commande de deux ou trois parfums.",
      "Les enfants empilent les briques dans l’ordre demandé.",
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
      "L’enfant choisit deux briques pour former une paire correcte.",
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
    summary: "Les enfants reconnaissent une brique au toucher dans un sac, puis décrivent ce qu’ils sentent.",
    materials: ["Six briques", "Un sac opaque"],
    steps: [
      "Mets les briques dans le sac.",
      "L’enfant plonge la main sans regarder.",
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
    summary: "Un enfant ou l’adulte montre une action avec les briques; les autres copient exactement.",
    materials: ["Six briques par enfant"],
    steps: [
      "Montre une action simple: empiler, toucher, tourner, cacher.",
      "Les enfants copient la même action.",
      "Ajoute une deuxième action à mémoriser.",
      "Change de meneur après quelques tours."
    ],
    variation: "Passe en mode miroir: les enfants font l’action opposée.",
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

const i18n = {
  fr: {
    kicker: "La première appli française Six Bricks",
    heroText: "Des activités Six Bricks à l’infini, avec ou sans plateau, pour stimuler le langage, les mathématiques, la mémoire, l’attention, la motricité, la créativité, les fonctions exécutives, les compétences sociales et le plaisir d’apprendre, de la petite enfance jusqu’au grand âge.",
    creatorCredit: "Créée par Chloé Schmidt-Dhonneur, docteure en sciences de l’éducation et formatrice Six Bricks.",
    tabFinder: "Trouver une idée",
    tabGenerator: "Générer à l’infini",
    tabStories: "Histoires infinies",
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
    generateActivity: "Générer une activité",
    infiniteGenerator: "Générateur infini",
    storyLevel: "Difficulté",
    storyLevel1: "Facile",
    storyLevel2: "Plus difficile",
    colorMode: "Couleurs",
    withColors: "Citer les couleurs",
    withoutColors: "Sans citer les couleurs",
    theme: "Thème",
    adventure: "Aventure",
    nature: "Nature",
    mystery: "Mystère",
    generateStory: "Générer une histoire",
    storyGenerator: "Histoires infinies",
    buildPrompts: "Invitations à construire",
    proposals: "Propositions rapides",
  },
  en: {
    kicker: "The first French Six Bricks app",
    heroText: "Infinite Six Bricks activities, with or without mats, to stimulate language, mathematics, memory, attention, motor skills, creativity, executive functions, social skills and the joy of learning, from early childhood to older age.",
    creatorCredit: "Created by Chloé Schmidt-Dhonneur, Doctor of Education Sciences and Six Bricks trainer.",
    tabFinder: "Find an idea",
    tabGenerator: "Generate forever",
    tabStories: "Infinite stories",
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
    generateActivity: "Generate an activity",
    infiniteGenerator: "Infinite generator",
    storyLevel: "Difficulty",
    storyLevel1: "Easy",
    storyLevel2: "More difficult",
    colorMode: "Colours",
    withColors: "Name the colours",
    withoutColors: "Do not name colours",
    theme: "Theme",
    adventure: "Adventure",
    nature: "Nature",
    mystery: "Mystery",
    generateStory: "Generate a story",
    storyGenerator: "Infinite stories",
    buildPrompts: "Build prompts",
    proposals: "Quick proposals",
  },
  zh: {
    kicker: "首款法语 Six Bricks 应用",
    heroText: "无限生成 Six Bricks 活动，可使用或不使用垫板，用来促进语言、数学、记忆、注意力、动作能力、创造力、执行功能、社交能力以及学习的乐趣，适合从幼儿到高龄人群。",
    creatorCredit: "由 Chloé Schmidt-Dhonneur 创建。教育科学博士，Six Bricks 培训师。",
    tabFinder: "寻找活动",
    tabGenerator: "无限生成",
    tabStories: "无限故事",
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
    generateActivity: "生成活动",
    infiniteGenerator: "无限生成器",
    storyLevel: "难度",
    storyLevel1: "简单",
    storyLevel2: "更难",
    colorMode: "颜色",
    withColors: "说出颜色",
    withoutColors: "不说颜色",
    theme: "主题",
    adventure: "冒险",
    nature: "自然",
    mystery: "谜题",
    generateStory: "生成故事",
    storyGenerator: "无限故事",
    buildPrompts: "搭建提示",
    proposals: "快速建议",
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
const storyText = document.querySelector("#storyText");
const storyPrompts = document.querySelector("#storyPrompts");

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
    category: data.get("category"),
    group: data.get("group"),
    context: data.get("context"),
    duration: data.get("duration"),
    goal: data.get("goal")
  };

  state.matches = activities.filter((activity) => {
    return (
      matchesValue(criteria.category, activity.category) &&
      matchesList(criteria.group, activity.group) &&
      matchesList(criteria.context, activity.context) &&
      matchesValue(criteria.duration, activity.duration) &&
      matchesList(criteria.goal, activity.goals)
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
    activitySummary.textContent = "Aucune activité ne correspond exactement à cette combinaison. Garde une catégorie, puis relâche le contexte ou la durée.";
    materialsList.innerHTML = "";
    stepsList.innerHTML = "";
    variationText.textContent = "";
    questionText.textContent = "";
    favoriteButton.textContent = "☆";
    return;
  }

  activityCard.style.setProperty("--accent", categoryColors[activity.category] || "var(--red)");
  activityCategory.textContent = activity.category;
  activityTitle.textContent = activity.title;
  activitySummary.textContent = activity.summary;
  materialsList.innerHTML = activity.materials.map((item) => `<li>${item}</li>`).join("");
  stepsList.innerHTML = activity.steps.map((item) => `<li>${item}</li>`).join("");
  variationText.textContent = activity.variation;
  questionText.textContent = activity.question;
  activityTags.innerHTML = [
    durationLabel(activity.duration),
    groupLabel(activity.group),
    contextLabel(activity.context),
    `Source: ${activity.source}`
  ].map((tag) => `<span>${tag}</span>`).join("");

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
    long: "10 à 20 min"
  }[duration];
}

function groupLabel(groups) {
  const labels = {
    solo: "solo",
    duo: "duo",
    small: "petit groupe",
    class: "classe"
  };
  return groups.map((group) => labels[group]).join(" / ");
}

function contextLabel(contexts) {
  const labels = {
    table: "à table",
    floor: "au sol",
    outside: "dehors",
    transition: "transition",
    calm: "retour au calme"
  };
  return contexts.map((context) => labels[context]).join(" / ");
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
  storyText.innerHTML = story.paragraphs.map((paragraph) => `<p>${paragraph}</p>`).join("");
  storyPrompts.innerHTML = story.prompts.map((prompt) => `<li>${prompt}</li>`).join("");
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
    "une cabane de lecture", "une salle de yoga", "une prairie de printemps", "un refuge pour idées calmes", "une cité de nuages", "un ponton au soleil", "une classe-musée", "un jardin de mémoire", "un atelier de cartes postales", "un cercle de parole"
  ],
  missionTypes: [
    "retrouver l’ordre d’un chemin", "fabriquer un code commun", "composer un paysage en six éléments", "transmettre un message sans le répéter", "réparer une suite logique", "inventer un parcours à suivre", "classer des éléments selon une règle", "associer un geste à chaque brique", "raconter une scène en manipulant", "mémoriser une séquence avant d’agir",
    "reproduire un modèle invisible", "changer de point de vue", "choisir la meilleure stratégie", "passer d’un rythme lent à rapide", "construire une réponse collective", "transformer une erreur en nouvelle règle", "anticiper la prochaine étape", "décrire sans montrer", "écouter sans interrompre", "résoudre une contrainte spatiale",
    "comparer deux constructions", "préparer une consigne pour un partenaire", "créer une trace de l’histoire", "inventer un symbole par brique", "faire une suite croissante", "faire une suite décroissante", "lier mouvement et langage", "retenir deux actions avant de bouger", "adapter la consigne au groupe", "décider ensemble d’un ordre",
    "faire parler une construction", "organiser une mini-exposition", "retrouver l’élément manquant", "construire une réponse émotionnelle", "placer les briques selon un repère", "faire un défi de précision", "inventer une règle d’inhibition", "passer du concret à l’abstrait", "coder une histoire avec les briques", "créer une version silencieuse",
    "suivre une consigne inversée", "associer une quantité à une action", "décomposer un problème", "préparer un relais", "créer un chemin de retour"
  ],
  manipulations: [
    "empiler", "aligner", "déplacer sans soulever", "soulever puis reposer", "retourner", "faire pivoter", "cacher sous la main", "placer derrière le dos", "passer à un partenaire", "pincer avec deux doigts",
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

function createInfiniteActivity(values, lang) {
  values.level = values.family === "listenCopy" ? "2" : values.family === "backToBack" ? "2" : String(1 + randomIndex([1, 2]));
  if (values.family === "backToBack") return createBackToBackActivity(values, lang);
  if (values.family === "listenCopy") return createListenCopyActivity(values, lang);

  const randomId = createRandomId();
  const recent = state.activityHistory || [];
  const structure = pickFresh(storyEngine.narrativeStructures, recent, "structure");
  const world = pickFresh(storyEngine.worlds, recent, "world");
  const mission = pickFresh(storyEngine.missionTypes, recent, "mission");
  const manipulation = pickFresh(storyEngine.manipulations, recent, "manipulation");
  const objective = values.goal === "all" ? pick(storyEngine.objectives) : pick(goalFamilies[values.goal] || storyEngine.objectives);
  const challenge = pickFresh(storyEngine.missionTypes, recent, "challenge");
  const colors = shuffle(Object.keys(storyEngine.colorObjects)).slice(0, 4);
  const [c1, c2, c3] = colors;
  const difficulty = pick(["accessible", "intermédiaire", "challenge"]);
  const titleBits = {
    fr: {
      free: "Défi Six Bricks",
      lined: "Mission sur plateau ligné",
      movement: "Parcours en mouvement"
    },
    en: {
      free: "Six Bricks challenge",
      lined: "Lined mat mission",
      movement: "Movement path"
    },
    zh: {
      free: "六块积木自由挑战",
      lined: "线条垫板任务",
      movement: "动作路线"
    }
  };
  const materialsByFamily = {
    fr: {
      free: ["Six briques par participant", "Un espace de table ou de sol"],
      lined: ["Six briques par participant", "Un plateau ligné ou une feuille avec lignes"],
      movement: ["Six briques par participant", "Un plateau de mouvements ou des repères au sol"]
    },
    en: {
      free: ["Six bricks per participant", "A table or floor space"],
      lined: ["Six bricks per participant", "A lined mat or paper with lines"],
      movement: ["Six bricks per participant", "A movement mat or floor markers"]
    },
    zh: {
      free: ["每名参与者六块积木", "桌面或地面空间"],
      lined: ["每名参与者六块积木", "线条垫板或画线纸"],
      movement: ["每名参与者六块积木", "动作垫板或地面标记"]
    }
  };
  const familyConstraint = {
    free: `L’activité se déroule dans ${world}, sans support imposé.`,
    lined: `Le plateau ligné sert à matérialiser les passages, les retours et les changements de zone.`,
    movement: `Le plateau de mouvements ou les repères au sol ajoutent un déplacement du corps entre deux briques.`
  }[values.family];
  const title = `${titleBits.fr[values.family]} : ${capitalize(pick(storyEngine.titleNouns))}`;
  const waitRule = difficulty === "challenge" ? "Les participants attendent deux consignes avant de manipuler." : "Les participants manipulent après chaque consigne.";
  const supportRule = values.family === "lined"
    ? "Chaque brique doit franchir ou toucher une ligne au moins une fois."
    : values.family === "movement"
      ? "Entre deux actions, ajoute un geste corporel simple: pas de côté, rotation, étirement ou équilibre."
      : "Les briques peuvent rester au sol, dans les mains ou sur une feuille selon l’espace disponible.";
  const steps = [
    `Annonce l’univers: ${world}. La mission du groupe est de ${mission}.`,
    `Choisis les briques ${c1}, ${c2} et ${c3}. La première lance l’action, la deuxième change la règle, la troisième sert de signal d’arrêt.`,
    `Contrainte de manipulation: "${manipulation}" avec la brique ${c1}. Place ensuite ${c2} à une distance ou une position négociée ensemble.`,
    supportRule,
    `Ajoute le défi: ${challenge}. Les participants doivent expliquer leur stratégie avant la dernière manipulation.`,
    difficulty === "challenge" ? "Termine par une reprise silencieuse: même mission, mais seuls les gestes sont autorisés." : "Termine par une courte verbalisation: chacun nomme une chose qu’il a observée."
  ];

  rememberRecent("activityHistory", { structure, world, mission, manipulation, challenge });

  return {
    title,
    randomId,
    tags: [objective, difficulty, structure],
    summary: `${familyConstraint} Mission: ${mission}, avec une contrainte de manipulation: ${manipulation}. Objectif principal: ${objective}.`,
    materials: materialsByFamily[lang]?.[values.family] || materialsByFamily.fr[values.family],
    steps,
    variation: `Facile: réduire à trois briques et verbaliser après chaque geste. Difficile: ${waitRule} Ajouter une règle d’inhibition: si ${c3} est nommé, on ne bouge pas.`,
    question: `Qu’est-ce qui t’a aidé à réussir la mission: regarder, écouter, mémoriser, parler ou bouger ?`,
    proposals: [
      `Relance: transformer ${challenge} en défi coopératif.`,
      `Changer la modalité: ${pick(storyEngine.manipulations)}.`,
      `Changer l’objectif: ${pick(storyEngine.objectives)}.`
    ]
  };
}

function createBackToBackActivity(values, lang) {
  const words = activityWords(lang);
  const order = shuffle(words.colors).slice(0, 6);
  const relationsEasy = words.relationsEasy;
  const relationsHard = words.relationsHard;
  const relationSet = Number(values.level) === 1 ? relationsEasy : relationsHard;
  const instructions = order.map((color, index) => {
    if (index === 0) return words.backToBackStart(color);
    const ref = order[Math.max(0, index - 1)];
    return words.backToBackPlace(color, pick(relationSet), ref);
  });

  return {
    title: words.backToBackTitle,
    tags: [words.duo, words.memory],
    summary: words.backToBackSummary,
    materials: words.backToBackMaterials,
    steps: [
      words.backToBackRole1,
      words.backToBackRole2,
      ...instructions,
      words.compareModels,
      words.switchRoles
    ],
    variation: Number(values.level) > 1 ? words.backToBackHardVariation : words.backToBackEasyVariation,
    question: words.backToBackQuestion,
    proposals: [
      words.proposalReadOnce,
      words.proposalAskQuestions,
      words.proposalNoColors,
      words.proposalDrawBeforeCompare
    ]
  };
}

function createListenCopyActivity(values, lang) {
  const words = activityWords(lang);
  const order = shuffle(words.colors).slice(0, 6);
  const corners = shuffle(words.corners);
  const hand1 = pick(words.hands);
  const hand2 = pick(words.hands);
  const stack = shuffle(order);
  const level = Number(values.level);

  const steps = [
    words.lineOrder(order),
    level > 1 ? words.a4Landscape : words.a4Portrait,
    words.crossSwap(order[0], order[3]),
    words.handMove(hand1, order[5], order[1]),
    words.cornerMove(hand2, order[2], corners[0]),
    words.cornerMove(hand2, order[4], corners[1]),
    words.anyHandMove(order[0], corners[2]),
    words.emptyCorner(order[1]),
    words.remainingQuestion(order[3], order[5]),
    words.balancePair(order[3], order[5]),
    words.stackInstruction(stack)
  ];

  if (level > 2) {
    steps.splice(5, 0, words.memoryPause);
    steps.push(words.reverseStack(stack));
  }

  return {
    title: words.listenCopyTitle,
    tags: [words.listen, words.executive],
    summary: words.listenCopySummary,
    materials: words.listenCopyMaterials,
    steps,
    variation: level > 1 ? words.listenCopyHardVariation : words.listenCopyEasyVariation,
    question: words.listenCopyQuestion,
    proposals: [
      words.proposalRightLeft,
      words.proposalCornersOnly,
      words.proposalBalance,
      words.proposalFinalPhoto
    ]
  };
}

function activityWords(lang) {
  const data = {
    fr: {
      colors: ["rouge", "orange", "jaune", "verte", "bleu clair", "bleu foncé"],
      relationsEasy: ["au-dessus de", "au-dessous de", "sur", "sous", "en croix sur", "dans le même sens que"],
      relationsHard: ["au-dessus en couvrant les 4 picots de gauche de", "au-dessus en couvrant les 4 picots de droite de", "horizontalement sur", "verticalement sous", "en recouvrant les picots du milieu de", "en croix sous"],
      corners: ["coin supérieur gauche", "coin supérieur droit", "coin inférieur gauche", "coin inférieur droit"],
      hands: ["main droite", "main gauche", "main de ton choix"],
      duo: "duo",
      memory: "mémoire et langage spatial",
      listen: "écoute active",
      executive: "fonctions exécutives",
      level: (level) => `Niveau ${level}`,
      backToBackTitle: "Dos à dos généré",
      backToBackSummary: "Deux partenaires construisent le même modèle sans se voir: l’un lit les consignes, l’autre écoute et reproduit.",
      backToBackMaterials: ["Six briques par personne", "Deux partenaires assis ou debout dos à dos"],
      backToBackRole1: "Personne 1 lit chaque consigne deux fois à voix haute et construit son modèle en même temps.",
      backToBackRole2: "Personne 2 écoute sans regarder et construit le même modèle sans poser de questions.",
      backToBackStart: (color) => `Prenez la brique ${color} et posez-la devant vous.`,
      backToBackPlace: (color, relation, ref) => `Placez la brique ${color} ${relation} la brique ${ref}.`,
      compareModels: "Comparez les deux modèles et cherchez les différences sans juger.",
      switchRoles: "Échangez les rôles et générez une nouvelle série.",
      backToBackEasyVariation: "Niveau doux: autoriser une répétition supplémentaire à la fin de la série.",
      backToBackHardVariation: "Niveau avancé: la personne qui écoute doit attendre deux consignes avant de construire.",
      backToBackQuestion: "Quels mots ont rendu la construction plus facile à comprendre ?",
      listenCopyTitle: "Écoute et fais pareil généré",
      listenCopySummary: "Les participants partent d’une ligne de six briques, écoutent des consignes de mains, coins, échanges et pile finale.",
      listenCopyMaterials: ["Six briques par participant", "Une feuille A4 devant la ligne de briques"],
      lineOrder: (order) => `Disposez les briques de gauche à droite: ${order.join(", ")}.`,
      a4Landscape: "Posez la feuille A4 devant vous en orientation paysage.",
      a4Portrait: "Posez la feuille A4 devant vous en orientation portrait.",
      crossSwap: (a, b) => `Croisez les avant-bras, prenez la brique ${a} et la brique ${b}, puis échangez-les de place.`,
      handMove: (hand, color, ref) => `Avec votre ${hand}, déplacez la brique ${color} de l’autre côté, devant la brique ${ref}.`,
      cornerMove: (hand, color, corner) => `Avec votre ${hand}, placez la brique ${color} dans le ${corner} de la feuille.`,
      anyHandMove: (color, corner) => `Avec n’importe quelle main, placez la brique ${color} dans le ${corner}.`,
      emptyCorner: (color) => `Déplacez la brique ${color} vers le coin encore vide.`,
      remainingQuestion: (a, b) => `Quelles couleurs restent dans la ligne ? Réponse attendue: ${a} et ${b}.`,
      balancePair: (a, b) => `Assemblez les briques ${a} et ${b}, puis gardez-les en équilibre 10 secondes.`,
      stackInstruction: (stack) => `Construisez une pile finale, de bas en haut: ${stack.join(", ")}.`,
      memoryPause: "Pause mémoire: répétez mentalement les deux dernières consignes avant de bouger.",
      reverseStack: (stack) => `Défi avancé: reconstruisez la pile dans l’ordre inverse: ${[...stack].reverse().join(", ")}.`,
      listenCopyEasyVariation: "Répéter chaque consigne deux fois et laisser les participants pointer avant de déplacer.",
      listenCopyHardVariation: "Lire la série une seule fois et demander une vérification silencieuse avant la pile finale.",
      listenCopyQuestion: "Quelle consigne a demandé le plus d’attention ?",
      proposalReadOnce: "Lire une seule fois au lieu de deux.",
      proposalAskQuestions: "Autoriser une seule question joker.",
      proposalNoColors: "Remplacer les couleurs par première, deuxième, troisième brique.",
      proposalDrawBeforeCompare: "Dessiner le modèle avant de comparer.",
      proposalRightLeft: "Imposer uniquement main droite puis uniquement main gauche.",
      proposalCornersOnly: "Faire une série avec seulement les coins de la feuille.",
      proposalBalance: "Changer la partie du corps pour l’équilibre: tête, front, épaule.",
      proposalFinalPhoto: "Prendre une photo mentale avant la pile finale."
    },
    en: {
      colors: ["red", "orange", "yellow", "green", "light blue", "dark blue"],
      relationsEasy: ["above", "below", "on top of", "under", "crosswise on", "in the same direction as"],
      relationsHard: ["above covering the 4 left studs of", "above covering the 4 right studs of", "horizontally on", "vertically under", "covering the middle studs of", "crosswise under"],
      corners: ["top-left corner", "top-right corner", "bottom-left corner", "bottom-right corner"],
      hands: ["right hand", "left hand", "hand of your choice"],
      duo: "pair",
      memory: "memory and spatial language",
      listen: "active listening",
      executive: "executive functions",
      level: (level) => `Level ${level}`,
      backToBackTitle: "Generated back-to-back build",
      backToBackSummary: "Two partners build the same model without seeing each other: one reads, the other listens and copies.",
      backToBackMaterials: ["Six bricks per person", "Two partners sitting or standing back to back"],
      backToBackRole1: "Person 1 reads each instruction twice and builds their model at the same time.",
      backToBackRole2: "Person 2 listens without looking and builds the same model without asking questions.",
      backToBackStart: (color) => `Take the ${color} brick and place it in front of you.`,
      backToBackPlace: (color, relation, ref) => `Place the ${color} brick ${relation} the ${ref} brick.`,
      compareModels: "Compare both models and look for differences without judging.",
      switchRoles: "Swap roles and generate a new series.",
      backToBackEasyVariation: "Gentle level: allow one extra repetition at the end.",
      backToBackHardVariation: "Advanced level: the listener waits for two instructions before building.",
      backToBackQuestion: "Which words made the build easier to understand?",
      listenCopyTitle: "Generated listen-and-copy",
      listenCopySummary: "Children start from a line of six bricks and follow instructions about hands, corners, swaps and a final stack.",
      listenCopyMaterials: ["Six bricks per participant", "One A4 sheet in front of the brick line"],
      lineOrder: (order) => `Place the bricks from left to right: ${order.join(", ")}.`,
      a4Landscape: "Place the A4 sheet in landscape orientation.",
      a4Portrait: "Place the A4 sheet in portrait orientation.",
      crossSwap: (a, b) => `Cross your forearms, take the ${a} and ${b} bricks, then swap their places.`,
      handMove: (hand, color, ref) => `With your ${hand}, move the ${color} brick to the other side, in front of the ${ref} brick.`,
      cornerMove: (hand, color, corner) => `With your ${hand}, place the ${color} brick in the ${corner}.`,
      anyHandMove: (color, corner) => `With either hand, place the ${color} brick in the ${corner}.`,
      emptyCorner: (color) => `Move the ${color} brick to the empty corner.`,
      remainingQuestion: (a, b) => `Which colours remain in the line? Expected answer: ${a} and ${b}.`,
      balancePair: (a, b) => `Connect the ${a} and ${b} bricks, then balance them for 10 seconds.`,
      stackInstruction: (stack) => `Build a final stack, bottom to top: ${stack.join(", ")}.`,
      memoryPause: "Memory pause: silently repeat the last two instructions before moving.",
      reverseStack: (stack) => `Advanced challenge: rebuild the stack in reverse order: ${[...stack].reverse().join(", ")}.`,
      listenCopyEasyVariation: "Repeat each instruction twice and let participants point before moving.",
      listenCopyHardVariation: "Read the series only once and ask for a silent check before the final stack.",
      listenCopyQuestion: "Which instruction required the most attention?",
      proposalReadOnce: "Read only once instead of twice.",
      proposalAskQuestions: "Allow one joker question.",
      proposalNoColors: "Replace colours with first, second, third brick.",
      proposalDrawBeforeCompare: "Draw the model before comparing.",
      proposalRightLeft: "Use only the right hand, then only the left hand.",
      proposalCornersOnly: "Run a sequence using only sheet corners.",
      proposalBalance: "Change the balancing body part: head, forehead, shoulder.",
      proposalFinalPhoto: "Take a mental picture before the final stack."
    },
    zh: {
      colors: ["红色", "橙色", "黄色", "绿色", "浅蓝色", "深蓝色"],
      relationsEasy: ["在上方", "在下方", "放在上面", "放在下面", "交叉放在", "方向和"],
      relationsHard: ["在上方并盖住左边4个凸点", "在上方并盖住右边4个凸点", "横向放在", "纵向放在下面", "盖住中间凸点", "交叉放在下面"],
      corners: ["左上角", "右上角", "左下角", "右下角"],
      hands: ["右手", "左手", "任意一只手"],
      duo: "两人",
      memory: "记忆与空间语言",
      listen: "主动倾听",
      executive: "执行功能",
      level: (level) => `级别 ${level}`,
      backToBackTitle: "背靠背生成搭建",
      backToBackSummary: "两名伙伴背靠背搭建同一个模型：一人读指令，另一人听并复制。",
      backToBackMaterials: ["每人六块积木", "两名伙伴背靠背坐或站"],
      backToBackRole1: "第1人每条指令读两遍，同时搭建自己的模型。",
      backToBackRole2: "第2人不看模型，只听指令搭建，不能提问。",
      backToBackStart: (color) => `拿起${color}积木，放在自己面前。`,
      backToBackPlace: (color, relation, ref) => `把${color}积木${relation}${ref}积木。`,
      compareModels: "比较两个模型，找出不同，不评价对错。",
      switchRoles: "交换角色，再生成一组新指令。",
      backToBackEasyVariation: "温和版：最后允许再重复一次。",
      backToBackHardVariation: "进阶版：听的人要等两条指令后才能开始搭建。",
      backToBackQuestion: "哪些词让你更容易理解搭建？",
      listenCopyTitle: "听一听，照着做生成",
      listenCopySummary: "参与者从六块积木的一条线开始，听关于手、角落、交换和最终堆叠的指令。",
      listenCopyMaterials: ["每名参与者六块积木", "一张放在积木线前面的 A4 纸"],
      lineOrder: (order) => `从左到右摆放积木：${order.join("，")}。`,
      a4Landscape: "把 A4 纸横向放在面前。",
      a4Portrait: "把 A4 纸纵向放在面前。",
      crossSwap: (a, b) => `交叉前臂，拿起${a}和${b}积木，并交换位置。`,
      handMove: (hand, color, ref) => `用${hand}把${color}积木移到另一边，放在${ref}积木前面。`,
      cornerMove: (hand, color, corner) => `用${hand}把${color}积木放到纸的${corner}。`,
      anyHandMove: (color, corner) => `用任意一只手把${color}积木放到${corner}。`,
      emptyCorner: (color) => `把${color}积木移动到空的角落。`,
      remainingQuestion: (a, b) => `线里还剩哪两种颜色？参考答案：${a}和${b}。`,
      balancePair: (a, b) => `把${a}和${b}积木连接起来，并保持平衡10秒。`,
      stackInstruction: (stack) => `搭建最终积木塔，从下到上：${stack.join("，")}。`,
      memoryPause: "记忆暂停：移动前在心里重复最后两条指令。",
      reverseStack: (stack) => `进阶挑战：按相反顺序重建积木塔：${[...stack].reverse().join("，")}。`,
      listenCopyEasyVariation: "每条指令读两遍，移动前允许参与者先指出位置。",
      listenCopyHardVariation: "整组指令只读一遍，最终堆叠前先安静检查。",
      listenCopyQuestion: "哪条指令最需要专注？",
      proposalReadOnce: "只读一遍，不读两遍。",
      proposalAskQuestions: "允许一次求助问题。",
      proposalNoColors: "用第一块、第二块、第三块代替颜色。",
      proposalDrawBeforeCompare: "比较前先画出模型。",
      proposalRightLeft: "先只用右手，再只用左手。",
      proposalCornersOnly: "只使用纸张四个角落做一组指令。",
      proposalBalance: "更换平衡部位：头、额头、肩膀。",
      proposalFinalPhoto: "最终堆叠前先拍一张“心理照片”。"
    }
  };
  return data[lang] || data.fr;
}

function createStory(values, lang) {
  const randomId = createRandomId();
  const recent = state.storyHistory || [];
  const structure = pickFresh(storyEngine.narrativeStructures, recent, "structure");
  const world = pickFresh(storyEngine.worlds, recent, "world");
  const mission = pickFresh(storyEngine.missionTypes, recent, "mission");
  const manipulation = pickFresh(storyEngine.manipulations, recent, "manipulation");
  const objective = pickFresh(storyEngine.objectives, recent, "objective");
  const opening = pickFresh(storyEngine.openings, recent, "opening");
  const titleNoun = pickFresh(storyEngine.titleNouns, recent, "titleNoun");
  const connector = pick(storyEngine.connectors);
  const relaunch = pick(storyEngine.relaunches);
  const difficulty = values.level === "1" ? "facile" : "plus difficile";
  const colors = shuffle(Object.keys(storyEngine.colorObjects));
  const items = colors.map((color) => {
    const object = pick(storyEngine.colorObjects[color]);
    return {
      color,
      object,
      spoken: values.colorMode === "with" ? `${object} ${color}` : object
    };
  });
  const spokenObjects = items.map((item) => item.spoken);
  const title = `${capitalize(titleNoun)} ${pick(["en mouvement", "à écouter", "des six gestes", "sans erreur", "du grand ordre", "à partager"])}`;
  const setup = `${opening}, le groupe découvre ${world}. ${capitalize(structure)}: ${connector}.`;
  const storyLine = values.colorMode === "with"
    ? `Dans le récit, les couleurs apparaissent dans cet ordre: ${spokenObjects.join(", ")}. Les participants écoutent sans toucher les briques, puis reconstruisent l’ordre à la fin.`
    : `Dans le récit, les objets apparaissent dans cet ordre: ${spokenObjects.join(", ")}. Les participants peuvent placer chaque brique au fur et à mesure qu’ils reconnaissent l’objet évoqué.`;
  const missionText = `Mission Six Bricks: ${mission}, en utilisant la modalité "${manipulation}" et en visant ${objective}.`;
  const harderRule = values.level === "1"
    ? "La consigne reste courte: une action, une brique, une verbalisation."
    : `Ajoute une contrainte: avant de manipuler, il faut retenir deux actions et annoncer pourquoi la brique choisie correspond à l’histoire.`;
  const constructionInstructions = [
    values.colorMode === "with"
      ? "Écoute toute l’histoire sans toucher les briques."
      : "Place chaque brique au moment où l’objet correspondant est entendu.",
    `Construis ou place les briques dans l’ordre narratif: ${items.map((item) => values.colorMode === "with" ? item.color : item.object).join(" -> ")}.`,
    `À chaque étape, ${manipulation} la brique avant de la poser.`,
    harderRule,
    "À la fin, raconte la mission en suivant les briques du doigt."
  ];

  rememberRecent("storyHistory", { structure, world, mission, manipulation, objective, opening, titleNoun });

  return {
    title,
    randomId,
    paragraphs: [
      `Mise en situation: ${setup}`,
      storyLine,
      missionText
    ],
    prompts: [
      `Consignes de construction: ${constructionInstructions.join(" ")}`,
      `Variante facile: utiliser trois briques seulement, ralentir la lecture et verbaliser après chaque manipulation.`,
      `Variante difficile: inverser l’ordre final, ajouter une consigne interdite ou demander une justification avant chaque déplacement.`,
      `Question de verbalisation: Comment as-tu su quelle brique choisir et à quel moment la placer ?`,
      `Compétence travaillée: ${objective}.`,
      `Idée de relance: ${relaunch}`
    ]
  };
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
