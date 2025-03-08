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
    "type": "video",
    "videoId": "zmz0BStwDUw",
    "url": "https://youtube.com/watch?v=zmz0BStwDUw",
    "title": "ESTOU DE VOLTA AO GTA RP NO FIVEM (SERVIDOR SÓ COM NORDESTINO)! 🤣🤣🤣",
    "description": "FIVEM é onde jogamos o modo Roleplay do GTA V. • https://www.instagram.com/lipinhox_/ • https://www.tiktok.com/@lipinhox_ ...",
    "image": "https://i.ytimg.com/vi/zmz0BStwDUw/hq720.jpg",
    "thumbnail": "https://i.ytimg.com/vi/zmz0BStwDUw/hq720.jpg",
    "seconds": 918,
    "timestamp": "15:18",
    "duration": {
      "seconds": 918,
      "timestamp": "15:18"
    },
    "ago": "2 days ago",
    "views": 12313,
    "author": {
      "name": "LipinhO",
      "url": "https://youtube.com/@LipinhO"
    }
  },
  "download": {
    "status": true,
    "downloadLink": "https://cdn51.savetube.su/media/zmz0BStwDUw/estou-de-volta-ao-gta-rp-no-fivem-servidor-so-com-nordestino-128-ytshorts.savetube.me.mp3",
    "filename": "ESTOU DE VOLTA AO GTA RP NO FIVEM (SERVIDOR SÓ COM NORDESTINO)! 🤣🤣🤣 (128kbps).mp3",
    "quality": "128kbps"
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
    "type": "video",
    "videoId": "zmz0BStwDUw",
    "url": "https://youtube.com/watch?v=zmz0BStwDUw",
    "title": "ESTOU DE VOLTA AO GTA RP NO FIVEM (SERVIDOR SÓ COM NORDESTINO)! 🤣🤣🤣",
    "description": "FIVEM é onde jogamos o modo Roleplay do GTA V. • https://www.instagram.com/lipinhox_/ • https://www.tiktok.com/@lipinhox_ ...",
    "image": "https://i.ytimg.com/vi/zmz0BStwDUw/hq720.jpg",
    "thumbnail": "https://i.ytimg.com/vi/zmz0BStwDUw/hq720.jpg",
    "seconds": 918,
    "timestamp": "15:18",
    "duration": {
      "seconds": 918,
      "timestamp": "15:18"
    },
    "ago": "2 days ago",
    "views": 12313,
    "author": {
      "name": "LipinhO",
      "url": "https://youtube.com/@LipinhO"
    }
  },
  "download": {
    "status": true,
    "downloadLink": "https://cdn57.savetube.su/media/zmz0BStwDUw/estou-de-volta-ao-gta-rp-no-fivem-servidor-so-com-nordestino-360-ytshorts.savetube.me.mp4",
    "filename": "ESTOU DE VOLTA AO GTA RP NO FIVEM (SERVIDOR SÓ COM NORDESTINO)! 🤣🤣🤣 (360p).mp4",
    "quality": "360p"
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