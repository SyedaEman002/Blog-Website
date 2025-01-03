import React from "react";
import Link from "next/link";
const About =() =>{
  return (
    <div className=" flex flex-col items-center justify-center bg-rose-300">
      <Header />
      <h1 className="text-4xl font-bold text-blue-700 p-[24px]">About Us</h1>
      <p className="text-black text-[24px] p-[22px] px[35px]">Welcome to our ice cream parlor 🍦, the ultimate destination for all your sweet cravings! We take pride in offering a delightful array of ice cream flavors that cater to every taste and mood. From timeless classics like creamy vanilla, rich chocolate, and refreshing strawberry to adventurous creations like salted caramel, mango chili, and cookies & cream, there’s something for everyone to love. But that’s not all—we also have a variety of options to make your ice cream experience even more special. Enjoy your favorite scoops in crispy waffle cones, indulge in decadent sundaes topped with fresh fruits, nuts, syrups, and whipped cream, or sip on velvety milkshakes blended to perfection. For those seeking lighter treats, our menu includes refreshing sorbets and dairy-free alternatives, ensuring everyone feels welcome. Whether you’re celebrating a special occasion or simply treating yourself to a moment of joy, our ice cream parlor is here to turn every visit into a sweet adventure. Come in and experience a world of flavor and happiness—one scoop at a time!</p>
  <div className="w-full max-w-4xl p-6 bg-gradient-to-r from-rose-100 to-rose-900 shadow-xl rounded-lg">
        <h2 className="text-2xl font-bold text-center text-white mb-6">Customer Feedback</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
      <div className="bg-white p-6 rounded-lg shadow-lg">
            <p className="text-lg font-medium text-gray-800">
              <strong>Customer 1:</strong> "Your ice cream is amazing! I absolutely loved the chocolate flavor, it was so creamy and rich. Will definitely come back for more!"
            </p>
          </div>
           <div className="bg-white p-6 rounded-lg shadow-lg">
            <p className="text-lg font-medium text-gray-800">
              <strong>Customer 2:</strong> "Best ice cream I've had in ages! The variety of flavors is fantastic, and the texture is perfect."
            </p>
          </div>
<div className="bg-white p-6 rounded-lg shadow-lg">
            <p className="text-lg font-medium text-gray-800">
              <strong>Customer 3:</strong> "I tried the vanilla and it was absolutely divine! So smooth and refreshing. Great job!"
            </p>
          </div>
<div className="bg-white p-6 rounded-lg shadow-lg">
            <p className="text-lg font-medium text-gray-800">
              <strong>Customer 4:</strong> "Incredible experience! The ice cream is just the right amount of sweet and creamy. Definitely my new favorite spot!"
            </p>
          </div>
<div className="bg-white p-6 rounded-lg shadow-lg">
            <p className="text-lg font-medium text-gray-800">
              <strong>Customer 5:</strong> "A perfect treat on a hot day! The ice cream was refreshing, and the flavors were unique and delicious."
            </p>
          </div>
        </div>
      </div>
    </div>
   
  );
}
function Header() {
  return (
    <nav className="w-full bg-rose-400 p-4 text-white flex justify-center space-x-12">
      <Link href="/" className="text-[24px] hover:text-black">
        Home
      </Link>
      <Link href="/About" className="text-[24px] hover:text-black">
        About
      </Link>
      <Link href="/Contact" className="text-[24px] hover:text-black">
        Contact
      </Link>
      </nav>
  );
}
export default About;

































































