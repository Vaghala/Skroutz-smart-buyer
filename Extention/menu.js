
document.getElementById("btn").addEventListener("click",function(e){
    chrome.tabs.query({
        url: ["https://www.skroutz.gr/s/*"]
    }).then((ts)=>{
        for(let t of ts){
            console.log(t)
            console.log(t.id,t.title)
        }
    })
    
});

document.getElementById("open").addEventListener("click",function(e){
    chrome.tabs.create({
        url: "menu.html"
      });
});