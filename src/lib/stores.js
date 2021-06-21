import { writable } from 'svelte/store'
import { tweened } from 'svelte/motion'

function createAnnual() {
    const { subscribe, update } = writable(false)

    return {
        subscribe,
        flip: () => update(n => !n)
    }
}


export const price = tweened(60, { duration: 25 })
export const annual = createAnnual()