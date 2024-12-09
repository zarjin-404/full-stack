import dbConnect from '@/lib/dbConnect';
import User from '@/model/User';
import bcrypt from 'bcryptjs';

import { sendVerificationEmail } from '@/helper/sendVerificationEmail';

export async function POST(req: Request) {
  await dbConnect();
  try {
    const { username, email, password } = await req.json();
  } catch (err) {
    console.log('error in sign up route', err);
    return Response.json(
      { success: false, message: 'error in sign up route' },
      {
        status: 500,
      }
    );
  }
}
