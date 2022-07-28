<script context="module">
    export async function load({session}) {
        return {
            props: {
                scanned_item: session.scanned_item,
                access_token: session.access_token
            },
        }
    }


</script>

<script>
    import { Html5Qrcode, Html5QrcodeSupportedFormats as ScannerFormats } from 'html5-qrcode'
    import { onMount } from 'svelte'
    import Navbar from "./Navbar.svelte";
    import InfoNav from "../navbars/InfoNav.svelte";
    import {goto} from "$app/navigation";
    export let access_token

    let scanning = false
    let loading = false

    let html5Qrcode

    onMount(init)

    function init() {
        html5Qrcode = new Html5Qrcode('reader')
    }

    function start() {
        html5Qrcode.start(
            { facingMode: 'environment' },
            {
                fps: 10,
                qrbox: { width: 350, height: 350 },
            },
            onScanSuccess,
            onScanFailure
        )
        scanning = true
    }

    async function stop() {
        scanning = false
        await html5Qrcode.stop()
        loading = true
    }

    async function onScanSuccess(decodedText, decodedResult) {

        await html5Qrcode.stop()
        // alert(`Code matched = ${decodedText}`)

        const restlet_url = 'https://cors-anywhere.herokuapp.com/https://7640830.restlets.api.netsuite.com/app/site/hosting/restlet.nl?script=764&deploy=1&upc=' + decodedText.toString()

        const itemObject = await getData(restlet_url)

        let itemId = JSON.parse(itemObject).id
        let itemName = JSON.parse(itemObject).fields.itemid
        let itemPrice = JSON.parse(itemObject).sublists.price["line 1"]["price[1]"]
        let itemDescription = JSON.parse(itemObject).fields.salesdescription


        // goto(`/qs/${decodedText}`)
        goto(`/qs/${itemId}-${itemName}-${itemPrice}-${itemDescription}`)
        // console.log(decodedResult)

    }

    async function getData(restlet_url) {



        return JSON.stringify(await fetch(restlet_url, {
            headers: {
                Accept: 'application/json',
                Authorization: `Bearer ${access_token}`
            }
        }).then(r => r.json()))
    }



    function onScanFailure(error) {
        // console.warn(`Code scan error = ${error}`)
    }
</script>

<style>

    cam {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
    reader {
        width: 120vh;
        /*min-height: 100vh;*/
        background-size: cover;
        background-color: black;
    }
</style>


<main>

    <cam>
        <reader id="reader"/>
    </cam>



    {#if scanning}
        <div class="flex flex-col justify-center items-center">
            <button on:click={stop} class="btn btn-primary m-5">stop</button>
        </div>
    {:else if loading}
        <div class="prose prose-2xl">
            <h1>LOADING!</h1>
        </div>
    {:else}
        <Navbar />
        <InfoNav title="Quick Scan" />
        <div class="my-36 flex flex-col justify-center items-center">
            <button on:click={start} class="btn btn-primary m-5">start</button>
        </div>
    {/if}





</main>