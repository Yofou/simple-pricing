import { writable } from 'svelte/store'

function createAnnual() {
    const { subscribe, update } = writable(false)

    return {
        subscribe,
        flip: () => update(n => !n)
    }
}

export const price = writable(16)
export const annual = createAnnual()