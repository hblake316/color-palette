document.addEventListener("DOMContentLoaded", () => {
    const colorScheme = ["#FF5733", "#33FF57", "#3357FF"]; // Example colors
    const colorSchemeDiv = document.getElementById("color-scheme");
  
    // Function to display the color scheme
    function displayColors(colors) {
      colorSchemeDiv.innerHTML = ""; // Clear existing blocks
      colors.forEach(color => {
        const div = document.createElement("div");
        div.className = "color-block";
        div.style.backgroundColor = color;
        colorSchemeDiv.appendChild(div);
      });
    }
  
    // Initial display
    displayColors(colorScheme);
  
    // Event listener for editing colors (placeholder for future functionality)
    document.getElementById("edit-colors").addEventListener("click", () => {
      alert("Edit functionality coming soon!");
    });
  });
  