export default {
  name: 'Bild',
  type: 'document',
  title: 'Bild',
  fields: [
    {
      title: 'Titel des Bildes',
      name: 'titel_Bild',
      type: 'string',
    },
    {
      name: 'technik',
      title: 'Maltechnik',
      type: 'string',
      description: 'z.B. Acryl auf Leinwand',
    },
    {
      title: 'Maße des Bildes',
      name: 'dimensions',
      type: 'string',
      description: 'z.B. 150cm x 200cm',
    },
    {
      title: 'Jahr der Erstellung',
      name: 'year',
      type: 'string',
      description: 'z.B. 2007',
    },
    {
      title: 'Preis für Original',
      name: 'price',
      type: 'number',
      description: 'z.B. 5999',
    },
    {
      title: 'Verkauft',
      name: 'sold',
      type: 'boolean',
    },
    {
      title: 'Drucke Infos',
      name: 'druckeInfos',
      type: 'document',
      fields: [
        {
          title: 'Druck Original Format Preis',
          name: 'titel',
          type: 'number',
          description: 'z.B. 599',
        },
        {
          name: 'druck1',
          type: 'string',
          title: 'Druck Format 1',
          description: 'z.B. 150cm x 120cm',
        },
        {
          name: 'druck1Preis',
          type: 'number',
          title: 'Druck Format 1 Preis',
          description: 'z.B. 599',
        },
        {
          name: 'druck2',
          type: 'string',
          title: 'Druck Format 2',
          description: 'z.B. 150cm x 120cm',
        },
        {
          name: 'druck2Preis',
          type: 'number',
          title: 'Druck Format 2 Preis',
          description: 'z.B. 599',
        },
      ],
    },
    {
      title: 'Befindet sich in...',
      name: 'location',
      type: 'string',
      description: 'z.B. Galerie Bubu in Wien',
    },
    {
      title: 'Beschreibung des Bildes',
      name: 'description',
      type: 'string',
      description: 'optionaler Beschreibungstext des Bildes',
    },
    {
      title: 'Upload Bild',
      name: 'image',
      type: 'image',
      description: 'Upload Bild',
      options: {
        hotspot: true,
      },
    },
    {
      title: 'Upload Bild gross',
      name: 'image_big',
      type: 'image',
      description: 'Upload Bild',
      options: {
        hotspot: true,
      },
    },
    {
      title: 'Aspect Ratio',
      name: 'aspect_ratio',
      type: 'string',
      options: {
        list: [
          {title: '3/2', value: '3 / 2', description: '1200*800'},
          {title: '2/3', value: '2 / 3', description: '1280*1920'},
          {title: '4/5', value: '4 / 5', description: '960*800'},
          {title: '5/4', value: '5 / 4', description: '1200*960'},
          {title: '6/5', value: '6 / 5', description: '1200*1000'},
          {title: '5/6', value: '5 / 6', description: '1000*1200'},
          {title: '5/7', value: '5 / 7', description: '1000*1200'},
          {title: '1/1', value: '1 / 1', description: '1200*1200'},
          {title: '7/10', value: '7 / 10', description: '840*1200'},
          {title: '4/3', value: '4 / 3', description: '1200*900'},
          {title: '3/4', value: '3 / 4', description: '1200*900'},
          {title: '5/12', value: '5 / 12', description: '1200*900'},
          {title: '999/12', value: '5 / 12', description: '1200*900'},
        ], // <-- predefined values
        layout: 'radio', // <-- defaults to 'dropdown'
      },
    },
    // Add the sortOrder field to allow sorting of the documents
    {
      name: 'sortOrder',
      title: 'Sort Order',
      type: 'number',
      description: 'Use this to manually order the images',
    },
  ],
  initialValue: {
    sold: false,
  },
}
