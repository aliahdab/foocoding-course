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
  const rightDiv = document.createElement('p');
  rightDiv.setAttribute('id', 'rightDiv');
  anArray.forEach((ele) => {

    const uList = document.createElement('ul');
    uList.setAttribute('id', 'ul');
    const liList = document.createElement('li');
    uList.setAttribute('id', 'li');
    uList.append(liList);
    const a = document.createElement('a');
    a.href = ele['html_url'];
    a.textContent = ele.login
    a.target = '_blank',
      liList.append(a);
    const img = document.createElement('img');
    img.setAttribute('src', ele.avatar_url);
    img.setAttribute('alt', 'Repo Image');
    //  a.appendChild(img);
    liList.append(img)
    rightDiv.append(uList);
  })
  return rightDiv;
}

const generateDepoDetails = (element) => {
  const uList = document.createElement('ul');
  uList.setAttribute('id', `ulList${element.name}`);
  const liList1 = document.createElement('li');
  liList1.setAttribute('id', 'detailsList');
  liList1.appendChild(document.createTextNode(`Repository : ${element.name}`))
  uList.appendChild(liList1);
  const liList2 = document.createElement('li');
  liList2.setAttribute('id', 'detailsList');
  liList2.appendChild(document.createTextNode(`Descriptions: ${element.description}`))
  uList.appendChild(liList2)
  const liList3 = document.createElement('li');
  liList3.setAttribute('id', 'detailsList');
  liList3.appendChild(document.createTextNode(`Forks : ${element.forks}`))
  uList.appendChild(liList3)
  const liList4 = document.createElement('li');
  liList4.setAttribute('id', 'detailsList');
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
  let details = document.createElement('div');

  let str;
  uList.setAttribute('id', 'mList');
  myArray.forEach(element => {
    const liList = document.createElement('li');
    liList.setAttribute('id', 'btnList');

    str = capitalizeFirstLetter(`${element.name}`);
    const btn = document.createElement('button');
    liList.appendChild(btn);
    btn.appendChild(document.createTextNode(str))
    btn.setAttribute('id', str);
    uList.appendChild(liList)
    root.appendChild(uList);

    btn.addEventListener('click', async () => {
      rightDiv.remove();
      details.remove();
      details = generateDepoDetails(element);
      root.append(details);
      rightDiv = await generateContributions(element);
      root.append(rightDiv);
    });
  });
  details = generateDepoDetails(myArray[0]);
  root.append(details);
  rightDiv = await generateContributions(myArray[0]);
  root.append(rightDiv);
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