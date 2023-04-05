const express = require("express");
const multer = require("multer");
const cors = require("cors");
const { exec } = require("child_process");
const fs = require("fs");
const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("hello shuboy");
});

const fileStorageEngine = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./images");
  },
  filename: (req, file, cb) => {
    const extention = file.originalname.split('.');

    cb(null, Date.now() + '-' + Math.floor(Math.random() * 1000000000) + '.' + extention[extention.length-1]);
  },
});

const upload = multer({ storage: fileStorageEngine });

app.post("/multiple", upload.array("images", 20), async (req, res) => {
  
  let filesUrl = [];
  let cammand = 'ffmpeg';

  let lastFile = '';
  req.files.map((files) => {
    const extentionConvert = files.filename.split('.');
    const extention = extentionConvert.pop();
    extentionConvert.push(req.body.filename);
    const finalUrl = extentionConvert.join('.');

    const originalname = files.originalname.split('.');
    originalname.pop();
    originalname.push(extention);

    filesUrl.push([finalUrl, extention, req.body.filename, originalname.join('.')])
    cammand += ` -i images/${files.filename} images/${finalUrl}`;
    lastFile = `images/${finalUrl}`;
  })

  try {
    exec(cammand, (error, stdout, stderr) => {
      if (error) {
        console.log(`error: ${error.message}`);
        return;
      }
      if (stderr) {
        console.log(`stderr: ${stderr}`);
        return;
      }
      console.log(`stdout: ${stdout}`);
    });

    while (!fs.existsSync(`./${lastFile}`)){}
    
    res.send(filesUrl);
  } catch (error) {
    res.errored()
  }   
});

app.get("/getImage/:file(*)", async (req, res) => {
  console.log('----');
  const imageURL = req.params.file;
  res.sendFile(__dirname+`/images/${imageURL}`);
});

app.get("/download/:file(*)", (req, res) => {
  const imageURL = req.params.file.split('/'); 
  res.download(`./images/${imageURL[0]}`,imageURL[1]);
});

app.listen(5000, () => {
  console.log("server is up and running");
});
