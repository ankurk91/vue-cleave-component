import {shallow} from 'vue-test-utils'

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
      attachToDocument: true,
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
    wrapper.trigger('input');

    wrapper.vm.$nextTick(() => {
      expect(wrapper.emitted().input.length).toEqual(1);
      expect(wrapper.emitted().input[0]).toEqual(['012346789']);
      done();
    });
  });


});