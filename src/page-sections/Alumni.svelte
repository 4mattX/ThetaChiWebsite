<script context="module">
    export const prerender = true;
</script>

<script>
    import alumniTxt1 from "../assets/info/alumni1.txt?raw"
    import alumniTxt2 from "../assets/info/alumni2.txt?raw"
</script>

<main class="bg-neutral">
    <div class="py-16">
        <div class="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
            <div class="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
                <div class="text-7xl text-center font-bold px-16 underline invert">
                    <p>Theta Rho Alumni</p>
                </div>
                <div class="md:7/12 lg:w-6/12 invert">
                    <div class="text-2xl">
                        <p>{alumniTxt1}</p>
                        <br>
                        <p>{alumniTxt2}</p>
                        <br>
                        <button class="btn btn-primary btn-2xl text-xl px-10 invert">
                            <a href="https://www.facebook.com/groups/150377078352778/?ref=share" target="_blank">Alumni Facebook</a>
                        </button>
                    </div>

                </div>
            </div>
        </div>
    </div>
</main>