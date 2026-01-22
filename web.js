// Declare global variables to store user data
let userName, fatherName, grNumber, email, shift;

// Handle form submission
document
  .getElementById("registerForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    // Capture form data
    userName = document.getElementById("name").value;
    fatherName = document.getElementById("fathername").value;
    grNumber = document.getElementById("grnumber").value;
    email = document.getElementById("email").value;
    shift = document.getElementById("shift").value;

    // Hide the form container and show the quiz container
    document.getElementById("formContainer").style.display = "none";
    document.getElementById("quizContainer").style.display = "block";

    // Start the quiz with a random selection of questions
    startQuiz();
  });

function shuffleArray(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]]; // Swap elements
  }
}

// Select a random number of questions (1 to 3)
function selectRandomQuestions(data) {
  const numberOfQuestions = Math.floor(Math.random() * 50) + 1; // Random number between 1 and 3
  return data.slice(0, numberOfQuestions); // Select the first N questions
}

// Quiz Data
const quizData = [
  
{
  question: "What is extenstion use for create html file",
  options: [".html", ".css", "html", ".hmtl"],
  answer: ".html",
},

{
  question: "What does HTML stand for?",
  options: [
    "Hyperlinks Text Markup Language",
    "Hyper Text Markup Language",
    "Hyper Tool Markup Language",
    "None of the above",
  ],
  answer: "Hyper Text Markup Language",
},
{
  question: "What is the purpose of HTML?",
  options: [
    "To create a website layout",
    "To add interactivity to websites",
    "To define the structure of a webpage",
    "To format text on a page",
  ],
  answer: "To define the structure of a webpage",
},
{
  question: "Which tag is used to define the body of an HTML document?",
  options: ["<header>", "<body>", "<footer>", "<content>"],
  answer: "<body>",
},
{
  question: "Which tag is used for creating a paragraph?",
  options: ["<p>", "<para>", "<paragraph>", "<pt>"],
  answer: "<p>",
},
{
  question: "What tag is used to create a line break?",
  options: ["<break>", "<br>", "<hr>", "<line>"],
  answer: "<br>",
},
{
  question: "What is the purpose of the <div> element?",
  options: [
    "To display images",
    "To create a container",
    "To create tables",
    "To style text",
  ],
  answer: "To create a container",
},
{
  question: "What is your Code Editor name?",
  options: [
    "Visual Studio Code",
    "Visual Computer Code",
    "All Above These",
    "None of the above",
  ],
  answer: "Visual Studio Code",
},
{
  question:
    "What keyboard shortcut is used to add a comment in most code editors?",
  options: ["Ctrl + /", "Alt + C", "Shift + C", "Ctrl + Shift + C"],
  answer: "Ctrl + /",
},
{
  question: "What is Lorem Ipsum?",
  options: [
    "A type of programming language",
    "Dummy text used in typesetting",
    "The name of a famous book",
    "None of the above",
  ],
  answer: "Dummy text used in typesetting",
},
{
  question: "What is the syntax for selecting all elements in CSS?",
  options: ["*{}", "all{}", "element{}", "#{}"],
  answer: "*{}",
},
{
  question: "Which tag is used to create a hyperlink?",
  options: ["<link>", "<a>", "<href>", "<url>"],
  answer: "<a>",
},
{
  question: "Which tag is used to represent deleted text in HTML?",
  options: ["<del>", "<delete>", "<deltext>", "<remove>"],
  answer: "<del>",
},
{
  question: "Which tag is used to define a table row?",
  options: ["<tr>", "<td>", "<th>", "<table>"],
  answer: "<tr>",
},
{
  question: "Which tag is used to define the title of the HTML document?",
  options: ["<title>", "<head>", "<meta>", "<body>"],
  answer: "<title>",
},
{
  question: "Which tag is used to create a horizontal line in HTML?",
  options: ["<line>", "<hr>", "<br>", "<div>"],
  answer: "<hr>",
},
{
  question: "Which attribute is used to apply styles to a specific element?",
  options: ["class", "id", "href", "src"],
  answer: "id",
},
{
  question:
    "Which of the following is the correct syntax for setting the background color of the body in CSS?",
  options: [
    "body { background-color: red; }",
    "body { bgcolor: red; }",
    "<body> { background-color: red; }",
    "background-color: body { red; }",
  ],
  answer: "body { background-color: red; }",
},
{
  question: "What is the correct way to define a background color in CSS?",
  options: ["background-color", "color", "bg-color", "color-background"],
  answer: "background-color",
},
{
  question: "Which tag is used for emphasizing text in HTML?",
  options: ["<strong>", "<em>", "<b>", "<i>"],
  answer: "<em>",
},
{
  question: "What does the 'alt' attribute define in an image tag?",
  options: [
    "The source of the image",
    "The title of the image",
    "The alternative text for the image",
    "The size of the image",
  ],
  answer: "The alternative text for the image",
},
{
  question:
    "Which of the following is the correct HTML syntax to use the 'id' attribute on an <h1> element?",
  options: [
    "<h1 id='header'>Welcome</h1>",
    "<h1 class='header'>Welcome</h1>",
    "<h1 id='header class='header'>Welcome</h1>",
    "<h1 class='header' id='header'>Welcome</h1>",
  ],
  answer: "<h1 id='header'>Welcome</h1>",
},
{
  question: "Which element is used to create the biggest heading in HTML?",
  options: ["<h2>", "<h7>", "<h4>", "<h1>"],
  answer: "<h1>",
},
{
  question: "Which element is used to create the smallest heading in HTML?",
  options: ["<h1>", "<h7>", "<h4>", "<h6>"],
  answer: "<h6>",
},
{
  question:
    "What is the correct syntax for creating a one line comment in HTML?",
  options: ["<!-- comment -->", "// comment", "/ comment", "/* comment */"],
  answer: "// comment",
},
{
  question: "What does the <strong> tag do?",
  options: [
    "Emphasizes text",
    "Boldens text",
    "Italicizes text",
    "Underlines text",
  ],
  answer: "Boldens text",
},
{
  question: "Which CSS property is used to set the height of an element?",
  options: ["height", "width", "size", "max-height"],
  answer: "height",
},
{
  question: "Which version of Windows is most compatible for coding?",
  options: ["Windows 7", "Windows 8", "Windows 10 & 11", "All above these"],
  answer: "Windows 10 & 11",
},

{
  question: "What is the purpose of the <h1> to <h6> tags?",
  options: [
    "To create headings",
    "To create paragraphs",
    "To create links",
    "To style text",
  ],
  answer: "To create headings",
},
{
  question: "Which tag is used to define a title in the document?",
  options: ["<title>", "<head>", "<meta>", "<h1>"],
  answer: "<title>",
},
{
  question: "What is the default color of the text in HTML?",
  options: ["Black", "Blue", "Red", "White"],
  answer: "Black",
},
{
  question: "Which tag is used to define an image in HTML?",
  options: ["<image>", "<img>", "<src>", "<picture>"],
  answer: "<img>",
},
{
  question: "What does the <img> tag's 'src' attribute specify?",
  options: [
    "The image size",
    "The image style",
    "The image source",
    "The image description",
  ],
  answer: "The image source",
},
{
  question: "Which tag is used to define the opening of an HTML document?",
  options: ["<html>", "<body>", "<head>", "<document>"],
  answer: "<html>",
},
{
  question: "Which tag is used to define the closing of an HTML document?",
  options: ["</html>", "</head>", "</body>", "</footer>"],
  answer: "</html>",
},
{
  question: "Which tag is used to define a table in HTML?",
  options: ["<table>", "<tab>", "<tr>", "<td>"],
  answer: "<table>",
},
{
  question: "Which tag is used to define the end of a paragraph?",
  options: ["</p>", "</para>", "</pt>", "</paragraph>"],
  answer: "</p>",
},
{
  question: "Which tag is used to define a table column in HTML?",
  options: ["<td>", "<col>", "<th>", "<tr>"],
  answer: "<td>",
},
{
  question: "Which attribute is used to set the width of a image in HTML?",
  options: ["width", "table-width", "size", "length"],
  answer: "width",
},
{
  question: "Which tag is used to define a table header cell?",
  options: ["<th>", "<tr>", "<td>", "<thead>"],
  answer: "<th>",
},
{
  question: "Which tag is used to define a bold text in HTML?",
  options: ["<bold>", "<strong>", "<b>", "<italic>"],
  answer: "<b>",
},
{
  question: "Which tag is used to make text italic in HTML?",
  options: ["<i>", "<em>", "<italic>", "<b>"],
  answer: "<i>",
},
{
  question: "Which HTML tag is used to define a subscript text?",
  options: ["<sub>", "<sup>", "<subscript>", "<u>"],
  answer: "<sub>",
},
{
  question: "Which HTML tag is used to define a superscript text?",
  options: ["<sup>", "<sub>", "<subscript>", "<u>"],
  answer: "<sup>",
},
,
{
  question: "What is correct method to close a html tage",
  options: ["<//>", "<>/", "<>", "</>"],
  answer: "</>",
},
{
  question: "What is this Selectors Name * ",
  options: ["Universal", "Class", "Id", "None of these"],
  answer: "Universal",
},
{
  question: "What is this Selectors Name # ",
  options: ["Universal", "Class", "Id", "None of these"],
  answer: "Id",
},
  {
    question: "What is this Selectors Name  # ",
    options: ["Universal", "Class", "href", "None of these"],
    answer: "None of these",
  },
  {
    question: "How much time are you giving for the coding",
    options: [
      "1 hours",
      "More then 2 hours",
      "more then 20 hours",
      "I have no time",
    ],
    answer:
      '["1 hours", "More then 2 hours" , "more then 20 hours" , "I have no time"]',
  },
];

