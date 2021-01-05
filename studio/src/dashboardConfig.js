export default {
  widgets: [
    { name: 'structure-menu' },
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
                  buildHookId: '5ff44bc12b42ef01a6edf78f',
                  title: 'Sanity Studio',
                  name: 'dynamic-code-studio',
                  apiId: 'f4e751be-8d39-4501-9fb8-525b1d556d17'
                },
                {
                  buildHookId: '5ff44bc1465fb0eec84b8724',
                  title: 'Blog Website',
                  name: 'dynamic-code',
                  apiId: '1334ade1-6e36-4983-ab26-a89d410f05d9'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/iketown/dynamic-code',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://dynamic-code.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
