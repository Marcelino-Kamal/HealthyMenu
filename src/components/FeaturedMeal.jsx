import fimg from "../assets/food.png";
import dif from "../assets/Diff.svg";
import hb from "../assets/HB.svg";
import pot from "../assets/cook-duration.svg";
import steps from "../assets/steps.svg"
const FeaturedMeal = () => {
  return (
    <>
      <h2 className="">Featured Meals</h2>
      <div className="flex gap-5 w-[76%] aspect-[16/5] rounded-lg bg-white ml-[1%]">
        {/* Left Image */}
        <div className="w-2/5 m-[15px] aspect-square rounded-lg overflow-hidden h-full">
          <img src={fimg} className="size-full object-center object-cover" />
        </div>
        {/* Center Content */}
        <div className=" h-full flex flex-col justify-between">
          <article className="flex flex-col gap-3">
            <h2 className="myfont font-[600] w-[50%] text-[22px] text-[#343C6A] mt-[10px]">
              Grilled Turkey Breast with Steamed Asparagus and Brown Rice
            </h2>
            <div className="bg-red-400 rounded-lg myfont font-bold w-[10%] py-1 text-center text-[#343C6A] text-[14px]">
              Lunch
            </div>
            {/* 4 Attr */}
            <div className="my-10 grid grid-cols-2 grid-rows-2 gap-1 w-[50%]">
              <div>
                <article className="flex items-center object-cover justify-center">
                  <img src={dif} />
                  <div className="flex flex-col ">
                    <span className="myfont font-[400] text-[11px] text-gray-500">
                      Difficulty
                    </span>
                    <span className="myfont font-[600] text-[14px] text-[#343C6A]">
                      Medium
                    </span>
                  </div>
                </article>
              </div>
              <div>
                <article className="flex items-center object-cover justify-center">
                  <img src={hb} />
                  <div className="flex flex-col ">
                    <span className="myfont font-[400] text-[11px] text-gray-500">
                      Health Score
                    </span>
                    <span className="myfont font-[600] text-[14px] text-[#343C6A]">
                      85/100
                    </span>
                  </div>
                </article>
              </div>
              <div>
                <article className="flex items-center object-cover justify-center">
                  <img src={pot} />
                  <div className="flex flex-col ">
                    <span className="myfont font-[400] text-[11px] text-gray-500">
                      Cook Duration
                    </span>
                    <span className="myfont font-[600] text-[14px] text-[#343C6A]">
                      10 minutes
                    </span>
                  </div>
                </article>
              </div>
              <div>
                <article className="flex items-center object-cover justify-center">
                  <img src={steps} />
                  <div className="flex flex-col ">
                    <span className="myfont font-[400] text-[11px] text-gray-500">
                     Total Steps
                    </span>
                    <span className="myfont font-[600] text-[14px] text-[#343C6A]">
                      4 Steps
                    </span>
                  </div>
                </article>
              </div>
            </div>
          </article>
          <button className="bg-[#2682C0] myfont font-[500] text-[14px] w-[50%] rounded-xl text-white py-4">
            Add Favourite
          </button>
        </div>
        {/* Right Content */}
        <div className="grid grid-cols-1 grid-rows-4">
          <div>1</div>
          <div>1</div>
          <div>1</div>
          <div>1</div>
        </div>
      </div>
    </>
  );
};

export default FeaturedMeal;
