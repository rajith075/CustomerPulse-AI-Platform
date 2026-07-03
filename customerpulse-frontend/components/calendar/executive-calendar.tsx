"use client";

import { useState } from "react";
import AddNoteDialog from "./add-note-dialog";

import { useCalendar } from "../../hooks/useCalendar";

import {
  IconCalendarMonth,
  IconChevronLeft,
  IconChevronRight,
  IconX,
} from "@tabler/icons-react";

import CalendarGrid from "@/components/calendar/calendar-grid";

interface Props {
  open: boolean;
  onClose: () => void;
}

export default function ExecutiveCalendar({
  open,
  onClose,
}: Props) {

  const [currentDate, setCurrentDate] = useState(new Date());

  const [selectedDay, setSelectedDay] = useState(
    new Date().getDate()
  );
  const [dialogOpen, setDialogOpen] = useState(false);

const {

  notes,

  addNote,

  deleteNote,

} = useCalendar();
const selectedDate = `${currentDate.getFullYear()}-${String(
  currentDate.getMonth() + 1
).padStart(2, "0")}-${String(selectedDay).padStart(2, "0")}`;
const dayNotes = notes.filter(
  (note) => note.date === selectedDate
);

  if (!open) return null;

  return (

    <div
      className="
      fixed
      inset-0
      z-[9999]
      flex
      items-center
      justify-center
      bg-black/70
      backdrop-blur-md
      "
    >

      <div
        className="
        w-full
        max-w-7xl
        overflow-hidden
        rounded-[30px]
        border
        border-white/10
        bg-[#090909]
        shadow-[0_40px_120px_rgba(0,0,0,.7)]
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
          px-8
          py-6
          "
        >

          <div className="flex items-center gap-4">

            <div
              className="
              flex
              h-14
              w-14
              items-center
              justify-center
              rounded-2xl
              bg-[#D9FF3F]/10
              "
            >

              <IconCalendarMonth
                size={28}
                className="text-[#D9FF3F]"
              />

            </div>

            <div>

              <h2 className="text-3xl font-bold text-white">

                Executive Calendar

              </h2>

              <p className="text-zinc-500">

                Meetings, Notes & AI Planner

              </p>

            </div>

          </div>

          <button
            onClick={onClose}
            className="
            rounded-xl
            border
            border-white/10
            p-3
            transition
            hover:bg-white/5
            "
          >

            <IconX size={20} />

          </button>

        </div>

        {/* Month Navigation */}

        <div
          className="
          flex
          items-center
          justify-between
          px-8
          py-6
          "
        >

          <button

            onClick={() =>
              setCurrentDate(
                new Date(
                  currentDate.getFullYear(),
                  currentDate.getMonth() - 1,
                  1
                )
              )
            }

            className="
            rounded-xl
            bg-white/5
            p-3
            transition
            hover:bg-white/10
            "

          >

            <IconChevronLeft />

          </button>

          <h3 className="text-2xl font-semibold text-white">

            {currentDate.toLocaleString("default", {
              month: "long",
              year: "numeric",
            })}

          </h3>

          <button

            onClick={() =>
              setCurrentDate(
                new Date(
                  currentDate.getFullYear(),
                  currentDate.getMonth() + 1,
                  1
                )
              )
            }

            className="
            rounded-xl
            bg-white/5
            p-3
            transition
            hover:bg-white/10
            "

          >

            <IconChevronRight />

          </button>

        </div>

        {/* Calendar */}

        <div className="grid grid-cols-12 gap-8 px-8 pb-8">

          {/* Left */}

          <div className="col-span-8">

            <CalendarGrid
  currentDate={currentDate}
  selectedDay={selectedDay}
  onSelectDay={setSelectedDay}
  notes={notes}
/>

          </div>

          {/* Right Sidebar */}

          <div
            className="
            col-span-4
            rounded-3xl
            border
            border-white/5
            bg-[#101010]
            p-6
            "
          >

            <p className="text-xs uppercase tracking-[0.3em] text-zinc-500">

              Selected Date

            </p>

            <h2 className="mt-3 text-5xl font-bold text-white">

              {selectedDay}

            </h2>

            <p className="mt-2 text-zinc-500">

              {currentDate.toLocaleString("default", {
                month: "long",
                year: "numeric",
              })}

            </p>

            <button
              onClick={() => setDialogOpen(true)}
              className="
              mt-8
              w-full
              rounded-2xl
              bg-[#D9FF3F]
              py-3
              font-semibold
              text-black
              transition
              hover:scale-[1.02]
              "
            >

              + Add Executive Note

            </button>

            <div
              className="
              mt-6
              rounded-2xl
              border
              border-white/5
              bg-white/[0.02]
              p-5
              "
            >

              <h3 className="font-semibold text-white">

                Notes

              </h3>

              <p className="mt-3 text-sm text-zinc-500">

                {dayNotes.length === 0 ? ("No notes for this day.") : ("Render dayNotes here as discussed")}

              </p>

            </div>

            <div
              className="
              mt-6
              rounded-2xl
              border
              border-white/5
              bg-white/[0.02]
              p-5
              "
            >

              <h3 className="font-semibold text-white">

                Upcoming

              </h3>

              <p className="mt-3 text-sm text-zinc-500">

                Upcoming reminders will appear here.

              </p>

            </div>

          </div>

        </div>

      </div>


      <AddNoteDialog
        open={dialogOpen}
        selectedDate={selectedDate}
        onClose={() => setDialogOpen(false)}
        onSave={(note) => addNote(note)}
      />

    </div>

  );

}