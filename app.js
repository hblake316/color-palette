document.addEventListener("DOMContentLoaded", () => {
  const colorSchemeDiv = document.getElementById("color-scheme");

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

  // Get colors from query parameters and display them
  const colors = getColorsFromQuery();
  displayColors(colors);

  // Event listener for editing colors (placeholder for future functionality)
  document.getElementById("edit-colors").addEventListener("click", () => {
    alert("Edit functionality coming soon!");
  });
});
