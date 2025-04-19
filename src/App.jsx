import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Parallax } from "react-scroll-parallax"; // Add for parallax effect

const glowingBorder = "border-2 border-purple-600 animate-constant-glow";
const hoverGlow = "hover:border-purple-400 hover:shadow-[0_0_30px_rgba(128,0,255,0.8)]";

const Card = ({ title, children }) => (
  <motion.div
    whileHover={{ scale: 1.05, rotate: 0.5 }}
    className={`bg-gradient-to-br from-gray-900 via-black to-gray-800 rounded-xl p-6 shadow-lg transition-all duration-300 ${glowingBorder} ${hoverGlow}`}
  >
    <h3 className="text-2xl font-semibold text-purple-300 mb-3 border-b border-purple-800 pb-2">
      {title}
    </h3>
    <div className="text-gray-300 leading-relaxed text-sm md:text-base">{children}</div>
  </motion.div>
);

const Section = ({ id, title, children }) => (
  <section
    id={id}
    className="snap-start min-h-screen py-24 px-6 md:px-20"
  >
    <motion.h2
      initial={{ opacity: 0, y: 30, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="text-3xl md:text-4xl font-bold text-purple-400 mb-12 border-l-4 border-purple-700 pl-5"
    >
      {title}
    </motion.h2>
    {children}
  </section>
);

const Navbar = () => (
  <nav className="fixed top-0 w-full bg-black/70 backdrop-blur-md z-50 shadow-md border-b border-purple-800">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <ul className="flex justify-center md:justify-start space-x-6 py-4 text-purple-300 font-semibold text-sm md:text-base">
        {["Profile", "Skills", "Projects", "Affiliations", "Gallery", "Contact"].map((section) => (
          <li key={section}>
            <a
              href={`#${section.toLowerCase()}`}
              className="hover:text-purple-500 transition-colors duration-200"
            >
              {section}
            </a>
          </li>
        ))}
      </ul>
    </div>
  </nav>
);

const ScrollIndicator = () => {
  const [scrollPercentage, setScrollPercentage] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = document.documentElement.scrollHeight - window.innerHeight;
      setScrollPercentage((scrollPosition / windowHeight) * 100);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: `${scrollPercentage}%`,
        height: "4px",
        backgroundColor: "purple",
        transition: "width 0.3s ease",
      }}
    />
  );
};

const App = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <main className="font-sans text-white snap-y snap-mandatory overflow-y-scroll overflow-x-hidden h-screen scroll-smooth w-full relative">
      {/* Animated background layer */}
      <div className="fixed inset-0 -z-10">
        <div className="min-h-screen w-full animate-gradient-x bg-[linear-gradient(-45deg,_#0e0e0e,_#1a1a1a,_#3e1e80,_#5a2d8c,_#6f3b9b,_#301c4b,_#2a1531)] bg-[length:400%_400%] bg-animation-6s" />
      </div>

      {/* Scroll Indicator */}
      <ScrollIndicator />

      <Navbar />

      <header
        id="profile"
        className="snap-start text-center py-40 pt-48"
      >
        <motion.img
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8 }}
          src="/cover-photo.jpg"
          alt="Cover"
          className="mx-auto mb-6 w-36 h-36 rounded-full border-4 border-purple-600 shadow-lg shadow-purple-700/60"
        />
        <motion.h1
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-5xl font-extrabold text-purple-400 mb-2"
        >
          KIM NAVARRO
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="text-lg text-gray-400"
        >
          Information Technology Educator • MSIT Student • Database Engineer • 
          UX Designer • Android Programmer • <br/> Web Developer • Web3 Enthusiast • 
          Esports Education Advocate • Speaker 
        </motion.p>
      </header>

      {/* Parallax Section Example */}
      <Section id="skills" title="Skills">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <Card title="Software Development">
            <blockquote>
              I design and build software applications that run on desktops, mobile devices, or other systems beyond the browser.
            </blockquote><br />
            <strong>What I know</strong><br />
            <p>
              <ul className="list-disc list-inside text-gray-300">
                <li>Programming Languages: <i>C/C++, C#, Java, Python, VB.Net</i></li>
                <li>Object-oriented Programming (OOP)</li>
                <li>Data Structures & Algorithms</li>
                <li>Software Architecture & Design Patterns</li>
                <li>Debugging and Testing Techniques</li>
                <li>Database Engineering</li>
                <li>API Integration</li>
                <li>Mobile / Desktop Development</li>
              </ul>
            </p>
          </Card>
          {/* Add other cards here */}
        </div>
      </Section>

      {/* Gallery Section */}
      <Section id="gallery" title="Activity Gallery">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.1, rotate: 1 }}
              className={`overflow-hidden rounded-xl cursor-pointer transition duration-300 ease-in-out ${glowingBorder} ${hoverGlow}`}
              onClick={() => setSelectedImage(`/gallery/image${i}.png`)}
            >
              <img
                src={`/gallery/image${i}.png`}
                alt={`Gallery ${i}`}
                className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
              />
            </motion.div>
          ))}
        </div>

        <AnimatePresence>
          {selectedImage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            >
              <motion.div
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.8 }}
                transition={{ type: "spring", stiffness: 200 }}
                className="relative max-w-4xl w-full"
              >
                <button
                  onClick={() => setSelectedImage(null)}
                  className="absolute top-2 right-2 text-white text-xl bg-purple-600 hover:bg-purple-800 rounded-full px-4 py-1 shadow-md"
                >
                  ×
                </button>
                <img
                  src={selectedImage}
                  alt="Preview"
                  className="w-full h-auto rounded-lg shadow-lg border-4 border-purple-700"
                />
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </Section>

      <footer className="text-center py-8 border-t border-purple-800 text-purple-500 text-sm">
        © 2025 Your Name. Crafted with 💜 in the FRXVerse. All rights reserved.
      </footer>
    </main>
  );
};

export default App;
