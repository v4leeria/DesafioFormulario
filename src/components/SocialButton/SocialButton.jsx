import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SocialButton = ({ icono, claseIcono }) => {
  return <FontAwesomeIcon className={claseIcono} icon={icono} />;
};

export default SocialButton;
