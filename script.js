document.addEventListener('DOMContentLoaded', function () {
    var sections = document.querySelectorAll('.section');
    sections.forEach(function (section, index) {
        setTimeout(function () {
            section.classList.add('active');
        }, index * 300); // Iterative delay for each section
    });

    // Attach click event listeners to all 'View Details' links in projects and experience sections
    var viewDetailsLinks = document.querySelectorAll('.section .project-item a, .section .experience-item a');
    viewDetailsLinks.forEach(function(link) {
        link.addEventListener('click', function(event) {
            event.preventDefault(); // Prevent default anchor behavior
            var detailsId = link.getAttribute('href').substring(1); // Get the details section id
            toggleDetails(detailsId); // Toggle the details section visibility
        });
    });
});

function toggleDetails(id) {
    var element = document.getElementById(id);
    element.classList.toggle('active'); // Toggle the 'active' class for details
}

function showSection(sectionId) {
    var sections = document.querySelectorAll('.section');
    sections.forEach(function (section) {
        section.classList.remove('active'); // Hide all sections
    });
    document.getElementById(sectionId).classList.add('active'); // Show selected section
}
