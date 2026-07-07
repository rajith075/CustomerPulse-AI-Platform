"use client";

export default function ReportHeader() {

  return (

    <div className="border-b p-12">

      <h1 className="text-5xl font-bold text-black">

        Executive Business Report

      </h1>

      <p className="mt-3 text-lg text-gray-600">

        CustomerPulse AI Intelligence Platform

      </p>

      <div className="mt-10 grid grid-cols-2 gap-8">

        <div>

          <p className="text-sm text-gray-500">

            Generated

          </p>

          <p className="font-semibold text-black">

            {new Date().toLocaleString()}

          </p>

        </div>

        <div>

          <p className="text-sm text-gray-500">

            Prepared By

          </p>

          <p className="font-semibold text-black">

            CustomerPulse AI

          </p>

        </div>

      </div>

    </div>

  );

}