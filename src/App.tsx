import { useState } from 'react'
import './App.css'
import List from './components/List/List'
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
          <List
            title="dish"
            data={DISHES}
            setItemImage={setItemImage}
            getMd2={(item: any) => item.country}
          ></List>

          <List
            title="café"
            data={CAFES}
            setItemImage={setItemImage}
            getMd2={(item: any) => item.drink}
          ></List>

          <List
            title="trek"
            data={HIKES}
            setItemImage={setItemImage}
            getMd2={(item: any) => item.dist}
            getMd3={(item: any) => item.elev}
          ></List>

          <List
            title="🚗"
            data={DRIVES}
            setItemImage={setItemImage}
            getMd2={(item: any) => item.type}
            getMd3={(item: any) => item.dist}
          ></List>

          <List
            title="art"
            data={ART}
            setItemImage={setItemImage}
            getMd3={(item: any) => item.medium}
          ></List>

          <List
            title="photo"
            data={PHOTOS}
            setItemImage={setItemImage}
            getMd3={(item: any) => item.place}
          ></List>

          <List title="📚" data={BOOKS} setItemImage={setItemImage}></List>
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
