import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import './App.css'
import List from './components/List/List'
import { fetchItemsInCategory } from './firebase'

function App() {
  // TODO images.cyber (gif) is 1MB+ so replace or compress it
  const [displayImage, setDisplayImage] = useState(
    'https://media.githubusercontent.com/media/benji1123/www.benli99.xyz/master/media/background/cyber/cyber.gif'
  )
  const setItemImage = (src: string) => () => setDisplayImage(src)

  // writeListToFireStorage('art', ART)
  // writeListToFireStorage('book', BOOKS)
  // writeListToFireStorage('cafe', CAFES)
  // writeListToFireStorage('dish', DISHES)
  // writeListToFireStorage('drive', DRIVES)
  // writeListToFireStorage('hike', HIKES)
  // writeListToFireStorage('photo', PHOTOS)

  const [artData, setArtData] = useState<any[]>([])
  const [bookData, setBookData] = useState<any[]>([])
  const [cafeData, setCafeData] = useState<any[]>([])
  const [dishData, setDishData] = useState<any[]>([])
  const [driveData, setDriveData] = useState<any[]>([])
  const [hikeData, setHikeData] = useState<any[]>([])
  const [photoData, setPhotoData] = useState<any[]>([])

  /** LOL I have a state for each item-category because each item is in a different
   * collection, which requires seprarate fetches. Code would be cleaner if all items
   * were in a single collection, but I like having them separate. Otherwise, I would have
   * to sort on the client.
   *
   * Solution is to:
   *   1. move all items under one collection
   *   2. write an AWS or Firebase adhoc-function to fetch the data and sort it
   *   3. frontend calls the function instead of Firebase directly
   */
  useEffect(() => {
    async function fetchData() {
      try {
        const artResult: any[] = await fetchItemsInCategory('art')
        const bookResult: any[] = await fetchItemsInCategory('book')
        const cafeResult: any[] = await fetchItemsInCategory('cafe')
        const dishResult: any[] = await fetchItemsInCategory('dish')
        const driveResult: any[] = await fetchItemsInCategory('drive')
        const hikeResult: any[] = await fetchItemsInCategory('hike')
        const photoResult: any[] = await fetchItemsInCategory('photo')
        setArtData(artResult)
        setBookData(bookResult)
        setCafeData(cafeResult)
        setDishData(dishResult)
        setDriveData(driveResult)
        setHikeData(hikeResult)
        setPhotoData(photoResult)
      } catch (error) {
        console.log('error fetching items')
      }
    }
    fetchData()
  }, [])

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

      {/* Each list is created using the same fields except for the getMdN(). Maybe I can
      use a common field-name like item.md1. This will let me extract list-creation into a function. */}
      <div className="overall-container">
        <div className="list-container">
          <List
            title="dish"
            data={dishData}
            setItemImage={setItemImage}
            getMd2={(item: any) => item.country}
          ></List>

          <List
            title="café"
            data={cafeData}
            setItemImage={setItemImage}
            getMd2={(item: any) => item.drink}
          ></List>

          <List
            title="trek"
            data={hikeData}
            setItemImage={setItemImage}
            getMd2={(item: any) => item.dist}
            getMd3={(item: any) => item.elev}
          ></List>

          <List
            title="🚗"
            data={driveData}
            setItemImage={setItemImage}
            getMd2={(item: any) => item.type}
            getMd3={(item: any) => item.dist}
          ></List>

          <List
            title="art"
            data={artData}
            setItemImage={setItemImage}
            getMd3={(item: any) => item.medium}
          ></List>

          <List
            title="photo"
            data={photoData}
            setItemImage={setItemImage}
            getMd3={(item: any) => item.place}
          ></List>

          <List title="📚" data={bookData} setItemImage={setItemImage}></List>
        </div>
        <div id="img-col">
          <a id="imgLink" href="/#" target="blank">
            <img id="displayImage" aria-label="gallery image" src={displayImage} />
          </a>
        </div>
      </div>

      {/** Quick image-grid implementation using the items above. When loading the page,
       * the images load in batches, so seems React is doing some helpful underneath the hood.
       * TODO investigate ways of rendering image-grid (i.e. ajax)
       */}
      <div className="image-grid">
        {[artData, cafeData, dishData, photoData].map((category: any[]) =>
          category
            // TODO shuffle order of items so users see different images
            .slice(0, 8)
            .filter((item: any) => item.image !== '')
            .map((item: any) => (
              <div>
                <img className="image-grid-item" aria-label={item.name} src={item.image} />
              </div>
            ))
        )}
      </div>
    </div>
  )
}

export default App
