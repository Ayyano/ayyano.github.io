<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Muhammad Ayan Ali - Web Designer</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <!-- Header Section -->
  <header>
    <div class="container">
      <h1 class="logo">Muhammad Ayan Ali</h1>
      <nav>
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#portfolio">Portfolio</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </div>
  </header>

  <!-- Hero Section -->
  <section id="home" class="hero">
    <h2>Hi, I'm Muhammad Ayan Ali</h2>
    <p>I design stunning websites that captivate and convert.</p>
    <a href="#portfolio" class="btn">View My Work</a>
    <a href="#contact" class="btn secondary">Hire Me</a>
  </section>

  <!-- About Section -->
  <section id="about" class="about">
    <div class="container">
      <h2>About Me</h2>
      <p>I am a passionate web designer specializing in creating user-friendly and visually appealing websites. With expertise in modern technologies, I help businesses thrive online.</p>
    </div>
  </section>

  <!-- Portfolio Section -->
  <section id="portfolio" class="portfolio">
    <div class="container">
      <h2>My Portfolio</h2>
      <div class="projects">
        <div class="project">
          <img src="project1.jpg" alt="Project 1">
          <h3>Project 1</h3>
          <p>Short description of the project.</p>
        </div>
        <div class="project">
          <img src="project2.jpg" alt="Project 2">
          <h3>Project 2</h3>
          <p>Short description of the project.</p>
        </div>
        <div class="project">
          <img src="project3.jpg" alt="Project 3">
          <h3>Project 3</h3>
          <p>Short description of the project.</p>
        </div>
      </div>
    </div>
  </section>

  <!-- Services Section -->
  <section id="services" class="services">
    <div class="container">
      <h2>My Services</h2>
      <ul>
        <li>Website Design & Development</li>
        <li>UI/UX Design</li>
        <li>E-commerce Development</li>
        <li>SEO Optimization</li>
      </ul>
    </div>
  </section>

  <!-- Contact Section -->
  <section id="contact" class="contact">
    <div class="container">
      <h2>Contact Me</h2>
      <form action="#">
        <input type="text" placeholder="Your Name" required>
        <input type="email" placeholder="Your Email" required>
        <textarea placeholder="Your Message" required></textarea>
        <button type="submit">Send Message</button>
      </form>
    </div>
  </section>

  <!-- Footer -->
  <footer>
    <p>&copy; 2025 Muhammad Ayan Ali. All Rights Reserved.</p>
  </footer>
</body>
</html>




/* General Styles */
body {
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 0;
  line-height: 1.6;
  color: #333;
}

/* Header */
header {
  background: #222;
  color: #fff;
  padding: 1rem 0;
}

header .container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

header .logo {
  font-size: 1.5rem;
  font-weight: bold;
}

header nav ul {
  list-style: none;
  display: flex;
  gap: 1rem;
}

header nav ul li a {
  color: #fff;
  text-decoration: none;
}

/* Hero Section */
.hero {
  background: #f4f4f4;
  text-align: center;
  padding: 3rem 1rem;
}

.hero h2 {
  font-size: 2rem;
}

.hero .btn {
  display: inline-block;
  padding: 0.5rem 1rem;
  margin: 0.5rem;
  text-decoration: none;
  background: #007bff;
  color: #fff;
  border-radius: 5px;
}

.hero .btn.secondary {
  background: #6c757d;
}

/* About Section */
.about {
  background: #f9f9f9;
  padding: 2rem 1rem;
  text-align: center;
}

/* Portfolio Section */
.portfolio {
  padding: 2rem 1rem;
  text-align: center;
}

.projects {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  gap: 1rem;
}

.project {
  background: #fff;
  padding: 1rem;
  border: 1px solid #ddd;
  border-radius: 5px;
  width: 30%;
}

.project img {
  width: 100%;
  height: auto;
  border-radius: 5px;
}

/* Services Section */
.services {
  background: #f4f4f4;
  padding: 2rem 1rem;
  text-align: center;
}

.services ul {
  list-style: none;
  padding: 0;
}

.services ul li {
  margin: 0.5rem 0;
}

/* Contact Section */
.contact {
  padding: 2rem 1rem;
  text-align: center;
}

.contact form {
  max-width: 500px;
  margin: auto;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.contact form input,
.contact form textarea {
  width: 100%;
  padding: 0.5rem;
  border: 1px solid #ddd;
  border-radius: 5px;
}

.contact form button {
  padding: 0.5rem 1rem;
  background: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

/* Footer */
footer {
  text-align: center;
  padding: 1rem;
  background: #222;
  color: #fff;
}
