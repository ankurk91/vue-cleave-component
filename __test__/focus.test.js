import {mount, createLocalVue} from '@vue/test-utils'

import Component from '../src/component.js';

describe('Cleave allow focus', () => {

  let localVue = createLocalVue();
  let app = {
    template: `<div id="app">
                  <cleave :options="options" v-model="model" ref="cleave"></cleave>
                 </div>`,
    data() {
      return {
        model: '12122012',
        options: {
          date: true,
        }
      }
    },
    components: {
      cleave: Component
    }
  };

  let wrapper = null;


  beforeEach(() => {
    wrapper = mount(app, {
      localVue
    })
  });

  afterEach(() => {
    wrapper.destroy();
    wrapper = null;
  });

  test('focus to be a function', () => {
    wrapper.setData({
      model: '10102010'
    });
    expect(wrapper.vm.$refs.cleave.focus).toBeInstanceOf(Function);
  });

  test('focus to not throw error', () => {
    wrapper.setData({
      model: '10102010'
    });
    expect(() => wrapper.vm.$refs.cleave.focus()).not.toThrow();
  });

});
