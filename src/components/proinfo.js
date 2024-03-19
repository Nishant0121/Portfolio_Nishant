import React from "react";
import travelgo from "../images/travelgo.jpeg";
import atlas from "../images/atlas.jpeg";

export default function Project() {
  return (
    <div>
      <h1 className=" text-violet-900 text-center text-xl">Project</h1>
      <div className="proinfo grid grid-cols-3 gap-2">
        <article className="overflow-hidden rounded-lg border m-3 border-gray-100 bg-white shadow-sm">
          <img alt="" src={travelgo} className="h-56 w-full object-cover" />

          <div className="p-4 sm:p-6">
            <a href="/">
              <h3 className="text-lg font-medium text-gray-900">Travel Go</h3>
            </a>

            <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
              Its a Website for travel booking
            </p>

            <a
              href="https://nishant0121.github.io/Travel_Go/"
              className="group mt-4 inline-flex items-center gap-1 text-sm font-medium text-blue-600"
              target="_blank"
              rel="noreferrer"
            >
              Find out more
              <span
                aria-hidden="true"
                className="block transition-all group-hover:ms-0.5 rtl:rotate-180"
              >
                &rarr;
              </span>
            </a>
          </div>
        </article>
        <article className="overflow-hidden m-3 rounded-lg border border-gray-100 bg-white shadow-sm">
          <img alt="" src={atlas} className="h-56 w-full object-cover" />

          <div className="p-4 sm:p-6">
            <a href="/">
              <h3 className="text-lg font-medium text-gray-900">Atlas Os</h3>
            </a>

            <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
              It is a Website that can do some basic operation of smart phones.
            </p>

            <a
              href="https://atlas-os.vercel.app/"
              className="group mt-4 inline-flex items-center gap-1 text-sm font-medium text-blue-600"
              target="_blank"
              rel="noreferrer"
            >
              Check it out
              <span
                aria-hidden="true"
                className="block transition-all group-hover:ms-0.5 rtl:rotate-180"
              >
                &rarr;
              </span>
            </a>
          </div>
        </article>
      </div>
    </div>
  );
}
