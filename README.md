# Clever Case Onboarding

## Beskrivelse
Dette projekt er en onboarding-applikation udviklet som en del af en case study. Applikationen er bygget i Vue 3 ved brug af Pinia til state management, Tailwind CSS til styling, TypeScript til statisk typning og Vitest til test. Projektet inkluderer en onboarding-modal med tre trin, som guider brugeren gennem nye funktioner i platformen.

## Installation
Følg disse trin for at komme i gang med projektet lokalt:

1. Klon repository:
   ```bash
   git clone https://github.com/jonas-ofc/clever-case-onboarding
   cd clever-case-onboarding
   cd onboarding
   ```

2. Installer afhængigheder:
   ```bash
   npm install
   ```

3. Start udviklingsserveren:
   ```bash
   npm run dev
   ```

4. Byg projektet til produktion:
   ```bash
   npm run build
   ```

5. Kør tests:
   ```bash
   npm run test
   ```

## Teknologier
- **Vue 3**: Frontend framework.
- **Pinia**: Moderne state management.
- **Tailwind CSS**: Utility-first CSS framework.
- **TypeScript**: Statisk typning for bedre udvikleroplevelse.
- **Vitest**: Testing framework.
- **Vite**: Bygger og serverer applikationen.

## Projektstruktur
Projektet følger en simpel mappestruktur:

```
onboarding/
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
```

## Funktioner
- **Onboarding Modal**:
  - Tre trin med unikke overskrifter, beskrivelser og bullet points.
  - Navigation mellem trin via knapper som "Næste" og "Forrige".
  - Mulighed for at springe onboarding over med "Spring over".
- **Login Funktion**:
  - Bruger kan logge ind med e-mail og adgangskode.

- **Persistent Data**:
  - Brugerens onboarding-status gemmes i `localStorage` ved hjælp af Pinia-plugin.
  - Login-status gemmes i `sessionStorage` for vedvarende session.

## Scripts
- `npm run dev`: Starter udviklingsserveren.
- `npm run build`: Bygger applikationen til produktion.
- `npm run test`: Kører tests med Vitest.

## Tests
Tests er skrevet ved hjælp af Vitest

## Styling
Styling er implementeret med Tailwind CSS, som giver et hurtigt og fleksibelt designworkflow.
