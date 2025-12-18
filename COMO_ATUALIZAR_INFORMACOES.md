# 📝 Como Atualizar Informações do Site

## ✨ Sistema Centralizado de Configurações

Agora você pode atualizar **WhatsApp, email, telefone e outras informações** em um **único lugar**!

---

## 🎯 Arquivo Principal de Configuração

Abra o arquivo:
```
assets/js/config.js
```

### 📱 Atualizar WhatsApp

```javascript
contact: {
  whatsapp: '447123456789', // ← ALTERE AQUI
  whatsappMessage: "Hello, I'd like to know more about the courses.",
```

**Formato do número:**
- ✅ Correto: `447123456789` (código do país + número, sem espaços)
- ❌ Errado: `+44 7123 456789` (não use + nem espaços)
- ❌ Errado: `07123456789` (precisa do código do país)

**Exemplos:**
- UK: `447123456789` (44 = código UK)
- Brasil: `5511987654321` (55 = código Brasil)
- Portugal: `351912345678` (351 = código Portugal)

---

### 📧 Atualizar Email

```javascript
email: 'info@learningforchange.org', // ← ALTERE AQUI
```

---

### 📞 Atualizar Telefone

```javascript
phone: '+44 (0) 20 XXXX XXXX', // ← ALTERE AQUI
```

---

### 📍 Atualizar Endereço

```javascript
address: 'London, United Kingdom' // ← ALTERE AQUI
```

---

## 🚀 Como Aplicar as Mudanças

### 1. Edite o arquivo `assets/js/config.js`

### 2. Salve o arquivo

### 3. Teste localmente:
```bash
# Abra o site no navegador
http://localhost:8000
```

### 4. Faça commit e push:
```bash
git add assets/js/config.js
git commit -m "Update contact information"
git push origin main
```

### 5. Aguarde 1-2 minutos
O GitHub Pages atualizará automaticamente!

---

## 🎨 Outras Configurações Disponíveis

### Nome da Organização
```javascript
organization: {
  name: 'Learning for Change', // ← Nome
  tagline: 'Skills for today, opportunities for tomorrow.', // ← Slogan
  description: 'Empowering adults through inclusive education.', // ← Descrição
  website: 'www.learningforchange.org', // ← Website
  year: new Date().getFullYear() // ← Ano (atualiza automaticamente)
}
```

### Redes Sociais (quando tiver)
```javascript
social: {
  facebook: 'https://facebook.com/seu-perfil',
  twitter: 'https://twitter.com/seu-perfil',
  instagram: 'https://instagram.com/seu-perfil',
  linkedin: 'https://linkedin.com/company/seu-perfil'
}
```

---

## ✅ Vantagens do Sistema Centralizado

- ✅ **Altere uma vez**, atualiza em **11 páginas** automaticamente
- ✅ **Sem erros** de digitação em múltiplos arquivos
- ✅ **Fácil manutenção**
- ✅ **Rápido** - apenas 1 arquivo para editar

---

## 🔍 O Que é Atualizado Automaticamente

Quando você edita `config.js`, as seguintes áreas são atualizadas:

### WhatsApp:
- ✅ Botão flutuante (todas as páginas)
- ✅ Links de WhatsApp no rodapé
- ✅ CTAs de contato

### Informações de Contato:
- ✅ Email no rodapé (todas as páginas)
- ✅ Telefone no rodapé (todas as páginas)
- ✅ Endereço no rodapé (todas as páginas)

### Ano do Copyright:
- ✅ Atualiza automaticamente todo ano

---

## ⚠️ Importante

**NÃO edite** os arquivos HTML individuais para mudar WhatsApp, email, telefone ou endereço.

**SEMPRE edite** apenas o arquivo `assets/js/config.js`

Isso garante consistência em todo o site!

---

## 🆘 Problemas?

Se as mudanças não aparecerem:

1. **Limpe o cache do navegador** (Ctrl + Shift + R)
2. **Verifique o console** (F12) para erros JavaScript
3. **Confirme que o arquivo foi salvo** corretamente
4. **Aguarde o deploy** do GitHub Pages (1-2 minutos)

---

**Última atualização:** Dezembro 2025
