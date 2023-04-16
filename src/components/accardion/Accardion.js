import React, { useState } from 'react'
import './accordion.css'
import arow from '../../assets/img/arow.svg'
import { Accordion, AccordionDetails, AccordionSummary } from '@mui/material'

const Accardion = (props) => {
  const [expanded, setExpanded] = useState(false)

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false)
  }

  return (
    <div>
      <Accordion
        expanded={expanded === 'panel1'}
        onChange={handleChange('panel1')}
        className="accordion mb-4"
      >
        <AccordionSummary
          className="px-4 py-3 accardion-header"
          expandIcon={
            <img src={arow} alt='arow'
              className={
               !expanded ? 'accordion-close-icon' : 'accordion-open-icon '}
            />
          }
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <p className="mb-0 textSammary">{props.data.title}</p>
        </AccordionSummary>

        <div className="hr mx-4"></div>

        <AccordionDetails className="pt-0 px-4 pb-2 mt-3">
          <div
            className="textTitle"
            dangerouslySetInnerHTML={{ __html: props.data.description }}
          ></div>
        </AccordionDetails>
      </Accordion>
    </div>
  )
}

export default Accardion
