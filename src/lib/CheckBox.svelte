
<script>
    export let annual;
</script>

<div
    class="
        relative
        grid
        w-[2.8em]
        h-[1.4em]
        rounded-full
        bg-light-blue-300
        cursor-pointer
        place-self-center
        transition
    "
    class:bg-cyan-600={annual}

    on:click
>
    <!-- ball -->
    <div
        class="
            absolute
            left-1.5
            self-center
            w-[0.9rem]
            h-[0.9rem]
            bg-[white]
            rounded-full
            transition
            transform
            translate-y-[2%]
        "
        class:translate-x-5={annual}
    >

    </div>
</div>