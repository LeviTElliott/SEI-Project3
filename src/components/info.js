import React from 'react'
import alliance from '../images/alliance.webp'
import horde from '../images/horde.jpg'

import {
  raceId,
  classArray,
  factionId
} from '../constants'

const Race = ({ char}) => {
    return (
        <StatsStyle>
      <figure>
        <img
          src={char.faction === 0 ? alliance : horde}
          alt={factionId[char.faction]}
        />
      </figure>
      <h1>{char.name}</h1>
      <h2>
        Level {char.level} {raceId[char.race]} {classArray[char.class]}
      </h2>
      </StatsStyle>
    )
}
export default Race

const StatsStyle =`
  background-color: rgba(14, 22, 48, 0.9);
  padding: 2.5rem;
  @media (min-width: 700px) {
    width: 50%;
    margin-left: 5rem;
  }
  figure {
    width: 10rem;
    margin: 0 auto;
    img {
      width: 100%;
    }
  }
  h1,
  h2,
  h3 {
    letter-spacing: 1px;
  }
  h1 {
    font-size: 3rem;
    color: #d7a12e;
    text-align: center;
  }
  h2 {
    text-align: center;
    margin-bottom: 2rem;
  }
  h3 {
    margin-bottom: 1rem;
  }
  .row {
    display: grid;
    grid-template-columns: 47% 47%;
    grid-gap: 5%;
    margin-bottom: 1rem;
  }
  .stat {
    color: #d7a12e;
  }
  .stat-group {
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-bottom: 0.5rem;
  }
`