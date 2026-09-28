/* =========================================================
   STUDY BUDDY
   Interactive Study Website
========================================================= */


/* -----------------------------
   BASIC HELPERS
----------------------------- */

const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => document.querySelectorAll(selector);


/* -----------------------------
   PRELOADER
----------------------------- */

window.addEventListener("load", () => {

  setTimeout(() => {
    $("#preloader").classList.add("hide");
  }, 900);

});


/* -----------------------------
   YEAR
----------------------------- */

$("#year").textContent = new Date().getFullYear();


/* -----------------------------
   MOBILE MENU
----------------------------- */

const menuButton = $("#menuButton");
const navMenu = $("#navMenu");

menuButton.addEventListener("click", () => {

  navMenu.classList.toggle("mobile-open");

  if (navMenu.classList.contains("mobile-open")) {

    navMenu.style.display = "flex";
    navMenu.style.position = "absolute";
    navMenu.style.top = "75px";
    navMenu.style.left = "0";
    navMenu.style.right = "0";
    navMenu.style.padding = "20px";
    navMenu.style.flexDirection = "column";
    navMenu.style.background = "rgba(255,255,255,.96)";
    navMenu.style.borderRadius = "20px";
    navMenu.style.boxShadow = "0 20px 40px rgba(2,61,53,.12)";

  } else {

    navMenu.removeAttribute("style");

  }

});


/* Close mobile menu after clicking */

$$(".navbar nav a").forEach(link => {

  link.addEventListener("click", () => {

    if (window.innerWidth <= 950) {
      navMenu.classList.remove("mobile-open");
      navMenu.removeAttribute("style");
    }

  });

});


/* -----------------------------
   SCROLL REVEAL
----------------------------- */

const revealObserver = new IntersectionObserver(

  (entries) => {

    entries.forEach(entry => {

      if (entry.isIntersecting) {

        entry.target.classList.add("visible");
        revealObserver.unobserve(entry.target);

      }

    });

  },

  {
    threshold: 0.12
  }

);

$$(".reveal").forEach(element => {
  revealObserver.observe(element);
});


/* -----------------------------
   BACKGROUND PARTICLES
----------------------------- */

const particleContainer = $("#particles");

for (let i = 0; i < 38; i++) {

  const particle = document.createElement("span");

  particle.className = "particle";

  particle.style.left = `${Math.random() * 100}%`;
  particle.style.animationDuration = `${12 + Math.random() * 18}s`;
  particle.style.animationDelay = `${Math.random() * -20}s`;
  particle.style.opacity = `${0.08 + Math.random() * 0.18}`;

  particleContainer.appendChild(particle);

}


/* -----------------------------
   MOUSE PARALLAX
----------------------------- */

document.addEventListener("mousemove", (event) => {

  const x = (event.clientX / window.innerWidth - 0.5) * 2;
  const y = (event.clientY / window.innerHeight - 0.5) * 2;

  $$(".object").forEach(object => {

    const speed = Number(object.dataset.speed || 1);

    object.style.transform =
      `translate(${x * speed * 12}px, ${y * speed * 12}px)`;

  });

});


/* -----------------------------
   TYPING ANIMATION
----------------------------- */

const typingWords = [
  "Mathematics",
  "Science",
  "Revision",
  "Practice",
  "New ideas"
];

let wordIndex = 0;
let letterIndex = 0;
let deleting = false;

const typingText = $("#typingText");

function typeAnimation() {

  const currentWord = typingWords[wordIndex];

  if (!deleting) {

    typingText.textContent =
      currentWord.substring(0, letterIndex + 1);

    letterIndex++;

    if (letterIndex === currentWord.length) {

      deleting = true;

      setTimeout(typeAnimation, 1200);
      return;

    }

  } else {

    typingText.textContent =
      currentWord.substring(0, letterIndex - 1);

    letterIndex--;

    if (letterIndex === 0) {

      deleting = false;
      wordIndex++;

      if (wordIndex >= typingWords.length) {
        wordIndex = 0;
      }

    }

  }

  setTimeout(
    typeAnimation,
    deleting ? 55 : 95
  );

}

typeAnimation();


/* =========================================================
   PRACTICE QUESTION DATABASE
========================================================= */

