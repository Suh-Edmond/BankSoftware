<template>
    <Dashboard :user="authUser">
        <template #content>
            <div>
                <h5>Account Information</h5>
                
                <div v-if="accountInfo">
                    <div>
                    <label for="name">Name: {{ accountInfo.user_name }}</label>
                </div>
                <div>
                    <label for="name">Email: {{ accountInfo.email }}</label>
                </div>
                <div>
                    <label for="name">Telephone: {{ accountInfo.user_telephone }}</label>
                </div>
                <div>
                    <label for="name">Gender: {{ accountInfo.gender }}</label>
                </div>
                <div>
                    <label for="name">Country: {{ accountInfo.country }}</label>
                </div>
                <div>
                    <label for="name">Account Type: {{ accountInfo.account_type }}</label>
                </div>
                <div>
                    <label for="name">Account Status: {{ accountInfo.account_status }}</label>
                </div>
                <div>
                    <label for="name">Account Number: {{ accountInfo.account_number }}</label>
                </div>
                <div>
                    <label for="name">Account Telephone: {{ accountInfo.account_telephone }}</label>
                </div>
                <div>
                    <label for="name">Current Balance: {{ accountInfo.current_balance }}</label>
                </div>
                <div>
                    <label for="name">Available Balance: {{ accountInfo.available_balance }}</label>
                </div>
                <div>
                    <label for="name">Currency: {{ accountInfo.currency }}</label>
                </div>
                <div>
                    <label for="name">Creation date: {{ accountInfo.created_at }}</label>
                </div>
                <div>
                    <label for="name">Updated: {{ accountInfo.updated_at }}</label>
                </div>
                </div>
            </div>
        </template>
    </Dashboard>
</template>

<script setup>
 import Dashboard from '../../components/Dashboard/Dashboard.vue'
 import {onMounted} from 'vue';
 import useAccounts from '../../composables/account.js';
 import {useRoute} from "vue-router";

 const route = useRoute();

 const authUser = JSON.parse(localStorage.getItem("data"));

 const {accountInfo, getAccountInfo} = useAccounts();

 onMounted(() => {
    getAccountInfo(route.params.id)
 })
</script>

<script scoped>
</script>