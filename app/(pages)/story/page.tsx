
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
                        <p className="mt-10 px-7 text-md text-center text-white font-ephesis"> From the moment our paths crossed, our story began in the most unexpected and beautiful way—thanks to a simple connection that turned into something life-changing. 
                        </p>

                        <p className="mt-10 px-7 text-md text-center text-white font-ephesis"> What started as friendship quickly grew into a love filled with laughter, support, and countless unforgettable moments. Over the past eight years, we’ve built a relationship rooted in trust, understanding, and choosing each other every single day.
                        </p>

                        <p className="mt-10 px-7 text-md text-center text-white font-ephesis"> 
                        Together, we’ve celebrated the highs, worked through the lows, and grown not only as individuals but as partners. We’ve learned that love isn’t just in the big gestures, but in the quiet, everyday moments—the inside jokes, the late-night conversations, and simply being there for one another.
                        </p>

                        <p className="mt-10 px-7 text-md text-center text-white font-ephesis"> 
                        One of our most cherished memories will always be the day we made things official—a moment filled with thought, love, and intention that perfectly reflects the kind of relationship we’ve built.    
                        </p>

                        <p className="mt-10 px-7 text-md text-center text-white font-ephesis"> 
                        Through it all, we have become each other’s safe place, best friend, and greatest support system. Our journey hasn’t just been about where we’ve been, but about how we’ve grown—together.
                        </p>

                        <p className="mt-10 px-7 text-md text-center text-white font-ephesis"> 
                        This is our story—one of love, friendship, and a partnership that continues to grow stronger with time
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