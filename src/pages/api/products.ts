import { initMongoose } from "@/lib/mongoose";
import { NextApiRequest, NextApiResponse } from "next";
import Product from "@/models/Product";

export async function findAllProducts(){
  return(Product.find().exec())
}

export default async function handle(req:NextApiRequest, res:NextApiResponse){
    await initMongoose();
    res.json(await findAllProducts())
}
