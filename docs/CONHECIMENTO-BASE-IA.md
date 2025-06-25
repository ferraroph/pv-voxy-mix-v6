# 🤖 DOCUMENTO DE CONHECIMENTO PARA IA
## Context Base para trabalhar com projetos React + Tailwind + Vite no VS Code

---

## 📋 **STACK TÉCNICO PADRÃO**

### **Core Technologies:**
```json
{
  "frontend": {
    "framework": "React 18+",
    "language": "TypeScript",
    "styling": "Tailwind CSS",
    "bundler": "Vite 5+",
    "dev_server": "Vite dev server"
  },
  "tooling": {
    "package_manager": "npm",
    "runtime": "Node.js",
    "version_control": "Git",
    "editor": "VS Code",
    "extensions": ["Tailwind CSS IntelliSense", "GitHub Copilot"]
  },
  "architecture": {
    "component_based": true,
    "file_structure": "src/components/, src/pages/",
    "config_files": ["tailwind.config.ts", "vite.config.ts", "package.json"]
  }
}
```

### **Project Structure Pattern:**
```
project-root/
├── src/
│   ├── components/         # React components
│   │   └── ui/            # shadcn/ui components
│   ├── pages/             # Page components  
│   ├── hooks/             # Custom React hooks
│   ├── lib/               # Utilities
│   ├── App.tsx            # Main app component
│   ├── main.tsx           # Entry point
│   └── index.css          # Global styles + Tailwind imports
├── public/                # Static assets
├── docs/                  # Documentation
├── package.json           # Dependencies & scripts
├── tailwind.config.ts     # Tailwind configuration
├── vite.config.ts         # Vite configuration
└── tsconfig.json          # TypeScript configuration
```

---

## 🔧 **COMANDOS E WORKFLOWS**

### **Initial Setup Commands:**
```bash
# For existing projects (Lovable/GitHub)
git clone [repository-url]
cd project-directory
npm install
npm run dev

# For new projects from scratch
npm create vite@latest project-name -- --template react-ts
cd project-name
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
# Configure tailwind.config.ts and src/index.css
npm run dev
```

### **Development Workflow:**
```bash
npm run dev          # Start dev server (localhost:8080)
npm run build        # Production build
npm run preview      # Preview production build
npm install [package] # Add new dependency
```

### **Git Workflow:**
```bash
git add .
git commit -m "descriptive message"
git push origin main
```

---

## 🎨 **TAILWIND CSS PATTERNS**

### **Common Class Patterns:**
```html
<!-- Layout -->
<div class="flex flex-col items-center justify-center min-h-screen">
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
<div class="container mx-auto px-4 py-8">

<!-- Typography -->
<h1 class="text-4xl font-bold text-gray-900 mb-4">
<p class="text-lg text-gray-600 leading-relaxed">

<!-- Colors & States -->
<button class="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded">
<div class="bg-white dark:bg-gray-800 shadow-md rounded-lg">

<!-- Responsive -->
<div class="w-full sm:w-1/2 md:w-1/3 lg:w-1/4">
<img class="w-16 h-16 md:w-24 md:h-24 rounded-full">
```

### **Tailwind Configuration Structure:**
```typescript
// tailwind.config.ts
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {...},
        secondary: {...}
      },
      fontFamily: {
        sans: [...],
      }
    }
  },
  plugins: []
}
```

---

## ⚛️ **REACT COMPONENT PATTERNS**

### **Functional Component Structure:**
```typescript
import { useState, useEffect } from 'react';

interface ComponentProps {
  title: string;
  variant?: 'primary' | 'secondary';
  children?: React.ReactNode;
}

export const Component = ({ title, variant = 'primary', children }: ComponentProps) => {
  const [state, setState] = useState<string>('');

  useEffect(() => {
    // Side effects
  }, []);

  return (
    <div className={`base-classes ${variant === 'primary' ? 'primary-classes' : 'secondary-classes'}`}>
      <h2 className="text-2xl font-bold">{title}</h2>
      {children}
    </div>
  );
};
```

### **Common Hooks Usage:**
```typescript
// State management
const [data, setData] = useState<DataType[]>([]);
const [loading, setLoading] = useState(true);
const [error, setError] = useState<string | null>(null);

// Side effects
useEffect(() => {
  const fetchData = async () => {
    try {
      const response = await fetch('/api/data');
      const result = await response.json();
      setData(result);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };
  fetchData();
}, []);
```

---

## 🛠️ **VITE CONFIGURATION**

### **Standard vite.config.ts:**
```typescript
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

export default defineConfig({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
```

### **Dev Server Behavior:**
- **Port:** 8080 (configurable)
- **Hot Module Replacement (HMR):** Automatic
- **Build tool:** Rollup-based
- **File watching:** Automatic reload on save
- **Path resolution:** Supports aliases (@/components)

---

## 🔍 **USER CONTEXT & CONSTRAINTS**

### **User Profile:**
- **Technical Level:** Complete beginner (leigo)
- **Programming Knowledge:** None (100% IA dependency)
- **Preferred Interface:** VS Code with AI assistance
- **Voice Input:** Uses transcription (may have typos/disconnected phrases)
- **Language:** Portuguese (Brasil)

### **Communication Patterns:**
- **Request style:** Natural language, often unclear technically
- **Needs clarification:** When technical terms are used
- **Prefers:** Step-by-step instructions with explanations
- **Wants to see:** Immediate visual results in browser

