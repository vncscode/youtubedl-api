const express = require('express');
const { ytmp3, ytmp4 } = require('@vreden/youtube_scraper');
const loggings = require('loggings');
const yts = require('yt-search');

const app = express();
const port = 3000;


/*

Github: @vncscode
Portfolio: vncs.pro
Host: nexfuture.com.br

*/

const logger = new loggings.Loggings("API Log", "blue");


app.get('/download/mp3', (req, res) => {
    const url = req.query.url;
    const quality = req.query.quality || "128";

    if (!url) {
        return res.status(400).json({ error: 'URL is required' });
    }

    ytmp3(url, quality)
        .then(result => {
            if (result.status && result.download) {
         
                logger.info(`Rota: /download/mp3 | IP: ${req.ip} | URL: ${url} | Qualidade: ${quality}`);
                
                res.json({
                    info_do_video: result.metadata,
                    download: {
                        status: result.status,
                        downloadLink: result.download.url,
                        filename: result.download.filename,
                        quality: result.download.quality
                    }
                });
            } else {
                logger.error(`Erro no download MP3: ${result.result}`);
                res.status(500).json({ error: result.result });
            }
        })
        .catch(error => {
            logger.error(`Erro interno: ${error.message}`);
            res.status(500).json({ error: 'Internal Server Error' });
        });
});


app.get('/download/mp4', (req, res) => {
    const url = req.query.url;
    const quality = req.query.quality || "360";

    if (!url) {
        return res.status(400).json({ error: 'URL is required' });
    }

    ytmp4(url, quality)
        .then(result => {
            if (result.status && result.download) {
  
                logger.info(`Rota: /download/mp4 | IP: ${req.ip} | URL: ${url} | Qualidade: ${quality}`);
                
                res.json({
                    info_do_video: result.metadata,
                    download: {
                        status: result.status,
                        downloadLink: result.download.url,
                        filename: result.download.filename,
                        quality: result.download.quality
                    }
                });
            } else {
                logger.error(`Erro no download MP4: ${result.result}`);
                res.status(500).json({ error: result.result });
            }
        })
        .catch(error => {
            logger.error(`Erro interno: ${error.message}`);
            res.status(500).json({ error: 'Internal Server Error' });
        });
});


app.get('/youtube/search', async (req, res) => {
    const query = req.query.q;
    const limit = parseInt(req.query.limit) || 5;

    if (!query) {
        return res.status(400).json({ error: 'Search query is required' });
    }

    try {
        const result = await yts(query);
        const videos = result.videos.slice(0, limit);
        
      
        logger.info(`Rota: /youtube/search | IP: ${req.ip} | Query: ${query} | Limite: ${limit}`);
        
        res.json({
            search_query: query,
            results: videos.map(video => ({
                title: video.title,
                videoId: video.videoId,
                url: video.url,
                duration: video.timestamp,
                views: video.views,
                thumbnail: video.thumbnail,
                author: video.author.name
            }))
        });
    } catch (error) {
        logger.error(`Erro na pesquisa do YouTube: ${error.message}`);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});


app.listen(port, () => {
    console.log(`API rodando em http://localhost:${port}`);
});

                 

 /**
.----------------. .-----------------..----------------. .----------------. .----------------. .----------------. .----------------. .----------------. 
| .--------------. | .--------------. | .--------------. | .--------------. | .--------------. | .--------------. | .--------------. | .--------------. |
| | ____   ____  | | | ____  _____  | | |     ______   | | |    _______   | | |     ______   | | |     ____     | | |  ________    | | |  _________   | |
| ||_  _| |_  _| | | ||_   \|_   _| | | |   .' ___  |  | | |   /  ___  |  | | |   .' ___  |  | | |   .'    `.   | | | |_   ___ `.  | | | |_   ___  |  | |
| |  \ \   / /   | | |  |   \ | |   | | |  / .'   \_|  | | |  |  (__ \_|  | | |  / .'   \_|  | | |  /  .--.  \  | | |   | |   `. \ | | |   | |_  \_|  | |
| |   \ \ / /    | | |  | |\ \| |   | | |  | |         | | |   '.___`-.   | | |  | |         | | |  | |    | |  | | |   | |    | | | | |   |  _|  _   | |
| |    \ ' /     | | | _| |_\   |_  | | |  \ `.___.'\  | | |  |`\____) |  | | |  \ `.___.'\  | | |  \  `--'  /  | | |  _| |___.' / | | |  _| |___/ |  | |
| |     \_/      | | ||_____|\____| | | |   `._____.'  | | |  |_______.'  | | |   `._____.'  | | |   `.____.'   | | | |________.'  | | | |_________|  | |
| |              | | |              | | |              | | |              | | |              | | |              | | |              | | |              | |
| '--------------' | '--------------' | '--------------' | '--------------' | '--------------' | '--------------' | '--------------' | '--------------' |
 '----------------' '----------------' '----------------' '----------------' '----------------' '----------------' '----------------' '----------------' 
 /**