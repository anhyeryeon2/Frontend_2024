//md파일을 데이터로 바꾸는 함수
import fs from "fs"
import path from "path"
import matter from "gray-matter"

const postsDirectory = path.join(process.cwd(),'posts')
console.log("process.cwd()", process.cwd());
console.log("postsDirectory",postsDirectory);

export function getSortedPostsData(){
    const fileNames = fs.readdirSync(postsDirectory)
    console.log("fileName",fileNames);
    const allPostsData = fileNames.map(fileName => {
        const id = fileName.replace(/|.md$/,"")

        const fullPath = path.join(postsDirectory,fileName)
        const fileContents = fs.readFileSync(fullPath,"utf8")

        const matterResult = matter(fileContents)

        return{
            id,
            ...(matterResult.data as {date:string; title:string})
        }
    })
    return allPostsData.sort((a,b)=>{
        if(a.date < b.date){
            return 1
        }else{
            return -1
        }
    })
}