<script>
    import Crest from '../assets/Crest.svelte'
    import { onMount } from 'svelte'
    import { themeChange } from 'theme-change'

    onMount(() => {
        themeChange(false)
    })
</script>

<style global lang="postcss">
    @tailwind base;
    @tailwind components;
    @tailwind utilities;
</style>

<div class="navbar bg-base-100 fixed z-50">
    <div class="navbar-start">
        <div class="dropdown">
            <label tabindex="0" class="btn btn-ghost btn-circle">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
            </label>
            <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                <li><a>About</a></li>
                <li><a>Alumni</a></li>
                <li><a href="/calendar">Calendar</a></li>
                <li tabindex="0">
                    <a>
                        Info
                        <svg class="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"/></svg>
                    </a>
                    <ul class="p-2 bg-base-100">
                        <li><a href="https://portal.thetachi.org/" target="_blank">MyThetaChi</a></li>
                        <li><a href="https://www.greekbill.com/" target="_blank">GreekBill</a></li>
                        <li><a href="/officers" >Officers</a></li>
                        <li><a>By-Laws</a></li>

                    </ul>
                </li>

                <li tabindex="0">
                    <a>
                        Theme
                        <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block h-5 w-5 stroke-current md:h-6 md:w-6"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"></path></svg>
                    </a>
                    <ul class="p-2 bg-base-100">
                        <li data-set-theme="light" data-act-class="ACTIVECLASS"><a>Light</a></li>
                        <li data-set-theme="dark" data-act-class="ACTIVECLASS"><a>Dark</a></li>
                        <li data-set-theme="autumn" data-act-class="ACTIVECLASS"><a>Autumn</a></li>
                        <li data-set-theme="emerald" data-act-class="ACTIVECLASS"><a>Emerald</a></li>
                        <li data-set-theme="synthwave" data-act-class="ACTIVECLASS"><a>Synthwave</a></li>
                        <li data-set-theme="retro" data-act-class="ACTIVECLASS"><a>Retro</a></li>
                        <li data-set-theme="valentine" data-act-class="ACTIVECLASS"><a>Valentine</a></li>
                        <li data-set-theme="aqua" data-act-class="ACTIVECLASS"><a>Aqua</a></li>
                        <li data-set-theme="black" data-act-class="ACTIVECLASS"><a>Black</a></li>
                        <li data-set-theme="luxury" data-act-class="ACTIVECLASS"><a>Luxury</a></li>
                        <li data-set-theme="" data-act-class="ACTIVECLASS"dracula><a>Dracula</a></li>
                        <li data-set-theme="business" data-act-class="ACTIVECLASS"><a>Business</a></li>
                        <li data-set-theme="night" data-act-class="ACTIVECLASS"><a>Night</a></li>
                        <li data-set-theme="coffee" data-act-class="ACTIVECLASS"><a>Coffee</a></li>
                    </ul>
                </li>
            </ul>
        </div>
    </div>
    <div class="navbar-center">
        <a class="btn btn-ghost normal-case text-xl" href="/">Theta Chi · Theta Rho</a>
    </div>
    <div class="navbar-end">

    </div>
</div>