import { getUser } from '../../actions/auth/cookie';
import { NextResponse } from 'next/server';

export async function GET() {
    const  user  = await getUser();    
  
    if (!user) {
      return NextResponse.json({ user: null }, { status: 401 });
    }
  
    return NextResponse.json({ user });
  }