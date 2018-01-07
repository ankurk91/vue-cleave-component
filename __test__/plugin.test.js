import Component from '../src/index';
import {mount, createLocalVue} from 'vue-test-utils';

describe('Cleave global component', () => {

  // Make a copy of local vue
  let localVue = createLocalVue();
  // Define a global component
  localVue.use(Component, 'cleave-input');

  test('works as plugin', () => {

    let app = {
      template: `<div id="app">
                  <cleave-input class="form-control"  name="card" v-model="number"></cleave-input>
                 </div>`,
      data() {
        return {
          number: ''
        }
      }
    };

    let wrapper = mount(app, {
      localVue
    });

    expect(wrapper.contains(Component)).toBe(true);

    let input = wrapper.find(Component);
    expect(input.is('input')).toBe(true);
    expect(input.classes()).toContain('form-control');
    expect(input.attributes().name).toBe('card');

  });

});
