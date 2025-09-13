

interface SkillsListProp {
    src: string;
    skill: string;
  }
  
  const SkillsList: React.FC<SkillsListProp> = ({ src, skill }) => {
    return (
      <span>
        <img src={src} alt="CheckMark Icon" />
        <p>{skill}</p>
      </span>
    );
  };
  
  export default SkillsList;
  
