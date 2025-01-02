export const card = {
    title: 'Card',
    name: 'card',
    type: 'object',
    fields: [
        //ek bar
        {title: 'Card Section Heading', name: 'cardsectionheading', type: 'string'},
        
        //bar bar
        {
            title: 'CardSection',
            name: 'cardsection',
            type: 'array',
            of: [
              {
                type: 'object',
                fields: [
                    {title: 'Heading', name: 'heading', type: 'string'},
                    {title: 'Sub Heading', name: 'subHeading', type: 'string'},                    
                    {title: 'Date', name: 'date', type: 'string'},
                    {title: 'Time', name: 'time', type: 'string'},
                    {title: 'ID', name: 'id', type: 'number'},
                    {title: 'CadImage', name: 'cardImage', type: 'image'},
                    {title: 'Description', name: 'description', type: 'array', of: [{type: 'block'}]},
                 ]
              }
            ]
        },           
    ]
}