function welcome(){
    let userName = document.getElementById('userName').value;
    let userAge = document.getElementById('userAge').value;
    
    return alert(`Welcome ${userName}, you're ${userAge} years old`);
}
