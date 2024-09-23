//show Donation
document.getElementById('donation-button').addEventListener('click', ()=>{
    showSection('donation-section');
})
//show History
document.getElementById('history-button').addEventListener('click', ()=>{
    showSection('history-section');
})

document.getElementById('blog').addEventListener('click', ()=>{
    window.location.href = '/blog.html';
})

// document.getElementById('home').addEventListener('click', ()=>{
//     console.log('fuck you')
//     window.location.href = '/index.html';
// })