const questionBank = {

  Mathematics: {

    Fractions: [

      {
        q: "Which fraction is equivalent to 1/2?",
        options: ["2/4", "3/5", "4/7", "5/8"],
        answer: 0
      },

      {
        q: "What is 1/4 + 1/4?",
        options: ["1/2", "1/4", "2/3", "3/4"],
        answer: 0
      },

      {
        q: "Which fraction is greater?",
        options: ["1/5", "3/5", "2/5", "1/10"],
        answer: 1
      },

      {
        q: "What is 3/4 − 1/4?",
        options: ["1/4", "1/2", "2/4", "3/4"],
        answer: 1
      },

      {
        q: "What is the numerator of 7/9?",
        options: ["7", "9", "16", "2"],
        answer: 0
      },

      {
        q: "Which fraction represents one whole?",
        options: ["1/2", "2/3", "5/5", "4/5"],
        answer: 2
      },

      {
        q: "What is 2/3 + 1/3?",
        options: ["1", "2/3", "1/3", "4/3"],
        answer: 0
      },

      {
        q: "What is 5/8 − 2/8?",
        options: ["2/8", "3/8", "4/8", "7/8"],
        answer: 1
      }

    ],

    Algebra: [

      {
        q: "If x = 5, what is x + 3?",
        options: ["2", "8", "15", "53"],
        answer: 1
      },

      {
        q: "Which is a variable?",
        options: ["7", "12", "x", "20"],
        answer: 2
      },

      {
        q: "What is 3x when x = 4?",
        options: ["7", "12", "16", "34"],
        answer: 1
      },

      {
        q: "Simplify: 2x + 3x.",
        options: ["5x", "6x", "5", "x"],
        answer: 0
      },

      {
        q: "If a = 10, what is a − 4?",
        options: ["5", "6", "14", "40"],
        answer: 1
      },

      {
        q: "Which expression means '5 more than x'?",
        options: ["5x", "x − 5", "x + 5", "x/5"],
        answer: 2
      }

    ],

    "Linear Equations": [

      {
        q: "Solve: x + 5 = 12.",
        options: ["5", "6", "7", "17"],
        answer: 2
      },

      {
        q: "Solve: x − 4 = 9.",
        options: ["5", "13", "36", "−13"],
        answer: 1
      },

      {
        q: "If 2x = 14, x is:",
        options: ["5", "6", "7", "8"],
        answer: 2
      },

      {
        q: "Solve: x/3 = 4.",
        options: ["1", "7", "12", "16"],
        answer: 2
      },

      {
        q: "Solve: 3x + 2 = 11.",
        options: ["2", "3", "4", "5"],
        answer: 1
      }

    ],

    Geometry: [

      {
        q: "How many sides does a triangle have?",
        options: ["2", "3", "4", "5"],
        answer: 1
      },

      {
        q: "How many degrees are there in a straight angle?",
        options: ["90°", "120°", "180°", "360°"],
        answer: 2
      },

      {
        q: "A square has how many equal sides?",
        options: ["2", "3", "4", "5"],
        answer: 2
      },

      {
        q: "What is the sum of angles of a triangle?",
        options: ["90°", "180°", "270°", "360°"],
        answer: 1
      },

      {
        q: "A right angle measures:",
        options: ["45°", "60°", "90°", "180°"],
        answer: 2
      }

    ]

  },


  Science: {

    "Plants": [

      {
        q: "Which part of a plant usually absorbs water from the soil?",
        options: ["Leaf", "Root", "Flower", "Fruit"],
        answer: 1
      },

      {
        q: "Which pigment helps plants absorb light?",
        options: ["Chlorophyll", "Haemoglobin", "Melanin", "Keratin"],
        answer: 0
      },

      {
        q: "Photosynthesis mainly takes place in:",
        options: ["Roots", "Leaves", "Flowers", "Seeds"],
        answer: 1
      },

      {
        q: "Which gas is used during photosynthesis?",
        options: ["Oxygen", "Nitrogen", "Carbon dioxide", "Hydrogen"],
        answer: 2
      },

      {
        q: "Which gas is released during photosynthesis?",
        options: ["Oxygen", "Carbon dioxide", "Nitrogen", "Hydrogen"],
        answer: 0
      }

    ],

    "Cells": [

      {
        q: "The basic structural and functional unit of life is:",
        options: ["Tissue", "Organ", "Cell", "Organ system"],
        answer: 2
      },

      {
        q: "Which organelle controls many activities of the cell?",
        options: ["Nucleus", "Ribosome", "Vacuole", "Cell wall"],
        answer: 0
      },

      {
        q: "Plant cells have a rigid outer structure called:",
        options: ["Cell membrane", "Cell wall", "Cytoplasm", "Nucleus"],
        answer: 1
      },

      {
        q: "Which organelle is often called the powerhouse of the cell?",
        options: ["Nucleus", "Mitochondria", "Vacuole", "Golgi apparatus"],
        answer: 1
      }

    ],

    "Matter": [

      {
        q: "Matter is anything that has mass and occupies:",
        options: ["Light", "Space", "Energy only", "Time"],
        answer: 1
      },

      {
        q: "Which state of matter has a fixed shape and fixed volume?",
        options: ["Solid", "Liquid", "Gas", "Plasma"],
        answer: 0
      },

      {
        q: "Which state of matter takes the shape of its container but has a fixed volume?",
        options: ["Solid", "Liquid", "Gas", "None"],
        answer: 1
      },

      {
        q: "Water vapour is a:",
        options: ["Solid", "Liquid", "Gas", "Mixture only"],
        answer: 2
      }

    ]

  },


  English: {

    Grammar: [

      {
        q: "Choose the correct sentence.",
        options: [
          "She go to school.",
          "She goes to school.",
          "She going school.",
          "She gone to school."
        ],
        answer: 1
      },

      {
        q: "Identify the noun: 'The cat is sleeping.'",
        options: ["The", "cat", "is", "sleeping"],
        answer: 1
      },

      {
        q: "Choose the correct past tense of 'go'.",
        options: ["goed", "goes", "went", "going"],
        answer: 2
      },

      {
        q: "Which word is an adjective?",
        options: ["quickly", "beautiful", "run", "happiness"],
        answer: 1
      }

    ],

    Vocabulary: [

      {
        q: "Choose the synonym of 'happy'.",
        options: ["Sad", "Joyful", "Angry", "Tired"],
        answer: 1
      },

      {
        q: "Choose the antonym of 'ancient'.",
        options: ["Old", "Modern", "Historic", "Past"],
        answer: 1
      },

      {
        q: "A person who writes books is called an:",
        options: ["Author", "Actor", "Artist", "Editor"],
        answer: 0
      }

    ]

  },


  "Social Science": {

    "Geography": [

      {
        q: "Which is the largest continent?",
        options: ["Africa", "Asia", "Europe", "Australia"],
        answer: 1
      },

      {
        q: "Which ocean is the largest?",
        options: ["Indian", "Atlantic", "Pacific", "Arctic"],
        answer: 2
      },

      {
        q: "The Equator divides Earth into:",
        options: [
          "East and West",
          "North and South",
          "Land and Water",
          "Hot and Cold"
        ],
        answer: 1
      }

    ],

    "Civics": [

      {
        q: "Democracy means government by:",
        options: ["A single ruler", "The people", "The army", "Judges"],
        answer: 1
      },

      {
        q: "The Constitution provides the framework for:",
        options: [
          "Government",
          "Weather",
          "Agriculture only",
          "Sports"
        ],
        answer: 0
      }

    ]

  },


  Hindi: {

    Vyakaran: [

      {
        q: "‘राम’ किस प्रकार की संज्ञा है?",
        options: ["जातिवाचक", "व्यक्तिवाचक", "भाववाचक", "समूहवाचक"],
        answer: 1
      },

      {
        q: "‘सुंदर’ शब्द किस प्रकार का शब्द है?",
        options: ["संज्ञा", "सर्वनाम", "विशेषण", "क्रिया"],
        answer: 2
      },

      {
        q: "‘वह स्कूल जाता है।’ वाक्य में सर्वनाम कौन-सा है?",
        options: ["वह", "स्कूल", "जाता", "है"],
        answer: 0
      }

    ]

  }

};


