import '../css/style.css'
import { getCars } from '../actions/carsAction'
import React from 'react'
import { useDispatch } from 'react-redux'
import { DatePicker } from 'antd'
const useState = React.useState
const useEffect = React.useEffect

function CarsPage() {

  const [available, setAvailable] = useState(null)
  const [year, setYear] = useState(null)
  const [capacity, setCapacity] = useState(null)

  const handleSetAvailable = (e) => {
    setAvailable(e.target.value)
  }

  const handleSetCapacity = (e) => {
    setCapacity(e.target.value)
  }

  const dispatch = useDispatch()
  const handleSubmit = (e) => {
    console.log("tes", available, typeof(available), year, typeof(year), capacity, typeof(capacity))
    dispatch(getCars(available, year, capacity))
    e.preventDefault()
  }

  return (
  <div>
  {/* Navbar */}
  <header>
    <nav className="navbar navbar-expand-lg fixed-top pxc-7">
      <a className="navbar-brand" href="/"></a>
      <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar">
        <span className="navbar-toggler-icon" />
      </button>
      <div className="offcanvas offcanvas-end w-50" tabIndex={-1} id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel">
        <div className="offcanvas-header">
          <a className="navbar-brand-2" href="/">BCR</a>
          <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close" />
        </div>
        <div className="offcanvas-body">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item"><a class="nav-link" href="#our-service">Our Service</a></li>
            <li class="nav-item"><a class="nav-link" href="#why-us">Why Us</a></li>
            <li class="nav-item"><a class="nav-link" href="#testimonial">Testimonial</a></li>
            <li class="nav-item"><a class="nav-link" href="#faq">FAQ</a></li>
            <li class="register font-weight-bold"><button class="btn" onclick="">Register</button></li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
  {/* Home */}
  <article id="home" className="row align-items-end">
    <div className="col home-content align-self-center">
      <h2 className="mb-5 font-weight-bold">Sewa &amp; Rental Mobil Terbaik di kawasan (Lokasimu)</h2>
      <p className="mb-5">Selamat datang di Binar Car Rental. Kami menyediakan mobil kualitas terbaik dengan harga terjangkau. Selalu siap melayani kebutuhanmu untuk sewa mobil selama 24 jam.</p>
    </div>
    <img className="col-md-auto p-0" src="img/img_car.png" alt />
  </article>
  {/* Search Car */}
  <form id="search" className="container p-3 rounded" onSubmit={handleSubmit}>
    <div className="row align-items-end">
      <div className="col">
        <p>Tipe Driver</p>
        <select className="btn-select form-select" aria-label="Default select example" onChange={handleSetAvailable}>
          <option selected>Pilih Tipe Driver</option>
          <option value={true}>Dengan Sopir</option>
          <option value={false}>Tanpa Sopir (Lepas Kunci)</option>
        </select>
      </div>
      <div className="col">
        <p>Tanggal</p>
        <div className="dropdown">
          <DatePicker picker="year" className="btn-select rounded" onChange={(date, dateString)=>{
            const year = dateString.split('-')[0]
            setYear(year)}} />
        </div>
      </div>
      <div className="col-lg">
        <label for="waktu-jemput" className="form-label">Waktu Jemput/Ambil</label>
        <input type="time" className="form-control form-item" id="waktu-jemput" />
        <div className="dropdown">
        </div>
      </div>
      <div className="col">
        <p>Jumlah Penumpang (optional)</p>
        <select className="btn-select form-select" aria-label="Default select example" onChange={handleSetCapacity}>
          <option selected>Jumlah Penumpang</option>
          <option value="2">2</option>
          <option value="4">4</option>
          <option value="6">6</option>
        </select>
      </div>
      <div className="col-2 text-center">
        <button id="search-btn" type="submit" className="btn">Cari Mobil</button>
      </div>
    </div>
  </form>
  
</div>

  )
}

export default CarsPage

