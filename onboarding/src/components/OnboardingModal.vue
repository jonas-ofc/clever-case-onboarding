<script lang="ts">
import { defineComponent, computed, reactive, onMounted } from "vue";
import { useOnboardingStore } from "../stores/onboarding";
import StepOneSvg from "../assets/svgs/step-one.svg";
import StepTwoSvg from "../assets/svgs/step-two.svg";
import StepThreeSvg from "../assets/svgs/step-three.svg";
import { fetchSteps } from "@/services/stepsService";
import type { Step } from "@/interfaces/interfaces";

export default defineComponent({
  name: "OnboardingModal",
  setup() {
    const store = useOnboardingStore();

    const data = reactive({
      steps: [] as Step[],
    });

    const handleSkip = () => {
      store.setOnboardingSeen(true);
    };

    const currentStep = computed((): Step => {
      return data.steps[store.currentStep];
    });

    const currentStepSvg = computed(() => {
      if (store.currentStep === 0) return StepOneSvg;
      if (store.currentStep === 1) return StepTwoSvg;
      if (store.currentStep === 2) return StepThreeSvg;
      return null;
    });

    onMounted(async () => {
      data.steps = await fetchSteps();
    });

    return {
      store,
      handleSkip,
      currentStep,
      currentStepSvg,
    };
  },
});
</script>
<template>
  <div
    class="onboarding-modal fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
  >
    <div class="p-12 bg-clever-white shadow-lg w-auto">
      <div>
        <h2 class="text-3xl font-extralight mb-4">
          Ny og forbedret selvbetjening
        </h2>
        <p class="font-thin mb-8">
          Vi har udviklet og opdateret din selvbetjening. Vi arbejder fortsat på
          de små detaljer, men det vigtigste er på plads.
        </p>
      </div>

      <div
        class="flex border-t border-b border-clever-green-10 py-8 items-center justify-center mb-4 px-12 gap-12"
      >
        <!-- SVG -->
        <component :is="currentStepSvg" class="w-fit" />

        <div class="w-80">
          <h2 class="text-lg font-thin mb-2">{{ currentStep?.title }}</h2>
          <p class="font-thin mb-2">
            {{ currentStep?.description }}
          </p>

          <ul class="text-s font-thin list-disc list-outside pl-4">
            <li
              v-for="(bulletText, index) in currentStep?.bullets"
              :key="index"
            >
              {{ bulletText }}
            </li>
          </ul>
        </div>
      </div>
      <div class="w-full flex items-center justify-center mb-12">
        <div
          class="w-2 h-2 rounded-full mx-1"
          :class="
            store.currentStep === 0
              ? 'bg-clever-green-100'
              : 'bg-clever-green-20'
          "
        ></div>
        <div
          class="w-2 h-2 rounded-full mx-1"
          :class="
            store.currentStep === 1
              ? 'bg-clever-green-100'
              : 'bg-clever-green-20'
          "
        ></div>
        <div
          class="w-2 h-2 rounded-full mx-1"
          :class="
            store.currentStep === 2
              ? 'bg-clever-green-100'
              : 'bg-clever-green-20'
          "
        ></div>
      </div>

      <div class="flex justify-between">
        <button
          v-if="store.currentStep <= 1"
          class="underline"
          @click="handleSkip"
        >
          Spring over
        </button>
        <button
          v-if="store.currentStep == 0 || store.currentStep == 2"
          @click="store.nextStep"
          class="py-3 px-5 bg-clever-green-100 text-clever-white w-fit flex justify-center items-center gap-2 font-thin ml-auto"
        >
          Kom igang
          <svg
            v-if="store.currentStep == 0"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M3.14997 12.15L20.85 12.15"
              stroke="white"
              stroke-miterlimit="10"
            />
            <path
              d="M13.65 4.94997L20.85 12.15L13.65 19.35"
              stroke="white"
              stroke-miterlimit="10"
            />
          </svg>
        </button>

        <div v-if="store.currentStep > 0" class="flex gap-2">
          <button
            v-if="store.currentStep == 1"
            @click="store.previousStep"
            class="py-3 px-5 bg-clever-green-100 text-clever-white w-fit flex justify-center items-center gap-2 font-thin"
          >
            <svg
              class="scale-x-[-1]"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3.14997 12.15L20.85 12.15"
                stroke="white"
                stroke-miterlimit="10"
              />
              <path
                d="M13.65 4.94997L20.85 12.15L13.65 19.35"
                stroke="white"
                stroke-miterlimit="10"
              />
            </svg>
            Forrige
          </button>
          <button
            v-if="store.currentStep == 1"
            @click="store.nextStep"
            class="py-3 px-5 bg-clever-green-100 text-clever-white w-fit flex justify-center items-center gap-2 font-thin"
          >
            Næste
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3.14997 12.15L20.85 12.15"
                stroke="white"
                stroke-miterlimit="10"
              />
              <path
                d="M13.65 4.94997L20.85 12.15L13.65 19.35"
                stroke="white"
                stroke-miterlimit="10"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
