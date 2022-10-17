import component from './component.js';

const plugin = (app, params) => {
  let name = 'cleave';
  /* istanbul ignore else */
  if (typeof params === 'string') name = params;

  app.component(name, component);
};

component.install = plugin;

export default component;
