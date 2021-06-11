
<script>
    import FooterPrice from '$lib/FooterPrice.svelte';
    import HeaderPrice from '$lib/HeaderPrice.svelte';
    import Header from '$lib/Header.svelte';
</script>

<main class="
    grid 
    grid-rows-[1fr,3fr]
    grid-cols-[1fr] 
    w-screen
    h-screen
    bg-blue-100 
    font-manrope
    bg-background-pattern
    bg-no-repeat
    bg-contain
    tablet:bg-auto
">
    
    <Header />

    <section class="
        grid 
        grid-rows-[1.5fr,1fr]
        sm:grid-rows-[2fr,1fr] 
        justify-self-center 
        w-[350px]
        sm:w-[550px]
        h-[550px] 
        sm:h-[400px]
        bg-[white] 
        rounded-xl 
        shadow-xl
        divide-y
        divide-light-blue-100
    ">

        <HeaderPrice/>
        <FooterPrice/>

    </section>

</main>

<style>
    .bg-background-pattern {
        background-image: url('$lib/images/bg-pattern.svg');
    }
</style>