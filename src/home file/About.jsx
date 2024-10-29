
import '../css file/Universe.css'

const About = () => {


    return (
        <div className=' bg-white p-6 mb-10 ml-5 mr-5' >

            <div className=' flex-col md:flex-row lg:flex-row flex justify-center items-center gap-5 mt-10' >
            <div>
               <p className=" text-xl font-serif text-yellow-400 ">TASTY & FRESH</p>
               <p className="  the text-5xl font-bold mt-3 ">ABOUT US</p>
               <p className=' text-xl font-serif text-gray-400 mt-5 '>Gumbo beet greens corn soko endive gumbo gourd. Parsley shallot<br></br> courgette tatsoi pea.</p>
               <p className=' text-xl font-serif text-gray-400 mt-10'>Turnip greens yarrow ricebean rutabaga endive<br></br> cauliflower sea lettuce kohlrabi amaranth water <br></br>spinach avocado daikon napa cabbage asparagus <br></br>winter purslane kale. Celery potato scallion desert<br></br> raisin horseradish spinach carrot soko. Lotus root<br></br> water spinach fennel kombu maize<br></br> bamboo shoot green bean swiss.</p>
            </div>
            <div>
            <iframe width="450" height="315" src="https://www.youtube.com/embed/_dui6BUmMBg?si=8aHnFVuVwq0DitBE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </div>
            </div>
            
        </div>
    );
};

export default About;