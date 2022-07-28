<script>
    import Navbar from "./Navbar.svelte";
    import InfoNav from "../navbars/InfoNav.svelte";

</script>

<style global lang="postcss">
    @tailwind base;
    @tailwind components;
    @tailwind utilities;
    @tailwind typography;
</style>

<main>
    <Navbar />
    <InfoNav title="{'Welcome Back'}" />

    <div class="py-32 px-5 bg-secondary h-screen">
        <div class="flex flex-col items-center bg-white py-2 rounded-xl">

            <div class="avatar ">
                <div class="w-60 rounded-full my-10">
                    <img src="https://d26oc3sg82pgk3.cloudfront.net/files/media/edit/image/40377/square_thumb%402x.jpg" />
                </div>
            </div>

            <div class="prose my-5">
                <h2>Aaron Lebato</h2>
            </div>

            <a href="/menu" class="btn btn-primary my-2 px-5">Menu</a>
            <a href="/quickscan" class="btn btn-primary my-2 px-5">Quickscan</a>

        </div>
    </div>


</main>