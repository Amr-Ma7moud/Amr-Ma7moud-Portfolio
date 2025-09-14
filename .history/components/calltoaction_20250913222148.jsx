export default function callToAction(){
return (
    <section>
                        <div className="text-center pt-20" data-aos={"zoom-in"} data-aos-duration={1000 } >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        <span className="bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">
                            Let's Build Something Great
                        </span>
                    </h2>
                    <p className="text-gray-400 justify-center flex max-w-2xl mx-auto">
                        i believe in
                      <Quote className="mr-2 ml-2  rotate-180 text-purple-600 -translate-y-1/4 hover:rotate-0 transition-all duration-300" size={16}  />
            < span className="bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">what i cant make i dont understand
            </span>
                      <Quote className="ml-2 mr-2 text-purple-600  translate-y-2/4 hover:rotate-180 transition-all duration-300" size={16} />
                  </p>
                </div>
    </section>
);
}