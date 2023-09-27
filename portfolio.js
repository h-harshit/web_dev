function sayHello() {
  // DOM manipulation
  let userName = document.getElementById("username").value;
  // alert(`Hi ${userName}! Welcome to my portfolio`);

  let helloMsgDiv = document.getElementById("hello-message-container");
  helloMsgDiv.innerText = `Hi ${userName}! Welcome to my portfolio`;
  // helloMsgDiv.innerHTML = "<span class='green-text'>Hey There</span>";

  let headerElement = document.getElementsByClassName("name-header")[0];
  headerElement.innerText = userName;
  headerElement.style.color = "red";
}
