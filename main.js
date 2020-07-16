let images = ['img/1.png', 'img/img_2.jpg', 'img/img_3.jpg'];

let elementsImg =[];
const doWork = (c) =>{
    images.forEach((item) =>{
        const newEl = document.createElement("img");
        newEl.src = item;
        elementsImg.push(newEl);
    })
    return new Promise((resolve, reject) => {
       resolve (elementsImg);
    });
};



doWork(images)
    .then ((data)=> {
        data.some((item) =>{
            let test = true;
            item.addEventListener("error", (event)=>{
                test = false;
                console.error(event.target.getAttribute("src"));
                
            });
            item.addEventListener("load", () => document.body.append(item) );
        })

    })
    .catch(()=> console.error("Ошибка загрузки"))
