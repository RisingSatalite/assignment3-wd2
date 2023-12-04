import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function POST(request) {
    try {
        const { name, description } = await request.json();

        const Movie = await prisma.Movie.create({
            data: {
                name,
                description
            },
        });

        return NextResponse.json({ message: "Movie created successfully", Movie });

    } catch (error) {
        console.error("Error creating movie:", error);
        return NextResponse.json({ message: "Error creating movie", error: error.message }, { status: 500 });
    }
}
