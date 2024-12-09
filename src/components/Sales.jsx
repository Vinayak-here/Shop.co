import React from "react";
import { useTimer } from "../hooks/useTimer";

export const Sales = () => {
  const targetDate = "2024-12-10T00:00:00"; // Replace with your target date
  const { days, hours, minutes, seconds } = useTimer(targetDate);

  return (
    <div className="flex flex-col ml-28 gap-4">
      {/* Header */}
      <div className="inline-flex gap-1.5">
        <div className="h-10 w-5 rounded-sm bg-red-600"></div>
        <div className="font-medium text-sm p-2 text-red-600">Today's Sale</div>
      </div>

      {/* Flash Sale Timer */}
      <div className="inline-flex gap-20">
        <p className="text-3xl font-medium">Flash Sale's</p>
        <div className="flex flex-row gap-5">
          {/* Days */}
          <div className="flex flex-col">
            <div className="text-xs">Days</div>
            <div className="text-2xl font-semibold">
              {String(days).padStart(2, "0")}
            </div>
          </div>
          <div className="text-2xl font-semibold mt-3.5 text-red-400">:</div>

          {/* Hours */}
          <div className="flex flex-col">
            <div className="text-xs">Hours</div>
            <div className="text-2xl font-semibold">
              {String(hours).padStart(2, "0")}
            </div>
          </div>
          <div className="text-2xl font-semibold mt-3.5 text-red-400">:</div>

          {/* Minutes */}
          <div className="flex flex-col">
            <div className="text-xs">Minutes</div>
            <div className="text-2xl font-semibold">
              {String(minutes).padStart(2, "0")}
            </div>
          </div>
          <div className="text-2xl font-semibold mt-3.5 text-red-400">:</div>

          {/* Seconds */}
          <div className="flex flex-col">
            <div className="text-xs">Seconds</div>
            <div className="text-2xl font-semibold">
              {String(seconds).padStart(2, "0")}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
