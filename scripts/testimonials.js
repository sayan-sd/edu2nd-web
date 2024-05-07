// =================== TESTIMONIALS =====================
const testimonials = [
    {
        name: 'Sayan Das',
        role: 'Developer',
        avatar: './assets/user1.png',
        content: 'Edu Nest has been a game-changer for me. The courses are comprehensive, the instructors are knowledgeable and supportive, and the platform is incredibly user-friendly. It has truly transformed my learning journey.'
    },
    {
        name: 'Emma Johnson',
        role: 'Student',
        avatar: './assets/user2.png',
        content: 'Edu Nest has truly transformed my learning experience. The interactive courses, knowledgeable instructors, and supportive community have helped me grasp complex concepts with ease.'
    },
    {
        name: 'Michael Brown',
        role: 'Teacher',
        avatar: './assets/user3.png',
        content: 'Edu Nest provides a seamless platform for educators to create and share engaging content with their students. The intuitive interface and robust features make it easy to deliver high-quality instruction and facilitate student learning.'
    },
    {
        name: 'Sophia Lee',
        role: 'Student',
        avatar: './assets/user4.png',
        content: 'I am incredibly grateful for the opportunity to learn on Edu Nest. The courses are well-structured, the instructors are knowledgeable and supportive, and the platform is user-friendly. It has truly exceeded my expectations.'
    },
    {
        name: 'David Miller',
        role: 'Student',
        avatar: './assets/user5.png',
        content: 'Edu Nest has revolutionized the way I teach. The platforms interactive features, comprehensive resources, and collaborative tools have allowed me to create dynamic and engaging lessons that resonate with my students.'
    }
];

// Function to generate HTML for each testimonial
function generateTestimonialHTML(testimonial) {
    return `
    <article class="testimonial swiper-slide">
        <div class="testimonial-body">
            <p>"${testimonial.content}"</p>
        </div>
        <div class="testimonial-person">
            <div class="avatar">
                <img src="${testimonial.avatar}">
            </div>
            <div class="testimonial-info">
                <h5>${testimonial.name}</h5>
                <small>${testimonial.role}</small>
            </div>
        </div>
    </article>
    `;
}

// Function to dynamically generate testimonial HTML and append to container
function displayTestimonials() {
    const container = document.querySelector('.swiper-wrapper');
    testimonials.forEach(testimonial => {
        const testimonialHTML = generateTestimonialHTML(testimonial);
        container.innerHTML += testimonialHTML;
    });
}
displayTestimonials();

