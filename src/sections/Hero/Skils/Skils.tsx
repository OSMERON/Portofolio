import React from 'react';
import styles from '../Skils/SkilsStyles.module.css';
import checkMarkIcon from '../../../assets/checkmark-dark.svg';
import SkillsList from '../../../common/SkillsList';

const Skils: React.FC = () => {
  return (
    <section id='skills' className={styles.container}>
      <h1 className='sectionTitle'>Skills</h1>
      <div className={styles.skillList}>
        <SkillsList src={checkMarkIcon} skill="JavaScript" />
        <SkillsList src={checkMarkIcon} skill="HTML" />
        <SkillsList src={checkMarkIcon} skill="CSS" />
        <SkillsList src={checkMarkIcon} skill="TypeScript" />
        <SkillsList src={checkMarkIcon} skill="Node" />
      </div>
      <hr />
      <div className={styles.skillList}>
        <SkillsList src={checkMarkIcon} skill="React" />
        <SkillsList src={checkMarkIcon} skill="Angular" />
        <SkillsList src={checkMarkIcon} skill="Tailwind CSS" />
        <SkillsList src={checkMarkIcon} skill="Vue" />
      </div>
      <hr />
      <div className={styles.skillList}>
        <SkillsList src={checkMarkIcon} skill="Redux" />
        <SkillsList src={checkMarkIcon} skill="Webpack" />
        <SkillsList src={checkMarkIcon} skill="Git" />
        <SkillsList src={checkMarkIcon} skill="Jest" />
        <SkillsList src={checkMarkIcon} skill="Bootstrap" />
      </div>
    </section>
  );
}

export default Skils;
