// import { ReactNode } from 'react';
// import { AnnouncementBar } from './AnnouncementBar';
// import { Header } from './Header';
// import { Footer } from './Footer';

// interface LayoutProps {
//   children: ReactNode;
// }

// export function Layout({ children }: LayoutProps) {
//   return (
//     <div className="min-h-screen bg-background">
//       <AnnouncementBar />
//       <Header />
//       <main className="pt-32 md:pt-28">
//         {children}
//       </main>
//       <Footer />
//     </div>
//   );
// }



import { ReactNode } from 'react';
import { AnnouncementBar } from './AnnouncementBar';
import { Header } from './Header';
import { Footer } from './Footer';

interface LayoutProps {
  children: ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen bg-background">
      <AnnouncementBar />
      <Header />
      <main className="pt-32 md:pt-28">
        {children}
      </main>
      <Footer />
    </div>
  );
}
