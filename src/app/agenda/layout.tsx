import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Agenda una Cita – FFCI Guatemala',
  description:
    'Programa una consulta gratuita con nuestros expertos. Cuéntanos sobre tu empresa y te ayudaremos a encontrar la mejor solución.',
};

export default function AgendaLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
