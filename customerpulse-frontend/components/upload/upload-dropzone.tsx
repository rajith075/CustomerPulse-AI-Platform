"use client";

import { useRef, useState } from "react";
import { useRouter } from "next/navigation";

import {
  IconUpload,
  IconFile,
  IconCloudUpload,
} from "@tabler/icons-react";

import { uploadDataset } from "../../services/upload-service";

export default function UploadDropzone() {
  const inputRef = useRef<HTMLInputElement>(null);

  const router = useRouter();

  const [dragging, setDragging] = useState(false);
  const [loading, setLoading] = useState(false);

  const [file, setFile] = useState<File | null>(null);

  function handleFile(selected: File | null) {
    if (!selected) return;

    setFile(selected);
  }

  function onDrop(e: React.DragEvent<HTMLDivElement>) {
    e.preventDefault();

    setDragging(false);

    if (e.dataTransfer.files.length > 0) {
      handleFile(e.dataTransfer.files[0]);
    }
  }

  async function handleUpload() {
    if (!file) return;

    try {
      setLoading(true);

      const result = await uploadDataset(file);

      router.push(
        `/dashboard?project=${result.project_id}`
      );
    } catch (error) {
      console.error(error);

      alert("Dataset upload failed.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <div
        onDragOver={(e) => {
          e.preventDefault();
          setDragging(true);
        }}
        onDragLeave={() => setDragging(false)}
        onDrop={onDrop}
        onClick={() => inputRef.current?.click()}
        className={`
          relative
          cursor-pointer
          overflow-hidden
          rounded-[28px]
          border-2
          border-dashed
          p-16
          transition-all
          duration-300

          ${
            dragging
              ? "border-[#D9FF3F] bg-[#D9FF3F]/10"
              : "border-white/10 bg-white/[0.02] hover:border-[#D9FF3F]/30"
          }
        `}
      >
        <input
          ref={inputRef}
          hidden
          type="file"
          accept=".csv,.xlsx,.xls"
          onChange={(e) =>
            handleFile(e.target.files?.[0] ?? null)
          }
        />

        <div className="flex flex-col items-center">
          <div className="mb-8 flex h-24 w-24 items-center justify-center rounded-full bg-[#D9FF3F]/10">
            <IconCloudUpload
              size={44}
              className="text-[#D9FF3F]"
            />
          </div>

          <h2 className="text-3xl font-bold text-white">
            Drag & Drop Dataset
          </h2>

          <p className="mt-4 max-w-xl text-center leading-8 text-zinc-400">
            Upload your customer dataset to automatically
            validate, predict churn, generate executive
            intelligence and build your dashboard.
          </p>

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();

              inputRef.current?.click();
            }}
            className="
              mt-10
              rounded-xl
              bg-[#D9FF3F]
              px-8
              py-4
              font-semibold
              text-black
              transition
              hover:scale-105
            "
          >
            Browse Files
          </button>

          <div className="mt-8 flex gap-6 text-sm text-zinc-500">
            <span>CSV</span>
            <span>XLSX</span>
            <span>XLS</span>
          </div>
        </div>
      </div>

      {file && (
        <div
          className="
            mt-8
            rounded-2xl
            border
            border-[#D9FF3F]/20
            bg-[#D9FF3F]/5
            p-6
          "
        >
          <div className="flex items-center gap-4">
            <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-[#D9FF3F]/10">
              <IconFile
                size={28}
                className="text-[#D9FF3F]"
              />
            </div>

            <div className="flex-1">
              <h3 className="text-lg font-semibold text-white">
                {file.name}
              </h3>

              <p className="mt-1 text-sm text-zinc-400">
                {(file.size / (1024 * 1024)).toFixed(2)} MB
              </p>
            </div>

            <button
              type="button"
              disabled={loading}
              onClick={handleUpload}
              className="
                flex
                items-center
                gap-2
                rounded-xl
                bg-[#D9FF3F]
                px-6
                py-3
                font-semibold
                text-black
                transition
                hover:scale-105
                disabled:cursor-not-allowed
                disabled:opacity-60
              "
            >
              <IconUpload size={18} />

              {loading
                ? "Generating Dashboard..."
                : "Generate Dashboard"}
            </button>
          </div>
        </div>
      )}
    </>
  );
}