import WelcomeTemplate from "@/emails/WelcomeTemplate";
import { NextResponse } from "next/server";
import {Resend} from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST() {
    resend.emails.send({
        from: 'fayselcode@gmail.com',
        to: 'mpoint1920@gmail.com',
        react: <WelcomeTemplate name="Faysel" />
    })

    return NextResponse.json({});
}