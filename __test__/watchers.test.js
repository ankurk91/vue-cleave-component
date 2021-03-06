import {mount} from '@vue/test-utils'

import Component from '../src/component.js';


describe('Cleave watchers', () => {

  // Store for future usage
  const props = {
    modelValue: '4' + '1'.repeat(15),
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
    wrapper.unmount();
  });

  test('updates options runtime', async () => {
    wrapper.setProps({options: {delimiter: '_',}});
    await wrapper.vm.$nextTick();

    expect(wrapper.vm.cleave.properties).toHaveProperty('delimiter', '_');
  });

  test('emits input event', async () => {
    wrapper.setProps({modelValue: '2019-10-04'});
    wrapper.trigger('update:modelValue');
    await wrapper.vm.$nextTick();

    expect(wrapper.emitted('update:modelValue')).toBeTruthy();
  });

  test('emits blur event', async () => {
    wrapper.setProps({value: '2019-10-04'});
    wrapper.trigger('blur');
    await wrapper.vm.$nextTick();

    expect(wrapper.emitted().blur).toBeTruthy()
  });


});
