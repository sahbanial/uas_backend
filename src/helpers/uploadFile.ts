import { createWriteStream, existsSync } from "fs";

export  default async (path,file)=> new Promise(async (resolve,reject)=>{
    const { stream } = await file;
    console.log(path);
    stream.pipe(createWriteStream(path))
    .on("finish", () => {
      resolve("done")
        
    }).on("error", err => reject(err));
})