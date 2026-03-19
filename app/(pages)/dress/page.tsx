import Navbar from '@/ui/navbar';
import Footer from '@/ui/footer';

export default function Dresscode(){
    return (
        <div className="paper-grain-light pt-20 p-8 min-h-screen flex flex-col"> 
            <Navbar theme="light"/>
            <h1 className="text-center text-6xl font-tangerine text-[#0c3110] pb-5 "> <span className="text-[#008800]">Dress</span> Code</h1>
            
            <div className='grid grid-cols-3 gap-4'>
                <div className='mx-auto grid grid-cols-1 lg:grid-cols-2 gap-3'>
                    <img src='/photos/fit6.png' className='animate-float'>
                    </img>
                    <img src='/photos/fit7.png' className='animate-float'>
                    </img>
                    <img src='/photos/fit8.png' className='animate-float'>
                    </img>
                    <img src='/photos/fit9.png' className='animate-float'>
                    </img>
                </div>
                <div className='flex items-center justify-center '>
                    <h2 className="pt-auto text-center font-ephesis text-lg md:text-xl text-[#0c3110]"> 
                        <span className='block md:hidden lg:hidden'> Eastern <br />  or <br />  Formal</span>
                        <span className='hidden md:block lg:block'> We kindly invite our guests to dress in Eastern attire or formal wear to help us celebrate this special day </span>
                    </h2>
                </div>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-3'>
                    <img src='/photos/fit2.png' className='animate-float'>
                    </img>
                    <img src='/photos/fit3.png' className='animate-float'>
                    </img>
                    <img src='/photos/fit4.png' className='animate-float'>
                    </img>
                    <img src='/photos/fit5.png' className='animate-float'>
                    </img>
                </div>
            </div>
            <Footer message='light'/>
        </div>
    );
}