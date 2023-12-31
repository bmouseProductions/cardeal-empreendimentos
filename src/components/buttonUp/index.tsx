import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";

export const ButtonUp = () => {
  return (
    <a
      href="#"
      className="bg-[#193592] shadow-[#829beb] w-[40px] h-[40px] flex justify-center items-center text-center rounded-md fixed right-4 bottom-4"
    >
      <FontAwesomeIcon icon={faArrowUp} className="text-white" />
    </a>
  );
};
