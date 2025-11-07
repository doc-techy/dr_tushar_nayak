import { NextResponse } from "next/server";
import {
  doctorProfile,
  educationTimeline,
  experienceHighlights,
} from "@/data/site-content";

export function GET() {
  return NextResponse.json({
    doctorProfile,
    educationTimeline,
    experienceHighlights,
  });
}