/* =========================================================
   QUESTION GENERATOR
========================================================= */

const practiceForm = $("#practiceForm");
const questionSection = $("#questionArea");
const questionsContainer = $("#questionsContainer");

let currentQuestions = [];
let currentSettings = {};
let quizChecked = false;


/* Find questions for selected topic */

function findQuestions(subject, topic) {

  const subjectData = questionBank[subject];

  if (!subjectData) {
    return [];
  }

  const topicLower = topic.toLowerCase().trim();

  const exactTopic = Object.keys(subjectData).find(
    key => key.toLowerCase() === topicLower
  );

  if (exactTopic) {
    return subjectData[exactTopic];
  }

  const partialTopic = Object.keys(subjectData).find(
    key =>
      key.toLowerCase().includes(topicLower) ||
      topicLower.includes(key.toLowerCase())
  );

  if (partialTopic) {
    return subjectData[partialTopic];
  }

  /* If chapter isn't in the demo bank,
     combine available questions */

  return Object.values(subjectData).flat();

}


/* Shuffle */

function shuffle(array) {

  const copy = [...array];

  for (let i = copy.length - 1; i > 0; i--) {

    const j = Math.floor(Math.random() * (i + 1));

    [copy[i], copy[j]] = [copy[j], copy[i]];

  }

  return copy;

}


