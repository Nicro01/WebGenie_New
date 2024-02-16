<template>
    <div class="container mx-auto select-none">
        <div class="flex flex-col items-center py-10 h-auto" id="processo">
            <h1
                class="md:text-5xl text-3xl mb-20 text-center font-bold text-gray-900"
            >
                Seguimos Dois Princípios
            </h1>
            <!-- <p class="mt-3 max-w-xl text-center">
                Criação de websites personalizados, otimizados para diversos
                dispositivos e projetados para ajudar sua empresa a atrair novos
                clientes.
            </p> -->

            <div class="relative" v-if="!isMobile">
                <!-- @click="toggleCardHover(1)" -->
                <!-- CARD-PRINCIPIO -->
                <div
                    v-if="!isMobile"
                    class="card-principio -ms-36 cursor-pointer z-10 absolute w-80 floating px-4 py-2 font-bold left-0 mt-24 bg-[#000A11] text-[#B1C9FC] shadow-lg rounded-lg"
                >
                    <h3 class="text-2xl text-center">Agilidade</h3>
                    <!-- v-show="cardHover1" -->
                    <!-- TEXTO-PRINCIPIO -->
                    <div class="texto-principio">
                        <p
                            class="font-light text-base max-w-80 mt-5 pb-2 text-[#B1C9FC]"
                        >
                            Agilidade Nosso foco em agilidade significa
                            adaptar-se rapidamente e responder às mudanças com
                            rapidez, assegurando entregas eficazes e pontuais.
                            Buscamos sempre avançar com eficiência, mantendo a
                            qualidade e a satisfação do cliente no centro de
                            nossa abordagem.
                        </p>
                    </div>
                </div>

                <div
                    v-if="!isMobile"
                    class="card-principio cursor-pointer -mr-36 z-10 absolute floating px-4 py-2 w-80 font-bold right-0 mt-24 bg-[#000A11] text-[#B1C9FC] shadow-lg rounded-lg"
                >
                    <h3 class="text-2xl text-center">Eficiência</h3>
                    <div class="texto-principio">
                        <p class="font-light text-base max-w-80 mt-5 pb-2">
                            Priorizamos a eficiência, otimizando recursos para
                            superar expectativas. Combinamos expertise técnica
                            com gestão precisa, garantindo resultados de alta
                            qualidade, sustentáveis e adaptáveis às necessidades
                            futuras.
                        </p>
                    </div>
                </div>

                <img
                    draggable="false"
                    src="https://i.postimg.cc/GtPy9p8g/d192ceab-5cf0-4602-a3c4-692f9aec65ac.png"
                    class="scale-75 -mt-20 z-0"
                    alt=""
                />
            </div>

            <div v-if="isMobile">
                <div
                    @click="toggleCardHover(1)"
                    class="z-10 w-80 mb-5 px-4 py-2 font-bold bg-[#002537] text-slate-100 shadow-lg rounded-lg"
                >
                    <div class="w-full flex justify-between items-center">
                        <span></span>
                        <h3 class="text-xl text-center ms-5">Agilidade</h3>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke-width="1.5"
                            stroke="currentColor"
                            class="svg-seta w-6 h-6"
                        >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="m19.5 8.25-7.5 7.5-7.5-7.5"
                            />
                        </svg>
                    </div>

                    <p
                        v-show="cardHover1"
                        class="font-light text-base max-w-80 mt-5 pb-2"
                    >
                        Agilidade Nosso foco em agilidade significa adaptar-se
                        rapidamente e responder às mudanças com rapidez,
                        assegurando entregas eficazes e pontuais. Buscamos
                        sempre avançar com eficiência, mantendo a qualidade e a
                        satisfação do cliente no centro de nossa abordagem.
                    </p>
                </div>
                <div
                    @click="toggleCardHover(2)"
                    class="z-10 w-80 mb-5 px-4 py-2 font-bold bg-[#002537] text-slate-100 shadow-lg rounded-lg"
                >
                    <div class="w-full flex justify-between items-center">
                        <span></span>
                        <h3 class="text-xl text-center ms-5">Eficiência</h3>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke-width="1.5"
                            stroke="currentColor"
                            class="svg-seta w-6 h-6"
                        >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="m19.5 8.25-7.5 7.5-7.5-7.5"
                            />
                        </svg>
                    </div>
                    <p
                        v-show="cardHover2"
                        class="font-light text-base max-w-80 mt-5 pb-2"
                    >
                        Priorizamos a eficiência, otimizando recursos para
                        superar expectativas. Combinamos expertise técnica com
                        gestão precisa, garantindo resultados de alta qualidade,
                        sustentáveis e adaptáveis às necessidades futuras.
                    </p>
                </div>
            </div>

            <div class="md:-mt-10" v-show="!isMobile">
                Deslizar para Baixo
                <svg
                    class="animate-bounce w-6 h-6 mx-auto mt-4 cursor-pointer"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    v-scroll-to="'#servicos'"
                >
                    <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M19 14l-7 7m0 0l-7-7m7 7V3"
                    />
                </svg>
            </div>
        </div>
    </div>
</template>

<script>
import AOS from "aos";
import "aos/dist/aos.css";

export default {
    data() {
        return {
            cardHover1: false,
            cardHover2: false,
            isMobile: false,
        };
    },
    mounted() {
        AOS.init();
        if (window.innerWidth <= 768) {
            this.isMobile = true;
        }
    },
    methods: {
        toggleCardHover(i) {
            switch (i) {
                case 1:
                    this.cardHover1 = !this.cardHover1;
                    break;
                case 2:
                    this.cardHover2 = !this.cardHover2;
                    break;
                default:
                    break;
            }
        },
    },
};
</script>

<style scoped>
.floating {
    animation: floating 2s infinite ease-in-out;
}

@keyframes floating {
    0% {
        transform: translateY(0.6vh);
    }
    50% {
        transform: translateY(-0.6vh);
    }
    100% {
        transform: translateY(0.6vh);
    }
}
</style>
