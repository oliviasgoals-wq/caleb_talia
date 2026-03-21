// In your Gallery page
import Navbar from "@/ui/navbar";
import Footer from "@/ui/footer";

export default function Gallery(){
    const weddingImages = Array.from({ length: 29 }, (_, i) => ({
        id: i + 1,
        src: `/photos/${i + 1}.jpg`,
        alt: 'Photo'
    }));
        

    return(
        <div className="paper-grain-light pt-20 h-full p-8"> 
            <Navbar theme="light" />
            <h1 className="text-center text-6xl font-tangerine"> <span className="text-[#008800]">Our</span> Gallery</h1>

            <div className="my-8 max-w-8xl mx-auto flex justify-center">
                <video
                    className="w-auto h-150 object-cover rounded-xl shadow-xl"
                    controls
                    autoPlay
                    loop
                >
                    <source src="/photos/video.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>

            <div className="pt-10 columns-2 lg:columns-4 gap-4 [column-fill:_balance] max-w-8xl mx-auto">
                {weddingImages.map((image, index) => (
                    <div key={image.id} className="break-inside-avoid mb-4 animate-float" style={{ animationDelay: `${index * 0.1}s`, animationDuration: '3s', }}> 
                            <img key={image.id} className="w-full h-auto rounded-lg shadow-lg transition-transform duration-300 hover:scale-105"
                            src = {image.src}
                            alt = {image.alt}
                        />
                    </div>
                ))}
            </div>
            <Footer message="light" />
        </div>
  );
}