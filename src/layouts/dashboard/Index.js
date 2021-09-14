import Header from './Header'
import Footer from './Footer'
import SearchResult from '../../views/crm-search-result/Index'
import CrmSearch from '../../views/crm-search/Index'
import CrmDetails from '../../views/crm-details/CrmDetails'

export default function Dashboard () {
  return (
    <>
      <div className='wrapper'>
        <div className='first'>
          <Header />
        </div>
        <div className='second'>
          <CrmSearch />
        </div>
        <div className='third'>
          <SearchResult />
        </div>
        <div className='fourth'>
          <CrmDetails />
        </div>
      </div>

      <Footer />
    </>
  )
}
