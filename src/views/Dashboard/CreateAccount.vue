<template>
  <Dashboard :user="authUser">
    <template #content>
      <div class="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
        <div class="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2
            class="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900"
          >
            Create Bank Account
          </h2>
        </div>

        <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form class="space-y-1" @submit.prevent="createBankAccount">
            <div>
                <label
                  for="email"
                  class="block text-sm font-medium leading-6 text-gray-900"
                  >First Name</label
                >
                <input
                  v-model="authUser.first_name"
                  type="text"
                  required
                  disabled
                  class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            <div>
                <label
                  for="email"
                  class="block text-sm font-medium leading-6 text-gray-900"
                  >Last Name</label
                >
                <input
                  v-model="authUser.last_name"
                  type="text"
                  required
                  disabled
                  class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>

            <div>
              <label
                for="email"
                class="block text-sm font-medium leading-6 text-gray-900"
                >Email address</label
              >
              <input
                v-model="authUser.email"
                type="email"
                required
                disabled
                class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>

            <div>
              <label
                for="email"
                class="block text-sm font-medium leading-6 text-gray-900"
                >Telephone</label
              >
              <div>
                <input
                  v-model="account.telephone"
                  type="tel"
                  required
                  class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <label
                for="email"
                class="block text-sm font-medium leading-6 text-gray-900"
                >Account Type</label
              >
              <select
                v-model="account.account_type_id"
                required
                class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              >
                <option :value="type.id" v-for="(type, index) in accountTypes" :key="index">
                    {{ type.name }}
                </option>
                
              </select>
            </div>

            <div>
              <button
                type="submit"
                class="flex w-full justify-center rounded-md bg-indigo-600 px-2 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Create Account
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
import useAccounts from "../../composables/account.js";
import { ref, reactive } from "vue";
import { onMounted } from "vue";

onMounted(() => {
    getAccountTypes()
})

const authUser = JSON.parse(localStorage.getItem("data"));

const account = reactive({
    telephone:'',
    account_type_id:'',
    user_id:authUser.id
})

const {accountTypes, getAccountTypes, createAccount} = useAccounts();

const createBankAccount = async () => {
    let response = await createAccount(account);
    console.log(response);
};
</script>

<style scoped></style>
