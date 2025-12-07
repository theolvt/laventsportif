"use server";

import { revalidatePath } from "next/cache";
import { db } from "@/lib/db";
import { adventProgress } from "@/lib/schema";
import { and, eq } from "drizzle-orm";
import { stackServerApp } from "@/lib/stack";

export async function completeAdventDay(dayNumber: number) {
    const user = await stackServerApp.getUser();
    const userId = user?.id;

    if (!userId) {
        throw new Error("Unauthorized");
    }

    const currentYear = new Date().getFullYear();

    console.log(`[ServerAction] Marking day ${dayNumber} for user ${userId}`);

    try {
        // Check if already completed to avoid duplicate key errors if not handled by ON CONFLICT
        const existing = await db.select()
            .from(adventProgress)
            .where(
                and(
                    eq(adventProgress.userId, userId),
                    eq(adventProgress.dayNumber, dayNumber),
                    eq(adventProgress.year, currentYear)
                )
            );

        if (existing.length > 0) {
            return { success: true, message: "Already completed" };
        }

        await db.insert(adventProgress).values({
            userId: userId,
            dayNumber: dayNumber,
            year: currentYear
        });

        // Revalidate pages to update UI
        revalidatePath('/');
        revalidatePath('/dashboard');
        revalidatePath('/profile');

        return { success: true };

    } catch (error: any) {
        console.error('[ServerAction] Database error:', error);
        throw new Error(`Database error: ${error.message}`);
    }
}
