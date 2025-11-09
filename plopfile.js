const pathRegex = /^\/?(?<folder>(?:[a-z0-9-]+\/)*)(?<name>[a-zA-Z0-9]+)$/;

function setPlopGenerator(plop, componentType) {
  plop.setGenerator(componentType, {
    description: `Creates a new ${componentType} with an empty component and stylesheet`,
    prompts: [
      {
        type: 'input',
        name: 'path',
        message: `Enter path relative to src/${componentType}s (e.g. path/to-my/component)`,
      }
    ],
    actions: function (data) {
      const result = pathRegex.exec(data.path);
      if (!result) {
        throw new Error('The path is invalid');
      }

      const { folder, name } = result.groups;
      delete data.path;
      data.folder = componentType === 'component'
        ? `ui/${folder}`
        : `${componentType}s/${folder}`;
      data.name = name;

      return [
        {
          type: 'add',
          path: 'src/components/{{folder}}/{{name}}/{{pascalCase name}}.tsx',
          templateFile: 'plop/component/component.tsx.hbs',
        },
        {
          type: 'add',
          path: 'src/components/{{folder}}/{{name}}/types.ts',
          templateFile: 'plop/component/types.ts.hbs',
        },
        {
          type: 'add',
          path: 'src/components/{{folder}}/{{name}}/index.ts',
          templateFile: 'plop/component/index.ts.hbs',
        },
      ];
    },
  });
}

export default function (plop) {
  setPlopGenerator(plop, 'component');
  setPlopGenerator(plop, 'page');
};
