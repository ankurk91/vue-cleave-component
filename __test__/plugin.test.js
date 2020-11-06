import Component from '../src/index';
import {mount} from '@vue/test-utils';

describe('Cleave global component', () => {

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
      global: {
        components: {
          cleaveInput: Component
        }
      }
    });

    expect(wrapper.findComponent(Component)).toBeTruthy();

    let input = wrapper.getComponent(Component);
    expect(input.find('input')).toBeTruthy();
    expect(input.classes()).toContain('form-control');
    expect(input.attributes('name')).toBe('card');

  });

});
