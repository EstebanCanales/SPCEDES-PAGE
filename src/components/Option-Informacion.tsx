import infoStyles from '../Style/Styles-Informacion.module.css'

interface OptionProps {
  option: string;
  onSelect: (option: string) => void;
}

export const Option: React.FC<OptionProps> = ({ option, onSelect }) => {
  return (
    <li className={infoStyles.option} onClick={() => onSelect(option)}>
      {option}
    </li>
  );
};
