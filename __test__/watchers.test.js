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


  test('emits input event', (done) => {
    wrapper.vm.$el.value = '012346789';
    let stub = jest.fn();
    wrapper.vm.$on('input', stub);
    wrapper.trigger('input');

    wrapper.vm.$nextTick(() => {
      expect(stub).toHaveBeenCalled();
      expect(wrapper.emitted('input').length).toEqual(1);
      done();
    });
  });


});
