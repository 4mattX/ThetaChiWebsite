<script context="module">

</script>

<script>
    let scroll

    import Background from "../backgrounds/Background.svelte";
    import Navbar from "../navbars/Navbar.svelte";
    import PolygonHeader from "../objects/PolygonHeader.svelte";
</script>

<svelte:window bind:scrollY={scroll} />


<style global lang="postcss">
    @tailwind base;
    @tailwind components;
    @tailwind utilities;
</style>

<main >
    <Navbar />

    <Background />

<!--    <PolygonHeader />-->

    <div style:transform={`translate3d(0, ${scroll * 2.5}px, 0)`}>

        <div class="flex flex-col justify-center items-center relative ">

            <div class="py-20"></div>

            <div class="prose-2xl text-white text-center drop-shadow-xl">
                <h1>Theta Chi</h1>
                <h3>Theta Rho Chapter</h3>
            </div>

            <div class="py-96"></div>
            <div class="py-96"></div>


        </div>
    </div>




</main>

