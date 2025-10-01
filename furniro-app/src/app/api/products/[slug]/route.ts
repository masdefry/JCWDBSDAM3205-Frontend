import Backendless from '@/lib/backendless';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(
  req: NextRequest,
  { params }: { params: { slug: string } }
) {
  const { slug } = await params;

  const response = await Backendless.Data.of('Products').findById(slug);

  return NextResponse.json(
    {
      message: `Get product with id = ${slug} successfull`,
      data: response,
    },
    {
      status: 200,
    }
  );
}
