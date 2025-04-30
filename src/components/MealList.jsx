
import AllMenuBar from "./AllMenuBar"
import toast from "../assets/toast.jpg"
import salad from "../assets/salad.jpg"
import shrimp from "../assets/shrimp.jpg"
import diff from "../assets/Diff.svg"
import cook from "../assets/cook-duration.svg"
import steps from "../assets/steps.svg"

const MealList= ()=>{

        return(
            <>
                <h2 className="mt-[3%] myfont font-[600] text-[20px] text-[#343C6A] ml-[1%]">
                    All Menu
                </h2>
                <AllMenuBar/>
                <div className="grid grid-col-1 grid-row-auto gap-4">
                    <div className="flex gap-5 w-[60%] aspect-[6/1] rounded-lg bg-white ml-[1%]">
                    <div className="grid grid-cols-3">
                        {/* left image */}
                        <div className="w-full aspect-square m-1 rounded-lg overflow-hidden">
                            <img src={toast} className=" size-full object-center object-cover"/>
                        </div>
                        {/* center content */}
                        <div className="flex flex-col">
                            <div className="flex flex-row">
                                <div className="bg-[#76B2DB] w-[72px] h-[22px] m-[15px] rounded-lg text-center  font-[400] text-[11px] "> Breakfast
                                </div>
                                <div className="flex flex-row bg-[#edf3f7] w-[100px]"><img src={diff} />
                                <span className="">Easy</span>
                                </div>
                                <div className="flex flex-row bg-[#edf3f7] w-[100px]"><img src={cook} />
                                <span className="">15 min</span>
                                </div>
                                <div className="flex flex-row bg-[#edf3f7] w-[100px]"><img src={steps} />
                                <span className="">5 steps</span>
                                </div>
                            </div>
                            <h2 className="myfont font-[600] w-full  text-[16px] text-[#343C6A] m-[10px]">Avocado Toast with Poached Egg</h2>
                        </div>
                    </div>
                    

                    </div>
                    <div className="flex gap-5 w-[60%] aspect-[6/1] rounded-lg bg-white ml-[1%]">
                    <h1>hello</h1>

                    </div>
                    <div className="flex gap-5 w-[60%] aspect-[6/1] rounded-lg bg-white ml-[1%]">
                    <h1>hello</h1>

                    </div>
                    <div className="flex gap-5 w-[60%] aspect-[6/1] rounded-lg bg-white ml-[1%]">
                    <h1>hello</h1>

                    </div>
                
                </div>






            </>







        )
       
}
export default MealList;