<script>
    import Navbar from "../navbars/Navbar.svelte";
    import Officer from "../objects/Officer.svelte";
    import president from "../assets/officers/president.png"
    import president_name from "../assets/officers/president_name.png"
    import vicepresident from "../assets/officers/vicepresident.png"
    import vicepresident_name from "../assets/officers/vicepresident_name.png"
    import vphs from "../assets/officers/vphs.png"
    import vphs_name from "../assets/officers/vphs_name.png"
    import secretary from "../assets/officers/secretary.png"
    import secretary_name from "../assets/officers/secretary_name.png"
    import treasurer from "../assets/officers/treasurer.png"
    import treasurer_name from "../assets/officers/treasurer_name.png"
    import marshal from "../assets/officers/marshal.png"
    import marshal_name from "../assets/officers/marshal_name.png"
    import recruitment from "../assets/officers/recruitment.png"
    import recruitment_name from "../assets/officers/recruitment_name.png"

    import Background2 from "../backgrounds/Background2.svelte";
    import MobileNavbar from "../navbars/MobileNavbar.svelte";
    import Footer from "../page-sections/Footer.svelte";

    let innerWidth = 0

    const officers = [
        {
            name: 'Dalton Guillory',
            title: 'President',
            img: president,
            alt_img: president_name
        },
        {
            name: 'Justice Tilley',
            title: 'Vice President',
            img: vicepresident,
            alt_img: vicepresident_name
        },
        {
            name: 'Matthew Foreman',
            title: 'VPHS',
            img: vphs,
            alt_img: vphs_name
        },
        {
            name: 'Collin Stelly',
            title: 'Secretary',
            img: secretary,
            alt_img: secretary_name
        },
        {
            name: 'Trajan Cella',
            title: 'Treasurer',
            img: treasurer,
            alt_img: treasurer_name
        },
        {
            name: 'Jalen Scott',
            title: 'Marshal',
            img: marshal,
            alt_img: marshal_name
        },
        {
            name: 'Dominic Prudhomme',
            title: 'Recruitment Chair',
            img: recruitment,
            alt_img: recruitment_name
        }

    ];
</script>

<!--<style>-->

<!--    officers {-->
<!--        display: flex;-->
<!--        justify-content: space-around;-->
<!--    }-->
<!--</style>-->
<svelte:window bind:innerWidth />
<style global lang="postcss">
    @tailwind base;
    @tailwind components;
    @tailwind utilities;
</style>


<main class="overflow-x-hidden">

    <div class="bg-neutral">
        {#if innerWidth > 1450}
<!--            <Navbar />-->
            <MobileNavbar />
        {:else}
            <MobileNavbar />
        {/if}

        <div class="py-16 px-24 overflow-x-hidden">
            <div class="flex w-full h-full flex-wrap mt-4 mb-8 content-center content-center items-center justify-center place-items-center overflow-x-hidden">

                {#if innerWidth > 550}
                    {#each officers as officer}
                        <div class="officers p-16 z-20 ">
                            <Officer {...officer} />
                        </div>
                    {/each}
                {:else}
                    {#each officers as officer}
                        <div class="officers py-16 z-20 ">
                            <Officer {...officer} />
                        </div>
                    {/each}
                {/if}



            </div>

            <div class="overflow-x-hidden">
                <Background2 />
            </div>



        </div>
    </div>



    <Footer />
</main>

