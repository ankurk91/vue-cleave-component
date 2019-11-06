<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar navbar-dark bg-dark shadow-sm mb-3">
      <span class="navbar-brand mb-0">Vue Cleave.js demo</span>
      <ul class="navbar-nav ml-auto">
        <li class="nav-item">
          <a class="nav-link" href="https://github.com/ankurk91/vue-cleave-component"
             target="_blank"> GitHub</a></li>
      </ul>
    </nav>

    <main class="container">
      <div class="row">
        <div class="col-md-8 mb-3">

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
                placeholder="Credit card"></cleave>
              <small class="form-text text-muted">{{form.cardNumber}}</small>
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

        <aside class="col-md-4 mb-3">
          <div class="card">
            <div class="card-header">
              Links
            </div>
            <div class="card-body">
              <ul>
                <li><a href="https://github.com/ankurk91/vue-cleave-component" target="_blank">Github</a></li>
                <li><a href="https://www.npmjs.com/package/vue-cleave-component" target="_blank">npm</a></li>
                <li><a href="https://github.com/nosir/cleave.js" rel="noreferrer" target="_blank">Cleave.js</a></li>
              </ul>
            </div>
          </div>
        </aside>
      </div>

    </main>
    <footer class="text-center text-muted small mb-3">
      Created by <a href="https://twitter.com/ankurk91" target="_blank" rel="noopener">@ankurk91</a>
    </footer>
  </div>
</template>

<script>
  import Vue from 'vue';

  import Cleave from '../src/index.js';
  import 'cleave.js/dist/addons/cleave-phone.us.js';

  export default {
    name: 'app',
    data() {
      return {
        cardType: null,
        form: {
          cardNumber: null,
          phoneNumber: null,
          date: null,
          number: 1234567,
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
      Cleave
    },
    methods: {
      submit() {
        console.log('Form submit event', this.form);
      },
      onCardChange(type) {
        console.log('cardType: ', type);
        this.cardType = type
      },
      onValueChanged(e) {
        console.log('onValueChanged', e);
        console.log(this.form)
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
