import { writable } from "svelte/store";

export const app = writable({
    active_page: 'home',
    active_user: 1,
    users_current_page: 0,
    users_has_more: 0
});
