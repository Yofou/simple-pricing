<script>
    import ListItem from '$lib/ListItem.svelte';
</script>

<div class="grid grid-flow-row sm:grid-flow-col">
    <ul class="place-self-center list-marker transform translate-x-[-1.5rem]">
        <ListItem>Unlimited websites</ListItem>
        <ListItem>100% data ownership</ListItem>
        <ListItem>Email reports</ListItem>
    </ul>

    <button class="
        place-self-center
        text-blue-300
        text-sm
        sm:text-xs
        bg-dark-desaturated
        w-[12rem]
        sm:w-[11rem]
        h-[3rem]
        sm:h-[2.5rem]
        rounded-full
        hover:text-[white]
        transition
        mb-2
        sm:mb-0
    ">Start my trial</button>
</div>