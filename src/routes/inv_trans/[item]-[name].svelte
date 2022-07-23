<script context="module">
    export async function load({session}) {
        return {
            props: {
                access_token: session.access_token,
            },
        }
    }
</script>

<script>
    import Navbar from "../Navbar.svelte";
    import {page} from '$app/stores'
    import CounterButton from "../../objects/CounterButton.svelte";
    import CancelButton from "../../objects/CancelButton.svelte";
    import SubmitButton from "../../objects/SubmitButton.svelte";
    import {goto} from "$app/navigation";
    const itemId = $page.params.item
    const itemName = $page.params.name

    export let access_token
    const locations_url = 'https://cors-anywhere.herokuapp.com/https://7640830.restlets.api.netsuite.com/app/site/hosting/restlet.nl?script=765&deploy=1&subsidiary=3'
    export let locations = []

    let location
    let transferlocation
    let memo

    let itemCount = 0

    function countUp() {
        if (itemCount === null) {
            itemCount = 0
            return
        }
        itemCount = parseInt(itemCount) + 1;
    }

    function countDown() {
        if (itemCount === null) {
            itemCount = 0
            return
        }

        if (itemCount - 1 < 0) {
            return
        }

        itemCount = parseInt(itemCount) - 1;
    }

    async function getLocations() {

        locations = []

        let tempLocations = await fetch(locations_url, {
            headers: {
                Accept: 'application/json',
                Authorization: `Bearer ${access_token}`
            }
        }).then(r => r.json())

        for (let loc in tempLocations) {
            locations.push({id: tempLocations[loc].id, name: tempLocations[loc].name})
        }

    }

    function displayInfo() {
        console.log('location ' + location.id)
        console.log('transferlocation ' + transferlocation.id)
        console.log('memo  ' + memo)
        console.log('itemId ' + itemId)
        console.log('itemCount ' + itemCount)
    }

    async function transferInventory() {

        let subsidiaryId = 3
        let locationId = location.id
        let transferLocationId = transferlocation.id

        const transfer_inv_url = `https://cors-anywhere.herokuapp.com/https://7640830.restlets.api.netsuite.com/app/site/hosting/restlet.nl?script=766&deploy=1&subsidiary=3&location=${locationId}&transferlocation=${transferLocationId}&memo=${memo}&item=${itemId}&adjustqtyby=${itemCount}`

        let response = JSON.stringify(await fetch(transfer_inv_url, {
            headers: {
                Accept: 'application/json',
                Authorization: `Bearer ${access_token}`
            }
        }))

        if (response === 'success') {
            goto('/welcome');
        } else {
            goto('/vendor-finder')
        }

    }



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

            <div class="my-10"></div>

            <span class="prose prose-lg">Inventory Change</span><span class="text-amber-600">*</span>
            <div class="flex flex-col justify-center items-center">
                <div>
                    <button on:click={countUp} class="btn btn-circle">▲</button>
                </div>

                <div>
                    <input class="prose prose-2xl w-30 text-center" bind:value={itemCount}>
                </div>

                <div>
                    <button on:click={countDown} class="btn btn-circle">▼</button>
                </div>
            </div>

            <div class="my-10"></div>

            {#await getLocations()}
                <div>
                    <span class="prose prose-lg">From Location</span><span class="text-amber-600">*</span>
                    <select class="select select-primary w-full max-w-xs">
                        <option disabled selected>Loading Locations...</option>
                    </select>
                </div>

                <div>
                    <span class="prose prose-lg">To Location</span><span class="text-amber-600">*</span>
                    <select class="select select-primary w-full max-w-xs">
                        <option disabled selected>Loading Locations...</option>
                    </select>
                </div>

                {:then post}
                <div>
                    <span class="prose prose-lg">From Location</span><span class="text-amber-600">*</span>
                    <select bind:value={location} class="select select-primary w-full max-w-xs">
                        <option disabled selected>Choose Location</option>
                        {#each locations as location}
                            <option value={location}>{location.name}</option>
                        {/each}
                    </select>
                </div>

                <div>
                    <span class="prose prose-lg">To Location</span><span class="text-amber-600">*</span>
                    <select bind:value={transferlocation} class="select select-primary w-full max-w-xs">
                        <option disabled selected>Choose Location</option>
                        {#each locations as location}
                            <option value={location}>{location.name}</option>
                        {/each}
                    </select>
                </div>
            {/await}


            <div class="my-10"></div>

            <div>
                <span class="prose prose-lg">Memo: </span>
                <div class="flex justify-center">
                    <div class="mb-3 xl:w-full">
                        <textarea bind:value={memo} class="form-control block w-80 px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleFormControlTextarea1" rows="3" placeholder="Your message"></textarea>
                    </div>
                </div>
            </div>

        </div>

        <div class="my-5"></div>

        <div>
            <a href="/welcome" > <CancelButton /> </a>
<!--            <SubmitButton on:click={displayInfo} />-->
            <button on:click={transferInventory} class="btn btn-primary shadow-xl my-2 px-10 mx-2">Submit</button>
        </div>

    </div>
</main>