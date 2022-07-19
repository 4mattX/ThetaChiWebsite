<script context="module">
    export async function load({session}) {
        return {
            props: {
                token_expiration: session.token_expiration,
            },
        }
    }
</script>

<script>

    export let token_expiration
    let login = true

    // console.log("Token Expiration: " + token_expiration)
    //
    // if (getDate() - token_expiration >= 3600000) {
    //     login = true
    // }

    function getDate() {
        return new Date().getTime()
    }
</script>

<style global lang="postcss">
    @tailwind base;
    @tailwind components;
    @tailwind utilities;
</style>

<!--<Particles id="tsparticles" options="{particlesConfig}"/>-->
<main class="box">
    <form>

        <div class="flex flex-col min-h-screen justify-center items-center">

            <div class="prose">
<!--                    <img src="/clevel_connect.png" alt="" class="px-20 ">-->
                <h1>Fiber Track</h1>
            </div>

            {#if login}
                <a href="/login">
                    <button class="btn btn-primary my-20">Login Through NetSuite</button>
                </a>
                {:else}
                <a href="/welcome">
                    <button class="btn btn-primary my-20">Continue</button>
                </a>
            {/if}




        </div>
    </form>
</main>

