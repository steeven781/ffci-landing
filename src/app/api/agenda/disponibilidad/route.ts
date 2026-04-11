import { NextRequest, NextResponse } from 'next/server';
import { google } from 'googleapis';

export async function GET(req: NextRequest) {
  const fecha = req.nextUrl.searchParams.get('fecha');

  if (!fecha || !/^\d{4}-\d{2}-\d{2}$/.test(fecha)) {
    return NextResponse.json({ error: 'Fecha inválida.' }, { status: 400 });
  }

  const privateKey = process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n');
  const clientEmail = process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL;
  const calendarId = process.env.GOOGLE_CALENDAR_ID;

  if (!privateKey || !clientEmail || !calendarId) {
    return NextResponse.json({ error: 'Configuración del servidor incompleta.' }, { status: 500 });
  }

  const auth = new google.auth.JWT({
    email: clientEmail,
    key: privateKey,
    scopes: ['https://www.googleapis.com/auth/calendar.readonly'],
  });

  const calendar = google.calendar({ version: 'v3', auth });

  // Fetch all events of the day (Guatemala = UTC-6, always)
  const timeMin = new Date(`${fecha}T00:00:00-06:00`).toISOString();
  const timeMax = new Date(`${fecha}T23:59:59-06:00`).toISOString();

  const res = await calendar.events.list({
    calendarId,
    timeMin,
    timeMax,
    singleEvents: true,
    orderBy: 'startTime',
  });

  const events = res.data.items ?? [];

  // Build all 30-min slots 09:00–16:30
  const allSlots: string[] = [];
  for (let h = 9; h < 17; h++) {
    allSlots.push(`${String(h).padStart(2, '0')}:00`);
    allSlots.push(`${String(h).padStart(2, '0')}:30`);
  }

  // A slot is occupied if any event overlaps with its 30-min window
  const ocupados = allSlots.filter((slot) => {
    const slotStart = new Date(`${fecha}T${slot}:00-06:00`);
    const slotEnd = new Date(slotStart.getTime() + 30 * 60 * 1000);

    return events.some((event) => {
      const eventStart = new Date(event.start?.dateTime ?? `${event.start?.date}T00:00:00-06:00`);
      const eventEnd = new Date(event.end?.dateTime ?? `${event.end?.date}T00:00:00-06:00`);
      return eventStart < slotEnd && eventEnd > slotStart;
    });
  });

  return NextResponse.json({ ocupados });
}
