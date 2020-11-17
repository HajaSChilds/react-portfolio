import React from 'react';

import ProfilePic  from '../../../static/assets/images/profile-pic-2019.jpg'
 
export default function About() {
     return(
         <div className="about-page-wrapper">
            <div className="page-left"
                 style={{
                     background: "url(" + ProfilePic + ") no-repeat",
                     backgroundSize: "cover",
                     backgroundPosition: "center"
                 }}    
            >
            </div> 
            <div className="page-right">
                <h1>About Me</h1>
                 <p> Greetings! I am a physician turned software engineer who loves to build on web and mobile platforms. I started learning to code by building an app for the Android (Java) operating system and developed a passion for it ever since.  I am most inspired by viewing working software which was previously once an idea, or seeing a new feature take form, and I enjoy the process to reach the goal. Although computer science was not part of my formal training and background, my goal is to build intuitive, performant, scalable applications, using the best techniques and tools available.  I am thrilled to learn new technologies and platforms I haven't used before to solve real-world problems.  I have built software with HTML, CSS, SCSS, Styled Components, Material UI, Java, Javascript, React, Gatsby, Python, Flask, SQLite, MongoDB, and I love collaborating with other talented individuals to make things happen.  I'm open for new projects and opportunities, feel free to connect!</p>
{/*                 
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, impedit dolores, iusto, est saepe neque labore in fugiat quibusdam deserunt accusantium vero sunt odit suscipit animi voluptate voluptatum repudiandae quis dolore pariatur repellat rem minus? Aliquid unde, fugiat error corporis nam neque? Quia maxime sequi ex ratione sapiente enim deserunt. Quas excepturi asperiores, nulla mollitia ipsam, tenetur possimus esse cum tempora illum molestias. Recusandae eligendi, delectus reprehenderit nobis perspiciatis quidem autem minima aspernatur atque dolor doloribus. Magnam consequuntur, provident qui deserunt tempora inventore accusantium excepturi molestias aliquam est dolores quos fugiat quia obcaecati dolorum tempore, delectus aut nam exercitationem. Distinctio! */}
            </div>
       </div>
    );
}