let currentQuestionIndex = 0;
let score = 0;

const questionNumberEl = document.getElementById("questionNumber");
const questionEl = document.getElementById("question");
const optionsEl = document.getElementById("options");
const progressBarEl = document.getElementById("progressBar");
const submitBtn = document.getElementById("submitBtn");
const nextBtn = document.getElementById("nextBtn");

// Function to start the quiz with random questions
function startQuiz() {
  shuffleArray(quizData); // Shuffle the questions
  const selectedQuestions = selectRandomQuestions(quizData); // Select a random number of questions
  currentQuestionIndex = 0; // Reset the question index
  score = 0; // Reset the score
  loadQuestion(selectedQuestions);
}

// Load the current question and options
function loadQuestion(selectedQuestions) {
  document.getElementById("detail").innerHTML = `
  <h1 style="
  text-transform: uppercase;"> NAME: ${userName} ${fatherName} </h1>
  <h1 > GR NUMBER: ${grNumber} </h1>  
  `;

  const currentQuestion = selectedQuestions[currentQuestionIndex];
  questionNumberEl.innerText = `Question ${currentQuestionIndex + 1} / ${
    quizData.length
  }`;
  questionEl.innerText = currentQuestion.question;
  optionsEl.innerHTML = "";

  // Add radio button options to the DOM
  currentQuestion.options.forEach((option) => {
    const optionEl = document.createElement("div");
    optionEl.classList.add("option", "flex", "items-center", "space-x-2");

    // Create a radio input for each option
    const radioInput = document.createElement("input");
    radioInput.type = "radio";
    radioInput.name = "quizOption"; // Same name for grouping
    radioInput.value = option;

    // Create a label for the option
    const label = document.createElement("label");
    label.innerText = option;
    label.classList.add("text-gray-700", "cursor-pointer", "font-medium");

    // Add radio input and label to the option div
    optionEl.appendChild(radioInput);
    optionEl.appendChild(label);
    optionsEl.appendChild(optionEl);
  });

  // Update progress bar
  progressBarEl.style.width = `${
    (currentQuestionIndex / selectedQuestions.length) * 100
  }%`;
}