/* Generate questions */

function generateQuestions() {

  const classValue = $("#practiceClass").value;
  const subject = $("#practiceSubject").value;
  const book = $("#practiceBook").value;
  const topic = $("#practiceChapter").value.trim();
  const difficulty = $("#difficulty").value;
  const count = Number($("#questionCount").value);

  let questions = findQuestions(subject, topic);

  if (!questions.length) {

    showToast(
      "This topic is not available in the demo question bank yet.",
      "!"
    );

    return;

  }

  questions = shuffle(questions);

  let finalQuestions = [];

  for (let i = 0; i < count; i++) {
    finalQuestions.push(
      questions[i % questions.length]
    );
  }

  currentQuestions = finalQuestions;

  currentSettings = {
    classValue,
    subject,
    book,
    topic,
    difficulty,
    count
  };

  quizChecked = false;

  renderQuestions();

  questionSection.classList.add("show");

  setTimeout(() => {

    questionSection.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });

  }, 100);

}


/* Form submit */

practiceForm.addEventListener("submit", (event) => {

  event.preventDefault();

  generateQuestions();

});


/* Render questions */

function renderQuestions() {

  questionsContainer.innerHTML = "";

  $("#quizTitle").textContent =
    `${currentSettings.subject} Practice`;

  $("#quizSubtitle").textContent =
    `Class ${currentSettings.classValue} • ${currentSettings.topic} • ${currentSettings.difficulty}`;

  $("#scoreDisplay").textContent =
    `0 / ${currentQuestions.length}`;

  $("#quizProgressBar").style.width = "0%";

  currentQuestions.forEach((question, index) => {

    const card = document.createElement("div");

    card.className = "question-card";

    let optionsHTML = "";

    question.options.forEach((option, optionIndex) => {

      optionsHTML += `
        <label class="option">
          <input
            type="radio"
            name="question-${index}"
            value="${optionIndex}"
          >
          <span>${option}</span>
        </label>
      `;

    });

    card.innerHTML = `
      <div class="question-number">
        QUESTION ${String(index + 1).padStart(2, "0")}
      </div>

      <div class="question-text">
        ${question.q}
      </div>

      <div class="options">
        ${optionsHTML}
      </div>

      <div class="answer-note">
        <strong></strong>
        <span></span>
      </div>
    `;

    questionsContainer.appendChild(card);

  });

  /* Progress when selecting answers */

  $$('input[type="radio"]').forEach(input => {

    input.addEventListener("change", updateQuizProgress);

  });

}


/* Update progress */

function updateQuizProgress() {

  const answered =
    $$('input[type="radio"]:checked').length;

  const total =
    currentQuestions.length;

  const percentage =
    total === 0 ? 0 : (answered / total) * 100;

  $("#quizProgressBar").style.width =
    `${percentage}%`;

}


/* -----------------------------
   CHECK ANSWERS
----------------------------- */

