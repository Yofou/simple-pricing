<script>
    import { price } from '$lib/stores.js'
</script>

<input 
    class="
        w-[80%]
        place-self-center
        input-theme
        row-span-1
        col-span-2
    "
    bind:value={$price} 
    type="range"
    min="20"
    max="100"
    step="20"
    style="--val: {($price / 32) * 100}%"
>

<style>
    input[type=range] { -webkit-appearance: none;}
    
    input[type=range]::-moz-range-track {
        @apply bg-light-blue-100 h-2 rounded-full;
    }

    input[type=range]::-webkit-slider-runnable-track {
        -webkit-appearance: none;
        @apply h-2 rounded-full;
        --progress-bg: rgba(164.73000000000005, 243.26999999999998, 235.416, var(--tw-bg-opacity));
        --default-bg: rgba(233.96249999999995, 238.38249999999996, 250.53750000000005, var(--tw-bg-opacity));

        background: linear-gradient(0.25turn, var(--progress-bg) var(--val), var(--default-bg) 0%);
    }

    input[type=range]::-moz-range-progress {
        @apply bg-cyan-300 h-2 rounded-full;
    }

    input[type=range]::-moz-range-thumb {
        @apply bg-cyan-600 w-[2.5em] h-[2.5em] rounded-full border-none bg-no-repeat bg-center cursor-pointer;
        filter: drop-shadow(0px 20px 10px rgba(164.73000000000005, 243.26999999999998, 235.416, var(--tw-bg-opacity)));
        background-image: url('/images/icon-slider.svg');
    }

    input[type=range]::-webkit-slider-thumb {
        -webkit-appearance: none;
        @apply bg-cyan-600 w-[2.5em] h-[2.5em] rounded-full border-none bg-no-repeat bg-center cursor-pointer;
        filter: drop-shadow(0px 20px 10px rgba(164.73000000000005, 243.26999999999998, 235.416, var(--tw-bg-opacity)));
        background-image: url('/images/icon-slider.svg');
        transform: translateY(-33%);
    }
</style>