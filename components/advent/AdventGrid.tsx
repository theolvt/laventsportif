"use client";

import { useState } from "react";
import { AdventDayStatus } from "@/lib/adventTypes";
import { markAdventDayComplete } from "@/app/actions/adventActions";
import AdventDayCard from "./AdventDayCard";
import ExerciseModal from "./ExerciseModal";

interface AdventGridProps {
    initialProgress: AdventDayStatus[];
    userId: string;
}

export default function AdventGrid({ initialProgress, userId }: AdventGridProps) {
    const [progress, setProgress] = useState<AdventDayStatus[]>(initialProgress);
    const [selectedDay, setSelectedDay] = useState<AdventDayStatus | null>(null);

    const handleDayClick = (day: AdventDayStatus) => {
        setSelectedDay(day);
    };

    const handleCloseModal = () => {
        setSelectedDay(null);
    };

    const handleCompleteDay = async (dayNumber: number) => {
        try {
            await markAdventDayComplete(userId, dayNumber);

            // Update local state
            setProgress((prev) =>
                prev.map((d) =>
                    d.day === dayNumber
                        ? { ...d, status: 'completed', completedAt: new Date().toISOString() }
                        : d
                )
            );

        } catch (error) {
            console.error("Failed to mark day as complete", error);
        }
    };

    return (
        <>
            <div className="grid grid-cols-3 gap-3 md:grid-cols-4 lg:grid-cols-6 mx-auto max-w-4xl p-4">
                {progress.map((day) => (
                    <AdventDayCard
                        key={day.day}
                        day={day}
                        onClick={handleDayClick}
                    />
                ))}
            </div>

            {selectedDay && (
                <ExerciseModal
                    day={selectedDay}
                    onClose={handleCloseModal}
                    onComplete={handleCompleteDay}
                />
            )}
        </>
    );
}
