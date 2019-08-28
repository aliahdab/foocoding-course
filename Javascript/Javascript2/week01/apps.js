'use strict';

const bookTitles = [
  'game_of_thrones',
  'clash_of_kings',
  'storm_of_swords',
  'feast_for_crows',
  'dance_with_dragons',
  'the_winds_of_winter',
  'dream_of_spring',
  'the_hobbit',
  'the_return_of_the_king',
  'the_silmarillion',
];
console.log(bookTitles);

// 1.3 adding Ul with li inside ----------------------------------
/*
function generateBookList() {
  let newList = document.createElement('ul');
  for (let i = 0; i < bookTitles.length; i++) {
    let book = bookTitles[i];
    newList.innerHTML += `<li>${book}</li>`;
  }
  return newList;
}
generateBookList();
*/

function generateBookList() {
  let bookList = document.createElement('div');
  let ul = document.createElement('ul');
  bookTitles.map(book => {
    let li = document.createElement('li');
    let bookNames = book.replace(/_/g, ' ');
    li.appendChild(document.createTextNode(bookNames));
    ul.appendChild(li);
    return document.body.appendChild(bookList.appendChild(ul));
  });
}

generateBookList();

// 1.4 objects containing information for each book -------------
const bookList = {
  game_of_thrones: {
    title: 'Game Of Thrones',
    lang: 'English',
    author: ' George R. R. Martin',
    Publication_date: '01 Mar 2009',
    img: 'images/a-game-of-thrones.jpg',
  },
  clash_of_kings: {
    title: 'A Clash Of Kings',
    lang: 'English',
    author: ' George R. R. Martin',
    Publication_date: '05 Sep 2000',
    img: 'images/a_clash_of_kings.jpg',
  },
  storm_of_swords: {
    title: 'A Storm of Swords',
    lang: 'English',
    author: ' George R. R. Martin',
    Publication_date: '04 Mar 2003',
    img: 'images/stormofswords.jpg',
  },
  feast_for_crows: {
    title: 'A Feast for Crows',
    lang: 'English',
    author: ' George R. R. Martin',
    Publication_date: '01 Mar 2009',
    img: 'images/feast_for_crows.jpg',
  },
  dance_with_dragons: {
    title: 'A Dance with Dragons',
    lang: 'English',
    author: ' George R. R. Martin',
    Publication_date: '29 Oct 2013',
    img: 'images/dance_with_dragons.jpg',
  },
  the_winds_of_winter: {
    title: 'The Winds of Winter',
    lang: 'English',
    author: ' George R. R. Martin',
    Publication_date: '06 Sep 2017',
    img: 'images/the_winds_of_winter.jpg',
  },
  dream_of_spring: {
    title: 'A Dream Of Spring',
    lang: 'English',
    author: ' George R. R. Martin',
    Publication_date: '01 Mar 2009',
    img: 'images/dreamofspring.jpg',
  },
  the_hobbit: {
    title: 'The Hobbit or There and Back Again',
    lang: 'English',
    author: ' J.R.R. Tolkien',
    Publication_date: '1937',
    img: 'images/thehobbit.jpg',
  },
  the_return_of_the_king: {
    title: 'The Return of the King',
    lang: 'English',
    author: 'J.R.R. Tolkien',
    Publication_date: '1943',
    img: 'images/returnoftheking.jpg',
  },
  the_silmarillion: {
    title: 'The Silmarillion',
    lang: 'English',
    author: 'J.R.R. Tolkien',
    Publication_date: '1939',
    img: 'images/silmarillion.jpg',
  },
};

console.log(bookList);
// 1.5 functions add information of books ----------------
//console.log(Object.keys(bookList.game_of_thrones));