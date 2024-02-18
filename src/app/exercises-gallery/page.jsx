import Dashboard from './components/dashboard/Dashboard'
import './page.scss'

function page() {
  return (
    <div className="exercises-gallery_page">
      <div className="title">
        <h2>Gallery</h2>
      </div>
      <div className="exercises-gallery">
        <Dashboard></Dashboard>
      </div>
    </div>
  )
}

export default page