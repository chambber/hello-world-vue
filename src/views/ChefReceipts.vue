<template>
  <div class="about">
    <h1>Chef {{ fullAddress }} Receipts</h1>
    <AppButton @click="handleClick" :disabled="true"> Click me </AppButton>
    <button>Teste</button>
    <router-view />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

import AppButton from "@/components/AppButton.vue";

interface Address {
  name: string;
  number: number;
}

@Component({
  components: {
    AppButton,
  },
})
export default class ChefReceipts extends Vue {
  address: Address = {
    name: "Rua Nhô Musa",
    number: 236,
  };

  get fullAddress() {
    return `${this.address.name}, ${this.address.number}`;
  }

  handleClick() {
    this.address.number++;
  }
}
</script>

<style></style>
