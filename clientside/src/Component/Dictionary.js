import React,{useEffect,useState} from 'react'
import { getwords } from "../actions/DicService"
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Spinner from 'react-bootstrap/Spinner'
import { Fragment } from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Dictionaryitem from './Dictionaryitem'
import Pic from './dic.jpg'
import Pagination from '@material-ui/lab/Pagination';
import Table from 'react-bootstrap/Table'

import {Nav,Navbar,Form,FormControl,Button} from 'react-bootstrap'



const Dictionary=({getwords,dicReduce:{ dic, loading }})=>{
    const [formdata, setFormData] = useState(0);
    const [lang,setlaguageData]=useState("en")
    useEffect(() => {
        getwords(lang,formdata)
    }, [getwords])
  
   
    let {
        step
    } = formdata;
    const handleChange = (event,value) => {
      let step = (value - 1) * 10
       getwords(lang,step);
       setFormData(step)
   };
   
    const submit =language=>{
     
       setlaguageData(language.target.value)
       
      getwords(language.target.value,formdata)
     }
    
   
return (
    <Fragment >{loading? <Container><Row className="justify-content-md-center"><Col  md="auto"><Spinner animation="border" role="status">
    <span className="sr-only">Loading...</span>
  </Spinner></Col></Row></Container> : <Fragment >
  <Navbar bg="primary" variant="dark">
    <Navbar.Brand href="#home"><img
        src={Pic}
        width="50"
        height="50"
        className="d-inline-block align-top"
        alt="React Bootstrap logo"
      /></Navbar.Brand>
    <Nav className="mr-auto">
      <h4>Technical test</h4>
    </Nav>
    <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-light">Search</Button>
    </Form>
  </Navbar>
  
  <Container>
      <label>Select a language</label>
  <select onChange={submit}>
  <option value="en" name="language">En</option>
  <option value="fr"  name="language">Fr</option>
  
</select>
  <Table striped bordered hover className="mt-5">
  
 <thead>
    <tr> 
      <th>Text</th>
      <th>Pos</th>
      <th>Sense</th> 
   
    </tr>
    </thead>
    <tbody>
         {
         dic.length >0 ? (
            dic && dic.map(dic=>(
                <tr>
            <Dictionaryitem key={dic.id} dicReduce={dic} /></tr>  
    
            )
            )
            ) : <h4>No words Found!</h4>}
           </tbody>
 
 </Table>
 <Col md={{ span: 6, offset: 3 }}>
                        <Pagination count={5} name="step" page={step} onChange={handleChange}/>
</Col>
                        </Container>
      
  </Fragment> }
    
  </Fragment>
)
    
}




Dictionary.propTypes = {
    getwords: PropTypes.func.isRequired,
    dicReduce: PropTypes.object.isRequired,
}
const mapStatToProps = state => ({
    dicReduce: state.dicReduce
})
export default connect(mapStatToProps, { getwords })(Dictionary)