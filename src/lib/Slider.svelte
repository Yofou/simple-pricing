<script>
    import { price } from '$lib/stores.js'
    let temp = $price

    const onChange = () => {
        const fraction = temp / $price        
        if (fraction <= 1.12 && fraction >= 0.84 ) {
            if ( fraction >= 1 ) {
                $price -= 20 - (temp - $price)
            } else {
                $price += 20 - ($price - temp)
            }
        } else {
            const multiples = [20, 40, 60, 80, 100]
            const difference = multiples
                .map( value => ({ diff: Math.abs(value - $price), value }) )
                .reduce( (acc, curr) => acc.diff < curr.diff ? acc : curr )

            $price = difference.value
        }

        temp = $price
    }
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
    on:change={onChange}
    type="range"
    min="20"
    max="100"
    step="1"
    style="--val: {(($price - 20) / 80) * 100}%"
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