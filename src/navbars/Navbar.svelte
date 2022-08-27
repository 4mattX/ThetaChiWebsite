<script>
    import Crest from '../assets/Crest.svelte'
</script>


<div class="navbar bg-base-100 fixed z-50 bg-opacity-80">
    <div class="flex-1">
        <a class="btn btn-ghost normal-case text-xl"><Crest/></a>
    </div>
    <div class="flex-none opacity-100">
        <ul class="menu menu-horizontal p-0">
            <li><a>Item 1</a></li>
            <li tabindex="0">
                <a>
                    Parent
                    <svg class="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"/></svg>
                </a>
                <ul class="p-2 bg-base-100">
                    <li><a>Submenu 1</a></li>
                    <li><a>Submenu 2</a></li>
                </ul>
            </li>
            <li><a>Item 3</a></li>
        </ul>
    </div>
</div>

<!--<style global lang="postcss">-->

<!--    header{-->
<!--        padding: 10px 0px 0px 0px;-->
<!--        background-color: white;-->
<!--        font-family: TimesNewRoman, Times New Roman, Times, Baskerville, Georgia, serif;-->
<!--        color: black;-->
<!--        display: block;-->
<!--    }-->

<!--    h1 {-->
<!--        font-size: 1.5em;-->
<!--        text-shadow: 1px 1px #df9b96;-->
<!--    }-->
<!--    .navlinks {-->
<!--        margin:.75em;-->
<!--        padding: .5em;-->
<!--        font-weight: bold;-->
<!--        font-size: 1em;-->
<!--        background-image: linear-gradient(white, red);-->
<!--        border-radius: 40px;-->
<!--    }-->

<!--</style>-->



<!--<header style = "padding-bottom: 0.2em" class="fixed z-50 w-screen">-->
<!--    <a href="http://localhost:3000/">-->
<!--        <img style = "float: left; margin-left: 0.3em" src="https://yt3.ggpht.com/a-/AN66SAyHWiL1uGNRCOCLpw71vJD7j7lOtTXP9CUNmw=s900-mo-c-c0xffffffff-rj-k-no" width="4%">-->
<!--    </a>-->

<!--    <h1 style="margin-right: 15em">Theta Chi | Theta Rho</h1>-->

<!--    <div style="float: right">-->
<!--        <a class="navlinks">Homepage</a>-->
<!--        <a class="navlinks">About</a>-->
<!--        <a class="navlinks">Contact Us</a>-->
<!--        <a class="navlinks">Quick Links</a>-->
<!--    </div>-->

<!--</header>-->