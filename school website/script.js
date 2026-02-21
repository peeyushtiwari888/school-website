// Function to handle login/register (simple alert for now)
function openLogin() {
  alert("Login/Register system coming soon!");
}

// Contact form submission handler
document.addEventListener("DOMContentLoaded", function () {
  const contactForm = document.getElementById("contact-form");

  if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault(); // Prevent page reload
      alert("Thank you for contacting us! We'll get back to you shortly.");
      contactForm.reset(); // Optional: clear form
    });
  }

  // Newsletter form
  const newsletterForm = document.querySelector("#newsletter form");

  if (newsletterForm) {
    newsletterForm.addEventListener("submit", function (e) {
      e.preventDefault();
      const emailInput = newsletterForm.querySelector("input[type='email']");
      if (emailInput.value.trim() === "") {
        alert("Please enter a valid email.");
      } else {
        alert("Thanks for subscribing!");
        emailInput.value = ""; // Clear input
      }
    });
  }
});



// result
  window.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.fill').forEach(bar => {
      const percent = bar.getAttribute('data-percent');
      bar.style.width = percent;
    });
  });

//   login
  function openLogin() {
    const loginSection = document.getElementById("login");
    loginSection.style.display = (loginSection.style.display === "none" || loginSection.style.display === "") ? "block" : "none";
  }

//   

let student = document.getElementById("students");
let teacher = document.getElementById("teachers");
let achievement = document.getElementById("achievements");

let count = 0;
let interval = setInterval(() => {
  if (count <= 200) {
    student.innerText = count;
    teacher.innerText = Math.floor(count / 10); // e.g., 0 to 20
    achievement.innerText = Math.floor(count / 5); // e.g., 0 to 40
    count++;
  } else {
    clearInterval(interval);
  }
}, 30);

// student fun zone
const jokes = [
  "Computer school kyu gaya? Apni 'byte' sudharne! 💻",
  "Pencil ne sharpener se kya bola? Yaar bas ghoomna band karo! ✏️",
  "Books hamesha udaas kyu hoti hain? Kyuki unme bahut saare problems hote hain! 📚",
  "Teacher: Tum exam me late kyu aaye? Student: Sir sapne me paper de raha tha, sapna khatam hone me time lag gaya! 🛌📄",
  "Maths book itni sad kyu hoti hai? Kyuki uske paas bohot saare problems hote hain! 😢📘",
  "Computer school gaya aur top bhi kiya... kyuki usme already bohot data tha! 🧠💻",
  "Pencil ne eraser se bola: Tum hamesha mujhe mita dete ho, kya dosti hai yeh! 😤✏️🧽",
  "Teacher: Why are you talking in class? Student: Kyuki voice note nahi bhej sakte the! 📱🤣",
  "Science ne bola History se: Tu purana ho gaya yaar, ab mera zamana hai! ⚗️📜",
  "Pen ne paper se bola: Tumhare bina main adhoora hoon! ❤️🖊️📄",
  "Student: Mere marks Whatsapp status jaise hain… sirf kuch log hi dekh paate hain! 😅📉",
  "Book bolti hai: Mujhe padho ya na padho, par mujhe dhool mein mat rakho! 😤📚",
  "Lunch box ne water bottle se bola: Tum toh sirf ghoomte rehte ho, kaam main karta hoon! 🍱🥤"
];

const facts = [
  "Kya aap jaante hain? Shahad kabhi kharab nahi hota! 🍯",
  "Shark pedon se pehle se zinda hain! 🦈🌳",
  "Jab aap apna favourite music sunte ho, toh aapka dil uske saath beat karta hai! 🎵❤️",
  "Kya aap jaante ho? Aapke finger prints jaise hi tongue print bhi unique hote hain! 👅🧬",
  "Octopus ke 3 dil hote hain – aur har exam me fail ho jaye toh bhi theek hai! 🐙❤️❤️❤️",
  "Aapki body me itni heat hoti hai ki 30 mins me 1 liter pani boil ho sakta hai! 🔥💧",
  "Honey kabhi expire nahi hota – 3000 saal purana honey bhi mil chuka hai! 🍯😮",
  "Shark pedon se bhi purane hain – unki age lakbhag 400 million saal hai! 🦈🌲",
  "Apne haathon ki 1 ungli ke nails tez grow karte hain compared to others! 💅",
  "Human brain ek second me 1000+ signals bhej sakta hai – jaise WhatsApp par forward! 🧠📨",
  "Aap jab kuch tasty khate ho toh aapke brain me dopamine release hota hai – happiness chemical! 🍕😋",
  "Turtles bina oxygen ke ghanto tak survive kar sakte hain – full chill mode! 🐢💨",
  "Your heart music ke rhythm ke saath sync ho sakta hai – soch lo, dance kaise kaam karta hai! 🎧💓"
];

