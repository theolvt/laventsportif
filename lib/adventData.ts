export interface AdventChallenge {
    day: number;
    title: string;
    description: string;
    icon?: string;
    exercises?: string[]; // List of specific exercises if needed
}

export const ADVENT_CHALLENGES: AdventChallenge[] = [
    {
        day: 1,
        title: "Jour 1",
        description: "Gainage",
        icon: "timer",
        exercises: ["Gainage: 2x 30 sec"]
    },
    {
        day: 2,
        title: "Jour 2",
        description: "Pompes",
        icon: "dumbbell",
        exercises: ["20 Pompes"]
    },
    {
        day: 3,
        title: "Jour 3",
        description: "Squat",
        icon: "activity",
        exercises: ["30 Squats"]
    },
    {
        day: 4,
        title: "Jour 4",
        description: "Burpees",
        icon: "flame",
        exercises: ["10 Burpees"]
    },
    {
        day: 5,
        title: "Jour 5",
        description: "Abdos",
        icon: "layout-grid",
        exercises: ["30 Abdos"]
    },
    {
        day: 6,
        title: "Jour 6",
        description: "Gainage intense",
        icon: "timer",
        exercises: ["Gainage: 2x 45 sec"]
    },
    {
        day: 7,
        title: "Jour 7",
        description: "Fentes",
        icon: "footprints",
        exercises: ["20 Fentes (x2)"]
    },
    {
        day: 8,
        title: "Jour 8",
        description: "Pompes & Planche",
        icon: "dumbbell",
        exercises: ["20 Pompes", "20 Descentes planche"]
    },
    {
        day: 9,
        title: "Jour 9",
        description: "Chaise",
        icon: "armchair", // Lucide has 'armchair' but maybe inappropriate? Used 'timer' for static holds often. Let's try 'armchair' purely for fun, or 'timer'. Let's use 'timer'.
        exercises: ["Chaise: 2x 30 sec"]
    },
    {
        day: 10,
        title: "Jour 10",
        description: "Burpees",
        icon: "flame",
        exercises: ["20 Burpees"]
    },
    {
        day: 11,
        title: "Jour 11",
        description: "Gainage long",
        icon: "timer",
        exercises: ["Gainage: 3x 1 min"]
    },
    {
        day: 12,
        title: "Jour 12",
        description: "Explosivité",
        icon: "zap",
        exercises: ["20 Jump Squat", "20 Climber"]
    },
    {
        day: 13,
        title: "Jour 13",
        description: "Haut du corps",
        icon: "biceps", // Check if specific icon exists later, fallback to dumbbell
        exercises: ["20 Pompes", "20 Dips"]
    },
    {
        day: 14,
        title: "Jour 14",
        description: "Abdos",
        icon: "layout-grid",
        exercises: ["30 Sit Up"]
    },
    {
        day: 15,
        title: "Jour 15",
        description: "Climber",
        icon: "mountain",
        exercises: ["Climber: 2x 30 sec"]
    },
    {
        day: 16,
        title: "Jour 16",
        description: "Pose de l'arbre",
        icon: "trees",
        exercises: ["Pose de l'arbre: 2x 30 sec"]
    },
    {
        day: 17,
        title: "Jour 17",
        description: "Squat Challenge",
        icon: "activity",
        exercises: ["50 Squats"]
    },
    {
        day: 18,
        title: "Jour 18",
        description: "Jambes & Bassin",
        icon: "footprints",
        exercises: ["20 Fentes alt", "20 Relevé de bassin"]
    },
    {
        day: 19,
        title: "Jour 19",
        description: "Planche & Pompe",
        icon: "dumbbell",
        exercises: ["15 Descentes planche + pompe"]
    },
    {
        day: 20,
        title: "Jour 20",
        description: "Squat 1 jambe",
        icon: "activity",
        exercises: ["20 Squat 1 jambe sur chaise"]
    },
    {
        day: 21,
        title: "Jour 21",
        description: "Burpees",
        icon: "flame",
        exercises: ["20 Burpees"]
    },
    {
        day: 22,
        title: "Jour 22",
        description: "Marche de l'ours",
        icon: "paw-print",
        exercises: ["Marche de l'ours x20"]
    },
    {
        day: 23,
        title: "Jour 23",
        description: "Gainage & Chaise",
        icon: "timer",
        exercises: ["Gainage 1 min", "Chaise 1 min"]
    },
    {
        day: 24,
        title: "Jour 24",
        description: "Le Grand Final",
        icon: "trophy",
        exercises: ["20 Burpees", "20 Jumping Jack", "20 Abdos"]
    }
];
