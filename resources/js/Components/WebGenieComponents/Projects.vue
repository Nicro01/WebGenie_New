<template>
    <div class="container mx-auto select-none">
        <div
            class="flex flex-col items-center pb-10 pt-24 h-screen relative"
            id="projects"
        >
            <h1 class="text-5xl text-center font-bold text-gray-900">
                Conheça Alguns de Nossos Projetos
            </h1>
        </div>
    </div>
</template>

<script>
import AOS from "aos";
import "aos/dist/aos.css";
import { Ripple, initTE } from "tw-elements";

export default {
    name: "About",
    mounted() {
        AOS.init();
        initTE({
            Ripple,
        });
    },
};
</script>

<style scoped>
.glass {
    background: rgba(255, 255, 255, 0.46);
    border-radius: 16px;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(5.9px);
    -webkit-backdrop-filter: blur(5.9px);
}
</style>
