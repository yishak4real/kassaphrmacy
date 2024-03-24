const product = [
  {
      id: 0,
      image: 'sn/tynor_knee_support_hinged_neoprene_xxxl_1piece_it005427_01.webp',
      title: ' knee support hinged',
      price: 'price on request',
  },
  {
      id: 1,
      image: 'sn/Back-Rest-LargeBlue.jpg',
      title: 'back rest largeBlue',
      price: 'price on request',
  },
  {
      id: 2,
      image: 'sn/back_comfort_belt_-_front.webp',
      title: 'back comfort belt',
      price: 'price on request',
  },
  {
      id: 3,
      image: 'sn/619245045a3f65f3251b96ad_flamingo-arm-sling-deluxe_500.jpeg',
      title: 'arm sling',
      price: 'price on request',
  },
  {
      id: 4,
      image: 'sn/wrist___forearm_splint.webp',
      title: 'wrist forearm splint',
      price: 'price on request',
  },
  {
      id: 5,
      image: 'sn/elbow_support_beige_1.webp',
      title:  'elbow support',
      price: 'price on request',
  },
  {
      id: 6,
      image: 'sn/Pediatric-Walker.webp',
      title: 'Pediatric-Walker',
      price: 'price on request',
  },
  {
    id: 7,
    image: 'sn/pediatric_arm_sling.webp',
    title: 'pediatric_arm_sling',
    price: 'price on request',
},
{
    id: 8,
    image: 'sn/do.webp',
    title: 'arm_sling',
    price: 'price on request',
},
{
    id: 9,
    image: 'sn/products-3317.webp',
    title: 'back clavicle splint',
    price: 'price on request',
},
{
    id: 10,
    image: 'sn/AdjustableAnkleSupportNeoprene.webp',
    title: 'adjustable ankle support',
    price: 'price on request',
},
{
    id: 11,
    image: 'sn/KneeImmobilizer.webp',
    title: 'knee imobilizer',
    price: 'price on request',
},
{
    id: 12,
    image: 'sn/cervical_collar_with_neck_support.webp',
    title: 'neck support',
    price: 'price on request',
},
{
   id: 13,
   image: 'sn/elastic_shoulder_immobilizer3.webp',
   title: 'elastic shoulder imobilizer',
   price: 'price on request',
},
{
    id: 14,
    image: 'sn/foreaem.jpg',
    title: 'wrist and forearm support',
    price: 'price on request',
 },
 {
    id: 15,
    image: 'sn/exercise-ball.webp',
    title: 'exercising ball',
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
