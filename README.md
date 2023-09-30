**Counter Application**

This is a simple web application that allows you to increase and decrease a counter value. It's built using HTML, CSS, and JavaScript.

**Features**

-  Increment the counter by clicking the "Increment" button.

-  Decrement the counter by clicking the "Decrement" button.

- The counter value cannot go below 0; it remains at 0 if the value would go negative.

**How it Works**

The application uses basic HTML, CSS, and JavaScript to implement the counter functionality. Here's a high-level overview of how it works:

1. HTML Structure: The HTML file (index.html) contains a counter element and two buttons for incrementing and decrementing the counter value.

2. JavaScript Logic: The JavaScript code (script.js) uses the addEventListener method to listen for clicks on the "Increment" and "Decrement" buttons. It also uses document.querySelector and getElementById methods to access and manipulate the DOM elements.

3. Preventing Negative Counter Value: The decrement logic includes a check to ensure that the counter value never goes below 0. This is achieved by using an if statement to conditionally decrement the counter only when it's greater than 0.

**How to Use**

- Clone this repository to your local machine.

- Open the index.html file in your web browser.

- You can now use the "Increment" and "Decrement" buttons to interact with the counter.

Feel free to modify and customize this application as needed for your use case. Enjoy counting!
