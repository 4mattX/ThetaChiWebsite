<script context="module">
    export const prerender = true;
</script>

<script>

    import Photogrid from "../page-sections/Photogrid.svelte";
    import { browser} from "$app/env";

    let scroll
    $: innerWidth = 0

    import Background from "../backgrounds/Background.svelte";
    import Navbar from "../navbars/Navbar.svelte";
    import MobileNavbar from "../navbars/MobileNavbar.svelte";
    import About from "../page-sections/About.svelte";
    import Footer from "../page-sections/Footer.svelte";
    import Alumni from "../page-sections/Alumni.svelte";
    import Filler from "../page-sections/Filler.svelte";
    import Filler2 from "../page-sections/Filler2.svelte";
    import PolygonHeader from "../objects/PolygonHeader.svelte";

    import { writable } from "svelte/store"

    export const firstTime = writable(browser && localStorage.getItem("theme") || "autumn")

    firstTime.subscribe((val) => {
        if (browser) return (localStorage.theme = val)
    });

</script>

<!--<svelte:window bind:scrollY={scroll} />-->
<svelte:window bind:innerWidth bind:scrollY={scroll}/>


<style global lang="postcss">
    @tailwind base;
    @tailwind components;
    @tailwind utilities;

    body {
        background-color: #c4c4c4;

    }

    .text {
        position: absolute;
        top: 50%;
        right: 50%;
        transform: translate(50%,-50%);
        text-transform: uppercase;
        font-family: verdana;
        font-size: 5.5rem;
        font-weight: 700;
        /*color: #f5f5f5;*/
        text-shadow: 1px 1px 1px #919191,
        1px 2px 1px #919191,
        1px 3px 1px #919191,
        1px 4px 1px #919191,
        1px 5px 1px #919191,
        1px 6px 1px #919191,
        1px 7px 1px #919191,
        1px 8px 1px #919191,
        1px 9px 1px #919191,
        1px 10px 1px #919191,
        1px 18px 6px rgba(0,0,0,0.4),
        1px 22px 10px rgba(0,0,0,0.2),
        1px 25px 35px rgba(0,0,0,0.2),
        1px 30px 60px rgba(0,0,0,0.4);
    }

    .content {
        font-family: serif;
        font-size: 6em;
        position: absolute;
        text-transform: uppercase;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        color: transparent;
        background: #575757;
        -webkit-background-clip: text;
        /*background-clip: text;*/
        text-align: center;
        text-shadow: -4px 8px 7px rgba(255, 255, 255, 0.3);
    }
    .content h2 span {
        display: block;
        font-size: 55px;
    }
    .content h2 span {
        display: block;
        font-size: 55px;
    }
</style>

<main class="overflow-x-hidden">

    {#if innerWidth > 1450}
        <Navbar />
    {:else}
        <MobileNavbar />
    {/if}




    <Background />



<!--    <PolygonHeader />-->



        <div class="flex flex-col justify-center items-center relative ">

            <div class="py-20"></div>
                <div style:transform={`translate3d(0, ${scroll * 4.6}px, 0)`}>

                    {#if scroll < 200}
                        <div class="prose-2xl text-white text-center drop-shadow-xl font-serif text-opacity-75 text-secondary">
                            <span class="text text-center">Theta Chi</span>
<!--                            <h1>Theta Chi</h1>-->

                            <h2>THETA RHO</h2>
<!--                            <h3 class="font-bold py">Theta Rho</h3>-->
                        </div>
                    {/if}
            </div>

        </div>

        <div class="py-40"></div>
        <div id="about"></div>
        <div class="py-40"></div>
        <div class="py-24"></div>
        <About />
        <Filler />
        <div id="alumni"></div>
        <Photogrid />
        <Alumni />
        <Filler2 />
        <Footer />










</main>

