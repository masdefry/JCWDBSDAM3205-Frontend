import { NextRequest, NextResponse } from 'next/server';
import Backendless from '@/lib/backendless';

export async function GET(req: NextRequest) {
  try {
    const productsData = await Backendless.Data.of('Products').find();

    return NextResponse.json(
      {
        data: productsData,
        message: 'Get data products successfully',
      },
      {
        status: 200,
      }
    );
  } catch (error) {
    return NextResponse.json(
      {
        message: 'Something went wrong',
      },
      {
        status: 500,
      }
    );
  }
}

export async function POST(req: NextRequest) {
  try {
    const data = await req.json(); // req.json: Digunakan untuk mengambil request data yg dikirimkan oleh frontend app

    await Backendless.Data.of('Products').save(data);

    return NextResponse.json(
      {
        message: 'Create Product Successfull',
      },
      {
        status: 201,
      }
    );
  } catch (error) {
    return NextResponse.json(
      {
        message: 'Something went wrong',
      },
      {
        status: 500,
      }
    );
  }
}
