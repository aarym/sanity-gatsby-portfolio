export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
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
                  buildHookId: '5d85e3a0c3a00b74d95033fd',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-5d6rgohd',
                  apiId: 'b30fc43a-77bb-402e-a3af-b46c345dea78'
                },
                {
                  buildHookId: '5d85e3a0b3c17d800b492f57',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-hfx23hop',
                  apiId: '66b4c53f-2866-4aa4-8226-d00ebe304454'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/aarym/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-hfx23hop.netlify.com',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['project']},
      layout: {width: 'medium'}
    }
  ]
}
