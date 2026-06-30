"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import {
  IconSparkles,
  IconChevronRight,
} from "@tabler/icons-react";

import { navigation } from "@/constants/navigation";

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside
      className="
      fixed
      left-3
      top-3
      bottom-3
      w-[248px]
      overflow-hidden
      rounded-[24px]
      border
      border-white/[0.04]
      bg-[#050505]/95
      backdrop-blur-3xl
      shadow-[0_30px_120px_rgba(0,0,0,.75)]
      "
    >
      {/* Ambient Glow */}

      <div className="absolute -top-20 left-1/2 h-56 w-56 -translate-x-1/2 rounded-full bg-[#D9FF3F]/4 blur-[120px]" />

      {/* ================= LOGO ================= */}

      <div className="relative border-b border-white/[0.04] px-5 py-5">
        <div className="flex items-center gap-3">
          <div
            className="
            flex
            h-11
            w-11
            items-center
            justify-center
            rounded-xl
            bg-[#D9FF3F]/10
            shadow-[0_0_25px_rgba(217,255,63,.12)]
            "
          >
            <IconSparkles
              size={22}
              className="text-[#D9FF3F]"
            />
          </div>

          <div>
            <h1 className="text-lg font-bold tracking-tight text-white">
              CustomerPulse
            </h1>

            <p className="mt-0.5 text-[10px] uppercase tracking-[0.18em] text-zinc-500">
              AI Intelligence
            </p>
          </div>
        </div>
      </div>

      {/* ================= NAVIGATION ================= */}

      <div className="relative px-3 pt-4">
        <p className="mb-3 px-3 text-xs uppercase tracking-[0.25em] text-zinc-600">
          Navigation
        </p>

        <nav className="space-y-0.5">
          {navigation.map((item) => {
            const Icon = item.icon;
            const active = pathname === item.href;

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`
                group
                relative
                flex
                items-center
                gap-3
                rounded-xl
                px-3
                py-2.5
                transition-all
                duration-300

                ${
                  active
                    ? `
                      bg-gradient-to-r
                      from-[#D9FF3F]/15
                      to-transparent
                      text-[#D9FF3F]
                      shadow-[0_0_20px_rgba(217,255,63,.08)]
                    `
                    : "text-zinc-400 hover:bg-white/5 hover:text-white"
                }
                `}
              >
                {active && (
                  <div className="absolute left-0 top-2 bottom-2 w-[3px] rounded-r-full bg-[#D9FF3F]" />
                )}

                <Icon
                  size={18}
                  className="transition-transform duration-300 group-hover:scale-110"
                />

                <span className="text-[15px] font-medium">
                  {item.title}
                </span>
              </Link>
            );
          })}
        </nav>
      </div>

      {/* Bottom Fade */}

      <div className="pointer-events-none absolute bottom-20 left-0 right-0 h-20 bg-gradient-to-t from-[#090D18] to-transparent" />

      {/* ================= USER ================= */}

      <div className="absolute bottom-4 left-4 right-4">
        <div
          className="
          rounded-xl
          border
          border-white/[0.04]
          bg-white/[0.04]
          p-3
          backdrop-blur-xl
          "
        >
          <div className="flex items-center gap-3">
            <div className="relative">
              <div className="h-10 w-10 rounded-full bg-gradient-to-br from-[#D9FF3F] to-[#9BEA00]" />

              <div className="absolute bottom-0 right-0 h-3 w-3 rounded-full border-2 border-[#090D18] bg-emerald-500" />
            </div>

            <div className="flex-1">
              <div className="text-sm font-semibold text-white">
                Rajith Shetty
              </div>

              <div className="text-xs text-zinc-500">
                AI Engineer
              </div>
            </div>

            <IconChevronRight
              size={16}
              className="text-zinc-500"
            />
          </div>
        </div>
      </div>
    </aside>
  );
}