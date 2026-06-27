import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'opportunity',
  title: 'Opportunity',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'type',
      title: 'Type',
      type: 'string',
      options: {
        list: [
          { title: 'Theme Shoot', value: 'Theme Shoot' },
          { title: 'Casting Call', value: 'Casting Call' },
          { title: 'Urgent Hire', value: 'Urgent Hire' },
          { title: 'Paid Project', value: 'Paid Project' },
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 4,
    }),
    defineField({
      name: 'rolesNeeded',
      title: 'Roles Needed',
      type: 'array',
      of: [
        {
          type: 'string',
          options: {
            list: [
              { title: 'Model', value: 'Model' },
              { title: 'Photographer', value: 'Photographer' },
              { title: 'Videographer', value: 'Videographer' },
              { title: 'Editor', value: 'Editor' },
            ],
          },
        },
      ],
    }),
    defineField({
      name: 'compensation',
      title: 'Compensation',
      type: 'string',
    }),
    defineField({
      name: 'location',
      title: 'Location',
      type: 'string',
    }),
    defineField({
      name: 'deadline',
      title: 'Deadline',
      type: 'date',
    }),
    defineField({
      name: 'isActive',
      title: 'Active',
      type: 'boolean',
      initialValue: true,
    }),
  ],
  preview: {
    select: { title: 'title', subtitle: 'type' },
  },
})
