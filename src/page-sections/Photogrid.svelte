<script context="module">
    export const prerender = true;
</script>

<script>
    $: innerWidth = 0
</script>

<svelte:window bind:innerWidth/>

<main>

        <div class="flex flex-wrap">
            <div class="w-full md:w-1/2 lg:w-1/4 mb-4 relative p-4">
                <p class="absolute left-1/2 -translate-x-1/2 py-48 font-bold text-white text-4xl drop-shadow-2xl">BROTHERHOOD</p>
                <img src="frontimage1.png" alt="">
            </div>
            <div class="w-full md:w-1/2 lg:w-1/4 mb-4 relative p-4">
                <p class="absolute left-1/2 -translate-x-1/2 py-48 font-bold text-white text-4xl drop-shadow-2xl">SCHOLARS</p>
                <img src="frontimage2.png" alt="">
            </div>
            <div class="w-full md:w-1/2 lg:w-1/4 mb-4 relative p-4">
                <p class="absolute left-1/2 -translate-x-1/2 py-48 font-bold text-white text-4xl drop-shadow-2xl">SOCIAL</p>
                <img src="frontimage3.png" alt="">
            </div>
            <div class="w-full md:w-1/2 lg:w-1/4 mb-4 relative p-4">
                <p class="absolute left-1/2 -translate-x-1/2 py-48 font-bold text-white text-4xl drop-shadow-2xl">SERVICE</p>
                <img src="frontimage4.png" alt="">
            </div>
        </div>

    <!--{#if innerWidth > 1226}-->
    <!--    <div class="flex mb-4 w-full">-->
    <!--        <div class="w-1/4  p-4 relative">-->
    <!--            <p class="absolute left-1/2 -translate-x-1/2 py-48 font-bold text-white text-4xl drop-shadow-2xl">BROTHERHOOD</p>-->
    <!--            <img src="frontimage1.png" alt="">-->
    <!--        </div>-->
    <!--        <div class="w-1/4 p-4 relative">-->
    <!--            <p class="absolute left-1/2 -translate-x-1/2 py-48 font-bold text-white text-4xl drop-shadow-2xl">SCHOLARS</p>-->
    <!--            <img src="frontimage2.png" alt="">-->
    <!--        </div>-->
    <!--        <div class="w-1/4 p-4 relative">-->
    <!--            <p class="absolute left-1/2 -translate-x-1/2 py-48 font-bold text-white text-4xl drop-shadow-2xl">SOCIAL</p>-->
    <!--            <img src="frontimage3.png" alt="">-->
    <!--        </div>-->
    <!--        <div class="w-1/4 p-4 relative">-->
    <!--            <p class="absolute left-1/2 -translate-x-1/2 py-48 font-bold text-white text-4xl drop-shadow-2xl">SERVICE</p>-->
    <!--            <img src="frontimage1.png" alt="">-->
    <!--        </div>-->
    <!--    </div>-->

    <!--{:else}-->


    <!--        <div class="justify-center items-center place-items-center content-center">-->

    <!--            <div class="p-4 relative">-->
    <!--                <p class="absolute left-1/2 -translate-x-1/2 py-48 font-bold text-white text-4xl drop-shadow-2xl">BROTHERHOOD</p>-->
    <!--                <img src="frontimage1.png" alt="">-->
    <!--            </div>-->
    <!--            <div class="p-4 relative">-->
    <!--                <p class="absolute left-1/2 -translate-x-1/2 py-48 font-bold text-white text-4xl drop-shadow-2xl">SCHOLARS</p>-->
    <!--                <img src="frontimage2.png" alt="">-->
    <!--            </div>-->
    <!--            <div class="p-4 relative">-->
    <!--                <p class="absolute left-1/2 -translate-x-1/2 py-48 font-bold text-white text-4xl drop-shadow-2xl">SOCIAL</p>-->
    <!--                <img src="frontimage3.png" alt="">-->
    <!--            </div>-->
    <!--            <div class="p-4 relative">-->
    <!--                <p class="absolute left-1/2 -translate-x-1/2 py-48 font-bold text-white text-4xl drop-shadow-2xl">SERVICE</p>-->
    <!--                <img src="frontimage1.png" alt="">-->
    <!--            </div>-->
    <!--        </div>-->


    <!--{/if}-->



</main>
