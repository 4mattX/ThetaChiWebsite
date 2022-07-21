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
    import {goto} from "$app/navigation";
    export let access_token

    let scanning = false

    let html5Qrcode

    onMount(init)

    function init() {
        html5Qrcode = new Html5Qrcode('reader', {
            formatsToSupport: [
                ScannerFormats.QR_CODE,
                ScannerFormats.AZTEC,
                ScannerFormats.CODABAR,
                ScannerFormats.CODE_39,
                ScannerFormats.CODE_93,
                ScannerFormats.CODE_128,
                ScannerFormats.DATA_MATRIX,
                ScannerFormats.MAXICODE,
                ScannerFormats.ITF,
                ScannerFormats.EAN_13,
                ScannerFormats.EAN_8,
                ScannerFormats.PDF_417,
                ScannerFormats.RSS_14,
                ScannerFormats.RSS_EXPANDED,
                ScannerFormats.UPC_A,
                ScannerFormats.UPC_E,
                ScannerFormats.UPC_EAN_EXTENSION,
            ]
        })
    }

    function start() {
        html5Qrcode.start(
            { facingMode: 'environment' },
            {
                fps: 10,
                qrbox: { width: 300, height: 300 },
            },
            onScanSuccess,
            onScanFailure
        )
        scanning = true
    }

    async function stop() {
        await html5Qrcode.stop()
        scanning = false
    }

    async function onScanSuccess(decodedText, decodedResult) {


        // alert(`Code matched = ${decodedText}`)

        const restlet_url = 'https://cors-anywhere.herokuapp.com/https://7640830.restlets.api.netsuite.com/app/site/hosting/restlet.nl?script=764&deploy=1&upc=' + decodedText.toString()

        const itemObject = await getData(restlet_url)
        console.log(itemObject)

        let itemName = JSON.parse(itemObject).fields.itemid
        let itemPrice = JSON.parse(itemObject).sublists.price["line 1"]["price[1]"]
        let itemDescription = JSON.parse(itemObject).fields.salesdescription


        // goto(`/qs/${decodedText}`)
        goto(`/qs/${decodedText}-${itemName}-${itemPrice}-${itemDescription}`)
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

    main {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
    reader {
        width: 100vh;
        /*min-height: 100vh;*/
        background-size: cover;
        background-color: black;
    }
</style>

<main>
    <Navbar />
    <div ></div>
    <reader id="reader"/>

    {#if scanning}
        <button on:click={stop} class="btn btn-primary m-5">stop</button>
    {:else}
        <button on:click={start} class="btn btn-primary m-5">start</button>
    {/if}


</main>