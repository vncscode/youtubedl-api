

# 🎵 YouTube Downloader API
API para download de vídeos do YouTube em formato MP3 e MP4 utilizando Node.js.

## 📌 **Índice**
- [Recursos](#-recursos)
- [Pré-requisitos](#-pré-requisitos)
- [Instalação](#-instalação)
- [Como Usar](#-como-usar)
- [Endpoints](#-endpoints)
  - [Youtube Search](#1--youtube-search)
  - [Baixar MP3](#2--baixar-mp3)
  - [Baixar MP4](#3--baixar-mp4)
- [Logs](#-logs)
- [Erros Comuns](#-erros-comuns)
- [Licença](#-licença)

---

## 🚀 **Recursos**
- 🔍 Buscar vídeos do YouTube com entrega fiel
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

4. **Instale as dependências no modo automate:**

   ```bash
   sh init.sh
   ```

## 📌 **Como Usar**
Utilize ferramentas como **Postman**, **Insomnia** ou o próprio navegador para fazer requisições.

---


## 🔄 **Endpoints**

### 1. 🎶 **Youtube Search**
**Endpoint:** `/youtube/search`  
**Método:** `GET`

**Parâmetros:**
- `q` (obrigatório): query de pesquisa.  

**Exemplo de requisição:**
```
http://localhost:3000/youtube/search?q=miss+you
```

**Resposta:**
```json
{
  "search_query": "miss you",
  "results": [
    {
      "title": "Oliver Tree & Robin Schulz - Miss You [Official Music Video]",
      "videoId": "BX0lKSa_PTk",
      "url": "https://youtube.com/watch?v=BX0lKSa_PTk",
      "duration": "2:50",
      "views": 322747895,
      "thumbnail": "https://i.ytimg.com/vi/BX0lKSa_PTk/hq720.jpg",
      "author": "Oliver Tree"
    },
    {
      "title": "blink-182 - I Miss You (Official Video)",
      "videoId": "s1tAYmMjLdY",
      "url": "https://youtube.com/watch?v=s1tAYmMjLdY",
      "duration": "3:50",
      "views": 451379858,
      "thumbnail": "https://i.ytimg.com/vi/s1tAYmMjLdY/hq720.jpg",
      "author": "blink-182"
    },
    {
      "title": "Westlife - Miss You (Official Audio)",
      "videoId": "TiYKAinQOoE",
      "url": "https://youtube.com/watch?v=TiYKAinQOoE",
      "duration": "3:55",
      "views": 2180517,
      "thumbnail": "https://i.ytimg.com/vi/TiYKAinQOoE/hq720.jpg",
      "author": "Westlife "
    },
    {
      "title": "Beéle - I Miss You (Video Oficial)",
      "videoId": "BrGl81E4ZOc",
      "url": "https://youtube.com/watch?v=BrGl81E4ZOc",
      "duration": "2:56",
      "views": 35564890,
      "thumbnail": "https://i.ytimg.com/vi/BrGl81E4ZOc/hq720.jpg",
      "author": "Beéle"
    },
    {
      "title": "Cashmere Cat, Major Lazer, Tory Lanez - Miss You (Official Music Video)",
      "videoId": "2h0bkuWzQeU",
      "url": "https://youtube.com/watch?v=2h0bkuWzQeU",
      "duration": "3:07",
      "views": 73392445,
      "thumbnail": "https://i.ytimg.com/vi/2h0bkuWzQeU/hqdefault.jpg",
      "author": "Major Lazer Official"
    }
  ]
}
```



---

### 2. 🎶 **Baixar MP3**
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

### 3. 🎥 **Baixar MP4**
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