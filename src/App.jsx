import './App.css'

function App() {

  return (
    <main>
      <article className="card">
        <figure className="card__figure">
          <img className="card__img" src="/image-equilibrium.jpg" alt="equilibrium" />
          <div className="card__overlay">
            <img className="card__icon" src="/icon-view.svg" alt="show" />
          </div>
        </figure>

        <h1 className="card__title">Equilibrium #3429</h1>

        <p className="card__description">
          Our Equilibrium collection promotes balance and calm.
        </p>

        <div className="card__priceTime">
          <div className="price__section">
            <img src="/icon-ethereum.svg" alt="ethereum" />
            <p className="card__price">0.041 ETH</p>
          </div>

          <div className="time__section">
            <img src="/icon-clock.svg" alt="time" />
            <p className="card__time">3 days left</p>
          </div>
        </div>

        <hr className="card__separator" />

        <div className="card__authorSection">
          <img className="card__avatar" src="/image-avatar.png" alt="Jules Wyvern" />
          <p className="card__author">
            Creation of <span className="card__authorName">Jules Wyvern</span>
          </p>
        </div>
      </article>
    </main>
  )
}

export default App
