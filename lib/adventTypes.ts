import { AdventChallenge } from './adventData';

export interface AdventProgressData {
    day_number: number;
    completed_at: string;
}

export interface AdventDayStatus extends AdventChallenge {
    status: 'locked' | 'open' | 'completed';
    completedAt?: string;
}
