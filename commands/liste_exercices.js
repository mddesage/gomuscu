const exercices = [
    {
      nom: 'Développé couché',
      description: 'Un exercice classique pour travailler les pectoraux, les triceps et les deltoïdes antérieurs.',
      groupeMusculaire: 'pectoraux'
      },
      {
      nom: 'Traction à la barre fixe',
      description: "Un exercice de base pour travailler les muscles du dos, notamment les grands dorsaux, les biceps et les avant-bras.",
      groupeMusculaire: 'dos'
      },
      {
      nom: 'Rowing haltère',
      description: "Un exercice qui cible principalement les grands dorsaux, les trapèzes, les rhomboïdes et les biceps.",
      groupeMusculaire: 'dos'
      },
      {
      nom: 'Dips',
      description: "Un exercice pour renforcer les triceps, les pectoraux et les deltoïdes antérieurs en utilisant le poids du corps.",
      groupeMusculaire: 'triceps'
      },
      {
      nom: 'Leg press',
      description: "Un exercice de musculation des jambes qui cible les quadriceps, les fessiers, les ischio-jambiers et les mollets.",
      groupeMusculaire: 'quadriceps'
      },
      {
      nom: 'Soulevé de terre',
      description: "Un exercice polyarticulaire qui renforce le dos, les jambes, les fessiers et les muscles du tronc.",
      groupeMusculaire: 'dos'
      },
      {
      nom: 'Élévation latérale',
      description: "Un exercice d'isolation pour travailler les deltoïdes latéraux et améliorer la largeur des épaules.",
      groupeMusculaire: 'épaules'
      },
      {
      nom: 'Fentes avant',
      description: "Un exercice pour renforcer les quadriceps, les ischio-jambiers et les fessiers, tout en améliorant l'équilibre et la stabilité.",
      groupeMusculaire: 'quadriceps'
      },
      {
      nom: 'Crunch',
      description: "Un exercice pour renforcer les muscles abdominaux, notamment le grand droit de l'abdomen.",
      groupeMusculaire: 'abdominaux'
      },
      {
      nom: 'Extension des mollets',
      description: "Un exercice d'isolation pour renforcer et tonifier les muscles du mollet, notamment le gastrocnémien et le soléaire.",
      groupeMusculaire: 'mollets'
      },
      {
      nom: 'Développé épaules (militaire)',
      description: "Un exercice pour développer la force et la masse des épaules, en ciblant principalement les deltoïdes et les trapèzes.",
      groupeMusculaire: 'épaules'
      },
      {
      nom: 'Pull-over avec haltère',
      description: "Un exercice pour étirer et renforcer les muscles du haut du corps, notamment les pectoraux, les grands dorsaux et les triceps.",
      groupeMusculaire: 'pectoraux'
      },
      {
      nom: 'Biceps curl à la barre',
      description: "Un exercice pour travailler les biceps et les avant-bras, en utilisant une barre droite ou une barre EZ pour varier la prise.",
      groupeMusculaire: 'biceps'
      },
      {
      nom: 'Skullcrushers (barre au front)',
      description: "Un exercice d'isolation pour les triceps, qui cible spécifiquement la longue portion du triceps.",
      groupeMusculaire: 'triceps'
      },
      {
      nom: 'Pec deck (butterfly)',
      description: "Un exercice pour renforcer les pectoraux, en utilisant une machine spécifique pour effectuer des mouvements d'adduction des bras.",
      groupeMusculaire: 'pectoraux'
      },
      {
      nom: 'Presse à cuisses',
      description: "Un exercice pour travailler les quadriceps, les fessiers, les ischio-jambiers et les mollets, en utilisant une machine à presse.",
      groupeMusculaire: 'quadriceps'
      },
      {
      nom: 'Good mornings',
      description: "Un exercice pour renforcer les muscles du bas du dos, les ischio-jambiers et les fessiers, en réalisant une flexion du tronc vers l'avant.",
      groupeMusculaire: 'fessiers'
      },
      {
      nom: 'Face pull',
      description: "Un exercice pour renforcer les muscles des épaules, notamment les deltoïdes postérieurs, les trapèzes et les rhomboïdes.",
      groupeMusculaire: 'épaules'
      },
      {
      nom: 'Cable crunch',
      description: "Un exercice pour renforcer les abdominaux, en utilisant un câble et une poulie pour effectuer des mouvements de crunch.",
      groupeMusculaire: 'abdominaux'
      },
      {
      nom: 'Donkey calf raises',
      description: "Un exercice pour renforcer les muscles du mollet, en réalisant des extensions des mollets avec un partenaire ou une machine spécifique.",
      groupeMusculaire: 'mollets'
      },
      {
      nom: 'Hip thrust',
      description: "Un exercice pour renforcer les muscles des fessiers et des ischio-jambiers, en utilisant une barre et un banc pour réaliser une extension de hanche.",
      groupeMusculaire: 'fessiers'
      },
      {
      nom: 'Reverse fly',
      description: "Un exercice pour renforcer les muscles des épaules et des omoplates, en utilisant des haltères et en réalisant un mouvement d'élévation latérale inversé.",
      groupeMusculaire: 'épaules'
      },
      {
      nom: 'Triceps pushdown',
      description: "Un exercice pour renforcer les triceps, en utilisant une machine à poulie et une barre pour effectuer un mouvement de poussée vers le bas.",
      groupeMusculaire: 'triceps'
      },
      {
      nom: 'Step-up',
      description: "Un exercice pour renforcer les muscles des jambes, en utilisant une marche ou un banc pour réaliser des montées et descentes alternées.",
      groupeMusculaire: 'quadriceps'
      },
      {
      nom: 'Russian twist',
      description: "Un exercice pour renforcer les muscles abdominaux, en réalisant une rotation du buste tout en maintenant une position assise.",
      groupeMusculaire: 'abdominaux'
      },
      {
      nom: 'Bulgarian split squat',
      description: "Un exercice pour renforcer les quadriceps, les ischio-jambiers et les fessiers, en utilisant un banc pour réaliser une fente avec une jambe en avant.",
      groupeMusculaire: 'quadriceps'
      },
      {
      nom: 'Chin-up',
      description: "Un exercice pour renforcer les muscles du dos et des biceps, en réalisant une traction à la barre fixe avec les paumes de main vers soi.",
      groupeMusculaire: 'dos'
      },
      {
      nom: 'Lateral raise machine',
      description: "Un exercice pour renforcer les muscles des épaules, en utilisant une machine spécifique pour effectuer des élévations latérales.",
      groupeMusculaire: 'épaules'
      },
      {
      nom: 'Leg curl',
      description: "Un exercice pour renforcer les ischio-jambiers, en utilisant une machine à curl pour effectuer un mouvement de flexion de la jambe.",
      groupeMusculaire: 'ischios jambiers'
      },
      {
      nom: 'Standing calf raise',
      description: "Un exercice pour renforcer les muscles du mollet, en réalisant une extension des mollets debout avec des haltères ou une machine spécifique.",
      groupeMusculaire: 'mollets'
      },
      {
      nom: 'Decline bench press',
      description: "Un exercice pour renforcer les pectoraux, les triceps et les deltoïdes antérieurs, en réalisant un développé couché sur un banc décliné.",
      groupeMusculaire: 'pectoraux'
      },
      {
      nom: 'Seated cable row',
      description: "Un exercice pour renforcer les muscles du dos, notamment les grands dorsaux, les trapèzes et les rhomboïdes, en utilisant une machine à poulie.",
      groupeMusculaire: 'dos'
      },
      {
      nom: 'Incline dumbbell press',
      description: "Un exercice pour renforcer les pectoraux, les deltoïdes antérieurs et les triceps, en réalisant un développé couché sur un banc incliné avec des haltères.",
      groupeMusculaire: 'pectoraux',
      },
      {
      nom: 'Hammer curl',
      description: "Un exercice pour renforcer les biceps et les avant-bras, en réalisant un curl avec des haltères en prise marteau.",
      groupeMusculaire: 'biceps',
      },
      {
      nom: 'Calf press on leg press machine',
      description: "Un exercice pour renforcer les muscles du mollet, en utilisantune machine à presse à jambes pour effectuer des extensions des mollets.",
      groupeMusculaire: 'mollets',
      },
      {
      nom: 'Plank',
      description: "Un exercice pour renforcer les muscles abdominaux et du dos, en maintenant une position de planche sur les coudes et les pieds.",
      groupeMusculaire: 'abdominaux',
      },
      {
      nom: 'Leg extension',
      description: "Un exercice pour renforcer les quadriceps, en utilisant une machine à extension pour effectuer un mouvement de poussée vers le haut.",
      groupeMusculaire: 'quadriceps',
      },
      {
      nom: 'Close grip bench press',
      description: "Un exercice pour renforcer les triceps, les pectoraux et les deltoïdes antérieurs, en réalisant un développé couché avec une prise serrée sur la barre.",
      groupeMusculaire: 'triceps',
      },
      {
      nom: 'Seated calf raise',
      description: "Un exercice pour renforcer les muscles du mollet, en réalisant une extension des mollets assis avec des haltères ou une machine spécifique.",
      groupeMusculaire: 'mollets',
      }, 
      {
      nom: 'Push-up',
      description: "Un exercice pour renforcer les muscles du haut du corps, en utilisant le poids du corps pour réaliser des pompes sur les mains et les pieds.",
      groupeMusculaire: 'pectoraux'
      },
      {
      nom: 'Dumbbell fly',
      description: "Un exercice pour renforcer les pectoraux et les deltoïdes antérieurs, en utilisant des haltères pour réaliser un mouvement de fly.",
      groupeMusculaire: 'pectoraux'
      },
      {
      nom: 'Lat pulldown',
      description: "Un exercice pour renforcer les muscles du dos, notamment les grands dorsaux et les biceps, en utilisant une machine à poulie pour réaliser une traction vers le bas.",
      groupeMusculaire: 'dos'
      },
      {
      nom: 'Bent over row',
      description: "Un exercice pour renforcer les muscles du dos, notamment les grands dorsaux, les trapèzes, les rhomboïdes et les biceps, en réalisant un rowing avec des haltères ou une barre.",
      groupeMusculaire: 'dos'
      },
      {
      nom: 'Side plank',
      description: "Un exercice pour renforcer les muscles abdominaux et du dos, en maintenant une position de planche sur le côté, en appui sur un bras et un pied.",
      groupeMusculaire: 'abdominaux'
      },
      {
      nom: 'One-legged deadlift',
      description: "Un exercice pour renforcer les muscles des jambes, les fessiers et les ischio-jambiers, en réalisant un soulevé de terre avec une jambe en l'air.",
      groupeMusculaire: 'fessiers'
      },
      {
      nom: 'Overhead press with dumbbells',
      description: "Un exercice pour renforcer les épaules, en réalisant un développé militaire avec des haltères en position haute.",
      groupeMusculaire: 'épaules'
      },
      {
      nom: 'Incline bench dumbbell fly',
      description: "Un exercice pour renforcer les pectoraux et les deltoïdes antérieurs, en réalisant un mouvement de fly avec des haltères sur un banc incliné.",
      groupeMusculaire: 'pectoraux'
      },
      {
      nom: 'Sumo deadlift',
      description: "Un exercice pour renforcer les muscles des jambes, les fessiers et le bas du dos, en réalisant un soulevé de terre avec une prise écartée.",
      groupeMusculaire: 'dos'
      },
      {
      nom: 'Hanging leg raise',
      description: "Un exercice pour renforcer les muscles abdominaux, en réalisant une élévation des jambes suspendu à une barre fixe.",
      groupeMusculaire: 'abdominaux'
      },
      {
      nom: 'Bulgarian split deadlift',
      description: "Un exercice pour renforcer les muscles des jambes, les fessiers et le bas du dos, en réalisant un soulevé de terre avec une jambe en avant et une jambe en arrière sur un banc.",
      groupeMusculaire: 'fessiers'
      },
      {
      nom: 'Seated dumbbell curl',
      description: "Un exercice pour renforcer les biceps et les avant-bras, en réalisant un curl avec des haltères en position assise.",
      groupeMusculaire: 'biceps'
      },
      {
      nom: 'Reverse grip pulldown',
      description: "Un exercice pour renforcer les muscles du dos, notamment les grands dorsaux et les biceps, en réalisant une traction à la barre fixe avec les paumes de main vers l'avant.",
      groupeMusculaire: 'dos'
      },
      {
      nom: 'Hip abductor machine',
      description: "Un exercice pour renforcer les muscles des hanches, en utilisant une machine spécifique pour effectuer des mouvements d'adduction des jambes.",
      groupeMusculaire: 'fessiers'
      },
      {
      nom: 'Lying leg curl',
      description: "Un exercice pour renforcer les ischio-jambiers, en utilisant une machine à curl pour effectuer un mouvement de flexion de la jambe en position allongée.",
      groupeMusculaire: 'ischios jambiers'
      },
      {
      nom: 'Incline bench press with dumbbells',
      description: "Un exercice pour renforcer les pectoraux, les deltoïdes antérieurs et les triceps, en réalisant un développé couché sur un banc incliné avec des haltères.",
      groupeMusculaire: 'pectoraux'
      },
      {
      nom: 'Close grip pull-down',
      description: "Un exercice pour renforcer les muscles du dos, notamment les grands dorsaux et les biceps, en utilisant une machine à poulie pour réaliser une traction vers le bas avec une prise serrée.",
      groupeMusculaire: 'dos'
      },
      {
      nom: 'Preacher curl',
      description: "Un exercice pour renforcer les biceps, en utilisant une machine spécifique pour réaliser un curl sur un banc incliné.",
      groupeMusculaire: 'biceps'
      },
      {
      nom: 'Side-lying clam',
      description: "Un exercice pour renforcer les muscles des hanches, en position latérale et en effectuant des mouvements d'abduction des jambes.",
      groupeMusculaire: 'fessiers'
      },
      {
      nom: 'One-arm dumbbell row',
      description: "Un exercice pour renforcer les muscles du dos, notamment les grands dorsaux, les trapèzes, les rhomboïdes et les biceps, en réalisant un rowing avec un haltère.",
      groupeMusculaire: 'dos'
      },
      {
      nom: 'Prone leg curl',
      description: "Un exercice pour renforcer les ischio-jambiers, en utilisant une machine à curl pour effectuer un mouvement de flexion de la jambe en position ventrale.",
      groupeMusculaire: 'ischios jambiers'
      },
      {
      nom: 'Kettlebell swing',
      description: "Un exercice pour renforcer les muscles des jambes, les fessiers, les ischio-jambiers, les muscles du dos et les épaules, en réalisant un mouvement de balancier avec une kettlebell.",
      groupeMusculaire: 'fessiers'
      },
      {
      nom: 'Reverse plank',
      description: "Un exercice pour renforcer les muscles du dos, des épaules, des triceps et des abdominaux, en maintenant une position de planche sur les mains et les pieds mais en étant tourné vers le plafond.",
      groupeMusculaire: 'dos'
      },
      {
      nom: 'Reverse lunge',
      description: "Un exercice pour renforcer les muscles des jambes, les fessiers et les ischio-jambiers, en réalisant une fente en arrière avec une jambe.",
      groupeMusculaire: 'fessiers'
      },
      {
      nom: 'Inverted row',
      description: "Un exercice pour renforcer les muscles du dos, notamment les grands dorsaux, les trapèzes et les biceps, en utilisant une barre fixe pour réaliser une traction inversée.",
      groupeMusculaire: 'dos'
      },
      {
      nom: 'Leg adduction machine',
      description: "Un exercice pour renforcer les muscles adducteurs des cuisses, en utilisant une machine spécifique pour effectuer des mouvements d'adduction des jambes.",
      groupeMusculaire: 'quadriceps'
      },
      {
      nom: 'Diamond push-up',
      description: "Un exercice pour renforcer les triceps et les pectoraux, en réalisant des pompes en position diamant (mains proches et doigts formant un losange).",
      groupeMusculaire: 'triceps'
      },
      {
      nom: 'Seated dumbbell press',
      description: "Un exercice pour renforcer les épaules, en réalisant un développé militaire assis avec des haltères.",
      groupeMusculaire: 'épaules'
      },
      {
      nom: 'Barbell hip thrust',
      description: "Un exercice pour renforcer les muscles des fessiers et des ischio-jambiers, en utilisant une barre et un banc pour réaliser une extension de hanche.",
      groupeMusculaire: 'fessiers'
      },
      {
      nom: 'Hanging leg twist',
      description: "Un exercice pour renforcer les muscles abdominaux, en réalisant une torsion du buste suspendu à une barre fixe.",
      groupeMusculaire: 'abdominaux'
      },
      {
      nom: 'Leg abduction machine',
      description: "Un exercice pour renforcer les muscles abducteurs des cuisses, en utilisant une machine spécifique pour effectuer des mouvements d'abduction des jambes.",
      groupeMusculaire: 'quadriceps'
      },
      {
      nom: 'Close grip pull-down',
      description: "Un exercice pour renforcer les muscles du dos, notamment les grands dorsaux, les trapèzes et les biceps, en réalisant une traction à la barre fixe avec une prise serrée.",
      groupeMusculaire: 'dos'
      },
      {
      nom: 'Seated leg curl',
      description: "Un exercice pour renforcer les ischio-jambiers, en utilisant une machine à curl pour effectuer un mouvement de flexion de la jambe assis.",
      groupeMusculaire: 'ischios jambiers'
      },
      {
      nom: 'Arnold press',
      description: "Un exercice pour renforcer les épaules, en réalisant un développé militaire avec des haltères en effectuant une rotation des bras.",
      groupeMusculaire: 'épaules'
      },
      {
      nom: 'Cable pull-through',
      description: "Un exercice pour renforcer les muscles des fessiers, des ischio-jambiers et du bas du dos, en utilisant une machine à poulie pour réaliser une extension de hanche.",
      groupeMusculaire: 'fessiers'
      },
      {
      nom: 'Russian hamstring curl',
      description: "Un exercice pour renforcer les ischio-jambiers, en réalisant une flexion de la jambe en position allongée sur le ventre, avec les pieds ancrés.",
      groupeMusculaire: 'ischios jambiers'
      },
      {
      nom: 'Sissy squat',
      description: "Un exercice pour renforcer les quadriceps, en réalisant une flexion des genoux en position debout et en gardant le dos droit.",
      groupeMusculaire: 'quadriceps'
      },
  ];


  module.exports = {
    exercices
  };