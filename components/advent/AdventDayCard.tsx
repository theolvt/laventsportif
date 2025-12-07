"use client";

import { AdventDayStatus } from "@/lib/adventTypes";
import { Lock, Check, Trophy } from "lucide-react";
import { ADVENT_ICONS } from "@/lib/adventIcons";

interface AdventDayCardProps {
    day: AdventDayStatus;
    onClick: (day: AdventDayStatus) => void;
}

export default function AdventDayCard({ day, onClick }: AdventDayCardProps) {
    const isLocked = day.status === 'locked';
    const isCompleted = day.status === 'completed';

    const IconComponent = day.icon && ADVENT_ICONS[day.icon] ? ADVENT_ICONS[day.icon] : Trophy;

    return (
        <button
            onClick={() => !isLocked && onClick(day)}
            disabled={isLocked}
            className={`group relative flex aspect-square flex-col items-center justify-center overflow-hidden rounded-2xl border transition-all duration-300
        ${isLocked
                    ? 'bg-[#1C1C1E] border-white/5 cursor-not-allowed opacity-60'
                    : isCompleted
                        ? 'bg-green-500/10 border-green-500/30 hover:bg-green-500/20 cursor-pointer'
                        : 'bg-[#2C2C2E] border-white/10 hover:border-blue-500/50 hover:bg-[#3A3A3C] hover:scale-105 cursor-pointer hover:shadow-lg hover:shadow-blue-500/10'
                }
      `}
        >
            {/* Background Number */}
            <span className={`absolute -right-2 -bottom-4 text-8xl font-black transition-opacity
        ${isLocked ? 'text-white/5' : isCompleted ? 'text-green-500/10' : 'text-white/5 group-hover:text-white/10'}
      `}>
                {day.day}
            </span>

            {/* Content */}
            <div className="z-10 flex flex-col items-center gap-2">
                {isLocked ? (
                    <Lock className="text-gray-500" size={24} />
                ) : isCompleted ? (
                    <div className="rounded-full bg-green-500 p-2 shadow-lg shadow-green-500/20">
                        <Check className="text-black" size={20} strokeWidth={3} />
                    </div>
                ) : (
                    <div className="text-blue-400 transition-transform group-hover:scale-110 group-hover:rotate-12 duration-300">
                        <IconComponent size={32} />
                    </div>
                )}

                <span className={`text-lg font-bold ${isLocked ? 'text-gray-500' : isCompleted ? 'text-green-400' : 'text-white'}`}>
                    {day.day}
                </span>
            </div>

            {/* Completion Indicator (Corner) */}
            {isCompleted && (
                <div className="absolute top-0 right-0 h-10 w-10 bg-gradient-to-bl from-green-500/20 to-transparent" />
            )}
        </button>
    );
}
