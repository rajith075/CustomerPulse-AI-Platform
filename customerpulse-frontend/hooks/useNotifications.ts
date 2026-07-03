"use client";

import { useMemo } from "react";
import { useCalendar } from "./useCalendar";

export function useNotifications() {

  const { notes } = useCalendar();

  const notifications = useMemo(() => {

    const now = new Date();

    return [...notes]

      .sort((a, b) =>
        `${a.date} ${a.time}`.localeCompare(
          `${b.date} ${b.time}`
        )
      )

      .map((note) => {

        const reminderDate = new Date(
          `${note.date}T${note.time}`
        );

        return {

          id: note.id,

          title: note.title,

          description: note.description,

          priority: note.priority,

          date: note.date,

          time: note.time,

          reminder: note.reminder,

          overdue: reminderDate < now,

        };

      });

  }, [notes]);

  return {

    notifications,

    unreadCount: notifications.length,

  };

}