import connectdb from "@/database/db"
import Product from "@/model/product_model"

export const POST = async(req)=>{
    await connectdb()
    const data = await req.json()
    const {name, image,quantity, price}=data
    await Product.create({name, image,quantity, price})
    return new Response("added")
}