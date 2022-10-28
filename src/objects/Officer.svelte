<script>
    export let name;
    export let title;
    export let img;
    export let alt_img

    let curr_img = img
    const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

    async function chgImg() {
        await delay(300)
        curr_img = alt_img;
    }

    async function normalImg() {
        await delay(300)
        curr_img = img;
    }

</script>

<style global lang="postcss">
    .officer {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    img {
        width: 200px;
        height: 200px;
        border-radius: 50%;
    }
    /*.officer img:hover {*/
    /*    opacity: 0.5;*/
    /*}*/
    .icon {
        width: 200px;
        height: 200px;
        overflow: hidden;
        border-radius: 50%;
        box-shadow: 3px 3px 10px black;
        border: 0px;
        background-color: white;
        margin-left: auto;
        margin-right: auto;
        display: block;
        /* TRANSITION HERE!! */
        -webkit-transition: transform 1s ease;
        -moz-transition: transform 1s ease;
        -ms-transition: transform 1s ease;
        -o-transition: transform 1s ease;
        transition: transform 1s ease;
        /* END OF TRANSITION */
    }

    .icon img{
        left: 50%;
        top: 50%;
        height: 100%;
        width: auto;
    }

    .icon:hover {
        transform: translateX( -1px ) rotateY( 180deg ); /* ALSO EXTRA TRANSFORM PROPERTIES ADDED FOR COMPATIBILITY*/
        -ms-transform: translateX( -1px ) rotateY(180deg); /* IE 9 */
        -webkit-transform: translateX( -1px ) rotateY(180deg); /* Chrome, Safari, Opera */
    }

    @tailwind base;
    @tailwind components;
    @tailwind utilities;
</style>

<div class="officer">

    <div class="icon">
        <img class="border border-8" src="{curr_img}" alt="{name}" on:mouseover={chgImg} on:mouseleave={normalImg} />
    </div>

    <div class="prose text-center py-2">
        <h2>{title}</h2>
<!--        <h4 class="italic">{name}</h4>-->
    </div>

</div>