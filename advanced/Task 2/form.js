document.getElementById("internshipForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("fullName").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const age = document.getElementById("age").value;
    const gender = document.querySelector('input[name="gender"]:checked');
    const interest = document.getElementById("interest").value;
    const linkedin = document.getElementById("linkedin").value.trim();
    const startDate = document.getElementById("startDate").value;
    const workMode = document.getElementById("workMode").value;
    const resume = document.getElementById("resume").files[0];
    const reason = document.getElementById("reason").value.trim();
    const terms = document.getElementById("terms").checked;

    let messages = [];

    if (name === "") messages.push("Full Name is required.");
    if (!email.includes("@") || !email.includes(".")) messages.push("Enter a valid email.");
    if (!/^\d{10}$/.test(phone)) messages.push("Enter a valid 10-digit phone number.");
    if (!gender) messages.push("Please select your gender.");
    if (age < 18 || age > 60) messages.push("Age must be between 18 and 60.");
    if (interest === "") messages.push("Please select a field of interest.");
    if (linkedin && !linkedin.startsWith("https://")) messages.push("LinkedIn URL must start with https://");
    if (workMode === "") messages.push("Please select a preferred work mode.");
    if (!resume) messages.push("Please upload your resume.");
    if (reason.length < 20) messages.push("Explain your reason (at least 20 characters).");
    if (!terms) messages.push("You must agree to the terms and conditions.");

    const messageDiv = document.getElementById("formMessages");

    if (messages.length > 0) {
        messageDiv.style.color = "red";
        messageDiv.innerHTML = messages.join("<br>");
    } else {
        messageDiv.style.color = "green";
        messageDiv.innerHTML = "Form submitted successfully!";
    }
});
