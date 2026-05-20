async function handleLogin() {
    const user = document.getElementById('username');
    const pw = document.getElementById('password');
    let valid = true;

    user.classList.remove('error');
    pw.classList.remove('error');

    if (!user.value.trim()) {
        user.classList.add('error');
        valid = false;
    }

    if (!pw.value) {
        pw.classList.add('error');
        valid = false;
    }

    if (!valid) return;

    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({username: user.value, password: pw.value})
        });

        const data = await response.json();
        console.log("login success");
        console.log("id: " + data.id)

        if (response.ok) {
            // 로그인 성공 시 Home 화면으로 이동
            window.location.href = './home.html';
        } else {
            alert('로그인 실패');
        }
    } catch (error) {
        alert('서버 오류가 발생했습니다.');
        console.error(error);
    }
}