$("#checkAnswers").addEventListener("click", () => {

  if (!currentQuestions.length) {

    showToast("Generate a practice set first.", "!");

    return;

  }

  let score = 0;

  const cards = $$(".question-card");

  cards.forEach((card, index) => {

    card.classList.remove("correct", "wrong", "checked");

    const selected =
      card.querySelector("input[type='radio']:checked");

    const noteStrong =
      card.querySelector(".answer-note strong");

    const noteSpan =
      card.querySelector(".answer-note span");

    card.classList.add("checked");

    if (selected) {

      const selectedValue =
        Number(selected.value);

      if (selectedValue === currentQuestions[index].answer) {

        score++;

        card.classList.add("correct");

        noteStrong.textContent = "Correct! ";

        noteSpan.textContent =
          "Great job.";

      } else {

        card.classList.add("wrong");

        noteStrong.textContent = "Not quite. ";

        noteSpan.textContent =
          `Correct answer: ${currentQuestions[index].options[currentQuestions[index].answer]}`;

      }

    } else {

      card.classList.add("wrong");

      noteStrong.textContent = "Not answered. ";

      noteSpan.textContent =
        `Correct answer: ${currentQuestions[index].options[currentQuestions[index].answer]}`;

    }

  });

  quizChecked = true;

  $("#scoreDisplay").textContent =
    `${score} / ${currentQuestions.length}`;

  const percentage =
    Math.round((score / currentQuestions.length) * 100);

  $("#quizProgressBar").style.width =
    `${percentage}%`;

  const result = $("#quizResult");

  result.classList.add("show");

  result.innerHTML = `
    <strong>${score}/${currentQuestions.length}</strong>
    <br>
    You scored ${percentage}% in this practice set.
    <br><br>
    ${
      percentage >= 80
        ? "Excellent work. Keep practising."
        : percentage >= 50
        ? "Good effort. Review the incorrect answers and try again."
        : "Keep practising. Every mistake is another thing you can learn from."
    }
  `;

  result.scrollIntoView({
    behavior: "smooth",
    block: "nearest"
  });

});


/* -----------------------------
   TRY AGAIN
----------------------------- */

$("#tryAgain").addEventListener("click", () => {

  if (!currentQuestions.length) {

    showToast("Generate a practice set first.", "!");

    return;

  }

  generateQuestions();

});


/* -----------------------------
   CLASS CARD → PRACTICE
----------------------------- */

$$(".class-card").forEach(card => {

  card.addEventListener("click", () => {

    const selectedClass =
      card.dataset.class;

    $("#practiceClass").value =
      selectedClass;

    $("#practice").scrollIntoView({
      behavior: "smooth"
    });

    setTimeout(() => {

      $("#practiceSubject").focus();

    }, 700);

    showToast(
      `Class ${selectedClass} selected.`,
      "✓"
    );

  });

});


/* =========================================================
   FORMspree FORMS
========================================================= */

const FORMSPREE_ENDPOINT = "https://formspree.io/f/meaopbqv";

const doubtImage = $("#doubtImage");

if (doubtImage) {
  doubtImage.addEventListener("change", () => {
    $("#fileName").textContent = doubtImage.files.length
      ? doubtImage.files[0].name
      : "No file selected";
  });
}

async function submitToFormspree(form, statusElement, submitButton, localKey) {
  const originalButtonHTML = submitButton.innerHTML;
  const formData = new FormData(form);

  submitButton.disabled = true;
  submitButton.innerHTML = "Sending... <span>↗</span>";
  statusElement.textContent = "";
  statusElement.className = "form-status";

  try {
    const response = await fetch(FORMSPREE_ENDPOINT, {
      method: "POST",
      body: formData,
      headers: {
        Accept: "application/json"
      }
    });

    const result = await response.json().catch(() => ({}));

    if (!response.ok) {
      const message = result?.errors?.map(error => error.message).join(" ")
        || "The form could not be submitted. Please try again.";
      throw new Error(message);
    }

    const localData = Object.fromEntries(formData.entries());
    if (localData.doubt_image instanceof File) {
      localData.doubt_image = localData.doubt_image.name || null;
    }
    localData.createdAt = new Date().toISOString();
    saveLocalData(localKey, localData);

    form.reset();

    if (form.id === "doubtForm") {
      $("#fileName").textContent = "No file selected";
    }

    statusElement.textContent = "Submitted successfully. Your request has been received.";
    statusElement.className = "form-status success";
    showToast("Submitted successfully!", "✓");

  } catch (error) {
    console.error("Formspree submission error:", error);
    statusElement.textContent = error.message || "Something went wrong. Please try again.";
    statusElement.className = "form-status error";
    showToast("Submission failed. Please try again.", "!");
  } finally {
    submitButton.disabled = false;
    submitButton.innerHTML = originalButtonHTML;
  }
}

const doubtForm = $("#doubtForm");
const worksheetForm = $("#worksheetForm");

