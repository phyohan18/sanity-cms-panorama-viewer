import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'images',
  title: 'Panorama Images',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required().max(80),
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        metadata: [
          'exif',
          'location', 
        ],
        hotspot: true, 
      },
      validation: (Rule) => Rule.required(),
    }),
  ],
})
