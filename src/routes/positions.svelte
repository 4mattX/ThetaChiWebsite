<script context="module">
    export const prerender = true;
</script>

<script>
    import Navbar from "../navbars/Navbar.svelte";
</script>

<style global lang="postcss">
    @tailwind base;
    @tailwind components;
    @tailwind utilities;
</style>

<main>
    <Navbar />

</main>