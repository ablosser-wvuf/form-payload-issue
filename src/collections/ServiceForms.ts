import { CollectionConfig } from 'payload'

const ServiceForms: CollectionConfig = {
  slug: 'serviceForms',
  versions: true,
  labels: {
    singular: 'Service Form',
    plural: 'Service Forms',
  },
  access: {
    read: () => true,
    create: () => true,
    update: () => true,
    delete: () => true,
  },
  admin: {
    useAsTitle: 'title',
    group: 'Forms',
    defaultColumns: ['title'],
    enableRichTextRelationship: false,
    description: 'Create and manage service forms',
    listSearchableFields: ['title'],
  },
  fields: [
    {
      label: 'Form Title',
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      label: 'Form Source',
      name: 'formSource',
      type: 'json',
      required: true,
      admin: {
        components: {
          Field: '../components/custom/Form/PayloadEditor/PayloadEditor',
        },
      },
    },
  ],
}

export default ServiceForms
