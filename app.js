const modal=document.getElementById("modal"), toast=document.getElementById("toast"), mobile=document.querySelector(".det-mobile-menu"), burger=document.querySelector(".det-burger");
document.querySelectorAll(".js-demo").forEach(b=>b.addEventListener("click",()=>{modal.hidden=false}));
document.getElementById("closeModal").addEventListener("click",()=>modal.hidden=true);
modal.addEventListener("click",e=>{if(e.target===modal)modal.hidden=true});
document.getElementById("printBtn").addEventListener("click",()=>window.print());
document.getElementById("shareBtn").addEventListener("click",async()=>{try{await navigator.clipboard.writeText(location.href)}catch{} toast.hidden=false;setTimeout(()=>toast.hidden=true,2200)});
document.getElementById("mailBtn").addEventListener("click",()=>{const s=encodeURIComponent("Unofficial demo score report — Nicolas B.");const b=encodeURIComponent("UNOFFICIAL DEMO — NOT ISSUED OR VERIFIED BY DUOLINGO\n\nOverall score: 115\nUpper Intermediate: CEFR B2\n\n"+location.href);location.href="mailto:?subject="+s+"&body="+b});
burger.addEventListener("click",()=>{const open=mobile.hidden;mobile.hidden=!open;burger.setAttribute("aria-expanded",String(open))});
document.addEventListener("keydown",e=>{if(e.key==="Escape"){modal.hidden=true;mobile.hidden=true;burger.setAttribute("aria-expanded","false")}});
