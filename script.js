/*
 * JavaScript for THE MACHINE™ website
 *
 * This file handles interactive behaviours such as the
 * self‑assessment quiz scoring and a simple contact form handler.
 * When the page loads, listeners are attached to the quiz and
 * contact forms to prevent default submission and to provide
 * dynamic feedback to the user.
 */

document.addEventListener('DOMContentLoaded', () => {
    // Quiz form handler
    const quizForm = document.getElementById('quiz-form');
    const resultDiv = document.getElementById('result');
    if (quizForm) {
        quizForm.addEventListener('submit', (event) => {
            event.preventDefault();
            // Collect answers and compute total score
            const formData = new FormData(quizForm);
            let total = 0;
            for (const [, value] of formData.entries()) {
                total += parseInt(value, 10);
            }
            // Determine recommended level based on score ranges
            let recommendation;
            if (total <= 2) {
                recommendation = 'Level 0 – Awareness: Your team is just beginning its AI journey. Start with our keynotes and boot camps to build foundational knowledge and explore safe, hands‑on experimentation.';
            } else if (total <= 5) {
                recommendation = 'Level 1 – Embrace: You have dipped your toes into AI. Engage with leadership workshops and advanced training to build confidence and plan your adoption roadmap.';
            } else if (total <= 7) {
                recommendation = 'Level 2 – Adopt: You are ready to operationalise AI. Prototype agentic workflows and integrate them with your existing stack for measurable impact.';
            } else if (total <= 9) {
                recommendation = 'Level 3 – Scale: Your organisation uses AI broadly. It’s time to unify systems, establish governance and scale AI across departments.';
            } else {
                recommendation = 'Level 4 – AI Native: You are poised to co‑create new AI products and licence your own agentic platform. Partner with us to become truly AI native.';
            }
            // Display result
            resultDiv.textContent = recommendation;
            // Scroll to result to ensure visibility on smaller screens
            resultDiv.scrollIntoView({ behavior: 'smooth', block: 'center' });
        });
    }

    // Contact form handler
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', (event) => {
            event.preventDefault();
            // Basic client‑side check for required fields is already handled by HTML5
            // Show a simple alert for demonstration purposes
            alert('Thank you for reaching out! Our team will connect with you soon.');
            contactForm.reset();
        });
    }
});
