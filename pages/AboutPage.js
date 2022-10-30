import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const AboutPage = () => {
  return (
    <div>
      <Navbar />
      <div className="py-16 bg-white">
        <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
          <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
            <div className="md:5/12 lg:w-5/12">
              <img
                src="https://tailus.io/sources/blocks/left-image/preview/images/startup.png"
                alt="image"
                loading="lazy"
                width=""
                height=""
              />
            </div>
            <div className="md:7/12 lg:w-6/12">
              <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">
                Tentang Kami
              </h2>
              <p className="mt-6 text-gray-600">
                siXeyes bergerak di bidang teknologi memberikan solusi terhadap
                permasalahan dalam kebutuhan teknologi anda, baik itu kebutuhan
                mengenai data elektronik, aplikasi hingga sistem informasi.
              </p>
              <p className="mt-4 text-gray-600">
                Kami mengutamakan kepuasan client dan keberlangsungan aplikasi
                di masa datang.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AboutPage;
