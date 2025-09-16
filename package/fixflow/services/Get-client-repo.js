import { ChromaClient } from "chromadb";
import { glob } from "glob";
import fs from "fs";

async function getClientRepo(projectpath=".") {
  const client = new ChromaClient({ path: "./chromadb" });
  const collections = await client.getOrCreateCollection({name:"fixflow"});  
  if(!projectpath){
    console.log("projectpath is null");
    // return collections; 
  }

//   for node js project 
try{
  const files = glob.sync(`${projectPath}/**/*.{js,jsx,ts,tsx}`, {
    ignore: ["node_modules/**", ".next/**", "dist/**"]
  });
}
  catch(e){
    console.log("error in glob sync",e);
    return collections;
  }
  for( file in files){
    try{
         const content = fs.readFileSync(file, "utf8");

      
      await collection.add({
        ids: [String(counter++)],
        documents: [content],
        metadatas: [{ file }]
      });
      console.log("indexed file:", file);



    }
    catch(e){
      console.log("error in reading file",e);
    }   

  }

}
getClientRepo('G:\coding\goo\FixFlow\Backend')
export default getClientRepo;


  

  