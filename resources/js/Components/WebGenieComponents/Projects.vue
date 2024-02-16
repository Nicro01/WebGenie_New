<template>
    <div
        id="projects"
        class="md:pt-10 md:pb-40 py-20 flex flex-col items-center justify-center gap-10"
    >
        <h1
            class="text-3xl px-5 md:text-5xl font-bold text-gray-900 text-center"
            data-aos="zoom-in"
        >
            Conheça um pouco de nossos projetos
        </h1>

        <div
            class="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-1 max-w-7xl mt-14 select-none"
        >
            <div
                v-for="(card, index) in cards"
                :key="index"
                :class="card.bg"
                data-aos="fade-up"
                @click="redirect(card.link)"
                class="relative col-span-1 flex mt-20 flex-col items-center rounded-lg shadow-lg cursor-pointer"
            >
                <div class="overflow-hidden md:h-[350px] h-[250px]">
                    <img
                        :class="card.zoom ? 'scale-[1.2]' : ' scale-100'"
                        class="z-0 rounded-lg -mt-5 transform transition-all duration-300 ease-in-out"
                        :src="card.image"
                        width="350"
                        height="250"
                        alt=""
                    />
                    <div
                        @mouseover="hover(index)"
                        @mouseleave="leave(index)"
                        class="absolute flex items-center justify-center top-0 rounded-lg w-[350px] h-[350px] z-10 bg-white bg-opacity-0 opacity-0 hover:opacity-100 hover:bg-opacity-50 transition-all duration-100"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke-width="1.5"
                            stroke="currentColor"
                            class="w-16 h-16 text-red-800"
                        >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                            />
                        </svg>
                    </div>
                </div>
                <div
                    class="absolute -bottom-16 rounded-lg py-3 px-4 quicksand shadow-lg bg-white w-[85%]"
                >
                    <h1 class="text-base font-semibold text-gray-900">
                        TMKT Londrina - <br />
                        Site Empresarial para Telemarketing
                    </h1>
                    <p class="text-gray-400 mt-5 text-xs">SITE</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import AOS from "aos";
import "aos/dist/aos.css";
import { Ripple, initTE } from "tw-elements";

export default {
    data() {
        return {
            isMobile: false,
            cards: [
                {
                    image: "https://i.postimg.cc/h45MC4zW/macbook-pro-mockup-with-a-white-iphone-6-in-front-view-a11923.png",
                    zoom: false,
                    bg: "bg-slate-800",
                    link: "https://tmktlondrina.com.br/",
                },
                {
                    image: "https://i.postimg.cc/gkHYDSsf/macbook-pro-mockup-with-a-white-iphone-6-in-front-view-a11923-1.png",
                    zoom: false,
                    bg: "bg-orange-500",
                    link: "https://maisgerencia.com.br/",
                },
                {
                    image: "https://i.postimg.cc/W3YZhpFw/macbook-pro-mockup-with-a-white-iphone-6-in-front-view-a11923-2.png",
                    zoom: false,
                    bg: "bg-green-500",
                    link: "https://venir.cloud/",
                },
                {
                    image: "https://i.postimg.cc/yxQWLLXh/macbook-pro-mockup-with-a-white-iphone-6-in-front-view-a11923-3.png",
                    zoom: false,
                    bg: "bg-black",
                    link: "https://brutalism.webgenie.com.br/",
                },
                {
                    image: "https://i.postimg.cc/Jn9psC2v/macbook-pro-mockup-with-a-white-iphone-6-in-front-view-a11923-4.png",
                    zoom: false,
                    bg: "bg-[#f0ca4f]",
                    link: "https://uniondev.com.br/",
                },
                {
                    image: "https://i.postimg.cc/HL8bxkc1/macbook-pro-mockup-with-a-white-iphone-6-in-front-view-a11923-5.png",
                    zoom: false,
                    bg: "bg-[#519fa5]",
                    link: "https://santosemalatesta.com.br/",
                },
            ],
        };
    },
    mounted() {
        AOS.init();
        initTE({
            Ripple,
        });
        this.isMobile = window.innerWidth < 768;
    },

    methods: {
        hover(index) {
            this.cards[index].zoom = true;
        },
        leave(index) {
            this.cards[index].zoom = false;
        },
        redirect(link) {
            window.open(link, "_blank");
        },
    },
};
</script>
<style scoped>
.quicksand {
    font-family: "Quicksand", sans-serif;
    font-optical-sizing: auto;
    font-weight: 400;
    font-style: normal;
}
</style>
