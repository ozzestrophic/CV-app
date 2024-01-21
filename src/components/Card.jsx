import Input from "./Input";

function Card({ children }) {
  return (
    <div className=" flex flex-col justify-start gap-8 rounded-xl bg-white p-8 shadow-md">
      {children}
    </div>
  );
}

export default Card;
