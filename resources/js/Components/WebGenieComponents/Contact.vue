<template>
    <div
        class="flex flex-col items-center pb-36 pt-24 h-auto text-white select-none"
        id="contact"
    >
        <h1
            class="text-3xl px-5 md:text-5xl font-bold text-center"
            data-aos="zoom-in"
        >
            Gostou do que viu? Entre em contato conosco
        </h1>

        <div class="py-8 lg:py-8 px-4 mx-auto max-w-screen-md">
            <p
                class="mb-8 lg:mb-16 font-medium text-center sm:text-xl"
                data-aos="zoom-in"
            >
                Estamos prontos para te ajudar a transformar a sua ideia em
                realidade. Entre em contato conosco e vamos conversar sobre o
                seu projeto.
            </p>
            <form action="#" class="space-y-8">
                <div class="grid md:grid-cols-4 items-center gap-5">
                    <div class="col-span-2 md:col-span-1">
                        <input
                            type="text"
                            id="subject"
                            class="block w-full text-sm bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500"
                            placeholder="Seu Nome"
                            data-aos="zoom-in"
                            required
                        />
                    </div>
                    <div class="col-span-2">
                        <input
                            type="email"
                            id="email"
                            class="shadow-sm bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full"
                            placeholder="nome@webgenie.com.br"
                            data-aos="zoom-in"
                            required
                        />
                    </div>
                    <button
                        type="button"
                        class="col-span-2 md:col-span-1 py-2 inline-block rounded border-2 border-neutral-50 px-6 text-xs font-medium uppercase leading-normal text-neutral-50 transition duration-150 ease-in-out hover:border-neutral-100 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-neutral-100 focus:border-neutral-100 focus:text-neutral-100 focus:outline-none focus:ring-0 active:border-neutral-200 active:text-neutral-200 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10"
                        data-aos="zoom-in"
                        data-te-ripple-init
                    >
                        Enviar
                    </button>
                </div>
            </form>
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
