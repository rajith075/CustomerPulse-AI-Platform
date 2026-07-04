import { create } from "zustand";

interface UploadStore {
  projectId: string;
  setProjectId: (id: string) => void;
}

export const useUploadStore = create<UploadStore>((set) => ({
  projectId: "",

  setProjectId: (id) =>
    set({
      projectId: id,
    }),
}));