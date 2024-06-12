<template>
  <Dashboard :user="authUser">
    <template #content>
      <div>
        <button
          @click.prevent="viewAccountBalance"
          class="rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          View Balance
        </button>
      </div>
      <div v-if="accountBalance">
        Account Balance Information

        <div>Account Number: {{ accountBalance.account_number }}</div>
        <div>Account Telephone : {{ accountBalance.telephone }}</div>
        <div>Account Type : {{ accountBalance.account_type }}</div>
        <div>Current Balance : {{ accountBalance.current_balance }}</div>
        <div>Available Balance : {{ accountBalance.available_balance }}</div>
        <div>Currency : {{ accountBalance.currency }}</div>
      </div>

      <button
        class="rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
      >
        <router-link :to="{ name: 'dashboard.view' }"> Back </router-link>
      </button>
    </template>
  </Dashboard>
</template>

<script setup>
import Dashboard from "../../components/Dashboard/Dashboard.vue";
import { onMounted } from "vue";
import useAccounts from "../../composables/account.js";
import { useRoute } from "vue-router";

const authUser = JSON.parse(localStorage.getItem("data"));

const route = useRoute();
onMounted(() => {
  getAccountInfo(route.params.id);
});

const viewAccountBalance = async () => {
  const payload = {
    account_number: accountInfo.value.account_number,
  };
  await checkAccountBalance(payload);
};

const { accountBalance, accountInfo, getAccountInfo, checkAccountBalance } =
  useAccounts();
</script>