document.getElementById("jokeText").innerText = jokes[Math.floor(Math.random() * jokes.length)];
document.getElementById("factText").innerText = facts[Math.floor(Math.random() * facts.length)];

// quiz

const quizData = [
  {
    question: "🦁 Which is the king of the jungle?",
    options: ["Tiger", "Leopard", "Lion", "Elephant"],
    answer: "Lion"
  },
  {
    question: "🌍 What planet do we live on?",
    options: ["Mars", "Venus", "Earth", "Jupiter"],
    answer: "Earth"
  },
  {
    question: "📚 What does HTML stand for?",
    options: ["Hot Mail", "HyperText Markup Language", "How To Make Life", "HighText Markdown Language"],
    answer: "HyperText Markup Language"
  },
  {
    question: "🔢 5 + 3 × 2 = ?",
    options: ["16", "11", "10", "8"],
    answer: "11"
  },
  {
    question: "🎨 Which color is made by mixing red and blue?",
    options: ["Pink", "Purple", "Orange", "Green"],
    answer: "Purple"
  },
  {
    question: "Maths ka emoji kaunsa hai?",
    options: ["📐", "🎨", "🌍", "🏃"],
    answer: "📐"
  },
  {
    question: "Art ke liye emoji?",
    options: ["🎨", "🔬", "📚", "🧠"],
    answer: "🎨"
  },
  {
    question: "Science subject ka icon?",
    options: ["⚽", "🔬", "🎭", "🎼"],
    answer: "🔬"
  },
  {
    question: "Geography ka emoji kya ho sakta hai?",
    options: ["🌍", "📐", "🎨", "🎮"],
    answer: "🌍"
  },
  {
    question: "Who is known as the father of computers?",
    options: ["Charles Babbage", "Alan Turing", "Steve Jobs", "Bill Gates"],
    answer: "Charles Babbage"
  },
  {
    question: "Water freezes at what temperature (°C)?",
    options: ["0", "100", "50", "10"],
    answer: "0"
  },
  {
    question: "Emoji for music?",
    options: ["🎶", "🔭", "📘", "✏️"],
    answer: "🎶"
  },
  {
    question: "Which planet is known as the Red Planet?",
    options: ["Mars", "Earth", "Jupiter", "Venus"],
    answer: "Mars"
  },
  {
    question: "What is the capital of India?",
    options: ["Delhi", "Mumbai", "Kolkata", "Chennai"],
    answer: "Delhi"
  },
];

let currentQ = 0;
let score = 0;
let correctCount = 0;
let wrongCount = 0;

const questionBox = document.getElementById("question");
const optionsBox = document.getElementById("options");
const nextBtn = document.getElementById("next-btn");
const scoreBox = document.getElementById("score-box");

function showQuestion() {
  let q = quizData[currentQ];
  questionBox.innerText = q.question;
  optionsBox.innerHTML = "";
  nextBtn.style.display = "none";

  q.options.forEach(opt => {
    let btn = document.createElement("button");
    btn.innerText = opt;
    btn.classList.add("option-btn");
    btn.onclick = () => selectAnswer(btn, q.answer);
    optionsBox.appendChild(btn);
  });
}

function selectAnswer(btn, correctAns) {
  const allOptions = document.querySelectorAll(".option-btn");
  allOptions.forEach(button => button.disabled = true);

  if (btn.innerText === correctAns) {
    btn.style.backgroundColor = "#a5d6a7"; // green
    correctCount++;
    score += 10;
  } else {
    btn.style.backgroundColor = "#ef9a9a"; // red
    wrongCount++;
  }

  nextBtn.style.display = "inline-block";
}

nextBtn.addEventListener("click", () => {
  currentQ++;
  if (currentQ < quizData.length) {
    showQuestion();
  } else {
    showScore();
  }
});

function showScore() {
  questionBox.innerText = "🎉 Quiz Completed!";
  optionsBox.innerHTML = "";
  nextBtn.style.display = "none";
  scoreBox.innerHTML = `
    Total Score: ${score} / ${quizData.length * 10}<br>
    ✅ Correct: ${correctCount}<br>
    ❌ Wrong: ${wrongCount}
  `;
}

showQuestion();

