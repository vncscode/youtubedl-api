# 🎵 YouTube Downloader API
API para download de vídeos do YouTube em formato MP3 e MP4 utilizando Node.js.

## 📌 **Índice**
- [Recursos](#-recursos)
- [Pré-requisitos](#-pré-requisitos)
- [Instalação](#-instalação)
- [Como Usar](#-como-usar)
- [Endpoints](#-endpoints)
  - [Baixar MP3](#1--baixar-mp3)
  - [Baixar MP4](#2--baixar-mp4)
- [Logs](#-logs)
- [Erros Comuns](#-erros-comuns)
- [Licença](#-licença)

---

## 🚀 **Recursos**
- 📥 Baixar vídeos do YouTube em formato **MP3** com qualidade personalizada.
- 📥 Baixar vídeos do YouTube em formato **MP4** com qualidade personalizada.
- 📋 Logs detalhados de cada requisição.

---

## 📋 **Pré-requisitos**
- **Node.js** (v14+)
- **npm** (geralmente vem junto com o Node.js)

---

## 🛠 **Instalação**

1. **Clone o repositório:**
   ```bash
   git clone https://github.com/vncscode/youtube-downloader-api.git
   cd youtube-downloader-api
   ```

2. **Instale as dependências:**
   ```bash
   npm install
   ```

3. **Execute a API:**
   ```bash
   node app.js
   ```
   A API estará disponível em: [http://localhost:3000](http://localhost:3000)

---

## 📌 **Como Usar**
Utilize ferramentas como **Postman**, **Insomnia** ou o próprio navegador para fazer requisições.

---

## 🔄 **Endpoints**

### 1. 🎶 **Baixar MP3**
**Endpoint:** `/download/mp3`  
**Método:** `GET`

**Parâmetros:**
- `url` (obrigatório): URL do vídeo do YouTube.  
- `quality` (opcional): Qualidade do áudio (padrão: `128`).

**Exemplo de requisição:**
```
http://localhost:3000/download/mp3?url=https://www.youtube.com/watch?v=dQw4w9WgXcQ&quality=192
```

**Resposta:**
```json
{
  "info_do_video": {
    "title": "Título do vídeo",
    "url": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    "author": {
      "name": "Nome do canal"
    }
  },
  "download": {
    "status": true,
    "downloadLink": "https://link_do_download.mp3",
    "quality": "192"
  }
}
```

---

### 2. 🎥 **Baixar MP4**
**Endpoint:** `/download/mp4`  
**Método:** `GET`

**Parâmetros:**
- `url` (obrigatório): URL do vídeo do YouTube.  
- `quality` (opcional): Qualidade do vídeo (padrão: `360`).

**Exemplo de requisição:**
```
http://localhost:3000/download/mp4?url=https://www.youtube.com/watch?v=dQw4w9WgXcQ&quality=720
```

**Resposta:**
```json
{
  "info_do_video": {
    "title": "Título do vídeo",
    "url": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    "author": {
      "name": "Nome do canal"
    }
  },
  "download": {
    "status": true,
    "downloadLink": "https://link_do_download.mp4",
    "quality": "720"
  }
}
```

---

## 🛡 **Logs**
Logs são gerados no console com detalhes das requisições.  
**Exemplo:**
```
[INFO] Request from IP: 127.0.0.1 for MP3 Download - URL: https://www.youtube.com/watch?v=dQw4w9WgXcQ
```

---

## ⚠️ **Erros Comuns**
- **400 Bad Request:** URL não fornecida.
- **500 Internal Server Error:** Erro ao processar o download.

**Exemplo:**
```json
{
  "error": "URL is required"
}
```

---

## 📄 **Licença**
Este projeto está sob a licença MIT.  
Consulte o arquivo `LICENSE` para mais detalhes.

---

Feito com ❤️ por [vncscode](https://github.com/vncscode) 🎉