"use client";

import { AdventDayStatus } from "@/lib/adventTypes";
import { X, Check, Trophy } from "lucide-react";
import { useState } from "react";
import { ADVENT_ICONS } from "@/lib/adventIcons";

interface ExerciseModalProps {
    day: AdventDayStatus;
    onClose: () => void;
    onComplete: (day: number) => Promise<void>;
}

export default function ExerciseModal({ day, onClose, onComplete }: ExerciseModalProps) {
    const [isCompleting, setIsCompleting] = useState(false);
    const IconComponent = day.icon && ADVENT_ICONS[day.icon] ? ADVENT_ICONS[day.icon] : Trophy;

    const handleComplete = async () => {
        setIsCompleting(true);
        await onComplete(day.day);
        setIsCompleting(false);
        onClose();
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 animate-in fade-in duration-200" onClick={onClose}>
            <div className="relative w-full max-w-md overflow-hidden rounded-2xl bg-[#1C1C1E] shadow-2xl animate-in zoom-in-95 duration-200 border border-white/10" onClick={e => e.stopPropagation()}>

                {/* Header with gradient */}
                <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-8 text-center relative overflow-hidden">
                    {/* Background Pattern */}
                    <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
                        <IconComponent className="w-full h-full absolute -right-10 -bottom-10 rotate-12 scale-150" />
                    </div>

                    <button
                        onClick={onClose}
                        className="absolute right-4 top-4 rounded-full bg-black/20 p-2 text-white hover:bg-black/40 transition-colors z-50 hover:scale-110 active:scale-95"
                    >
                        <X size={24} />
                    </button>

                    <div className="relative z-10 flex flex-col items-center">
                        <div className="mb-4 bg-white/20 p-4 rounded-2xl backdrop-blur-sm shadow-xl">
                            <IconComponent size={48} className="text-white" strokeWidth={1.5} />
                        </div>
                        <h2 className="text-3xl font-black text-white italic uppercase tracking-tighter">
                            {day.title}
                        </h2>
                        <p className="text-blue-100 font-medium opacity-90 mt-1 uppercase tracking-widest text-sm">
                            {day.description}
                        </p>
                    </div>
                </div>

                {/* Content */}
                <div className="p-6 space-y-6">
                    {/* Removed redundant "Défi du jour" section since it's in the header now */}

                    {day.exercises && day.exercises.length > 0 && (
                        <div className="space-y-3">
                            <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-widest">Exercices</h3>
                            <div className="bg-white/5 rounded-xl p-4 space-y-2 border border-white/5">
                                {day.exercises.map((ex: string, i: number) => (
                                    <div key={i} className="flex items-center gap-3 text-white">
                                        <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue-500/20 text-xs font-bold text-blue-400">
                                            {i + 1}
                                        </span>
                                        <span>{ex}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}



                    <button
                        onClick={handleComplete}
                        disabled={isCompleting || day.status === 'completed'}
                        className={`flex w-full items-center justify-center gap-2 rounded-xl py-4 font-bold transition-all
              ${day.status === 'completed'
                                ? 'bg-green-500/20 text-green-400 cursor-not-allowed border border-green-500/20'
                                : 'bg-white text-black hover:bg-gray-100'
                            }`}
                    >
                        {isCompleting ? (
                            <span>Validation...</span>
                        ) : day.status === 'completed' ? (
                            <>
                                <Check size={20} />
                                Défi validé !
                            </>
                        ) : (
                            <>
                                <Check size={20} />
                                Marquer comme fait
                            </>
                        )}
                    </button>
                </div>
            </div>
        </div>
    );
}
