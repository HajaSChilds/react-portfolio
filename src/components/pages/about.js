import React from 'react';

import ProfilePic  from '../../../static/assets/images/profile-pic-2020.jpg'
 
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
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, impedit dolores, iusto, est saepe neque labore in fugiat quibusdam deserunt accusantium vero sunt odit suscipit animi voluptate voluptatum repudiandae quis dolore pariatur repellat rem minus? Aliquid unde, fugiat error corporis nam neque? Quia maxime sequi ex ratione sapiente enim deserunt. Quas excepturi asperiores, nulla mollitia ipsam, tenetur possimus esse cum tempora illum molestias. Recusandae eligendi, delectus reprehenderit nobis perspiciatis quidem autem minima aspernatur atque dolor doloribus. Magnam consequuntur, provident qui deserunt tempora inventore accusantium excepturi molestias aliquam est dolores quos fugiat quia obcaecati dolorum tempore, delectus aut nam exercitationem. Distinctio!</p>
            </div>
       </div>
    );
}

