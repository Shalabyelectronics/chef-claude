# Chef Claude
**A recipe generation interface built with React to turn available ingredients into meals.**

**[Source](https://github.com/Shalabyelectronics/chef-claude)**

## About
Chef Claude is a front-end application designed to help home cooks discover recipes using ingredients they already have on hand. The project is currently a work in progress focused on foundational UI state and user input handling. At this stage, it implements the ingredient submission form and list display; integration with the Claude API for AI recipe generation is planned for an upcoming milestone.

## Features
- Ingredient intake form utilizing React 19 form actions and native `FormData` handling.
- Dynamic list rendering that updates immediately as new items are added to state.
- Accessible form controls with descriptive ARIA attributes and placeholder text.
- Clean typography and responsive styling configured with custom CSS and the Inter typeface.

## Built With
- React 19
- Vite
- Oxlint
- CSS3

## What I Learned
- Managing form submissions declaratively with React 19 form actions and `FormData.prototype.get()`.
- Updating array state immutably using the `useState` hook with previous state callbacks.
- Structuring modular React components by separating concerns between layout (`Header`) and business logic (`Main`).
- Setting up a lean front-end development workflow using Vite and Oxlint for fast linting.

## Getting Started
Clone the repository and install dependencies to run the local development server:

```bash
git clone https://github.com/Shalabyelectronics/chef-claude.git
cd chef-claude
npm install
npm run dev
```

## Project Structure
```text
chef-claude/
├── public/
├── src/
│   ├── assets/
│   │   └── images/
│   ├── components/
│   │   ├── Header.jsx
│   │   └── Main.jsx
│   ├── App.jsx
│   └── index.css
├── index.html
├── package.json
└── vite.config.js
```

## Roadmap
- [ ] Connect Anthropic Claude API to generate recipes from the submitted ingredient list
- [ ] Add validation requiring a minimum ingredient count before requesting recipes
- [ ] Provide ingredient deletion and list-clearing controls
- [ ] Add loading indicators and error states during API generation calls
- [ ] Render formatted Markdown responses for recipe instructions

## Author
Mohamed Shalaby
- Website: [shalabycode.dev](https://shalabycode.dev)
- GitHub: [@Shalabyelectronics](https://github.com/Shalabyelectronics)
- LinkedIn: [Mohamed Shalaby](https://www.linkedin.com/in/mhdshalaby/)
