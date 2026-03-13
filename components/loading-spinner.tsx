"use client";

export default function LoadingSpinner() {
  return (
    <div className="flex items-center justify-center w-full h-full min-h-[400px]">
      <div className="relative">
        <div className="w-16 h-16 rounded-full border-4 border-primary/20 border-t-primary animate-spin" />
        <div className="absolute inset-0 m-2 rounded-full border-4 border-transparent border-t-accent animate-spin-reverse" />
        <div className="absolute inset-0 m-5 rounded-full bg-gradient-to-br from-primary to-accent opacity-50 animate-pulse" />
      </div>
    </div>
  );
}
