'use server';

import { db } from '@/lib/db';
import { adventProgress } from '@/lib/schema';
import { eq, and } from 'drizzle-orm';
import { revalidatePath } from 'next/cache';

export async function markAdventDayComplete(userId: string, day: number): Promise<void> {
    const currentYear = new Date().getFullYear();
    const today = new Date().toISOString();

    // Check if already completed? (Optional, DB might handle duplicates or we just update)
    // For simplicity, we assume we insert. If unique constraint exists, we might need onConflictDoNothing/Update

    // Check if entry exists first to avoid errors if logic requires unique
    const existing = await db.select()
        .from(adventProgress)
        .where(
            and(
                eq(adventProgress.userId, userId),
                eq(adventProgress.dayNumber, day),
                eq(adventProgress.year, currentYear)
            )
        )
        .limit(1);

    if (existing.length === 0) {
        await db.insert(adventProgress).values({
            userId: userId,
            dayNumber: day,
            year: currentYear,
            completedAt: new Date(), // Drizzle usually handles Date objects for timestamp columns
        });
    }

    revalidatePath('/'); // Revalidate the home page to update progress
}
