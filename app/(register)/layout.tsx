import Header from '@/components/header';
import '../globals.css';
import { Toaster } from '@/components/ui/toaster';
import { NextAuthProvider } from '@/contexts/auth';

export const metadata = {
  title: 'Next.js',
  description: 'Generated by Next.js',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Toaster />
        <NextAuthProvider>
          <Header />
          {children}
        </NextAuthProvider>
      </body>
    </html>
  );
}
