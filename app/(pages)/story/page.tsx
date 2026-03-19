
import Navbar from "@/ui/navbar";
import Footer from "@/ui/footer";

export default function Story(){
    return (
        <div className="paper-grain-dark h-full">
            <Navbar theme="dark"/>
            <div className="h-full p-8 pt-20"> 
                <div className="grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2">
                    <div className=" mx-auto">
                        <img
                        src={'/our_story.png'}
                        className="h-auto w-full"/>
                    </div>
                    <div className="max-w-3xl mx-auto my-auto">
                        <p className="mt-10 px-7 text-md text-center text-white font-ephesis"> Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. 
                        </p>

                        <p className="mt-10 px-7 text-md text-center text-white font-ephesis"> Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. 
                        </p>

                        <p className="mt-10 px-7 text-md text-center text-white font-ephesis">  In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. 
                        </p>

                        <div className=" mt-10 ">
                            <div className="p-10 bg-white/10 rounded-lg border-1 border-dashed border-[#D2AF26]">
                                <p className="text-5xl text-center font-tangerine text-[#D2AF26]"><span className="text-white text-3xl">Matthew</span> 19 <span className="text-white text-3xl">vs</span> 6 </p>

                                <p className="mt-5 text-3xl text-center font-tangerine text-white"><span className="text-[#D2AF26] text-5xl">"</span>So they are no longer two, but one flesh. Therefore what God has joined together, let no one separate<span className="text-5xl text-[#D2AF26]">"</span></p>  
                            </div>  
                        </div>
                    </div>
                </div>

            </div>
            <Footer message="dark"/>
            
        </div>
    );
}