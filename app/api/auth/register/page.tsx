

import { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();



export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method == 'POST') {
    const email = req.body.email;
    console.log(email);
  await prisma.user.create({
      data: {
        email: email,
      },
    });
  }}
