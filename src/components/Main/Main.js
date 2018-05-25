import React from 'react';
import { withRouter } from 'react-router-dom';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

const Main = ({ children }) => (
  <div className="main_container">
    <header className="main_header">
      <Header />
    </header>
    <section className="main_section">
      <div className="main_section__content">
        {children}
      </div>
    </section>
    <footer className="main_footer">
      <Footer />
    </footer>
  </div>
);

export default withRouter(Main);
