import React from 'react';
import Header from './Header';
import Article from './Article';
import Footer from './Footer';

function App() {
    return (
        <div>
          <Header />
          <main>
            <Article title="One the Street in Brooklyn" image="https://ps-react-curriculum.herokuapp.com/fashionblog/blog-image-1.jpg" text="Lorem..." />
            <Article title="Vintage in Vogue" image="https://ps-react-curriculum.herokuapp.com/fashionblog/blog-image-2.jpg" text="Lorem..." />
          </main>
          <Footer />
        </div>
      );

}