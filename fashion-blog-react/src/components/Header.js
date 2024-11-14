import React from 'react';

function Header() {
  return (
    <header>
      <h1>Sartre'list</h1>
      <h2>Better-Dressed People</h2>
      <nav aria-label="Main Navigation" role="navigation">
      <ul>
                <li><a href="#women">Women's</a></li>
                <li><a href="#Men">Men's</a></li>
                <li><a href="#OnetheStreet">One the Street</a></li>
                <li><a href="#thecatwalk">The Catwalk</a></li>
                <li><a href="#AdWatch">AdWatch</a></li>
                <li><a href="#About">About</a></li>               
            </ul>
      </nav>
    </header>
  );
}

export default Header;