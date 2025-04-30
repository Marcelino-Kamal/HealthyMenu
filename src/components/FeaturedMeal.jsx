import fimg from "../assets/food.png";
import dif from "../assets/Diff.svg";
import hb from "../assets/HB.svg";
import pot from "../assets/cook-duration.svg";
import steps from "../assets/steps.svg";
import calories from "../assets/calories.svg";
import carbs from "../assets/carbs.svg";
import fats from "../assets/fats.svg";
import protiens from "../assets/protiens.svg";

const FeaturedMeal = () => {
  return (
    <>
      <h2 className="myfont font-semibold text-lg md:text-xl text-[#343C6A] ml-2 md:ml-4">Featured Meals</h2>
      <div className="flex flex-col md:flex-row gap-4 md:gap-5 max-w-full md:w-[63%] rounded-lg bg-white ml-2 md:ml-4 p-4">
        {/* Left Image */}
        <div className="w-full md:w-2/5 aspect-square rounded-lg overflow-hidden">
          <img src={fimg} className="w-full h-full object-cover object-center" />
        </div>

        {/* Center Content */}
        <div className="flex flex-col justify-between w-full md:w-[50%]">
          <article className="flex flex-col gap-3">
            <h2 className="myfont font-semibold text-base md:text-lg text-[#343C6A]">
              Grilled Turkey Breast with Steamed Asparagus and Brown Rice
            </h2>
            <div className="bg-red-400 rounded-lg myfont font-bold w-max px-3 py-1 text-[#343C6A] text-sm">
              Lunch
            </div>

            {/* Attributes Grid */}
            <div className="grid grid-cols-2 gap-3 w-full md:w-[80%]">
              {[{ img: dif, label: "Difficulty", value: "Medium" },
                { img: hb, label: "Health Score", value: "85/100" },
                { img: pot, label: "Cook Duration", value: "10 minutes" },
                { img: steps, label: "Total Steps", value: "4 Steps" }]
                .map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <img src={item.img} alt={item.label} className="w-5 h-5" />
                    <div className="flex flex-col">
                      <span className="myfont font-normal text-xs text-gray-500">{item.label}</span>
                      <span className="myfont font-semibold text-sm text-[#343C6A]">{item.value}</span>
                    </div>
                  </div>
                ))}
            </div>
          </article>
          <button className="bg-[#2682C0] myfont font-medium text-sm w-full rounded-full text-white py-2 px-6 mt-4">
            Add Favourite
          </button>
        </div>

        {/* Right Stats */}
        <div className="grid grid-cols-2 md:grid-cols-1 gap-2 w-full md:w-auto">
          {[{ img: calories, label: "calories", value: "450 kcal", bg: "bg-red-400" },
            { img: carbs, label: "carbs", value: "40 gr", bg: "bg-[#8676FE]" },
            { img: protiens, label: "proteins", value: "35 gr", bg: "bg-[#76B2DB]" },
            { img: fats, label: "fats", value: "12 gr", bg: "bg-[#FFA257]" }]
            .map((item, idx) => (
              <div key={idx} className={`flex items-center gap-2 p-2 rounded-lg ${item.bg}`}>
                <img src={item.img} alt={item.label} className="w-5 h-5" />
                <div className="flex flex-col">
                  <span className="myfont font-normal text-xs text-gray-100">{item.label}</span>
                  <span className="myfont font-semibold text-sm text-white">{item.value}</span>
                </div>
              </div>
            ))}
        </div>
      </div>
    </>
  );
};

export default FeaturedMeal;
