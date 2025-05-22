
    // Target the buttons
    const btnPrimary = document.getElementById('b1');
    const btnSecondary = document.getElementById('b2');

    // Function to handle hover
    function handleHover(btn) {
        btn.style.transition = "all 0.3s ease"; // Smooth transition
        btn.style.transform = "scale(1.1)"; // Make the button pop up
        btn.style.backgroundColor = "#000"; // Change background to black
        btn.style.color = "#fff"; // Change text color to white
    }

    // Function to handle unhover
    function handleUnhover(btn) {
        btn.style.transform = "scale(1)"; // Reset size
        btn.style.backgroundColor = ""; // Reset background color
        btn.style.color = ""; // Reset text color
    }

    // Add event listeners for both buttons
    btnPrimary.addEventListener('mouseover', () => handleHover(btnPrimary));
    btnPrimary.addEventListener('mouseout', () => handleUnhover(btnPrimary));

    btnSecondary.addEventListener('mouseover', () => handleHover(btnSecondary));
    btnSecondary.addEventListener('mouseout', () => handleUnhover(btnSecondary));

