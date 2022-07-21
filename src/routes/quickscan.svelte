<script>
    import { Html5Qrcode, Html5QrcodeSupportedFormats as ScannerFormats } from 'html5-qrcode'
    import { onMount } from 'svelte'
    import Navbar from "./Navbar.svelte";

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

    function onScanSuccess(decodedText, decodedResult) {
        alert(`Code matched = ${decodedText}`)
        console.log(decodedResult)
    }

    function onScanFailure(error) {
        console.warn(`Code scan error = ${error}`)
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