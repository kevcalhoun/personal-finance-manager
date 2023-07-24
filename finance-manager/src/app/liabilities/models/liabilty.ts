export interface Liability {
    id: number;
    name: string;
    type: string;
    liabilityRemainingAmount: number;
    interestRate: number;
    minMonthlyPaymentAmount: number;
    estPayoffDate: string;
    liabilityCode: string;
}