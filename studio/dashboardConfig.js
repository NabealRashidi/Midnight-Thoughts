export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gridsome-blog'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '623015233b575e37a8e5f9c1',
                  title: 'Sanity Studio',
                  name: 'midnight-thoughts-studio',
                  apiId: '6339a330-1f76-44db-b881-a05d3444dace'
                },
                {
                  buildHookId: '6230152309de32313886c520',
                  title: 'Blog Website',
                  name: 'midnight-thoughts',
                  apiId: '896aa410-a3b5-4ac4-9dd8-2915f0d2318a'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/NabealRashidi/Midnight-Thoughts',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://midnight-thoughts.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
