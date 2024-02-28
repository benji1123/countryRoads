import { useState } from 'react'
import './App.css'
import Item from './components/Item/Item'
import { ART, BOOKS, CAFES, DISHES, DRIVES, FILMS, HIKES, PHOTOS } from './data/index'
import * as images from './images/index'
import { Link } from 'react-router-dom'

function App() {
  const [displayImage, setDisplayImage] = useState(images.cyber)

  const setItemImage = (src: string) => () => setDisplayImage(src)

  return (
    <div className="App">
      <header>
        <div className="header-content">
          <h1>Ben Li</h1>
          <p>benji112358@gmail.com</p>
          <p className="bio-text">{new Date().toLocaleString().split(',')[0]}</p>
          <Link to="https://github.com/benji1123" style={{ color: 'teal' }} target="_blank">
            Github
          </Link>
        </div>
      </header>

      <div className="overall-container">
        <div className="list-container">
          <div className="list">
            <h3>dish</h3>
            <ul>
              {DISHES.map((d: any, index) => (
                <Item key={index} name={d.name} md1={d.country} onHover={setItemImage(d.image)} />
              ))}
            </ul>
          </div>

          <div className="list">
            <h3>café</h3>
            <ul id="cafe-list">
              {CAFES.map((c: any, index) => (
                <Item key={index} name={c.name} md2={c.drink} onHover={setItemImage(c.image)} />
              ))}
            </ul>
          </div>

          <div className="list">
            <h3>trek</h3>
            <ul>
              {HIKES.map((h: any, index) => (
                <Item
                  key={index}
                  name={h.name}
                  md2={h.dist}
                  md3={h.elev}
                  onHover={setItemImage(h.image)}
                />
              ))}
            </ul>
          </div>

          <div className="list">
            <h3>🚗</h3>
            <ul>
              {DRIVES.map((h: any, index) => (
                <Item
                  key={index}
                  name={h.name}
                  md2={h.type}
                  md3={h.dist}
                  onHover={setItemImage(h.image)}
                />
              ))}
            </ul>
          </div>

          <div className="list">
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
              <li>-</li>
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

          <div className="list">
            <h3>📚</h3>
            <ul>
              {BOOKS.map((b: any, index) => (
                <Item key={index} name={b.name} />
              ))}
            </ul>
          </div>
        </div>
        <div id="img-col">
        <a id="imgLink" href="/#" target="blank">
          <img id="displayImage" aria-label="gallery image" src={displayImage} />
        </a>
      </div>
      </div>
    </div>
  )
}

export default App
