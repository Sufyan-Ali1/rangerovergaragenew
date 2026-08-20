"use client";

import React from "react";

export default function Areas({areas_data}) {


  return (
    <section className="w-full bg-[#06152d] px-4 py-10 sm:px-6 md:px-8 lg:px-10 xl:px-12">
      <div
        className="mx-auto w-full max-w-[1480px] overflow-hidden rounded-[30px] border-[2px] border-[#cda653] bg-white shadow-[0_25px_70px_rgba(0,0,0,0.25)]"
        style={{
          background:
            "linear-gradient(135deg, #ffffff 0%, #ffffff 72%, #faf8f2 100%)",
        }}
      >
        {/* =========================
            TOP HEADING AREA
        ========================== */}
        <div className="relative p-5">
          {/* Decorative top location icon */}
          <div className="mb-5 flex justify-center">
            <div className="relative flex h-[62px] w-[62px] items-center justify-center">
              <svg
                viewBox="0 0 64 64"
                className="h-[58px] w-[58px]"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M32 5C22.0589 5 14 13.0589 14 23C14 37 32 56 32 56C32 56 50 37 50 23C50 13.0589 41.9411 5 32 5Z"
                  fill="#CDA653"
                />
                <circle
                  cx="32"
                  cy="23"
                  r="6"
                  fill="white"
                />
                <path
                  d="M13 48C18.4 54.1 24.6 57 32 57C39.4 57 45.6 54.1 51 48"
                  stroke="#CDA653"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
              </svg>
            </div>
          </div>

          {/* Heading with side lines */}
          <div className="flex w-full items-center justify-center gap-5 sm:gap-8">
            <div className="hidden h-[2px] flex-1 bg-[#cda653] sm:block" />

            <h1 className="text-center text-[30px] font-extrabold leading-[1.05] tracking-[-0.8px] text-[#101b31] sm:text-[38px] md:text-[46px] lg:text-[52px]">
              Proudly Serving{" "}
              <span className="text-[#cda653]">Your Area</span>
            </h1>

            <div className="hidden h-[2px] flex-1 bg-[#cda653] sm:block" />
          </div>

          {/* One-line / short supporting content */}
          <p className="mx-auto mt-5 max-w-[900px] text-center text-[16px] font-medium leading-7 text-[#40516b] sm:text-[18px] md:text-[20px]">
            We provide expert engine services across a wide range of locations,
            delivering{" "}
            <span className="font-bold text-[#cda653]">quality</span> and{" "}
            <span className="font-bold text-[#cda653]">reliability</span>{" "}
            wherever you are.
          </p>

          {/* =========================
              AREAS GRID START
          ========================== */}
          <div className="mt-4 grid grid-cols-1 gap-3 lg:gap-4 sm:mt-10 sm:grid-cols-2  lg:grid-cols-4 ">
            {areas_data.map((area) => (
              <button
                key={area.slug}
                type="button"
                className="group cursor-pointer flex min-h-[76px] items-center gap-5 rounded-[18px] border-[2px] border-[#cda653] bg-[#101c32] px-6 text-left shadow-[0_8px_20px_rgba(16,28,50,0.12)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#16243e] hover:shadow-[0_14px_28px_rgba(16,28,50,0.22)]"
              >
                {/* Location icon */}
                <span className="flex h-[38px] w-[38px] shrink-0 items-center justify-center">
                  <svg
                    viewBox="0 0 32 40"
                    className="h-[34px] w-[28px] transition-transform duration-300 group-hover:scale-110"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M16 2C8.268 2 2 8.268 2 16C2 26.5 16 38 16 38C16 38 30 26.5 30 16C30 8.268 23.732 2 16 2Z"
                      stroke="#D5AA52"
                      strokeWidth="2.5"
                    />
                    <circle
                      cx="16"
                      cy="16"
                      r="4"
                      stroke="#D5AA52"
                      strokeWidth="2.5"
                    />
                  </svg>
                </span>

                <span className="text-[18px] font-semibold tracking-[-0.2px] text-white sm:text-[19px] md:text-[20px]">
                  {area.name}
                </span>
              </button>
            ))}
          </div>
          
          <div className="h-1 sm:h-2" />
        </div>
      </div>
    </section>
  );
}