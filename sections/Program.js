import Container from 'react-bootstrap/Container'
import Table from 'react-bootstrap/Table'
import Image from 'react-bootstrap/Image'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import React from 'react'
import Clock from 'react-live-clock'

/*
const Program = () => (
    <Container className="bg-white section p-4 my-5 rounded">
      <a className='target' id='program'/>
      <h2 className='display-4 anchor mb-3'>Program</h2>
      <p>
          TBA...
      </p>
    </Container>



)
*/

const Program = () => (
    <Container className="bg-white section p-4 my-5 rounded">
    <a className='target' id='program'/>
    <h2 className='display-4 anchor mb-3'>Program</h2>



    <Table bordered className="mt-5">
      <tbody>	

        <tr className='text-center table-primary'><th>Wednesday, April 10,</th><th>Session I (Room 2); session chair: <em>Adam Przybyłek</em></th></tr>
        <tr><td className='text-nowrap'>14:30 - 14:40</td><td><a href='/' target="_blank" rel="noopener noreferrer">Track opening</a> (<em>Adam Przybyłek</em>)</td></tr>
        <tr><td className='text-nowrap'>14:40 - 15:00</td><td>Common LeSS Transformation Patterns (<em>Alena Buchalcevova and Jakub Hermanek</em>)</td></tr>
        <tr><td className='text-nowrap'>15:00 - 15:20</td><td>Beyond Technical Debt Unravelling Organisational Debt Concept (<em>Muhammad Ovais Ahmad and Osama Al-Baik</em>)</td></tr>
        <tr><td className='text-nowrap'>15:20 - 15:40</td><td>Challenges to Sustaining Agility: An Exploratory Case Study (<em>Mali Senapathi and Diane E Strode</em>)</td></tr>
        <tr><td className='text-nowrap'>15:40 - 16:00</td><td>Navigating Cultural Diversity: Barriers and Benefits in Multicultural Agile Software Development Teams (<em>Daniel Welsch, Luisa Burk, David Mötefindt and Michael Neumann</em>)</td></tr>

        <tr><th className='text-center table-secondary' colSpan={2}></th></tr>
        <tr className='text-center table-primary'><th>Wednesday, April 10,</th><th>Session II (Room 2); session chair: <em>Michael Neumann</em></th></tr>
        <tr><td className='text-nowrap'>16:30 - 16:50</td><td>Technical Debt Management in Agile Context: A new framework and case study in a large financial institution (<em>Gisela Archela, Ana C V Melo and Vagner Luiz Gava</em>)</td></tr>
        <tr><td className='text-nowrap'>16:50 - 17:10</td><td>Revisiting Technical Debt Types and Indicators for Software Systems (<em>Dilek Caglayan and Ozden Ozcan-Top</em>)</td></tr>
        <tr><td className='text-nowrap'>17:10 - 17:30</td><td>The use of prototypes as a tool in Agile software development (<em>Vivian Larrea, Milene Selbach Silveira and Tiago da Silva</em>)</td></tr>


        <tr><th className='text-center table-secondary' colSpan={2}></th></tr>
        <tr className='text-center table-primary'><th>Wednesday, April 10</th><th>Poster Exhibit (Hallway - 0 floor)</th></tr>
        <tr><td className='text-nowrap'>15:00 - 17:00</td><td>
          <ul>
             <li>UMask-AFL: Unmasking All Reachable Targets for Comprehensive Agile Fuzzing (<em>Sangharatna Godboley, Bikash Singha, Monika Rani Golla and P. R Krishna</em>)</li>
             <li>Implementing Action Items Over Improving the Format of Retros (<em>Yen Ying Ng and Ryszard Kuduk</em>)</li>
          </ul>
        </td></tr>

      </tbody>
    </Table>
  </Container>
)

export default Program


//    <Row className="justify-content-center my-5">
//      <Col xs lg="1"> 
//      </Col>
//
//      <Col xs lg="2"> 
//        <Image fluid src='/LNBIP_LASD22.jpg' alt='LNBIP_LASD22'/>
//      </Col>
//      <Col>
//  <h4>Lean and Agile Software Development</h4>
//  <h5>6th International Conference, LASD 2022, Virtual Event, January 22, 2022, Proceedings</h5>
//  <h4><a href="https://link.springer.com/book/10.1007/978-3-030-94238-0">LNBIP, volume 438</a></h4>          
//      <p className='mt-4'>Time zone of the conference: GMT+1 (Central European Standard Time)</p>
//      <p>Current Time:
//         <Clock 
//           format={'HH:mm:ss'}
//           ticking={true}
//           className="mx-2" />
//       </p>
//      </Col>
//     <Col xs lg="1"> 
//      </Col>
//    </Row> 


  
