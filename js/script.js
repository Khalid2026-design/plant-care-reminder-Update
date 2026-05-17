let section1=document.querySelector(".features");

let outerdiv=document.createElement("div");
outerdiv.classList.add("feature-cards");


let cardss = [];

let icon = ["💧", "☘️", "📊", "✨"];

let ftitals = [
    "د اوبو یادونې",
    "د بوټو تعقیب",
    "هوښیار حالت",
    "اسانه کارول"
];

let ftext = [
    "هیڅکله د خپلو نباتاتو د اوبو ورکولو وخت هېر نه کړئ. موږ تاسو ته سمدستي خبرداری ورکوو.",
    
    "د خپلو ټولو نباتاتو حالت وګورئ او د هرې ورځې پرمختګ تعقیب کړئ.",
    
    "سیستم پخپله ستاسو د نباتاتو حالت ارزوي او تاسو ته مشوره درکوي.",
    
    "ساده او ښکلی ډیزاین چې هرڅوک یې په اسانۍ سره کارولی شي."
];

for (let index = 0; index < 4; index++) {

   
    let fcard = document.createElement("div");
    fcard.classList.add("f-card");
 
    let ficon = document.createElement("div");
    ficon.classList.add("f-icon");
    ficon.textContent = icon[index];

    
    let fh3 = document.createElement("h3");
    fh3.textContent = ftitals[index];

    
    let fp = document.createElement("p");
    fp.textContent = ftext[index];

    
    fcard.append(ficon);
    fcard.append(fh3);
    fcard.append(fp);

 
    outerdiv.append(fcard);
    
}
section1.append(outerdiv);
 
 


 


let cname = [
    "حسن الله",
    "احمد الله",
    "مطیع الله"
];

let ctext = [
    "دا ویب باڼه ډیزاین ډیر شکلی او کارول یی ډیر اسانه دی اوس زما کوټه ډیره شایسته شکاری",
    "دا د هغو کسانو لپاره غوره وسیله ده چی غواړی د خپلو نباتاتو په هکله مسلکی معلومات او پر وخت یادونی ترلاسه کړ",
    "له کومه راهیسی چی ما ددی ویب پاڼی کارول پیل کړی دی زما د کور ټول بوټی ډیر شنه او منظم شوی ډیره مننننه"

];


 let pdiv="";
let section2=document.querySelector(".testmonil");
let ppdive=document.createElement("div");
for (let index = 0; index < 3; index++) {
    
    let pdiv=document.createElement("div");
    pdiv.classList.add("testdiv");

    let pimage=document.createElement("img");
    pimage.src=`images/plant${index+1}.jpg`;
    pimage.classList.add("testimage");
    pdiv.append(pimage);

    let pname=document.createElement("h2");
    pname.textContent=cname[index];
    pname.classList.add("h2s");
    pdiv.append(pname);

    let pmassge=document.createElement("p");
    pmassge.textContent=ctext[index];
    pmassge.classList.add("ps")
    pdiv.append(pmassge);

    ppdive.append(pdiv);
    ppdive.classList.add("test");

    pdiv.classList.add("pstyy")
    
}
section2.append(ppdive);
section2.append(pdiv);

let names=["ګلاب3","ګلاب2","ګلاب1"];
let pinfo=["ډیر قوي او کم اوبو ته اړتیا لري.",
    "طبیعي درملیز نبات او د کور ښکل",
    "هوا پاکوي او کور ښکلی کوي."

]

let section3=document.querySelector(".popular-plants")

let plantscards=document.createElement("div");
plantscards.classList.add("plnat-cards");

for (let index = 0; index <3; index++) {

    let cards=document.createElement("div");
    cards.classList.add("plant-card");

    let pcimage=document.createElement("img");
    pcimage.src=`images/plant${index+1}.jpg`;

    let pct=document.createElement("h3");
    pct.textContent=names[index];

    let pctt=document.createElement("p");
    pctt.textContent=pinfo[index];

    cards.append(pcimage);
    cards.append(pct);
    cards.append(pctt);

    plantscards.append(cards);

    plantscards.classList.add("test");

}
 
 section3.append(plantscards);



let section4=document.querySelector(".tips-section");
 
let tipdiv=document.createElement("div");
let tipicon = ["💧", "☀️", "🌿"];

let tiptitals = [
    "سمی اویه ورکول",
    "لمر ته پام کول",
    "سالمه خاوره"
];

let tiptext = [
        "هر نبات مختلف مقدار اوبو ته اړتیا لري.",
        "ځینې نباتات مستقیم او ځینې غیر مستقیم لمر غواړي.",
        "ښه خاوره نبات ته چټکه وده ورکو"
];

let color=["#0d65bd","#d8eb0a","#4a3406"];
for (let index = 0; index < 3; index++) {
        let tipbox=document.createElement("div");
        
        let tipspan=document.createElement("span");
        tipspan.textContent=tipicon[index];

        let tiph3=document.createElement("h3");
        tiph3.textContent=tiptitals[index];

        let tipp=document.createElement("p");
        tipp.textContent=tiptext[index]

        tipbox.append(tipspan,tiph3,tiptext);
        tipbox.classList.add(`tip-box`);


        tipbox.style.backgroundColor=color[index]
     


        tipdiv.append(tipbox);
        tipdiv.classList.add("tips-container");
}

section4.append(tipdiv);
section4.classList.add("tips-section");


let i=1;
 
let imagesection=document.querySelector(".imagees");
let b1=document.querySelector(".b1");
let b2=document.querySelector(".b2");
let im=document.querySelector(".imge");
im.src=`images/m${i}.jpg`;
b1.addEventListener("click",()=>{
    i++;
    if (i>12) {
        i=1;
    }
im.src=`images/m${i}.jpg`;

});
b2.addEventListener("click",()=>{
    i--;
    if (i<=0) {
        i=5;
    }

im.src=`images/m${i}.jpg`;

})










