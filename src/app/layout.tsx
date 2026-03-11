import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Silicon Stencil Studios | Monolith Infrastructure',
  description: 'Advanced digital design, structural web architecture, and monolith infrastructure systems.',
  keywords: ['Silicon Stencil Studios', 'Web Architecture', 'Brutalist Design', 'SSS Portal'],
  authors: [{ name: 'SSS' }],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body style={{ margin: 0, padding: 0, backgroundColor: '#09090b' }}>
        {children}
      </body>
    </html>
  )
}