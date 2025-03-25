// import { Product } from "../../pages/ProductsFindOne/productsData";
import { http } from "../http";




// Email form API
export const contactForm = (data: any) => {
  return http.post("/leads", data);
};

export {};





