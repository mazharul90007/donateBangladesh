//show Donation
document.getElementById('donation-button').addEventListener('click', ()=>{
    showSection('donation-section');
    document.getElementById('donation-button').classList.add("bg-lime-300");
    document.getElementById('history-button').classList.remove("bg-lime-300");
})
//show History
document.getElementById('history-button').addEventListener('click', ()=>{
    showSection('history-section');
    document.getElementById('donation-button').classList.remove("bg-lime-300");
    document.getElementById('history-button').classList.add("bg-lime-300");
})

document.getElementById('blog').addEventListener('click', ()=>{
    window.location.href = '/blog.html';
})
