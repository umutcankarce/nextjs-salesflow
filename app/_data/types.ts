type SaleStatus = "In Progress" | "Closed" | "Negotiation" | "Pending";
type SalePriority = "High" | "Medium" | "Low";

export type SaleType = {
    customerName:string;
    dealValue:string;
    status:SaleStatus;
    contactDate:string;
    salesPerson:string;
    priority:SalePriority;
}