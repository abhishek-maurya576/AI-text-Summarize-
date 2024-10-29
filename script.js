const textArea = document.getElementById("text_to_summarize");
const submitButton = document.getElementById("submit-button");
const summarizedTextArea = document.getElementById("summary");

textArea.addEventListener("input", verifyTextLength);
submitButton.addEventListener("click", submitData);

// First, we disable the submit button by default when the user loads the website.
submitButton.disabled = true;

// Define a function called verifyTextLength(). This function will be called when the user enters something in the text area. It receives an event, called ‘e’ here.
function verifyTextLength(e) {
  const textarea = e.target;

  // Check if the text in the text area is the right length - between 200 and 100,000 characters
  if (textarea.value.length > 200 && textarea.value.length < 100000) {
    submitButton.disabled = false;
  } else {
    submitButton.disabled = true;
  }
}

function submitData(e) {
  submitButton.classList.add("submit-button--loading");
  const text_to_summarize = textArea.value;

  // INSERT CODE SNIPPET FROM POSTMAN BELOW

  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  myHeaders.append("Authorization", "Bearer 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");

  const raw = JSON.stringify({
    "text_to_summarize": text_to_summarize,
  });

  const requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
    redirect: "follow"
  };

  // Send the text to the server using fetch API
  fetch('/summarize', requestOptions)
    .then(response => response.text())
    .then(summary => {
      summarizedTextArea.value = summary;
      submitButton.classList.remove("submit-button--loading");
    })
    .catch(error => {
      console.log(error.message);
    });
}
