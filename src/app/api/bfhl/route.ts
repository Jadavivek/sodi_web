import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export async function POST(req: NextRequest) {
  try {
    const { data } = await req.json();

    if (!Array.isArray(data)) {
      return NextResponse.json({
        is_success: false,
        user_id: '',
        email: '',
        roll_number: '',
        numbers: [],
        alphabets: [],
        highest_lowercase_alphabet: []
      }, { status: 400 });
    }

    const numbers = data.filter(item => !isNaN(Number(item))).map(item => item.toString());
    const alphabets = data.filter(item => isNaN(Number(item)));
    const highestLowercaseAlphabet = alphabets.filter(c => c === c.toLowerCase()).sort().reverse().slice(0, 1);

    return NextResponse.json({
      is_success: true,
      user_id: 'jada vivek',
      email: 'jada.vivek.1103@gmail.com',
      roll_number: '21bce9858',
      dob:'11-11-2003',
      numbers,
      alphabets,
      highest_lowercase_alphabet: highestLowercaseAlphabet,
    });
  } catch (error) {
    return NextResponse.json({
      is_success: false,
      user_id: '',
      email: '',
      roll_number: '',
      numbers: [],
      alphabets: [],
      highest_lowercase_alphabet: []
    }, { status: 500 });
  }
}
