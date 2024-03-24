const product = [
  {
      id: 0,
      image: 'ap/images.jpg',
      title: ' electronic blood presure monitor',
      price: 'price on request',
  },
  {
      id: 1,
      image: 'ap/safe-accu.jpg',
      title: 'blood glucose monitor',
      price: 'price on request',
  },
  {
      id: 2,
      image: 'ap/kk-oo',
      title: 'electronic blood presure monitor',
      price: 'price on request',
  },
  {
      id: 3,
      image: 'ap/download.jpg',
      title: 'test strips',
      price: 'price on request',
  },
  {
      id: 4,
      image: 'ap/Blood-Glucose-test-strips-On-Call-Extra-.webp',
      title: 'blood glucose test strips on call extra',
      price: 'price on request',
  },
  {
    id: 5,
    image:  'ap/on-call-express-bgms-174x300.png',
    title: 'blood glucose monitor on call extra',
    price: 'price on request',
},
];

const categories = [...new Set(product.map((item) => { return item }))]

document.getElementById('searchBar').addEventListener('keyup', (e) => {
  const searchData = e.target.value.toLowerCase();
  const filteredData = categories.filter((item) => {
      return (
          item.title.toLowerCase().includes(searchData)
      )
  })
  displayItem(filteredData)
});

const displayItem = (items) => {
  document.getElementById('root').innerHTML = items.map((item) => {
      var { image, title, price } = item;
      return (
          `<div class='box'>
              <div class='img-box'>
                  <img class='images' src=${image}></img>
              </div> 
              <div class='bottom'>
                  <p>${title}</p>
                  <h2>ETB ${price}</h2>
              
                  <a href="https://api.whatsapp.com/send?phone=251976660133&text=Can%20I%20know%20more%20about%20your%20service.." target='_blank'>
                             <i class="fa-brands fa-whatsapp"></i></a>
              </div>
          </div>`
      )
  }).join('')
};
displayItem(categories);
