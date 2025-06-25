# 🎯 GIT WORKFLOW - VOXY MIX

## Branches Principais

### `main` 
- Versão estável e funcional
- Sempre testada antes de receber merge
- Estado atual: **COMPAT-EQUIPMENT-V20**

## Branches de Desenvolvimento

### `test-compatibility-adjustments`
- Testes de ajustes da seção Compatibility
- Distâncias, posicionamentos, mensagens

### `test-visual-improvements` 
- Melhorias visuais e efeitos 3D
- Cores, gradientes, animações

### `test-responsiveness`
- Otimizações de responsividade
- Breakpoints, mobile/desktop

### `test-new-features`
- Novas funcionalidades
- Testes experimentais

## Comandos Úteis

### Trabalhar com Branches
```bash
# Ver todas as branches
git branch -a

# Criar nova branch de teste
git checkout -b test-nova-feature

# Voltar para main (versão estável)
git checkout main

# Deletar branch de teste
git branch -D test-nova-feature
```

### Salvar Versões Estáveis
```bash
# Salvar mudanças
git add .
git commit -m "COMPAT-EQUIPMENT-V21 - Descrição"

# Criar tag de versão
git tag -a v21 -m "COMPAT-EQUIPMENT-V21"
```

### Recuperar Versões Anteriores
```bash
# Ver histórico
git log --oneline

# Voltar para commit específico
git checkout <commit-hash>

# Voltar para tag específica
git checkout v20
```

## Protocolo de Segurança

1. **Sempre** fazer backup em `main` antes de mudanças grandes
2. **Sempre** testar em branch separada
3. **Sempre** commitar com ID de versão no G-SYSTEM
4. **Sempre** criar tag para versões importantes

## Estado Atual
- Branch principal: `main`
- Versão estável: **COMPAT-EQUIPMENT-V20**
- Commit inicial: `4367d20`
