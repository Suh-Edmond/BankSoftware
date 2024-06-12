<template>
  <Dashboard :user="authUser">
    <template #content>
      <div class="p-3 justify-center">
        <div class="flex justify-between">
          <label for="account_type"> User Accounts</label>
          <label for="account_type">
            <RouterLink :to="{ name: 'create_account.view' }"
              >Create Bank Account</RouterLink
            >
          </label>
        </div>

        <div class="">
          <table class="p-5">
            <tr>
              <th>SN</th>
              <th>Account Name</th>
              <th>Account Email</th>
              <th>Account Telephone</th>
              <th>Account Type</th>
              <th>Account Status</th>
              <th>Available Balance</th>
              <th>Current Balance</th>
              <th>Account Number</th>
            </tr>
            <tr v-for="(account, index) in accounts" :key="index">
              <td>{{ index + 1 }}</td>
              <td>{{ account.user_name }}</td>
              <td>{{ account.email }}</td>
              <td>{{ account.user_telephone }}</td>
              <td>{{ account.account_type }}</td>
              <td>{{ account.account_status }}</td>
              <td>{{ account.available_balance }}</td>
              <td>{{ account.current_balance }}</td>
              <td>{{ account.account_number }}</td>
              <td>
                <button
                  class="rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  <router-link
                    :to="{
                      name: 'account_detail.view',
                      params: { id: account.id },
                    }"
                    >View</router-link
                  >
                </button>
              </td>
              <td>
                <button
                  class="rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  <router-link
                    :to="{
                      name: 'account_balance.view',
                      params: { id: account.id },
                    }"
                    >Account Balance</router-link
                  >
                </button>
              </td>

              <td>
                <button
                  class="rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  <router-link
                    :to="{
                      name: 'transactions.view',
                      params: { id: account.id },
                    }"
                    >View Transactions</router-link
                  >
                </button>
              </td>
            </tr>
          </table>
        </div>
      </div>
    </template>
  </Dashboard>
</template>

<script setup>
import Dashboard from "../../components/Dashboard/Dashboard.vue";
import useAccounts from "../../composables/account.js";
import { ref } from "vue";
import { onMounted } from "vue";

onMounted(() => {
  getAccountTypes(), getUserAccounts(authUser.id);
});

const authUser = JSON.parse(localStorage.getItem("data"));

const { accountTypes, accounts, getAccountTypes, getUserAccounts } =
  useAccounts();
</script>
