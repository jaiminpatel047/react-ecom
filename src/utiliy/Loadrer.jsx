import "./loadrer.css";

const Loadrer = () => {
  return (
    <div className="flex justify-center relative h-[80px]" >
      <div className="loader absolute m-auto rounded-full border-4 border-yellow-500 w-[64px] h-[64px]"></div>
      <div className="loader absolute m-auto rounded-full border-4 border-yellow-500 w-[64px] h-[64px]"></div>
      <div className="loader absolute m-auto rounded-full border-4 border-yellow-500 w-[64px] h-[64px]"></div>
      <div className="loader absolute m-auto rounded-full border-4 border-yellow-500 w-[64px] h-[64px]"></div>
    </div>
  );
};

export default Loadrer;