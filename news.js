const sportsApiUrl=`https://newsapi.org/v2/top-headlines?country=in&category=sports&apiKey=f36464b3fb5346d99c98a15e1018c356`;
window.fetch(sportsApiUrl).then(data=>{
    data.json().then(Sportsnews=>{
        //console.log(Sportsnews)
        let sportsData=Sportsnews.articles;
        let output='';
        for(let sports of sportsData){
            output +=`
            
            <h1 class="h1Title"><a href ="${sports.url}" target_blank>${sports.title}</h1>
             <p>${sports.description}</p>
             <img src="${sports.urlToImage}"/>
             <p>${sports.publishedAt}</p>

            `;
        }
        document.getElementById("left").innerHTML=output;
    }).catch(err=>console.log(err))
}).catch(err=>console.log(err))
//time javascript
var day=new Date().getDate();
setInterval(()=>{
    var time=new Date().toLocaleTimeString();
    document.getElementById("time").innerHTML=`${time},${day}`;
},1000);
const EntUrl=`https://newsapi.org/v2/top-headlines?country=us&category=technology&apiKey=f36464b3fb5346d99c98a15e1018c356`;
window.fetch(EntUrl).then(data=>{
    data.json().then(ent=>{
        let entData=ent.articles;
        let output='';
        for(let ent of entData){
            output +=`
            
            <h1 class="h1Title"><a href ="${ent.url}" target_blank>${ent.title}</h1>
             <p>${ent.description}</p>
             <img src="${ent.urlToImage}"/>
             <p>${ent.publishedAt}</p>

            `;
        }
        document.getElementById("right").innerHTML=output;
    }).catch(err=>console.log(err))
}).catch(err=>console.log(err))
// top news headlines
const topsApiUrl=`https://newsapi.org/v2/top-headlines?country=us&apiKey=f36464b3fb5346d99c98a15e1018c356`;
window.fetch(topsApiUrl).then(data=>{
    data.json().then(topsnews=>{
        //console.log(Sportsnews)
        let topsnewsData=topsnews.articles;
        let output='';
        for(let topsnew of topsnewsData){
            console.log(topsnew.title);
            console.log(topsnew.description);
            console.log(topsnew.publishedAt);
            //console.log(topsnew.title);

            output +=`
            
            <h1 class="h1Title"><a href ="${topsnew.url}" target_blank>${topsnew.title}</h1>
             <p>${topsnew.description}</p>
             <img src="${topsnew.urlToImage}"/>
             <p>${topsnew.publishedAt}</p>

            `;
            
        }
        document.getElementById("middle").innerHTML=output;
    }).catch(err=>console.log(err))
}).catch(err=>console.log(err))
