import {shallow} from '@vue/test-utils'

import Component from '../src/component.vue';

describe('Cleave props', () => {

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

  test('accepts options via prop', () => {
    expect(wrapper.props().options).toEqual(props.options);
    expect(wrapper.vm.cleave.properties).toHaveProperty('delimiter', props.options.delimiter);
  });

  test('accepts value via prop', () => {
    expect(wrapper.props().value).toBe(props.value);
  });

  test('accepts raw as prop', () => {
    wrapper.setProps({raw: false});
    expect(wrapper.vm.$props.raw).toBe(false);
  });

  test('validates v-model', () => {
    let vModel = wrapper.vm.$options.props.value;

    expect(vModel.validator(false)).toBe(false);
    expect(vModel.validator(undefined)).toBe(false);
    expect(vModel.validator(new Date())).toBe(false);
    expect(vModel.validator(['123', '456'])).toBe(false);

    expect(vModel.validator(null)).toBe(true);
    expect(vModel.validator('2017-12-12')).toBe(true);
    expect(vModel.validator(+new Date())).toBe(true);
    expect(vModel.validator(null)).toBe(true);

  });

});
