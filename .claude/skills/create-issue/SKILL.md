---
name: create-issue
description: Create a GitHub issue in this repository from user feedback or a feature/bug idea. Picks the right issue template, fills every section, and asks clarifying questions instead of assuming. Use whenever the user wants something turned into a GitHub issue ("open an issue for X", "file a bug", "let's track this as an issue") — never for implementing the thing itself.
---

# Create issue

Turn a user's request, complaint, or idea into a well-formed GitHub issue in this repo. This skill only **writes issues** — it never edits code, even if the conversation already contains a full technical solution or a diff was discussed. If the user wants the thing implemented, that's a separate ask; say so and stop after the issue is filed.

## Steps

1. **Identify the repo.** Run `gh repo view --json nameWithOwner -q .nameWithOwner` to get `owner/repo` for `gh issue create --repo`.

2. **Read the available templates** in `.github/ISSUE_TEMPLATE/*.yml`. Don't assume their fields — read them fresh each time, they can change.

3. **Pick the most suitable template** for the request:
   - A defect in existing behavior → `bug_report.yml`.
   - A new capability, improvement, or change to how something works → `feature_request.yml`.
   - If it's genuinely ambiguous (e.g. "the proposal card looks bad" could be a bug or a feature), ask the user which framing fits, don't guess.

4. **Gather the content for every required field in the chosen template, one section at a time.** Never invent or pad a section with generic filler to make it look complete. Concretely:
   - Read the project documentation (`docs/` folder) to acquire an understanding of domain concepts and glossary.
   - If the user's description is vague or only covers part of a section (a one-line request, "make X better", a scope that keeps shifting), **stop and ask** targeted questions — using `AskUserQuestion` when there's a concrete decision to make (e.g. "which template fits", "is this in scope") — until you can write each field with real, specific content.
   - Mine the actual conversation for details already given (exact copy changes, specific components/props, before/after behavior) rather than re-asking for things the user already said.
   - It's fine to ground the issue in the code: a quick, targeted look at the relevant file(s) (via `Read`, `tokensave_search`/`tokensave_context`, or `Explore`) to cite the right component/file path strengthens the issue. This is read-only reconnaissance to write an accurate issue, not implementation — don't go deep enough that you start drafting the fix itself.
   - For `feature_request.yml`'s "Acceptance criteria", write concrete, checkable conditions — not restatements of the proposed solution.
   - Leave a field's placeholder guidance behind; write the actual answer, matching the template's field labels as headers (e.g. `### Problem / motivation`).

5. **Labels.** Each template's frontmatter names a default label (e.g. `bug`, `feature`). Check it exists with `gh label list --repo <owner>/repo`; if not, create it with `gh label create` before assigning it on the issue (labels don't auto-create from `gh issue create --label`).

6. **Create the issue** with `gh issue create --repo <owner>/repo --title "..." --label <label> --body "$(cat <<'EOF' ... EOF)"`. Keep the title short and specific (not a restatement of the whole body).

7. **Report back** the issue URL. Don't summarize the whole body back to the user — they just watched you draft it.

## Updating an existing issue

If the user wants to revise an issue already filed (more detail, scope change, corrected requirements), use `gh issue edit <number> --body ...` to replace the body rather than appending a comment, unless the user specifically wants a comment/changelog trail. Re-run step 4 for whatever changed — don't patch just the sentence that came up; re-derive the full section it lives in so the issue stays internally consistent.
