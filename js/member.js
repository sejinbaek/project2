document.getElementById("signupBtn").addEventListener("click", async ()=>{
    const email = document.getElementById("email").Value;
    const pwd = document.getElementById("pwd").Value;
    const nickname = document.getElementById("nickname").Value;

    const data = {email, pwd, nickname};

    let response = await axios.post("http://localhost:8080/insertMember", data);
    
    alert(response.data);
})