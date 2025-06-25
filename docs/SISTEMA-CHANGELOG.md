# 📝 SISTEMA DE CHANGELOG DETALHADO - VOXY MIX

## Estrutura do Sistema

### 1. Arquivo Sintético (Principal)

**Localização:** `docs/CHANGELOG-OTIMIZACOES.md`  
**Função:** Resumo das alterações com referência aos IDs

### 2. Arquivo Detalhado

**Localização:** `docs/CHANGELOG-DETALHADO.md`  
**Função:** Detalhamento completo de cada alteração em arquivo único

---

## Padrão de Nomenclatura

### Formato Base: `SEÇÃO-TIPO-VX`

**Exemplos:**

- `HERO-RESP-V1` → HeroSection responsividade versão 1
- `PRESET-3D-V2` → PresetCategoriesSection carrossel 3D versão 2
- `FAQ-UX-V1` → FAQSection experiência do usuário versão 1

### Categorias de TIPO:

- **RESP** → Responsividade
- **UX** → Experiência do usuário
- **LAYOUT** → Estrutura e posicionamento
- **3D** → Efeitos 3D e animações
- **TOUCH** → Otimizações touch/mobile
- **VISUAL** → Cores, tipografia, visual
- **FIX** → Correções e bug fixes

### Seções:

- **HERO** → HeroSection
- **OFFER** → OfferSection
- **COUNTDOWN** → CountdownTimer
- **ECOSYSTEM** → EcosystemSection
- **COMPAT** → CompatibilitySection
- **PRESET** → PresetCategoriesSection
- **FAQ** → FAQSection
- **BONUS** → BonusSection

---

## Protocolo de Registro

### No Chat:

Sempre mencionar: `Mudou de HERO-RESP-V1 para HERO-RESP-V2`

### No Changelog Sintético:

```markdown
## 🗓️ Versão HERO-RESP-V2 (2025-01-XX)

Otimizada responsividade do HeroSection → Ref: `HERO-RESP-V2`
```

### No Changelog Detalhado:

```markdown
## ID: HERO-RESP-V2

### Data: 2025-01-XX

### Categoria: Responsividade - HeroSection

### Arquivo(s): src/components/HeroSection.tsx

### Razão: Correção de quebra de linha em dispositivos móveis

### ANTES (HERO-RESP-V1):

[código anterior]

### DEPOIS (HERO-RESP-V2):

[código atual]

---
```

[código atual]

## Arquivo(s) Modificado(s):

- src/components/HeroSection.tsx

## Razão da Mudança:

Sub-headline quebrava em 3 linhas em dispositivos pequenos

```

---

## Status Atual

**Histórico anterior:** Mantido como está (sem IDs)
**Novo sistema:** Inicia a partir desta versão
**Primeiro ID:** Será definido na próxima alteração
```
