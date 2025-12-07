import 'server-only';
import { db } from './db';
import { adventProgress } from './schema';
import { ADVENT_CHALLENGES } from './adventData';
import { eq, and } from 'drizzle-orm';
import { AdventDayStatus } from './adventTypes';


export async function getAdventProgress(userId: string): Promise<AdventDayStatus[]> {
    const currentYear = new Date().getFullYear();

    // Fetch user's completed days using Drizzle
    const data = await db.select({
        dayNumber: adventProgress.dayNumber,
        completedAt: adventProgress.completedAt
    })
        .from(adventProgress)
        .where(
            and(
                eq(adventProgress.userId, userId),
                eq(adventProgress.year, currentYear)
            )
        );

    const completedMap = new Map<number, string>();
    data.forEach((item) => {
        // Ensure date is stringified if needed, Drizzle returns Date object for timestamp
        completedMap.set(item.dayNumber, item.completedAt ? new Date(item.completedAt).toISOString() : new Date().toISOString());
    });

    const now = new Date();
    const currentMonth = now.getMonth(); // 11 = December
    const currentDay = now.getDate();

    return ADVENT_CHALLENGES.map((challenge) => {
        const isCompleted = completedMap.has(challenge.day);

        let status: 'locked' | 'open' | 'completed' = 'locked';

        if (isCompleted) {
            status = 'completed';
        } else {
            // Logic:
            if (currentMonth < 10) { // Adjusted for testing purposes
                // Before December
                status = 'locked';
            } else if (currentMonth > 11) {
                // After December
                status = 'open';
            } else {
                // December (or Nov for testing)
                // Allow unlocking if day <= currentDay
                if (challenge.day <= currentDay || currentMonth === 10) {
                    status = 'open';
                } else {
                    status = 'locked';
                }
            }
        }

        return {
            ...challenge,
            status,
            completedAt: completedMap.get(challenge.day),
        };
    });
}
