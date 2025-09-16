import { CalendarIcon } from '@sanity/icons'
import { defineField, defineType } from 'sanity'
import { DoorsOpenInput } from './components/DoorsOpenInput'

export const eventType = defineType({
  name: 'event',
  title: 'Event',
  type: 'document',
  icon: CalendarIcon,
  groups: [
    {name: 'details', title: 'Details'},
    {name: 'editorial', title: 'Editorial'},
  ],
  fields: [
    defineField({
      name: 'name',
      type: 'string',
      group: 'details',
    }),
    defineField({
      name: 'slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required().error('A slug is required'),
      hidden: ({document}) => !document?.name,
      group: 'details',
    }),
    defineField({
      name: 'eventType',
      type: 'string',
      options: {
        list: [
          {title: 'Online', value: 'online'},
          {title: 'In-Person', value: 'in-person'},
        ],
        layout: 'radio',
      },
      group: 'details',
    }),
    defineField({
      name: 'date',
      type: 'datetime',
      group: 'details',
    }),
    defineField({
      name: 'doorsOpen',
      description: 'Time in minutes',
      type: 'number',
      initialValue: 60,
      group: 'details',
      components:{
        input: DoorsOpenInput
      }
    }),
    defineField({
      name: 'venue',
      type: 'reference',
      to: [{type: 'venue'}],
      readOnly: ({value, document}) => !value && document?.eventType === 'virtual',
      validation: (rule) =>
        rule.custom((value, context) => {
          if (value && context?.document?.eventType === 'virtual') {
            return 'Only in-person events can have a venue'
          }

          return true
        }),
      group: 'details',
    }),
    defineField({
      name: 'headline',
      type: 'reference',
      to: [{type: 'artist'}],
      group: 'editorial',
    }),
    defineField({
      name: 'image',
      type: 'image',
      group: 'editorial',
    }),
    defineField({
      name: 'details',
      type: 'array',
      of: [{type: 'block'}],
      group: 'editorial',
    }),
    defineField({
      name: 'tickets',
      type: 'url',
      group: 'editorial',
    }),
    defineField({
      name: 'firstPublished',
      description: 'Automatically set when first published',
      type: 'datetime',
      readOnly: true,
      group: 'editorial',
    }),
  ],
  // Update the preview key in the schema
  preview: {
    select: {
      name: 'name',
      venue: 'venue.name',
      artist: 'headline.name',
      date: 'date',
      image: 'image',
    },
    prepare({name, venue, artist, date, image}) {
      const nameFormatted = name || 'Untitled event'
      const dateFormatted = date
        ? new Date(date).toLocaleDateString(undefined, {
            month: 'short',
            day: 'numeric',
            year: 'numeric',
            hour: 'numeric',
            minute: 'numeric',
          })
        : ''

      return {
        title: artist ? `${nameFormatted} (${artist})` : nameFormatted,
        subtitle: venue ? `${dateFormatted} @ ${venue}` : dateFormatted,
        media: image || CalendarIcon,
      }
    },
  },
})
