import React, { useState } from "react";
import {
  FaHeart,
  FaShoppingBag,
  FaSearch,
  FaArrowCircleRight,
  FaInstagram,
  FaTwitter,
  FaFacebook
} from "react-icons/fa";
import image from "./image.jpg";
import image2 from "../images/image2.jpg";
import image3 from "../images/image3.jpg";
import image4 from "../images/image4.jpg";
import image10 from "../images/image10.jpg";
import image6 from "../images/image6.jpg";

const productData = [
  { id: 1, image: image10, category: "Dryness" },
  { id: 2, image: image2, category: "Acne & Blemishes" },
  { id: 3, image: image10, category: "Dullness" },
  { id: 4, image: image4, category: "Anti-Aging" },
  { id: 5, image: image10, category: "Sensitive Skin" },
  { id: 6, image: image2, category: "Dryness" },
];

const categories = [
  "All",
  "Dryness",
  "Acne & Blemishes",
  "Dullness",
  "Anti-Aging",
  "Sensitive Skin",
];

export default function SkincareLandingPage() {
  const [filter, setFilter] = useState("All");

  const filteredProducts =
    filter === "All"
      ? productData
      : productData.filter((item) => item.category === filter);

  const handleImageClick = (id) => {
    alert(`You clicked product ID: ${id}`);
  };

  return (
    <div className="bg-[#f9f4ef] text-[#5e2c1b] font-sans overflow-hidden">
      {/* Hero Section */}
      <div className="relative min-h-screen w-full font-sans overflow-hidden">
        {/* Navbar */}
        <div className="absolute top-0 left-0 w-full flex flex-col sm:flex-row sm:items-center sm:justify-between px-6 sm:px-16 py-6 z-10 bg-transparent">
          {/* Logo */}
          <div className="flex items-center text-lg font-semibold text-white mb-4 sm:mb-0 justify-center">
            <div className="w-8 h-8 bg-[#5e2c1b] rounded-full flex items-center justify-center text-white font-bold">
              R
            </div>
            <span className="ml-2 text-black font-bold">Reveal</span>
          </div>

          {/* Navigation */}
          <div className="flex flex-wrap justify-center sm:justify-start space-x-6 sm:space-x-10 text-[#5e2c1b] font-bold text-sm mb-4 sm:mb-0">
            <a href="#" className="group">Home
              <span class="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-[#5e2c1b] ease-in"></span>
            </a>
            <a href="#" className="group">About
              <span class="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-[#5e2c1b] ease-in"></span>
            </a>
            <a href="#" className="group">Products
              <span class="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-[#5e2c1b] ease-in"></span>
            </a>
            <a href="#" className="group">Contact
              <span class="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-[#5e2c1b] ease-in"></span>
            </a>
          </div>

          {/* Icons */}
          <div className="flex items-center justify-center space-x-4">
            <FaHeart className="cursor-pointer text-[#5e2c1b] text-lg" />
            <FaShoppingBag className="cursor-pointer text-[#5e2c1b] text-lg" />
          </div>
        </div>

        {/* Main Content */}
        <div className="flex flex-col md:flex-row h-full w-full pt-32 md:pt-0">
          {/* Left Section */}
          <div className="w-full md:w-1/2 bg-white flex flex-col justify-center p-8 sm:p-12 md:p-16 z-0">
            <div>
              <p className="text-sm text-gray-400 mb-2">Natural Glow</p>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-black leading-tight mb-6">
                Reveal your natural<br />glow with our premium<br />skincare essentials
              </h1>

              {/* Search Bar */}
              <div className="flex items-center bg-gray-100 rounded-full px-4 py-3 w-full mb-8">
                <input
                  type="text"
                  placeholder="Search..."
                  className="bg-transparent outline-none flex-1 text-sm"
                />
                <FaSearch className="text-[#5e2c1b]" />
              </div>

              {/* CTA & Note */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between w-full gap-4">
                <button className="bg-[#5e2c1b] cursor-pointer text-white px-6 py-3 rounded-full flex items-center space-x-3 text-sm transform transition-transform duration-300 hover:scale-105">

                  <span>Shop the Collection</span>
                  <FaArrowCircleRight className="text-lg rotate-[340deg]" />
                </button>
                
              </div>
            </div>
          </div>

          {/* Right Section */}
          <div className="w-full md:w-1/2 relative bg-[#f9f4ef]">
            <img src={image} alt="" className="w-full h-full object-cover" />
          </div>
        </div>
      </div>

      {/* Glowing Skin Section */}
      <section className="text-center py-12">
        <h2 className="text-3xl font-semibold mb-4">Glowing Skin Starts Here</h2>
        <p className="text-subtext mb-8 max-w-2xl mx-auto">Shop our skincare products tailored to your needs – formulated for hydration, glow, and everyday skin health.</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 px-6 md:px-20 ">
          <img src={image3} alt="Product 1" className="h-100vhd w-150vwd transform transition-transform duration-300 hover:scale-105" />
          <img src={image3} alt="Product 2" className="h-150vhd w-150vwd transform transition-transform duration-300 hover:scale-105" />
          <img src={image3} alt="Product 3" className="h-150vhd w-150vwd transform transition-transform duration-300 hover:scale-105" />
        </div>
        <button className="mt-8 cursor-pointer border border-primary text-primary px-5 py-2 rounded-full transform transition-transform duration-300 hover:scale-105">See More Product →</button>
      </section>

      {/* Filter Buttons */}
      <section className="text-center py-12">
        <h2 className="text-3xl font-semibold mb-4">Find Products for Your Skin Type</h2>
        <p className="text-gray-600 mb-8 max-w-xl mx-auto">
          Targeted solutions for your unique skin needs. Formulated for hydration,
          glow, and everyday skin health.
        </p>
        <div className="flex flex-wrap justify-center gap-4 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-4 py-2 rounded-full border transition-all duration-300 ${filter === cat
                ? "bg-[#5e2c1b] text-white"
                : "border-gray-300 text-[#5e2c1b] hover:bg-[#e7ddd5]"
                }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-6 md:px-20">
          {filteredProducts.map((item) => (
            <div
              key={item.id}
              onClick={() => handleImageClick(item.id)}
              className="cursor-pointer overflow-hidden rounded-lg transform transition-transform duration-300 hover:scale-105"
            >
              <img src={item.image} alt="product" className="w-full h-auto" />
            </div>
          ))}
        </div>

        <button className="mt-8 cursor-pointer border border-primary text-primary px-5 py-2 rounded-full transform transition-transform duration-300 hover:scale-105">
          See More Product →
        </button>
      </section>

      {/* Full Collection */}
      <section className="text-center py-12">
        <h2 className="text-3xl font-semibold mb-4">Nourish Your Skin, Reveal Your Glow</h2>
        <p className="text-gray-600 mb-6 max-w-xl mx-auto">
          We believe great skin starts with great care. Our mission is to create
          high-performance skincare using only clean, cruelty-free ingredients.
        </p>
        <button className="bg-[#5e2c1b] cursor-pointer text-white px-6 py-3 rounded-full font-medium transform transition-transform duration-300 hover:scale-105">
          Shop the Collection
        </button>
        <div className="mt-10 px-6 md:px-20">
          <img src={image6} alt="Full collection" className="w-full h-auto" />
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white text-sm py-10 px-6 md:px-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="text-[#5e2c1b] font-bold text-lg mb-2">Reveal</div>
            <div className="flex gap-4 text-xl">
              <a href="#" aria-label="Instagram"><FaInstagram /></a>
              <a href="#" aria-label="Twitter"><FaTwitter /></a>
              <a href="#" aria-label="Facebook"><FaFacebook /></a>
            </div>
          </div>
          <div>
            <h3 className="font-medium mb-2">SHOP</h3>
            <ul className="space-y-1">
              <li><a href="#">Face</a></li>
              <li><a href="#">Eye</a></li>
              <li><a href="#">Lip</a></li>
              <li><a href="#">Tools</a></li>
              <li><a href="#">Online Only</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-medium mb-2">COMPANY</h3>
            <ul className="space-y-1">
              <li><a href="#">About Us</a></li>
              <li><a href="#">Rare Impact</a></li>
              <li><a href="#">Media Accessible</a></li>
              <li><a href="#">Sustainability</a></li>
              <li><a href="#">Store Locator</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-medium mb-2">CUSTOMER SERVICE</h3>
            <ul className="space-y-1">
              <li><a href="#">Contact Us</a></li>
              <li><a href="#">Shipping & Returns</a></li>
              <li><a href="#">Start a U.S. Return</a></li>
              <li><a href="#">FAQs</a></li>
              <li><a href="#">Shade Match Live Chat</a></li>
            </ul>
          </div>
        </div>
        <div className="text-center mt-10 text-gray-500">
          © Copyright 2025 Reveal, all rights reserved.
        </div>
      </footer>
    </div>
  );
}