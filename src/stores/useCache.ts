import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useCache = defineStore('cache', () => {
    const token = ref<string>('');

    return {
        token,
    };
}, {
    persist: true,
});