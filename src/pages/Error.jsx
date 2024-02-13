import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { GrFormPreviousLink } from "react-icons/gr";
import LocaleContext from "../contexts/LocaleContext";

function Error() {
  const { locale } = useContext(LocaleContext);
  return (
    <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
      <div className="mx-auto max-w-screen-sm text-center">
        <h1 className="mb-4 text-7xl tracking-tight font-extrabold lg:text-9xl text-primary-600 dark:text-primary-500">
          404
        </h1>
        <p className="mb-4 text-3xl tracking-tight font-bold text-gray-900 md:text-4xl">
          {locale === "id" ? "Halaman tidak ditemukan" : "Page not found"}
        </p>
        <p className="mb-4 text-lg font-light text-gray-500 ">
          {locale === "id"
            ? "Maaf, halaman yang anda cari tidak ditemukan"
            : "Sorry, the page you are looking for does not exist."}{" "}
        </p>
        <Link
          to="/"
          className="inline-flex text-gray-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center items-center  my-4 hover:text-gray-900"
        >
          <GrFormPreviousLink className="mx-2" />
          {locale === "id" ? "Kembali" : "Back"}
        </Link>
      </div>
    </div>
  );
}

export default Error;
