document.addEventListener("DOMContentLoaded", function () {
    const colorInput = document.getElementById("colorInput");
    const block = document.getElementById("block");
  
    colorInput.addEventListener("keydown", function (event) {
      if (event.key === "Enter" || event.keyCode === 13) {
        const userInput = colorInput.value;
        // Check if the entered color is valid
        if (isValidColor(userInput)) {
          block.style.backgroundColor = userInput;
        } else {
          alert("Invalid color. Please enter a valid CSS color.");
        }
      }
    });
  
    // Function to validate a CSS color
    function isValidColor(color) {
      const element = document.createElement("div");
      element.style.backgroundColor = color;
      return element.style.backgroundColor !== "";
    }
  });


  
  
  
  
  
  


