function PostSec(props) {
  return (
    <div
      className="w-[80%] h-auto grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 mx-auto mb-5"
      style={{ backgroundColor: "#E2E2E2" }}
    >
      <div className="w-full h-full ">
        <img src={props.Imgsrc} alt="" className="w-full h-full" />
      </div>
      <div className="w-full h-full flex flex-col justify-center p-8 items-center relative mt-3">
        <h3 className="text-lg font-bold relative">{props.Off}</h3>
        <h4 className=" relative mt-2">{props.Discription}</h4>
        <div className="flex flex-row justify-between p-2 h-auto mb-3 mt-2">
          <input type="text" className="w-4/6 relative" />
          <span>
            <button className="relative btn btn-dark">Subscribe</button>
          </span>
        </div>
      </div>
    </div>
  );
}
export default PostSec;
