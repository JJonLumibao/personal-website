const projectContainer = document.querySelector('.project-container');
const projectList = [
  {
    title: 'Style Tracking Expressive Pad System (STEPS)',
    github: 'https://github.com/JJonLumibao/steps-senior-design',
    youtube: 'https://youtu.be/QMy2-tpW8sA?si=IyqvaNCBUetdmLLd',
    teamSize: 5,
    role: 'Embedded Programmer and Hardware Assistant',
    timeSpent: '≈ 7 months',
    description: `A 9-step input dance pad that utilizes force-sensing resistors (FSRs),
              computer vision, a custom Godot game engine, and an IR LED array to track expressive dance 
              movements.`,
    technologies: 'C/C++, ATmega32u4, ATmega328P, I2C Communication, FSR Sensors, RGB LEDs, Arduino IDE, Godot Engine',
    contributions: [
      'Programmed a master ATmega32u4 controller communicating with nine ATmega328P tile controllers.',
      'Implemented FSR sensor detection and signal processing for dance input recognition.',
      'Developed programmable RGB LED feedback system within each tile.',
    ],
  }, 
  {
    title: 'Omni-Gauntlet',
    github: 'https://github.com/JJonLumibao/OmniGauntlet',
    youtube: 'https://youtu.be/oE2jDW6wtuc?si=QhEBK-MmB7k078C-',
    teamSize: 4,
    role: 'Embedded Programmer',
    timeSpent: '≈ 3 months',
    description: `A gesture-controlled glove system that wirelessly commands a 
              mecanum-wheel robot using ESP32 microcontrollers.`,
    technologies: 'ESP32-WROOM-32, WiFi Communication, C/C++, Arduino IDE',
    contributions: [
      'Programmed ESP32 sender firmware for glove-based motion input.',
      'Developed receiver firmware to control the robot vehicle in real time.',
      'Implemented wireless communication protocol between glove and robot.',
    ],
  },
  {
    title: 'Steezee',
    github: 'https://github.com/rohant20/Group5-Large-Project',
    teamSize: 5,
    role: 'Backend Developer',
    timeSpent: '≈ 3 months',
    description: `A full-stack clothing store website with integrated OpenAI APIs`,
    technologies: 'PHP, mySQL, DigitalOcean, PostMan, React, TypeScript, Vite, HTML/CSS',
    contributions: [
      'Programmed email verification, forgot password, and reset password APIs',
      'Assisted in the development of other APIs',
    ],
  },
  {
    title: 'Globos Resurgence',
    github: 'https://github.com/Jesvin2003/globos_resurgence',
    teamSize: 4,
    role: 'Project Lead, Game Designer',
    timeSpent: '≈ 3 months',
    description: `A 2D platformer game developed through Unity. First experience leading an
              engineering related group project and working with Unity. `,
    technologies: 'Unity',
    contributions: [
      'Led development and game design',
      'Implemented and designed all maps and characters',
    ],
  }, 
]

projectList.forEach((item) => {
  const project = document.createElement('div');
  project.classList.add('project-content', 'scroll-animate');
  project.innerHTML = `
    <div class="project-header">
      <h2>${item.title}</h2>
      <div class="project-links">
        <div class="social-btn">
          <i class="fa-brands fa-github social-btn-icon"></i>
          <a href="${item.github}" target="_blank">View Code</a>
        </div>
        ${item.youtube ? `
        <div class="social-btn">
          <i class="fa-brands fa-youtube social-btn-icon"></i>
          <a href="${item.youtube}" target="_blank">View Demo</a>
        </div>` : ''}
      </div>
    </div>
    <div class="project-text">
      <div><b>Team Size:</b> ${item.teamSize}</div>
      <div><b>Role:</b> ${item.role}</div>
      <div><b>Time Spent:</b> ${item.timeSpent}</div>
      <div><b>Description:</b> ${item.description}</div>
      <div><b>Technologies:</b> ${item.technologies}</div>
      <div>
        <b>Key Contributions:</b>
        <ul>
          ${item.contributions.map(c => `<li>${c}</li>`).join('')}
        </ul>
      </div>
    </div>
  `;

  projectContainer.appendChild(project);
})