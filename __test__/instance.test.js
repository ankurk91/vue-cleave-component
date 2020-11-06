import {mount} from '@vue/test-utils'

import Component from '../src/component.js';

describe('Cleave component instance', () => {

  let wrapper;

  beforeEach(() => {
    wrapper = mount(Component, {
      propsData: {
        modelValue: null,
        options: {
          creditCard: true
        }
      }
    });
  });

  test('renders input field', () => {
    expect(wrapper.find('input').exists()).toBe(true);
  });


  test('clean up on destroy', () => {
    wrapper.unmount();
    expect(wrapper.vm.$data.cleave).toBe(null);
  });

});
