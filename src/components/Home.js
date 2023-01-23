import React from 'react'
import styled from 'styled-components'
import Section from './Section'
import '../index.css'

function Home() {
  return (
    <Container>
      <Section
        name='model 3'
        desc='Order online for touchless delivery'
        bgImg='model-3.jpg'
        leftBtn='custom Order'
        rightBtn='Existing Inventory'
        downArrow='down-arrow.svg'
      />
      <Section
        name='model y'
        desc='Order online for touchless delivery'
        bgImg='model-y.jpg'
        leftBtn='custom Order'
        rightBtn='Existing Inventory'
      />
      <Section
        name='model s'
        desc='Order online for touchless delivery'
        bgImg='model-s.jpg'
        leftBtn='custom Order'
        rightBtn='Existing Inventory'
      />
      <Section
        name='model x'
        desc='Order online for touchless delivery'
        bgImg='model-x.jpg'
        leftBtn='custom Order'
        rightBtn='Existing Inventory'
      />
      <Section
        name='solar panels'
        desc='lowest cost solar panels in america'
        bgImg='solar-panel.jpg'
        leftBtn='order now'
        rightBtn='learn more'
      />
      <Section
        name='solar roof'
        desc='produce clean energy from your roof'
        bgImg='solar-roof.jpg'
        leftBtn='Order now'
        rightBtn='learn more'
      />
      <Section
        name='Accessories'
        // desc='produce clean energy from your roof'
        bgImg='accessories.jpg'
        leftBtn='Order now'
        // rightBtn='learn more'
      />
    </Container>
  )
}

export default Home

const Container = styled.div`
    height: 100vh;
`