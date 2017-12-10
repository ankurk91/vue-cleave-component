import component from './component.vue';

const plugin = (Vue, params) => {
  let name = 'cleave';
  /* istanbul ignore else */
  if (typeof params === 'string') name = params;

  Vue.component(name, component);
};

component.install = plugin;

export default component;
export {component, plugin};
