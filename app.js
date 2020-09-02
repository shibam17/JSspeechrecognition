window.SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new SpeechRecognition();
recognition.lang = "en-US";

let finalDirection;

recognition.addEventListener("result", (e) => {
  const hello = Array.from(e.results).map((result) => result[0].transcript);
  finalDirection = hello[0];
  console.log(finalDirection);
});

recognition.addEventListener("end", (e) => {
  if (finalDirection === "done") {
    recognition.stop();
  } else {
    recognition.start();
  }
});

recognition.start();
