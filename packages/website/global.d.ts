import * as NextAuth from 'next-auth';
import * as Next from 'next';

declare module 'next-auth' {
  interface Session {
    organization: {
      id: string;
      name: string;
      description?: string;
    };
    user: {
      id: string;
    };
  }
}

declare module 'next' {
  interface NextApiRequest {
    user: {
      id?: string;
      email: string;
    };
  }
}