import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
const HamMenu = ({ isOpen, setIsOpen }) => {
  const handleOnClick = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div>
      <div>
        <button onClick={handleOnClick}>
          {isOpen ? <CloseIcon /> : <MenuIcon />}
        </button>
      </div>
    </div>
  );
};

export default HamMenu;
