<script>
    import {page} from '$app/stores'
    import Navbar from "../Navbar.svelte";
    const itemId = $page.params.item
    const itemName = $page.params.name
    const itemPrice = $page.params.price
    const itemDescription = $page.params.description

</script>

<style global lang="postcss">
    @tailwind base;
    @tailwind components;
    @tailwind utilities;
</style>

<main>

    <Navbar />

    <div class="flex flex-col justify-center items-center">

        <div class="prose">

            <div class="bg-neutral my-20 mx-5">
                <h3 class="bg-accent text-white px-5">Scanned Item</h3>

                <div class="px-5">
                    <h5>UPC Code: {itemId}</h5>
                    <h5>Item Name: {itemName}</h5>
                    <h5>Item Price: {itemPrice}</h5>
                    <h5>Item Description: {itemDescription}</h5>
                </div>
            </div>


            <div class="flex flex-col justify-center items-center">
                <select class="select select-primary w-full max-w-xs my-10">
                    <option disabled selected>Item Action</option>
                    <option>Receive in System</option>
                    <option>Inventory Transfer</option>
                    <option>Intercompany Transfer Order</option>
                    <option>Inventory Adjustment</option>
                </select>

                <div>
                    <a href="/welcome" class="btn btn-neutral shadow-xl outline-4 my-2 px-10 mx-2">Cancel</a>
                    <a href="/menu" class="btn btn-primary shadow-xl my-2 px-8 mx-2">Continue</a>
                </div>
            </div>

        </div>



    </div>
</main>