// Check the answer
function checkAnswer(selectedQuestions) {
  const selectedOption = document.querySelector(
    "input[name='quizOption']:checked"
  );

  if (!selectedOption) {
    alert("Please select an answer!");
    return;
  }

  const isCorrect =
    selectedOption.value === selectedQuestions[currentQuestionIndex].answer;

  // Update score if the answer is correct
  if (isCorrect) score++;

  // Disable all options after selection
  document
    .querySelectorAll("input[name='quizOption']")
    .forEach((radio) => (radio.disabled = true));

  // Show next button after selection
  submitBtn.style.display = "none";
  nextBtn.style.display = "inline-block";
}

// Go to the next question or finish the quiz
function nextQuestion(selectedQuestions) {
  currentQuestionIndex++;

  if (currentQuestionIndex < selectedQuestions.length) {
    loadQuestion(selectedQuestions);
    submitBtn.style.display = "inline-block";
    nextBtn.style.display = "none";
  } else {
    // Calculate and show the result
    const calculatedScore = score;
    const feedbackMessage = getFeedbackMessage(calculatedScore);

    // Send quiz result to Google Sheets
    sendToGoogleSheets(
      userName,
      fatherName,
      grNumber,
      shift,
      email,
      calculatedScore,
      selectedQuestions.length
    );

    // Show result container
    document.getElementById("quizContainer").style.display = "none";
    document.getElementById("resultContainer").style.display = "block";

    // Display user information and result
    document.getElementById("userInfo").innerHTML = `
            <hr/> 
            <p style="color:blue;">Name: ${userName}</p>
            <p style="color:blue;">Father's Name: ${fatherName}</p>
            <p style="color:blue;">GR Number: ${grNumber}</p>
            <p style="color:blue; text-decoration : underline;">Email: ${email}</p>
            <hr/>
        `;
    document.getElementById("resultMessage").innerHTML = `
            <p>Quiz completed! Your score: ${score}/${selectedQuestions.length}</p>
            <p>Feedback: ${feedbackMessage}</p>
        `;
  }
}

