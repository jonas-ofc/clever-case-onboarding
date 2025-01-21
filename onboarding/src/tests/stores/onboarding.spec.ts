import { describe, it, expect, beforeEach } from 'vitest';
import { setActivePinia, createPinia } from 'pinia';
import { useOnboardingStore } from '../../stores/onboarding';

describe('Onboarding Store', () => {
    beforeEach(() => {
        setActivePinia(createPinia());
    });

    it('should initialize with correct default state', () => {
        const store = useOnboardingStore();
        expect(store.onboardingSeen).toBe(false);
        expect(store.currentStep).toBe(0);
    });


    it('should set onboarding as seen', () => {
        const store = useOnboardingStore();
        store.setOnboardingSeen(true);
        expect(store.onboardingSeen).toBe(true);
    });

    it('should reset onboarding', () => {
        const store = useOnboardingStore();
        store.setOnboardingSeen(false);
        expect(store.onboardingSeen).toBe(false);
    });

    it('should default currentStep to 0', () => {
        const store = useOnboardingStore();
        expect(store.currentStep).toBe(0);
    });


    it('should go to the next step', () => {
        const store = useOnboardingStore();
        store.nextStep();
        expect(store.currentStep).toBe(1);

        store.nextStep();
        expect(store.currentStep).toBe(2);

        store.nextStep();
        expect(store.currentStep).toBe(2);
        expect(store.onboardingSeen).toBe(true);
    });

    it('should go to the previous step', () => {
        const store = useOnboardingStore();
        store.nextStep();
        expect(store.currentStep).toBe(1);

        store.previousStep();
        expect(store.currentStep).toBe(0);

        // Sikrer, at `currentStep` ikke går under 0
        store.previousStep();
        expect(store.currentStep).toBe(0);
    });
});


