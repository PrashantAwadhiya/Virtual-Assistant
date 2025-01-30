let btn = document.querySelector("#btn");
let content = document.querySelector("#content");
let voice = document.querySelector("#voice");

function speak(text) {
  window.speechSynthesis.cancel();
  let text_speak = new SpeechSynthesisUtterance(text);
  text_speak.rate = 1;
  text_speak.pitch = 1;
  text_speak.volume = 1;
  text_speak.lang = "hi-GB";
  window.speechSynthesis.speak(text_speak);
}

let speechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;
let recognition = new speechRecognition();

recognition.onresult = (event) => {
  let transcript = event.results[event.resultIndex][0].transcript.toLowerCase();
  content.innerText = transcript;
  takeCommand(transcript);
};

btn.addEventListener("click", () => {
  window.speechSynthesis.cancel();
  recognition.start();
  voice.style.display = "block";
  btn.style.display = "none";
});

function takeCommand(message) {
  window.speechSynthesis.cancel();
  voice.style.display = "none";
  btn.style.display = "block";

  // Greetings & Info
  if (
    message.includes("hello zoya") ||
    message.includes("hey zoya") ||
    message.includes("hello") ||
    message.includes("hey")
  ) {
    speak("Hello Sir, what can I help you with?");
  } else if (
    message.includes("who are you") ||
    message.includes("what is your name")
  ) {
    speak("I am your virtual assistant, created by Prashant Sir.");
  }

  // Social Media & Websites (Works with or without "Zoya")
  else if (
    message.includes("zoya open youtube") ||
    message.includes("open youtube")
  ) {
    speak("Opening YouTube...");
    window.open("https://youtube.com/", "_blank");
  } else if (
    message.includes("zoya open google") ||
    message.includes("open google")
  ) {
    speak("Opening Google...");
    window.open("https://google.com/", "_blank");
  } else if (
    message.includes("zoya open facebook") ||
    message.includes("open facebook")
  ) {
    speak("Opening Facebook...");
    window.open("https://facebook.com/", "_blank");
  } else if (
    message.includes("zoya open instagram") ||
    message.includes("open instagram")
  ) {
    speak("Opening Instagram...");
    window.open("https://instagram.com/", "_blank");
  } else if (
    message.includes("zoya open twitter") ||
    message.includes("zoya open x") ||
    message.includes("open twitter") ||
    message.includes("open x")
  ) {
    speak("Opening Twitter...");
    window.open("https://twitter.com/", "_blank");
  } else if (
    message.includes("zoya open linkedin") ||
    message.includes("open linkedin")
  ) {
    speak("Opening LinkedIn...");
    window.open("https://linkedin.com/", "_blank");
  } else if (
    message.includes("zoya open github") ||
    message.includes("open github")
  ) {
    speak("Opening GitHub...");
    window.open("https://github.com/", "_blank");
  } else if (
    message.includes("zoya open gmail") ||
    message.includes("open gmail") ||
    message.includes("open email")
  ) {
    speak("Opening Gmail...");
    window.open("https://mail.google.com/", "_blank");
  } else if (
    message.includes("zoya open maps") ||
    message.includes("open maps")
  ) {
    speak("Opening Google Maps...");
    window.open("https://www.google.com/maps", "_blank");
  } else if (
    message.includes("zoya open weather") ||
    message.includes("open weather")
  ) {
    speak("Checking the weather...");
    window.open("https://www.weather.com/", "_blank");
  } else if (
    message.includes("zoya open translate") ||
    message.includes("open translate")
  ) {
    speak("Opening Google Translate...");
    window.open("https://translate.google.com/", "_blank");
  } else if (
    message.includes("zoya open calculator") ||
    message.includes("open calculator")
  ) {
    speak("Opening calculator...");
    window.open("calculator://");
  } else if (
    message.includes("zoya open whatsapp") ||
    message.includes("open whatsapp")
  ) {
    speak("Opening WhatsApp...");
    window.open("whatsapp://");
  }

  // Time & Date
  else if (message.includes("time") || message.includes("what is the time")) {
    let time = new Date().toLocaleString(undefined, {
      hour: "numeric",
      minute: "numeric",
    });
    speak("The time is " + time);
  } else if (message.includes("date") || message.includes("what is the date")) {
    let date = new Date().toLocaleString(undefined, {
      day: "numeric",
      month: "short",
    });
    speak("Today's date is " + date);
  } else if (message.includes("search for")) {
    let query = message.replace("search for", "").trim();
    speak("Searching for " + query);
    window.open(`https://www.google.com/search?q=${query}`, "_blank");
  } else if (
    message.includes("tell me a joke") ||
    message.includes("make me laugh") ||
    message.includes("zoya tell me a joke")
  ) {
    let jokes = [
      "Why don’t skeletons fight each other? Because they don’t have the guts!",
      "I told my wife she should embrace her mistakes. She gave me a hug!",
      "Why did the scarecrow win an award? Because he was outstanding in his field!",
    ];
    let joke = jokes[Math.floor(Math.random() * jokes.length)];
    speak(joke);
  } else if (
    message.includes("weather forecast") ||
    message.includes("forecast")
  ) {
    let city = message.replace("weather forecast for", "").trim();
    speak("Checking the weather forecast for " + city);
    window.open(`https://www.weather.com/weather/${city}`, "_blank");
  } else if (
    message.includes("tell me a quote") ||
    message.includes("inspire me") ||
    message.includes("zoya tell me a quote")
  ) {
    let quotes = [
      "Believe in yourself and all that you are. Know that there is something inside you that is greater than any obstacle.",
      "Success is not final, failure is not fatal: It is the courage to continue that counts.",
      "Opportunities don’t happen, you create them.",
    ];
    let quote = quotes[Math.floor(Math.random() * quotes.length)];
    speak(quote);
  } else {
    let finalText =
      "This is what I found on the internet regarding " +
      message.replace("zoya", "");
    speak(finalText);
    window.open(
      `https://www.google.com/search?q=${message.replace("zoya", "")}`,
      "_blank"
    );
  }
}
