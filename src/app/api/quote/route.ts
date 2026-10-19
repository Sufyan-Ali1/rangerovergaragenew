import { getRegistrationError } from "@/lib/registration";
import { NextRequest, NextResponse } from "next/server";
import {
    buildPortalQuotePayload,
    getPortalConfig,
    parseJsonResponse,
    submitPortalQuote,
} from "@/lib/portal";

export async function POST(request: NextRequest) {
    try {
        const body = await request.json();
        const registrationError = getRegistrationError(String(body.vrm || body.regNumber || ""));
        if (registrationError) {
            return NextResponse.json(
                { error: registrationError, details: { vrm: [registrationError] } },
                { status: 422 }
            );
        }
        const { websiteSlug, isConfigured } = getPortalConfig();

        if (!isConfigured) {
            return NextResponse.json(
                { error: "Server configuration error: Portal credentials missing" },
                { status: 500 }
            );
        }

        const payload = buildPortalQuotePayload(body, websiteSlug);
        const response = await submitPortalQuote(payload);
        const data = await parseJsonResponse(response);

        if (!response.ok) {
            return NextResponse.json(
                { error: data?.message || "Failed to submit quote to portal", details: data?.errors },
                { status: response.status }
            );
        }

        return NextResponse.json(data, { status: response.status });
    } catch {
        return NextResponse.json(
            { error: "Internal server error during quote submission" },
            { status: 500 }
        );
    }
}
