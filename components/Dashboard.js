import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import Link from "next/link";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Navbar from "./Navbar";
import Image from "next/image";
import Card from "./Card";
import react, { useState } from "react";
import Footer from "./Footer";
const Dashboard = () => {
  const [dataDummy, setdataDummy] = useState([
    {
      id: 1,
      title: "Polije Press",
      imgSrc:
        "https://images.unsplash.com/photo-1522125670776-3c7abb882bc2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bW9iaWxlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
      desc: "Aplikasi baca buku online (Baboon) adalah aplikasi milik politeknik negeri jember yang berfungsi untuk mengurangi pembajakan buku. Aplikasi ini memiliki fitur diantaranya yaitu fitur akun premium, fitur baca buku secara online, fitur disable screenshot supaya data dan isi buku tidak tersebar.",
    },
    {
      id: 2,
      title: "PLN Icon+ Warehouse System",
      imgSrc:
        "https://plus.unsplash.com/premium_photo-1661277751867-52a44000d9b8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8d2FyZWhvdXNlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
      desc: "Warehouse system merupakan aplikasi berbasis website dan mobile, yang berfungsi untuk memanaagemen data barang di dalam gudang. Aplikasi ini memiliki fitur scan barcode barang menggunakan smartphone. sehingga memudahkan karyawan gudang ketika ingin menginputkan data barang.",
    },
    {
      id: 3,
      title: "Ui & Ux Undgn.Id",
      imgSrc: "/images/UI.jpeg",
      desc: "Undn.id adalah website penyedia layanan pembuatan undangan secara online.",
    },
  ]);

  return (
    <div>
      <section className="relative overflow-hidden bg-white ">
        <div className="mx-auto max-w-7xl">
          <div className="relative z-10 bg-white pb-8 sm:pb-16 md:pb-20 lg:w-full lg:max-w-2xl lg:pb-28 xl:pb-32">
            <svg
              className="absolute inset-y-0 right-0 hidden h-full w-48 translate-x-1/2 transform text-white lg:block"
              fill="currentColor"
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <polygon points="50,0 100,0 50,100 0,100" />
            </svg>
            <Navbar />
            <main className="mx-auto mt-10 max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
              <div className="sm:text-center lg:text-left">
                <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
                  <span className="block xl:inline">Selamat datang di </span>
                  <span className="block text-indigo-600 xl:inline">
                    siXeyes Company
                  </span>
                </h1>
                <p className="mt-3 text-base text-gray-500 sm:mx-auto sm:mt-5 sm:max-w-xl sm:text-lg md:mt-5 md:text-xl lg:mx-0">
                  Kami adalah komunitas yang bergerak di bidang teknologi
                  memberikan solusi untuk kebutuhan teknologi anda.
                </p>
                <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                  <div className="rounded-md shadow">
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href="https://wa.me/087826563459"
                      className="flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 md:py-4 md:px-10 md:text-lg"
                    >
                      Hubungi Kami
                    </a>
                  </div>
                  {/* <div className="mt-3 sm:mt-0 sm:ml-3">
                    <a
                      href="#"
                      className="flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-100 px-8 py-3 text-base font-medium text-indigo-700 hover:bg-indigo-200 md:py-4 md:px-10 md:text-lg"
                    >
                      Live demo
                    </a>
                  </div> */}
                </div>
              </div>
            </main>
          </div>
        </div>
        <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
          <img
            className="h-56 w-full object-cover sm:h-72 md:h-96 lg:h-full lg:w-full"
            src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80"
            alt=""
          />
        </div>
      </section>
      {/* service section */}
      <section className="my-44">
        <div className=" justify-center ">
          <div className="text-center">
            <h1 className="font-bold text-xl sm:text-3xl md:text-2xl lg:text-3xl ">
              Services
            </h1>
          </div>
          <div className="flex-col flex justify-evenly my-10 sm:flex-row ">
            <div className="self-center">
              <img
                // loader={myLoader}
                src="https://images.unsplash.com/photo-1504384764586-bb4cdc1707b0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDB8fHRlY2hub2xvZ3l8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
                alt="Picture of the profile"
                className="rounded-xl"
              />
            </div>
            <div className="w-3/4 sm:w-2/6 mx-5 self-center">
              <div>
                <div className="flex">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-5 h-5 self-center mr-2"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M2.25 2.25a.75.75 0 000 1.5H3v10.5a3 3 0 003 3h1.21l-1.172 3.513a.75.75 0 001.424.474l.329-.987h8.418l.33.987a.75.75 0 001.422-.474l-1.17-3.513H18a3 3 0 003-3V3.75h.75a.75.75 0 000-1.5H2.25zm6.54 15h6.42l.5 1.5H8.29l.5-1.5zm8.085-8.995a.75.75 0 10-.75-1.299 12.81 12.81 0 00-3.558 3.05L11.03 8.47a.75.75 0 00-1.06 0l-3 3a.75.75 0 101.06 1.06l2.47-2.47 1.617 1.618a.75.75 0 001.146-.102 11.312 11.312 0 013.612-3.321z"
                      clip-rule="evenodd"
                    />
                  </svg>

                  <h1 className="font-semibold my-3">Web Application</h1>
                </div>
                <p className="font-medium">
                  Kami bisa membuat website sesuai dengan kebutuhan anda,
                  seperti Company Profile, Aplikasi Berbasis Website, dan lain
                  lain. Kita memiliki tim yang handal untuk mengikuti permintaan
                  anda.
                </p>
                <div className="flex">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-5 h-5 self-center mr-2"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10.5 3A1.501 1.501 0 009 4.5h6A1.5 1.5 0 0013.5 3h-3zm-2.693.178A3 3 0 0110.5 1.5h3a3 3 0 012.694 1.678c.497.042.992.092 1.486.15 1.497.173 2.57 1.46 2.57 2.929V19.5a3 3 0 01-3 3H6.75a3 3 0 01-3-3V6.257c0-1.47 1.073-2.756 2.57-2.93.493-.057.989-.107 1.487-.15z"
                      clip-rule="evenodd"
                    />
                  </svg>

                  <h1 className="font-semibold my-3">
                    Desain Grafis & Ui / Ux
                  </h1>
                </div>
                <p className="font-medium">
                  Untuk mempermudah realiasi ide anda, kita mencoba untuk
                  mengevaluasi ide anda dengan User Interface dan User
                  Experience yang menarik. Kita bisa mendesain apa saja sesuai
                  dengan kebutuhan anda.
                </p>
                <div className="flex">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-5 h-5 self-center mr-2"
                  >
                    <path d="M10.5 18.75a.75.75 0 000 1.5h3a.75.75 0 000-1.5h-3z" />
                    <path
                      fill-rule="evenodd"
                      d="M8.625.75A3.375 3.375 0 005.25 4.125v15.75a3.375 3.375 0 003.375 3.375h6.75a3.375 3.375 0 003.375-3.375V4.125A3.375 3.375 0 0015.375.75h-6.75zM7.5 4.125C7.5 3.504 8.004 3 8.625 3H9.75v.375c0 .621.504 1.125 1.125 1.125h2.25c.621 0 1.125-.504 1.125-1.125V3h1.125c.621 0 1.125.504 1.125 1.125v15.75c0 .621-.504 1.125-1.125 1.125h-6.75A1.125 1.125 0 017.5 19.875V4.125z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  <h1 className="font-semibold my-3">Mobile Application</h1>
                </div>
                <p className="font-medium">
                  Kami menerima jasa pembuatan aplikasi berbasis android dan
                  ios. Untuk memudahkan digitalisasi proses bisnis milik
                  perusahaan anda.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* project section  */}
      <section className="my-44">
        <div>
          <h1 className="font-bold text-center text-xl sm:text-3xl md:text-2xl lg:text-3xl ">
            Ongoing Project
          </h1>
          <p className="text-center mt-4">
            Beberapa proyek yang sedang kami kerjakan diantanya.
          </p>
        </div>
        <div className="m-10 flex flex-col justify-evenly sm:flex-row  ">
          {dataDummy.map((item) => (
            <div
              key={item.id}
              className="w-full mt-5 rounded-lg shadow-md lg:max-w-sm translate ease-in-out delay-150 hover:translate-y-1 hover:scale-110 duration-300"
            >
              <img
                className="object-cover w-full h-48"
                src={item.imgSrc}
                alt="image"
              />
              <div className="p-4">
                <h4 className="text-xl font-semibold tracking-tight text-blue-600">
                  {item.title}
                </h4>
                <p className="mb-2 leading-normal">{item.desc}</p>
                <button className="px-4 py-2 text-sm text-blue-100 bg-blue-500 rounded shadow">
                  Read more
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
      {/* customers section */}
      <section>
        <div className="">
          <h1 className="font-bold text-center text-xl sm:text-3xl md:text-2xl lg:text-3xl ">
            Our Client
          </h1>
          <p className="text-center mt-4">Beberapa client kami.</p>
        </div>
        <div className="flex-col flex sm:flex-row items-center justify-center my-10">
          <img
            className="w-2/5 h-2/5 object-fill translate ease-in-out delay-150 hover:translate-y-1 hover:scale-110 duration-300"
            src={"/images/logo.png"}
            alt="image"
          />
          <img
            className="w-2/5 h-2/5 object-fill translate ease-in-out delay-150 hover:translate-y-1 hover:scale-110 duration-300"
            src={"/images/logo-first.png"}
            alt="image"
          />
        </div>
      </section>
      {/* recent project section */}
      <section>
        <div>
          <h1 className="font-bold text-center text-xl sm:text-3xl md:text-2xl lg:text-3xl ">
            Recent Project
          </h1>
          <p className="text-center mt-4">
            Beberapa proyek yang sudah kami kerjakan diantanya.
          </p>
        </div>
        <div className="grid grid-cols-4 gap-4 m-10">
          <img
            className="translate ease-in-out delay-150 hover:translate-y-1 hover:scale-110 duration-300 m-3"
            src="/images/1.png"
            alt="Project"
          />
          <img
            className="translate ease-in-out delay-150 hover:translate-y-1 hover:scale-110 duration-300 m-3"
            src="/images/2.png"
            alt="Project"
          />
          <img
            className="translate ease-in-out delay-150 hover:translate-y-1 hover:scale-110 duration-300 m-3"
            src="/images/3.png"
            alt="Project"
          />
          <img
            className="translate ease-in-out delay-150 hover:translate-y-1 hover:scale-110 duration-300 m-3"
            src="/images/4.png"
            alt="Project"
          />
          <img
            className="translate ease-in-out delay-150 hover:translate-y-1 hover:scale-110 duration-300 m-3"
            src="/images/5.png"
            alt="Project"
          />
          <img
            className="translate ease-in-out delay-150 hover:translate-y-1 hover:scale-110 duration-300 m-3"
            src="/images/6.png"
            alt="Project"
          />
          <img
            className="translate ease-in-out delay-150 hover:translate-y-1 hover:scale-110 duration-300 m-3"
            src="/images/7.png"
            alt="Project"
          />
          <img
            className="translate ease-in-out delay-150 hover:translate-y-1 hover:scale-110 duration-300 m-3"
            src="/images/8.png"
            alt="Project"
          />
          <img
            className="translate ease-in-out delay-150 hover:translate-y-1 hover:scale-110 duration-300 m-3"
            src="/images/9.png"
            alt="Project"
          />
          <img
            className="translate ease-in-out delay-150 hover:translate-y-1 hover:scale-110 duration-300 m-3"
            src="/images/10.png"
            alt="Project"
          />
          <img
            className="translate ease-in-out delay-150 hover:translate-y-1 hover:scale-110 duration-300 m-3"
            src="/images/11.png"
            alt="Project"
          />
        </div>
      </section>
      {/* team section */}
      <section>
        <div className="max-w-screen-xl px-4 mx-auto md:px-8">
          <div className="mb-10 md:mb-16">
            <h2
              className="
        mb-4
        text-2xl
        font-bold
        text-center text-gray-800
        lg:text-3xl
        md:mb-6
      "
            >
              Our Team
            </h2>

            <p className="max-w-screen-md mx-auto text-center font-semibold text-gray-500 md:text-lg">
              "If we were united we strongest together."
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            <div className="p-4 shadow">
              <div className="h-48 mb-2 overflow-hidden rounded-lg shadow-lg md:h-80">
                <img
                  src="/images/faisal-1.jpg"
                  alt="Image"
                  className="object-cover object-center w-full h-full"
                />
              </div>

              <div className="flex flex-col items-center justify-center">
                <div className="font-bold text-indigo-500 md:text-lg">
                  Amir Faisal K
                </div>
                <p className="mb-3 text-sm text-gray-500 md:text-base md:mb-4">
                  CEO | Web & Mobile Developer
                </p>

                <div className="flex">
                  <div className="flex gap-4">
                    <a href="#">
                      <svg
                        className="w-6 h-6 text-blue-600 fill-current"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                      >
                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                      </svg>
                    </a>
                    <a href="#">
                      <svg
                        className="w-6 h-6 text-blue-300 fill-current"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                      >
                        <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                      </svg>
                    </a>
                    <a href="#">
                      <svg
                        className="w-6 h-6 text-blue-500 fill-current"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 448 512"
                      >
                        <path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"></path>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-4 shadow">
              <div className="h-48 mb-2 overflow-hidden rounded-lg shadow-lg md:h-80">
                <img
                  src="/images/faruk.jpeg"
                  alt="Image"
                  className="object-cover object-center w-full h-full"
                />
              </div>

              <div className="flex flex-col items-center justify-center">
                <div className="font-bold text-indigo-500 md:text-lg">
                  Faruk Maulana
                </div>
                <p className="mb-3 text-sm text-gray-500 md:text-base md:mb-4">
                  Fullstack Web Developer
                </p>

                <div className="flex">
                  <div className="flex gap-4">
                    <a href="#">
                      <svg
                        className="w-6 h-6 text-blue-600 fill-current"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                      >
                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                      </svg>
                    </a>
                    <a href="#">
                      <svg
                        className="w-6 h-6 text-blue-300 fill-current"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                      >
                        <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                      </svg>
                    </a>
                    <a href="#">
                      <svg
                        className="w-6 h-6 text-blue-500 fill-current"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 448 512"
                      >
                        <path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"></path>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-4 shadow">
              <div className="h-48 mb-2 overflow-hidden rounded-lg shadow-lg md:h-80">
                <img
                  src="/images/hendra.PNG"
                  alt="Image"
                  className="object-cover object-center w-full h-full"
                />
              </div>

              <div className="flex flex-col items-center justify-center">
                <div className="font-bold text-indigo-500 md:text-lg">
                  Hendrawan
                </div>
                <p className="mb-3 text-sm text-gray-500 md:text-base md:mb-4">
                  Fullstack Web & Mobile Developer
                </p>

                <div className="flex">
                  <div className="flex gap-4">
                    <a href="#">
                      <svg
                        className="w-6 h-6 text-blue-600 fill-current"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                      >
                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                      </svg>
                    </a>
                    <a href="#">
                      <svg
                        className="w-6 h-6 text-blue-300 fill-current"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                      >
                        <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                      </svg>
                    </a>
                    <a href="#">
                      <svg
                        className="w-6 h-6 text-blue-500 fill-current"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 448 512"
                      >
                        <path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"></path>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-4 shadow">
              <div className="h-48 mb-2 overflow-hidden rounded-lg shadow-lg md:h-80">
                <img
                  src="/images/fahrika.JPG"
                  alt="Image"
                  className="object-cover object-center w-full h-full"
                />
              </div>

              <div className="flex flex-col items-center justify-center">
                <div className="font-bold text-indigo-500 md:text-lg">
                  Eka Fahrika N
                </div>
                <p className="mb-3 text-sm text-gray-500 md:text-base md:mb-4">
                  UI & UX Designer
                </p>

                <div className="flex">
                  <div className="flex gap-4">
                    <a href="#">
                      <svg
                        className="w-6 h-6 text-blue-600 fill-current"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                      >
                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                      </svg>
                    </a>
                    <a href="#">
                      <svg
                        className="w-6 h-6 text-blue-300 fill-current"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                      >
                        <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                      </svg>
                    </a>
                    <a href="#">
                      <svg
                        className="w-6 h-6 text-blue-500 fill-current"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 448 512"
                      >
                        <path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"></path>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-4 shadow">
              <div className="h-48 mb-2 overflow-hidden rounded-lg shadow-lg md:h-80">
                <img
                  src="/images/tyo.PNG"
                  alt="Image"
                  className="object-cover object-center w-full h-full"
                />
              </div>

              <div className="flex flex-col items-center justify-center">
                <div className="font-bold text-indigo-500 md:text-lg">
                  Ardyas Setya
                </div>
                <p className="mb-3 text-sm text-gray-500 md:text-base md:mb-4">
                  Graphic Designer & Social Media Specialist
                </p>

                <div className="flex">
                  <div className="flex gap-4">
                    <a href="#">
                      <svg
                        className="w-6 h-6 text-blue-600 fill-current"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                      >
                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                      </svg>
                    </a>
                    <a href="#">
                      <svg
                        className="w-6 h-6 text-blue-300 fill-current"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                      >
                        <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                      </svg>
                    </a>
                    <a href="#">
                      <svg
                        className="w-6 h-6 text-blue-500 fill-current"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 448 512"
                      >
                        <path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"></path>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* footer */}
      <section>
        <Footer />
      </section>
    </div>
  );
};

export default Dashboard;
