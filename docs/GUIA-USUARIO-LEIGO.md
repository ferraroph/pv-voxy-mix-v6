# 📋 GUIA COMPLETO PARA USUÁRIO LEIGO
## Como trabalhar com projetos React + Tailwind + Vite usando IA no VS Code

---

## 🎯 **O QUE VOCÊ PRECISA SABER (Básico)**

### **O que são essas ferramentas:**
- **React** = Divide a página em blocos reutilizáveis (como Lego)
- **Tailwind CSS** = Classes de estilo prontas (sem escrever CSS)
- **Vite** = Transforma seu PC em servidor local para desenvolvimento
- **Node.js** = Motor que faz tudo funcionar
- **npm** = Loja que baixa as "peças" do projeto

### **Como funciona:**
1. Vite transforma seu computador em um mini-servidor
2. Você acessa `localhost:8080` no navegador
3. Qualquer mudança nos arquivos → site atualiza automaticamente
4. Live preview funciona sem precisar de Live Server

---

## 🛠️ **INSTALAÇÃO INICIAL (Uma vez só)**

### **Ferramentas que instalam UMA VEZ no PC:**
```bash
# Node.js (inclui npm)
winget install OpenJS.NodeJS

# Git para controle de versão
winget install --id Git.Git -e --source winget

# VS Code (se não tiver)
winget install Microsoft.VisualStudioCode
```

### **Extensões úteis para VS Code:**
- Tailwind CSS IntelliSense
- GitHub Copilot (IA)
- ES7+ React/Redux/React-Native snippets

---

## 📁 **TRABALHANDO COM PROJETOS**

### **Cenário 1: Projeto do Lovable/GitHub**
```bash
# 1. Clonar projeto
git clone [URL-DO-PROJETO]

# 2. Entrar na pasta
cd nome-do-projeto

# 3. Instalar dependências (React, Tailwind, Vite, etc.)
npm install

# 4. Rodar servidor de desenvolvimento
npm run dev

# 5. Acessar no navegador
# http://localhost:8080
```

### **Cenário 2: Criar projeto DO ZERO**
```bash
# 1. Criar projeto React + Vite
npm create vite@latest meu-projeto -- --template react-ts

# 2. Entrar na pasta
cd meu-projeto

# 3. Instalar Tailwind
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p

# 4. Configurar arquivos (pedir para IA fazer)
# 5. Rodar projeto
npm run dev
```

---

## 🔧 **ESTRUTURA DE PASTAS (O que mexer)**

```
meu-projeto/
├── src/                    ← AQUI você edita
│   ├── components/         ← Componentes React
│   ├── pages/             ← Páginas do site
│   ├── App.tsx            ← Componente principal
│   └── main.tsx           ← Arquivo inicial
├── public/                ← Imagens, ícones
├── package.json           ← Lista de dependências
└── tailwind.config.ts     ← Configuração do Tailwind
```

### **Arquivos que você EDITA:**
- `src/components/` - Componentes React
- `src/pages/` - Páginas
- `src/App.tsx` - Layout principal
- `tailwind.config.ts` - Cores, fontes, espaçamentos

### **Arquivos que você NÃO mexe:**
- `node_modules/` - Dependências baixadas
- `package-lock.json` - Controle de versões
- `vite.config.ts` - Configuração do Vite

---

## 🤖 **USANDO IA PARA DESENVOLVIMENTO**

### **Como pedir ajuda para IA:**

**✅ FORMATO CORRETO:**
```
"Quero modificar o componente HeroSection.tsx para:
- Mudar a cor de fundo para azul
- Adicionar um botão verde
- Centralizar o texto"
```

**❌ FORMATO CONFUSO:**
```
"Muda essa coisa aí"
```

### **Tipos de pedidos que funcionam bem:**
1. **Modificar componente existente**
2. **Criar novo componente**
3. **Ajustar cores/espaçamentos**
4. **Adicionar/remover elementos**
5. **Corrigir erros**

---

## 🎨 **TRABALHANDO COM TAILWIND**

### **Classes mais usadas:**
```html
<!-- Cores -->
<div class="bg-blue-500 text-white">

<!-- Espaçamentos -->
<div class="p-4 m-2 gap-4">

<!-- Layout -->
<div class="flex justify-center items-center">

<!-- Responsividade -->
<div class="md:grid-cols-3 lg:grid-cols-4">
```

### **Onde encontrar classes:**
- https://tailwindcss.com/docs
- Autocomplete no VS Code (com extensão)
- Perguntar para IA: "Como fazer X com Tailwind?"

---

## 🚀 **FLUXO DE TRABALHO DIÁRIO**

### **1. Iniciar projeto:**
```bash
cd meu-projeto
npm run dev
```

### **2. Desenvolver:**
1. Abrir `localhost:8080` no navegador
2. Editar arquivos no VS Code
3. Ver mudanças automaticamente
4. Pedir ajuda para IA quando precisar

### **3. Salvar progresso:**
```bash
git add .
git commit -m "Descrição do que fez"
git push
```

---

## 🆘 **PROBLEMAS COMUNS E SOLUÇÕES**

### **Tela branca no navegador:**
- ✅ Verificar se está acessando `localhost:8080` (não 5500)
- ✅ Verificar se `npm run dev` está rodando
- ✅ Limpar cache do navegador (Ctrl+F5)

### **Erro "comando não encontrado":**
- ✅ Verificar se Node.js está instalado: `node --version`
- ✅ Verificar se está na pasta correta do projeto
- ✅ Rodar `npm install` antes de `npm run dev`

### **Mudanças não aparecem:**
- ✅ Verificar se salvou o arquivo (Ctrl+S)
- ✅ Verificar se Vite está rodando
- ✅ Atualizar página manualmente (F5)

### **Erros de dependências:**
```bash
# Limpar e reinstalar
rm -rf node_modules package-lock.json
npm install
```

---

## 💡 **DICAS IMPORTANTES**

### **Para usuários leigos:**
1. **Não tenha medo de quebrar** - sempre pode reverter
2. **Use Git** para salvar versões funcionais
3. **Pergunte tudo para IA** - ela sabe mais que você
4. **Teste sempre** - salve e veja no navegador
5. **Uma mudança por vez** - não faça 10 coisas juntas

### **Comandos que você sempre vai usar:**
```bash
npm install    # Instalar dependências
npm run dev    # Rodar projeto
git add .      # Preparar mudanças
git commit -m "texto"  # Salvar mudanças
git push       # Enviar para GitHub
```

### **URLs importantes:**
- **Projeto local:** `http://localhost:8080`
- **Documentação Tailwind:** https://tailwindcss.com
- **Documentação React:** https://react.dev

---

## 🎯 **RESUMO PARA DECORAR**

1. **Node.js + Git** = Instala uma vez, usa sempre
2. **React + Tailwind + Vite** = Por projeto (npm install)
3. **VS Code + IA** = Sua dupla de desenvolvimento
4. **localhost:8080** = Seu site local
5. **src/** = Onde você mexe
6. **npm run dev** = Como rodar tudo

**Com isso você consegue trabalhar em qualquer projeto React + Tailwind usando IA no VS Code!**
