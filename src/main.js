// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import FastDelivery from './fastdelivery';

Vue.config.productionTip = false;

new Vue({
  el: '#app',
  data: {
    fastDelivery: new FastDelivery()
  },
  methods: {
    delivery: function(fastDelivery) {
      if (fastDelivery.isFastDelivery) {
        alert(fastDelivery.fastDeliveryUrl);
        window.location = fastDelivery.fastDeliveryUrl;
      } else {
        window.location = fastDelivery.url;
      }
    },

    changeBehavior: function() {
      this.fastDelivery.isFastDelivery = !this.fastDelivery.isFastDelivery;
      if (this.fastDelivery.isFastDelivery) {
        this.fastDelivery.url = '';
      } else {
        this.fastDelivery.url = this.fastDelivery.fastDeliveryUrl;
      }
    }
  }
});
