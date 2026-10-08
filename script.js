const quizData = [
  {
    question:"HTML代表什么？",
    options:["超文本标记语言","高级编程语言","数据库","操作系统"],
    correct:0
  },
  {
    question:"CSS用来做什么？",
    options:["处理后端逻辑","页面样式美化","操作数据库","发送网络请求"],
    correct:1
  },
  {
    question:"JS是什么？",
    options:["标记语言","脚本语言","图片格式","文本格式"],
    correct:1
  }
];

let current = 0;
let score = 0;

const qEl = document.getElementById("question");
const optEl = document.getElementById("options");
const nextBtn = document.getElementById("nextBtn");
const scoreEl = document.getElementById("score");

function render(){
    optEl.innerHTML = "";
    const item = quizData[current];
    qEl.innerText = item.question;
    item.options.forEach((opt,idx)=>{
        const div = document.createElement("div");
        div.className = "option‑item";
        div.innerText = opt;
        div.dataset.idx = idx;
        div.addEventListener("click",clickOpt);
        optEl.appendChild(div);
    })
}

function clickOpt(e){
    const idx = Number(e.target.dataset.idx);
    const rightIdx = quizData[current].correct;
    const allOpts = document.querySelectorAll(".option‑item");
    allOpts.forEach(o=>o.style.pointerEvents="none");
    if(idx === rightIdx){
        e.target.classList.add("right");
        score++;
        scoreEl.innerText = score;
    }else{
        e.target.classList.add("wrong");
        allOpts[rightIdx].classList.add("right");
    }
}

nextBtn.addEventListener("click",()=>{
    current++;
    if(current >= quizData.length){
        alert(`答题结束！你的得分：${score}`);
        current=0;
        score=0;
        scoreEl.innerText=0;
    }
    render();
})

render();
