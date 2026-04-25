# X.com (Twitter) Website Clone
> A frontend recreation of [x.com](https://x.com) — built with React as part of a Web Application Programming (WAP) Semester 2 group project.

This project focuses on replicating the structure, layout, and visual design of X's web interface, covering the Home Feed, Profile, and Explore pages. The goal is to strengthen our skills in component-based architecture, responsive design, and collaborative development using Git.

---

## Team - **Thunder Protocol**
- Tushar R Singh
- Madhav Agarwal
- Divyam Nailwal

---

## Tech Stack
- **React** (with Vite)
- **React Router** – for page navigation
- **CSS / Tailwind CSS** – for styling

---

## Getting Started
### Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/) (v18 or above)
- npm or yarn

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/your-username/x-clone.git

# 2. Navigate into the project directory
cd x-clone

# 3. Install dependencies
npm install

# 4. Start the development server
npm run dev
```

The app will be running at `http://localhost:5173` (Vite) or `http://localhost:3000` (CRA).

---

## 📁 Project Structure

```
TwitterClone/
├── public/
├── src/
│   └── assets/          # Static images and icons
│   ├── components/      # Reusable UI components
│   ├── pages/           # Page-level components (Home, Profile, Explore, etc.)
│   ├── styles/          # Global and component-level styles
│   ├── App.jsx          # Root component with routes
│   └── main.jsx         # Entry point
├── .gitignore
├── package.json
└── README.md
```

---

## Pages & Component Ownership
### Auth Page
| Component | Description | Owner | Status |
|-----------|-------------|-------|--------|
| `Main Auth Page` | Create account and Login modal, save of LocalStorage, navigate to Feed page  | **Tushar** | [ DONE ] |

### Main Feed Page
| Component | Description | Owner | Status |
|-----------|-------------|-------|--------|
| `Sidebar` | Left sidebar navigation with logo, links | **Tushar** | [ DONE ] |
| `FeedTop` | For Yor and Following Tabs | **Tushar** | [ DONE ] |
| `AddPost` | Add Post Section with icons | **Tushar** | [ DONE ] |
| `Post Card` | Heading, username, image and icons | **Divyam Nailwal** | [ DONE ] |


### Responsive
| Component | Description | Owner | Status |
|-----------|-------------|-------|--------|
| `All Pages` | Responsive for mobile view | **Tushar** | [ DONE ] |


---

## Contributing (Team Workflow)
1. **Clone** the repo
2. Create a new branch for your section:
   ```bash
   git checkout -b feature/navbar
   ```
3. Commit your changes:
   ```bash
   git commit -m "Add: responsive navbar component"
   ```
4. Push and open a **Pull Request** to `main`

> Each team member should work on a separate branch and avoid pushing directly to `main`.

---

## Notes

- This project is made for **educational purposes only** as part of a college assignment.
- All design credit goes to [X Corp](https://x.com).
- No commercial use intended.

---

## License
This project is for academic use only and is not licensed for redistribution.
