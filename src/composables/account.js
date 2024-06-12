import axios from "axios";
import { ref } from "vue";
import { useRouter } from "vue-router";

export default function useAccounts() {
  const API_BASE_URL = "http://localhost:8000";
  const accountTypes = ref([]);
  const accounts = ref([]);
  const router = useRouter();
  const accountInfo = ref();
  const accountBalance = ref();
  const tranferHistory = ref([]);
  const transferTypes = ref([]);

  const getAccountTypes = async () => {
    try {
      let response = await axios.get(
        `${API_BASE_URL}/api/protected/account-types`
      );
      accountTypes.value = response.data.data;
    } catch (error) {
      console.log(error);
    }
  };

  const getUserAccounts = async (userId) => {
    try {
      let response = await axios.get(
        `${API_BASE_URL}/api/protected/accounts/users/${userId}`
      );
      accounts.value = response.data.data;
    } catch (error) {
      console.log(error);
    }
  };

  const createAccount = async (data) => {
    try {
      let response = await axios.post(
        `${API_BASE_URL}/api/protected/accounts`,
        data
      );
      router.push({ name: "dashboard.view" });
      return response;
    } catch (error) {
      console.log(error);
    }
  };

  const getAccountInfo = async (accountId) => {
    try {
      let response = await axios.get(
        `${API_BASE_URL}/api/protected/accounts/${accountId}`
      );

      accountInfo.value = response.data.data;
    } catch (error) {}
  };

  const checkAccountBalance = async (data) => {
    try {
      let response = await axios.post(
        `${API_BASE_URL}/api/protected/account/check-balance`,
        data
      );
      accountBalance.value = response.data.data;
    } catch (error) {
      console.log(error);
    }
  };

  const checkTransferHistory = async (data) => {
    try {
      let response = await axios.post(
        `${API_BASE_URL}/api/protected/accounts/transfer/histories`,
        data
      );
      tranferHistory.value = response.data.data;
    } catch (error) {
      console.log(error);
    }
  };

  const initTransfer = async (data, accountId) => {
    try {
      let response = await axios.post(
        `${API_BASE_URL}/api/protected/accounts/transfer`,
        data
      );
      if(response.success){
         
        router.push({ name: "transactions.view", params: { id: accountId } });
      }
      return response;
    } catch (error) {}
  };

  const getTransferTypes = async () => {
    try {
      let response = await axios.get(
        `${API_BASE_URL}/api/protected/transfer-types`
      );
      transferTypes.value = response.data.data;
    } catch (error) {}
  };

  return {
    accountTypes,
    accounts,
    accountInfo,
    accountBalance,
    tranferHistory,
    transferTypes,

    getAccountTypes,
    getUserAccounts,
    createAccount,
    getAccountInfo,
    checkAccountBalance,
    checkTransferHistory,
    initTransfer,
    getTransferTypes,
  };
}