// Get feedback message based on the score
function getFeedbackMessage(calculatedScore) {
  let message;
  if (calculatedScore >= 40 && calculatedScore < 50) {
    message = ${userName} : Excellent! Well done!;
  } else if (calculatedScore >= 30 && calculatedScore < 40) {
    message = ${userName} : Good! But you can do better.;
  } else if (calculatedScore > 10 && calculatedScore <= 30) {
    message = ${userName} : Good work, but not satisfying.;
  } else {
    message = ${userName} : <span style='color:red;'>Need more practice. Keep trying!</span>;
  }
  return message;
}

// Send data to Google Sheets
function sendToGoogleSheets(
  userName,
  fatherName,
  grNumber,
  shift,
  email,
  score,
  questionLength
) {
  const url = "",
const data = {
    userName: userName,
    fatherName: fatherName,
    grNumber: grNumber,
    email: email,
    shift: shift,
    score: score,
    questionLength: questionLength,
    date: new Date().toISOString(), // Add current date and time
  };

  fetch(url, {
    method: "POST",
    body: new URLSearchParams(data),
  })
    .then((response) => response.text())
    .then((result) => console.log(result))
    .catch((error) => console.error("Error:", error));
}

// Event listeners for submit and next buttons
submitBtn.addEventListener("click", () => checkAnswer(quizData));
nextBtn.addEventListener("click", () => nextQuestion(quizData));

window.addEventListener("beforeunload", function (event) {
  event.returnValue =
    "Are you sure you want to leave? Your progress will be lost.";
});