const e = {
  addMarkerOnSearch: {
    hint: "Indique s'il faut ajouter un marqueur sur la recherche."
  },
  allowChangingMarkers: {
    hint: "Si coché, l'utilisateur peut modifier les marqueurs."
  },
  allowMultipleMarkers: {
    hint: "Marqueurs multiples"
  },
  apiKey: {
    hint: "Clé API Google Maps. Enregistrez le formulaire et actualisez la page pour appliquer les modifications.",
    name: "Clé API"
  },
  collisionBehavior: {
    hint: "Le comportement de collision des marqueurs."
  },
  colorScheme: {
    hint: "La palette de couleurs à utiliser."
  },
  gestureHandling: {
    hint: "La manipulation gestuelle à utiliser."
  },
  language: {
    hint: "La langue à utiliser."
  },
  latitude: {
    hint: "Latitude du point central"
  },
  longitude: {
    hint: "Longitude du point central"
  },
  mapControlPosition: {
    hint: "La position du contrôle de la carte."
  },
  mapId: {
    hint: "L'ID de carte est un identifiant associé à un style de carte ou à une entité spécifique.",
    name: "Identifiant de la CARTE"
  },
  mapTypeId: {
    hint: "Le type de carte par défaut à utiliser.",
    name: "Type de carte"
  },
  markerWindowTitle: {
    hint: "Le titre de la fenêtre de marqueur.",
    name: "Titre de la fenêtre de marqueur"
  },
  markers: {
    hint: "Coordonnées des marqueurs"
  },
  region: {
    hint: "Le code de région à utiliser."
  },
  removeMarkerCaption: {
    hint: "La légende sur le bouton de suppression du marqueur.",
    name: "Supprimer la légende du marqueur"
  },
  searchPlaceholder: {
    hint: "Texte d'espace réservé pour l'entrée de recherche de carte.",
    name: "Espace réservé de recherche"
  },
  showMapControl: {
    hint: "Indique s'il faut afficher le contrôle de la carte."
  },
  zoom: {
    hint: "Niveau de zoom"
  }
}, t = {
  modules: {
    hint: "Permet de personnaliser le comportement et les fonctionnalités de l'éditeur. Lisez la documentation pour plus d'informations.",
    name: "Les Modules"
  },
  toolbarOptions: {
    hint: "Groupes de boutons à afficher sur la barre d'outils",
    name: "Options de la barre d'outils"
  }
}, a = {
  format: {
    hint: "Format de la date lors du rendu dans l'entrée",
    name: "Format"
  }
}, i = {
  format: {
    hint: "Format de l'heure lors du rendu dans l'entrée",
    name: "Format"
  }
}, n = {
  activeIndex: {
    hint: "L'indice de pas actif",
    name: "Indice actif"
  },
  finishButtonLabel: {
    hint: "L'étiquette du bouton de finition",
    name: "Étiquette du bouton de finition"
  },
  nextButtonLabel: {
    hint: "L'étiquette du bouton suivant",
    name: "Étiquette du bouton suivant"
  },
  prevButtonLabel: {
    hint: "L'étiquette du bouton précédent",
    name: "Étiquette du bouton précédent"
  },
  showSteps: {
    hint: "Si vrai, les étapes seront affichées",
    name: "Afficher les étapes"
  },
  showStepsLabels: {
    hint: "Si vrai, les étiquettes des étapes seront affichées",
    name: "Afficher les étiquettes des étapes"
  },
  steps: {
    hint: "Les étapes de l'assistant",
    name: "Étapes"
  },
  stepsNavigation: {
    hint: "Détermine les étapes disponibles pour la navigation en cliquant sur",
    name: "Navigation par étapes"
  },
  validateOnFinish: {
    hint: "Si vrai, l'assistant sera validé avant de terminer l'assistant",
    name: "Valider à l'arrivée"
  },
  validateOnNext: {
    hint: "Si vrai, l'étape sera validée avant de passer à l'étape suivante",
    name: "Valider au suivant"
  },
  verticalSteps: {
    hint: "Si vrai, les étapes seront affichées verticalement",
    name: "Marches verticales"
  },
  wizardHasNoSteps: "Pour ajouter les étapes de l'assistant, sélectionnez le composant et ajoutez les étapes dans le panneau Propriétés."
}, r = {
  add: "Ajouter",
  addAction: "Ajouter une action",
  addCodeAction: "Ajouter une action de code",
  arguments: "Arguments",
  code: "Code",
  common: "Commun",
  custom: "Personnalisé",
  delete: "Supprimer",
  duplicate: "Dupliquer",
  edit: "Modifier",
  name: "Nom",
  parameters: "Paramètres",
  type: "Type"
}, o = {
  accept: {
    hint: "Types de fichiers pouvant être acceptés. Voir attribut HTML standard: accepter",
    name: "Accepter"
  },
  action: {
    hint: "URL de TÉLÉCHARGEMENT",
    name: "Actions"
  },
  allowEmptyFormatting: {
    hint: "Par défaut, le composant PatternFormat n'applique pas la mise en forme lorsque la valeur est vide (null, undefined ou‘)",
    name: "Autoriser le formatage vide "
  },
  allowLeadingZeros: {
    hint: "Cela permet d'activer ou de désactiver les zéros non significatifs dans le champ de saisie. Par défaut, en cas de flou d'une entrée, les zéros en tête sont supprimés",
    name: "Autoriser les zéros non significatifs"
  },
  allowNegative: {
    hint: "S'il est défini sur false, les nombres négatifs ne seront pas autorisés",
    name: "Autoriser le négatif"
  },
  allowedDecimalSeparators: {
    hint: `Caractères qui, lorsqu'ils sont pressés, donnent un séparateur décimal. En cas d'absence, séparateur décimal et '."sont utilisés`,
    name: "Séparateurs décimaux autorisés"
  },
  appearance: {
    hint: "Définir l'apparence du sélecteur",
    name: "Apparence"
  },
  autoUpload: {
    hint: "Télécharger automatiquement les fichiers après les avoir sélectionnés",
    name: "Téléchargement automatique"
  },
  block: {
    hint: "Blocage d'une ligne entière",
    name: "Bloquer"
  },
  bodyFill: {
    hint: "Zone de contenu remplie de conteneurs",
    name: "Remplissage du corps"
  },
  calendarDefaultDate: {
    hint: "Date et heure de présentation par défaut du panneau Calendrier",
    name: "Date par défaut du calendrier"
  },
  checked: {
    hint: "Indique si la valeur est vérifiée",
    name: "Vérifié"
  },
  checkedChildren: {
    hint: "Le texte affiché à l'état coché",
    name: "Texte vérifié"
  },
  cleanable: {
    hint: "Indique si l'option peut être vidée",
    name: "Nettoyable"
  },
  code: {
    hint: "Modifier le code",
    name: "Code"
  },
  color: {
    hint: "La couleur principale du composant",
    name: "Couleur"
  },
  creatable: {
    hint: "Les paramètres peuvent créer de nouvelles options",
    name: "Créable"
  },
  data: {
    hint: "Données sélectionnables",
    name: "Données"
  },
  decimalScale: {
    hint: "S'il est défini, il limite le nombre de chiffres après la virgule décimale",
    name: "Échelle décimale"
  },
  decimalSeparator: {
    hint: "Définit le caractère décimal",
    name: "Séparateur décimal"
  },
  defaultOpen: {
    hint: "Valeur par défaut de la propriété ouverte",
    name: "Ouverture par défaut"
  },
  defaultValue: {
    hint: "Valeur par défaut",
    name: "Valeur par défaut"
  },
  disableMultipart: {
    hint: "Si 'true', désactivez l'utilisation d'un formulaire en plusieurs parties pour le téléchargement de fichiers et diffusez le fichier à la place. Certaines API (par exemple Amazon S3) peuvent s'attendre à ce que le fichier soit diffusé en continu plutôt qu'envoyé via un formulaire",
    name: "Désactiver les parties multiples"
  },
  disabled: {
    hint: "Indique si le composant est désactivé ou non",
    name: "Désactivé"
  },
  download: {
    hint: "Fait que le navigateur traite l'URL liée comme un téléchargement",
    name: "Télécharger"
  },
  downloadFilename: {
    hint: "Définir une valeur la suggère comme nom de fichier. / et \\ les caractères sont convertis en traits de soulignement (_)",
    name: "Télécharger le nom de fichier"
  },
  draggable: {
    hint: "Activé glisser-déposer pour télécharger",
    name: "Déplaçable"
  },
  editable: {
    hint: "Rendu en entrée, la valeur peut être saisie via le clavier",
    name: "Modifiable"
  },
  errorConfig: {
    show: "Spectacle"
  },
  eventKey: {
    hint: "La clé d'événement correspondant à cet élément",
    name: "Clé d'événement"
  },
  fixedDecimalScale: {
    hint: "S'il est défini sur true, il ajoute des 0 de fin après DecimalSeparator pour correspondre à l'échelle décimale donnée",
    name: "Échelle décimale fixe"
  },
  flexDirection: {
    hint: "Flex direction des enfants du conteneur",
    name: "Direction Générale"
  },
  format: {
    hint: "Formatez le motif en utilisant le caractère # (ou un caractère de motif). # est le caractère d'espace réservé pour les nombres. Exemple:'######'",
    name: "Format"
  },
  groupBy: {
    hint: 'Définir les critères de regroupement " clé "dans " données"',
    name: "Groupe par"
  },
  href: {
    hint: "L'URL vers laquelle pointe le lien hypertexte",
    name: "FRH"
  },
  htmlAttributes: {
    hint: "Attributs HTML au format React (CamelCase) ",
    name: "Attributs HTML"
  },
  isoWeek: {
    hint: "Norme ISO 8601, chaque semaine calendaire commence le lundi et le dimanche le septième jour",
    name: "Semaine Iso"
  },
  justifyContent: {
    name: "Alignement"
  },
  label: {
    hint: "Étiquette de réglage",
    name: "Étiquette"
  },
  limitEndYear: {
    hint: "Définir la limite supérieure de l'année disponible par rapport à la date de sélection actuelle",
    name: "Limite de fin d'année"
  },
  limitStartYear: {
    hint: "Définir la limite inférieure de l'année disponible par rapport à la date de sélection actuelle",
    name: "Année de début limite"
  },
  loading: {
    hint: "Indique si le composant est en état de chargement",
    name: "Chargement"
  },
  mask: {
    hint: "Utilisé comme caractère de masque pour les emplacements numériques, jusqu'à ce qu'un caractère numérique soit fourni pour cette position",
    name: "Masque"
  },
  method: {
    hint: "La méthode HTTP de demande de téléchargement",
    name: "Méthode"
  },
  name: {
    hint: "Télécharger le nom du paramètre du fichier correspondant",
    name: "Nom"
  },
  objectFit: {
    name: "Coupe"
  },
  objectPosition: {
    name: "Poste"
  },
  oneTap: {
    hint: "Un clic pour compléter la valeur de sélection",
    name: "Un robinet"
  },
  open: {
    hint: "Indique si le composant est ouvert",
    name: "Ouvert"
  },
  passwordMask: {
    hint: "Utiliser un masque de mot de passe",
    name: "Masque de mot de passe"
  },
  patternChar: {
    hint: "Cela permet de définir le caractère du modèle de format",
    name: "Caractère de motif"
  },
  placeholder: {
    hint: "Définition d'espaces réservés",
    name: "Espace Réservé"
  },
  placement: {
    hint: "Le placement du composant",
    name: "Placement"
  },
  prefix: {
    hint: "Ajoute le caractère de préfixe avant la valeur d'entrée",
    name: "Préfixe"
  },
  preload: {
    hint: "Téléchargez les données à l'avance, avant d'ouvrir la liste déroulante",
    name: "Précharge"
  },
  preventOverflow: {
    hint: "Empêcher le débordement des éléments flottants",
    name: "Éviter les débordements"
  },
  readOnly: {
    hint: "Si vrai, le composant sera en lecture seule",
    name: "Lecture seule"
  },
  showMeridian: {
    hint: "Affichage des heures au format 12",
    name: "Afficher le méridien"
  },
  showWeekNumbers: {
    hint: "Indique s'il faut afficher les numéros de semaine",
    name: "Afficher les numéros de semaine"
  },
  size: {
    hint: "Le composant peut avoir différentes tailles",
    name: "Taille"
  },
  suffix: {
    hint: "Ajoute le suffixe après la valeur d'entrée",
    name: "Suffixe "
  },
  target: {
    hint: "Où afficher l'URL liée, en tant que nom d'un contexte de navigation (un onglet, une fenêtre ou <iframe>)",
    name: "Cible"
  },
  textAlign: {
    name: "Alignement"
  },
  thousandsGroupStyle: {
    hint: "Mille style (mille): 123 456 789, style indien (lakh): 12,34,56,789, style chinois (wan): 1 2345 6789",
    name: "Style de groupe de milliers"
  },
  tooltipProps: {
    hint: "Utilisez l'info-bulle pour cet élément",
    tooltip: "Infobulle"
  },
  unCheckedChildren: {
    hint: "Le texte affiché à l'état non coché",
    name: "Texte décoché"
  },
  value: {
    hint: "Valeur (contrôlée)",
    name: "Valeur"
  },
  withCredentials: {
    hint: "Indique s'il faut transporter des cookies lors du téléchargement des demandes",
    name: "Avec informations d'identification"
  }
}, l = {
  editCodeAction: "Action de modification du code",
  editProperty: "Modifier la propriété",
  function: "Valeur calculable",
  localization: "Localisation fluide",
  simpleValue: "Valeur simple",
  simpleValueHint: "Modifiez la propriété dans le panneau de droite",
  use: "Utilisation"
}, s = {
  actionNameExists: "L'action avec ce nom existe déjà",
  nameIsRequired: "Le nom de l'action est requis",
  parameterNameExists: "Le paramètre avec ce nom existe déjà",
  parameterNameIsNotValid: "Le nom du paramètre n'est pas valide",
  parameterNameIsRequired: "Le nom du paramètre est requis"
}, u = {
  codeActionHeader: "Éditeur d'actions de code",
  codePlaceholder: "// entrez votre code ici",
  compilationResult: "Résultat de la compilation:",
  compile: "Compiler",
  generic: {
    json: {
      title: "Modifier les données JSON pour"
    }
  },
  ok: "D'ACCORD"
}, d = {
  apply: "Appliquer",
  cancel: "Annuler",
  clone: "Clonage",
  close: "Fermer",
  edit: "Modifier",
  name: "Nom",
  remove: "Supprimer",
  save: "Sauvegarder",
  test: "Essai"
}, m = {
  add: "Ajouter un nouvel élément",
  after: "Après",
  before: "Avant",
  inside: "À l'Intérieur"
}, c = {
  categories: {
    fields: "Champs",
    static: "Statique",
    structure: "Structure",
    templates: "Modèles"
  }
}, p = {
  clickToAdd: "Cliquez pour ajouter un contrôle"
}, h = "Modifier JSON", f = {
  data: "Données",
  errors: "Erreurs"
}, v = {
  addNewForm: "Ajouter un nouveau formulaire",
  formWithNameExists: "Le formulaire avec ce nom existe déjà.",
  noFormsInFormStorage: "Enregistrez le formulaire pour qu'il apparaisse dans la liste des formulaires."
}, g = {
  clear: "Clair",
  currentFormName: "Le nom du formulaire actuel",
  download: "Télécharger",
  enterFormName: "Veuillez entrer le nom du formulaire",
  exportForms: "Formulaires d'exportation",
  exportFormsError: "Impossible d'exporter les formulaires! Voir les journaux dans la console du navigateur",
  exportFormsSuccess: "Formulaires exportés",
  formNamePlaceholder: "Ma belle forme",
  formSaveError: "Impossible d'enregistrer le formulaire! Voir les journaux dans la console du navigateur",
  formSaved: "Le formulaire est sauvegardé",
  importForms: "Importer des formulaires",
  importFormsError: "Impossible d'importer des formulaires! Voir les journaux dans la console du navigateur",
  importFormsSuccess: "Formulaires importés",
  menu: "Le Menu",
  print: "Imprimer",
  save: "Sauvegarder",
  saveAs: "Enregistrer sous...",
  settings: "Paramètres",
  translation: "Traduction",
  undo: "Annuler",
  upload: "Télécharger",
  validateForm: "Valider le formulaire"
}, b = {
  formSettings: {
    actions: "Actions",
    error: "Paramètres d'erreur",
    language: "Paramètres de langue",
    tooltip: "Infobulle"
  },
  sectionName: {
    components: "Composants",
    forms: "Formulaires",
    settings: "Paramètres",
    tree: "Arbre"
  }
}, q = {
  messageIsNull: "Le message de localisation est nul",
  messageNotFound: "Message de localisation non trouvé"
}, L = {
  cancel: "Annuler",
  ok: "D'ACCORD"
}, A = {
  applyKey: "Appliquer les modifications clés",
  codeButton: {
    editCalculable: "Modifier calculable",
    editLocalizable: "Modifier la localisation fluide",
    hintCalculable: "Rendre cette propriété calculable",
    hintCalculableAndLocalizable: "Rendez cette propriété calculable ou localisez-la avec Fluent",
    hintLocalizable: "Localisez cette propriété avec Fluent",
    neitherCalculableNorLocalizable: "Ni calculable ni localisable"
  },
  keyMustBeUnique: "La clé doit être unique",
  keyMustNotBeEmpty: "La clé ne doit pas être vide",
  sectionName: {
    actions: "Actions",
    expression: "Expression",
    linkedProperty: "Propriété liée",
    main: "Principale",
    rules: "Règles",
    style: "Style",
    withTarget: "Avec Cible",
    withoutTarget: "Sans Cible"
  },
  selectElementForEdit: "Sélectionnez l'élément sur le formulaire pour modifier les propriétés",
  setInputHint: "Appuyez sur Entrée pour ajouter une valeur",
  subSection: {
    additionalProperties: "Propriétés supplémentaires"
  }
}, C = {
  modes: {
    builder: "Aperçu",
    desktop: "Bureau",
    mobile: "Mobiles",
    tablet: "Tablette",
    viewer: "Modifier"
  },
  toggleTheme: "Basculer le thème"
}, S = {
  search: "Chercher..."
}, M = {
  any: "Tout",
  component: "Composant",
  componentHint: "Styles qui s'appliquent au composant",
  desktop: "Bureau",
  forDevice: "Pour l'appareil:",
  mobile: "Mobiles",
  other: "Autres",
  tablet: "Tablette",
  wrapper: "Emballage",
  wrapperHint: "Styles qui s'appliquent à l'encapsuleur de composant"
}, x = {
  autorun: "Exécution Automatique",
  compilationOk: "Résultat de la compilation: OK",
  hasNotReturnedValue: "N'a pas renvoyé de valeur",
  run: "Courir",
  testFormData: "Données du formulaire de test"
}, P = {
  cloneComponent: "Composant Clone",
  elements: "Éléments",
  notFound: "Non trouvé",
  removeComponent: "Supprimer un composant",
  reset: "Réinitialiser"
}, T = {
  collapse: "Tout réduire",
  expand: "Tout développer"
}, E = {
  addRule: "Ajouter une règle",
  chooseValidation: "Choisissez votre type",
  editCustomValidationCode: "Modifier le code de validation personnalisé pour le composant",
  formErrors: "Erreurs de formulaire",
  rule: {
    code: "Code",
    custom: "Personnalisé",
    datetime: "Dateheure",
    email: "Courriel",
    endsWith: "Se termine par",
    falsy: "Faux",
    finite: "Fini",
    includes: "Comprend",
    integer: "Entier",
    ip: "Adresse IP",
    length: "Longueur",
    lessThan: "Moins de",
    max: "Max",
    min: "Minute",
    moreThan: "Plus de",
    multipleOf: "Multiple de",
    nonEmpty: "Non vide",
    regex: "Expression régulière",
    required: "Requis",
    startsWith: "Commence par",
    truthy: "Vérité",
    url: "Adresse URL",
    uuid: "UID"
  },
  showFormErrors: "Afficher les erreurs de formulaire"
}, F = {
  GoogleMap: e,
  RichTextEditor: t,
  RsDatePicker: a,
  RsTimePicker: i,
  RsWizard: n,
  actions: r,
  annotation: o,
  bottomPanel: l,
  codeActionEditor: s,
  codeEditor: u,
  common: d,
  componentToolbar: m,
  componentsList: c,
  componentsModal: p,
  editJson: h,
  errorsPanel: f,
  formsList: v,
  leftMenu: g,
  leftPanel: b,
  localization: q,
  promptDialog: L,
  propertiesEditor: A,
  rightMenu: C,
  searchForm: S,
  style: M,
  testingEditor: x,
  toolbar: P,
  tree: T,
  validation: E
};
export {
  e as GoogleMap,
  t as RichTextEditor,
  a as RsDatePicker,
  i as RsTimePicker,
  n as RsWizard,
  r as actions,
  o as annotation,
  l as bottomPanel,
  s as codeActionEditor,
  u as codeEditor,
  d as common,
  m as componentToolbar,
  c as componentsList,
  p as componentsModal,
  F as default,
  h as editJson,
  f as errorsPanel,
  v as formsList,
  g as leftMenu,
  b as leftPanel,
  q as localization,
  L as promptDialog,
  A as propertiesEditor,
  C as rightMenu,
  S as searchForm,
  M as style,
  x as testingEditor,
  P as toolbar,
  T as tree,
  E as validation
};
//# sourceMappingURL=fr-FR-503260a3.js.map
