<template>
    <nav
        class="flex-no-wrap relative flex w-full items-center justify-between lg:flex-wrap lg:justify-start lg:py-4"
    >
        <div
            class="flex w-full flex-wrap items-center justify-between md:px-3 z-10"
        >
            <!-- Hamburger button for mobile view -->
            <button
                class="block border-0 bg-transparent mt-5 md:mt-0 px-2 text-neutral-900 hover:no-underline hover:shadow-none focus:no-underline focus:shadow-none focus:outline-none focus:ring-0 lg:hidden"
                type="button"
                data-te-collapse-init
                data-te-target="#navbarSupportedContent1"
                aria-controls="navbarSupportedContent1"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
                <!-- Hamburger icon -->
                <span class="[&>svg]:w-7">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        class="h-7 w-7"
                    >
                        <path
                            fill-rule="evenodd"
                            d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z"
                            clip-rule="evenodd"
                        />
                    </svg>
                </span>
            </button>

            <!-- Collapsible navigation container -->
            <div
                class="!visible hidden flex-grow basis-[100%] items-center lg:!flex lg:basis-auto"
                id="navbarSupportedContent1"
                data-te-collapse-item
            >
                <!-- Logo -->
                <a
                    class="mb-4 ml-2 mr-5 mt-3 flex items-center text-neutral-900 hover:text-neutral-900 focus:text-neutral-900 lg:mb-0 lg:mt-0"
                    href="#"
                >
                    <img
                        src="https://i.postimg.cc/1ttNY4wF/Web-Genie-Logo.png"
                        style="height: 45px"
                        alt="TE Logo"
                        loading="lazy"
                    />
                </a>
                <!-- Left navigation links -->
                <ul
                    class="list-style-none mr-auto flex flex-col pl-0 lg:flex-row"
                    data-te-navbar-nav-ref
                >
                    <li class="mb-4 lg:mb-0 lg:pr-2" data-te-nav-item-ref>
                        <!-- Dashboard link -->
                        <a
                            class="text-neutral-500 transition duration-200 hover:text-neutral-700 hover:ease-in-out focus:text-neutral-700 disabled:text-black/30 motion-reduce:transition-none"
                            href="#"
                            data-te-nav-link-ref
                            v-scroll-to="'#about'"
                            >Criação de Sites</a
                        >
                    </li>
                    <!-- Team link -->
                    <li class="mb-4 lg:mb-0 lg:pr-2" data-te-nav-item-ref>
                        <a
                            class="text-neutral-500 transition duration-200 hover:text-neutral-700 hover:ease-in-out focus:text-neutral-700 disabled:text-black/30 motion-reduce:transition-none"
                            href="#"
                            data-te-nav-link-ref
                            v-scroll-to="'#processo'"
                            >Princípios</a
                        >
                    </li>
                    <!-- Projects link -->
                    <li class="mb-4 lg:mb-0 lg:pr-2" data-te-nav-item-ref>
                        <a
                            class="text-neutral-500 transition duration-200 hover:text-neutral-700 hover:ease-in-out focus:text-neutral-700 disabled:text-black/30 motion-reduce:transition-none"
                            href="#"
                            data-te-nav-link-ref
                            v-scroll-to="'#servicos'"
                            >Passo a Passo</a
                        >
                    </li>
                    <li class="mb-4 lg:mb-0 lg:pr-2" data-te-nav-item-ref>
                        <a
                            class="text-neutral-500 transition duration-200 hover:text-neutral-700 hover:ease-in-out focus:text-neutral-700 disabled:text-black/30 motion-reduce:transition-none"
                            href="#"
                            data-te-nav-link-ref
                            v-scroll-to="'#projects'"
                            >Projetos</a
                        >
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<script>
import { Collapse, Dropdown, initTE } from "tw-elements";

initTE({ Collapse, Dropdown });
</script>
