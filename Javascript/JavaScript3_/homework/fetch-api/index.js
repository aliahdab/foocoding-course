'use strict'

const getData = async (url) => {
  try {
    let res = await fetch(url)
    let data = await res.json();
    //console.log(data);
    return data
  } catch (err) {
    alert(err)
  }
}

const generateContributions = async (element) => {
  const anArray = await getData(element.contributors_url);
  const rightDiv = document.createElement('div');
  rightDiv.setAttribute('id', 'rightDiv');
  const paragraph = document.createElement('p');
  paragraph.setAttribute('id', 'paragraph');
  anArray.forEach((ele) => {
    const uList = document.createElement('ul');
    uList.setAttribute('id', 'ul');
    const liList = document.createElement('li');
    uList.setAttribute('id', 'li');
    uList.append(liList);
    const a = document.createElement('a');
    a.setAttribute('url', ele['html_url']);
    a.setAttribute('text', ele.login);
    liList.append(a);
    const img = document.createElement('img');
    img.setAttribute('src', ele.avatar_url);
    img.setAttribute('id', 'ul');

    liList.append(img)
    paragraph.append(uList);
  })
  return paragraph
}

const generateRepoDetails = (element) => {
  const uList = document.createElement('ul');
  uList.setAttribute('id', 'mlist');
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

const generateRepoList = async () => {
  const aArray = await getData('https://api.github.com/orgs/foocoding/repos?per_page=100');
  const myArray = customizingTheArray(aArray);
  console.log(myArray);
  const root = document.getElementById('root');
  let leftDiv = document.createElement('div');
  leftDiv.setAttribute('id', 'leftDiv');

  const uList = document.createElement('ul');

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
    leftDiv.appendChild(uList);
    btn.addEventListener('click', eventClicker);
    root.append(leftDiv)
  })
  eventClicker(myArray[3]);
}

const eventClicker = async (element) => {
  const root = document.getElementById('root');
  if (typeof details === "undefined") {
    var details = document.createElement('div');
    details.setAttribute('id', 'details');
    var rightDiv = document.createElement('div');
    rightDiv.setAttribute('id', 'rightDiv2');
  } else {
    details.remove();
    rightDiv.remove();
    console.log('remove details')
  }
  console.log(details);
  details = await generateRepoDetails(element);
  rightDiv = await generateContributions(element);
  root.append(details);
  root.append(rightDiv);
}

const customizingTheArray = (anArray) => {
  let myArray = [];
  anArray.map(item => {

    item.name = capitalizeFirstLetter(item.name);
    myArray.push(item);
  });

  myArray.sort((a, b) => a.name.localeCompare(b.name));

  return myArray;
}

const capitalizeFirstLetter = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

generateRepoList();