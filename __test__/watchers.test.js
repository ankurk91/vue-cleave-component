import {mount} from '@vue/test-utils'

import Component from '../src/component.js';


describe('Cleave watchers', () => {

  // Store for future usage
  const props = {
    value: '4' + '1'.repeat(15),
    options: {
      cardNumber: true,
      delimiter: '-',
    }
  };

  let wrapper;

  beforeEach(() => {
    wrapper = mount(Component, {
      propsData: props
    });
  });

  afterEach(() => {
    wrapper.destroy();
  });

  test('updates options runtime', () => {
    wrapper.setProps({options: {delimiter: '_',}});
    expect(wrapper.vm.cleave.properties).toHaveProperty('delimiter', '_');
  });

  test('emits input event', () => {
    wrapper.setProps({value: '2019-10-04'});
    wrapper.trigger('input');

    expect(wrapper.emitted('input')).toBeTruthy();
  });

  test('emits blur event', () => {
    wrapper.setProps({value: '2019-10-04'});
    wrapper.trigger('blur');

    expect(wrapper.emitted().blur).toBeTruthy()
  });


});
