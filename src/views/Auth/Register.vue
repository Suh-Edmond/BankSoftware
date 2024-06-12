<template>
  <MainAuth>
    <template #content>
      <div class="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
        <div class="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2
            class="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900"
          >
            Sign in to your account
          </h2>
        </div>

        <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form class="space-y-1" @submit.prevent="createAccount">
            <div class="flex justify-between space-x-2">
              <div>
                <label
                  for="email"
                  class="block text-sm font-medium leading-6 text-gray-900"
                  >First Name</label
                >
                <input
                  v-model="user.first_name"
                  type="text"
                  required
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
                  v-model="user.last_name"
                  type="text"
                  required
                  class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div class="flex justify-between space-x-2">
              <div>
                <label
                  for="email"
                  class="block text-sm font-medium leading-6 text-gray-900"
                  >Email address</label
                >
                <input
                  v-model="user.email"
                  type="email"
                  required
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
                    v-model="user.telephone"
                    type="tel"
                    required
                    class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
            </div>

            <div class="flex justify-between space-x-2">
              <div>
                <label
                  for="country"
                  class="block text-sm font-medium leading-6 text-gray-900"
                  >Country</label
                >
                <input
                  v-model="user.country"
                  type="text"
                  required
                  class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>

              <div>
                <label
                  for="location"
                  class="block text-sm font-medium leading-6 text-gray-900"
                  >Location</label
                >
                <input
                  v-model="user.location"
                  type="text"
                  required
                  class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div class="flex justify-between space-x-2">
              <div>
                <label
                  for="box_number"
                  class="block text-sm font-medium leading-6 text-gray-900"
                  >Box Number</label
                >
                <input
                  v-model="user.box_number"
                  type="text"
                  required
                  class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
              <div>
                <label
                  for="email"
                  class="block text-sm font-medium leading-6 text-gray-900"
                  >Gender</label
                >
                <select
                  v-model="user.gender"
                  required
                  class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                >
                  <option value="MALE">Male</option>
                  <option value="FEMALE">Female</option>
                </select>
              </div>
            </div>

            <div class="flex justify-between space-x-2">
              <div>
                <label
                  for="pob"
                  class="block text-sm font-medium leading-6 text-gray-900"
                  >Place of Birth</label
                >
                <input
                  v-model="user.pob"
                  type="text"
                  required
                  class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
              <div>
                <label
                  for="email"
                  class="block text-sm font-medium leading-6 text-gray-900"
                  >Date of Birth</label
                >
                <input
                  v-model="user.dob"
                  type="date"
                  required
                  class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div class="flex justify-between space-x-2">
              <div>
                <label
                  for="email"
                  class="block text-sm font-medium leading-6 text-gray-900"
                  >Password</label
                >
                <input
                  v-model="user.password"
                  type="password"
                  required
                  class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
              <div>
                <label
                  for="email"
                  class="block text-sm font-medium leading-6 text-gray-900"
                  >Confirm Password</label
                >
                <input
                  v-model="user.password_confirmation"
                  type="password"
                  required
                  class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                class="flex w-full justify-center rounded-md bg-indigo-600 px-2 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Register
              </button>
            </div>
          </form>
        </div>
      </div>
    </template>
  </MainAuth>
</template>

<script setup>
import useAuthentication from "../../composables/authentication";
import { reactive } from "vue";
import MainAuth from "../../components/Auth/MainAuth.vue";

const user = reactive({
  first_name: "",
  last_name: "",
  email: "",
  telephone: "",
  country: "",
  location: "",
  box_number: 0,
  gender: "",
  password: "",
  pob: "",
  password_confirmation: "",
  dob: "",
});

const { registerUser } = useAuthentication();

const createAccount = async () => {
  await registerUser(user).then((response) => {
    console.log(response);
  });
};
</script>
