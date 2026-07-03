export interface CalendarNote {

  id: string;

  date: string;

  title: string;

  description: string;

  priority:

    | "Low"

    | "Medium"

    | "High"

    | "Critical";

}