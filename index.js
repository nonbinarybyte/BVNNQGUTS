document.getElementById('news').addEventListener('submit', async function(e) {
e.preventDefault();
const email = document.getElementById('email').value;
const res = await fetch('/subscribe.php', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email })
});
const msg = await res.text();
document.getElementById('message').innerText = msg;
});