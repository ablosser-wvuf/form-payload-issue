const e = {
  addMarkerOnSearch: {
    hint: "Indica se aggiungere un marcatore alla ricerca."
  },
  allowChangingMarkers: {
    hint: "Se selezionato, l'utente può modificare i marcatori."
  },
  allowMultipleMarkers: {
    hint: "Marcatori multipli"
  },
  apiKey: {
    hint: "Chiave API di Google Maps. Salvare il modulo e aggiornare la pagina per applicare le modifiche.",
    name: "Chiave API"
  },
  collisionBehavior: {
    hint: "Il comportamento di collisione marcatori."
  },
  colorScheme: {
    hint: "La combinazione di colori da utilizzare."
  },
  gestureHandling: {
    hint: "La gestione gesto da utilizzare."
  },
  language: {
    hint: "Il linguaggio da usare."
  },
  latitude: {
    hint: "Latitudine del punto centrale"
  },
  longitude: {
    hint: "Longitudine del punto centrale"
  },
  mapControlPosition: {
    hint: "La posizione del controllo della mappa."
  },
  mapId: {
    hint: "L'ID mappa è un identificatore associato a uno stile o a una caratteristica specifica della mappa.",
    name: "ID mappa"
  },
  mapTypeId: {
    hint: "Il tipo di mappa predefinito da utilizzare.",
    name: "Tipo di mappa"
  },
  markerWindowTitle: {
    hint: "Il titolo della finestra marker.",
    name: "Titolo finestra Marker"
  },
  markers: {
    hint: "Coordinate dei marcatori"
  },
  region: {
    hint: "Il codice regione da utilizzare."
  },
  removeMarkerCaption: {
    hint: "La didascalia sul pulsante di rimozione del marcatore.",
    name: "Rimuovi la didascalia del marcatore"
  },
  searchPlaceholder: {
    hint: "Testo segnaposto per l'input di ricerca della mappa.",
    name: "Cerca segnaposto"
  },
  showMapControl: {
    hint: "Indica se mostrare il controllo della mappa."
  },
  zoom: {
    hint: "Livello di zoom"
  }
}, i = {
  modules: {
    hint: "Permette di personalizzare il comportamento e la funzionalità dell'editor. Leggi i documenti per maggiori informazioni.",
    name: "Modulo"
  },
  toolbarOptions: {
    hint: "Gruppi di pulsanti da visualizzare sulla barra degli strumenti",
    name: "Opzioni barra degli strumenti"
  }
}, a = {
  format: {
    hint: "Formato della data quando reso nell'input",
    name: "Formato"
  }
}, o = {
  format: {
    hint: "Formato del tempo quando reso nell'input",
    name: "Formato"
  }
}, t = {
  activeIndex: {
    hint: "L ' active step index",
    name: "Indice attivo"
  },
  finishButtonLabel: {
    hint: "L ' etichetta pulsante fine",
    name: "Etichetta pulsante Fine"
  },
  nextButtonLabel: {
    hint: "L'etichetta del pulsante successivo",
    name: "Etichetta pulsante Successivo"
  },
  prevButtonLabel: {
    hint: "L'etichetta del pulsante precedente",
    name: "Etichetta pulsante precedente"
  },
  showSteps: {
    hint: "Se vero, verranno mostrati i passaggi",
    name: "Mostra passi"
  },
  showStepsLabels: {
    hint: "Se true, verranno visualizzate le etichette dei passaggi",
    name: "Mostra passi etichette"
  },
  steps: {
    hint: "La procedura guidata",
    name: "Scalinata"
  },
  stepsNavigation: {
    hint: "Determina quali passaggi sono disponibili per la navigazione facendo clic su",
    name: "Passi di navigazione"
  },
  validateOnFinish: {
    hint: "Se true, la procedura guidata verrà convalidata prima di terminare la procedura guidata",
    name: "Convalida al termine"
  },
  validateOnNext: {
    hint: "Se è vero, il passaggio verrà convalidato prima di passare al passaggio successivo",
    name: "Convalidare il prossimo"
  },
  verticalSteps: {
    hint: "Se vero, i passaggi verranno visualizzati verticalmente",
    name: "Gradini verticali"
  },
  wizardHasNoSteps: "Per aggiungere i passaggi della procedura guidata, selezionate il componente e aggiungete i passaggi nel pannello Proprietà."
}, n = {
  add: "Aggiungere",
  addAction: "Aggiungi azione",
  addCodeAction: "Aggiungi un'azione del codice",
  arguments: "Argomento",
  code: "Codice",
  common: "Comune",
  custom: "Personalizzato",
  delete: "Eliminare",
  duplicate: "Duplicato",
  edit: "Modificare",
  name: "Nome",
  parameters: "Parametro",
  type: "Tipo"
}, l = {
  accept: {
    hint: "Tipi di file che possono essere accettati. Vedi attributo HTML standard: accept",
    name: "Accettare"
  },
  action: {
    hint: "Caricamento URL",
    name: "Azione"
  },
  allowEmptyFormatting: {
    hint: "Per impostazione predefinita, il componente PatternFormat non applica la formattazione quando il valore è vuoto (null, undefined o ‘)",
    name: "Consenti formattazione vuota "
  },
  allowLeadingZeros: {
    hint: "Ciò consente di abilitare o disabilitare gli zeri iniziali nel campo di input. Per impostazione predefinita, sulla sfocatura di un input, gli zeri iniziali vengono rimossi",
    name: "Consenti zeri iniziali"
  },
  allowNegative: {
    hint: "Se impostato su false, i numeri negativi non saranno consentiti",
    name: "Consenti negativo"
  },
  allowedDecimalSeparators: {
    hint: `Caratteri che quando vengono premuti generano un separatore decimale. Quando manca, separatore decimale e'."sono utilizzati`,
    name: "Separatori decimali consentiti"
  },
  appearance: {
    hint: "Set picker aspetto",
    name: "Aspetto"
  },
  autoUpload: {
    hint: "Carica automaticamente i file dopo averli selezionati",
    name: "Caricamento automatico"
  },
  block: {
    hint: "Bloccare un'intera riga",
    name: "Blocco"
  },
  bodyFill: {
    hint: "Area del contenuto piena di contenitori",
    name: "Riempimento del corpo"
  },
  calendarDefaultDate: {
    hint: "Data e ora di presentazione predefinite del pannello Calendario",
    name: "Data predefinita del calendario"
  },
  checked: {
    hint: "Indica se il valore è controllato",
    name: "Verificare"
  },
  checkedChildren: {
    hint: "Il testo visualizzato nello stato controllato",
    name: "Testo controllato"
  },
  cleanable: {
    hint: "Indica se l'opzione può essere svuotata",
    name: "Pulibile"
  },
  code: {
    hint: "Modifica codice",
    name: "Codice"
  },
  color: {
    hint: "Il colore principale del componente",
    name: "Colore"
  },
  creatable: {
    hint: "Le impostazioni possono creare nuove opzioni",
    name: "Creatable"
  },
  data: {
    hint: "Dati selezionabili",
    name: "Dati"
  },
  decimalScale: {
    hint: "Se definito, limita il numero di cifre dopo il punto decimale",
    name: "Scala decimale"
  },
  decimalSeparator: {
    hint: "Definisce il carattere decimale",
    name: "Separatore decimale"
  },
  defaultOpen: {
    hint: "Valore predefinito della proprietà open",
    name: "Apertura predefinita"
  },
  defaultValue: {
    hint: "Valore predefinito",
    name: "Valore predefinito"
  },
  disableMultipart: {
    hint: "Se' true', disabilitare l'utilizzo di un modulo multipart per il caricamento del file e invece lo streaming del file. Alcune API (ad esempio Amazon S3) potrebbero aspettarsi che il file venga trasmesso in streaming anziché inviato tramite un modulo",
    name: "Disabilita multipart"
  },
  disabled: {
    hint: "Indica se il componente è disabilitato o meno",
    name: "Disabilita"
  },
  download: {
    hint: "Fa sì che il browser tratti l'URL collegato come un download",
    name: "Scaricare"
  },
  downloadFilename: {
    hint: "La definizione di un valore lo suggerisce come nome del file. / e \\ i caratteri vengono convertiti in caratteri di sottolineatura (_)",
    name: "Scarica nome file"
  },
  draggable: {
    hint: "Abilitato drag and drop per caricare",
    name: "Trascinabile"
  },
  editable: {
    hint: "Reso come input, il valore può essere inserito tramite la tastiera",
    name: "Modificabile"
  },
  errorConfig: {
    show: "Mostrare"
  },
  eventKey: {
    hint: "La chiave evento corrispondente a questo elemento",
    name: "Chiave evento"
  },
  fixedDecimalScale: {
    hint: "Se impostato su true, aggiunge gli 0 finali dopo decimalSeparator per corrispondere a decimalScale specificato",
    name: "Scala decimale fissa"
  },
  flexDirection: {
    hint: "Direzione della flessione dei bambini del contenitore",
    name: "Direzione"
  },
  format: {
    hint: "Formattare il modello utilizzando il carattere # (o un carattere Pattern). # è il carattere segnaposto per i numeri. Esempio: '### ###'",
    name: "Formato"
  },
  groupBy: {
    hint: "Imposta criteri di raggruppamento 'chiave ' in'dati'",
    name: "Gruppo per"
  },
  href: {
    hint: "L'URL a cui punta il collegamento ipertestuale",
    name: "Href"
  },
  htmlAttributes: {
    hint: "Attributi HTML nel formato React (camelCase) ",
    name: "Attributi HTML"
  },
  isoWeek: {
    hint: "Norma ISO 8601, ogni settimana di calendario inizia il lunedì e la domenica del settimo giorno",
    name: "Settimana Iso"
  },
  justifyContent: {
    name: "Allineamento"
  },
  label: {
    hint: "Impostazione etichetta",
    name: "Etichetta"
  },
  limitEndYear: {
    hint: "Imposta il limite superiore dell'anno disponibile rispetto alla data di selezione corrente",
    name: "Limite fine anno"
  },
  limitStartYear: {
    hint: "Imposta il limite inferiore dell'anno disponibile rispetto alla data di selezione corrente",
    name: "Limite anno di inizio"
  },
  loading: {
    hint: "Se il componente è in stato di caricamento",
    name: "Caricamento"
  },
  mask: {
    hint: "Utilizzato come carattere maschera per le posizioni numeriche, fino a quando non viene fornito alcun carattere numerico per quella posizione",
    name: "Maschera"
  },
  method: {
    hint: "Il metodo HTTP della richiesta di upload",
    name: "Metodo"
  },
  name: {
    hint: "Carica il nome del parametro del file corrispondente",
    name: "Nome"
  },
  objectFit: {
    name: "Adattare"
  },
  objectPosition: {
    name: "Posizione"
  },
  oneTap: {
    hint: "Un clic per completare il valore di selezione",
    name: "Un tocco"
  },
  open: {
    hint: "Indica se aprire il componente",
    name: "Aprire"
  },
  passwordMask: {
    hint: "Usa maschera password",
    name: "Maschera password"
  },
  patternChar: {
    hint: "Questo aiuta a definire il carattere del modello di formato",
    name: "Modello char"
  },
  placeholder: {
    hint: "Impostazione segnaposto",
    name: "Segnaposto"
  },
  placement: {
    hint: "Il posizionamento del componente",
    name: "Posizionamento"
  },
  prefix: {
    hint: "Aggiunge il carattere prefix prima del valore di input",
    name: "Prefisso"
  },
  preload: {
    hint: "Carica i dati in anticipo, prima di aprire il menu a discesa",
    name: "Preload"
  },
  preventOverflow: {
    hint: "Prevenire il trabocco dell'elemento flottante",
    name: "Prevenire l'overflow"
  },
  readOnly: {
    hint: "Se true, il componente sarà di sola lettura",
    name: "Sola lettura"
  },
  showMeridian: {
    hint: "Visualizzare le ore in formato 12",
    name: "Mostra meridiano"
  },
  showWeekNumbers: {
    hint: "Indica se mostrare i numeri della settimana",
    name: "Mostra i numeri della settimana"
  },
  size: {
    hint: "Il componente può avere dimensioni diverse",
    name: "Dimensione"
  },
  suffix: {
    hint: "Aggiunge il suffisso dopo il valore di input",
    name: "Suffisso "
  },
  target: {
    hint: "Dove visualizzare l'URL collegato, come nome per un contesto di navigazione (una scheda, una finestra o <iframe>)",
    name: "Obiettivo"
  },
  textAlign: {
    name: "Allineamento"
  },
  thousandsGroupStyle: {
    hint: "Mille stile (mille): 123,456,789, stile indiano (lakh): 12,34,56,789, stile cinese (wan): 1,2345,6789",
    name: "Stile gruppo migliaia"
  },
  tooltipProps: {
    hint: "Usa tooltip per questo elemento",
    tooltip: "Tooltip"
  },
  unCheckedChildren: {
    hint: "Il testo che viene visualizzato nello stato deselezionato",
    name: "Testo non controllato"
  },
  value: {
    hint: "Valore (controllato)",
    name: "Valore"
  },
  withCredentials: {
    hint: "Indica se trasportare i cookie durante il caricamento delle richieste",
    name: "Con credenziali"
  }
}, r = {
  editCodeAction: "Modifica l'azione del codice",
  editProperty: "Modifica proprietà",
  function: "Valore calcolabile",
  localization: "Localizzazione fluente",
  simpleValue: "Valore semplice",
  simpleValueHint: "Modifica la proprietà nel pannello di destra",
  use: "Utilizzare"
}, s = {
  actionNameExists: "L'azione con questo nome esiste già",
  nameIsRequired: "Il nome dell'azione è richiesto",
  parameterNameExists: "Il parametro con questo nome esiste già",
  parameterNameIsNotValid: "Il nome del parametro non è valido",
  parameterNameIsRequired: "Il nome del parametro è richiesto"
}, c = {
  codeActionHeader: "Editor di azioni codice",
  codePlaceholder: "// inserisci il tuo codice qui",
  compilationResult: "Risultato compilazione:",
  compile: "Compilare",
  generic: {
    json: {
      title: "Modifica dati JSON per"
    }
  },
  ok: "OK"
}, m = {
  apply: "Applicare",
  cancel: "Annullare",
  clone: "Clone",
  close: "Vicino",
  edit: "Modificare",
  name: "Nome",
  remove: "Rimuovere",
  save: "Salvare",
  test: "Test"
}, d = {
  add: "Aggiungi nuovo elemento",
  after: "Dopo",
  before: "Prima",
  inside: "Dentro"
}, p = {
  categories: {
    fields: "Campo",
    static: "Statico",
    structure: "Struttura",
    templates: "Modelli"
  }
}, u = {
  clickToAdd: "Fare clic per aggiungere il controllo"
}, h = "Modifica JSON", g = {
  data: "Dati",
  errors: "Errore"
}, z = {
  addNewForm: "Aggiungi nuovo modulo",
  formWithNameExists: "La forma con questo nome esiste già.",
  noFormsInFormStorage: "Salvare il modulo in modo che venga visualizzato nell'elenco dei moduli."
}, v = {
  clear: "Chiaro",
  currentFormName: "Il nome del modulo corrente",
  download: "Scaricare",
  enterFormName: "Inserisci il nome del modulo",
  exportForms: "Esporta moduli",
  exportFormsError: "Esportazione dei moduli non riuscita! Vedere i log nella console del browser",
  exportFormsSuccess: "Moduli esportati",
  formNamePlaceholder: "La mia bella forma",
  formSaveError: "Salvataggio del modulo non riuscito! Vedere i log nella console del browser",
  formSaved: "Il modulo viene salvato",
  importForms: "Importa moduli",
  importFormsError: "Importazione dei moduli non riuscita! Vedere i log nella console del browser",
  importFormsSuccess: "Moduli importati",
  menu: "Menu",
  print: "Stampa",
  save: "Salvare",
  saveAs: "Salva con nome...",
  settings: "Impostazioni",
  translation: "Traduzione",
  undo: "Annullare",
  upload: "Caricare",
  validateForm: "Convalida modulo"
}, f = {
  formSettings: {
    actions: "Azione",
    error: "Impostazioni di errore",
    language: "Impostazioni della lingua",
    tooltip: "Tooltip"
  },
  sectionName: {
    components: "Componente",
    forms: "Forma",
    settings: "Impostazioni",
    tree: "Albero"
  }
}, b = {
  messageIsNull: "Il messaggio di localizzazione è nullo",
  messageNotFound: "Localizzazione messaggio non trovato"
}, S = {
  cancel: "Annullare",
  ok: "OK"
}, I = {
  applyKey: "Applicare le modifiche chiave",
  codeButton: {
    editCalculable: "Modifica calcolabile",
    editLocalizable: "Modifica localizzazione fluente",
    hintCalculable: "Rendi calcolabile questa proprietà",
    hintCalculableAndLocalizable: "Rendi questa proprietà calcolabile o localizza con Fluent",
    hintLocalizable: "Localizza questa proprietà con Fluent",
    neitherCalculableNorLocalizable: "Né calcolabile né localizzabile"
  },
  keyMustBeUnique: "La chiave deve essere unica",
  keyMustNotBeEmpty: "La chiave non deve essere vuota",
  sectionName: {
    actions: "Azione",
    expression: "Espressione",
    linkedProperty: "Proprietà collegata",
    main: "Principale",
    rules: "Regola",
    style: "Stile",
    withTarget: "Con Target",
    withoutTarget: "Senza bersaglio"
  },
  selectElementForEdit: "Selezionare l'elemento nel modulo per modificare le proprietà",
  setInputHint: "Premere Invio per aggiungere un valore",
  subSection: {
    additionalProperties: "Proprietà aggiuntive"
  }
}, M = {
  modes: {
    builder: "Anteprima",
    desktop: "Desktop",
    mobile: "Mobile",
    tablet: "Tablet",
    viewer: "Modificare"
  },
  toggleTheme: "Toggle theme"
}, C = {
  search: "Ricerca..."
}, L = {
  any: "Qualsiasi",
  component: "Componente",
  componentHint: "Stili che si applicano al componente",
  desktop: "Desktop",
  forDevice: "Per dispositivo:",
  mobile: "Mobile",
  other: "Altri",
  tablet: "Tablet",
  wrapper: "Involucro",
  wrapperHint: "Stili che si applicano al componente wrapper"
}, A = {
  autorun: "Autorun",
  compilationOk: "Risultato della compilazione: OK",
  hasNotReturnedValue: "Non ha restituito valore",
  run: "Eseguire",
  testFormData: "Dati del modulo di prova"
}, P = {
  cloneComponent: "Componente clone",
  elements: "Elemento",
  notFound: "Non trovato",
  removeComponent: "Rimuovi componente",
  reset: "Reset"
}, E = {
  collapse: "Comprimi tutto",
  expand: "Espandi tutto"
}, F = {
  addRule: "Aggiungi regola",
  chooseValidation: "Scegli il tuo tipo",
  editCustomValidationCode: "Modifica del codice di convalida personalizzato per il componente",
  formErrors: "Errori di modulo",
  rule: {
    code: "Codice",
    custom: "Personalizzato",
    datetime: "Data e ora",
    email: "Email",
    endsWith: "Termina con",
    falsy: "Falso",
    finite: "Finito",
    includes: "Includere",
    integer: "Intero",
    ip: "IP",
    length: "Lunghezza",
    lessThan: "Meno",
    max: "Max",
    min: "Min",
    moreThan: "Oltre",
    multipleOf: "Multiplo di",
    nonEmpty: "Non vuoto",
    regex: "Regex",
    required: "Necessario",
    startsWith: "Inizia con",
    truthy: "Truthy",
    url: "URL",
    uuid: "Uuid"
  },
  showFormErrors: "Mostra errori di modulo"
}, T = {
  GoogleMap: e,
  RichTextEditor: i,
  RsDatePicker: a,
  RsTimePicker: o,
  RsWizard: t,
  actions: n,
  annotation: l,
  bottomPanel: r,
  codeActionEditor: s,
  codeEditor: c,
  common: m,
  componentToolbar: d,
  componentsList: p,
  componentsModal: u,
  editJson: h,
  errorsPanel: g,
  formsList: z,
  leftMenu: v,
  leftPanel: f,
  localization: b,
  promptDialog: S,
  propertiesEditor: I,
  rightMenu: M,
  searchForm: C,
  style: L,
  testingEditor: A,
  toolbar: P,
  tree: E,
  validation: F
};
export {
  e as GoogleMap,
  i as RichTextEditor,
  a as RsDatePicker,
  o as RsTimePicker,
  t as RsWizard,
  n as actions,
  l as annotation,
  r as bottomPanel,
  s as codeActionEditor,
  c as codeEditor,
  m as common,
  d as componentToolbar,
  p as componentsList,
  u as componentsModal,
  T as default,
  h as editJson,
  g as errorsPanel,
  z as formsList,
  v as leftMenu,
  f as leftPanel,
  b as localization,
  S as promptDialog,
  I as propertiesEditor,
  M as rightMenu,
  C as searchForm,
  L as style,
  A as testingEditor,
  P as toolbar,
  E as tree,
  F as validation
};
//# sourceMappingURL=it-IT-84185923.js.map
