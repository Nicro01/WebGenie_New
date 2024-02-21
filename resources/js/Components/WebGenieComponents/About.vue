<template>
    <div class="relative z-10 pt-10 flex max-lg:flex-col container mx-auto h-screen items-center bg-slate-100">
        <div
            class="max-lg:flex max-lg:flex-col max-w-8xl mx-auto grid md:grid-cols-2 grid-cols-1 md:gap-0"
        >
            <div data-aos="fade-down" class="col-span-1 self-center w-96 ml-20">
                <h3
                    class="select-none text-xl tracking-widest text-blue-400 font-light uppercase my-2"
                >
                    como se fosse mágica
                </h3>
                <h1 
                    class="select-none text-6xl font-bold my-5"
                >
                    Criamos 
                    <br>
                    o seu
                    <span class="uppercase text-blue-400">negócio</span>
                </h1>
                <p class="selection:bg-blue-400 selection:text-white text-lg" >
                    Desperte o seu potencial com <span class="text-blue-400">WebGenie!</span> 
                    <br>
                    Somos responsáveis pelo desenvolvimento de diversos clientes e empresas. Impulsionando negócios através da tecnologia em conjunto com o design, tornamos <span class="text-blue-400 uppercase">desejos</span> em <span class="text-blue-400 uppercase">realidade</span>.

                </p>
                <button class="select-none pushable mt-10" @click="handleClick">
                    <div class="front p-0 flex items-center font-semibold text-lg my-auto">
                        <img
                            src="https://i.postimg.cc/Gh7qqpDV/magic-lamp.png"
                            class="w-8 mx-4 inline invert"
                            alt=""
                        />
                        <span class="flex-1 mr-4">
                            Realize Meu Desejo
                        </span> 
                    </div>
                </button>
            </div>

            <div data-aos="fade-up" class="justify-self-center col-span-1">
                <svg
                    class="drop-shadow-xl"
                    id="eye"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 100 100"
                    width="700"
                    height="700"
                >
                    <image
                        xlink:href="https://svgshare.com/i/13GK.svg"
                        width="100%"
                        height="100%"
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

    data() {
        return {
            isMobile: false,
            showModal: false,
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
        handleClick() {
            document.body.classList.add("shake");

            setTimeout(() => {
                document.body.classList.remove("shake");

                this.showModal = true;
            }, 500);
        },
    },
};

document.addEventListener("mousemove", (e) => {
    const eye = document.getElementById("eye");
    const eyeRect = eye.getBoundingClientRect();

    const eyeCenterX = eyeRect.left + eyeRect.width / 2;
    const distanceX = e.clientX - eyeCenterX;

    const eyeCenterY = eyeRect.top + eyeRect.height / 2;
    const distanceY = e.clientY - eyeCenterY;

    const maxRotation = 30; // Ajuste o valor máximo de rotação conforme necessário
    const rotationX = (distanceX / eyeRect.width) * maxRotation;
    const rotationY = (distanceY / eyeRect.width) * maxRotation;

    eye.style.transform = `scaleX(-1) rotateY(${rotationX / 4}deg) rotateX(${
        rotationY / 4
    }deg)`;
});
</script>

<style scoped>
.glass {
    background: rgba(255, 255, 255, 0.46);
    border-radius: 16px;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(5.9px);
    -webkit-backdrop-filter: blur(5.9px);
}
.front {
    transition: transform 600ms cubic-bezier(0.3, 0.7, 0.4, 1);
}

.pushable:hover .front {
    transform: translateY(-6px);
    transition: transform 250ms cubic-bezier(0.3, 0.7, 0.4, 1.5);
}

.pushable:active .front {
    transform: translateY(-2px);
    transition: transform 34ms;
}

.pushable {
    background: hsl(38, 99%, 39%);
    border: none;
    border-radius: 12px;
    padding: 0;
    cursor: pointer;
}
.front {
    display: flex;
    padding: 5px 0px;
    border-radius: 12px;
    background: hsl(49, 87%, 49%);
    color: white;
    transform: translateY(-4px);
}

.pushable:focus:not(:focus-visible) {
    outline: none;
}
</style>