if (doubtForm) {
  doubtForm.addEventListener("submit", (event) => {
    event.preventDefault();

    submitToFormspree(
      doubtForm,
      $("#doubtStatus"),
      $("#doubtSubmitBtn"),
      "studyBuddyDoubts"
    );
  });
}

if (worksheetForm) {
  worksheetForm.addEventListener("submit", (event) => {
    event.preventDefault();

    submitToFormspree(
      worksheetForm,
      $("#worksheetStatus"),
      $("#worksheetSubmitBtn"),
      "studyBuddyWorksheets"
    );
  });
}

/* -----------------------------
   LOCAL STORAGE
----------------------------- */

function saveLocalData(key, data) {
  const existing = JSON.parse(
    localStorage.getItem(key) || "[]"
  );

  existing.push(data);

  localStorage.setItem(
    key,
    JSON.stringify(existing)
  );
}


/* =========================================================
   RESOURCE BUTTONS
========================================================= */

$$(".resource-button").forEach(button => {

  button.addEventListener("click", () => {

    const resource =
      button.dataset.resource;

    showToast(
      `${resource} section is being prepared.`,
      "✦"
    );

  });

});


/* =========================================================
   TOAST
========================================================= */

let toastTimer;

function showToast(message, icon = "✓") {

  const toast = $("#toast");

  $("#toastMessage").textContent =
    message;

  $("#toastIcon").textContent =
    icon;

  toast.classList.add("show");

  clearTimeout(toastTimer);

  toastTimer = setTimeout(() => {

    toast.classList.remove("show");

  }, 3200);

}


/* =========================================================
   BUTTON RIPPLE
========================================================= */

$$(".btn").forEach(button => {

  button.addEventListener("click", function(event) {

    const ripple =
      document.createElement("span");

    ripple.style.position = "absolute";
    ripple.style.width = "10px";
    ripple.style.height = "10px";
    ripple.style.borderRadius = "50%";
    ripple.style.background = "rgba(255,255,255,.35)";
    ripple.style.left =
      `${event.offsetX}px`;
    ripple.style.top =
      `${event.offsetY}px`;
    ripple.style.transform = "translate(-50%,-50%)";
    ripple.style.pointerEvents = "none";

    ripple.animate(

      [
        {
          width: "10px",
          height: "10px",
          opacity: 1
        },

        {
          width: "400px",
          height: "400px",
          opacity: 0
        }

      ],

      {
        duration: 650,
        easing: "ease-out"
      }

    );

    this.appendChild(ripple);

    setTimeout(() => {

      ripple.remove();

    }, 700);

  });

});


/* =========================================================
   ACTIVE NAVIGATION
========================================================= */

const sections =
  $$("main section[id]");

const navLinks =
  $$(".navbar nav a");

window.addEventListener("scroll", () => {

  let current = "";

  sections.forEach(section => {

    const sectionTop =
      section.offsetTop - 180;

    if (window.scrollY >= sectionTop) {

      current =
        section.getAttribute("id");

    }

  });

  navLinks.forEach(link => {

    link.classList.remove("active");

    if (
      link.getAttribute("href") ===
      `#${current}`
    ) {

      link.classList.add("active");

    }

  });

});


/* =========================================================
   PRACTICE FORM SMART DEFAULTS
========================================================= */

$("#practiceSubject").addEventListener("change", () => {

  const subject =
    $("#practiceSubject").value;

  const topicInput =
    $("#practiceChapter");

  const examples = {

    Mathematics: "Fractions",
    Science: "Plants",
    English: "Grammar",
    "Social Science": "Geography",
    Hindi: "Vyakaran"

  };

  if (examples[subject]) {

    topicInput.placeholder =
      `e.g. ${examples[subject]}`;

  }

});


/* =========================================================
   KEYBOARD SHORTCUT
========================================================= */

document.addEventListener("keydown", (event) => {

  if (
    event.key === "/" &&
    document.activeElement.tagName !== "INPUT" &&
    document.activeElement.tagName !== "TEXTAREA"
  ) {

    event.preventDefault();

    $("#practiceChapter").focus();

    $("#practice").scrollIntoView({
      behavior: "smooth"
    });

  }

});


/* =========================================================
   CONSOLE MESSAGE
========================================================= */

console.log(
  "%cStudy Buddy 🌿",
  "font-size:22px;font-weight:bold;color:#07866b;"
);

console.log(
  "Interactive practice system loaded successfully."
);