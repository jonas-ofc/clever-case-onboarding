<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
    name: "OnboardingModal",
});

</script>
<template>
    <div class="onboarding-modal fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
        <div class="p-12 bg-clever-white shadow-lg w-auto">

            <div>
                <h2 class="text-3xl font-extralight mb-4">Ny og forbedret selvbetjening</h2>
                <p class="font-thin mb-8">
                    Vi har udviklet og opdateret din selvbetjening. Vi arbejder fortsat på de små detaljer, men det
                    vigtigste er på plads.
                </p>
            </div>

            <div class="flex border-t border-b border-clever-green-10 py-8 items-center justify-center mb-4 px-12 gap-4">
                <svg width="280" viewBox="0 0 322 194" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g filter="url(#filter0_d_1_2622)">
                        <mask id="path-1-inside-1_1_2622" fill="white">
                            <path
                                d="M36.0327 10.4484C36.0327 7.43933 38.472 5 41.4811 5H280.649C283.658 5 286.097 7.43933 286.097 10.4484V173.996C286.097 174.426 285.749 174.774 285.319 174.774H36.8111C36.3812 174.774 36.0327 174.426 36.0327 173.996V10.4484Z" />
                        </mask>
                        <path
                            d="M36.0327 10.4484C36.0327 7.43933 38.472 5 41.4811 5H280.649C283.658 5 286.097 7.43933 286.097 10.4484V173.996C286.097 174.426 285.749 174.774 285.319 174.774H36.8111C36.3812 174.774 36.0327 174.426 36.0327 173.996V10.4484Z"
                            stroke="#003732" stroke-width="2" mask="url(#path-1-inside-1_1_2622)" />
                        <rect x="42.968" y="15.0001" width="234.968" height="146.097" fill="white" stroke="#003732" />
                        <path d="M141.644 69.2654L154.681 81.9495L180.3 56.3802" stroke="#003732" />
                        <rect x="100.5" y="105.5" width="120" height="25" fill="#CCD7D6" stroke="#003732" />
                        <path
                            d="M229.181 134.816L229.551 134.479C229.181 134.816 229.181 134.816 229.181 134.816L229.181 134.816L229.182 134.817L229.187 134.822L229.205 134.842L229.275 134.919L229.546 135.218C229.781 135.477 230.121 135.853 230.541 136.32C231.38 137.252 232.539 138.546 233.816 139.988C236.371 142.875 239.389 146.349 241.268 148.729C242.292 150.091 241.944 151.55 240.917 152.327C239.949 153.06 238.33 152.802 237.198 151.48C235.506 149.503 232.498 146.08 229.914 143.153C228.622 141.689 227.436 140.348 226.573 139.374C226.141 138.886 225.79 138.491 225.547 138.217L225.267 137.901L225.194 137.818L225.175 137.797L225.17 137.792L225.169 137.791L225.169 137.79C225.169 137.79 225.169 137.79 224.795 138.122L225.169 137.79L224.678 137.237L224.347 137.899L218.331 149.942L208.87 113.112L239.718 131.351L229.426 133.995L228.622 134.202L229.181 134.816Z"
                            fill="white" stroke="#003732" />
                        <mask id="path-6-inside-2_1_2622" fill="white">
                            <path
                                d="M6 173.938C6 173.723 6.17424 173.549 6.38917 173.549H314.514C314.729 173.549 314.903 173.723 314.903 173.938V179.065H6V173.938Z" />
                        </mask>
                        <path
                            d="M5 173.938C5 173.171 5.62195 172.549 6.38917 172.549H314.514C315.281 172.549 315.903 173.171 315.903 173.938L313.903 174.549H7L5 173.938ZM314.903 179.065H6H314.903ZM5 179.065V173.938C5 173.171 5.62195 172.549 6.38917 172.549L7 174.549V179.065H5ZM314.514 172.549C315.281 172.549 315.903 173.171 315.903 173.938V179.065H313.903V174.549L314.514 172.549Z"
                            fill="#003732" mask="url(#path-6-inside-2_1_2622)" />
                        <path
                            d="M38.4337 185.613C28.1356 185.613 17.9424 183.556 8.4519 179.565H312.223L310.032 180.411C301.138 183.849 291.685 185.613 282.149 185.613H38.4337Z"
                            stroke="#003732" />
                        <path
                            d="M139.613 177.338C137.626 177.338 135.97 175.924 135.595 174.048H185.614C185.239 175.924 183.583 177.338 181.596 177.338H139.613Z"
                            stroke="#003732" />
                    </g>
                    <defs>
                        <filter id="filter0_d_1_2622" x="0.225505" y="0.76537" width="320.452" height="192.662"
                            filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                            <feFlood flood-opacity="0" result="BackgroundImageFix" />
                            <feColorMatrix in="SourceAlpha" type="matrix"
                                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                            <feOffset dy="1.53987" />
                            <feGaussianBlur stdDeviation="2.88725" />
                            <feComposite in2="hardAlpha" operator="out" />
                            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0" />
                            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1_2622" />
                            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1_2622" result="shape" />
                        </filter>
                    </defs>
                </svg>

                <div class="w-80">
                    <h2 class="text-lg font-thin mb-2">Bedre brugeroplevelse</h2>
                    <p class=" font-thin mb-2">
                        Find hurtigt og nemt vej, til det du har brug for i selvbetjeningen.</p>

                    <ul class="text-s font-thin list-disc list-outside pl-4">
                        <li>Mød et opdateret design, der understøtter funktioner</li>
                        <li>Find nemt rundt med færre menupunkter</li>
                        <li>Naviger hurtigere med simpelt overblik</li>
                    </ul>
                </div>
            </div>
            <div class="w-full flex items-center justify-center mb-12"><svg width="36" height="8" viewBox="0 0 36 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M21.99 4C21.99 6.20914 20.2036 8 18 8C15.7964 8 14.01 6.20914 14.01 4C14.01 1.79086 15.7964 0 18 0C20.2036 0 21.99 1.79086 21.99 4Z"
                        fill="#CCD7D6" />
                    <path
                        d="M35.9551 4C35.9551 6.20914 34.1687 8 31.9651 8C29.7615 8 27.9751 6.20914 27.9751 4C27.9751 1.79086 29.7615 0 31.9651 0C34.1687 0 35.9551 1.79086 35.9551 4Z"
                        fill="#CCD7D6" />
                    <path
                        d="M8.02497 4C8.02497 6.20914 6.23858 8 4.03495 8C1.83132 8 0.0449219 6.20914 0.0449219 4C0.0449219 1.79086 1.83132 0 4.03495 0C6.23858 0 8.02497 1.79086 8.02497 4Z"
                        fill="#003732" />
                </svg>
            </div>

            <div class="flex justify-between">
                <button class="underline">Spring over</button>
                <button
                    class="py-3 px-5 bg-clever-green-100 text-clever-white w-fit flex justify-center items-center gap-2 font-thin">Kom
                    igang <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path d="M3.14997 12.15L20.85 12.15" stroke="white" stroke-miterlimit="10" />
                        <path d="M13.65 4.94997L20.85 12.15L13.65 19.35" stroke="white" stroke-miterlimit="10" />
                    </svg>
                </button>
            </div>
        </div>
    </div>
</template>