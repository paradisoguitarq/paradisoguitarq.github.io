---
description: Specifies the code conventions of TypeScript files
paths:
- '**/*.{ts,tsx}'
---

## Syntax conventions

### Ternary expressions

If a ternary becomes deeply nested or hard to read, consider extracting a function instead.

**✅ Good (extracted function for complex logic):**
```ts
function getLabel(user: User): string {
  if (user.isAdmin)
    return "Admin";
  
  if (user.isGuest)
    return "Guest";
  
  return "User";
}

const label = getLabel(user);
```

**⚠️ Consider extracting (nested ternary — acceptable only when simple and the surrounding context is already simple):**
```ts
const label = user.isAdmin
  ? "Admin"
  : user.isGuest
    ? "Guest"
    : "User";
```

### Early returns, breaks, and continues

Prefer returning, breaking, or continuing early when possible. This reduces nesting and improves code readability.

When using early exit statements, follow these syntactic rules — **only when the entire statement fits on one line**:
- Omit curly braces
- Place the return/break/continue on the next line

**✅ Good:**
```ts
if (!user.isAdmin)
  return;

if (value === null)
  continue;

if (!isValid)
  break;
```

**❌ Bad (curly braces):**
```ts
if (!user.isAdmin) {
  return;
}
```

**❌ Bad (statement on same line):**
```ts
if (!user.isAdmin) return;
```

**❌ Bad (return value spans multiple lines):**
```ts
if (condition)
  return () => {
    // some long function
  };
```

## Exports and visibility

Export a symbol only when something outside its module actually consumes it. **Never widen visibility to make a test reach it.** An `export` is a contract with the rest of the codebase; a test is not a consumer, and a symbol exported for one pins an implementation detail that should have stayed free to change.

Cover an internal helper through the exported function that calls it. The assertions cost little more and they exercise the behaviour the app actually depends on.

**❌ Bad — `toTrend` is a step inside `toLeaderboard`, exported only so a test can call it:**
```ts
// data.ts
export function toTrend(entry: DbLeaderboardEntry): RankTrend { ... }

// data.test.ts
expect(toTrend({ rank: 1, previous_rank: 3 })).toBe("up");
```

**✅ Good — the helper stays private; its behaviour is asserted through the public entry point:**
```ts
// data.ts
function toTrend(entry: DbLeaderboardEntry): RankTrend { ... }

// data.test.ts
const leaderboard = toLeaderboard([makeEntry("a", 1, 3)], members);
expect(leaderboard[0].trend).toBe("up");
```

The same holds for types: one that only appears in an unexported function's signature stays unexported (`LeftSectionProps` in `Header.tsx`, next to an exported `HeaderProps`).

If a helper is genuinely hard to reach through the public surface, read it as a design signal — usually the calling function is doing too much — not as grounds to export.

**The exception** is a symbol another rule designates as its module's public vocabulary, which stays exported and directly tested even when only one consumer exists today: the `to{Entity}` mappers `data.ts` is required to expose (`.claude/rules/data.md`) are the case that comes up.

## Invariant enforcement

Validate preconditions and fail fast rather than silently producing wrong results from bad input. `useMe` in `@lib/user/data`, which throws when there is no signed-in user instead of returning `null`, is the pattern to follow.

## Comments

Use comments only to explain *why* something was done: a design decision, a non-obvious constraint, a workaround for an external limitation. If *what* the code does isn't obvious, extract a function with a meaningful name instead of narrating it.

A function split into sections by descriptive comments is the clearest case: those sections should be named functions.

## JSDoc comments

Don't write JSDocs by default. Only add them when you are explicitly told to.

## Type declarations

Always use `type` instead of `interface`, unless we need to merge declarations, which is what `interface` is for.
This keeps a single, consistent syntax for all type definitions.

## Inline type definitions

Avoid inline object type definitions in function signatures. Extract them to a named `type`. Function types and computed types (e.g., `Omit<...>`) are fine inline.

**✅ Good:**
```ts
type UserData = {
  firstName: string;
  lastName: string;
  nickname?: string;
};

function saveUser(uid: string, data: UserData): Promise<void> { ... }
```

**❌ Bad:**
```ts
function saveUser(
  uid: string,
  data: { firstName: string; lastName: string; nickname?: string },
): Promise<void> { ... }
```

## Intermediate variables

Avoid passing the result of a function call directly as an argument to another function. Assign it to a variable first — this improves debuggability (you can inspect the value in a breakpoint) and readability.

**✅ Good:**
```ts
const snap = await getDoc(ref);
const data = snap.data() as User;
return data;
```

**❌ Bad:**
```ts
return (await getDoc(ref)).data() as User;
```

## Order

The order of code elements should be:

1. Imports
2. Exported React components (if applicable)
3. Constants
4. Functions or other React components
5. Types


**✅ Example:**
```ts
import type { ReactNode } from "react";
// Other imports

export default function Button({
  // props
}: ButtonProps) {
  // Implementation
}

const SIZE = 42;

function getSpinnerColor(variant: ButtonVariant, isDisabled: boolean): SpinnerColor {
  // Function comes after component
}

export type ButtonProps = {
  // All the props
};
```

## React components

### Props

Don't manually add a `children: ReactNode` prop when needed: use `PropsWithChildren<{ ... }>` instead.
