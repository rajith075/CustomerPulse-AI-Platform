"use client";

interface CalendarGridProps {
  currentDate: Date;
  selectedDay: number;
  onSelectDay: (day: number) => void;

  notes: {
    date: string;
    priority: string;
  }[];
}

const WEEK_DAYS = [
  "Sun",
  "Mon",
  "Tue",
  "Wed",
  "Thu",
  "Fri",
  "Sat",
];

export default function CalendarGrid({
  currentDate,
  selectedDay,
  onSelectDay,
  notes,
}: CalendarGridProps) {

  const year = currentDate.getFullYear();

  const month = currentDate.getMonth();

  const firstDay = new Date(year, month, 1).getDay();

  const totalDays = new Date(year, month + 1, 0).getDate();

  const previousMonthDays = new Date(year, month, 0).getDate();

  const today = new Date();

  const cells: {
    day: number;
    current: boolean;
  }[] = [];

  // Previous Month

  for (let i = firstDay - 1; i >= 0; i--) {

    cells.push({
      day: previousMonthDays - i,
      current: false,
    });

  }

  // Current Month

  for (let i = 1; i <= totalDays; i++) {

    cells.push({
      day: i,
      current: true,
    });

  }

  // Next Month

  let nextDay = 1;

  while (cells.length % 7 !== 0) {

    cells.push({
      day: nextDay++,
      current: false,
    });

  }

  return (

    <div
      className="
      rounded-3xl
      border
      border-white/5
      bg-[#101010]
      p-6
      "
    >

      {/* Week Header */}

      <div className="mb-3 grid grid-cols-7 gap-3">

        {WEEK_DAYS.map((day) => (

          <div
            key={day}
            className="
            text-center
            text-xs
            font-semibold
            uppercase
            tracking-[0.2em]
            text-zinc-500
            "
          >

            {day}

          </div>

        ))}

      </div>

      {/* Calendar */}

      <div className="grid grid-cols-7 gap-3">

        {cells.map((cell, index) => {

          const isToday =
            cell.current &&
            today.getDate() === cell.day &&
            today.getMonth() === month &&
            today.getFullYear() === year;

          const isSelected =
            cell.current &&
            selectedDay === cell.day;

          const note = notes.find((n) => {

            const d = new Date(n.date);

            return (
              d.getDate() === cell.day &&
              d.getMonth() === month &&
              d.getFullYear() === year
            );

          });

          const dotColor =
            note?.priority === "Critical"
              ? "bg-red-500"
              : note?.priority === "High"
              ? "bg-orange-500"
              : note?.priority === "Medium"
              ? "bg-yellow-400"
              : "bg-green-500";

          return (

            <button

              key={index}

              disabled={!cell.current}

              onClick={() => {

                if (cell.current) {

                  onSelectDay(cell.day);

                }

              }}

              className={`
                relative
                h-24
                rounded-2xl
                border
                transition-all
                duration-300

                ${
                  cell.current
                    ? "border-white/5 bg-[#090909] hover:border-[#D9FF3F]/40 hover:bg-[#111]"
                    : "cursor-default border-transparent bg-transparent"
                }

                ${
                  isSelected
                    ? "ring-2 ring-[#D9FF3F]"
                    : ""
                }

                ${
                  isToday
                    ? "border-[#D9FF3F]"
                    : ""
                }
              `}
            >

              {/* Day */}

              <span
                className={`
                absolute
                left-4
                top-3
                text-sm
                font-semibold

                ${
                  cell.current
                    ? "text-white"
                    : "text-zinc-700"
                }

                ${
                  isToday
                    ? "text-[#D9FF3F]"
                    : ""
                }
                `}
              >

                {cell.day}

              </span>

              {/* Today Badge */}

              {isToday && (

                <span
                  className="
                  absolute
                  right-3
                  top-3
                  rounded-full
                  bg-[#D9FF3F]
                  px-2
                  py-0.5
                  text-[10px]
                  font-bold
                  text-black
                  "
                >

                  TODAY

                </span>

              )}

              {/* Note Indicator */}

              {note && (

                <span
                  className={`
                  absolute
                  bottom-3
                  left-1/2
                  h-2.5
                  w-2.5
                  -translate-x-1/2
                  rounded-full
                  ${dotColor}
                  `}
                />

              )}

            </button>

          );

        })}

      </div>

    </div>

  );

}