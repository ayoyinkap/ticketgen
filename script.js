document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('ticketForm');
    const ticketPreview = document.getElementById('ticketPreview');
    const printBtn = document.getElementById('printBtn');
    const newTicketBtn = document.getElementById('newTicketBtn');
    // Form submission handler
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        // Get form values
        const fullName = document.getElementById('fullName').value;
        const email = document.getElementById('email').value;
        const phone = document.getElementById('phone').value;
        const seating = document.getElementById('seating').value;
        const dietary = document.getElementById('dietary').value;
        const notes = document.getElementById('notes').value;
        // Generate a unique ticket ID
        const ticketId = 'LF-' + Math.random().toString(36).substr(2, 9).toUpperCase();
        // Update ticket preview
        document.getElementById('ticketName').textContent = fullName;
        document.getElementById('ticketEmail').textContent = email;
        document.getElementById('ticketPhone').textContent = phone;
        document.getElementById('ticketSeating').textContent = seating.charAt(0).toUpperCase() + seating.slice(1);
        document.getElementById('ticketDietary').textContent = dietary === 'none' ? 'None' : dietary;
        document.getElementById('ticketNotes').textContent = notes || 'None';
        document.getElementById('ticketId').textContent = '#' + ticketId;
        // Show the ticket and controls
        ticketPreview.classList.remove('hidden');
        printBtn.classList.remove('hidden');
        newTicketBtn.classList.remove('hidden');
        // Scroll to ticket section on mobile
        if (window.innerWidth < 768) {
            ticketPreview.scrollIntoView({ behavior: 'smooth' });
        }
    });
    // Print button handler
    printBtn.addEventListener('click', function() {
        window.print();
    });
    // New ticket button handler
    newTicketBtn.addEventListener('click', function() {
        form.reset();
        ticketPreview.classList.add('hidden');
        printBtn.classList.add('hidden');
        newTicketBtn.classList.add('hidden');
        // Scroll to form section on mobile
        if (window.innerWidth < 768) {
            form.scrollIntoView({ behavior: 'smooth' });
        }
    });
});