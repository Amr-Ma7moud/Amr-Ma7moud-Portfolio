
import { Quote } from "lucide-react";

export default function callToAction(){
return (
    <section className="py-8 sm:py-12 lg:py-16">
        <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-6 sm:mb-8" data-aos={"zoom-in"} data-aos-duration={1000 } >
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4">
                    <span className="bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">
                        Let's Build Something Great
                    </span>
                </h2>
                <p className="text-gray-400 justify-center flex flex-col sm:flex-row items-center max-w-2xl mx-auto text-sm sm:text-base gap-1 sm:gap-0">
                    <span>i believe in</span>
                    <div className="flex items-center">
                        <Quote className="mr-2 ml-2 rotate-180 text-purple-600 -translate-y-1/4 hover:rotate-0 transition-all duration-300" size={14}  />
                        <span className="bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent font-medium">what i cant make i dont understand</span>
                        <Quote className="ml-2 mr-2 text-purple-600 translate-y-2/4 hover:rotate-180 transition-all duration-300" size={14} />
                    </div>
                </p>
            </div>
        </div>
    </section>
);
}