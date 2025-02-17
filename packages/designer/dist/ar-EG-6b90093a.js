const e = {
  addMarkerOnSearch: {
    hint: "سواء لإضافة علامة على البحث."
  },
  allowChangingMarkers: {
    hint: "إذا تم تحديده ، يمكن للمستخدم تغيير العلامات."
  },
  allowMultipleMarkers: {
    hint: "علامات متعددة"
  },
  apiKey: {
    hint: "مفتاح واجهة برمجة تطبيقات خرائط جوجل. احفظ النموذج وقم بتحديث الصفحة لتطبيق التغييرات.",
    name: "مفتاح واجهة برمجة التطبيقات"
  },
  collisionBehavior: {
    hint: "السلوك علامات الاصطدام."
  },
  colorScheme: {
    hint: "نظام الألوان للاستخدام."
  },
  gestureHandling: {
    hint: "التعامل مع لفتة للاستخدام."
  },
  language: {
    hint: "اللغة المستخدمة."
  },
  latitude: {
    hint: "خط العرض من نقطة المركز"
  },
  longitude: {
    hint: "خط الطول من نقطة المركز"
  },
  mapControlPosition: {
    hint: "موقف السيطرة على الخريطة."
  },
  mapId: {
    hint: "معرف الخريطة هو معرف مرتبط بنمط أو ميزة خريطة معينة.",
    name: "معرف الخريطة"
  },
  mapTypeId: {
    hint: "نوع الخريطة الافتراضي للاستخدام.",
    name: "نوع الخريطة"
  },
  markerWindowTitle: {
    hint: "عنوان نافذة علامة.",
    name: "علامة نافذة العنوان"
  },
  markers: {
    hint: "إحداثيات علامات"
  },
  region: {
    hint: "رمز المنطقة للاستخدام."
  },
  removeMarkerCaption: {
    hint: "التسمية التوضيحية على زر إزالة علامة.",
    name: "إزالة التسمية التوضيحية للعلامة"
  },
  searchPlaceholder: {
    hint: "نص العنصر النائب لإدخال بحث الخريطة.",
    name: "البحث عن العنصر النائب"
  },
  showMapControl: {
    hint: "سواء لإظهار السيطرة على الخريطة."
  },
  zoom: {
    hint: "مستوى التكبير"
  }
}, t = {
  modules: {
    hint: "يسمح لتخصيص السلوك والأداء الوظيفي للمحرر. اقرأ المستندات لمزيد من المعلومات.",
    name: "وحدات"
  },
  toolbarOptions: {
    hint: "مجموعات من الأزرار ليتم عرضها على شريط الأدوات",
    name: "خيارات شريط الأدوات"
  }
}, n = {
  format: {
    hint: "تنسيق التاريخ عند تقديمه في الإدخال",
    name: "الشكل"
  }
}, a = {
  format: {
    hint: "تنسيق الوقت عند تقديمه في الإدخال",
    name: "الشكل"
  }
}, o = {
  activeIndex: {
    hint: "مؤشر الخطوة النشطة",
    name: "مؤشر نشط"
  },
  finishButtonLabel: {
    hint: "تسمية زر إنهاء",
    name: "إنهاء تسمية زر"
  },
  nextButtonLabel: {
    hint: "تسمية الزر التالي",
    name: "تسمية الزر التالي"
  },
  prevButtonLabel: {
    hint: "تسمية الزر السابق",
    name: "تسمية الزر السابق"
  },
  showSteps: {
    hint: "إذا كان هذا صحيحا ، سيتم عرض الخطوات",
    name: "إظهار الخطوات"
  },
  showStepsLabels: {
    hint: "إذا كان هذا صحيحا ، سيتم عرض تسميات الخطوات",
    name: "إظهار تسميات الخطوات"
  },
  steps: {
    hint: "خطوات المعالج",
    name: "الخطوات"
  },
  stepsNavigation: {
    hint: "يحدد الخطوات المتاحة للتنقل عن طريق النقر",
    name: "خطوات الملاحة"
  },
  validateOnFinish: {
    hint: "إذا كان هذا صحيحا ، فسيتم التحقق من صحة المعالج قبل الانتهاء من المعالج",
    name: "التحقق من صحة في النهاية"
  },
  validateOnNext: {
    hint: "إذا كان هذا صحيحا ، فسيتم التحقق من صحة الخطوة قبل الانتقال إلى الخطوة التالية",
    name: "التحقق من صحة التالي"
  },
  verticalSteps: {
    hint: "إذا كان هذا صحيحا ، سيتم عرض الخطوات عموديا",
    name: "خطوات عمودية"
  },
  wizardHasNoSteps: "لإضافة خطوات المعالج ، حدد المكون وأضف الخطوات في لوحة الخصائص."
}, i = {
  add: "إضافة",
  addAction: "إضافة إجراء",
  addCodeAction: "أضف إجراء التعليمات البرمجية",
  arguments: "الحجج",
  code: "شفرة",
  common: "مشترك",
  custom: "مخصص",
  delete: "يحذف",
  duplicate: "مكررة",
  edit: "تحرير",
  name: "الاسم",
  parameters: "المعلمات",
  type: "النوع"
}, r = {
  accept: {
    hint: "أنواع الملفات التي يمكن قبولها. انظر سمة هتمل القياسية: قبول",
    name: "قبول"
  },
  action: {
    hint: "تحميل رابط",
    name: "الإجراء"
  },
  allowEmptyFormatting: {
    hint: 'بشكل افتراضي ، لا يطبق مكون تنسيق النمط التنسيق عندما تكون القيمة فارغة (فارغة أو غير محددة أو")',
    name: "السماح بالتنسيق الفارغ "
  },
  allowLeadingZeros: {
    hint: "هذا يسمح بتمكين أو تعطيل الأصفار البادئة في حقل الإدخال. بشكل افتراضي ، عند طمس أحد المدخلات ، تتم إزالة الأصفار البادئة",
    name: "السماح بالأصفار البادئة"
  },
  allowNegative: {
    hint: "إذا تم ضبطه على خطأ ، فلن يسمح بالأرقام السالبة",
    name: "السماح السلبية"
  },
  allowedDecimalSeparators: {
    hint: "الأحرف التي تؤدي عند الضغط عليها إلى فاصل عشري. في عداد المفقودين, فاصل عشري و'.'تستخدم",
    name: "الفواصل العشرية المسموح بها"
  },
  appearance: {
    hint: "تعيين مظهر المنتقى",
    name: "المظهر"
  },
  autoUpload: {
    hint: "تحميل الملفات تلقائيا بعد تحديدها",
    name: "تحميل تلقائي"
  },
  block: {
    hint: "حظر صف كامل",
    name: "بلوك"
  },
  bodyFill: {
    hint: "منطقة المحتوى مليئة الحاويات",
    name: "ملء الجسم"
  },
  calendarDefaultDate: {
    hint: "لوحة التقويم الافتراضي تاريخ العرض والوقت",
    name: "التاريخ الافتراضي للتقويم"
  },
  checked: {
    hint: "ما إذا كانت القيمة محددة",
    name: "فحص"
  },
  checkedChildren: {
    hint: "النص الذي يتم عرضه في الحالة المحددة",
    name: "نص محدد"
  },
  cleanable: {
    hint: "ما إذا كان يمكن إفراغ الخيار",
    name: "قابل للتنظيف"
  },
  code: {
    hint: "تحرير الكود",
    name: "كود"
  },
  color: {
    hint: "اللون الرئيسي للمكون",
    name: "اللون"
  },
  creatable: {
    hint: "يمكن للإعدادات إنشاء خيارات جديدة",
    name: "كريتابل"
  },
  data: {
    hint: "بيانات قابلة للتحديد",
    name: "البيانات"
  },
  decimalScale: {
    hint: "إذا تم تعريفه ، فإنه يحد من عدد الأرقام بعد الفاصلة العشرية",
    name: "مقياس عشري"
  },
  decimalSeparator: {
    hint: "يحدد الحرف العشري",
    name: "فاصل عشري"
  },
  defaultOpen: {
    hint: "القيمة الافتراضية للممتلكات المفتوحة",
    name: "افتراضي فتح"
  },
  defaultValue: {
    hint: "القيمة الافتراضية",
    name: "القيمة الافتراضية"
  },
  disableMultipart: {
    hint: "إذا 'صحيح' ، تعطيل باستخدام نموذج متعدد الأجزاء لتحميل الملف وبدلا من ذلك تيار الملف. قد تتوقع بعض واجهات برمجة التطبيقات (مثل أمازون إس 3) تدفق الملف بدلا من إرساله عبر نموذج",
    name: "تعطيل متعدد الأجزاء"
  },
  disabled: {
    hint: "ما إذا كان المكون معطلا أم لا",
    name: "معاق"
  },
  download: {
    hint: "يؤدي المتصفح لعلاج رابط مرتبط كتنزيل",
    name: "تحميل"
  },
  downloadFilename: {
    hint: "يشير تعريف القيمة إلى أنها اسم الملف. / و \\ يتم تحويل الأحرف إلى شرطات سفلية ( _ )",
    name: "تحميل اسم الملف"
  },
  draggable: {
    hint: "تمكين السحب والإفلات للتحميل",
    name: "قابل للسحب"
  },
  editable: {
    hint: "المقدمة كمدخل ، يمكن إدخال القيمة عبر لوحة المفاتيح",
    name: "قابل للتحرير"
  },
  errorConfig: {
    show: "عرض"
  },
  eventKey: {
    hint: "مفتاح الحدث المقابل لهذا العنصر",
    name: "مفتاح الحدث"
  },
  fixedDecimalScale: {
    hint: "إذا تم ضبطه على ترو ، فإنه يضيف 0 ثانية زائدة بعد الفاصل العشري لمطابقة مقياس عشري معين",
    name: "مقياس عشري ثابت"
  },
  flexDirection: {
    hint: "الاتجاه المرن للأطفال الحاويات",
    name: "الاتجاه"
  },
  format: {
    hint: "تنسيق النمط باستخدام الحرف # (أو حرف نمط). # هو حرف العنصر النائب للأرقام. مثال:'### ###'",
    name: "الشكل"
  },
  groupBy: {
    hint: "تعيين معايير التجميع 'مفتاح ' في'البيانات'",
    name: "المجموعة حسب"
  },
  href: {
    hint: "عنوان ورل الذي يشير إليه الارتباط التشعبي",
    name: "هريف"
  },
  htmlAttributes: {
    hint: "سمات هتمل في رد فعل (كاملكيس) شكل",
    name: "سمات هتمل"
  },
  isoWeek: {
    hint: "معيار الأيزو 8601 ، يبدأ كل أسبوع تقويمي يومي الاثنين والأحد في اليوم السابع",
    name: "أسبوع الأيزو"
  },
  justifyContent: {
    name: "المحاذاة"
  },
  label: {
    hint: "وضع التسمية",
    name: "التسمية"
  },
  limitEndYear: {
    hint: "قم بتعيين الحد الأعلى للسنة المتاحة بالنسبة إلى تاريخ التحديد الحالي",
    name: "حد نهاية السنة"
  },
  limitStartYear: {
    hint: "قم بتعيين الحد الأدنى للسنة المتاحة بالنسبة لتاريخ التحديد الحالي",
    name: "الحد الأقصى لبدء السنة"
  },
  loading: {
    hint: "ما إذا كان المكون في حالة التحميل",
    name: "تحميل"
  },
  mask: {
    hint: "تستخدم كحرف قناع للأماكن الرقمية ، حتى يتم توفير أي حرف رقمي لهذا الموضع",
    name: "قناع"
  },
  method: {
    hint: "طريقة هتب لطلب التحميل",
    name: "الطريقة"
  },
  name: {
    hint: "قم بتحميل اسم المعلمة للملف المقابل",
    name: "الاسم"
  },
  objectFit: {
    name: "صالح"
  },
  objectPosition: {
    name: "المنصب"
  },
  oneTap: {
    hint: "نقرة واحدة لإكمال قيمة التحديد",
    name: "بنقرة واحدة"
  },
  open: {
    hint: "سواء فتح المكون",
    name: "فتح"
  },
  passwordMask: {
    hint: "استخدم قناع كلمة المرور",
    name: "قناع كلمة المرور"
  },
  patternChar: {
    hint: "يساعد هذا في تحديد حرف نمط التنسيق",
    name: "نمط شار"
  },
  placeholder: {
    hint: "وضع العناصر النائبة",
    name: "نائب"
  },
  placement: {
    hint: "وضع المكون",
    name: "التنسيب"
  },
  prefix: {
    hint: "يضيف حرف البادئة قبل قيمة الإدخال",
    name: "بادئة"
  },
  preload: {
    hint: "قم بتحميل البيانات مسبقا ، قبل فتح القائمة المنسدلة",
    name: "التحميل المسبق"
  },
  preventOverflow: {
    hint: "منع تجاوز العنصر العائم",
    name: "منع تجاوز"
  },
  readOnly: {
    hint: "إذا كان هذا صحيحا ، فسيكون المكون للقراءة فقط",
    name: "للقراءة فقط"
  },
  showMeridian: {
    hint: "ساعات العرض بتنسيق 12",
    name: "عرض ميريديان"
  },
  showWeekNumbers: {
    hint: "سواء لإظهار أرقام الأسبوع",
    name: "عرض أرقام الأسبوع"
  },
  size: {
    hint: "يمكن أن يكون للمكون أحجام مختلفة",
    name: "الحجم"
  },
  suffix: {
    hint: "يضيف اللاحقة بعد قيمة الإدخال",
    name: "لاحقة "
  },
  target: {
    hint: "مكان عرض عنوان ورل المرتبط ، كاسم لسياق التصفح (علامة تبويب أو نافذة أو < إفريم>)",
    name: "الهدف"
  },
  textAlign: {
    name: "المحاذاة"
  },
  thousandsGroupStyle: {
    hint: "ألف نمط (ألف): 123 ، 456 ، 789 ، النمط الهندي (لكح): 12 ، 34 ، 56 ، 789 ، النمط الصيني (وان): 1 ، 2345 ، 6789",
    name: "نمط مجموعة الآلاف"
  },
  tooltipProps: {
    hint: "استخدم تلميح الأدوات لهذا العنصر",
    tooltip: "تلميح الأدوات"
  },
  unCheckedChildren: {
    hint: "النص الذي يتم عرضه في الحالة غير المحددة",
    name: "نص غير محدد"
  },
  value: {
    hint: "القيمة (الخاضعة للرقابة)",
    name: "القيمة"
  },
  withCredentials: {
    hint: "ما إذا كنت تريد حمل ملفات تعريف الارتباط عند تحميل الطلبات",
    name: "مع وثائق التفويض"
  }
}, m = {
  editCodeAction: "تحرير إجراء التعليمات البرمجية",
  editProperty: "تحرير الممتلكات",
  function: "قيمة قابلة للحساب",
  localization: "التعريب بطلاقة",
  simpleValue: "قيمة بسيطة",
  simpleValueHint: "تحرير الخاصية في اللوحة اليمنى",
  use: "استخدام"
}, l = {
  actionNameExists: "العمل مع هذا الاسم موجود بالفعل",
  nameIsRequired: "اسم الإجراء مطلوب",
  parameterNameExists: "المعلمة مع هذا الاسم موجود بالفعل",
  parameterNameIsNotValid: "اسم المعلمة غير صالح",
  parameterNameIsRequired: "مطلوب اسم المعلمة"
}, s = {
  codeActionHeader: "محرر إجراءات التعليمات البرمجية",
  codePlaceholder: "// أدخل الرمز الخاص بك هنا",
  compilationResult: "نتيجة التجميع:",
  compile: "ترجمة",
  generic: {
    json: {
      title: "تحرير بيانات جسون ل"
    }
  },
  ok: "حسنا"
}, c = {
  apply: "تطبيق",
  cancel: "إلغاء",
  clone: "استنساخ",
  close: "إغلاق",
  edit: "تحرير",
  name: "الاسم",
  remove: "إزالة",
  save: "حفظ",
  test: "اختبار"
}, h = {
  add: "إضافة عنصر جديد",
  after: "بعد",
  before: "قبل",
  inside: "داخل"
}, d = {
  categories: {
    fields: "الحقول",
    static: "ثابت",
    structure: "الهيكل",
    templates: "قوالب"
  }
}, p = {
  clickToAdd: "انقر لإضافة عنصر تحكم"
}, u = "تحرير جسون", g = {
  data: "البيانات",
  errors: "أخطاء"
}, b = {
  addNewForm: "إضافة نموذج جديد",
  formWithNameExists: "النموذج بهذا الاسم موجود بالفعل.",
  noFormsInFormStorage: "احفظ النموذج بحيث يظهر في قائمة النماذج."
}, f = {
  clear: "واضح",
  currentFormName: "اسم النموذج الحالي",
  download: "تحميل",
  enterFormName: "الرجاء إدخال اسم النموذج",
  exportForms: "نماذج التصدير",
  exportFormsError: "فشل في تصدير النماذج! راجع السجلات في وحدة تحكم المتصفح",
  exportFormsSuccess: "النماذج المصدرة",
  formNamePlaceholder: "بلدي شكل جميل",
  formSaveError: "فشل في حفظ النموذج! راجع السجلات في وحدة تحكم المتصفح",
  formSaved: "يتم حفظ النموذج",
  importForms: "نماذج الاستيراد",
  importFormsError: "فشل في استيراد النماذج! راجع السجلات في وحدة تحكم المتصفح",
  importFormsSuccess: "النماذج المستوردة",
  menu: "القائمة",
  print: "طباعة",
  save: "حفظ",
  saveAs: "حفظ باسم...",
  settings: "الإعدادات",
  translation: "ترجمة",
  undo: "تراجع",
  upload: "تحميل",
  validateForm: "التحقق من صحة النموذج"
}, k = {
  formSettings: {
    actions: "الإجراءات",
    error: "إعدادات الخطأ",
    language: "اعدادات اللغة",
    tooltip: "تلميح الأدوات"
  },
  sectionName: {
    components: "المكونات",
    forms: "النماذج",
    settings: "الإعدادات",
    tree: "شجرة"
  }
}, w = {
  messageIsNull: "رسالة التعريب فارغة",
  messageNotFound: "لم يتم العثور على رسالة التعريب"
}, v = {
  cancel: "إلغاء",
  ok: "حسنا"
}, y = {
  applyKey: "تطبيق التغييرات الرئيسية",
  codeButton: {
    editCalculable: "تحرير حساب",
    editLocalizable: "تحرير الترجمة بطلاقة",
    hintCalculable: "اجعل هذه الخاصية قابلة للحساب",
    hintCalculableAndLocalizable: "اجعل هذه الخاصية قابلة للحساب أو التوطين بطلاقة",
    hintLocalizable: "توطين هذه الخاصية بطلاقة",
    neitherCalculableNorLocalizable: "لا يمكن حسابه ولا توطينه"
  },
  keyMustBeUnique: "يجب أن يكون المفتاح فريدا",
  keyMustNotBeEmpty: "يجب ألا يكون المفتاح فارغا",
  sectionName: {
    actions: "الإجراءات",
    expression: "التعبير",
    linkedProperty: "خاصية مرتبطة",
    main: "الرئيسية",
    rules: "القواعد",
    style: "نمط",
    withTarget: "مع الهدف",
    withoutTarget: "بدون هدف"
  },
  selectElementForEdit: "حدد العنصر في النموذج لتحرير الخصائص",
  setInputHint: "اضغط على إدخال لإضافة قيمة",
  subSection: {
    additionalProperties: "خصائص إضافية"
  }
}, E = {
  modes: {
    builder: "معاينة",
    desktop: "سطح المكتب",
    mobile: "موبايل",
    tablet: "تابلت",
    viewer: "تحرير"
  },
  toggleTheme: "تبديل الموضوع"
}, F = {
  search: "بحث..."
}, N = {
  any: "أي",
  component: "العنصر",
  componentHint: "الأنماط التي تنطبق على المكون",
  desktop: "سطح المكتب",
  forDevice: "للجهاز:",
  mobile: "موبايل",
  other: "أخرى",
  tablet: "تابلت",
  wrapper: "المجمع",
  wrapperHint: "الأنماط التي تنطبق على غلاف المكون"
}, x = {
  autorun: "التشغيل التلقائي",
  compilationOk: "نتيجة التجميع: حسنا",
  hasNotReturnedValue: "لم يتم إرجاع القيمة",
  run: "تشغيل",
  testFormData: "بيانات نموذج الاختبار"
}, C = {
  cloneComponent: "مكون استنساخ",
  elements: "الأركان",
  notFound: "غير موجود",
  removeComponent: "إزالة المكون",
  reset: "إعادة تعيين"
}, M = {
  collapse: "طي الكل",
  expand: "توسيع الكل"
}, P = {
  addRule: "إضافة قاعدة",
  chooseValidation: "اختر النوع الخاص بك",
  editCustomValidationCode: "تحرير رمز التحقق المخصص للمكون",
  formErrors: "أخطاء النموذج",
  rule: {
    code: "شفرة",
    custom: "مخصص",
    datetime: "التاريخ والوقت",
    email: "البريد الإلكتروني",
    endsWith: "ينتهي مع",
    falsy: "فالسي",
    finite: "محدود",
    includes: "يشمل",
    integer: "عدد صحيح",
    ip: "الملكية الفكرية",
    length: "الطول",
    lessThan: "أقل من",
    max: "ماكس",
    min: "دقيقة",
    moreThan: "أكثر من",
    multipleOf: "مضاعف من",
    nonEmpty: "غير فارغ",
    regex: "التعبير العادي",
    required: "مطلوب",
    startsWith: "يبدأ ب",
    truthy: "تروثي",
    url: "رابط",
    uuid: "الجامعة"
  },
  showFormErrors: "إظهار أخطاء النموذج"
}, S = {
  GoogleMap: e,
  RichTextEditor: t,
  RsDatePicker: n,
  RsTimePicker: a,
  RsWizard: o,
  actions: i,
  annotation: r,
  bottomPanel: m,
  codeActionEditor: l,
  codeEditor: s,
  common: c,
  componentToolbar: h,
  componentsList: d,
  componentsModal: p,
  editJson: u,
  errorsPanel: g,
  formsList: b,
  leftMenu: f,
  leftPanel: k,
  localization: w,
  promptDialog: v,
  propertiesEditor: y,
  rightMenu: E,
  searchForm: F,
  style: N,
  testingEditor: x,
  toolbar: C,
  tree: M,
  validation: P
};
export {
  e as GoogleMap,
  t as RichTextEditor,
  n as RsDatePicker,
  a as RsTimePicker,
  o as RsWizard,
  i as actions,
  r as annotation,
  m as bottomPanel,
  l as codeActionEditor,
  s as codeEditor,
  c as common,
  h as componentToolbar,
  d as componentsList,
  p as componentsModal,
  S as default,
  u as editJson,
  g as errorsPanel,
  b as formsList,
  f as leftMenu,
  k as leftPanel,
  w as localization,
  v as promptDialog,
  y as propertiesEditor,
  E as rightMenu,
  F as searchForm,
  N as style,
  x as testingEditor,
  C as toolbar,
  M as tree,
  P as validation
};
//# sourceMappingURL=ar-EG-6b90093a.js.map
