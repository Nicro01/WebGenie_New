<template>
    <div class="container mx-auto select-none">
        <div class="flex flex-col items-center pb-10 pt-24 h-auto" id="about">
            <div
                class="glass p-5 mt-5 rounded-xl flex flex-col shadow-lg border-2 border-solid border-white shadow-slate-200"
                style="
                    background-image: url('https://i.postimg.cc/tCNcrywt/Design-sem-nome.png');
                    background-size: cover;
                    background-position: center;
                "
                data-aos="fade-up"
            >
                <h1
                    class="md:text-5xl text-2xl text-center font-bold text-gray-900"
                >
                    Criação de Websites
                </h1>
                <p
                    class="text-gray-700 mt-4 max-w-2xl text-base md:text-lg font-light leading-relaxed tracking-wide"
                >
                    Elaboração de páginas web personalizadas, desenhadas para
                    impulsionar a
                    <b class="font-extrabold">captação de clientes</b> para o
                    seu negócio.
                </p>
                <p
                    class="text-gray-700 mt-4 max-w-2xl text-base md:text-lg font-light leading-relaxed tracking-wide"
                >
                    Possuir um website deixou de ser um luxo para se tornar uma
                    necessidade. No entanto, contar com uma
                    <b class="font-extrabold">criação única</b>, que funcione
                    como um elo facilitador de interações comerciais entre sua
                    organização e os clientes, é um
                    <b class="font-extrabold">diferencial crítico</b> para
                    sobressair-se na concorrência.
                </p>
                <p
                    class="text-gray-700 mt-4 max-w-2xl text-base md:text-lg font-light leading-relaxed tracking-wide"
                >
                    Nossa proposta vai além da simples criação de páginas web.
                    Oferecemos criações sob medida, realizadas por
                    <b class="font-extrabold">especialistas</b>
                    dedicados a compreender suas exigências, propondo e
                    implementando soluções ótimas.
                </p>
                <p
                    class="text-gray-700 mt-4 max-w-2xl text-base md:text-lg font-light leading-relaxed tracking-wide"
                >
                    <b class="font-extrabold">Interatividade humanizada</b>:
                    esse é nosso principal objetivo na construção de uma ponte
                    entre seres humanos e sistemas digitais.
                </p>
                <p
                    class="text-gray-700 mt-4 max-w-2xl text-base md:text-lg font-light leading-relaxed tracking-wide"
                >
                    Com isso em mente, empregamos
                    <b class="font-extrabold">estratégias</b> e
                    <b class="font-extrabold">instrumentos</b> avançados para
                    assegurar que seu público-alvo desfrute de uma
                    <b class="font-extrabold">experiência excepcional</b> ao
                    visitar seu website, refletindo a essência e os princípios
                    da sua marca.
                </p>

                <a
                    href="https://w.app/XwyTQZ"
                    target="_blank"
                    type="button"
                    data-te-ripple-init
                    data-te-ripple-color="light"
                    class="inline-block text-center mt-10 rounded bg-primary px-6 pb-2 pt-2.5 text-base font-semibold leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]"
                >
                    Fazer Orçamento
                </a>
            </div>
            <div class="mt-10">
                Deslizar para Baixo
                <svg
                    class="animate-bounce w-6 h-6 mx-auto mt-4 cursor-pointer"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    v-scroll-to="'#processo'"
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
