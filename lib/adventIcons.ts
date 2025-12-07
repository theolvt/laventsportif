import { Timer, Dumbbell, Activity, Flame, LayoutGrid, Footprints, Zap, Mountain, Trees, Trophy, PawPrint } from "lucide-react";

export const ADVENT_ICONS: Record<string, React.ElementType> = {
    timer: Timer,
    dumbbell: Dumbbell,
    activity: Activity,
    flame: Flame,
    "layout-grid": LayoutGrid,
    footprints: Footprints,
    armchair: Timer, // Fallback
    zap: Zap,
    biceps: Dumbbell, // Fallback
    mountain: Mountain,
    trees: Trees,
    trophy: Trophy,
    "paw-print": PawPrint,
};
