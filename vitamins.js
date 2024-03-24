const product = [
  {
      id: 0,
      image: '45/NeurobionForte.png',
      title: ' Neurobionforte',
      price: 'PRICE ON REQUEST',
  },
  {
      id: 1,
      image: '45/natB.jpg',
      title: 'NAT B',
      price: 'PRICE ON REQUEST',
  },
  {
      id: 2,
      image: '45/propoleo-canada.jpg.webp',
      title: 'CALCIUM VITAMIN D3',
      price: 'PRICE ON REQUEST',
  },
  {
      id: 3,
      image: '45/vitacap.jpg',
      title: 'VITACAP',
      price: 'PRICE ON REQUEST',
  },
  {
      id: 4,
      image: '45/OmegaBabys-DHA-874x1024.jpg',
      title: 'omegababys fishoil',
      price: 'PRICE ON REQUEST',
  },
  {
      id: 5,
      image: '45/haemup.webp',
      title: 'HAEM UP',
      price: 'PRICE ON REQUEST',
  },
  {
      id: 6,
      image: '45/on-gold-standard-100-whey-protein_Image_01.webp',
      title: 'gold standard WHEY protein',
      price: 'PRICE ON REQUEST',
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
                  <h2> ${price}</h2>

                  <a href="https://api.whatsapp.com/send?phone=251976660133&text=Can%20I%20know%20more%20about%20your%20service.." target='_blank'>
                  <i class="fa-brands fa-whatsapp"></i></a>
              </div>
          </div>`
      )
  }).join('')
};
displayItem(categories);
