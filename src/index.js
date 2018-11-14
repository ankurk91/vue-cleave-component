import component from './component.js';

const plugin = (Vue, params) => {
  let name = 'cleave';
  /* istanbul ignore else */
  if (typeof params === 'string') name = params;

  Vue.component(name, component);
};

component.install = plugin;

export default component;
export {component, plugin};
