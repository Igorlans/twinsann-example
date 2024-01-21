import prisma from "@/prisma/client";
import CyrillicToTranslit from "cyrillic-to-translit-js";
const cyrillicToTranslit = new CyrillicToTranslit({preset: 'uk'});

export default async function handler(req, res) {
    if (req.method === 'GET') {
        const {query} = req.query;
        try {
            const results = await prisma.product.findMany({
                where: {
                    OR: [
                        { name: { contains: query, mode: "insensitive" } },
                        { description: { contains: query, mode: "insensitive" } },
                        { category: { name: { contains: query, mode: "insensitive" } } },
                        { subcategory: { name: { contains: query, mode: "insensitive" } } },

                        { name_ru: { contains: query, mode: "insensitive" } },
                        { description_ru: { contains: query, mode: "insensitive" } },
                        { category: { name_ru: { contains: query, mode: "insensitive" } } },
                        { subcategory: { name_ru: { contains: query, mode: "insensitive" } } },
                    ],
                },
                take: 5,
                orderBy: {
                    discountValue: 'desc'
                },
                include: {
                    ProductImages: {
                        orderBy: {
                            order: 'asc'
                        },
                        include: {
                            image: true
                        }
                    },
                    Sales: true
                }
            });

            res.status(200).json({data: results});
        } catch (error) {
            console.error("Error during search:", error);
            res.status(500).json({error: "Internal Server Error"});
        }
    }
}
