import Cleave from 'cleave.js'
import {defineComponent, h} from 'vue';

export default defineComponent({
  name: 'cleave',
  compatConfig: {
    MODE: 3
  },
  render() {
    return h('input', {
      type: 'text',
      value: this.cleave ? this.cleave.properties.result : this.modelValue,// Cleave.js will set this as initial value
      onBlur: this.onBlur,
    })
  },
  props: {
    modelValue: {
      default: null,
      required: true,
      validator(value) {
        return value === null || typeof value === 'string' || value instanceof String || typeof value === 'number'
      }
    },
    // https://github.com/nosir/cleave.js/blob/master/doc/options.md
    options: {
      type: Object,
      default: () => ({})
    },
    // Set this prop as `false` to emit masked value
    raw: {
      type: Boolean,
      default: true
    },
  },
  emits: ['blur', 'update:modelValue'],
  data() {
    return {
      // cleave.js instance
      cleave: null,
      // callback backup
      onValueChangedFn: null,
    }
  },
  mounted() {
    /* istanbul ignore if */
    if (this.cleave) return;

    this.cleave = new Cleave(this.$el, this.getOptions(this.options));
  },
  methods: {
    /**
     * Inject our method in config options
     */
    getOptions(options) {
      // Preserve original callback
      this.onValueChangedFn = options.onValueChanged;

      return Object.assign({}, options, {
        onValueChanged: this.onValueChanged
      });
    },
    /**
     * Watch for value changed by cleave and notify parent component
     */
    onValueChanged(event) {
      let value = this.raw ? event.target.rawValue : event.target.value;
      this.$emit('update:modelValue', value);

      // Call original callback method
      if (typeof this.onValueChangedFn === 'function') {
        this.onValueChangedFn.call(this, event)
      }
    },
    onBlur() {
      this.$emit('blur', this.modelValue)
    }
  },
  watch: {
    /**
     * Watch for any changes in options and redraw
     */
    options: {
      deep: true,
      handler(newOptions) {
        this.cleave.destroy();
        this.cleave = new Cleave(this.$el, this.getOptions(newOptions));
        this.cleave.setRawValue(this.modelValue)
      }
    },

    /**
     * Watch for changes from parent component and notify cleave instance
     */
    modelValue(newValue) {
      /* istanbul ignore if */
      if (!this.cleave) return;

      // when v-model is not masked (raw)
      if (this.raw && newValue === this.cleave.getRawValue()) return;
      //  when v-model is masked (NOT raw)
      if (!this.raw && newValue === this.$el.value) return;
      // Lastly set newValue
      this.cleave.setRawValue(newValue);
    }
  },
  beforeUnmount() {
    /* istanbul ignore if */
    if (!this.cleave) return;

    this.cleave.destroy();
    this.cleave = null;
    this.onValueChangedFn = null;
  },
})
