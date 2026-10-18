(() => {
'use strict';
document.documentElement.classList.add('js');
const $=(s,p=document)=>p.querySelector(s);
const $$=(s,p=document)=>Array.from(p.querySelectorAll(s));
const esc=(value)=>String(value??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const validURL=u=>typeof u==='string'&&/^https:\/\//i.test(u)?u:'#';
const link=(u,label='Read source ↗')=>u?'<a target="_blank" rel="noopener noreferrer" href="'+esc(validURL(u))+'">'+esc(label)+'</a>':'';
const formatDay=(s)=>{if(!s)return '';let d=new Date(s+'T12:00:00');return Number.isNaN(+d)?s:d.toLocaleDateString('en-GB',{day:'2-digit',month:'short',year:'numeric'})};
const statusName={documented:'Observed action',possible:'Possible match',announced:'Announced only',not_established:'Not established'};
const slugDate=s=>s?String(s).slice(0,7):'';
function show(id,text){const el=$('#'+id);if(el)el.textContent=text}
async function getData(name){const res=await fetch('assets/data/'+name+'.json',{cache:'no-cache'});if(!res.ok)throw Error('Source unavailable');return await res.json()}
function loadingError(target){const el=$('#'+target);if(el&&!el.children.length)el.innerHTML='<div class="empty"><h3>Records temporarily unavailable</h3><p>Please use the linked original sources or return later.</p></div>';else if(el){const note=document.createElement('p');note.className='note';note.textContent='Interactive filters are temporarily unavailable. The sourced records below remain accessible.';el.prepend(note)}}
function setupNav(){const toggle=$('.menu-toggle');const nav=$('#primary-navigation');if(toggle&&nav){toggle.addEventListener('click',()=>{const on=toggle.getAttribute('aria-expanded')==='true';toggle.setAttribute('aria-expanded',String(!on));nav.classList.toggle('open',!on)});$$('a',nav).forEach(a=>a.addEventListener('click',()=>{nav.classList.remove('open');toggle.setAttribute('aria-expanded','false')}));document.addEventListener('keydown',e=>{if(e.key==='Escape'){nav.classList.remove('open');toggle.setAttribute('aria-expanded','false')}})}const page=(document.body.dataset.page||'home');$$('.nav a').forEach(a=>{if(a.dataset.nav===page)a.setAttribute('aria-current','page')})}
function setupGeneral(){setupNav();$$('[data-now-year]').forEach(x=>x.textContent=String(new Date().getFullYear()));const btn=$('[data-back-top]');if(btn)btn.addEventListener('click',()=>scrollTo({top:0,behavior:'smooth'}));let scheduled=false;function scroll(){if(!scheduled){requestAnimationFrame(()=>{const max=document.documentElement.scrollHeight-window.innerHeight;const pct=max>0?100*scrollY/max:0;const bar=$('.scroll-progress');if(bar)bar.style.width=pct+'%';scheduled=false});scheduled=true}}addEventListener('scroll',scroll,{passive:true});scroll();if('IntersectionObserver'in window){const o=new IntersectionObserver(entries=>{entries.forEach(x=>{if(x.isIntersecting){x.target.classList.add('visible');o.unobserve(x.target)}})},{rootMargin:'0px 0px 60px 0px',threshold:.06});$$('.reveal').forEach(el=>o.observe(el))}else $$('.reveal').forEach(el=>el.classList.add('visible'))}
function initTimeline(){
 let all=[],visible=18,month='all',query='';
 const wrap=$('#timeline-results'),next=$('#timeline-more'),search=$('#timeline-search');
 const chipBar=$('#timeline-chips');
 function draw(){
  const match=all.filter(e=>(month==='all'||slugDate(e.date)===month)&&(!query||(e.headline+' '+e.context+' '+e.source).toLocaleLowerCase().includes(query)));
  match.sort((a,b)=>b.date.localeCompare(a.date)||a.headline.localeCompare(b.headline));
  show('timeline-count',match.length+' sourced events · newest first');
  wrap.innerHTML=match.length?match.slice(0,visible).map(e=>'<article class="timeline-item"><time datetime="'+esc(e.date)+'">'+esc(e.displayDate||formatDay(e.date))+'</time><h3>'+esc(e.headline)+'</h3><p>'+esc(e.context)+'</p><a class="citation" target="_blank" rel="noopener noreferrer" href="'+esc(validURL(e.url))+'">'+esc(e.source||'Source')+' ↗</a></article>').join(''):'<div class="empty"><h3>No matching events</h3><p>Try another keyword or month.</p></div>';
  next.hidden=match.length<=visible;
 }
 getData('chronology').then(data=>{
   all=data.events.filter(x=>x.date&&x.headline&&x.url);
   const unique=[...new Set(all.map(e=>slugDate(e.date)))].sort().reverse();
   chipBar.innerHTML='<button type="button" class="chip active" data-month="all" aria-pressed="true">All dates</button>'+unique.map(m=>'<button type="button" class="chip" data-month="'+esc(m)+'" aria-pressed="false">'+new Date(m+'-15T12:00:00').toLocaleDateString('en-GB',{month:'long'})+'</button>').join('');
   $$('[data-month]',chipBar).forEach(b=>b.addEventListener('click',()=>{month=b.dataset.month;visible=18;$$('[data-month]',chipBar).forEach(c=>{let current=c===b;c.classList.toggle('active',current);c.setAttribute('aria-pressed',String(current))});draw()}));
   search.addEventListener('input',()=>{query=search.value.trim().toLocaleLowerCase();visible=18;draw()});
   next.addEventListener('click',()=>{visible+=18;draw()});
   draw();
 }).catch(()=>loadingError('timeline-results'));
}
function initStatements(){
 let all=[],topic='all',query='',visible=16;
 const target=$('#statement-results'),more=$('#statements-more'),search=$('#statements-search'),select=$('#statements-topic');
 function matches(x){return (topic==='all'||x.topic===topic)&&(!query||(x.speaker+' '+x.statement+' '+x.assessment+' '+x.topic).toLocaleLowerCase().includes(query))}
 function draw(){
  const filtered=all.filter(matches).sort((a,b)=>b.date.localeCompare(a.date)||a.speaker.localeCompare(b.speaker));
  show('statement-count',filtered.length+' public statements and assessments');
  target.innerHTML=filtered.length?filtered.slice(0,visible).map(x=>{
    const qual=x.qualification?'<p class="note">'+esc(x.qualification)+'</p>':'';
    return '<article class="record"><div class="record-head"><time datetime="'+esc(x.date)+'">'+esc(x.displayDate||formatDay(x.date))+'</time><span class="tag">'+esc(x.topic||'Public statement')+'</span></div><h3>'+esc(x.speaker)+'</h3><p class="caps muted">'+esc(x.format||'Public remarks')+'</p><p class="claim">'+esc(x.statement)+'</p><div class="check"><b>What the evidence shows</b><p>'+esc(x.assessment)+'</p></div>'+qual+'<div class="foot">'+link(x.source,'Original report or recording ↗')+(x.contextSource?link(x.contextSource,'Context source ↗'):'')+'</div></article>'
  }).join(''):'<div class="empty"><h3>No statements found</h3><p>Change the subject or search terms.</p></div>';
  more.hidden=filtered.length<=visible;
 }
 getData('statements').then(data=>{
  all=data.statements.filter(x=>x.statement&&x.source);
  const topics=[...new Set(all.map(x=>x.topic))].sort();
  select.innerHTML='<option value="all">All subjects</option>'+topics.map(t=>'<option value="'+esc(t)+'">'+esc(t)+'</option>').join('');
  search.addEventListener('input',()=>{query=search.value.trim().toLocaleLowerCase();visible=16;draw()});
  select.addEventListener('change',()=>{topic=select.value;visible=16;draw()});
  more.addEventListener('click',()=>{visible+=16;draw()});
  draw();
 }).catch(()=>loadingError('statement-results'));
}
function initMethods(){
 let all=[],status='all',group='all',query='',visible=24;
 const target=$('#method-results'),search=$('#methods-search'),select=$('#methods-family'),more=$('#methods-more'),tabs=$('#methods-chips');
 function match(m){return(status==='all'||m.status===status)&&(group==='all'||m.family===group)&&(!query||(String(m.number)+' '+m.name+' '+m.subcategory+' '+(m.examples||[]).map(x=>x.description).join(' ')).toLocaleLowerCase().includes(query))}
 function draw(){
  const chosen=all.filter(match);
  show('method-count',chosen.length+' of 198 methods');
  target.innerHTML=chosen.length?chosen.slice(0,visible).map(m=>{
   const detail=(m.examples||[]).length?'<details><summary>View dated observations</summary>'+m.examples.map(x=>'<div class="observed"><b>'+esc(formatDay(x.date))+'</b> · '+esc(x.description)+'<p>'+esc(x.context||'')+'</p>'+link(x.source,'Source ↗')+'</div>').join('')+'</details>':'<p class="note">No specific public act has been established for this numbered category in the material reviewed.</p>';
   return '<article class="method-item"><span class="method-num">'+String(m.number).padStart(3,'0')+'</span><div><h3>'+esc(m.name)+'</h3><p class="small">'+esc(m.family)+(m.subcategory?' · '+esc(m.subcategory):'')+'</p>'+detail+'</div><div class="right"><span class="status-pill '+esc(m.status)+'">'+esc(statusName[m.status]||m.status)+'</span>'+(m.firstDate?'<p class="note">First recorded<br>'+esc(formatDay(m.firstDate))+'</p>':'')+'</div></article>';
  }).join(''):'<div class="empty"><h3>No method matches</h3><p>Try a different category or search.</p></div>';
  more.hidden=chosen.length<=visible;
 }
 getData('methods').then(data=>{
  all=data.methods.slice().sort((a,b)=>a.number-b.number);
  const families=[...new Set(all.map(x=>x.family))].sort();
  select.innerHTML='<option value="all">All method families</option>'+families.map(x=>'<option value="'+esc(x)+'">'+esc(x)+'</option>').join('');
  $$('[data-status]',tabs).forEach(b=>b.addEventListener('click',()=>{status=b.dataset.status;visible=24;$$('[data-status]',tabs).forEach(el=>{const on=el===b;el.classList.toggle('active',on);el.setAttribute('aria-pressed',String(on))});draw()}));
  select.addEventListener('change',()=>{group=select.value;visible=24;draw()});
  search.addEventListener('input',()=>{query=search.value.trim().toLocaleLowerCase();visible=24;draw()});
  more.addEventListener('click',()=>{visible+=24;draw()});
  draw();
 }).catch(()=>loadingError('method-results'));
}
function initSources(){
 let all=[],visible=30,query='';
 const target=$('#sources-results'),search=$('#source-search'),more=$('#sources-more');
 function draw(){
  const found=all.filter(x=>(x.title+' '+x.outlet).toLocaleLowerCase().includes(query));
  show('sources-count',found.length+' distinct linked records');
  target.innerHTML=found.length?found.slice(0,visible).map(x=>'<article class="source-item"><span>'+esc(x.type)+' · '+esc(x.outlet)+'</span><strong>'+esc(x.title)+'</strong>'+link(x.url,'Open original source ↗')+'</article>').join(''):'<div class="empty"><h3>No sources found</h3></div>';
  more.hidden=found.length<=visible;
 }
 Promise.all([getData('chronology'),getData('statements')]).then(([a,b])=>{
  const seen=new Set();
  function add(url,title,type,outlet){if(!url||seen.has(url)||!/^https:\/\//i.test(url))return;seen.add(url);all.push({url,title,type,outlet:outlet||new URL(url).hostname.replace(/^www\./,'')})}
  a.events.slice().reverse().forEach(e=>add(e.url,e.headline,'Reporting',e.source));
  b.statements.slice().reverse().forEach(e=>add(e.source,e.speaker+': '+e.statement.slice(0,100)+'…','Interview / public remarks',null));
  search.addEventListener('input',()=>{query=search.value.trim().toLocaleLowerCase();visible=30;draw()});
  more.addEventListener('click',()=>{visible+=30;draw()});
  draw();
 }).catch(()=>loadingError('sources-results'));
}
document.addEventListener('DOMContentLoaded',()=>{setupGeneral();const page=document.body.dataset.page;({timeline:initTimeline,claims:initStatements,methods:initMethods,sources:initSources}[page]||(()=>{}))()});
})();