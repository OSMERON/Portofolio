import React from 'react';
import styles from '../projects/Projects.module.css';
import Viber from '../../../assets/viberr.png';
import Freshburger from '../../../assets/fresh-burger.png'
import HipsterGlasses from '../../../assets/hipsster.png'
import FitLift from '../../../assets/fitlift.png'
import ProjectCard from '../../../common/ProjectCard';

const Projects: React.FC = () => {
  return (
    <section id='projects' className={styles.container}>
      <h1 className='sectionTitle'>Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard 
          src={Viber} 
          link='https://github.com/Sde-mir/company-landing-page-2'
          h3='To Do list '
          p='Task list '/>
          <ProjectCard 
          src={Freshburger} 
          link='https://github.com/Sde-mir/company-landing-page-2'
          h3='Fresh Burger'
          p='Hamburger Restaurant'/>
          <ProjectCard 
          src={HipsterGlasses} 
          link='https://github.com/Sde-mir/company-landing-page-2'
          h3='Hipster Glasses'
          p='Glasses Shop'/>
          <ProjectCard 
          src={FitLift} 
          link='https://github.com/Sde-mir/company-landing-page-2'
          h3='FitLift'
          p='Fitness App'/>
      </div>
    </section>
  );
}

export default Projects;
