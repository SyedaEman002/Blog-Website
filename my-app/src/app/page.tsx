import React from "react";
import Link from "next/link";
const Home=()=>{
    return(
        <div>
          <nav className="w-full bg-rose-300 p-4 text-white flex justify-center space-x-12">
      <Link href="/" className="hover:text-black text-[24px]">
        Home
      </Link>
      <Link href="/About" className="hover:text-black text-[24px]">
        About
      </Link>
      <Link href="/Contact" className="hover:text-black text-[24px]">
        Contact
      </Link>
     </nav>
    <div className="bg-slate-50">
  <section className="h-screen bg-cover bg-center bg-slate-50" style={{ backgroundImage: "url('ice ceam.jpg')" }}>
            <h1 className="font-extrabold text-[69px] text-white text-white text-center p-[34px]">WELCOME TO MY BLOG WEBSITE</h1>
           </section>
           <div className="bg-rose-300">
            <p className="text-black text-[28px] text-center p-[32px]">Life is better with sprinkles and scoops! 🍦 Dive into our world of frozen delights where every blog post is a cone full of joy. From mouthwatering recipes to fun facts about your favorite dessert, we promise to keep your ice cream obsession alive and thriving!</p>
           </div>
            </div>
      <section className="bg-rose-300 py-12">
        <div className="container mx-auto">
          <h2 className="text-[34px]  text-center text-slate-950 mb-8"><b>Explore Our Ice Cream Flavours..</b></h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-rose-400 rounded-lg shadow-lg overflow-hidden">
              <img src="Ice Cream1.avif" alt="Ice cream 1" className="w-full h-64 object-cover" />
              <div className="p-4">
                <h3 className="text-xl font-bold text-slate-50"><b>BUTTER SCOTCH</b></h3>
                <p className="text-slate-950"><i>Golden caramel swirls, buttery sweetness, and creamy texture—Butterscotch is the ultimate indulgence for those who crave a flavor as luxurious as it is comforting. Scoop into happiness!</i></p>
              </div>
            </div>
          <div className="bg-rose-400 rounded-lg shadow-lg overflow-hidden">
              <img src="Ice Cream2.jpg" alt="Ice Cream 2" className="w-full h-64 object-cover" />
              <div className="p-4">
                <h3 className="text-xl font-bold text-slate-50"><b>Vanilla</b></h3>
                <p className="text-slate-950"><i>Vanilla ice cream is the softest, sweetest way to treat yourself. Made with pure vanilla extract and creamy milk, it’s simple yet absolutely divine. A scoop of vanilla is always the perfect answer to any craving.</i></p>
              </div>
            </div>
            <div className="bg-rose-400 rounded-lg shadow-lg overflow-hidden">
              <img src="Ice Cream3.jpg" alt="Ice Cream3 3" className="w-full h-64 object-cover" />
              <div className="p-4">
                <h3 className="text-xl font-bold text-slate-50"><b>Chocolate</b></h3>
                <p className="text-slate-950"><i>Discover the joy of silky, smooth chocolate ice cream. Made from the finest cocoa, it’s a treat that melts in your mouth, offering the ultimate chocolate experience. The sweetness of the cream combined with the richness of the cocoa creates a flavor that’s simply irresistible.</i></p>
              </div>
            </div>
            <div className=" bg-rose-400 rounded-lg shadow-lg overflow-hidden">
              <img src="Ice Cream4.jpg" alt="Ice Cream 4" className="w-full h-64 object-cover" />
              <div className="p-4">
                <h3 className="text-xl font-bold text-slate-50"><b>PISTACHIO</b></h3>
                <p className="text-slate-950"><i>A scoop of pistachio ice cream is like biting into a creamy, nutty dream. The delicate flavor of roasted pistachios pairs beautifully with the rich cream, creating a velvety texture that’s both satisfying and indulgent.</i></p>
              </div>
              </div>
              <div className=" bg-rose-400 rounded-lg shadow-lg overflow-hidden">
              <img src="Ice Cream4.webp" alt="Ice Cream 4" className="w-full h-64 object-cover" />
              <div className="p-4">
                <h3 className="text-xl font-bold text-slate-50"><b>OREO</b></h3>
                <p className="text-slate-950"><i>Nothing beats the classic combination of cookies and cream! Oreo ice cream takes it to the next level by blending creamy vanilla with generous chunks of Oreo cookies. Every bite is a perfect mix of crunchy, chocolatey goodness and velvety smooth ice cream.</i></p>
              </div>
              </div>
              <div className=" bg-rose-400 rounded-lg shadow-lg overflow-hidden">
              <img src="Ice Cream6.jpg" alt="Ice Cream6" className="w-full h-64 object-cover" />
              <div className="p-4">
                <h3 className="text-xl font-bold text-slate-50"><b>BLUE BERRY</b></h3>
                <p className="text-slate-950"><i>Blueberry ice cream is a burst of fruity bliss in every scoop. With the sweet-tart flavor of ripe blueberries combined with creamy ice cream, each bite is a refreshing and indulgent experience. A perfect treat for those who love a fruity twist on their dessert.</i></p>
              </div>
              </div>
              <div className=" bg-rose-400 rounded-lg shadow-lg overflow-hidden">
              <img src="Ice Cream7.webp" alt="Ice Cream7" className="w-full h-64 object-cover" />
              <div className="p-4">
                <h3 className="text-xl font-bold text-slate-50"><b>STRAWBERRY</b></h3>
                <p className="text-slate-950"><i>Strawberry ice cream is a delightful sensation in every bite. The sweet, fresh strawberries infuse the creamy ice cream with their vibrant flavor, creating a dessert that’s as satisfying as it is refreshing. A treat that always hits the spot</i></p>
              </div>
                 </div>
             <div className=" bg-rose-400 rounded-lg shadow-lg overflow-hidden">
              <img src="Ice Cream8.jpg" alt="Ice Cream8" className="w-full h-64 object-cover" />
              <div className="p-4">
                <h3 className="text-xl font-bold text-slate-50"><b>MANGO</b></h3>
                <p className="text-slate-950"><i>Made with fresh, juicy mangoes, this ice cream offers a perfect balance of sweet and tangy. The smooth, creamy texture blends effortlessly with the tropical mango flavor, making it a delicious treat for any occasion.</i></p>
              </div>
              </div>
              <div className=" bg-rose-400 rounded-lg shadow-lg overflow-hidden">
              <img src="Ice Cream9.jpg" alt="Ice Cream9" className="w-full h-64 object-cover" />
              <div className="p-4">
                <h3 className="text-xl font-bold text-slate-50"><b>COFFEE</b></h3>
                <p className="text-slate-950"><i>Let the smooth, rich flavor of coffee ice cream take you on a sensory journey. With each spoonful, the creamy base pairs perfectly with the bold taste of coffee, creating an indulgent experience that’s both refreshing and satisfying.</i></p>
              </div>
              </div>
</div>
</div>
</section>

</div>
)
}
export default Home;
           

