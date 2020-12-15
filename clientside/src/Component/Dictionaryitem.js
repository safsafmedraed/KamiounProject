import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

const Dictionaryitem =({dicReduce:{headword,senses}})=>{
   
return(
    <Fragment>
      
   
      <td>{headword.text}</td>
      <td >{headword.pos}</td>
      <td>{senses.length >0 ? senses && senses.map(s=>s.definition): <p>No result found </p>}</td>  
  
    </Fragment>
)

}
Dictionaryitem.propTypes = {
  dicReduce: PropTypes.object.isRequired,
}

export default Dictionaryitem