---
description: Contains guidelines on how this project is organized. Use these guidelines when creating a new component, or modifying an existing one, adding new logic (hooks, helpers, etc.), or when refactoring.
---

# Project structure & coding guidelines

This project uses **React 19** and **strict TypeScript**. Adhere strictly to the architectural hierarchy, file naming conventions, component structure, and boundary rules outlined below whenever generating or modifying code.

---

## 1. Top-level directory organization (`src/`)

The application follows a strictly **feature-based architecture**.

| Folder | Purpose |
| :--- | :--- |
| `src/assets/` | Static assets such as images, fonts, and icons. |
| `src/components/` | Shared components: primitives and compositions built from the design system, used by more than one page. Organized in category folders. See `src/components/CLAUDE.md`. |
| `src/lib/` | Shared logic, utilities, and integrations across features. |
| `src/pages/` | Contains all the pages of the website. Each subfolder maps to a website page. |
| `src/storybook/` | Common utilities, wrappers, and decorators for Storybook stories. |
| `src/tokens/` | Contains CSS files defining styling tokens for this website. |

---

## 2. Cross-feature import boundaries

Strict import boundary rules apply across the feature-based structure to prevent tightly coupled code:

* **Components (`src/pages/`): FORBIDDEN.** Cross-page imports at the component level are strictly prohibited. A component inside `src/pages/page-a/` **must never** directly import a component from `src/pages/page-b/`. If a component needs to be used across multiple features, it must first be promoted to `src/components/<category>/`.
* **Libraries and shared components (`src/lib/`, `src/components/`): ALLOWED.** Cross-feature imports are permitted at these levels for shared utilities, components, or cross-cutting concerns.

---

## 3. Naming conventions

* **PascalCase:** Reserved **exclusively** for React Component folders, their main component/story files, and component test files (e.g., `Registration/Registration.tsx`, `Registration.test.tsx`).
* **kebab-case:** Used for **all other folders and files**, including sub-features, helper logic, hooks, utilities, and logic test files (e.g., `custom-hook.ts`, `custom-hook.test.ts`).

---

## 4. Component anatomy

A component folder must be named in PascalCase after the component it contains.

### Standard files in a component folder

1. `ComponentName.tsx` – Main component file.
2. `ComponentName.test.tsx` – Component unit test file.
3. `ComponentName.stories.tsx` – Storybook file.
4. `ComponentName.module.css` *(Optional)* – CSS module for styling. **Do not create or modify `.module.d.ts` files manually** (they are auto-generated).
5. `index.ts` – Barrel export file.
6. `kebab-case-helper.ts` *(Optional)* – Scoped logic, hooks, or helpers used solely by this component.

### Component implementation rules

* **Function Declarations:** Always export components using standard function declarations (`export default function MyComponent()`).
* **Strict TypeScript & Types Over Interfaces:** Avoid `any` under all circumstances. Explicitly type component props, function returns, and hook definitions. **Always use `type` aliases; never use `interface`.**
* **CSS Modules:** Import styles strictly as `import styles from "./ComponentName.module.css";`.

*Example:* `ComponentName.tsx`

```tsx
import styles from "./ComponentName.module.css";

export default function ComponentName({ title, isActive = false }: ComponentNameProps) {
  return (
    <div className={styles.container}>
      <h1 className={isActive ? styles.active : undefined}>{title}</h1>
    </div>
  );
}

export type ComponentNameProps = {
  title: string;
  isActive?: boolean;
};
```

*Example:* `index.ts`
Always use standard barrel exports so internal types and the default component are easily accessible:
```ts
export { default } from "./ComponentName";
export * from "./ComponentName";
```

Stories are co-located in the same folder, named after the component. Stories use CSF3 and import their types from `@storybook/react-vite`.

---

## 5. Scoped logic, custom hooks & unit tests

If a React component requires complex helper functions, data transformers, or custom hooks that are scoped solely to that component:
* Place them inside the component's folder in a separate file.
* Use **kebab-case** for the filename.
* If a file is created exclusively for a hook, **omit the `use` prefix** from the filename (e.g., name the file `auth-handler.ts` or `pagination-logic.ts`, rather than `useAuthHandler.ts`).
* **Testing:** Write accompanying unit tests in a file named identically to the logic file, appending `.test.ts` (e.g., `custom-hook.test.ts`).

---

## 6. Component & logic promotion hierarchy

Components and logic modules follow a strict principle of **co-location** until shared:
1. **Nested Scope:** If a sub-component or helper is used *only* by one component, and it warrants a folder of its own (section 7), that folder must be nested directly inside that parent component's folder.
2. **Promotion:** The moment a component or helper is needed by a second consumer, promote it up the directory hierarchy to the **minimum common level**:
   * Shared within the same page -> Move up to `src/pages/<page>/components/`.
   * Shared across multiple pages -> Promote to `src/components/<category>/`, or to `src/lib/<category>` for logic. Remember that cross-page component imports are forbidden; promotion is strictly required before sharing UI.
   * `src/components/<category>/` is the last rung, and it is not reached by sharing alone.

---

## 7. Inline vs. folder for a single-consumer component

A component used by exactly one parent doesn't automatically get its own folder. Write it as a plain function in the parent's file first, and only split it into a `SubComponent/` folder (section 4 anatomy) when it needs at least one of these, with real content:

* **Multiple meaningful stories** — more than a lone `Default`, each demonstrating a distinct state or prop combination. A subcomponent with only one state worth showing doesn't clear this bar.
* **A scoped kebab-case helper** — `form.ts`, `*-props.ts`, or similar logic that section 5 requires to sit beside the component file.

If none of the above applies, keep the subcomponent as a plain function inside the parent's `.tsx` file — a `SubComponent/` folder holding only `SubComponent.tsx` + `index.ts` is not a valid end state.
