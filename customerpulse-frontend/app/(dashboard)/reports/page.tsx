"use client";

import { useRef } from "react";
import { useReactToPrint } from "react-to-print";
import { IconDownload } from "@tabler/icons-react";

import ReportPreview from "@/components/reports/report-preview";
import { useReport } from "@/hooks/useReport";


export default function ReportsPage() {

  const {

    report,

    loading,

    error,

  } = useReport();

  const reportRef =
    useRef<HTMLDivElement>(null);

  const handlePrint =
    useReactToPrint({

      contentRef: reportRef,

      documentTitle:
        "CustomerPulse Executive Report",

    });

  if (loading) {

    return (

      <div className="p-10">

        Loading...

      </div>

    );

  }

  if (error || !report) {

    return (

      <div className="p-10">

        Report not found.

      </div>

    );

  }

  return (

    <div className="space-y-8">

      <div className="flex justify-end">

        <button

          onClick={handlePrint}

          className="
          flex
          items-center
          gap-2
          rounded-xl
          bg-black
          px-6
          py-3
          text-white
          transition
          hover:bg-zinc-800
          "

        >

          <IconDownload size={18} />

          Download Report

        </button>

      </div>

      <div ref={reportRef}>

        <ReportPreview

          report={report}

        />

      </div>

    </div>

  );

}