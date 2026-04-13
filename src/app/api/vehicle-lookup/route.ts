import { NextRequest, NextResponse } from "next/server";

const API_KEY = process.env.VEHICLE_API_KEY;
const API_URL = "https://uk1.ukvehicledata.co.uk/api/datapackage/VehicleData";

export async function GET(request: NextRequest) {
    const searchParams = request.nextUrl.searchParams;
    const vrm = searchParams.get("vrm");

    if (!vrm) {
        return NextResponse.json(
            { error: "Vehicle Registration Mark (VRM) is required" },
            { status: 400 }
        );
    }

    if (!API_KEY) {
        return NextResponse.json(
            { error: "Server configuration error" },
            { status: 500 }
        );
    }

    try {
        const params = new URLSearchParams({
            auth_apikey: API_KEY as string,
            key_vrm: vrm,
        });

        const response = await fetch(`${API_URL}?${params.toString()}`);

        if (!response.ok) {
            throw new Error(`Upstream API failed with status ${response.status}`);
        }

        const data = await response.json();

        const filteredData = {
            vehicleRegistration: data.Response?.DataItems?.VehicleRegistration,
            smmtDetails: data.Response?.DataItems?.SmmtDetails,
            engine: data.Response?.DataItems?.EngineDetails,
            performance: data.Response?.DataItems?.Performance,
            vrm: vrm
        };

        return NextResponse.json(filteredData);

    } catch (error) {
        return NextResponse.json(
            { error: "Failed to fetch vehicle data" },
            { status: 500 }
        );
    }
}
