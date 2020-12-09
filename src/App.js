import React, { Component } from 'react'
import './App.css';
import styled from 'styled-components';
import axios from 'axios';
import Movie from './components/Movie';
import { object } from 'prop-types';
import Healine from './components/Healine';
import Footer from './components/Footer'

// Styled navbar
const Title = styled.h1`
      font-size: 1.5em;
      text-align: center;
      color: palevioletred;`;
const Search = styled.input`
      border-radius:10px;
      margin: auto;
      width: 35%;
      height:3em;
      background-color: #202224;
      border-style: none;
      text-align: center;
      color:white; `;
const Wrapper = styled.section`
      padding: 1em;
      background: Black;
      height:5em;
      box-shadow: 0px 5px 15px #323234;
      display: flex; `;
const Pic = styled.p`
      font-size:1.5em;  
      margin-left:2em;
      margin-top: auto;
      margin-bottom: auto; `;
 const Profile = styled.img`
      width:3em;
      margin-right:3em; `;

const Container = styled.section`
      display: flex; 
      padding:auto;
      flex-wrap: wrap;
      flex-direction: row;
      margin:auto;
      `;
      


const start = 'https://api.themoviedb.org/3/search/movie?api_key=7f1a9ab21c04fc25c73f0115df15f92e&language=en-US&query='
const end = '&page=1&include_adult=false'

const userLogo = "https://i.pinimg.com/originals/0d/dc/ca/0ddccae723d85a703b798a5e682c23c1.png"

export class App extends Component {

  state = {
    query:'',
    movies:[],
    title:'',
    overview:'',
    date:'',
    poster:''
  }
  
  handleChange = event => {
    this.setState({ query : event.target.value}, () => {
        console.log(this.state.query)
    })

}
  
  handleSubmit = () => {
    const link = start.concat(this.state.query,end);
    axios.get(link)
      .then(res => {
        const movies = res.data.results;
        this.setState({ movies });
      })
      this.setState({...this.state.query})

    }
    onEnterPress = (e) => {
      if(e.keyCode == 13 && e.shiftKey == false) {
        e.preventDefault();
        this.handleSubmit();
      }
      console.log(...this.state.movies)

    }

  render() {
      const path ='https://image.tmdb.org/t/p/w500'
      const movies = Object
      .keys(this.state.movies)
      .map(key => 
        <Movie key={key}
        title={this.state.movies[key].original_title}
        overview={this.state.movies[key].overview}
        date={this.state.movies[key].release_date}
        poster= {this.state.movies[key].poster_path}
        />
        
        )

    return (
      <div className="App">
               <Wrapper>
                     <Pic>VÖKKA</Pic>
                     <Search  type ='search' onChange={this.handleChange} placeholder="Maybe Avatar ?" onKeyDown={this.onEnterPress}></Search>
                    <Profile src={userLogo}></Profile>
                </Wrapper>
                <Healine></Healine>
                <Container>{movies}</Container>
    
            

      </div>
    );
  }
}

export default App
