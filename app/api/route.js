import connectdb from "@/database/db"

export const GET=async()=>{
    await connectdb()
    return new Response("fuckedup")
}