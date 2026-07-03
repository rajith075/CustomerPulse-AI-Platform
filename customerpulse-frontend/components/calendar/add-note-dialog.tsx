"use client";

import { useState } from "react";

import {
  IconCalendarEvent,
  IconClock,
  IconFlag,
  IconFileText,
  IconX,
} from "@tabler/icons-react";

interface AddNoteDialogProps {
  open: boolean;
  selectedDate: string;
  onClose: () => void;
  onSave: (note: {
    title: string;
    description: string;
    date: string;
    time: string;
    priority: string;
    reminder: string;
  }) => void;
}

export default function AddNoteDialog({
  open,
  selectedDate,
  onClose,
  onSave,
}: AddNoteDialogProps) {

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [time, setTime] = useState("09:00");
  const [priority, setPriority] = useState("Medium");
  const [reminder, setReminder] = useState("15 mins");

  if (!open) return null;

  const saveNote = () => {

    if (!title.trim()) return;

    onSave({
      title,
      description,
      date: selectedDate,
      time,
      priority,
      reminder,
    });

    setTitle("");
    setDescription("");
    setTime("09:00");
    setPriority("Medium");
    setReminder("15 mins");

    onClose();

  };

  return (

    <div
      className="
      fixed
      inset-0
      z-[10000]
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
        max-w-xl
        rounded-3xl
        border
        border-white/10
        bg-[#090909]
        p-7
        shadow-[0_40px_120px_rgba(0,0,0,.7)]
        "
      >

        {/* Header */}

        <div className="flex items-center justify-between">

          <div>

            <h2 className="text-2xl font-bold text-white">

              Add Executive Note

            </h2>

            <p className="mt-1 text-zinc-500">

              {selectedDate}

            </p>

          </div>

          <button
            onClick={onClose}
            className="rounded-xl p-2 hover:bg-white/5"
          >
            <IconX />
          </button>

        </div>

        {/* Title */}

        <div className="mt-7">

          <label className="mb-2 flex items-center gap-2 text-sm text-zinc-400">

            <IconFileText size={16} />

            Title

          </label>

          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Revenue Review Meeting"
            className="
            w-full
            rounded-xl
            border
            border-white/10
            bg-[#111]
            px-4
            py-3
            text-white
            outline-none
            focus:border-[#D9FF3F]
            "
          />

        </div>

        {/* Description */}

        <div className="mt-5">

          <label className="mb-2 text-sm text-zinc-400">

            Description

          </label>

          <textarea
            rows={4}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Discuss customer churn strategy..."
            className="
            w-full
            rounded-xl
            border
            border-white/10
            bg-[#111]
            px-4
            py-3
            text-white
            outline-none
            resize-none
            focus:border-[#D9FF3F]
            "
          />

        </div>

        {/* Date & Time */}

        <div className="mt-6 grid grid-cols-2 gap-4">

          <div>

            <label className="mb-2 flex items-center gap-2 text-sm text-zinc-400">

              <IconCalendarEvent size={16} />

              Date

            </label>

            <input
              disabled
              value={selectedDate}
              className="
              w-full
              rounded-xl
              border
              border-white/10
              bg-[#111]
              px-4
              py-3
              text-zinc-400
              "
            />

          </div>

          <div>

            <label className="mb-2 flex items-center gap-2 text-sm text-zinc-400">

              <IconClock size={16} />

              Time

            </label>

            <input
              type="time"
              value={time}
              onChange={(e) => setTime(e.target.value)}
              className="
              w-full
              rounded-xl
              border
              border-white/10
              bg-[#111]
              px-4
              py-3
              text-white
              outline-none
              "
            />

          </div>

        </div>

        {/* Priority */}

        <div className="mt-6">

          <label className="mb-2 flex items-center gap-2 text-sm text-zinc-400">

            <IconFlag size={16} />

            Priority

          </label>

          <select
            value={priority}
            onChange={(e) => setPriority(e.target.value)}
            className="
            w-full
            rounded-xl
            border
            border-white/10
            bg-[#111]
            px-4
            py-3
            text-white
            outline-none
            "
          >

            <option>Low</option>
            <option>Medium</option>
            <option>High</option>
            <option>Critical</option>

          </select>

        </div>

        {/* Reminder */}

        <div className="mt-6">

          <label className="mb-2 text-sm text-zinc-400">

            Reminder

          </label>

          <select
            value={reminder}
            onChange={(e) => setReminder(e.target.value)}
            className="
            w-full
            rounded-xl
            border
            border-white/10
            bg-[#111]
            px-4
            py-3
            text-white
            outline-none
            "
          >

            <option>5 mins</option>
            <option>15 mins</option>
            <option>30 mins</option>
            <option>1 hour</option>
            <option>1 day</option>

          </select>

        </div>

        {/* Footer */}

        <div className="mt-8 flex justify-end gap-3">

          <button
            onClick={onClose}
            className="
            rounded-xl
            border
            border-white/10
            px-5
            py-3
            text-zinc-400
            hover:bg-white/5
            "
          >

            Cancel

          </button>

          <button
            onClick={saveNote}
            className="
            rounded-xl
            bg-[#D9FF3F]
            px-6
            py-3
            font-semibold
            text-black
            transition
            hover:scale-[1.03]
            "
          >

            Save Note

          </button>

        </div>

      </div>

    </div>

  );

}