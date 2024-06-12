<template>
  <Dashboard :user="authUser">
    <template #content>
      <div v-if="onShowTransferHistory">
        <div class="flex justify-between p-5">
          <button
            @click.prevent="viewTransactionHistory"
            class="rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            View Transactions Histories
          </button>
          <button
            class="rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            <router-link :to="{ name: 'dashboard.view' }"> Back </router-link>
          </button>
          <button
            @click.prevent="showInitTransfer"
            class="rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Initial Transaction
          </button>
        </div>
        <div>
          <table>
            <tr class="p-10 space-x-4 border-2 border-indigo-600">
              <th class="border-2 border-indigo-600 p-10 m-10">SN</th>
              <th class="border-2 border-indigo-600 p-10">Transaction Code</th>
              <th class="border-2 border-indigo-600 p-10">Transaction Date</th>
              <th class="border-2 border-indigo-600 p-10">Amount Deposited</th>
              <th class="border-2 border-indigo-600 p-10">Motive</th>
              <th class="border-2 border-indigo-600 p-10">
                Account Number From
              </th>
              <th class="border-2 border-indigo-600 p-10">Account Number To</th>
              <th class="border-2 border-indigo-600 p-10">Transaction type</th>
              <th class="border-2 border-indigo-600 p-10">Status</th>
            </tr>
            <tr
              class="p-4 space-x-4 border-2 border-indigo-600"
              v-for="(transaction, index) in tranferHistory"
            >
              <td>{{ index + 1 }}</td>
              <td class="border-2 border-indigo-600">
                {{ transaction.transaction_code }}
              </td>
              <td class="border-2 border-indigo-600">
                {{ transaction.transaction_date }}
              </td>
              <td class="border-2 border-indigo-600">
                {{ transaction.amount_deposited }}
              </td>
              <td class="border-2 border-indigo-600">
                {{ transaction.motive }}
              </td>
              <td class="border-2 border-indigo-600">
                {{ transaction.account_number_from }}
              </td>
              <td class="border-2 border-indigo-600">
                {{ transaction.account_number_to }}
              </td>
              <td class="border-2 border-indigo-600">
                {{ transaction.transaction_type }}
              </td>
              <td class="border-2 border-indigo-600">
                {{ transaction.status }}
              </td>
            </tr>
          </table>
        </div>
      </div>

      <div
        class="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8"
        v-if="!onShowTransferHistory"
      >
        <div class="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2
            class="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900"
          >
            Initiate Bank Transfer
          </h2>
        </div>

        <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form class="space-y-1" @submit.prevent="initBankTransfer">
            <div>
              <label
                for="email"
                class="block text-sm font-medium leading-6 text-gray-900"
                >Account Number From</label
              >
              <input
                v-model="initiateTransferPayload.account_number_from"
                type="text"
                required
                class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
            <div>
              <label
                for="email"
                class="block text-sm font-medium leading-6 text-gray-900"
                >Account Number To</label
              >
              <input
                v-model="initiateTransferPayload.account_number_to"
                type="text"
                required
                class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>

            <div>
              <label
                for="email"
                class="block text-sm font-medium leading-6 text-gray-900"
                >Amount</label
              >
              <input
                v-model="initiateTransferPayload.amount_deposited"
                type="number"
                required
                class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>

            <div>
              <label
                for="email"
                class="block text-sm font-medium leading-6 text-gray-900"
                >Transaction date</label
              >
              <div>
                <input
                  v-model="initiateTransferPayload.transaction_date"
                  type="date"
                  required
                  class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <label
                for="email"
                class="block text-sm font-medium leading-6 text-gray-900"
                >Transaction Type</label
              >
              <select
                v-model="initiateTransferPayload.transfer_type_id"
                required
                class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              >
                <option
                  :value="type.id"
                  v-for="(type, index) in transferTypes"
                  :key="index"
                >
                  {{ type.name }}
                </option>
              </select>
            </div>

            <div>
              <label
                for="motive"
                class="block text-sm font-medium leading-6 text-gray-900"
                >Motive</label
              >
              <div>
                <textarea
                  v-model="initiateTransferPayload.motive"
                  rows="3"
                  required
                  class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                ></textarea>
              </div>
            </div>

            <div>
              <button
                type="submit"
                class="flex w-full justify-center rounded-md bg-indigo-600 px-2 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Comfirm Bank Transfer
              </button>
            </div>
          </form>
        </div>
      </div>
    </template>
  </Dashboard>
</template>

<script setup>
import Dashboard from "../../components/Dashboard/Dashboard.vue";
import { onMounted } from "vue";
import useAccounts from "../../composables/account.js";
import { useRoute } from "vue-router";
import { ref, reactive } from "vue";
const route = useRoute();
const authUser = JSON.parse(localStorage.getItem("data"));

const onShowTransferHistory = ref(true);

onMounted(async () => {
  await getAccountInfo(route.params.id);
  const payload = {
    account_number: accountInfo.value.account_number,
  };
  await checkTransferHistory(payload);
});

const initiateTransferPayload = reactive({
  account_number_to: "",
  account_number_from: "",
  amount_deposited: 0,
  transaction_date: new Date(),
  motive: " ",
  transfer_type_id: "",
});
const {
  tranferHistory,
  accountInfo,
  transferTypes,

  checkTransferHistory,
  getAccountInfo,
  initTransfer,
  getTransferTypes,
} = useAccounts();

const showInitTransfer = async () => {
  getTransferTypes();
  return (onShowTransferHistory.value = false);
};

const viewTransactionHistory = async () => {
  let payload = {
    account_number: accountInfo.value.account_number,
  };
  await checkTransferHistory(payload);
};

const initBankTransfer = async () => {
  await initTransfer(initiateTransferPayload, accountInfo.id);

  let payload = {
    account_number: accountInfo.value.account_number,
  };
  await checkTransferHistory(payload);
  return (onShowTransferHistory.value = true);
};
</script>
