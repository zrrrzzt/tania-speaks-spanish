import React from 'react'
import Head from 'next/head'
import capitalize from 'capitalize'
import { words } from 'superb-spanish'
import { knuthShuffle as shuffle } from 'knuth-shuffle'

function getWord () {
  const wordList = shuffle(words.slice(0))
  return `¡${capitalize(wordList[0])}!`
}

const Index = class extends React.Component {
  constructor () {
    super()
    this.state = {
      word: getWord()
    }
    this.speakSpanish = this.speakSpanish.bind(this)
  }

  speakSpanish () {
    const word = getWord()
    this.setState({ word: word })
  }

  render () {
    return (
      <div>
        <Head>
          <meta name='viewport' content='width=device-width, initial-scale=1.0' />
          <title>Tania says great things</title>
        </Head>
        <div className={'wrapper'}>
          <h1>Tania says great things... in Spanish!</h1>
          <img src={'/static/tania.jpg'} />
          <div className='fortune-box'>
            {this.state.word}
          </div>
          <p>
            <button onClick={this.speakSpanish}>¡Quiero más!</button>
          </p>
          <style jsx global>
            {`
            body {
              background-color: PaleVioletRed;
              padding: 20px;
            }
            img {
              border-radius: 25px;
            }
            button {
              font-weight: 500;
              width: 400px;
              height: 60px;
              font-size: 30px
              border-radius: 25px;
              border: 1px solid black;
              cursor: pointer;
              display: inline-block;
              text-decoration: none;
              background-color: thistle;
              outline: 0;
            }
            button:focus {
              outline:0;
            }
            button:active {
              outline: 0;
              background-color: plum;
            }
            .fortune-box {
              font-size: 48px;
              padding: 15px;
            }
            .wrapper {
              text-align: center;
            }
          `}
          </style>
        </div>
      </div>
    )
  }
}

export default Index
