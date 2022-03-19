import { mockApis, plans, servicesData } from "./mock-data";

export const apis = {
    getServices: () => mockApis(servicesData),
    getServiceDetails: (id) => mockApis(plans),
}



