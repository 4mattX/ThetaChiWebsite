<script context="module">
import Navbar from "./Navbar.svelte";
</script>

<style global lang="postcss">
    @tailwind ase;
    @tailwind components;
    @tailwind utilities;
</style>

<main>

    <Navbar />

    <form>
        <div class = "flex flex-wrap">
<!--            <p>The token is {bearer_token}</p>-->
            <a href="/inventory-transfer">
                <button class="btn btn-primary m-5 p-12">Inventory Transfer</button>
            </a>


            <button class="btn btn-primary m-5 p-12">Receiver</button>
            <button class="btn btn-primary m-5 p-12">Internal Inventory Adjustment</button>
            <button class="btn btn-primary m-5 p-12">External Inventory Adjustment</button>
<!--            <button class="btn btn-primary m-5 p-12">Button</button>-->
<!--            <button class="btn btn-primary m-5 p-12">Button</button>-->
<!--            <button class="btn btn-primary m-5 p-12">Button</button>-->

        </div>
    </form>
</main>