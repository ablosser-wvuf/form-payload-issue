const e = {
  addMarkerOnSearch: {
    hint: "Si agregar un marcador en la búsqueda."
  },
  allowChangingMarkers: {
    hint: "Si está marcada, el usuario puede cambiar los marcadores."
  },
  allowMultipleMarkers: {
    hint: "Marcadores múltiples"
  },
  apiKey: {
    hint: "Clave API de Google Maps. Guarde el formulario y actualice la página para aplicar los cambios.",
    name: "Clave API"
  },
  collisionBehavior: {
    hint: "El comportamiento de colisión de los marcadores."
  },
  colorScheme: {
    hint: "El esquema de color a utilizar."
  },
  gestureHandling: {
    hint: "El manejo de gestos a utilizar."
  },
  language: {
    hint: "El idioma a utilizar."
  },
  latitude: {
    hint: "Latitud del punto central"
  },
  longitude: {
    hint: "Longitud del punto central"
  },
  mapControlPosition: {
    hint: "La posición del control del mapa."
  },
  mapId: {
    hint: "El ID de mapa es un identificador asociado a un estilo o entidad de mapa específico.",
    name: "ID del MAPA"
  },
  mapTypeId: {
    hint: "El tipo de mapa predeterminado a utilizar.",
    name: "Tipo de mapa"
  },
  markerWindowTitle: {
    hint: "El título de la ventana del marcador.",
    name: "Título de la ventana del marcador"
  },
  markers: {
    hint: "Coordenadas de los marcadores"
  },
  region: {
    hint: "El código de región a utilizar."
  },
  removeMarkerCaption: {
    hint: "El título en el botón de eliminación del marcador.",
    name: "Eliminar leyenda de marcador"
  },
  searchPlaceholder: {
    hint: "Texto de marcador de posición para la entrada de búsqueda en el mapa.",
    name: "Marcador de posición de búsqueda"
  },
  showMapControl: {
    hint: "Si mostrar el control de mapa."
  },
  zoom: {
    hint: "Nivel de zoom"
  }
}, a = {
  modules: {
    hint: "Permite personalizar el comportamiento y funcionalidad del editor. Lea los documentos para obtener más información.",
    name: "Módulos"
  },
  toolbarOptions: {
    hint: "Grupos de botones que se mostrarán en la barra de herramientas",
    name: "Opciones de la barra de herramientas"
  }
}, o = {
  format: {
    hint: "Formato de la fecha cuando se representa en la entrada",
    name: "Formato"
  }
}, r = {
  format: {
    hint: "Formato de la hora cuando se procesa en la entrada",
    name: "Formato"
  }
}, n = {
  activeIndex: {
    hint: "El índice de pasos activos",
    name: "Índice activo"
  },
  finishButtonLabel: {
    hint: "La etiqueta del botón finalizar",
    name: "Etiqueta del botón de acabado"
  },
  nextButtonLabel: {
    hint: "La etiqueta del botón siguiente",
    name: "Etiqueta del botón Siguiente"
  },
  prevButtonLabel: {
    hint: "La etiqueta del botón anterior",
    name: "Etiqueta del botón anterior"
  },
  showSteps: {
    hint: "Si es verdadero, se mostrarán los pasos",
    name: "Mostrar pasos"
  },
  showStepsLabels: {
    hint: "Si es verdadero, se mostrarán las etiquetas de los pasos",
    name: "Mostrar etiquetas de pasos"
  },
  steps: {
    hint: "Los pasos del asistente",
    name: "Pasos"
  },
  stepsNavigation: {
    hint: "Determina qué pasos están disponibles para la navegación haciendo clic en",
    name: "Navegación de pasos"
  },
  validateOnFinish: {
    hint: "Si es true, el asistente se validará antes de finalizar el asistente",
    name: "Validar al finalizar"
  },
  validateOnNext: {
    hint: "Si es verdadero, el paso se validará antes de pasar al siguiente paso",
    name: "Validar en siguiente"
  },
  verticalSteps: {
    hint: "Si es verdadero, los pasos se mostrarán verticalmente",
    name: "Escalones verticales"
  },
  wizardHasNoSteps: "Para agregar los pasos del asistente, seleccione el componente y agregue los pasos en el panel propiedades."
}, i = {
  add: "Añadir",
  addAction: "Añadir acción",
  addCodeAction: "Agregar una acción de código",
  arguments: "Argumentos",
  code: "Código",
  common: "Común",
  custom: "Personalizado",
  delete: "Suprimir",
  duplicate: "Duplicado",
  edit: "Editar",
  name: "Nombre",
  parameters: "Parámetros",
  type: "Tipo"
}, t = {
  accept: {
    hint: "Tipos de archivos que se pueden aceptar. Consulte atributo HTML estándar: aceptar",
    name: "Aceptar"
  },
  action: {
    hint: "URL de carga",
    name: "Acción"
  },
  allowEmptyFormatting: {
    hint: 'De forma predeterminada, el componente PatternFormat no aplica formato cuando el valor está vacío (nulo, indefinido o ")',
    name: "Permitir formato vacío "
  },
  allowLeadingZeros: {
    hint: "Esto permite habilitar o deshabilitar los ceros iniciales en el campo de entrada. De forma predeterminada, al desenfocar una entrada, se eliminan los ceros iniciales",
    name: "Permitir ceros iniciales"
  },
  allowNegative: {
    hint: "Si se establece en falso, no se permitirán números negativos",
    name: "Permitir negativo"
  },
  allowedDecimalSeparators: {
    hint: `Caracteres que cuando se presionan dan como resultado un separador decimal. Cuando falte, separador decimal y '."se utilizan`,
    name: "Separadores decimales permitidos"
  },
  appearance: {
    hint: "Apariencia del selector de conjuntos",
    name: "Apariencia"
  },
  autoUpload: {
    hint: "Carga automática de archivos después de seleccionarlos",
    name: "Carga automática"
  },
  block: {
    hint: "Bloquear una fila entera",
    name: "Bloque"
  },
  bodyFill: {
    hint: "Área de contenido llena de contenedores",
    name: "Relleno corporal"
  },
  calendarDefaultDate: {
    hint: "Fecha y hora de presentación predeterminadas del panel de calendario",
    name: "Fecha predeterminada del calendario"
  },
  checked: {
    hint: "Si el valor está marcado",
    name: "Comprobado"
  },
  checkedChildren: {
    hint: "El texto que se muestra en el estado marcado",
    name: "Texto marcado"
  },
  cleanable: {
    hint: "Si la opción se puede vaciar",
    name: "Lavable"
  },
  code: {
    hint: "Editar código",
    name: "Código"
  },
  color: {
    hint: "El color principal del componente.",
    name: "Color"
  },
  creatable: {
    hint: "La configuración puede crear nuevas opciones",
    name: "Creable"
  },
  data: {
    hint: "Datos seleccionables",
    name: "Datos"
  },
  decimalScale: {
    hint: "Si se define, limita el número de dígitos después del punto decimal",
    name: "Escala decimal"
  },
  decimalSeparator: {
    hint: "Define el carácter decimal",
    name: "Separador decimal"
  },
  defaultOpen: {
    hint: "Valor predeterminado de la propiedad open",
    name: "Abierto por defecto"
  },
  defaultValue: {
    hint: "Valor predeterminado",
    name: "Valor predeterminado"
  },
  disableMultipart: {
    hint: "Si es 'verdadero', deshabilite el uso de un formulario de varias partes para cargar archivos y, en su lugar, transmita el archivo. Algunas API (por ejemplo, Amazon S3) pueden esperar que el archivo se transmita en lugar de enviarse a través de un formulario",
    name: "Deshabilitar multiparte"
  },
  disabled: {
    hint: "Si el componente está deshabilitado o no",
    name: "Discapacitados"
  },
  download: {
    hint: "Hace que el navegador trate la URL vinculada como una descarga",
    name: "Descargar"
  },
  downloadFilename: {
    hint: "Definir un valor lo sugiere como el nombre del archivo.  los caracteres / y \\ se convierten en guiones bajos (_)",
    name: "Descargar nombre de archivo"
  },
  draggable: {
    hint: "Habilitado arrastrar y soltar para cargar",
    name: "Arrastrable"
  },
  editable: {
    hint: "Representado como entrada, el valor se puede ingresar a través del teclado",
    name: "Editable"
  },
  errorConfig: {
    show: "Espectáculo"
  },
  eventKey: {
    hint: "La clave de evento correspondiente a este elemento",
    name: "Clave de evento"
  },
  fixedDecimalScale: {
    hint: "Si se establece en true, agrega 0 finales después de decimalSeparator para que coincida con la escala decimal dada",
    name: "Escala decimal fija"
  },
  flexDirection: {
    hint: "Dirección flexible de los niños contenedores",
    name: "Dirección"
  },
  format: {
    hint: "Formatee el patrón usando el carácter # (o un carácter de patrón). # es el carácter de marcador de posición para los números. Ejemplo:'######'",
    name: "Formato"
  },
  groupBy: {
    hint: "Establecer criterios de agrupación 'clave' en 'datos'",
    name: "Grupo por"
  },
  href: {
    hint: "La URL a la que apunta el hipervínculo",
    name: "Href"
  },
  htmlAttributes: {
    hint: "Atributos HTML en formato React (camelCase) ",
    name: "Atributos HTML"
  },
  isoWeek: {
    hint: "Norma ISO 8601, cada semana calendario comienza el lunes y el domingo del séptimo día",
    name: "Semana Iso"
  },
  justifyContent: {
    name: "Alineación"
  },
  label: {
    hint: "Configuración de la etiqueta",
    name: "Etiqueta"
  },
  limitEndYear: {
    hint: "Establezca el límite superior del año disponible en relación con la fecha de selección actual",
    name: "Año límite de finalización"
  },
  limitStartYear: {
    hint: "Establezca el límite inferior del año disponible en relación con la fecha de selección actual",
    name: "Año límite de inicio"
  },
  loading: {
    hint: "Si el componente está en estado de carga",
    name: "Cargando"
  },
  mask: {
    hint: "Se utiliza como carácter de máscara para lugares numéricos, hasta que se proporcione cualquier carácter numérico para esa posición",
    name: "Máscara"
  },
  method: {
    hint: "El método HTTP de solicitud de carga",
    name: "Método"
  },
  name: {
    hint: "Cargue el nombre del parámetro del archivo correspondiente",
    name: "Nombre"
  },
  objectFit: {
    name: "Ajuste"
  },
  objectPosition: {
    name: "Posición"
  },
  oneTap: {
    hint: "Un clic para completar el valor de selección",
    name: "Un toque"
  },
  open: {
    hint: "Si abre el componente",
    name: "Abierto"
  },
  passwordMask: {
    hint: "Usar máscara de contraseña",
    name: "Máscara de contraseña"
  },
  patternChar: {
    hint: "Esto ayuda a definir el carácter del patrón de formato",
    name: "Carácter de patrón"
  },
  placeholder: {
    hint: "Configuración de marcadores de posición",
    name: "Marcador de posición"
  },
  placement: {
    hint: "La colocación del componente",
    name: "Colocación"
  },
  prefix: {
    hint: "Agrega el carácter de prefijo antes del valor de entrada",
    name: "Prefijo"
  },
  preload: {
    hint: "Cargue los datos por adelantado, antes de abrir el menú desplegable",
    name: "Precarga"
  },
  preventOverflow: {
    hint: "Evite el desbordamiento de elementos flotantes",
    name: "Evite el desbordamiento"
  },
  readOnly: {
    hint: "Si es true, el componente será de solo lectura",
    name: "Solo lectura"
  },
  showMeridian: {
    hint: "Mostrar horas en formato 12",
    name: "Mostrar meridiano"
  },
  showWeekNumbers: {
    hint: "Si mostrar los números de la semana",
    name: "Mostrar números de la semana"
  },
  size: {
    hint: "El componente puede tener diferentes tamaños",
    name: "Tamaño"
  },
  suffix: {
    hint: "Agrega el sufijo después del valor de entrada",
    name: "Sufijo "
  },
  target: {
    hint: "Dónde mostrar la URL vinculada, como nombre de un contexto de navegación (una pestaña, ventana o <iframe>)",
    name: "Objetivo"
  },
  textAlign: {
    name: "Alineación"
  },
  thousandsGroupStyle: {
    hint: "Estilo mil (miles): 123,456,789, estilo indio (lakh): 12,34,56,789, estilo chino (wan): 1,2345,6789",
    name: "Estilo de grupo de miles"
  },
  tooltipProps: {
    hint: "Utilice información sobre herramientas para este elemento",
    tooltip: "Información sobre Herramientas"
  },
  unCheckedChildren: {
    hint: "El texto que se muestra en el estado desmarcado",
    name: "Texto sin marcar"
  },
  value: {
    hint: "Valor (controlado)",
    name: "Valor"
  },
  withCredentials: {
    hint: "Si llevar cookies al cargar solicitudes",
    name: "Con credenciales"
  }
}, l = {
  editCodeAction: "Editar acción de código",
  editProperty: "Editar propiedad",
  function: "Valor calculable",
  localization: "Localización fluida",
  simpleValue: "Valor simple",
  simpleValueHint: "Edite la propiedad en el panel derecho",
  use: "Uso"
}, s = {
  actionNameExists: "La acción con este nombre ya existe",
  nameIsRequired: "El nombre de la acción es obligatorio",
  parameterNameExists: "El parámetro con este nombre ya existe",
  parameterNameIsNotValid: "El nombre del parámetro no es válido",
  parameterNameIsRequired: "El nombre del parámetro es obligatorio"
}, d = {
  codeActionHeader: "Editor de acciones de código",
  codePlaceholder: "// ingrese su código aquí",
  compilationResult: "Resultado de la compilación:",
  compile: "Compilar",
  generic: {
    json: {
      title: "Editar datos JSON para"
    }
  },
  ok: "OK"
}, c = {
  apply: "Aplicar",
  cancel: "Cancelar",
  clone: "Clon",
  close: "Cerrar",
  edit: "Editar",
  name: "Nombre",
  remove: "Eliminar",
  save: "Guardar",
  test: "Prueba"
}, m = {
  add: "Añadir nuevo elemento",
  after: "Después",
  before: "Antes",
  inside: "En el Interior"
}, p = {
  categories: {
    fields: "Campos",
    static: "Estática",
    structure: "Estructura",
    templates: "Plantillas"
  }
}, u = {
  clickToAdd: "Haga clic para agregar control"
}, h = "Editar JSON", g = {
  data: "Datos",
  errors: "Errores"
}, b = {
  addNewForm: "Añadir nuevo formulario",
  formWithNameExists: "El formulario con este nombre ya existe.",
  noFormsInFormStorage: "Guarde el formulario para que aparezca en la lista de formularios."
}, v = {
  clear: "Claro",
  currentFormName: "El nombre del formulario actual",
  download: "Descargar",
  enterFormName: "Por favor, introduzca el nombre del formulario",
  exportForms: "Formularios de exportación",
  exportFormsError: "Error al exportar formularios! Ver los registros en la consola del navegador",
  exportFormsSuccess: "Formularios exportados",
  formNamePlaceholder: "Mi hermosa forma",
  formSaveError: "Error al guardar el formulario! Ver los registros en la consola del navegador",
  formSaved: "El formulario se guarda",
  importForms: "Formularios de importación",
  importFormsError: "Error al importar formularios! Ver los registros en la consola del navegador",
  importFormsSuccess: "Formularios importados",
  menu: "Menú",
  print: "Imprimir",
  save: "Guardar",
  saveAs: "Guardar como...",
  settings: "Ajustes",
  translation: "Traducción",
  undo: "Deshacer",
  upload: "Subir",
  validateForm: "Validar formulario"
}, f = {
  formSettings: {
    actions: "Acciones",
    error: "Configuración de errores",
    language: "Ajustes de idioma",
    tooltip: "Información sobre Herramientas"
  },
  sectionName: {
    components: "Componentes",
    forms: "Formularios",
    settings: "Ajustes",
    tree: "Árbol"
  }
}, E = {
  messageIsNull: "El mensaje de localización es nulo",
  messageNotFound: "Mensaje de localización no encontrado"
}, C = {
  cancel: "Cancelar",
  ok: "OK"
}, S = {
  applyKey: "Aplicar cambios de clave",
  codeButton: {
    editCalculable: "Editar calculable",
    editLocalizable: "Editar localización fluida",
    hintCalculable: "Hacer calculable esta propiedad",
    hintCalculableAndLocalizable: "Haga que esta propiedad sea calculable o localice con Fluent",
    hintLocalizable: "Localice esta propiedad con Fluent",
    neitherCalculableNorLocalizable: "Ni calculable ni localizable"
  },
  keyMustBeUnique: "La clave debe ser única",
  keyMustNotBeEmpty: "La clave no debe estar vacía",
  sectionName: {
    actions: "Acciones",
    expression: "Expresión",
    linkedProperty: "Propiedad vinculada",
    main: "Principal",
    rules: "Reglas",
    style: "Estilo",
    withTarget: "Con Objetivo",
    withoutTarget: "Sin Objetivo"
  },
  selectElementForEdit: "Seleccionar elemento en el formulario para editar propiedades",
  setInputHint: "Presione Entrar para agregar un valor",
  subSection: {
    additionalProperties: "Propiedades adicionales"
  }
}, A = {
  modes: {
    builder: "Vista previa",
    desktop: "Escritorio",
    mobile: "Móvil",
    tablet: "Comprimido",
    viewer: "Editar"
  },
  toggleTheme: "Alternar tema"
}, M = {
  search: "Búsqueda..."
}, P = {
  any: "Cualquiera",
  component: "Componente",
  componentHint: "Estilos que se aplican al componente",
  desktop: "Escritorio",
  forDevice: "Para el dispositivo:",
  mobile: "Móvil",
  other: "Los demás",
  tablet: "Comprimido",
  wrapper: "Envoltura",
  wrapperHint: "Estilos que se aplican al contenedor de componentes"
}, F = {
  autorun: "Ejecución automática",
  compilationOk: "Resultado de la compilación: OK",
  hasNotReturnedValue: "No ha devuelto valor",
  run: "Corre",
  testFormData: "Datos del formulario de prueba"
}, q = {
  cloneComponent: "Componente de clonación",
  elements: "Elementos",
  notFound: "No encontrado",
  removeComponent: "Eliminar componente",
  reset: "Restablecer"
}, y = {
  collapse: "Contraer todo",
  expand: "Expandir todo"
}, z = {
  addRule: "Añadir regla",
  chooseValidation: "Elige tu tipo",
  editCustomValidationCode: "Editar código de validación personalizado para el componente",
  formErrors: "Errores de formulario",
  rule: {
    code: "Código",
    custom: "Personalizado",
    datetime: "Fecha y Hora",
    email: "Correo Electrónico",
    endsWith: "Termina con",
    falsy: "Falso",
    finite: "Finito",
    includes: "Incluye",
    integer: "Entero",
    ip: "Pi",
    length: "Longitud",
    lessThan: "Menos de",
    max: "Máx.",
    min: "Mín.",
    moreThan: "Más de",
    multipleOf: "Múltiplo de",
    nonEmpty: "No vacío",
    regex: "Expresiones regulares",
    required: "Requerido",
    startsWith: "Comienza con",
    truthy: "Verdad",
    url: "Url",
    uuid: "Uuid"
  },
  showFormErrors: "Mostrar errores de formulario"
}, L = {
  GoogleMap: e,
  RichTextEditor: a,
  RsDatePicker: o,
  RsTimePicker: r,
  RsWizard: n,
  actions: i,
  annotation: t,
  bottomPanel: l,
  codeActionEditor: s,
  codeEditor: d,
  common: c,
  componentToolbar: m,
  componentsList: p,
  componentsModal: u,
  editJson: h,
  errorsPanel: g,
  formsList: b,
  leftMenu: v,
  leftPanel: f,
  localization: E,
  promptDialog: C,
  propertiesEditor: S,
  rightMenu: A,
  searchForm: M,
  style: P,
  testingEditor: F,
  toolbar: q,
  tree: y,
  validation: z
};
export {
  e as GoogleMap,
  a as RichTextEditor,
  o as RsDatePicker,
  r as RsTimePicker,
  n as RsWizard,
  i as actions,
  t as annotation,
  l as bottomPanel,
  s as codeActionEditor,
  d as codeEditor,
  c as common,
  m as componentToolbar,
  p as componentsList,
  u as componentsModal,
  L as default,
  h as editJson,
  g as errorsPanel,
  b as formsList,
  v as leftMenu,
  f as leftPanel,
  E as localization,
  C as promptDialog,
  S as propertiesEditor,
  A as rightMenu,
  M as searchForm,
  P as style,
  F as testingEditor,
  q as toolbar,
  y as tree,
  z as validation
};
//# sourceMappingURL=es-ES-0fcd0a5e.js.map
