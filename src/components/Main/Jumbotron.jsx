import img from './braunnobg.png'

import './Jumbotron.sass'

const Main = () => {
  return (
    <section className='jumbotron'>
      <div className='jumbotron__left'>
        <h2 className='jumbotron__phrase'>There's beauty<br/>in simplicity</h2>
        <p className='jumbotron__paragraph'>
          Characteristic German design, quality, and engineering prowess bolster
          Braun's standing against cheaply produced competing products.
        </p>
        <button className="jumbotron__CTA">BUY NOW</button>
      </div>
      <div className='jumbotron__right'>
        <span className='jumbotron__accent-text'>SB47</span>
        <img className='jumbotron__image' src={img} width={536} height={331}/>
        <div className='jumbotron__pagination'>
          <span className='jumbotron__pagination-item -active'/>
          <span className='jumbotron__pagination-item'/>
          <span className='jumbotron__pagination-item'/>
          <span className='jumbotron__pagination-arrow'/>
          <span className='jumbotron__pagination-arrow'/>
        </div>
      </div>
      <aside className='jumbotron__aside'>
        <span>ICONIC DESIGN</span>
        <span>RECOMMENDED</span>
      </aside>
    </section>
  );
};

export default Main;
