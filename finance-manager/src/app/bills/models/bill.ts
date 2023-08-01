export interface Bill {
    // id: number,
    userId: number,
    billDescription: string, 
    billAmount: number,
    billFrequency: string,
    billPaymentDueDate: string,
    billCompany: string, 
    billPaymentPortalUrl: string,
    billAutoPay: boolean,
    assetCode: string
}