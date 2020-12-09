import React, { Component } from 'react'
import styled from 'styled-components'

const Image = styled.img`
width:15em;
border-radius:10px;
`;

const Content = styled.div`
  align-self: left;
  margin:2em;
  justify-content: center-center;
  width: 13%;

  
`;

const DataWraper = styled.div`
  
`;


const Movie =({ movies ,title, overview, date, poster})=>{

const root = "https://image.tmdb.org/t/p/w500"
const boot = {poster}.poster
const poster_path =root.concat(boot)
    return (
        
     
                <Content>
                    <Image src={poster_path} onError={(e) => {
     e.target.src = 'https://blankposter.com/wp-content/uploads/2019/09/mahe_soulier_error-1.gif' }} title={overview} ></Image>
                    <DataWraper>
                    <h5>{title}</h5>
                      <p>{date}</p>
                    </DataWraper>   
                </Content>
                    
                      
     
          
        

        
    )

}

export default Movie
