//Định nghĩa danh sách màn hình
export type Define={
    History:undefined,
    Account_Balance:undefined,
    TravelDetail:{ticket_id:string,bus_route_num:string,time:string,from:string,to:string,cost:number},
    HomeScreen: { Id_customer: number },// 👈 thêm dòng này 
    Settings:undefined, 
    Register:undefined, 
    Login:undefined, 

}