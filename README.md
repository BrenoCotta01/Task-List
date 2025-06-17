# Task List - Task Management Application

![Next.js](https://img.shields.io/badge/Next.js-14+-black?style=for-the-badge&logo=next.js)
![React](https://img.shields.io/badge/React-18+-blue?style=for-the-badge&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5+-blue?style=for-the-badge&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3+-teal?style=for-the-badge&logo=tailwind-css)

A modern and responsive task management application built with Next.js, React, TypeScript, and styled with Tailwind CSS.

## 🚀 Features

- ✅ **Add tasks** with title and optional description
- 🗑️ **Delete tasks** with visual confirmation
- ☑️ **Mark/unmark** tasks as completed
- 🎨 **Modern interface** with dark theme
- 📱 **Responsive design** that works on all devices
- ⚡ **Optimized performance** with Next.js
- 🔒 **Type-safe** with TypeScript

## 🛠️ Technologies Used

- **[Next.js 14+](https://nextjs.org/)** - React framework for production
- **[React 18+](https://reactjs.org/)** - Library for building user interfaces
- **[TypeScript](https://www.typescriptlang.org/)** - JavaScript with static typing
- **[Tailwind CSS](https://tailwindcss.com/)** - Utility-first CSS framework
- **[Lucide React](https://lucide.dev/)** - Modern and customizable icons

## 📋 Prerequisites

Before you begin, ensure you have installed:

- [Node.js](https://nodejs.org/) (version 18 or higher)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

## 🔧 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/task-list.git
   cd task-list
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Run the project in development mode**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser**
   
   Navigate to [http://localhost:3000](http://localhost:3000) to view the application.

## 📁 Project Structure

```
task-list/
├── app/
│   ├── components/
│   │   ├── AddArea.tsx      # Component for adding tasks
│   │   └── ListItem.tsx     # List item component
│   ├── types/
│   │   └── Item.ts          # TypeScript type definitions
│   ├── globals.css          # Global styles and CSS variables
│   ├── layout.tsx           # Main application layout
│   └── page.tsx             # Main page
├── public/                  # Static files
├── next.config.js           # Next.js configuration
├── tailwind.config.js       # Tailwind CSS configuration
├── tsconfig.json           # TypeScript configuration
└── package.json            # Dependencies and scripts
```

## 🎯 How to Use

1. **Add a task:**
   - Type the task title in the input field
   - Optionally, add a description
   - Click the "Add" button or press Enter

2. **Mark as completed:**
   - Click the checkbox next to the task
   - The task will be crossed out and have reduced opacity

3. **Delete a task:**
   - Hover over the task
   - Click the trash icon that appears

## 🚀 Available Scripts

- `npm run dev` - Runs the application in development mode
- `npm run build` - Creates a production build
- `npm run start` - Runs the application in production mode
- `npm run lint` - Runs the linter to check code quality

## 🎨 Customization

### Themes and Colors

Application colors are defined in the `globals.css` file using CSS variables. To customize:

```css
:root {
  --background: 0 0% 3.9%;      /* Background color */
  --foreground: 0 0% 98%;       /* Text color */
  --primary: 0 0% 98%;          /* Primary color */
  /* ... other variables */
}
```

### Components

All components are modular and can be easily customized:

- **AddArea**: Form for adding tasks
- **ListItem**: Individual task list item

## 🤝 Contributing

Contributions are always welcome! To contribute:

1. **Fork** the project
2. **Create** a feature branch (`git checkout -b feature/new-feature`)
3. **Commit** your changes (`git commit -m 'Add new feature'`)
4. **Push** to the branch (`git push origin feature/new-feature`)
5. **Open** a Pull Request

## 🐛 Bug Reports

If you find any bugs, please [open an issue](https://github.com/your-username/task-list/issues) describing:

- Steps to reproduce the problem
- Expected vs actual behavior
- Screenshots (if applicable)
- Environment information (OS, browser, etc.)

## 📄 License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Your Name**
- GitHub: [@BrenoCotta01]([https://github.com/your-username](https://github.com/BrenoCotta01))
- LinkedIn: [Breno Gomes]([https://linkedin.com/in/your-profile](https://www.linkedin.com/in/breno-gomes-21968734b/))
- Email: gomes.programing@gmail.com

---

⭐ If this project helped you, don't forget to give it a star on the repository!
