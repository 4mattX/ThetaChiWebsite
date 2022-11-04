<script context="module">
    export const prerender = true;
</script>

<script lang="ts">
    import NavbarLoose from "../navbars/NavbarLoose.svelte";
    import FullCalendar from 'svelte-fullcalendar';
    import googleCalendarPlugin from '@fullcalendar/google-calendar'
    import daygridPlugin from '@fullcalendar/daygrid';
    import MobileNavbar from "../navbars/MobileNavbar.svelte";

    let options = {
        plugins: [ googleCalendarPlugin, daygridPlugin ],
        googleCalendarApiKey: 'AIzaSyDsB9ZzZ4e1bOBmYZLy8WiZO-jG_0ncKy0',
        events: {
            googleCalendarId: '1knqkf3fn6dhecrb6j8td8digo@group.calendar.google.com'
        }
    };

</script>

<style global lang="postcss">
    @tailwind base;
    @tailwind components;
    @tailwind utilities;


</style>

<main class="overflow-x-hidden">
    <MobileNavbar />
<!--    <NavbarLoose />-->
    <div class="py-10"></div>
    <div class="z-0">
        <FullCalendar {options} class="h-screen w-screen px-10 z-0"/>
    </div>




<!--    <iframe src="https://calendar.google.com/calendar/embed?src=1knqkf3fn6dhecrb6j8td8digo%40group.calendar.google.com&ctz=America%2FChicago"-->
<!--            style="border: 0" width="800" height="600" frameborder="0" scrolling="no"-->
<!--            class="bg-base-100"></iframe>-->
</main>