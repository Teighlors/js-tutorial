document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('storyForm');
    const storyParagraph = document.getElementById('story');

    form.addEventListener('submit', (event) => {
        event.preventDefault();

        // Get the values from the form
        const noun = document.getElementById('noun').value;
        const verb = document.getElementById('verb').value;
        const adjective = document.getElementById('adjective').value;

        // Validate the inputs
        if (!noun || !verb || !adjective) {
            alert('Please fill in all fields');
            return;
        }

        // Create the story using template literals
        const story = `Once upon a time, there was a ${adjective} ${noun} who loved to ${verb} every single day.`;

        // Display the story
        storyParagraph.textContent = story;
    });
});
