import './globals.css'


export const metadata = {
  title: 'Hussain Zahid | Advocate & Legal Consultant',
  description: 'Advocate with experience in litigation, drafting, ADR & mediation. Rawalpindi / Islamabad.'
}


export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}