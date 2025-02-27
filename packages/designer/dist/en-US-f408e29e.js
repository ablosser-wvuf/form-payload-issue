const e = {
  apply: "Apply",
  name: "Name",
  save: "Save",
  cancel: "Cancel",
  clone: "Clone",
  close: "Close",
  edit: "Edit",
  remove: "Remove",
  test: "Test"
}, t = {
  errorConfig: {
    show: "Show"
  },
  htmlAttributes: {
    name: "HTML attributes",
    hint: "HTML attributes in React (camelCase) format"
  },
  tooltipProps: {
    tooltip: "Tooltip",
    hint: "Use tooltip for this element"
  },
  objectPosition: {
    name: "Position"
  },
  justifyContent: {
    name: "Justify"
  },
  objectFit: {
    name: "Fit"
  },
  textAlign: {
    name: "Alignment"
  },
  passwordMask: {
    name: "Password mask",
    hint: "Use password mask"
  },
  allowLeadingZeros: {
    name: "Allow leading zeros",
    hint: "This allows enabling or disabling leading zeros in the input field. By default, on blur of an input, leading zeros are removed"
  },
  allowNegative: {
    name: "Allow negative",
    hint: "If set to false, negative numbers will not be allowed"
  },
  allowedDecimalSeparators: {
    name: "Allowed decimal separators",
    hint: "Characters which when pressed result in a decimal separator. When missing, decimal separator and '.' are used"
  },
  decimalScale: {
    name: "Decimal scale",
    hint: "If defined, it limits the number of digits after the decimal point"
  },
  decimalSeparator: {
    name: "Decimal separator",
    hint: "Defines the decimal character"
  },
  fixedDecimalScale: {
    name: "Fixed decimal scale",
    hint: "If set to true, it adds trailing 0s after decimalSeparator to match given decimalScale"
  },
  prefix: {
    name: "Prefix",
    hint: "Adds the prefix character before the input value"
  },
  suffix: {
    name: "Suffix ",
    hint: "Adds the suffix after the input value"
  },
  thousandsGroupStyle: {
    name: "Thousands group style",
    hint: "Thousand style (thousand) : 123,456,789, indian style (lakh) : 12,34,56,789, chinese style (wan) : 1,2345,6789"
  },
  allowEmptyFormatting: {
    name: "Allow empty formatting ",
    hint: "By default PatternFormat component does not apply formatting when value is empty (null, undefined or ‘’)"
  },
  format: {
    name: "Format",
    hint: "Format pattern using the # (or a Pattern char) character. # is the placeholder character for numbers. Example: '### ###'"
  },
  mask: {
    name: "Mask",
    hint: "Used as mask character for numeric places, until any numeric character is provided for that position"
  },
  patternChar: {
    name: "Pattern char",
    hint: "This helps define the format pattern character"
  },
  bodyFill: {
    name: "Body fill",
    hint: "Content area filled with containers"
  },
  eventKey: {
    name: "Event key",
    hint: "The event key corresponding to this element"
  },
  action: {
    name: "Action",
    hint: "Uploading URL"
  },
  accept: {
    name: "Accept",
    hint: "File types that can be accepted. See standard HTML attribute: accept"
  },
  autoUpload: {
    name: "Auto upload",
    hint: "Automatically upload files after selecting them"
  },
  disableMultipart: {
    name: "Disable multipart",
    hint: "If 'true', disable using a multipart form for file upload and instead stream the file. Some APIs (e.g. Amazon S3) may expect the file to be streamed rather than sent via a form"
  },
  draggable: {
    name: "Draggable",
    hint: "Enabled drag and drop to upload"
  },
  method: {
    name: "Method",
    hint: "The HTTP method of upload request"
  },
  name: {
    name: "Name",
    hint: "Upload the parameter name of the corresponding file"
  },
  withCredentials: {
    name: "With credentials",
    hint: "Whether to carry cookies when uploading requests"
  },
  block: {
    name: "Block",
    hint: "Blocking an entire row"
  },
  cleanable: {
    name: "Cleanable",
    hint: "Whether the option can be emptied"
  },
  creatable: {
    name: "Creatable",
    hint: "Settings can create new options"
  },
  data: {
    name: "Data",
    hint: "Selectable data"
  },
  disabled: {
    name: "Disabled",
    hint: "Whether or not component is disabled"
  },
  placeholder: {
    name: "Placeholder",
    hint: "Setting placeholders"
  },
  placement: {
    name: "Placement",
    hint: "The placement of component"
  },
  size: {
    name: "Size",
    hint: "Component can have different sizes"
  },
  label: {
    name: "Label",
    hint: "Setting label"
  },
  groupBy: {
    name: "Group by",
    hint: "Set grouping criteria 'key' in 'data'"
  },
  code: {
    name: "Code",
    hint: "Edit code"
  },
  flexDirection: {
    name: "Direction",
    hint: "Flex direction of container children"
  },
  preload: {
    name: "Preload",
    hint: "Upload data in advance, before opening the dropdown"
  },
  href: {
    name: "Href",
    hint: "The URL that the hyperlink points to"
  },
  download: {
    name: "Download",
    hint: "Causes the browser to treat the linked URL as a download"
  },
  target: {
    name: "Target",
    hint: "Where to display the linked URL, as the name for a browsing context (a tab, window, or <iframe>)"
  },
  downloadFilename: {
    name: "Download filename",
    hint: "Defining a value suggests it as the filename. / and \\ characters are converted to underscores (_)"
  },
  checked: {
    name: "Checked",
    hint: "Whether the value is checked"
  },
  checkedChildren: {
    name: "Checked text",
    hint: "The text that is displayed in the checked state"
  },
  unCheckedChildren: {
    name: "Unchecked text",
    hint: "The text that is displayed in the unchecked state"
  },
  loading: {
    name: "Loading",
    hint: "Whether the component is in loading state"
  },
  color: {
    name: "Color",
    hint: "The main color of the component"
  },
  readOnly: {
    name: "Read only",
    hint: "If true, the component will be read-only"
  },
  editable: {
    name: "Editable",
    hint: "Rendered as an input, the value can be entered via the keyboard"
  },
  open: {
    name: "Open",
    hint: "Whether open the component"
  },
  oneTap: {
    name: "One tap",
    hint: "One click to complete the selection value"
  },
  value: {
    name: "Value",
    hint: "Value (Controlled)"
  },
  appearance: {
    name: "Appearance",
    hint: "Set picker appearance"
  },
  calendarDefaultDate: {
    name: "Calendar default date",
    hint: "Calendar panel default presentation date and time"
  },
  defaultOpen: {
    name: "Default open",
    hint: "Default value of open property"
  },
  preventOverflow: {
    name: "Prevent overflow",
    hint: "Prevent floating element overflow"
  },
  defaultValue: {
    name: "Default value",
    hint: "Default value"
  },
  isoWeek: {
    name: "Iso week",
    hint: "ISO 8601 standard, each calendar week begins on Monday and Sunday on the seventh day"
  },
  limitEndYear: {
    name: "Limit end year",
    hint: "Set the upper limit of the available year relative to the current selection date"
  },
  limitStartYear: {
    name: "Limit start year",
    hint: "Set the lower limit of the available year relative to the current selection date"
  },
  showMeridian: {
    name: "Show meridian",
    hint: "Display hours in 12 format"
  },
  showWeekNumbers: {
    name: "Show week numbers",
    hint: "Whether to show week numbers"
  }
}, a = {
  format: {
    name: "Format",
    hint: "Format of the date when rendered in the input"
  }
}, n = {
  latitude: {
    hint: "Latitude of the center point"
  },
  longitude: {
    hint: "Longitude of the center point"
  },
  zoom: {
    hint: "Zoom level"
  },
  apiKey: {
    name: "API key",
    hint: "Google Maps API key. Save the form and refresh the page to apply the changes."
  },
  markers: {
    hint: "Coordinates of the markers"
  },
  collisionBehavior: {
    hint: "The markers collision behavior."
  },
  allowMultipleMarkers: {
    hint: "Multiple markers"
  },
  allowChangingMarkers: {
    hint: "If checked, the user can change the markers."
  },
  mapId: {
    name: "Map ID",
    hint: "The map ID is an identifier that's associated with a specific map style or feature."
  },
  region: {
    hint: "The region code to use."
  },
  language: {
    hint: "The language to use."
  },
  colorScheme: {
    hint: "The color scheme to use."
  },
  gestureHandling: {
    hint: "The gesture handling to use."
  },
  mapTypeId: {
    name: "Map type",
    hint: "The default map type to use."
  },
  showMapControl: {
    hint: "Whether to show the map control."
  },
  mapControlPosition: {
    hint: "The position of the map control."
  },
  addMarkerOnSearch: {
    hint: "Whether to add a marker on search."
  },
  markerWindowTitle: {
    name: "Marker window title",
    hint: "The title of the marker window."
  },
  removeMarkerCaption: {
    name: "Remove marker caption",
    hint: "The caption on the marker removal button."
  },
  searchPlaceholder: {
    name: "Search placeholder",
    hint: "Placeholder text for the map search input."
  }
}, o = {
  format: {
    name: "Format",
    hint: "Format of the time when rendered in the input"
  }
}, i = {
  toolbarOptions: {
    name: "Toolbar options",
    hint: "Groups of buttons to be displayed on the toolbar"
  },
  modules: {
    name: "Modules",
    hint: "Allows to customize the behavior and functionality of the editor. Read docs for more info."
  }
}, r = {
  activeIndex: {
    name: "Active index",
    hint: "The active step index"
  },
  prevButtonLabel: {
    name: "Previous button label",
    hint: "The previous button label"
  },
  nextButtonLabel: {
    name: "Next button label",
    hint: "The next button label"
  },
  finishButtonLabel: {
    name: "Finish button label",
    hint: "The finish button label"
  },
  steps: {
    name: "Steps",
    hint: "The wizard steps"
  },
  showSteps: {
    name: "Show steps",
    hint: "If true, the steps will be shown"
  },
  showStepsLabels: {
    name: "Show steps labels",
    hint: "If true, the steps labels will be shown"
  },
  verticalSteps: {
    name: "Vertical steps",
    hint: "If true, the steps will be displayed vertically"
  },
  stepsNavigation: {
    name: "Steps navigation",
    hint: "Determines which steps are available for navigation by clicking"
  },
  validateOnNext: {
    name: "Validate on next",
    hint: "If true, the step will be validated before moving to the next step"
  },
  validateOnFinish: {
    name: "Validate on finish",
    hint: "If true, the wizard will be validated before finishing the wizard"
  },
  wizardHasNoSteps: "To add the wizard steps, select the component and add the steps in the properties panel."
}, l = {
  translation: "Translation",
  undo: "Undo",
  menu: "Menu",
  download: "Download",
  upload: "Upload",
  print: "Print",
  settings: "Settings",
  clear: "Clear",
  save: "Save",
  saveAs: "Save as...",
  validateForm: "Validate form",
  currentFormName: "The name of the current form",
  formSaved: "The form is saved",
  formSaveError: "Failed to save form! See the logs in the browser console",
  enterFormName: "Please enter form name",
  formNamePlaceholder: "My beautiful form",
  exportForms: "Export forms",
  exportFormsSuccess: "Forms exported",
  exportFormsError: "Failed to export forms! See the logs in the browser console",
  importForms: "Import forms",
  importFormsSuccess: "Forms imported",
  importFormsError: "Failed to import forms! See the logs in the browser console"
}, s = {
  noFormsInFormStorage: "Save the form so that it appears in the list of forms.",
  addNewForm: "Add a new form",
  formWithNameExists: "Form with this name already exists."
}, d = {
  toggleTheme: "Toggle theme",
  modes: {
    builder: "Preview",
    viewer: "Edit",
    desktop: "Desktop",
    mobile: "Mobile",
    tablet: "Tablet"
  }
}, h = {
  clickToAdd: "Click to add control"
}, m = {
  categories: {
    fields: "Fields",
    static: "Static",
    structure: "Structure",
    templates: "Templates"
  }
}, c = {
  add: "Add new element",
  before: "Before",
  after: "After",
  inside: "Inside"
}, p = {
  codeActionHeader: "Code action editor",
  ok: "OK",
  compilationResult: "Compilation result:",
  codePlaceholder: "// enter your code here",
  compile: "Compile",
  generic: {
    json: {
      title: "Edit JSON data for"
    }
  }
}, u = {
  selectElementForEdit: "Select element on form for edit properties",
  sectionName: {
    main: "Main",
    style: "Style",
    actions: "Actions",
    rules: "Rules",
    withTarget: "With Target",
    withoutTarget: "Without Target",
    linkedProperty: "Linked property",
    expression: "Expression"
  },
  subSection: {
    additionalProperties: "Additional properties"
  },
  codeButton: {
    hintCalculable: "Make this property calculable",
    hintLocalizable: "Localize this property with Fluent",
    hintCalculableAndLocalizable: "Make this property calculable or localize with Fluent",
    editCalculable: "Edit calculable",
    editLocalizable: "Edit Fluent localization",
    neitherCalculableNorLocalizable: "Neither calculable nor localizable"
  },
  setInputHint: "Press Enter to add a value",
  applyKey: "Apply key changes",
  keyMustBeUnique: "Key must be unique",
  keyMustNotBeEmpty: "Key must not be empty"
}, f = {
  elements: "Elements",
  notFound: "Not found",
  reset: "Reset",
  cloneComponent: "Clone component",
  removeComponent: "Remove component"
}, b = {
  data: "Data",
  errors: "Errors"
}, g = {
  search: "Search..."
}, w = {
  expand: "Expand all",
  collapse: "Collapse all"
}, y = {
  other: "Other",
  forDevice: "For device",
  component: "Component",
  componentHint: "Styles that apply to the component",
  wrapper: "Wrapper",
  wrapperHint: "Styles that apply to the component wrapper",
  any: "Any",
  desktop: "Desktop",
  mobile: "Mobile",
  tablet: "Tablet"
}, v = {
  arguments: "Arguments",
  code: "Code",
  custom: "Custom",
  common: "Common",
  edit: "Edit",
  duplicate: "Duplicate",
  delete: "Delete",
  addCodeAction: "Add a code action",
  addAction: "Add an action",
  parameters: "Parameters",
  add: "Add",
  name: "Name",
  type: "Type"
}, k = {
  ruleNotFound: "Rule not found or not connected",
  showFormErrors: "Show form errors",
  formErrors: "Form errors",
  chooseValidation: "Choose your type",
  addRule: "Add a validation rule",
  editCustomValidationCode: "Edit custom validation code for component",
  rule: {
    required: "Required",
    nonEmpty: "Non empty",
    length: "Length",
    min: "Min",
    max: "Max",
    regex: "Regex",
    email: "Email",
    url: "Url",
    uuid: "Uuid",
    ip: "Ip",
    datetime: "Datetime",
    includes: "Includes",
    startsWith: "Starts with",
    endsWith: "Ends with",
    code: "Code",
    custom: "Custom",
    truthy: "Truthy",
    falsy: "Falsy",
    lessThan: "Less than",
    moreThan: "More than",
    integer: "Integer",
    multipleOf: "Multiple of",
    finite: "Finite"
  }
}, S = {
  ok: "OK",
  cancel: "Cancel"
}, T = {
  messageNotFound: "Localization message not found",
  messageIsNull: "Localization message is null"
}, C = {
  sectionName: {
    components: "Components",
    tree: "Tree",
    forms: "Forms",
    settings: "Settings"
  },
  formSettings: {
    actions: "Actions",
    error: "Error settings",
    tooltip: "Tooltip",
    language: "Language settings"
  }
}, F = {
  use: "Use",
  localization: "Fluent localization",
  function: "Calculable value",
  simpleValue: "Simple value",
  simpleValueHint: "Edit the property in the right panel",
  editProperty: "Edit property",
  editCodeAction: "Edit code action"
}, x = {
  actionNameExists: "Action with this name already exists",
  nameIsRequired: "Action name is required",
  parameterNameExists: "Parameter with this name already exists",
  parameterNameIsRequired: "Parameter name is required",
  parameterNameIsNotValid: "Parameter name is not valid"
}, E = {
  run: "Run",
  autorun: "Autorun",
  testFormData: "Test form data",
  hasNotReturnedValue: "Has not returned value",
  compilationOk: "Compilation result: OK"
}, A = "Edit JSON", P = {
  common: e,
  annotation: t,
  RsDatePicker: a,
  GoogleMap: n,
  RsTimePicker: o,
  RichTextEditor: i,
  RsWizard: r,
  leftMenu: l,
  formsList: s,
  rightMenu: d,
  componentsModal: h,
  componentsList: m,
  componentToolbar: c,
  codeEditor: p,
  propertiesEditor: u,
  toolbar: f,
  errorsPanel: b,
  searchForm: g,
  tree: w,
  style: y,
  actions: v,
  validation: k,
  promptDialog: S,
  localization: T,
  leftPanel: C,
  bottomPanel: F,
  codeActionEditor: x,
  testingEditor: E,
  editJson: A
};
export {
  n as GoogleMap,
  i as RichTextEditor,
  a as RsDatePicker,
  o as RsTimePicker,
  r as RsWizard,
  v as actions,
  t as annotation,
  F as bottomPanel,
  x as codeActionEditor,
  p as codeEditor,
  e as common,
  c as componentToolbar,
  m as componentsList,
  h as componentsModal,
  P as default,
  A as editJson,
  b as errorsPanel,
  s as formsList,
  l as leftMenu,
  C as leftPanel,
  T as localization,
  S as promptDialog,
  u as propertiesEditor,
  d as rightMenu,
  g as searchForm,
  y as style,
  E as testingEditor,
  f as toolbar,
  w as tree,
  k as validation
};
//# sourceMappingURL=en-US-f408e29e.js.map
