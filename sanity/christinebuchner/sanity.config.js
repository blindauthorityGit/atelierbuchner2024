import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'
import {orderableDocumentListDeskItem} from '@sanity/orderable-document-list'

export default defineConfig({
  name: 'default',
  title: 'ChristineBuchner',

  projectId: 'pl2mto6o',
  dataset: 'production',

  plugins: [
    deskTool({
      structure: (S, context) => {
        return S.list()
          .title('Content')
          .items([
            // Minimum configuration for the orderable list
            orderableDocumentListDeskItem({type: 'Bild', S, context}),

            // You can add other desk items like vision here
            S.documentTypeListItem('Bild').title('Images'),
          ])
      },
    }),
    visionTool(),
  ],

  schema: {
    types: schemaTypes,
  },
})
