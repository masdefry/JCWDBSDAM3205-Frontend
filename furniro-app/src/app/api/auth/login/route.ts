import { NextRequest, NextResponse } from 'next/server';
import Backendless from '@/lib/backendless';

export async function POST(req: NextRequest) {
  try {
    // 01. Get data from request body
    const data = await req.json();

    // 02. Check data into database
    const response = await Backendless.UserService.login(
      data?.username,
      data?.password,
      false
    );

    // 03. Sending response
    return NextResponse.json({
      message: 'Successfully login account',
      data: response,
    });
  } catch (error) {
    const message =
      error instanceof SyntaxError
        ? 'Invalid JSON body'
        : error instanceof Error
        ? error.message
        : 'Unknown error';

    return NextResponse.json({ message }, { status: 400 });
  }
}

/* 
  Media Pengiriman Data di HTTP Request:
  1. Body
  2. Headers
  3. Url:
     - Query
     - Params
*/
