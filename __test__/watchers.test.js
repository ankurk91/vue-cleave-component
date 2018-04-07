import {shallow} from '@vue/test-utils'

import Component from '../src/component.vue';


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
    wrapper = shallow(Component, {
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
    wrapper.vm.$emit('input', 123456);

    expect(wrapper.emitted('input')).toBeTruthy();
  });


});
