"use client";

import { useEffect, useState } from "react";

export interface CalendarNote {
  id: string;

  title: string;

  description: string;

  date: string;

  time: string;

  priority: string;

  reminder: string;
}

export type NewCalendarNote = Omit<CalendarNote, "id">;

const STORAGE_KEY = "customerpulse-calendar";

export function useCalendar() {
  const [notes, setNotes] = useState<CalendarNote[]>([]);

  // Load notes
  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);

      if (stored) {
        setNotes(JSON.parse(stored));
      }
    } catch (err) {
      console.error("Failed to load calendar notes", err);
    }
  }, []);

  // Save helper
  const saveNotes = (items: CalendarNote[]) => {
    setNotes(items);

    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify(items)
    );
  };

  // Add Note
  const addNote = (note: NewCalendarNote) => {
    const newNote: CalendarNote = {
      id: crypto.randomUUID(),
      ...note,
    };

    saveNotes([...notes, newNote]);
  };

  // Delete Note
  const deleteNote = (id: string) => {
    saveNotes(
      notes.filter((note) => note.id !== id)
    );
  };

  // Update Note (we'll need this later)
  const updateNote = (updated: CalendarNote) => {
    saveNotes(
      notes.map((note) =>
        note.id === updated.id ? updated : note
      )
    );
  };

  return {
    notes,
    addNote,
    deleteNote,
    updateNote,
  };
}