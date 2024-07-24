// Initialize Leaflet map
const map = L.map('map').setView([51.505, -0.09], 13);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
}).addTo(map);

// Check if localStorage contains events
if (localStorage.getItem('events') === null) {
    localStorage.setItem('events', JSON.stringify([]));
}

// Load events from localStorage
const loadEvents = () => {
    const events = JSON.parse(localStorage.getItem('events'));
    const eventsContainer = document.getElementById('events');
    eventsContainer.innerHTML = '';
    events.forEach((event, index) => {
        const eventDiv = document.createElement('div');
        eventDiv.className = 'event';
        eventDiv.innerHTML = `
            <h3>${event.name}</h3>
            <p>Date: ${event.date}</p>
            <p>Time: ${event.time}</p>
            <p>Location: ${event.location}</p>
            <p>Notes: ${event.notes}</p>
            <button onclick="deleteEvent(${index})">Delete</button>
            <button onclick="shareEvent('${encodeURIComponent(JSON.stringify(event))}')">Share</button>
        `;
        eventsContainer.appendChild(eventDiv);
    });
};

// Save event to localStorage
const saveEvent = (event) => {
    const events = JSON.parse(localStorage.getItem('events'));
    events.push(event);
    localStorage.setItem('events', JSON.stringify(events));
    loadEvents();
};

// Delete event from localStorage
const deleteEvent = (index) => {
    const events = JSON.parse(localStorage.getItem('events'));
    events.splice(index, 1);
    localStorage.setItem('events', JSON.stringify(events));
    loadEvents();
};

// Share event
const shareEvent = (eventData) => {
    const event = JSON.parse(decodeURIComponent(eventData));
    const shareText = `
        Event Name: ${event.name}
        Date: ${event.date}
        Time: ${event.time}
        Location: ${event.location}
        Notes: ${event.notes}
    `;
    if (navigator.share) {
        navigator.share({
            title: event.name,
            text: shareText
        }).catch(console.error);
    } else {
        alert(shareText);
    }
};

// Handle form submission
document.getElementById('form').addEventListener('submit', (e) => {
    e.preventDefault();
    const newEvent = {
        name: document.getElementById('name').value,
        date: document.getElementById('date').value,
        time: document.getElementById('time').value,
        location: document.getElementById('location').value,
        notes: document.getElementById('notes').value
    };
    saveEvent(newEvent);
    e.target.reset();
});

// Handle search functionality
document.getElementById('search').addEventListener('input', (e) => {
    const searchText = e.target.value.toLowerCase();
    const events = document.querySelectorAll('.event');
    events.forEach(event => {
        const text = event.innerText.toLowerCase();
        event.style.display = text.includes(searchText) ? 'block' : 'none';
    });
});

// Load events initially
loadEvents();
