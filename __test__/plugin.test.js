import Plugin from '../src/index';
// Lets import full build
import Vue from 'vue/dist/vue.common';

Vue.config.productionTip = false;

describe('Cleave global component', () => {

  // Make a copy of local vue
  let localVue = Vue.extend();
  // Define a global component
  localVue.use(Plugin);

  test('works as plugin', () => {

    let app = localVue.extend({
      template: `<div id="app">
                  <cleave class="form-control"  name="card" :value="number"></cleave>
                 </div>`,
      data() {
        return {
          number: ''
        }
      }
    });

    let wrapper = new app().$mount();

    let elem = wrapper.$el.firstChild;
    expect(elem.tagName).toBe('INPUT');
    expect(elem.getAttribute('class')).toContain('form-control');
    expect(elem.getAttribute('name')).toBe('card');

  });

});
