# clever-case-onboarding

Clever Case Onboarding

Beskrivelse

Dette projekt er en onboarding-applikation udviklet som en del af en case study. Applikationen er bygget i Vue 3 ved brug af Pinia til state management, Tailwind CSS til styling, TypeScript til statisk typning og Vitest til test. Projektet inkluderer en onboarding-modal med tre trin, som guider brugeren gennem nye funktioner i platformen.

Installation

Følg disse trin for at komme i gang med projektet lokalt:

Klon repository:

git clone https://github.com/jonas-ofc/clever-case-onboarding
cd clever-case-onboarding
cd onboarding

Installer afhængigheder:

npm install

Start udviklingsserveren:

npm run dev

Byg projektet til produktion:

npm run build

Kør tests:

npm run test

Teknologier

Vue 3: Frontend framework.

Pinia: Moderne state management.

Tailwind CSS: Utility-first CSS framework.

TypeScript: Statisk typning for bedre udvikleroplevelse.

Vitest: Testing framework.

Vite: Bygger og serverer applikationen.

Projektstruktur

Projektet følger en simpel mappestruktur:

clever-case-onboarding/
|-- src/
|   |-- assets/           # Billeder og SVG'er
|   |-- components/       # Genanvendelige Vue-komponenter
|   |-- interfaces/       # TypeScript interfaces
|   |-- stores/           # Pinia stores
|   |-- views/            # Sider og hovedkomponenter
|   |-- App.vue           # Rodkomponenten
|   |-- main.ts           # Applikationens indgangspunkt
|-- tests/                # Testfiler
|   |-- stores/           # Store tests
|-- public/               # Offentligt tilgængelige filer
|-- package.json          # Projektets afhængigheder og scripts
|-- README.md             # Dokumentation

Funktioner

Onboarding Modal:

Tre trin med unikke overskrifter, beskrivelser og bullet points.

Navigation mellem trin via knapper som "Næste" og "Forrige".

Mulighed for at springe onboarding over med "Spring over".

Persistent Data:

Brugerens onboarding-status gemmes i sessionStorage ved hjælp af Pinia-plugin.

Scripts

npm run dev: Starter udviklingsserveren.

npm run build: Bygger applikationen til produktion.

npm run test: Kører tests med Vitest.

Tests

Tests er skrevet ved hjælp af Vitest og dækker:

Pinia stores (fx onboarding state og actions).

Komponentlogik (fx navigation mellem steps i onboarding-modal).

DOM-validering (fx korrekt visning af trin).

Eksempel på test:

import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import OnboardingModal from '@/components/OnboardingModal.vue';

describe('OnboardingModal', () => {
  it('renders first step correctly', () => {
    const wrapper = mount(OnboardingModal);
    expect(wrapper.text()).toContain('Bedre brugeroplevelse');
  });
});

Styling

Styling er implementeret med Tailwind CSS, som giver et hurtigt og fleksibelt designworkflow.

Eksempel på styling:

<div class="w-4 h-4 rounded-full bg-clever-green-100 mx-2"></div>

Bidrag

Hvis du ønsker at bidrage:

Fork repository.

Opret en ny branch for din feature:

git checkout -b feature/your-feature

Commit dine ændringer:

git commit -m "Add your feature"

Push din branch:

git push origin feature/your-feature

Opret en pull request.