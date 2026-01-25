import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const { name, email, projectType, timeline, message } = await request.json();

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Name, email, and message are required' },
        { status: 400 }
      );
    }

    // Format project type and timeline for display
    const formatValue = (value: string) => {
      if (!value) return 'Not specified';
      return value.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
    };

    // Send email to Nicole
    const { data, error } = await resend.emails.send({
      from: 'Form & Feeling <hello@formandfeeling.design>',
      to: ['nicole@formandfeeling.design'],
      replyTo: email,
      subject: `New Inquiry from ${name}`,
      html: `
        <div style="font-family: Georgia, serif; max-width: 600px; margin: 0 auto; color: #2C2825;">
          <div style="border-bottom: 1px solid #D4CFC7; padding-bottom: 20px; margin-bottom: 20px;">
            <h1 style="font-size: 24px; font-weight: 300; margin: 0; color: #2C2825;">
              New Project Inquiry
            </h1>
          </div>
          
          <div style="margin-bottom: 24px;">
            <h2 style="font-size: 14px; text-transform: uppercase; letter-spacing: 1px; color: #A69080; margin-bottom: 12px;">
              Contact Details
            </h2>
            <p style="margin: 0 0 8px 0;"><strong>Name:</strong> ${name}</p>
            <p style="margin: 0;"><strong>Email:</strong> <a href="mailto:${email}" style="color: #A69080;">${email}</a></p>
          </div>
          
          <div style="margin-bottom: 24px;">
            <h2 style="font-size: 14px; text-transform: uppercase; letter-spacing: 1px; color: #A69080; margin-bottom: 12px;">
              Project Details
            </h2>
            <p style="margin: 0 0 8px 0;"><strong>Type:</strong> ${formatValue(projectType)}</p>
            <p style="margin: 0;"><strong>Timeline:</strong> ${formatValue(timeline)}</p>
          </div>
          
          <div style="margin-bottom: 24px;">
            <h2 style="font-size: 14px; text-transform: uppercase; letter-spacing: 1px; color: #A69080; margin-bottom: 12px;">
              Message
            </h2>
            <div style="background: #F5F1EB; padding: 16px; border-left: 3px solid #A69080;">
              <p style="margin: 0; white-space: pre-wrap; line-height: 1.6;">${message}</p>
            </div>
          </div>
          
          <div style="border-top: 1px solid #D4CFC7; padding-top: 20px; margin-top: 20px;">
            <p style="font-size: 12px; color: #8A857D; margin: 0;">
              This inquiry was submitted through the Form & Feeling website contact form.
            </p>
          </div>
        </div>
      `,
    });

    if (error) {
      console.error('Resend error:', error);
      return NextResponse.json(
        { error: 'Failed to send email' },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true, id: data?.id });
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
