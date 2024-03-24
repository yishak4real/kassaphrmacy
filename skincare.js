const product = [
  {
      id: 0,
      image: 'img/f-m.webp',
      title: ' cearave facial moisturizing',
      price: 'price on request',
  },
  {
      id: 1,
      image: 'img/olive.png.jpg',
      title: 'olive oil',
      price: 'price on request',
  },
  {
      id: 2,
      image:'img/aa-2.jpg',
      title: 'aloevera',
      price: 'price on request', 
  },
  {
      id: 3,
      image: 'img/matrix-hair-gel.webp',
      title: 'matrix haur gel',
      price: 'price on-request',
  },
  {
      id: 4,
      image: 'img/3606000560239_cerave_babymoisturizinglotion_8oz-front-293x363-v1.webp',
      title: 'cerave babymoisturizing lotion',
      price: 'price on request',
  },
  {
      id: 5,
      image: 'img/cherry-blossom.webp',
      title: 'cosmo',
      price: 'price-on-request',
  },
  {
    id: 6,
    image: 'img/sunscreen.jpg',
    title: 'sunsceen',
    price: 'price-on-request',
},
{
    id: 7,
    image: 'img/hydrating-sheer-sunscreen-front-3floz_700x875-v1.webp',
    title: 'haydrating sheer sunscreem',
    price: 'price-on-request',
},
{
    id: 8,
    image: 'img/acnecontrolgel_40ml-front.webp',
    title: 'acne control gel',
    price: 'price-on-request',
},
{
    id: 9,
    image: 'img/12_hydrating_foaming_oil_cleanser_8oz_.webp',
    title: 'haydrating foaming oil',
    price: 'price-on-request',
},
{
    id: 10,
    image: 'img/cerave_moisturizing_cream_16oz_jar_front-700x875-v3.webp',
    title: 'cerave moisturizing cream',
    price: 'price-on-request',
},
{
    id: 11,
    image: 'img/Hf67fdfea67dd4d878ed7a9b9466c74f6h.jpg_960x960_09e495c4-6ca1-4935-8aea-f99a69ab8999_785x.webp',
    title: 'dr rashel vitamin-C ',
    price: 'price-on-request',
},
{
    id: 12,
    image: 'img/dr-rashel-vitamin-c-pack-of-3-day-night-cream-988833_720x.webp',
    title: 'dr rashel vitamin-C night cream',
    price: 'price-on-request',
},
{
    id: 13,
    image: 'img/16705-34186-3.webp',
    title: 'blue magic gel',
    price: 'price-on-request',
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
                  <h2>ETB ${price}</hs>
              
                  <a href="https://api.whatsapp.com/send?phone=251976660133&text=Can%20I%20know%20more%20about%20your%20service.." target='_blank'>
                             <i class="fa-brands fa-whatsapp"></i></a>
              </div>
          </div>`
      )
  }).join('')
};
displayItem(categories);

