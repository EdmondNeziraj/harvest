import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'featured',
  title: 'Featured Item categories',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Featured Category name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'items',
      title: 'Items',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'item' }] }],
    }),
  ],
})
