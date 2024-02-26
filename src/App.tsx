import { useState } from 'react'
import './App.css'
import Item from './components/Item/Item'
import { ART, BOOKS, CAFES, DISHES, FILMS, HIKES, PHOTOS } from './data/index'
import * as images from './images/index'

function App() {
  const [displayImage, setDisplayImage] = useState(images.cyber)

  const setItemImage = (src: string) => () => setDisplayImage(src)

  return (
    <div className="App">
      <header>
        <div id="header-content">
          <h1>Ben Li</h1>
          <p>@benji1123</p>
          <p className="bio-text">{new Date().toLocaleString().split(',')[0]}</p>
        </div>
      </header>

      <div className="container">
        <div className="row">
          <div className="column">
            <h3>dish</h3>
            <ul>
              {DISHES.map((d: any, index) => (
                <Item key={index} name={d.name} md1={d.country} onHover={setItemImage(d.image)} />
              ))}
            </ul>

            <h3>café</h3>
            <ul id="cafe-list">
              {CAFES.map((c: any, index) => (
                <Item key={index} name={c.name} md2={c.drink} onHover={setItemImage(c.image)} />
              ))}
            </ul>
          </div>

          <div className="column">
            <h3>film</h3>
            <ul>
              {FILMS.map((f, index) => (
                <Item key={index} name={f.name} />
              ))}
            </ul>

            <h3>trek</h3>
            <ul>
              {HIKES.map((h: any, index) => (
                <Item
                  key={index}
                  name={h.name}
                  md2={h.dist.split('/')[1]}
                  md3={h.dist.split('/')[0]}
                  onHover={setItemImage(h.image)}
                />
              ))}
            </ul>
          </div>

          <div className="column">
            <h3 id="books-col">📚</h3>
            <ul id="books">
              {BOOKS.map((b: any, index) => (
                <Item key={index} name={b.name} />
              ))}
            </ul>

            <h3>art</h3>
            <ul>
              {ART.map((art: any, index) => (
                <Item
                  key={index}
                  name={art.name}
                  md3={art.medium}
                  onHover={setItemImage(art.image)}
                />
              ))}
              {PHOTOS.map((photo: any, index) => (
                <Item
                  key={index}
                  name={photo.name}
                  md3={photo.place}
                  onHover={setItemImage(photo.image)}
                />
              ))}
            </ul>
          </div>

          <div className="col" id="img-col">
            <a id="imgLink" href="/#" target="blank">
              <img id="displayImage" aria-label="gallery image" src={displayImage} />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
