const stackZone=document.querySelector('.stack-zone');
const stackTrigger=document.querySelector('.stack-trigger');
if(stackZone&&stackTrigger){stackTrigger.addEventListener('click',()=>stackZone.classList.toggle('revealed'));}
const io=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add('in')}),{threshold:.12});
document.querySelectorAll('.reveal').forEach(el=>io.observe(el));
