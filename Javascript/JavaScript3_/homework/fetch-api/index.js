'use strict'

/*
// Fetching data way number 1;
const getData = () => {
  try {
    fetch('https://api.github.com/orgs/foocoding/repos?per_page=100')
      .then((res) => res.json())
      .then((data) => console.log(data))
  } catch (error) {
    console.log(error)
  }
}
getData();
*/
const getData = async () => {
  try {
    let res = await fetch('https://api.github.com/orgs/foocoding/repos?per_page=100')
    let data = await res.json();
    console.log(data);
    return data
  } catch (err) {
    console.log(err)
  }
}

const generateDepoDetails = (element) => {
  const uList = document.createElement('ul');
  uList.setAttribute('id', `ulList${element.name}`);
  const liList1 = document.createElement('li');
  liList1.appendChild(document.createTextNode(`Repository : ${element.name}`))
  uList.appendChild(liList1)
  const liList2 = document.createElement('li');
  liList2.appendChild(document.createTextNode(`Descriptions: ${element.description}`))
  uList.appendChild(liList2)
  const liList3 = document.createElement('li');
  liList3.appendChild(document.createTextNode(`Forks : ${element.forks}`))
  uList.appendChild(liList3)
  const liList4 = document.createElement('li');
  liList4.appendChild(document.createTextNode(`Updated : ${element.updated_at}`))
  uList.appendChild(liList4)
  return uList;
}

const generateDepoList = async () => {
  const ayArray = await getData();
  const myArray = customizingTheArray(ayArray);
  const root = document.getElementById('root');
  const uList = document.createElement('ul');
  const details = document.createElement('div');


  let str;
  uList.setAttribute('id', 'mainList');
  myArray.forEach(element => {
    const liList = document.createElement('li');
    str = capitalizeFirstLetter(`${element.name}`);
    const btn = document.createElement('button');
    liList.appendChild(btn);
    btn.appendChild(document.createTextNode(str))
    btn.setAttribute('id', str);
    uList.appendChild(liList)
    root.appendChild(uList);

    btn.addEventListener('click', () => {
      details.innerHTML = '';
      details.appendChild(generateDepoDetails(element));
      root.append(details);
    });
  });
}


generateDepoList();

const generateDetailsField = () => {

}




const customizingTheArray = (anArray) => {
  let myArray = [];
  anArray.map(item => {
    item.full_name = item.full_name.slice(10);
    item.full_name = capitalizeFirstLetter(item.name);
    myArray.push(item);
  });

  myArray.sort((a, b) => a.name.localeCompare(b.name));

  return myArray;
}

const capitalizeFirstLetter = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
}