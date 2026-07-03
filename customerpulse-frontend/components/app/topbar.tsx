"use client";

import { useState } from "react";

import ExecutiveCalendar from "@/components/calendar/executive-calendar";

import NotificationPanel from "@/components/notifications/notification-panel";

import { useNotifications } from "../../hooks/useNotifications";

import {
  IconBell,
  IconCalendar,
  IconDownload,
  IconMoon,
  IconSearch,
  IconSparkles,
} from "@tabler/icons-react";

export default function Topbar() {

  const [calendarOpen, setCalendarOpen] = useState(false);

  const hour = new Date().getHours();
  const [notificationOpen, setNotificationOpen] = useState(false);

  const { unreadCount } = useNotifications();

  const greeting =
    hour < 12
      ? "Good Morning"
      : hour < 17
      ? "Good Afternoon"
      : "Good Evening";

  const openSpotlight = () => {

    window.dispatchEvent(
      new Event("open-spotlight")
    );

  };

  return (

    <>

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

          {/* Spotlight Search */}

          <button

            onClick={openSpotlight}

            className="
            group
            flex
            h-[56px]
            w-[480px]
            items-center
            justify-between
            rounded-2xl
            border
            border-white/[0.05]
            bg-[#0A0A0A]
            px-5
            transition-all
            duration-300
            hover:border-[#D9FF3F]/30
            hover:bg-[#111111]
            "

          >

            <div className="flex items-center gap-3">

              <IconSearch
                size={18}
                className="text-zinc-500 transition group-hover:text-[#D9FF3F]"
              />

              <span
                className="
                text-sm
                text-zinc-500
                transition
                group-hover:text-zinc-300
                "
              >

                Click Ctrl + K to search CustomerPulse AI...

              </span>

            </div>

            <kbd
              className="
              rounded-xl
              border
              border-white/[0.08]
              bg-[#131313]
              px-3
              py-1.5
              text-[11px]
              font-medium
              text-zinc-400
              transition
              group-hover:border-[#D9FF3F]/20
              group-hover:text-[#D9FF3F]
              "
            >

              Ctrl K

            </kbd>

          </button>

        </div>

        {/* RIGHT */}

        <div className="flex items-center gap-3">

          {/* AI Button */}

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

          {/* Calendar */}

          <button

            onClick={() => setCalendarOpen(true)}

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
            hover:border-[#D9FF3F]/20
            hover:bg-[#111111]
            hover:text-[#D9FF3F]
            "

          >

            <IconCalendar size={18} />

          </button>

          {/* Download */}

          <button
            className="
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

            <IconDownload size={18} />

          </button>

         {/* Notification */}

<div className="relative">

  <button
    onClick={() => setNotificationOpen((prev) => !prev)}
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

    <IconBell size={18} />

    {unreadCount > 0 && (

      <span
        className="
        absolute
        -right-1
        -top-1
        flex
        h-5
        w-5
        items-center
        justify-center
        rounded-full
        bg-red-500
        text-[10px]
        font-bold
        text-white
        "
      >

        {unreadCount}

      </span>

    )}

  </button>

  <NotificationPanel
    open={notificationOpen}
    onClose={() => setNotificationOpen(false)}
  />

</div>

          {/* Theme */}

          <button
            className="
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

            <IconMoon size={18} />

          </button>

        </div>

      </header>

      {/* Executive Calendar Dialog */}

      <ExecutiveCalendar

        open={calendarOpen}

        onClose={() => setCalendarOpen(false)}

      />

    </>

  );

}