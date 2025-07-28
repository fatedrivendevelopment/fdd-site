# 📘 Project Development Record (PDR) – Fate-Driven Development

Welcome to the Fate-Driven Development (FDD) website project. This file acts as a central reference for intelligent agents like Cursor.

The purpose of this project is to create a playful, mystical, and satirical documentation site for the fictional development methodology called **Fate-Driven Development**.

---

## 🧭 What to do (Cursor, please follow these steps):

### ✅ 1. First, read this file

You're currently in `docs/pdr.md`. Start here — this file outlines where to go next.

---

### 📖 2. Then read all other markdown files under `docs/`

These files contain the content that powers the site. Do **not** attempt to re-interpret or rewrite their content. Use them as-is.

Key documents include:

| Route/Page           | File Name                | Purpose                                       |
| -------------------- | ------------------------ | --------------------------------------------- |
| `/` (Home)           | `manifesto.md`, `faq.md` | Intro, principles, and FAQs                   |
| `/manifesto`         | `manifesto.md`           | Values and spiritual principles of FDD        |
| `/roles-and-rituals` | `roles.md`, `rituals.md` | Characters and spiritual ceremonies           |
| `/process-and-docs`  | `process.md`, `docs.md`  | Lifecycle and documentation metaphors         |
| `/comparisons`       | `comparison.md`          | Satirical comparison with other methodologies |
| `/faq`               | `faq.md`                 | Funny questions and cosmic answers            |
| `/community`         | `community.md`           | How to join the FDD cult—uh, team             |
| `/contribute`        | `contribute.md`          | Contribution guide                            |

Additional references:

- `tech-stack.md` – Explains the frontend architecture (Next.js, Tailwind, MD).
- `tools.md` – Lists fictional FDD tools like “Fate CLI” and “Tarot API”.
- `deployment-guide.md` – Hosting setup and Vercel deployment.
- `project-goals.md` – Satirical critique of real-world dev culture.

---

### 🧠 3. Then create a `memory-bank.json` in the project root

Use memory format based on **Cursor memory rules**. Store factual knowledge about:

- Content locations (e.g., where ritual descriptions are stored)
- Tech stack setup
- Component conventions
- Folder structure (`docs/`, `pages/`, `components/`)
- Special tone (satirical + mystical)

> ⚠️ Do not overwrite markdown files. Do not invent new features. Stick to the defined metaphors and structure.

---

### 🚀 4. Begin implementation — using TDD

- Use **Test-Driven Development (TDD)** with `Given / When / Then` style specs.
- Coverage should be **85% or more**.
- Test all pages, route logic, dynamic content loading, and visual rendering.

---

## 🔮 Tone & Purpose

This is a **satirical + spiritual** documentation site. The code must be clean, but the content should be **absurd, playful, and mystical**. You are building a project that mocks modern development culture while pretending to take itself seriously.

---

## 🧪 Implementation Notes

After reading this PDR and all /docs/\*.md files, Cursor should create a memory-bank at the root.

Use TDD for implementation.

Follow the Given / When / Then pattern in tests.

Ensure coverage stays above 85%.

GitHub Actions workflow is used to run build, lint, test, and coverage checks on every commit.

> “If the stars align, the CI will pass.” 🌠
