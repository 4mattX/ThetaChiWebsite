<script>

    let bgImage = 'image1.JPG'

    // let bgImage = 'https://www.business2community.com/wp-content/uploads/2015/10/42454567_m.jpg.jpg'

</script>

<style global lang="postcss">
    @tailwind base;
    @tailwind components;
    @tailwind utilities;
</style>

<!--<main>-->
<!--    <div class="w-screen h-screen bg-cover" style="background-image: url('{bgImage}')">With quotes but no semi. Work!</div>-->
<!--</main>-->

<!--<main class="z-0">-->

    <div class="w-full h-full bg-no-repeat bg-cover bg-fixed absolute overflow-x-hidden">
        <svg class="w-screen h-screen bg-cover" style="background-image: url('{bgImage}')" viewBox="0 0 100 100" preserveAspectRatio="none">
            <polygon style="fill-opacity: 80%; fill:#2b303c" points="100 91, 0 100, 100 100" />
            <polygon style="fill-opacity: 60%; fill:#2b303c" points="100 87, 0 100, 100 100" />
            <polygon style="fill-opacity: 50%; fill:#2b303c" points="100 82, 0 100, 100 100" />
<!--            <polygon style="fill-opacity: 60%; fill:#000" points="0 93, 0 100, 100 100" />-->
<!--            <polygon style="fill-opacity: 60%; fill:#000" points="0 96, 0 100, 100 100" />-->
        </svg>

    </div>

<!--    <div id="carouselExampleSlidesOnly" class="carousel slide relative" data-bs-ride="carousel">-->
<!--        <div class="carousel-inner relative w-full overflow-hidden">-->
<!--            <div class="carousel-item active relative float-left w-full">-->
<!--                <img-->
<!--                        src="https://mdbcdn.b-cdn.net/img/new/slides/041.webp"-->
<!--                        class="block w-full"-->
<!--                        alt="Wild Landscape"-->
<!--                />-->
<!--            </div>-->
<!--            <div class="carousel-item relative float-left w-full">-->
<!--                <img-->
<!--                        src="https://mdbcdn.b-cdn.net/img/new/slides/042.webp"-->
<!--                        class="block w-full"-->
<!--                        alt="Camera"-->
<!--                />-->
<!--            </div>-->
<!--            <div class="carousel-item relative float-left w-full">-->
<!--                <img-->
<!--                        src="https://mdbcdn.b-cdn.net/img/new/slides/043.webp"-->
<!--                        class="block w-full"-->
<!--                        alt="Exotic Fruits"-->
<!--                />-->
<!--            </div>-->
<!--        </div>-->
<!--    </div>-->

<!--</main>-->