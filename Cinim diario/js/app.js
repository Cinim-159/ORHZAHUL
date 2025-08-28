import { database } from './firebase-config.js';
import { ref, push, set, onValue } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-database.js";

const feed = document.getElementById('feed');
const editBtn = document.getElementById('editBtn');
const editor = document.getElementById('editor');
const pageTitle = document.getElementById('pageTitle');
const pageContent = document.getElementById('pageContent');
const saveBtn = document.getElementById('saveBtn');
const closeBtn = document.getElementById('closeBtn');

function renderPosts(postsData){
  feed.innerHTML='';
  const posts = postsData ? Object.values(postsData) : [];
  posts.sort((a,b)=> new Date(b.date) - new Date(a.date)).forEach(p=>{
    const div = document.createElement('div');
    div.className='post';
    div.innerHTML=`<h2>${p.title}</h2><div class="date">${p.date}</div><div class="content">${p.content}</div>`;
    div.addEventListener('click',()=> div.classList.toggle('open'));
    feed.appendChild(div);
  });
}

// Carrega posts em tempo real
onValue(ref(database, 'pages'), (snapshot)=>{
  renderPosts(snapshot.val());
});

// Abrir editor
editBtn.addEventListener('click', ()=>{ editor.style.display='block'; });

// Fechar editor
closeBtn.addEventListener('click', ()=>{ editor.style.display='none'; });

// Salvar página
saveBtn.addEventListener('click', ()=>{
  if(pageTitle.value.trim()==='' || pageContent.value.trim()==='') return alert('Preencha título e conteúdo');
  const newPageRef = push(ref(database,'pages'));
  set(newPageRef,{
    title: pageTitle.value,
    content: pageContent.value,
    date: new Date().toLocaleDateString()
  });
  pageTitle.value=''; pageContent.value='';
  editor.style.display='none';
});
