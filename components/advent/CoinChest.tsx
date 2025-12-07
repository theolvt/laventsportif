"use client";

import { Coins, Archive, Sparkles } from "lucide-react";
import { useState, useEffect } from "react";

interface CoinChestProps {
    completedCount: number;
    total: number;
}

export default function CoinChest({ completedCount, total }: CoinChestProps) {
    const [prevCount, setPrevCount] = useState(completedCount);
    const [droppingCoin, setDroppingCoin] = useState(false);
    const [showPromo, setShowPromo] = useState(false);

    const isFull = completedCount >= total;
    const fillPercentage = (completedCount / total) * 100;

    // Detect new completion to trigger animation
    useEffect(() => {
        if (completedCount > prevCount) {
            setDroppingCoin(true);
            const timer = setTimeout(() => {
                setDroppingCoin(false);
            }, 1000); // Animation duration
            setPrevCount(completedCount);
            return () => clearTimeout(timer);
        }
    }, [completedCount, prevCount]);

    return (
        <div className="relative flex flex-col items-center justify-center p-6 w-full max-w-sm mx-auto">

            {/* Promo Code Popup (Overlay) */}
            {showPromo && (
                <div className="absolute inset-0 z-50 flex items-center justify-center bg-black/90 rounded-2xl animate-in zoom-in-50 duration-300">
                    <div className="text-center p-4">
                        <Sparkles className="mx-auto text-yellow-400 mb-2 h-10 w-10 animate-spin-slow" />
                        <h3 className="text-xl font-bold text-white mb-2">FÉLICITATIONS !</h3>
                        <p className="text-gray-400 text-sm mb-4">Vous avez validé tous les défis !</p>
                        <div className="bg-white rounded-xl p-3 shadow-lg transform rotate-[-2deg]">
                            <p className="text-xs text-gray-500 font-bold uppercase tracking-wider">Votre Code</p>
                            <p className="text-2xl font-black text-blue-600 tracking-widest">NOEL2025</p>
                        </div>
                        <button
                            onClick={() => setShowPromo(false)}
                            className="mt-6 text-sm text-gray-500 hover:text-white underline"
                        >
                            Fermer
                        </button>
                    </div>
                </div>
            )}

            {/* Dropping Coin Animation */}
            {droppingCoin && (
                <div
                    className="absolute z-20 text-yellow-400"
                    style={{
                        animation: 'drop-coin 0.8s cubic-bezier(0.25, 1, 0.5, 1) forwards',
                        top: '-50px'
                    }}
                >
                    <Coins size={32} />
                </div>
            )}

            {/* Chest Container */}
            <button
                onClick={() => isFull && setShowPromo(true)}
                disabled={!isFull}
                className={`relative group z-10 transition-transform duration-300 ${isFull ? 'hover:scale-105 cursor-pointer' : 'cursor-default'}`}
            >
                {/* Glow Effect for Chest */}
                <div className={`absolute inset-0 rounded-full blur-2xl transition-all duration-1000 ${isFull ? 'bg-yellow-500/40' :
                        fillPercentage > 50 ? 'bg-yellow-500/20' :
                            'bg-blue-500/10'
                    }`} />

                <div className="relative">
                    {/* Chest Icon based on state could go here, for now using Archive as Chest proxy or custom SVG if needed. 
                       Lucide 'Archive' looks a bit like a chest. 'Package' or 'Box' are alternatives. 
                       Let's use Archive and style it.
                   */}
                    <Archive
                        size={80}
                        strokeWidth={1.5}
                        className={`transition-all duration-500 ${isFull
                                ? 'text-yellow-400 drop-shadow-[0_0_15px_rgba(250,204,21,0.6)]'
                                : fillPercentage > 0
                                    ? 'text-yellow-600'
                                    : 'text-gray-600'
                            }`}
                    />

                    {/* Coins visual inside/overflowing could be added here overlaying the icon */}
                    {fillPercentage > 0 && (
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 mt-1">
                            <span className="text-xs font-bold text-black/50 bg-white/20 px-2 py-0.5 rounded-full backdrop-blur-sm">
                                {completedCount}
                            </span>
                        </div>
                    )}
                </div>
            </button>

            {/* Progress Text */}
            <div className="mt-4 flex flex-col items-center">
                <div className="h-1.5 w-32 bg-gray-800 rounded-full overflow-hidden mb-2">
                    <div
                        className="h-full bg-gradient-to-r from-yellow-600 to-yellow-400 transition-all duration-700"
                        style={{ width: `${fillPercentage}%` }}
                    />
                </div>
                <p className="text-xs font-medium text-gray-500 uppercase tracking-widest">
                    {completedCount} / {total} Pièces
                </p>
            </div>
        </div>
    );
}
