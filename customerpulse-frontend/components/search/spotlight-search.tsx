"use client";

import { useEffect, useMemo, useState } from "react";

import { useRouter } from "next/navigation";

import {
  IconSearch,
  IconX,
} from "@tabler/icons-react";

import { searchItems } from "@/constants/search";

export default function SpotlightSearch() {

  const router = useRouter();

  const [open, setOpen] = useState(false);

  const [query, setQuery] = useState("");

  useEffect(() => {

    const down = (e: KeyboardEvent) => {

      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k") {

        e.preventDefault();

        setOpen(true);

      }

      if (e.key === "Escape") {

        setOpen(false);

      }

    };

    document.addEventListener("keydown", down);

    return () =>
      document.removeEventListener("keydown", down);

  }, []);

  useEffect(() => {

    if (!open) {

      setQuery("");

    }

  }, [open]);

  const filteredItems = useMemo(() => {

    if (!query.trim()) {

      return searchItems;

    }

    const q = query.toLowerCase();

    return searchItems.filter(

      (item) =>

        item.title.toLowerCase().includes(q) ||

        item.description.toLowerCase().includes(q) ||

        item.category.toLowerCase().includes(q)

    );

  }, [query]);

  if (!open) return null;

  return (

    <div
      className="
      fixed
      inset-0
      z-[9999]
      flex
      items-start
      justify-center
      bg-black/70
      backdrop-blur-md
      "
    >

      <div
        className="
        mt-28
        w-full
        max-w-3xl
        overflow-hidden
        rounded-3xl
        border
        border-white/10
        bg-[#090909]
        shadow-[0_40px_120px_rgba(0,0,0,.65)]
        "
      >

        {/* Search */}

        <div className="flex items-center gap-4 border-b border-white/5 p-5">

          <IconSearch
            size={22}
            className="text-zinc-500"
          />

          <input

            autoFocus

            value={query}

            onChange={(e) => setQuery(e.target.value)}

            placeholder="Search CustomerPulse AI..."

            className="
            flex-1
            bg-transparent
            text-lg
            text-white
            outline-none
            placeholder:text-zinc-500
            "

          />

          <button

            onClick={() => setOpen(false)}

            className="rounded-lg p-2 hover:bg-white/5"

          >

            <IconX
              size={18}
              className="text-zinc-500"
            />

          </button>

        </div>

        {/* Results */}

        <div className="max-h-[500px] overflow-y-auto">

          {filteredItems.length === 0 ? (

            <div className="p-8 text-center text-zinc-500">

              No matching results found.

            </div>

          ) : (

            filteredItems.map((item) => {

              const Icon = item.icon;

              return (

                <button

                  key={item.title}

                  onClick={() => {

                    router.push(item.route);

                    setOpen(false);

                  }}

                  className="
                  flex
                  w-full
                  items-center
                  justify-between
                  border-b
                  border-white/5
                  px-6
                  py-5
                  transition
                  hover:bg-white/[0.03]
                  "

                >

                  <div className="flex items-center gap-4">

                    <div
                      className="
                      flex
                      h-11
                      w-11
                      items-center
                      justify-center
                      rounded-xl
                      bg-[#D9FF3F]/10
                      "
                    >

                      <Icon
                        size={20}
                        className="text-[#D9FF3F]"
                      />

                    </div>

                    <div className="text-left">

                      <h3 className="font-semibold text-white">

                        {item.title}

                      </h3>

                      <p className="text-sm text-zinc-500">

                        {item.description}

                      </p>

                    </div>

                  </div>

                  <div
                    className="
                    rounded-full
                    border
                    border-white/10
                    bg-white/5
                    px-3
                    py-1
                    text-xs
                    text-zinc-400
                    "
                  >

                    {item.category}

                  </div>

                </button>

              );

            })

          )}

        </div>

      </div>

    </div>

  );

}