"use client";

import { useNotifications } from "../../hooks/useNotifications";

import {
  IconBell,
  IconClock,
  IconX,
} from "@tabler/icons-react";

interface Props {
  open: boolean;
  onClose: () => void;
}

export default function NotificationPanel({
  open,
  onClose,
}: Props) {

  const { notifications } = useNotifications();

  if (!open) return null;

  return (

    <div
      className="
      absolute
      right-0
      top-16
      z-[9999]
      w-[430px]
      overflow-hidden
      rounded-3xl
      border
      border-white/10
      bg-[#090909]
      shadow-[0_25px_80px_rgba(0,0,0,.7)]
      "
    >

      {/* Header */}

      <div
        className="
        flex
        items-center
        justify-between
        border-b
        border-white/5
        px-6
        py-5
        "
      >

        <div className="flex items-center gap-3">

          <IconBell
            className="text-[#D9FF3F]"
          />

          <h2 className="font-semibold text-white">

            Notifications

          </h2>

        </div>

        <button
          onClick={onClose}
          className="rounded-lg p-2 hover:bg-white/5"
        >

          <IconX size={18} />

        </button>

      </div>

      {/* Body */}

      <div className="max-h-[520px] overflow-y-auto">

        {notifications.length === 0 ? (

          <div className="p-8 text-center">

            <p className="text-zinc-500">

              No notifications.

            </p>

          </div>

        ) : (

          notifications.map((item) => (

            <div

              key={item.id}

              className="
              border-b
              border-white/5
              p-5
              transition
              hover:bg-white/[0.03]
              "

            >

              <div className="flex items-start gap-3">

                <div
                  className={`
                  mt-1
                  h-3
                  w-3
                  rounded-full

                  ${
                    item.priority === "Critical"

                      ? "bg-red-500"

                      : item.priority === "High"

                      ? "bg-orange-500"

                      : item.priority === "Medium"

                      ? "bg-yellow-400"

                      : "bg-green-500"
                  }
                  `}
                />

                <div className="flex-1">

                  <h3 className="font-semibold text-white">

                    {item.title}

                  </h3>

                  <p className="mt-1 text-sm text-zinc-500">

                    {item.description}

                  </p>

                  <div className="mt-3 flex items-center gap-2 text-xs text-zinc-400">

                    <IconClock size={14} />

                    {item.date} • {item.time}

                  </div>

                </div>

              </div>

            </div>

          ))

        )}

      </div>

    </div>

  );

}