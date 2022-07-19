import {writable} from "svelte/store";
import {browser} from "$app/env";

export const token = writable({
    token: ""
})

token.subscribe((value) => browser && localStorage.setItem("token", value.token))
