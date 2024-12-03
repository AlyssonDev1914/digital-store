const Gallery = () => {
    return (
         
<div id="carouselExample" class="carousel slide">
  <div className ="carousel-inner">
    <div>
      <p>Melhores</p>
      <h1>Queima de estoque</h1>
      <button>Ver ofertas</button>
    </div>
    <div className ="carousel-item active">
      <img src="/home-slide-1.jpeg" className ="d-block w-50" alt="..."/>
    </div>
    <div className ="carousel-item">
      <img src="/home-slide-2.jpeg" className ="d-flex justify-content-center w-50" alt="..."/>
    </div>
    <div className ="carousel-item">
      <img src="/home-slide-3.jpeg" className ="d-flex justify-content-center w-50" alt="..."/>
    </div>
    <div className ="carousel-item">
      <img src="/home-slide-4.jpeg" className ="d-flex justify-content-center w-50" alt="..."/>
    </div>
  </div>
  <button className ="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
    <span className ="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className ="visually-hidden">Previous</span>
  </button>
  <button className ="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
    <span className ="carousel-control-next-icon" aria-hidden="true"></span>
    <span className ="visually-hidden">Next</span>
  </button>
</div>

     );
}
 
export default Gallery;