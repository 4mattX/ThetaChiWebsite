<script context="module">
    export async function load({session}) {
        return {
            props: {
                access_token: session.access_token,
            },
        }
    }
</script>

<script>
    const restlet_url = 'https://cors-anywhere.herokuapp.com/https://7640830.restlets.api.netsuite.com/app/site/hosting/restlet.nl?script=755&deploy=1&record_type=employee&record_id=-5'
    export let access_token

    let post

    async function getData() {
        return JSON.stringify(await fetch(restlet_url, {
            headers: {
                Accept: 'application/json',
                Authorization: `Bearer ${access_token}`
            }
        }).then(r => r.json()))
    }
</script>

<main>
    {#await getData()}
        <h2>Loading...</h2>
        {:then post}
        <p>{post}</p>
    {/await}

</main>