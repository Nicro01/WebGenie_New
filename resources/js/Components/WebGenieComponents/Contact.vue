<template>
    <div class="container mx-auto select-none">
        <div class="flex flex-col items-center pb-10 pt-24 h-auto">
            <h1>Contact</h1>
        </div>
    </div>
</template>

<script>
import AOS from "aos";
import "aos/dist/aos.css";
import { Ripple, initTE } from "tw-elements";

export default {
    mounted() {
        AOS.init();
        initTE({
            Ripple,
        });
    },
};
</script>
