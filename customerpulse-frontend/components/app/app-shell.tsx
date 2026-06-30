"use client";

import Sidebar from "./sidebar";
import Topbar from "./topbar";

export default function AppShell({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[#020202] text-white">

      {/* ================= Background ================= */}

      <div className="fixed inset-0 -z-20 overflow-hidden">

        {/* Base */}

        <div className="absolute inset-0 bg-[#020202]" />

        {/* Green Glow */}

        <div
          className="
          absolute
          -left-44
          -top-40
          h-[700px]
          w-[700px]
          rounded-full
          bg-[#D9FF3F]/[0.03]
          blur-[220px]
          "
        />

        {/* Purple Glow */}

        <div
          className="
          absolute
          -right-52
          bottom-[-120px]
          h-[700px]
          w-[700px]
          rounded-full
          bg-violet-500/[0.025]
          blur-[240px]
          "
        />

        {/* Soft Center Glow */}

        <div
          className="
          absolute
          left-1/2
          top-1/2
          h-[650px]
          w-[650px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-white/[0.015]
          blur-[240px]
          "
        />

        {/* Noise Texture */}

        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage:
              "radial-gradient(circle, rgba(255,255,255,.18) 1px, transparent 1px)",
            backgroundSize: "22px 22px",
          }}
        />

      </div>

      {/* ================= Sidebar ================= */}

      <Sidebar />

      {/* ================= Main ================= */}

      <main
        className="
        ml-[260px]
        min-h-screen
        p-3
        "
      >

        <div
          className="
          min-h-[calc(100vh-24px)]
          overflow-hidden
          rounded-[26px]
          border
          border-white/[0.04]
         
          shadow-[0_35px_120px_rgba(0,0,0,.85)]
          "
        >

          {/* Topbar */}

          <Topbar />

          {/* Page */}

          <section
            className="
            px-7
            pb-7
            pt-6
            "
          >
            {children}
          </section>

        </div>

      </main>

    </div>
  );
}