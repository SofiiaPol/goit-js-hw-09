import"./assets/modulepreload-polyfill-3cfb730f.js";/* empty css                      */const e={email:"",message:""},a=document.querySelector(".feedback-form");document.addEventListener("DOMContentLoaded",()=>{const t=localStorage.getItem("feedback-form-state");if(t){const s=JSON.parse(t);e.email=s.email,e.message=s.message,a.email.value=e.email,a.message.value=e.message}});a.addEventListener("input",t=>{const{name:s,value:m}=t.target;e[s]=m.trim(),localStorage.setItem("feedback-form-state",JSON.stringify(e))});a.addEventListener("submit",t=>{if(t.preventDefault(),!e.email.trim()||!e.message.trim()){alert("Fill please all fields");return}console.log(e),localStorage.removeItem("feedback-form-state"),a.reset()});
//# sourceMappingURL=commonHelpers2.js.map
