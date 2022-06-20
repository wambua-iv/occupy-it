import React, { ReactNode } from 'react';
import Footer from './Footer';
import Header from './Header';

function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}

export default Layout;
