import Plugin from '../src/index';
import {mount} from 'vue-test-utils';
// Lets import full build
import Vue from 'vue/dist/vue.common';

Vue.config.productionTip = false;

describe('Cleave global component', () => {

  // Make a copy of local vue
  let localVue = Vue.extend();
  // Define a global component
  localVue.use(Plugin);

  test('works as plugin', () => {

    let app = localVue.component('app', {
      template: `<div id="app">
                  <cleave class="form-control"  name="card" v-model="number"></cleave>
                 </div>`,
      data() {
        return {
          number: ''
        }
      }
    });

    let wrapper = mount(app, {
      localVue
    });

    let elem = wrapper.vm.$el.firstChild;
    expect(elem.tagName).toBe('INPUT');
    expect(elem.getAttribute('class')).toContain('form-control');
    expect(elem.getAttribute('name')).toBe('card');

  });

});
