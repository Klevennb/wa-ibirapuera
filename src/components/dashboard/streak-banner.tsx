import { cn } from "@/lib/utils";
import React from "react";

interface StreakBannerProps {
  currentStreak?: number;
  hasWritttenToday: boolean;
}
export const StreakBanner: React.FC<StreakBannerProps> = ({
  currentStreak = 0,
  hasWritttenToday = false,
}) => {
  const streakIsActive = currentStreak > 0;
  const textColor = hasWritttenToday ? "text-green-500" : "text-red-500";

  return (
    <div className={cn("flex flex-col items-center justify-center p-4 bg-gray-100 rounded-md shadow-md", textColor)}>
      {streakIsActive ? (
        hasWritttenToday ? (
          <p>Current Streak: {currentStreak} days!</p>
        ) : (
          <p>
            Current Streak: {currentStreak} days! Don't forget to add to it!
          </p>
        )
      ) : (
        <p>You don't have a streak yet! Let's write!</p>
      )}
    </div>
  );
};
