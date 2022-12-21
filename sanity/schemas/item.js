import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'item',
  title: 'Item',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      type: 'string',
      title: 'Name of item',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'short_description',
      type: 'string',
      title: 'Short description',
      validation: (Rule) => Rule.max(200),
    }),
    defineField({
      name: 'price',
      type: 'number',
      title: 'Price of item',
    }),
    defineField({
      name: 'image',
      type: 'image',
      title: 'Image of item',
    }),
    defineField({
      name: 'type',
      title: 'Category',
      type: 'reference',
      to: [{ type: 'category' }],
    }),
  ],
})
