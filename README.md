# Recife Connect 📱

Aplicativo mobile desenvolvido em React Native (Expo) que realiza captura de localização do usuário e integração com backend Node.js.

---

## 🚀 Funcionalidades

- 📍 Captura de localização em tempo real
- 💾 Envio de dados para backend
- 📊 Histórico de localizações
- 🌐 Consumo de API pública do Dados Recife
- 📱 Navegação com Expo Router (Tabs)

---

## 🧠 Tecnologias

- React Native (Expo)
- Expo Router
- Axios
- Expo Location API
- Node.js (backend separado)

---

## 📡 Integração com Backend

O app se conecta ao backend em:


### Rotas usadas:

- POST `/location` → envia latitude e longitude  
- GET `/locations` → busca histórico

---

## ▶️ Como rodar o projeto

Instalar dependências:

```bash id="c1"
npm install
