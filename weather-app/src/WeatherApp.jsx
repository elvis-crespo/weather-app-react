import axios from 'axios'
import React, { useState } from 'react'
import styled from 'styled-components'

const Container = styled.div`
    height: 100vh;
    /* background-image: url("/public/fondo.jpg"); */
    background-image: url("fondo.jpg");
    background-repeat: no-repeat;
    background-size: cover;
    display: flex;
    justify-content: start;
    align-items: center;
    flex-direction: column;
    padding: 12px;
    gap: 16px;
    h1{
        font-family:  sans-serif;
        color: #FFF;
        letter-spacing: 12px;
        padding-bottom: 8px;
        font-size: 55px;
        @media (width >= 200px ){
            font-size: 24px;
        }
        @media (width >= 700px) {
 
            font-size: 36px;
        }
        @media (width >= 1200px){
            font-size: 48px;
        }
    }  
`
const ContainerInput = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    position: relative;
    gap: 5px;
    input{
        width: 100%;
        padding: 10px;
        border: 1px solid rgba(255, 255, 255, 0.5);
        background: #1d2b3a39;
        border-radius: 5px;
        outline: none;
        color: #FFF;
        font-size: 1em;
        transition: 3s;
        &:valid ~ label,
        &:focus ~ label{
          color: #293531d8;
          transform: translateX(0px) translateY(-22px);
          font-size: 0.65em;
          padding: 0 10px;
          background: #ddebe6;
          font-weight: bold;
          letter-spacing: 6px;
        }
        &:valid ,
        &:focus {
          border-top: 0;
          border-left: 0;
          border-right: 0;
          border-bottom: 4px solid #ddebe6;
          background: none;
          color: #FFF;
          letter-spacing: 1.5px ;
          text-align: center;
        }
        
      }
      label{
        position: absolute;
        left: 0;
        padding: 12px;
        pointer-events: none;
        font-size: 1em;
        color: rgba(255, 255 ,255, 0.25);
        text-transform: uppercase;
        transition: 0.5s;
      }
      button{
        width: 135px;
        height: 45px;
        font-family: 'inter', sans-serif;
        font-size: 16px;
        text-align: center;
        padding-bottom: .75rem;
        padding-top: .75rem;
        padding-bottom: .75rem;
        padding-top: .75rem;
        background-image: linear-gradient(135deg, rgb(176, 231, 241) 0%, rgb(60, 184, 212) 100%);
        color: rgb(16, 46, 60);
        border-radius: .5rem;
        transition: 0.5s;
        cursor: pointer;
        border: none;
        transform: scale(0.8);
        &:hover{
            font-weight: bold;
            background-image: linear-gradient(135deg, rgb(250, 194, 37) 0%, rgb(216, 123, 7) 100%);
            color: rgb(69, 27, 3);
            transform: scale(1);
        }
      }
`
const WeatherContainer = styled.div`
    color: #FFF;
    background: #00000036;
    top: 30%;
    position: absolute;
    width: 90%;
    height: 60vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    border-radius: 10px;
    div{
        height: 100%;
        gap: 5px;
        padding: 20px;
        font-family: 'Inter', sans-serif;
        font-weight: bold;
        letter-spacing: 2px;
        font-size: 3.7vw;
        @media (width >= 200px ){
            font-size: 12px;
        }
        @media (width >= 700px) {
            font-size: 16px;
        }
        @media (width >= 1200px){
            font-size: 24px;
        }
    }
    div:nth-child(1){
        width: 55%;
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-template-rows: 35px repeat(3, 1fr) 60px;
        align-items: center;
        justify-content: center;
        text-align: center;
        p:nth-child(1) {
            grid-column: 1/3;
        }
        p:nth-child(3) {
            font-family: 'Klee One', sans-serif;
            font-weight: bold;
            font-size: 4vw;
            align-self: flex-end;
        }
        p:nth-child(4){
            font-size: 3.5vw;
        }
        p:nth-child(5){
            align-self: flex-start;
        }
        img{
            grid-row: 2/5;
            width: auto;
            height: 300px;
            align-self: center;
            justify-self: center;
            @media (width >= 200px ){
                width: auto;
                height: 100px;
            }
            @media (width >= 700px) {
                width: auto;
                height: 200px;
            }
            @media (width >= 1200px){
                width: auto;
                height: 300px;
            }
        }
        div{
            grid-column: 1/3;
            display: flex;
            justify-content: center;
            align-items: center;
            padding: 0;
            gap: 15px;
            span{
                /* padding: 8px; */
                cursor: pointer;
                transform: scale(1);
                transition: .2s;
                &:hover{
                    transform: scale(0.9);
                    color: #ffffff86;
                }
            }
        }
    }
    div:nth-child(2){
        background: #00000036;
        width: 45%;
        display: flex;
        justify-content: space-evenly;
        align-items: start;
        align-content: center;
        flex-direction: column;
        gap: 18px;
        padding-left: 100px;
        font-size: 2vw;
        @media (width >= 200px ){
            padding: 5px;
            align-items: center;
            gap: 3px;
            font-size: 12px;
        }
        @media (width >= 700px) {
            padding: 10px;
            align-items: center;
            gap: 9px;
            font-size: 16px;
        }
        @media (width >= 1200px){
            gap: 18px;
            display: flex;
            justify-content: space-evenly;
            align-items: start;
            align-content: center;
            flex-direction: column;
            padding-left: 100px;
            font-size: 24px;
        }
        span{
            display: flex;
            justify-content: center;
            align-items: center;
            justify-content: center;
            flex-direction: row;
        }
    }
