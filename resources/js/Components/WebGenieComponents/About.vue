<template>
    <div class="container mx-auto select-none pt-32">
        <div class="max-w-8xl mx-auto grid md:grid-cols-2 grid-cols-1 md:gap-10">
            <div class="justify-self-center col-span-1">
                <svg class="drop-shadow-xl" id="eye" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="500" height="500">
                    <image xlink:href="https://svgshare.com/i/13GK.svg" width="100%" height="100%"/>
                </svg>                  
            </div>
            <div class="col-span-1 self-center">
                <h1 class="text-6xl font-bold my-5">Titulo</h1>
                <h3 class="text-xl tracking-widest text-blue-400 font-light uppercase my-2">Subtitulo</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit officiis voluptas, deleniti saepe voluptatibus rerum quo cumque? Praesentium, repellendus, impedit tempore accusantium, ad aut quibusdam ipsum repellat non enim iure!</p>
                <button>Realize meu desejo!</button>
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
        };
    },
    mounted() {
        AOS.init();
        initTE({
            Ripple,
        });
        this.isMobile = window.innerWidth < 768;
    },
};

document.addEventListener('mousemove', (e) => {
  const eye = document.getElementById('eye');
  const eyeRect = eye.getBoundingClientRect();
  
  const eyeCenterX = eyeRect.left + eyeRect.width / 2;
  const distanceX = e.clientX - eyeCenterX;

  const eyeCenterY = eyeRect.top + eyeRect.height / 2;
  const distanceY = e.clientY - eyeCenterY;

  const maxRotation = 30; // Ajuste o valor máximo de rotação conforme necessário
  const rotationX = (distanceX / eyeRect.width) * maxRotation;
  const rotationY = (distanceY / eyeRect.width) * maxRotation;

  eye.style.transform = ` rotateY(${rotationX/4}deg) rotateX(${rotationY/4}deg)`;
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
</style>
