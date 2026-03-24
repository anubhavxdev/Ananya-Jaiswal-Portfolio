import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export async function GET() {
    const filePath = path.join(process.cwd(), "app/assets/Resume/AnanyaJaiswalResume.pdf");
    
    try {
        const fileBuffer = fs.readFileSync(filePath);

        return new NextResponse(fileBuffer, {
            status: 200,
            headers: {
                "Content-Type": "application/pdf",
                "Content-Disposition": "attachment; filename=Ananya_Jaiswal_Resume.pdf",
            },
        });
    } catch (e) {
        return new NextResponse("Resume file not found", { status: 404 });
    }
}