`
const InfoWeatherError = styled.div`
        height: 70%;
        width: 70%;
        display: flex;
        text-align: center;
        justify-content: center;
        align-items: center;
        gap: 5px;
        padding: 20px;
        font-weight: bold;
        color: #FFF;
        font-family: 'Inter', sans-serif;
        background: #00000036;
        font-size: 2vw;
        @media (width >= 300px){
            font-size: 24px;
        }

`
export const WeatherApp = () => {

    const [value, setValue] = useState('')
    const [previosValue, setPreviosValue] = useState('')
    const [dataWeather, setDataWeather] = useState('')
    const [error, setError] = useState('');
    const [temp, setTemp] = useState('C')

    const URL_BASE = 'https://api.openweathermap.org/data/2.5/weather'
    const API_KEY = '6fa60d1a955b5de45f7b103e2a34459a'
    const keltoCen = 273.15;

    const handleInputChange = (e) => {
        setValue(e.target.value)
    }
    const submit = (e) => {
        e.preventDefault()
        if (value.length > 0) getData()
    }
    const getData = async () => {
        if (value !== previosValue) {

            try {
                setError('');
                const response = await axios.get(`${URL_BASE}?q=${value}&appid=${API_KEY}`)
                const data = await response.data
                setDataWeather(data)
            } catch (error) {
                if (error.response)
                    console.error('Respuesta del servidor con error:', error.response.data);
                    console.error('Código de estado:', error.response.status);
                    setError(error.response.data)
            }
            setPreviosValue(value);
        }
    }

    return (
        <>
            <Container>
                <h1>Weather App</h1>
                <ContainerInput>
                    <input
                        type="text"
                        required='required'
                        value={value}
                        onChange={handleInputChange}
                    />
                    <label>Find for a city</label>
                    <button
                        type="submit"
                        onClick={submit}
                    >
                        <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="1.5em" width="1.5em" xmlns="http://www.w3.org/2000/svg"><path d="M48 448l416-192L48 64v149.333L346 256 48 298.667z"></path></svg>
                    </button>
                </ContainerInput>

                {
                    error ?
                        (
                            <InfoWeatherError>
                                <p>{error.message}</p>
                            </InfoWeatherError>
                        )
                        : dataWeather &&
                        (
                            <WeatherContainer>
                                <div>
                                    <p>September 25, 2024</p>
                                    <img
                                        src={`https://openweathermap.org/img/wn/${dataWeather.weather[0].icon}@2x.png`}
                                    />
                                    {temp && (
                                        temp == 'F'
                                            ? <p>{parseInt(dataWeather.main.temp)} ºF</p>
                                            : <p>{parseInt(dataWeather.main.temp - keltoCen)} ºC</p>
                                    )
                                    }
                                    <p>{dataWeather.name}</p>
                                    <p>{dataWeather.weather[0].main}</p>
                                    <div>
                                        <span onClick={() => { setTemp('F') }}>ºF</span>
                                        <span onClick={() => { setTemp('C') }}>ºC</span>
                                    </div>
                                </div>
                                <div>
                                    <span>
                                        <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="40px" width="40px" xmlns="http://www.w3.org/2000/svg"><path d="M156.7 256H16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h142.2c15.9 0 30.8 10.9 33.4 26.6 3.3 20-12.1 37.4-31.6 37.4-14.1 0-26.1-9.2-30.4-21.9-2.1-6.3-8.6-10.1-15.2-10.1H81.6c-9.8 0-17.7 8.8-15.9 18.4 8.6 44.1 47.6 77.6 94.2 77.6 57.1 0 102.7-50.1 95.2-108.6C249 291 205.4 256 156.7 256zM16 224h336c59.7 0 106.8-54.8 93.8-116.7-7.6-36.2-36.9-65.5-73.1-73.1-55.4-11.6-105.1 24.9-114.9 75.5-1.9 9.6 6.1 18.3 15.8 18.3h32.8c6.7 0 13.1-3.8 15.2-10.1C325.9 105.2 337.9 96 352 96c19.4 0 34.9 17.4 31.6 37.4-2.6 15.7-17.4 26.6-33.4 26.6H16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16zm384 32H243.7c19.3 16.6 33.2 38.8 39.8 64H400c26.5 0 48 21.5 48 48s-21.5 48-48 48c-17.9 0-33.3-9.9-41.6-24.4-2.9-5-8.7-7.6-14.5-7.6h-33.8c-10.9 0-19 10.8-15.3 21.1 17.8 50.6 70.5 84.8 129.4 72.3 41.2-8.7 75.1-41.6 84.7-82.7C526 321.5 470.5 256 400 256z"></path></svg>
                                        <p>&nbsp;  {dataWeather.wind.speed} npm</p>
                                    </span>
                                    <span>
                                        <svg stroke="currentColor" fill="currentColor" strokeWidth="0" version="1.1" id="Layer_1" viewBox="0 0 30 30" height="53px" width="53px" xmlns="http://www.w3.org/2000/svg"><path d="M7.56,17.19c0-0.88,0.24-1.89,0.72-3.03s1.1-2.25,1.86-3.31c1.56-2.06,2.92-3.62,4.06-4.67l0.75-0.72
                                        c0.25,0.26,0.53,0.5,0.83,0.72c0.41,0.42,1.04,1.11,1.88,2.09s1.57,1.85,2.17,2.65c0.71,1.01,1.32,2.1,1.81,3.25
                                        s0.74,2.16,0.74,3.03c0,1-0.19,1.95-0.58,2.86c-0.39,0.91-0.91,1.7-1.57,2.36c-0.66,0.66-1.45,1.19-2.37,1.58
                                        c-0.92,0.39-1.89,0.59-2.91,0.59c-1,0-1.95-0.19-2.86-0.57c-0.91-0.38-1.7-0.89-2.36-1.55c-0.66-0.65-1.19-1.44-1.58-2.35
                                        S7.56,18.23,7.56,17.19z M9.82,14.26c0,0.83,0.17,1.49,0.52,1.99c0.35,0.49,0.88,0.74,1.59,0.74c0.72,0,1.25-0.25,1.61-0.74
                                        c0.35-0.49,0.53-1.15,0.54-1.99c-0.01-0.84-0.19-1.5-0.54-2c-0.35-0.49-0.89-0.74-1.61-0.74c-0.71,0-1.24,0.25-1.59,0.74
                                        C9.99,12.76,9.82,13.42,9.82,14.26z M11.39,14.26c0-0.15,0-0.27,0-0.35s0.01-0.19,0.02-0.33c0.01-0.14,0.02-0.25,0.05-0.32
                                        s0.05-0.16,0.09-0.24c0.04-0.08,0.09-0.15,0.15-0.18c0.07-0.04,0.14-0.06,0.23-0.06c0.14,0,0.25,0.04,0.33,0.12s0.14,0.21,0.17,0.38
                                        c0.03,0.18,0.05,0.32,0.06,0.45s0.01,0.3,0.01,0.52c0,0.23,0,0.4-0.01,0.52c-0.01,0.12-0.03,0.27-0.06,0.45
                                        c-0.03,0.17-0.09,0.3-0.17,0.38s-0.19,0.12-0.33,0.12c-0.09,0-0.16-0.02-0.23-0.06c-0.07-0.04-0.12-0.1-0.15-0.18
                                        c-0.04-0.08-0.07-0.17-0.09-0.24c-0.02-0.08-0.04-0.19-0.05-0.32c-0.01-0.14-0.02-0.25-0.02-0.32S11.39,14.41,11.39,14.26z
                                        M11.98,22.01h1.32l4.99-10.74h-1.35L11.98,22.01z M16.28,19.02c0.01,0.84,0.2,1.5,0.55,2c0.35,0.49,0.89,0.74,1.6,0.74
                                        c0.72,0,1.25-0.25,1.6-0.74c0.35-0.49,0.52-1.16,0.53-2c-0.01-0.84-0.18-1.5-0.53-1.99c-0.35-0.49-0.88-0.74-1.6-0.74
                                        c-0.71,0-1.25,0.25-1.6,0.74C16.47,17.52,16.29,18.18,16.28,19.02z M17.85,19.02c0-0.23,0-0.4,0.01-0.52
                                        c0.01-0.12,0.03-0.27,0.06-0.45s0.09-0.3,0.17-0.38s0.19-0.12,0.33-0.12c0.09,0,0.17,0.02,0.24,0.06c0.07,0.04,0.12,0.1,0.16,0.19
                                        c0.04,0.09,0.07,0.17,0.1,0.24s0.04,0.18,0.05,0.32l0.01,0.32l0,0.34c0,0.16,0,0.28,0,0.35l-0.01,0.32l-0.05,0.32l-0.1,0.24
                                        l-0.16,0.19l-0.24,0.06c-0.14,0-0.25-0.04-0.33-0.12s-0.14-0.21-0.17-0.38c-0.03-0.18-0.05-0.33-0.06-0.45S17.85,19.25,17.85,19.02z
                                        "></path></svg>
                                        <p>{dataWeather.main.humidity} %</p>
                                    </span>
                                    <p>Lon: {dataWeather.coord.lon}</p>
                                    <p>Lat: {dataWeather.coord.lat}</p>
                                    <p>{dataWeather.weather[0].description}</p>
                                </div>
                            </WeatherContainer>
                        )
                }

            </Container>

        </>
    )
}
