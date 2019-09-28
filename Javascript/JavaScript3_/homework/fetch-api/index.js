'use strict'

const getData = async (url) => {
  try {
    let res = await fetch(url)
    let data = await res.json();
    //console.log(data);
    return data
  } catch (err) {
    console.log(err)
  }
}

const generateContributions = async (element) => {
  const anArray = await getData(element.contributors_url);
  const rightDiv = document.createElement('div');
  anArray.forEach((ele) => {
    const paragraph = document.createElement('p');
    paragraph.setAttribute('id', 'rightDiv');
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
    liList.append(img)
    paragraph.append(uList);
    rightDiv.append(paragraph)
  })
  return rightDiv
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
  const aArray = await getData('https://api.github.com/orgs/foocoding/repos?per_page=100');
  const myArray = customizingTheArray(aArray);
  const root = document.getElementById('root');
  let rightDiv = document.createElement('div');
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

    btn.addEventListener('click', async () => {
      details.innerHTML = '';
      rightDiv.innerHTML = '';
      details.appendChild(generateDepoDetails(element));
      root.append(details);
      rightDiv = await generateContributions(element);
      root.append(rightDiv);
    });
  });
}

generateDepoList();

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