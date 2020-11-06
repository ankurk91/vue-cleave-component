import {mount} from '@vue/test-utils'

import Component from '../src/component.js';

describe('Cleave configs', () => {

  let onValueChangedStub = jest.fn();

  let app = {
    template: `
      <div id="app">
      <cleave :options="options" :raw="raw" v-model="model"></cleave>
      </div>`,
    data() {
      return {
        model: '12122012',
        raw: true,
        options: {
          date: true,
          onValueChanged: onValueChangedStub
        },
      }
    },
    components: {
      cleave: Component
    }
  };

  let wrapper = null;

  beforeEach(() => {
    wrapper = mount(app, {})
  });

  afterEach(() => {
    wrapper.unmount();
    wrapper = null;
    jest.resetAllMocks();
  });

  test('calls original onValueChanged method on v-model change', async () => {
    wrapper.setData({
      raw: false,
      model: '11/11/2011'
    });
    await wrapper.vm.$nextTick();

    expect(onValueChangedStub).toHaveBeenCalled();
  });


});
