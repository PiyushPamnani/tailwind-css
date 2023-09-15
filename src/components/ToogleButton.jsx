import { moon, sun } from "../assets/icons";

const ToogleButton = ({ toggleTheme, darkMode }) => {
  return (
    <span className="icon cursor-pointer" onClick={toggleTheme}>
      {darkMode ? (
        <img src={moon} width={20} height={20} />
      ) : (
        <img src={sun} width={20} height={20} />
      )}
    </span>
  );
};

export default ToogleButton;
