export interface Liability {
    id: number;
    name: string;
    type: string;
    remainingAmount: number;
    interestRate: number;
    minMonthlyPaymentAmount: number;
    estPayoffDate: string;
    liabilityCode: string;
}