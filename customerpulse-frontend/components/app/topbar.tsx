"use client";

import {
  IconBell,
  IconCalendar,
  IconDownload,
  IconMoon,
  IconSearch,
  IconSparkles,
} from "@tabler/icons-react";

export default function Topbar() {
  const hour = new Date().getHours();

  const greeting =
    hour < 12
      ? "Good Morning"
      : hour < 17
      ? "Good Afternoon"
      : "Good Evening";

  return (
    <header
      className="
      sticky
      top-0
      z-40
      flex
      h-[74px]
      items-center
      justify-between
      border-b
      border-white/[0.04]
      bg-[#040404]
      px-8
      shadow-[0_10px_40px_rgba(0,0,0,.75)]
      "
    >
      {/* LEFT */}

      <div className="flex items-center gap-8">

        <div>

          <p className="text-xs uppercase tracking-[0.28em] text-zinc-600">
            Executive Dashboard
          </p>

          <h2 className="mt-1 text-2xl font-semibold text-white">
            {greeting}, Rajith 👋
          </h2>

        </div>

        {/* Search */}

        <div
          className="
          flex
          w-[380px]
          items-center
          gap-3
          rounded-2xl
          border
          border-white/[0.05]
          bg-[#0A0A0A]
          px-4
          py-3
          transition-all
          duration-300
          hover:border-[#D9FF3F]/20
          focus-within:border-[#D9FF3F]/40
          "
        >
          <IconSearch
            size={18}
            className="text-zinc-500"
          />

          <input
            placeholder="Search..."
            className="
            w-full
            bg-transparent
            text-sm
            text-white
            outline-none
            placeholder:text-zinc-500
            "
          />

          <kbd
            className="
            rounded-lg
            border
            border-white/[0.06]
            bg-[#131313]
            px-2
            py-1
            text-[10px]
            text-zinc-500
            "
          >
            ⌘K
          </kbd>

        </div>

      </div>

      {/* RIGHT */}

      <div className="flex items-center gap-3">

        {/* AI */}

        <button
          className="
          flex
          items-center
          gap-2
          rounded-2xl
          bg-[#D9FF3F]
          px-5
          py-3
          text-sm
          font-semibold
          text-black
          transition
          hover:scale-[1.03]
          "
        >
          <IconSparkles size={18} />
          AI
        </button>

        {/* Buttons */}

        {[
          <IconCalendar size={18} key="calendar" />,
          <IconDownload size={18} key="download" />,
          <IconBell size={18} key="bell" />,
          <IconMoon size={18} key="moon" />,
        ].map((icon, index) => (
          <button
            key={index}
            className="
            relative
            flex
            h-11
            w-11
            items-center
            justify-center
            rounded-2xl
            border
            border-white/[0.05]
            bg-[#0A0A0A]
            text-zinc-400
            transition-all
            duration-300
            hover:border-white/10
            hover:bg-[#111111]
            hover:text-white
            "
          >
            {icon}

            {index === 2 && (
              <span
                className="
                absolute
                right-2.5
                top-2.5
                h-2.5
                w-2.5
                rounded-full
                bg-red-500
                "
              />
            )}
          </button>
        ))}

      </div>

    </header>
  );
}