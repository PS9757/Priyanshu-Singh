document.addEventListener("DOMContentLoaded", function() {
    const introText = "Hi, my name is"; // Define the intro text
    const introElement = document.getElementById("Intro");
    const nameText = "Priyanshu Singh"; // Define the name text
    const nameElement = document.getElementById("Name");
    const detailText = "I am a full-stack developer with a passion for learning and a commitment to quality.";
    const detailIntroElement = document.getElementById("Detail-Intro");

    introElement.textContent = ""; // Clear the text content initially
    nameElement.textContent = ""; // Clear the name content initially
    detailIntroElement.textContent = ""; // Clear the detail content initially

    let i = 0;
    const typeEffect = setInterval(function() {
        // Typing animation for intro text
        if (i < introText.length) {
            introElement.textContent += introText.charAt(i);
            i++;
        } else {
            // Typing animation for name text
            if (i - introText.length < nameText.length) {
                nameElement.textContent += nameText.charAt(i - introText.length);
                i++;
            } else {
                // Typing animation for detail text
                if (i - introText.length - nameText.length < detailText.length) {
                    detailIntroElement.textContent += detailText.charAt(i - introText.length - nameText.length);
                    i++;
                } else {
                    clearInterval(typeEffect);
                    displayOtherContent();
                }
            }
        }
    }, 40); // Adjust the typing speed (in milliseconds)
    function displayOtherContent() {
        const additionalDetailText = " I am proficient in Flutter, Node.js, Getx, Bloc, REST API integration, Git, GitHub, MVC architecture, clean code practices, and problem-solving. I have interned at NextGen Techno Ventures Pvt. Ltd., led projects, and expanded my skills at Furation Tech Solution. I am ready to contribute effectively to your team with a passion for quality and collaboration.";
        let j = 0;
        const typingAnimation = setInterval(function() {
            if (j < additionalDetailText.length) {
                detailIntroElement.textContent += additionalDetailText.charAt(j);
                j++;
            } else {
                clearInterval(typingAnimation);
            }
        }, 20); // Adjust the typing speed (in milliseconds) for a slower transition
    }
});
