# Changelog

Toutes les modifications importantes de ce projet seront documentées dans ce fichier.

Le format est basé sur [Keep a Changelog](https://keepachangelog.com/fr/1.0.0/),
et ce projet adhère au [Semantic Versioning](https://semver.org/lang/fr/).

## [Non publié]

### Modifié - 2025-10-29

#### Mise à jour majeure des dépendances (npm update)

**Dépendances principales:**
- TypeScript: `5.2.2` → `5.9.3` (7 versions mineures)
  - Nouvelles features: Inferred Type Predicates, Import Attributes
  - Performance de type checking améliorée
  - Compilation vérifiée: SUCCÈS
- Vite: `5.0.8` → `5.4.21` (13 versions)
  - HMR amélioré
  - Correctifs de sécurité importants
  - Build vérifié: SUCCÈS (7.14s)
- React: `18.2.0` → `18.3.1`
- React DOM: `18.2.0` → `18.3.1`
- @react-three/drei: `9.97.5` → `9.122.0` (+25 versions)
  - Nouveaux composants 3D disponibles
  - Améliorations de performance
- @react-three/fiber: `8.15.16` → `8.18.0`
- Framer Motion: `11.0.3` → `11.18.2` (+18 versions)
  - Nouvelles variantes et gestures
  - Performance améliorée
- React Icons: `5.0.1` → `5.5.0`
- React Intersection Observer: `9.8.0` → `9.16.0`
- React Lottie: `1.2.4` → `1.2.10`

**Dépendances de développement:**
- ESLint: `8.55.0` → `8.57.1` (dernière version v8)
- @typescript-eslint/eslint-plugin: `6.14.0` → `6.21.0` (dernière v6)
- @typescript-eslint/parser: `6.14.0` → `6.21.0` (dernière v6)
- @vitejs/plugin-react: `4.2.1` → `4.7.0`
- TailwindCSS: `3.4.1` → `3.4.18` (+17 patches)
- PostCSS: `8.4.33` → `8.5.6`
- Autoprefixer: `10.4.17` → `10.4.21`
- @types/react: `18.2.43` → `18.3.26`
- @types/react-dom: `18.2.17` → `18.3.7`
- eslint-plugin-react-hooks: `4.6.0` → `4.6.2`
- eslint-plugin-react-refresh: `0.4.5` → `0.4.24`

**Tests de validation:**
- Compilation TypeScript: SUCCÈS
- Build de production: SUCCÈS
- Linting: 4 warnings ESLint (react-hooks/exhaustive-deps)
  - Card.tsx: 1 warning sur useEffect
  - useScrollAudio.ts: 3 warnings sur refs et dependencies

**Documentation mise à jour:**
- `.context/tech-stack.md`: Toutes les versions mises à jour
- `.context/documentation-status.md`: Section post-update ajoutée
- `.context/architecture.md`: Notes sur TypeScript 5.9 et Vite 5.4
- `CHANGELOG.md`: Créé pour tracer les changements

**Points d'attention:**
- Bundle size: 1.58MB (considérer code splitting)
- ESLint v9 disponible (nécessite migration flat config)
- @typescript-eslint v7 disponible (considérer migration future)
- 4 warnings ESLint à corriger (non bloquants)

**Actions recommandées:**
1. Tester les animations Framer Motion existantes
2. Vérifier les scènes 3D @react-three/drei
3. Explorer les nouvelles features TypeScript 5.9
4. Corriger les 4 warnings ESLint
5. Considérer code splitting pour réduire bundle size

## Historique Antérieur

Les commits précédents (avant ce changelog):
- `cddd0ca`: terminal +3d + start responsive
- `66d7c9e`: blu fix + sound design
- `d24cfc7`: audio logic et clean
- `c7a058c`: maj portfolio
- `843ed5e`: testimonials component

---

**Note**: Ce CHANGELOG a été créé le 2025-10-29. Les versions futures seront documentées dans ce fichier selon les conventions Keep a Changelog.
