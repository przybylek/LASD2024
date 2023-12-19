import Container from 'react-bootstrap/Container'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Image from 'react-bootstrap/Image'

const Header = () => (
  <Jumbotron className='px-2 pt-5 mb-0' style={{backgroundColor: '#f0f0f5'}}>
    <a className='target' id='home'/>
    <Container className="px-0 py-1">
      <div className="row align-items-center">
        <div className="col-md-6">
	  <Image src="/Avila.jpg" alt='Avila' fluid />
        </div>
        <div className="col-md-6">
          <h1 className='h1 text-center anchor font-weight-bold'>LASD@<a className='u' href='https://www.sigapp.org/sac/sac2024/'>SAC'24</a></h1>
          <h2 className='text-center h3 py-3'>Track on <strong>Lean and Agile Software Development</strong></h2>
          <h3 className='text-center h4 pb-3'><small>at the 39th ACM/SIGAPP Symposium On Applied Computing</small></h3>
          <h4 className='text-center h5'>April 8 - April 12, 2024</h4>
          <h4 className='text-center h5 pb-3'>Avila, Spain</h4>
          <h5 className='text-center h6 text-info'>Authors who cannot make on-site presentations due to travel or health restrictions may request to present their materials online.</h5>
	  <h4 className='text-center h5'>
		<span className='badge bg-warning p-2 m-3'><a className='u' href='https://isd2024.ug.edu.pl'>LASD@ISD'24</a>, August 26–28, Gdańsk, Poland</span>
	  </h4>


 {/* Commenting the following section */}
 {/*
            <h4 className='text-center h5'>
		<span className='badge bg-warning p-2 m-1'><a className='u' href='https://pers.lasd.pl'>PeRS@ADBIS'23</a> (Barcelona)</span>
		<span className='badge bg-warning p-2 m-3'><a className='u' href='https://kkio.lasd.pl'>KKIO@FedCSIS'23</a> (Warsaw)</span>
	    </h4>
  */}
        </div>
      </div>
    </Container>

  </Jumbotron>
)

export default Header
