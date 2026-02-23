import { Link } from "react-router-dom";

const Buttons = ({
  classContainer,
  classBtn1,
  classBtn2,
  iconBtn1,
  iconBtn2,
  textBtn1,
  textBtn2,
  pathBtn1,
  pathBtn2,
}) => {
  return (
    <div
      className={`mt-12 mb-8 flex items-center gap-4 px-2 md:mb-8 md:justify-center xl:mb-0 xl:px-0 ${classContainer}`}
    >
      <Link to={pathBtn1}>
        <button className={`btn ${classBtn1}`}>
          {iconBtn1} {textBtn1}
        </button>
      </Link>
      <Link to={pathBtn2}>
        <button className={`btn ${classBtn2}`}>
          {iconBtn2} {textBtn2}
        </button>
      </Link>
    </div>
  );
};

export default Buttons;
