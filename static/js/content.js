const form = document.getElementById("chat-form");
const navss = document.getElementById("div1");
let font = "Helvetica Neue, Helvetica, Arial, sans-serif";


// functions for the example onclick events
function addFirstEx() {
  let value = "Explain quantum computing in simple terms";
  let textValue = document.getElementById('prompt');
  textValue.value = value;
};


function addSecondEx() {
  let value = "Got any creative ideas for a 10 year old's birthday?";
  let textValue = document.getElementById('prompt');
  textValue.value = value;
};


function addThirdEx() {
  let value = "How do I make an HTTP request in JavaScript?";
  let textValue = document.getElementById('prompt');
  textValue.value = value;
};


function sliderChange() {
  let value1 = document.getElementById('slider').value;
  let sliderValue = document.getElementById('slider-value');

  sliderValue.innerHTML = value1;
}



function sliderChange2() {
  let value1 = document.getElementById('slider2').value;
  let sliderValue2 = document.getElementById('slider-value2');

  sliderValue2.innerHTML = value1;
}


form.addEventListener("submit", async (event) => {
  event.preventDefault(); // prevent the form from submitting normally

  // Get the user's input and create a div to display it
  const input = document.getElementById("prompt").value;
  document.getElementById("main-content").style.display = "none";


  let temp = document.getElementById('slider').value;
  let tokens = document.getElementById('slider2').value;

  const main_container = document.getElementById('word-gen-areaID');
  main_container.style.justifyContent = "space-between";

  //. GETTING RID OF THE MOBILE BUTTONS
  let MobileButtons = document.getElementById("buttons-mobileID");
  
  if (MobileButtons) {
    MobileButtons.style.display = "none";
  };

  const userInput = document.createElement("div");
  userInput.textContent = input;
  navss.appendChild(userInput);

  //. Styling the newly created input element
  userInput.style.background = '#2F2F2F';
  userInput.style.color = "white";
  userInput.style.fontSize = "17px"
  userInput.style.fontFamily = font;
  userInput.style.padding = "14px";
  userInput.style.width = "max-content";
  userInput.style.alignSelf = "flex-end";
  userInput.style.borderRadius = "17px";

  const placeholder = document.createElement("div");
  placeholder.setAttribute("id", "placeholder");
  placeholder.textContent = "...";
  navss.appendChild(placeholder);

    //. Styling the newly created placeholder element
    placeholder.style.color = "white";
    placeholder.style.fontSize = "17px"
    placeholder.style.fontFamily = font;
    placeholder.style.padding = "14px";
    placeholder.style.width = "100%";
    placeholder.style.lineHeight = "22px";
    placeholder.style.textAlign = "justify";


  // Send the input to the backend and get the response
  const response = await fetch("/my_backend_endpoint", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ text: input, temp: temp, tokens: tokens}),
  });
  const data = await response.json();


  console.log(temp)

  // Display the response one word at a time
  const words = data.result.split(" ");
  let i = 0;
  // reassigning the placeholder value to ''
  placeholder.textContent = ''
  // removing the text that is in the text box
  const text = document.getElementById('prompt');
  text.value = '';

  // scrolling to bottom of content
  const myDiv = document.getElementById("div1");
  myDiv.scrollTop = myDiv.scrollHeight;

  const intervalId = setInterval(() => {
    if (i >= words.length) {
      clearInterval(intervalId);
      return;
    }
    placeholder.textContent += words[i] + " ";
    i++;
  }, 150); // 1000 ms delay between each word
});

