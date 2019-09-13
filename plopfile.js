module.exports = function(plop) {
  plop.setGenerator('component', {
    description: 'Creates a new js file as a react function component',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'Enter the name of the component',
      },
    ],
    actions: [
      {
        type: 'add',
        path: 'src/components/{{properCase name}}.js',
        templateFile: 'plop-templates/function-component.js.hbs',
      },
    ],
  })

  plop.setGenerator('article', {
    description: 'Create a new blog post',
    prompts: [
      {
        type: 'input',
        name: 'title',
        message: 'Enter a title',
      },
      {
        type: 'input',
        name: 'subtitle',
        message: 'Enter a subtitle',
      },
    ],
    actions: [
      {
        type: 'add',
        path: 'content/drafts/{{kebabCase title}}/index.mdx',
        templateFile: 'plop-templates/article.mdx.hbs',
        data: {
          date: function() {
            return new Date().toISOString()
          },
        },
      },
    ],
  })
}
