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

    if (getDate() - token_expiration >= 3600) {
        // Go to log in process

    } else {
        // Go straight to menu
    }

    function getDate() {
        return new Date().getTime()
    }
</script>