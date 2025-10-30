# Site-perso_v3

Portfolio personnel 2025 de Théo Certa - Développeur Frontend Créatif

**Live**: [totocerta.dev](https://totocerta.dev) (à venir)
**Version**: 3.0
**Status**: En développement actif

## Vue d'ensemble

Site portfolio moderne avec animations 3D (Three.js), design bento et expériences interactives. Positionnement 2025-2026 : Frontend créatif + Outils IA.

## Stack Technique

### Frontend Core
- **React 18.3.1** - UI Library
- **TypeScript 5.9.3** - Language (strict mode)
- **Vite 5.4.21** - Build tool ultra-rapide

### 3D & Animations
- **Three.js 0.161.0** - Moteur 3D WebGL
- **@react-three/fiber 8.18.0** - React renderer pour Three.js
- **@react-three/drei 9.122.0** - Helpers 3D
- **Framer Motion 11.18.2** - Animations déclaratives

### Styling
- **TailwindCSS 3.4.18** - Framework CSS utility-first
- **PostCSS 8.5.6** - Transformations CSS

### Autres
- **React Icons 5.5.0** - Collection d'icônes
- **React Lottie 1.2.10** - Animations After Effects

Voir [.context/tech-stack.md](.context/tech-stack.md) pour la documentation complète.

## Installation

```bash
# Cloner le repo
git clone https://github.com/HollyTotoC/Site-perso_v3.git

# Installer les dépendances
npm install

# Lancer le dev server
npm run dev
```

## Scripts disponibles

```bash
npm run dev      # Serveur de développement (Vite)
npm run build    # Build de production avec type check
npm run lint     # Linting ESLint
npm run preview  # Preview du build
```

## Progression du Projet

### Phase 1 - Architecture 3D de base
**Status**: ✅ Terminée
- Terminal 3D interactif
- Responsive design
- Hooks audio personnalisés

### Phase 2 - Optimisations (À venir)
**Status**: En attente
- Performance 3D
- Lazy loading
- SEO

### Phase 3 - Contenu Moderne
**Status**: ✅ Terminée & Validée (100%)
**Durée**: 4h (incluant 3 itérations de corrections)

#### Réalisations
- Bio responsive (version courte mobile, longue desktop)
- JobBox simplifié avec gradient harmonisé (177→35 lignes)
- Bloc GitHub Activity avec animations hover
- Bloc Stats (6 clients, 14 projets, 3-4 actifs)
- Stack technologies étendue : 6 catégories, badges 3 couleurs
- Layout bento corrigé avec ordre exact des blocs
- Données externalisées (JSON)

#### Design System
- Palette orange harmonisée
- Glass-morphism élégant
- 3 couleurs de badges maximum
- Animations hover subtiles

Voir [.context/status/PHASE-3-contenu-moderne.md](.context/status/PHASE-3-contenu-moderne.md) pour les détails complets.

## Structure du Projet

```
/src
├── /components       # Composants React
│   ├── About.tsx    # Section About (layout bento)
│   ├── JobBox.tsx   # Bloc disponibilité
│   ├── Card.tsx     # Carte projet
│   └── ...
├── /hooks           # Custom React hooks
│   ├── useScrollScale.ts
│   ├── usePlaySound.ts
│   └── useScrollAudio.ts
├── /assets          # Assets statiques
│   ├── /images
│   ├── /lotties
│   └── current-project.json
└── App.tsx          # Composant principal
```

## Documentation

Toute la documentation du projet se trouve dans `.context/`:

- [Architecture](.context/architecture.md) - Décisions d'architecture
- [Code Map](.context/code-map.md) - Cartographie du code
- [Tech Stack](.context/tech-stack.md) - Stack technique détaillée
- [Phase 3](.context/status/PHASE-3-contenu-moderne.md) - Contenu moderne (terminé)

## Technologies Détaillées

### Frontend
React, TypeScript, JavaScript, HTML5, CSS3, TailwindCSS, Next.js, Vue.js, Bootstrap, Sass

### Creative & 3D
Three.js, Framer Motion

### IA & Automation
Claude Code, GitHub Copilot, ChatGPT, N8N

### Design & Gestion
Figma, Notion, Slack, Adobe Suite

### Backend
PHP, Node.js, MySQL

## Caractéristiques

- Design bento moderne et responsive
- Terminal 3D interactif avec Three.js
- Animations fluides avec Framer Motion
- TypeScript strict mode
- Glass-morphism et animations subtiles
- Optimisé pour les performances
- SEO-ready (à configurer)

## Contribution

Ce projet est un portfolio personnel. Les suggestions sont les bienvenues via les issues GitHub.

## Licence

MIT License - Voir [LICENSE](LICENSE) pour plus de détails.

## Contact

**Théo Certa** - Développeur Frontend Créatif
- Email: [totoc.contact@gmail.com](mailto:totoc.contact@gmail.com)
- LinkedIn: [theo-certa](https://www.linkedin.com/in/theo-certa/)
- GitHub: [@HollyTotoC](https://github.com/HollyTotoC)

---

Développé avec React, TypeScript, Three.js et beaucoup de café ☕
