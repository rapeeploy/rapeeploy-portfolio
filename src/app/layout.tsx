import type { Metadata } from 'next';
import './globals.css';
export const metadata: Metadata = { title: 'Rapeeploy Jamsri | Software Engineer', description: 'Backend-focused software engineer portfolio — experience, projects, and technical skills.' };
export default function RootLayout({children}:{children:React.ReactNode}) {return <html lang="en"><body>{children}</body></html>}
