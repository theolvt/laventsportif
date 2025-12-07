import { getAdventProgress } from '@/lib/adventApi';
import AdventGrid from '@/components/advent/AdventGrid';
import { redirect } from 'next/navigation';
import CoinChest from '@/components/advent/CoinChest';
import { stackServerApp } from "@/lib/stack";

export default async function AdventPage() {
    const user = await stackServerApp.getUser();

    if (!user) {
        redirect(await stackServerApp.urls.signIn);
    }

    const progress = await getAdventProgress(user.id);
    const completedCount = progress.filter(d => d.status === 'completed').length;
    // const progressPercentage = (completedCount / 24) * 100; // No longer needed directly

    return (
        <div className="min-h-screen bg-[#000000] pb-20">
            {/* Header */}
            <div className="sticky top-0 z-40 border-b border-white/5 bg-[#000000]/80 backdrop-blur-xl">
                <div className="flex h-16 items-center px-4">
                    <h1 className="text-xl font-bold text-white">
                        L'AventSportif
                    </h1>
                </div>
            </div>

            {/* Content */}
            <div className="p-4">
                <div className="mb-6 rounded-2xl bg-gradient-to-br from-blue-900/20 to-purple-900/20 p-6 border border-white/5">
                    <h2 className="text-2xl font-bold text-white mb-2">Défi de Noël 🎅🎄</h2>
                    <p className="text-gray-300">
                        Chaque jour, découvrez un nouveau défi pour rester en forme jusqu'aux fêtes !
                        Collectez des pièces pour ouvrir le coffre.
                    </p>
                </div>

                <div className="mb-8">
                    <CoinChest completedCount={completedCount} total={24} />
                </div>

                <AdventGrid initialProgress={progress} userId={user.id} />
            </div>
        </div>
    );
}
