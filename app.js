const express = require('express');
const { ytmp3, ytmp4 } = require('@vreden/youtube_scraper');
const loggings = require('loggings');

const app = express();
const port = 3000;

//github @vncscode

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
        logger.info(`Request from IP: ${req.ip} for MP3 Download - URL: ${url}`);
        res.json({
          info_do_video: {
            type: result.metadata.type,
            videoId: result.metadata.videoId,
            url: result.metadata.url,
            title: result.metadata.title,
            description: result.metadata.description,
            image: result.metadata.image,
            thumbnail: result.metadata.thumbnail,
            seconds: result.metadata.seconds,
            timestamp: result.metadata.timestamp,
            duration: result.metadata.duration,
            ago: result.metadata.ago,
            views: result.metadata.views,
            author: {
              name: result.metadata.author.name,
              url: result.metadata.author.url
            }
          },
          download: {
            status: result.status,
            downloadLink: result.download.url,
            filename: result.download.filename,
            quality: result.download.quality
          }

        });
      } else {
        logger.error(`Error on MP3 download: ${result.result}`);
        res.status(500).json({ error: result.result });
      }
    })
    .catch(error => {
      logger.error(`Error: ${error.message}`);
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
        logger.info(`Request from IP: ${req.ip} for MP4 Download - URL: ${url}`);
        res.json({
          info_do_video: {
            type: result.metadata.type,
            videoId: result.metadata.videoId,
            url: result.metadata.url,
            title: result.metadata.title,
            description: result.metadata.description,
            image: result.metadata.image,
            thumbnail: result.metadata.thumbnail,
            seconds: result.metadata.seconds,
            timestamp: result.metadata.timestamp,
            duration: result.metadata.duration,
            ago: result.metadata.ago,
            views: result.metadata.views,
            author: {
              name: result.metadata.author.name,
              url: result.metadata.author.url
            }
          },
          download: {
            status: result.status,
            downloadLink: result.download.url,
            filename: result.download.filename,
            quality: result.download.quality
          }
        });
      } else {
        logger.error(`Error on MP4 download: ${result.result}`);
        res.status(500).json({ error: result.result });
      }
    })
    .catch(error => {
      logger.error(`Error: ${error.message}`);
      res.status(500).json({ error: 'Internal Server Error' });
    });
});

app.listen(port, () => {
  console.log(`API running on http://localhost:${port}`);
});
