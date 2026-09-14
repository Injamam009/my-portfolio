"use client";

import { useEffect, useState } from "react";

export default function StatusClock() {
  const [time, setTime] = useState("");

  useEffect(() => {
    const updateClock = () => {
      setTime(
        new Date().toLocaleTimeString("en-IN", {
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
        })
      );
    };

    updateClock();

    const interval = setInterval(updateClock, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="
        absolute
        -top-62
        -right-35
        z-20
        hidden
        xl:block
      "
    >
      <div
        className="
          w-[190px]
          bg-[#161B22]/95
          backdrop-blur-xl
          border border-yellow-400/20
          rounded-2xl
          p-4
          shadow-[0_0_30px_rgba(163,230,53,0.15)]
        "
      >
        <div className="flex items-center gap-2 mb-3">
          <span className="w-2 h-2 bg-orange-400 rounded-full animate-pulse" />

          <span className="text-orange-400 font-semibold text-xs">
            OPEN FOR WORK
          </span>
        </div>

        <div className="space-y-2 text-xs">
          <div className="flex justify-between">
            <span className="text-gray-500">
              STATUS
            </span>

            <span className="text-green-400 font-medium">
              ONLINE
            </span>
          </div>

          <div className="flex justify-between">
            <span className="text-gray-500">
              LOCATION
            </span>

            <span className="text-blue-400">
              INDIA
            </span>
          </div>
        </div>

        <div className="mt-3 pt-3 border-t border-white/10">
          <p className="text-[10px] text-gray-500 mb-1">
            LOCAL TIME
          </p>

          <h3 className="text-xl font-bold text-white">
            {time}
          </h3>
        </div>

        <div className="mt-3 pt-3 border-t border-white/10">
          <p className="text-[10px] text-gray-500 mb-1">
            CURRENT MISSION
          </p>

          <p className="text-lime-400 text-xs font-medium">
            Building AI Products_
          </p>
        </div>
      </div>
    </div>
  );
}