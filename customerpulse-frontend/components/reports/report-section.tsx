"use client";

export default function ReportSection({

  title,

  children,

}: any) {

  return (

    <section className="border-b p-10">

      <h2 className="mb-6 text-2xl font-bold text-black">

        {title}

      </h2>

      <div className="leading-8 text-gray-700">

        {children}

      </div>

    </section>

  );

}