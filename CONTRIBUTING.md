# Contributing to Lyte Ventures UI

Take the time to read through the guidelines and thank you for considering to contribute towards this project.

### Installation

1. You have the Node V16+ installed on your machine.
2. Clone the repo onto you local machine: `gh repo clone chewhx/lvui`
3. Install the dependencies `cd lvui && npm install`

### Developing

A typical contributor workflow might look like this:

1. Create a new feature branch. Format your branch name `[your-initials]/[feature-short-name-or-issue-name]` eg. `john/add-dark-mode`
2. Run `npm run storybook` to build and watch the storybook.
3. Write your code. 🔨 Refer to the coding guidelines.
4. Write your component story.
5. Include unit tests when necessary

### Git Commits

Where possible, make small and meaningful commits, with prefixes for the nature and type of the commit.

Eg. `feat-add-new-alert-component`

| Type       | Description                                     |
| ---------- | ----------------------------------------------- |
| `feat`     | A new feature                                   |
| `fix`      | A bug fix                                       |
| `docs`     | Documentation changes only                      |
| `style`    | Style changes not affecting meaning of the code |
| `refactor` | Major code changes which is not bug or feature  |
| `test`     | Add missing tests or correct existing tests     |
| `chore`    | Clean ups and changes other than src and tests  |
| `revert`   | Reverts a previous commit                       |
