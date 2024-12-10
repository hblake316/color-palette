document.addEventListener("DOMContentLoaded", () => {
  const colorSchemeDiv = document.getElementById("color-scheme");
  const isSubscribedCheckbox = document.getElementById("is-subscribed");
  const addColorsButton = document.getElementById("edit-colors");

  // Function to display the color scheme
  function displayColors(colors) {
    colorSchemeDiv.innerHTML = ""; // Clear existing blocks
    colors.forEach(color => {
      const div = document.createElement("div");
      div.className = "color-block";
      div.style.backgroundColor = color;
      div.style.width = "100px"; // Add dimensions for visual clarity
      div.style.height = "100px";
      div.style.margin = "10px";
      colorSchemeDiv.appendChild(div);
    });
  }

  // Function to get colors from query parameters
  function getColorsFromQuery() {
    const params = new URLSearchParams(window.location.search);
    const colorsParam = params.get("colors");
    if (colorsParam) {
      return colorsParam.split(",").map(color => decodeURIComponent(color));
    }
    return ["#FF5733", "#33FF57", "#3357FF"]; // Default colors
  }

  // Function to generate a new color in the same scheme
  function generateNewColor(baseColors) {
    const baseColor = baseColors[baseColors.length - 1]; // Use the last color as reference
    const newColor = chroma(baseColor).set('hsl.h', '+30').hex(); // Adjust hue by 30 degrees
    return newColor;
  }

  // Get colors from query parameters and display them
  let colors = getColorsFromQuery();
  displayColors(colors);

  // Event listener for adding colors
  addColorsButton.addEventListener("click", () => {
    if (isSubscribedCheckbox.checked) {
      if (colors.length < 6) {
        const newColor = generateNewColor(colors); // Generate a new color
        colors.push(newColor); // Add to the color array
        displayColors(colors); // Update the display
      } else {
        alert("You can only add up to 6 colors.");
      }
    } else {
      alert("You must be subscribed to add more colors.");
    }
  });

  // Event listener for subscription checkbox
  isSubscribedCheckbox.addEventListener("change", () => {
    if (!isSubscribedCheckbox.checked) {
      // Keep only the first 3 colors when unsubscribed
      colors = colors.slice(0, 3);
      displayColors(colors);
    }
  });
});
