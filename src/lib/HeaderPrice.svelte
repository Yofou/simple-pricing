<script>
    import CheckBox from '$lib/CheckBox.svelte'
    import Slider from '$lib/Slider.svelte'
    import { price, annual } from '$lib/stores.js'
    import { onMount } from 'svelte';

    const map = {
        20: { pageviews: '10k', price: 8 },
        40: { pageviews: '50k', price: 12 },
        60: { pageviews: '100k', price: 16 },
        80: { pageviews: '500k', price: 24 },
        100: { pageviews: '1M', price: 32 },
    }
    
    const ranges = [
        { lower: 20, upper: 40 },
        { lower: 40, upper: 60 },
        { lower: 60, upper: 80 },
        { lower: 80, upper: 100},
    ]

    let derivedInput = (map[$price].price * ($annual ? 0.75 : 1)).toFixed(2)
    let key;
    $: {
        for ( let range of ranges ) {
            if ($price >= range.lower && $price <= range.upper) {
                if ( $price / ( (range.lower + range.upper) / 2 ) >= 1 ) {
                    key = range.upper
                } else {
                    key = range.lower
                }
                derivedInput = (map[key].price * ($annual ? 0.75 : 1)).toFixed(2)
                break
            }
        }
    }

    let isSmallScreen = false
    onMount(() => {
        isSmallScreen = window.innerWidth <= 640
        window.onresize = () => isSmallScreen = window.innerWidth <= 640
    })
</script>

<div class="
        grid 
        grid-cols-2
        grid-rows-4
        sm:grid-rows-3
    "
>

    <h1 class="
        place-self-center
        col-start-1
        col-end-4
        sm:col-end-2
        uppercase
        text-grey-blue
        text-sm
        font-extrabold
        tracking-widest
        transform
        sm:-translate-x-3
        translate-y-[1.5em]
    ">
        {map[key].pageviews} pageviews
    </h1>
    
    <p class="
            justify-self-center
            sm:justify-self-end
            col-start-1
            sm:col-start-2
            col-end-5
            sm:col-end-4
            row-start-3
            sm:row-start-1
            row-end-4
            sm:row-end-2
            select-none
            self-center
            text-lg
            text-grey-blue
            sm:transform 
            sm:-translate-x-1/4
            sm:translate-y-[80%]
        "
    >
        <span class="text-dark-desaturated text-[2.26em] font-bold align-middle tracking-tighter mr-1">${derivedInput}</span>
        <span class="align-baseline text-sm">/ month</span>
    </p>

    <Slider/>
    
    <div class="
            grid
            col-span-2
            row-span-3
            place-self-center 
            grid-flow-col 
            w-min 
            text-grey-blue
            gap-3
            transform
            translate-x-5
            sm:translate-x-[15%]
            sm:translate-y-[-75%]
        "
    >
        <p class="w-[11ch] select-none text-xs place-self-center">Monthly Billing</p>
        <CheckBox annual={$annual} on:click={ annual.flip }/>
        <p class="w-[11ch] select-none text-xs place-self-center">Yearly Billing</p>
        <div class="grid whitespace-nowrap overflow-hidden w-[4ch] sm:w-[9ch] place-self-center bg-red-pascel rounded-full p-1 sm:px-[0.1em] transform -translate-x-3">
            <p class="text-[0.6em] sm:text-[0.7em] text-red-100 place-self-center">
                {#if isSmallScreen}
                    -25%
                {:else}
                    25% discount
                {/if}
            </p>
        </div>
    </div>
</div>