### **Common User Requests:**
```
"Quero mudar a cor do botão para azul"
→ Translate to: Modify button component, change className to include bg-blue-500

"Adicionar uma seção nova"
→ Translate to: Create new React component, add to page structure

"Não está funcionando"
→ Debug: Check dev server, verify localhost:8080, check console errors
```

---

## 🎯 **AI ASSISTANT GUIDELINES**

### **File Editing Approach:**
1. **Read current file** structure before editing
2. **Use minimal changes** - avoid rewriting entire files
3. **Preserve existing patterns** and conventions
4. **Test changes** by running dev server
5. **Explain what was changed** in user-friendly terms

### **Code Generation Patterns:**
```typescript
// Prefer functional components
export const ComponentName = () => {
  return (
    <div className="tailwind-classes">
      {/* Content */}
    </div>
  );
};

// Use TypeScript interfaces for props
interface Props {
  title: string;
  variant?: 'default' | 'primary';
}

// Import patterns
import { ComponentName } from '@/components/ComponentName';
import { useState, useEffect } from 'react';
```

### **Tailwind Class Organization:**
```html
<!-- Order: Layout -> Spacing -> Typography -> Colors -> States -->
<div class="flex items-center px-4 py-2 text-lg font-medium text-white bg-blue-500 hover:bg-blue-600 rounded-md transition-colors">
```

### **Error Handling:**
1. **Check terminal output** for build errors
2. **Verify file paths** and imports
3. **Validate Tailwind classes** syntax
4. **Test in browser** before confirming changes
5. **Provide clear error explanations** to user

---

## 📦 **DEPENDENCY MANAGEMENT**

### **Core Dependencies (always present):**
```json
{
  "dependencies": {
    "react": "^18.0.0",
    "react-dom": "^18.0.0"
  },
  "devDependencies": {
    "@vitejs/plugin-react-swc": "^3.0.0",
    "tailwindcss": "^3.0.0",
    "typescript": "^5.0.0",
    "vite": "^5.0.0"
  }
}
```

### **Common Additional Packages:**
```bash
# UI Components
npm install @radix-ui/react-* lucide-react

# Utilities  
npm install clsx class-variance-authority

# Forms
npm install react-hook-form @hookform/resolvers zod

# Routing
npm install react-router-dom
```

---

## 🚀 **DEPLOYMENT & BUILD**

### **Build Process:**
```bash
npm run build          # Creates dist/ folder
npm run preview        # Preview built app locally
```

### **Build Output:**
```
dist/
├── index.html         # Entry point
├── assets/
│   ├── index-[hash].js    # JavaScript bundle
│   └── index-[hash].css   # CSS bundle
└── [static-assets]    # Images, fonts, etc.
```

### **Environment Variables:**
```typescript
// vite-env.d.ts
interface ImportMetaEnv {
  readonly VITE_API_URL: string;
  readonly VITE_APP_TITLE: string;
}

// Usage in components
const apiUrl = import.meta.env.VITE_API_URL;
```

---

## 🎨 **DESIGN SYSTEM PATTERNS**

### **Component Variants Pattern:**
```typescript
import { cva, type VariantProps } from "class-variance-authority";

const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);
```

### **Responsive Design Patterns:**
```html
<!-- Mobile-first approach -->
<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">

<!-- Conditional rendering for mobile -->
<div class="block md:hidden">Mobile content</div>
<div class="hidden md:block">Desktop content</div>
```

---

## 🔧 **TROUBLESHOOTING PATTERNS**

### **Common Issues & Solutions:**

**Issue:** White screen on localhost
```bash
# Check if dev server is running on correct port
npm run dev
# Access http://localhost:8080 (not 5500)
```

**Issue:** Tailwind classes not working
```typescript
// Verify tailwind.config.ts content array
content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"]

// Check src/index.css imports
@tailwind base;
@tailwind components;
@tailwind utilities;
```

**Issue:** Component not updating
```bash
# Clear cache and restart
rm -rf node_modules package-lock.json
npm install
npm run dev
```

**Issue:** TypeScript errors
```typescript
// Common fixes
npm install @types/node @types/react @types/react-dom
// Check tsconfig.json configuration
```

---

## 📚 **REFERENCE LINKS**

### **Documentation:**
- **React:** https://react.dev
- **Tailwind CSS:** https://tailwindcss.com
- **Vite:** https://vitejs.dev
- **TypeScript:** https://typescriptlang.org

### **Tools:**
- **Tailwind UI:** https://tailwindui.com
- **Headless UI:** https://headlessui.com
- **Radix UI:** https://radix-ui.com
- **shadcn/ui:** https://ui.shadcn.com

---

## 💡 **SUCCESS PATTERNS**

### **For AI Assistants:**
1. **Always verify** current project structure before making changes
2. **Use incremental changes** rather than large rewrites
3. **Test immediately** after each change
4. **Explain changes** in simple terms for the user
5. **Provide live URLs** (localhost:8080) for testing
6. **Use consistent patterns** throughout the codebase
7. **Preserve existing styling** and component architecture

### **For User Communication:**
1. **Ask for clarification** when requests are ambiguous
2. **Show before/after** examples when possible
3. **Provide step-by-step** instructions
4. **Use Portuguese** for explanations
5. **Avoid technical jargon** unless necessary
6. **Confirm changes worked** by asking user to check browser

This knowledge base provides the AI assistant with complete context for working effectively with React + Tailwind + Vite projects while accommodating a beginner user's needs and communication style.
