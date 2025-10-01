import Backendless from '@/lib/backendless';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest) {
  const response = await Backendless.Data.of('Products').find();

  return NextResponse.json(
    {
      message: 'Get products successfull',
      data: response,
    },
    {
      status: 200,
    }
  );
}
