<script context="module">
    export const prerender = true;
</script>

<script>
    import Navbar from "../navbars/Navbar.svelte";
    import MobileNavbar from "../navbars/MobileNavbar.svelte";
    import Footer from "../page-sections/Footer.svelte";
    import Background3 from "../backgrounds/Background3.svelte";
    import national from "../assets/images/thetachi_national.png"
    import local from "../assets/images/thetachi_local.png"
    import nationalpdf from "../assets/pdf/national_bylaws.pdf"
    import localpdf from "../assets/pdf/local_bylaws.pdf"

    let innerWidth = 0

</script>

<svelte:window bind:innerWidth />
<style global lang="postcss">
    @tailwind base;
    @tailwind components;
    @tailwind utilities;
</style>


<main class="overflow-x-hidden">

    <div class="bg-neutral">
        {#if innerWidth > 1450}
            <Navbar />
        {:else}
            <MobileNavbar />
        {/if}
    </div>

    <div class="py-36 flex w-full h-screen flex-wrap content-center content-center items-center justify-center place-items-center bg-secondary">

        <div class="card w-96 bg-base-100 shadow-xl image-full m-20">
            <figure><img src="{national}" alt="National" /></figure>
            <div class="card-body">
                <h2 class="card-title">National By Laws</h2>
                <p>Click to view Theta Chi's National & Public By Laws.</p>
                <div class="card-actions justify-end">
                    <a href="{nationalpdf}" role="button" class="btn btn-primary" target="_blank">View</a>
                </div>
            </div>
        </div>

        <div class="card w-96 bg-base-100 shadow-xl image-full m-20">
            <figure><img src="{local}" alt="Local" /></figure>
            <div class="card-body">
                <h2 class="card-title">Local By Laws</h2>
                <p>Click to view Theta Chi Theta Rho's Local & Public By Laws.</p>
                <div class="card-actions justify-end">
                    <a href="{localpdf}" role="button" class="btn btn-primary" target="_blank">View</a>
                </div>
            </div>
        </div>
    </div>
    <Background3 />



    <Footer />
</main>

