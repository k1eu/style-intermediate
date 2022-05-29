import './Body.sass'

const Body = () => {
  return (
    <section className="card">
      <div className="card__stories">
        <div className="card__story">
          <h3 className="card__story-title">WATCHES</h3>
          <p className="card__story-text">
            The braunch watch collection has been created as a true
            representation of quality, clarity, longevity and timelessness
          </p>
          <div className="card__story-icon"/>
        </div>
        <div className="card__story">
          <h3 className="card__story-title">Health</h3>
          <p className="card__story-text">
            The braunch watch collection has been created as a true
            representation of quality, clarity, longevity and timelessness
          </p>
          <div className="card__story-icon"/>
        </div>
        <div className="card__story">
          <h3 className="card__story-title">Kitchen</h3>
          <p className="card__story-text">
            The braunch watch collection has been created as a true
            representation of quality, clarity, longevity and timelessness
          </p>
          <div className='card__story-action'>
            <span className="card__story-CTA-horizontal"/>
            <button className="card__story-CTA">LEARN MORE</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Body;
