import React, { useState } from "react";
import Clock from "react-live-clock";
import "./App.css";
import Item from "./components/Item/Item.tsx";
import * as images from "./images/index";

function App() {
  const [image, setImage] = useState(images.cyber);

  const CAFES = [
    {
      name: "Nemesis",
      area: "VicSq",
      drink: "L",
      onMouseOver: () => setImage(images.nem1),
    },
    {
      name: "Propoganda",
      area: "Ctown",
      drink: "C",
      onMouseOver: () => setImage(images.prop1),
    },
    {
      name: "Beaucoup",
      area: "Granv",
      drink: "C,L",
      onMouseOver: () => setImage(images.beau),
    },
    {
      name: "Ciclo",
      area: "Ytown",
      drink: "C",
      onMouseOver: () => setImage(images.cicloout),
    },
    {
      name: "Saunter",
      area: "VicSq",
      drink: "CB",
      onMouseOver: () => setImage(images.saunter),
    },
    {
      name: "Milano",
      area: "Gas",
      drink: "M",
      onMouseOver: () => setImage(images.milano),
    },
  ];

  const ART = [
    {
      name: "spirited away",
      medium: "PS/Nikon",
      src: "",
      onMouseOver: () => setImage(images.spirited),
    },
    {
      name: '"shim" noodles',
      medium: "PS",
      src: "",
      onMouseOver: () => setImage(images.shim),
    },
    {
      name: "cyber (mostly by JlPaed)",
      medium: "AE",
      src: "https://www.artstation.com/artwork/JlPaed",
      onMouseOver: () => setImage(images.cyber),
    },
  ];

  const PHOTOS = [
    {
      name: "piano",
      place: "hangzhou",
      src: "",
      onMouseOver: () => setImage(images.piano),
    },
    {
      name: "birds",
      place: "sauga",
      src: "",
      onMouseOver: () => setImage(images.gulls),
    },
  ];

  const HIKES = [
    {
      name: "Seawall",
      dist: "42k/+9m",
    },
    {
      name: "Gbaldi 🌙",
      dist: "22k/+983m",
      dest: "https://medium.com/@benji112358/garibaldi-march-4-2023-191921f2b66d",
      onMouseOver: () => setImage(images.gar1),
    },
    {
      name: "Pano 2",
      dist: "28k/+1.5k",
      onMouseOver: () => setImage(images.gar2),
    },
    {
      name: "Pano 1",
      dist: "31k/+1.6k",
      dest: "https://strava.app.link/eUzxkzYJsHb",
      onMouseOver: () => setImage(images.gar3),
    },
    {
      name: "Grouse",
      dist: "3k/+853m",
    },
    {
      name: "Mt Si",
      dist: "12k/+1k",
    },
    {
      name: "GNP",
      dist: "5k/+180m",
    },
  ];

  const DISHES = [
    {
      name: "risotto",
      country: "🇮🇹",
      ingredients: "arborio rice",
      onMouseOver: () => setImage(images.risotto),
    },
    {
      name: "spag",
      country: "🇮🇹",
      ingredients: "wine",
      onMouseOver: () => setImage(images.spag),
    },
    {
      name: "tag(liatelle)",
      country: "🇮🇹",
      onMouseOver: () => setImage(images.tag),
    },
    {
      name: "jajangmyeon",
      country: "🇰🇷",
      ingredients: "p-belly",
      onMouseOver: () => setImage(images.jajeong),
    },
    {
      name: "paella",
      country: "🇪🇸",
      ingredients: "argentinan prawns",
      onMouseOver: () => setImage(images.paella),
    },
    {
      name: "cheesecake",
      country: "🇯🇵",
      ingredients: "",
      onMouseOver: () => setImage(images.cheesecake),
    },
    {
      name: "sammy",
      country: "🇯🇵",
      ingredients: "",
      onMouseOver: () => setImage(images.sammy),
    },
    {
      name: "choco cip",
      country: "🇺🇸",
      ingredients: "robinhood flour",
      onMouseOver: () => setImage(images.choc),
    },
    {
      name: "salmon",
      country: "🇺🇸",
      ingredients: "salmon lol",
      onMouseOver: () => setImage(images.salmon),
    },
    {
      name: "curryyy",
      country: "🇯🇵",
      ingredients: "s&b",
      onMouseOver: () => setImage(images.curry),
    },
    {
      name: "ramen",
      country: "🇯🇵",
      onMouseOver: () => setImage(images.ramen),
    },
    {
      name: "wontons",
      country: "🇨🇳",
      onMouseOver: () => setImage(images.wonton),
    },
  ];

  const FILMS = [
    { name: "ferrari" },
    { name: "john wick" },
    { name: "whisp of heart" },
    { name: "kikis deliv ser" },
    { name: "alien" },
  ];

  const BOOKS = [
    // { name: "notes underground", author: "dostoevsky" },
    // { name: "malcolm x", author: "lee & wiley" },
    // { name: "other madisons", author: "kearse" },
    // { name: "beyond good & evil", author: "nietzhe" },
    { name: "neuromancer", author: "gibbons" },
    { name: "3 body problem", author: "cixin" },
    { name: "sapiens", author: "harari" },
  ];
  return (
    <div className="App">
      <header>
        <div id="header-content">
          <h1>Ben Li</h1>
          <p>@benji1123</p>
          <p class="bio-text">{new Date().toLocaleString().split(",")[0]}</p>
          {/* <p>hey</p> */}
          {/* <Clock format="HH:mm" interval={1000} ticking={true} /> */}
        </div>
      </header>

      <div class="container">
        <div class="row">
          <div class="column">
            <h3>dish</h3>
            <ul>
              {DISHES.map((dish) => (
                <Item
                  name={dish.name}
                  md1={dish.country}
                  // md3={dish.ingredients}
                  onHover={dish.onMouseOver}
                ></Item>
              ))}
            </ul>

            <h3>café</h3>
            <ul id="cafe-list">
              {CAFES.map((c) => (
                <Item
                  name={c.name}
                  md2={c.drink}
                  onHover={c.onMouseOver}
                ></Item>
              ))}
            </ul>
          </div>

          <div class="column">
            <h3>film</h3>
            <ul>
              {FILMS.map((f) => (
                <Item name={f.name}></Item>
              ))}
            </ul>

            <h3>trek</h3>
            <ul>
              {HIKES.map((h) => (
                <Item
                  name={h.name}
                  md2={h.dist.split("/")[1]}
                  md3={h.dist.split("/")[0]}
                  onHover={h.onMouseOver}
                ></Item>
              ))}
            </ul>
          </div>

          <div class="column">
            <h3 id="books-col">📚</h3>
            <ul id="books">
              {BOOKS.map((b) => (
                <Item name={b.name}></Item>
              ))}
            </ul>

            <h3>art</h3>
            <ul>
              {ART.map((art) => (
                <Item
                  name={art.name}
                  md3={art.medium}
                  onHover={art.onMouseOver}
                ></Item>
              ))}
              {PHOTOS.map((p) => (
                <Item
                  name={p.name}
                  md3={p.place}
                  onHover={p.onMouseOver}
                ></Item>
              ))}
            </ul>
          </div>

          <div class="col" id="img-col">
            <a id="imgLink" href="/#" target="blank">
              <img id="displayImage" aria-label="gallery image" src={image} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
