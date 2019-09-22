'use strict';

{
  function fetchJSON(url, cb) {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', url);
    xhr.responseType = 'json';
    xhr.onload = () => {
      if (xhr.status < 400) {
        cb(null, xhr.response);
        // console.log(xhr.response);
      } else {
        cb(new Error(`Network error: ${xhr.status} - ${xhr.statusText}`), null);
      }
    };
    xhr.onerror = () => cb(new Error('Network request failed'));
    xhr.send();
  }

  function createAndAppend(name, parent, options = {}) {
    const elem = document.createElement(name);
    parent.appendChild(elem);
    Object.keys(options).forEach(key => {
      const value = options[key];
      if (key === 'text') {
        elem.textContent = value;
      } else {
        elem.setAttribute(key, value);
      }
    });
    return elem;
  }

  function main(url) {
    fetchJSON(url, (err, data) => {
      const root = document.getElementById('root');
      const header = createAndAppend('header', root, {
        class: 'header',
      });
      if (err) {
        createAndAppend('div', root, {
          text: err.message,
          class: 'alert-error',
        });
      } else {
        {
          let num = 0;
          const container = createAndAppend('div', root, {
            class: 'container',
          });
          const select = createAndAppend('select', header, {
            class: 'select',
          });
          let myArray = customizingTheArray(data);

          myArray.forEach(element => {
            createAndAppend('option', select, {
              text: element['full_name'],
            });
          });
          const leftDiv = createAndAppend('div', container, {
            class: 'leftDiv',
          });
          const rightDiv = createAndAppend('div', container, {
            class: 'rightDiv',
          });
          generate_table(leftDiv, myArray, num);
          generate_rightDiv(rightDiv, data, num);

          const selectEvent = select.addEventListener('change', () => {
            num = select.options[select.selectedIndex].index;
            leftDiv.innerHTML = '';
            rightDiv.innerHTML = '';
            generate_table(leftDiv, myArray, num);
            generate_rightDiv(rightDiv, data, num);
          });
        }
      }
    });
  }

  const REPOS_URL = 'https://api.github.com/orgs/foocoding/repos?per_page=100';

  window.onload = () => main(REPOS_URL);

  function generate_rightDiv(rightDiv, array, num) {
    const paragraph = createAndAppend('p', rightDiv, {
      text: 'Contributions',
      class: 'Contributions-header',
    });

    fetchJSON(array[num].contributors_url, (err, data) => {
      const root = document.getElementById('root');
      if (err) {
        createAndAppend('div', root, {
          text: err.message,
          class: 'alert-error',
        });
      } else {
        const uList = createAndAppend('ul', rightDiv, {
          class: 'ul',
        });
        data.forEach(element => {
          //console.log(element);
          const liList = createAndAppend('li', uList, {
            class: 'li',
          });
          createAndAppend('a', liList, {
            class: 'a',
            text: element['login'],
            href: element['html_url'],
            target: '_blank',
          });
          // console.log(element.avatar_url);
          createAndAppend('img', liList, {
            class: 'img',
            src: element.avatar_url,
          });
        });
      }
    });
  }

  function generate_table(container, anArray, num) {
    let tbl = document.createElement('table');
    let tblBody = document.createElement('tbody');
    for (let i = 0; i < 4; i++) {
      let row = document.createElement('tr');
      for (let j = 0; j < 2; j++) {
        let cell = document.createElement('td');
        cell.setAttribute('style', 'color:black;');
        let cellText;
        switch (j) {
          case 0:
            switch (i) {
              case 0:
                cellText = document.createTextNode('Repository:');
                break;
              case 1:
                cellText = document.createTextNode('Description:');
                break;
              case 2:
                cellText = document.createTextNode('Forks:');
                break;

              case 3:
                cellText = document.createTextNode('Updated:');
                break;
              default:
            }
            break;
          case 1:
            switch (i) {
              case 0:
                createAndAppend('a', cell, {
                  href: anArray[num]['html_url'],
                  target: '_blank',
                  text: anArray[num].full_name,
                });
                cellText = document.createTextNode('');

                break;
              case 1:
                cellText = document.createTextNode(anArray[num].description);
                break;
              case 2:
                cellText = document.createTextNode(anArray[num].forks);
                break;

              case 3:
                cellText = document.createTextNode(anArray[num].updated_at);
                break;
              default:
            }
            break;
          default:
        }
        cell.appendChild(cellText);
        row.appendChild(cell);
      }

      tblBody.appendChild(row);
    }
    tbl.appendChild(tblBody);
    container.appendChild(tbl);
  }

  function customizingTheArray(anArray) {
    let myArray = [];
    anArray.map(item => {
      item.full_name = item.full_name.slice(10);
      item.full_name = capitalizeFirstLetter(item.full_name);
      myArray.push(item);
    });

    myArray.sort((a, b) => a.full_name.localeCompare(b.full_name));

    return myArray;
  }

  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
}
