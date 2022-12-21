import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'store',
  title: 'Store',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Store name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'image',
      type: 'image',
      title: 'Image of the Store'
    }),
    defineField({
      name: 'lat',
      type: 'number',
      title: 'Latitude of the Store'
    }),
    defineField({
      name: 'long',
      type: 'number',
      title: 'Longitude of the Store'
    }),
    defineField({
      name: 'address',
      title: 'Store address',
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
