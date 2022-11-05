<script context="module">
    export const prerender = true;
</script>

<script>
    import image1 from "../assets/images/image1.jpg"
    import image2 from "../assets/images/image2.jpg"
    import image3 from "../assets/images/image3.jpg"
    import image4 from "../assets/images/image4.jpg"
    import image5 from "../assets/images/image5.jpg"
    import image6 from "../assets/images/image6.jpg"
    import image7 from "../assets/images/image7.jpg"


    let bgImage = image1

    let images = []
    images.push(image4, image2,image3, image1, image5, image6, image7)
    images.push()

    let time = 8;

    setInterval(() => {
        time--;

        if (time <= 0) {
            time = 8
            bgImage = images.shift()
            images.push(bgImage)
        }
    }, 1000);

</script>

<style global lang="postcss">
    @tailwind base;
    @tailwind components;
    @tailwind utilities;
    .image-container {
        transition: all 0.5s ease;
    }
</style>

<!--<main>-->
<!--    <div class="w-screen h-screen bg-cover" style="background-image: url('{bgImage}')">With quotes but no semi. Work!</div>-->
<!--</main>-->

<!--<main class="z-0">-->

    <div class="w-full h-full bg-center bg-no-repeat bg-cover absolute overflow-x-hidden">
        <svg class="w-screen h-screen bg-cover image-container" style="background-image: url('{bgImage}')" viewBox="0 0 100 100" preserveAspectRatio="none">
                <polygon class="fill-base-100" style="fill-opacity: 80%" points="100 91, 0 100, 100 100" />
                <polygon class="fill-base-100" style="fill-opacity: 60%" points="100 87, 0 100, 100 100" />
                <polygon class="fill-base-100" style="fill-opacity: 50%" points="100 82, 0 100, 100 100" />


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