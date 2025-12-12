// Project filtering functionality
document.addEventListener('DOMContentLoaded', function() {
    const filterButtons = document.querySelectorAll('.filter-button');
    const featuredProject = document.querySelector('.featured-project-large');
    const smallProjects = document.querySelectorAll('.projects-grid-small .project-card');

    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));

            // Add active class to clicked button
            this.classList.add('active');

            // Get filter value
            const filter = this.getAttribute('data-filter');

            // Filter projects
            if (filter === 'all') {
                // Show all projects
                if (featuredProject) featuredProject.classList.remove('hidden');
                smallProjects.forEach(project => project.classList.remove('hidden'));
            } else {
                // Filter based on category
                // Check featured project
                if (featuredProject) {
                    const featuredCategories = featuredProject.getAttribute('data-category');
                    if (featuredCategories && featuredCategories.includes(filter)) {
                        featuredProject.classList.remove('hidden');
                    } else {
                        featuredProject.classList.add('hidden');
                    }
                }

                // Check small projects
                smallProjects.forEach(project => {
                    const projectCategory = project.getAttribute('data-category');
                    if (projectCategory && projectCategory.includes(filter)) {
                        project.classList.remove('hidden');
                    } else {
                        project.classList.add('hidden');
                    }
                });
            }
        });
    });
});
