<script>
    import Navbar from "./Navbar.svelte";

</script>

<style global lang="postcss">
    @tailwind base;
    @tailwind components;
    @tailwind utilities;
    @tailwind typography;
</style>

<main>
    <Navbar />
    <div class="flex flex-col min-h-screen justify-center items-center">
        <div class="prose lg:prose-xl">
            <h1>Welcome Back</h1>
        </div>

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

        <div class="py-20">

        </div>
    </div>
</main>