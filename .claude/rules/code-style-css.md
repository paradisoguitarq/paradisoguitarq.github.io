---
description: Specifies the code conventions of CSS files
paths:
- '**/*.css'
---

# CSS style guidelines

Use kebab-case for all CSS class names.

- Prefer descriptive, lowercase class names separated by hyphens, for example `button-primary` or `avatar-image`.
- Keep class names consistent with the component or section they belong to.

## Design tokens

The `.css` files in `src/tokens/` declare every custom property the design system is built from, and they are the only place raw values are written. Everywhere else — including `.module.css` files under `src/components/` and `src/pages/` — colours, spacing, radii, fonts, shadows, durations, and border widths must be consumed as `var(--…)`.

**✅ Good:**
```css
.card {
  padding: var(--space-4);
  border-radius: var(--radius-lg);
  background: var(--surface-raised);
  color: var(--text-body);
}
```

**❌ Bad:**
```css
.card {
  padding: 16px;        /* on the spacing scale — must be a token */
  border-radius: 12px;  /* on the radius scale — must be a token */
  background: #ffffff;
}
```

If a value you need isn't on a scale yet, add it to the relevant file in `src/tokens/` rather than inlining it.

One-off structural dimensions that aren't on any scale are fine as literals — an icon box (`width: 46px`), a hairline (`height: 1px`), a drag-handle. The test is whether the value belongs to a shared scale, not whether it's a number.

## Before writing a rule

Layout and typography are typed props, not CSS. Check whether `Flex`/`Group`/`Stack` (`gap`, `m*`, `p*`, `bg`, `w`, `flex`) or `Title`/`Text` (`order`, `type`, `c`) already express what you're about to write, and reach for those instead. A `.module.css` file should hold what is genuinely specific to one component.


