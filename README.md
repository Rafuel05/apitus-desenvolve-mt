# ABITUS: Sistema de Consulta de Pessoas Desaparecidas - MT

  **Sistema web para consulta e envio de informações sobre pessoas desaparecidas em Mato Grosso**
  
  [![React](https://img.shields.io/badge/React-18.x-blue.svg)](https://reactjs.org/)
  [![Vite](https://img.shields.io/badge/Vite-5.x-purple.svg)](https://vitejs.dev/)
  [![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.x-cyan.svg)](https://tailwindcss.com/)
  [![Docker](https://img.shields.io/badge/Docker-Ready-blue.svg)](https://docker.com/)
</div>

---

## 📋 Sobre o Projeto

Este projeto foi desenvolvido como **Projeto Prático** para o processo seletivo da **Desenvolve MT**. O sistema permite aos cidadãos consultar informações sobre pessoas desaparecidas e contribuir com informações que possam ajudar na localização, utilizando a API pública de testes da Polícia Judiciária Civil de Mato Grosso.

### 🎯 Objetivos do Sistema
1. **Consultar** registros de pessoas desaparecidas ou já localizadas
2. **Visualizar** informações detalhadas de cada pessoa
3. **Enviar** informações adicionais (observações, fotos) sobre as pessoas

### 🌐 API Utilizada
- **Base URL**: https://abitus-api.geia.vip/v1
- **Documentação**: https://abitus-api.geia.vip/swagger-ui/index.html

---

## 👨‍💻 Dados do Candidato

- **Nome Completo**: Rafael Melchior de Oliveira
- **E-mail**: rafael.rmo.123456789@gmail.com
- **Telefone**: (65) 9 9988-2233
- **GitHub**: [@Rafuel05](https://github.com/Rafuel05)
- **Repositório**: [apitus-desenvolve-mt](https://github.com/Rafuel05/apitus-desenvolve-mt)
- **Data de Entrega**: 08/09/2025

---

## 🛠️ Tecnologias Utilizadas

### Frontend
- **React 18.3.1** - Biblioteca principal para interface
- **Vite 5.4.1** - Build tool e servidor de desenvolvimento
- **React Router DOM 6.26.0** - Roteamento entre páginas
- **Tailwind CSS 3.4.10** - Framework de estilos utilitários

### Ícones e UI
- **Lucide React 0.439.0** - Biblioteca de ícones moderna
- **@heroicons/react** - Ícones complementares

### Containerização
- **Docker** - Containerização da aplicação
- **Nginx Alpine** - Servidor web para produção

---

## ✨ Funcionalidades Implementadas

### ✅ Requisitos Atendidos

#### 1. **Tela Inicial**
- [x] Cards com foto e dados das pessoas
- [x] Filtros por status (Desaparecido/Localizado)
- [x] Paginação (12 registros por página)
- [x] Busca por nome, idade e sexo
- [x] Design responsivo e intuitivo

#### 2. **Detalhamento do Registro**
- [x] Navegação via clique no card
- [x] Informações completas da pessoa
- [x] Destaque visual do status
- [x] Visualização de cartazes disponíveis
- [x] Lista de informações recebidas

#### 3. **Envio de Informações**
- [x] Formulário para registro de novas informações
- [x] Upload de fotos/anexos
- [x] Validação de campos obrigatórios
- [x] Máscara para data
- [x] Tratamento de erros

#### 4. **Requisitos Técnicos**
- [x] Single Page Application (SPA)
- [x] Lazy Loading nas rotas
- [x] Componentes reutilizáveis
- [x] Layout responsivo
- [x] Containerização Docker
- [x] Tratamento de erros
- [x] Design limpo e organizado

---

## 🏗️ Arquitetura do Projeto

```
src/
├── components/           # Componentes reutilizáveis
│   ├── HeroSection/     # Seção hero da home
│   ├── Navbar/          # Barra de navegação
│   ├── PersonCard/      # Card de pessoa
│   ├── PersonList/      # Lista de pessoas
│   ├── PersonDetail/    # Componentes da página de detalhes
│   │   ├── InformationForm/  # Formulário modularizado
│   │   ├── StatusBanner.jsx
│   │   ├── PersonPhoto.jsx
│   │   └── ...
│   └── Pagination/      # Componente de paginação
├── pages/               # Páginas principais
│   ├── HomePage.jsx     # Página inicial
│   └── PersonDetailPage.jsx # Página de detalhes
├── services/            # Camada de serviços
│   ├── api.js          # Cliente HTTP base
│   ├── cache/          # Sistema de cache
│   └── pessoas/        # Serviços específicos
├── hooks/              # Custom hooks
│   └── usePessoa.jsx   # Hook para lógica de pessoa
└── router.jsx          # Configuração de rotas
```

---

## ⚠️ Observações Técnicas Importantes

### Inconsistência Identificada na API

Durante o desenvolvimento, foi detectada uma inconsistência nos endpoints de filtro:

**Problema**: Alguns registros aparecem no filtro de "desaparecidos" mesmo tendo `dataLocalizacao` preenchida.

**Solução Implementada**:
- Utilização do campo `dataLocalizacao` como fonte única da verdade
- Filtro client-side para garantir consistência
- Hook `usePessoa` para centralizar a lógica de status

```javascript
// Exemplo da lógica implementada
const isDesaparecido = !pessoa.ultimaOcorrencia?.dataLocalizacao;
```

### Sistema de Cache Inteligente

Implementado sistema de cache para otimizar performance:
- **Preload** automático de dados
- **Cache invalidation** inteligente
- **Fallback** para requisições diretas quando necessário

---

## 🚀 Instalação e Execução

### Pré-requisitos
- **Node.js** 18+ 
- **npm** ou **yarn**
- **Docker** (opcional, para containerização)

### 1. Clonando o Repositório
```bash
git clone https://github.com/Rafuel05/apitus-desenvolve-mt.git
cd apitus-desenvolve-mt
```

### 2. Instalação de Dependências
```bash
npm install
```

### 3. Executando em Desenvolvimento
```bash
npm run dev
```
Acesse: http://localhost:5173

### 4. Build para Produção
```bash
npm run build
npm run preview
```

---

## 🐳 Docker

### Executando com Docker Compose (Recomendado)
```bash
# Build e execução
docker-compose up --build -d

# Acessar aplicação
# http://localhost:3000
```

---

## 🧪 Testes e Validação

### Teste Manual das Funcionalidades

1. **Navegação Principal**
   - ✅ Acesse http://localhost:3000
   - ✅ Verifique se os cards são exibidos
   - ✅ Teste os filtros de status

2. **Sistema de Busca**
   - ✅ Digite um nome no campo de busca
   - ✅ Teste filtros por idade e sexo
   - ✅ Verifique paginação

3. **Página de Detalhes**
   - ✅ Clique em um card
   - ✅ Verifique informações completas
   - ✅ Teste botão de envio de informações

4. **Envio de Informações**
   - ✅ Clique em "Enviar Informações"
   - ✅ Preencha o formulário
   - ✅ Teste upload de arquivos
   - ✅ Verifique validações

### Testes de Responsividade
- ✅ Desktop (1920x1080)
- ✅ Tablet (768x1024)
- ✅ Mobile (375x667)

---


## 📞 Contato

Para dúvidas ou esclarecimentos sobre a implementação:

- **E-mail**: rafael.rmo.123456789@gmail.com
- **GitHub**: [@Rafuel05](https://github.com/Rafuel05)
- **Repositório**: [apitus-desenvolve-mt](https://github.com/Rafuel05/apitus-desenvolve-mt)

---
