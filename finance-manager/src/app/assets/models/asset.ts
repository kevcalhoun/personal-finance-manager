export interface Asset {
    // id: number,
    userId: number,
    assetName: string, 
    assetType: string,
    assetAmount: number,
    assetGoalAmount: number,
    assetGoalDeadline: string, 
    assetGoalProgress: number,
    assetCode: string
}