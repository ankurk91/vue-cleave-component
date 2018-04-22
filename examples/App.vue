<template>

  <section class="container">

    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <span class="navbar-brand mb-0">Vue-cleave Demo</span>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
              aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item">
            <a class="nav-link" href="https://www.npmjs.com/package/vue-cleave-component"
               target="_blank"> npm</a></li>
          <li class="nav-item">
            <a class="nav-link" href="https://github.com/ankurk91/vue-cleave-component"
               target="_blank"> Github</a></li>
        </ul>
      </div>
    </nav>
    <p class="mb-2"></p>
    <div class="row">
      <div class="col-md-8">

        <div class="card mb-3">
          <div class="card-body">
            <button class="btn btn-secondary btn-sm mr-3" @click.prevent="setNewCardValue">Set new card value</button>
            <button class="btn btn-secondary btn-sm" @click.prevent="setDateDelimiter">Change date delimiter</button>
          </div>
        </div>

        <form class="card card-body" method="post" action="/" @submit.prevent="submit()">

          <div class="form-group">
            <label>Enter credit card <code v-text="cardType"></code></label>
            <cleave
              name="card"
              type="tel"
              v-model="form.cardNumber"
              class="form-control"
              :options="options.creditCard"
              v-validate="{required:true}"
              @blur.native="onBlur"
              placeholder="Credit card"></cleave>
            <small class="form-text text-muted">{{form.cardNumber}}</small>
            <span v-show="errors.has('card')"
                  class="text-danger">{{ errors.first('card') }}</span>
          </div>

          <div class="form-group">
            <label>Enter phone number (US)</label>
            <cleave
              v-model="form.phoneNumber"
              class="form-control"
              :options="options.phoneNumber"></cleave>
            <small class="form-text text-muted">{{form.phoneNumber}}</small>
          </div>

          <div class="form-group">
            <label>Enter date <code>:raw="false"</code></label>
            <cleave placeholder="dd/mm/yyyy"
                    v-model="form.date"
                    class="form-control"
                    :raw="false"
                    :options="options.date"></cleave>
            <small class="form-text text-muted">{{form.date}}</small>
          </div>

          <div class="form-group">
            <label>Currency</label>
            <cleave v-model="form.number"
                    class="form-control"
                    :options="options.number"></cleave>
            <small class="form-text text-muted">{{form.number}}</small>
          </div>

          <hr>

          <div class="form-group">
            <button class="btn btn-primary" type="submit">Submit form</button>
          </div>

        </form>
      </div>

      <aside class="col-md-4">
        <div class="card">
          <div class="card-header">
            Links
          </div>
          <div class="card-body">
            <ul>
              <li><a href="https://github.com/ankurk91/vue-cleave-component" target="_blank">Github</a></li>
              <li><a href="https://www.npmjs.com/package/vue-cleave-component" target="_blank">npm</a></li>
              <li><a href="https://github.com/nosir/cleave.js" rel="noreferrer" target="_blank">Cleave.js</a></li>
              <li><a
                href="https://chrome.google.com/webstore/detail/vuejs-devtools/nhdogjmejiglipccpnnnanhbledajbpd?hl=en"
                rel="noreferrer" target="_blank">Vue.js Dev tools</a></li>
            </ul>
          </div>
        </div>
      </aside>
    </div>

  </section>
</template>

<script type="text/javascript">
  import Vue from 'vue';

  import cleave from '../src/index';
  import 'cleave.js/dist/addons/cleave-phone.us';

  export default {
    name: 'app',
    data() {
      return {
        cardType: null,
        form: {
          cardNumber: null,
          phoneNumber: null,
          date: null,
          number: null,
        },
        // https://github.com/nosir/cleave.js/blob/master/doc/options.md
        options: {
          creditCard: {
            creditCard: true,
            delimiter: '-',
            onCreditCardTypeChanged: this.onCardChange,
            onValueChanged: this.onValueChanged,
          },
          phoneNumber: {
            phone: true,
            phoneRegionCode: 'US',
            delimiter: '-',
          },
          date: {
            date: true,
            datePattern: ['d', 'm', 'Y'],
            delimiter: '/',
          },
          number: {
            prefix: '$ ',
            numeral: true,
            numeralPositiveOnly: true,
            noImmediatePrefix: true,
            rawValueTrimPrefix: true,
            numeralIntegerScale: 9,
            numeralDecimalScale: 2
          },
        },
      }
    },
    components: {
      cleave
    },
    methods: {
      submit() {
        console.log('Form submit event', this.form);
        // http://vee-validate.logaretm.com/examples.html#component-example
        this.$validator.validateAll().then(result => {
          // eslint-disable-next-line
          alert(`Form validation result: ${result}`);
        });
      },
      onCardChange(type) {
        console.log('cardType: ', type);
        this.cardType = type
      },
      onValueChanged(e) {
        console.log('onValueChanged', e);
        console.log(this.form)
      },
      onBlur(e) {
        // Who is using vuex?
        console.log('onBlur event', e)
      },
      setNewCardValue() {
        this.form.cardNumber = '4111111111111111';
      },
      setDateDelimiter() {
        this.options.date.delimiter = '-';
      }
    },
  }
</script>
