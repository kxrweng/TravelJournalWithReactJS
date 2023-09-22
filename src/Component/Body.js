import React from 'react';

export default function Body(props) {
    return (
        // <div className = "body-div">
        //   <div className = "img-div">
        //   <img src = "/australia.jpg" className = "place-img"/>
        //   </div>
        //   <div className = "info-div">
        //     <div className = "first-row-div">
        //     <img src = "/marked-logo.png" className = "marked-logo"></img>
        //     <span className = "country-name">JAPAN</span>
        //     <a href = "https://www.google.com/maps/place/Mount+Fuji,+Kitayama,+Fujinomiya,+Shizuoka+418-0112,+Japan/data=!4m2!3m1!1s0x6019629a42fdc899:0xa6a1fcc916f3a4df!5m1!1e4?sa=X&ved=2ahUKEwjE5uSi2r2BAxU7UGwGHXTyB6MQ8gF6BAgVEAA&ved=2ahUKEwjE5uSi2r2BAxU7UGwGHXTyB6MQ8gF6BAgWEAI"
        //     target = "_blank">View on Google Maps</a>
        //     </div>
        //     <div className = "second-row-div">
        //       <h1 className = "location-name">Mount Fuji</h1>
        //     </div>

        //     <div className = "third-row-div">
        //       <h4 className = "date-info">12 Jan 2021 - 24 Jan 2021</h4>
        //     </div>

        //     <div className = "fourth-row-div">
        //       Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists.
        //     </div>
        //   </div>
        // </div>

        <div className = "body-div">
        <div className = "img-div">
        <img src = {props.img} className = "place-img"/>
        </div>
        <div className = "info-div">
          <div className = "first-row-div">
          <img src = "/marked-logo.png" className = "marked-logo"></img>
          <span className = "country-name">{props.countryName}</span>
          <a href = {props.locationLink}
          target = "_blank">View on Google Maps</a>
          </div>
          <div className = "second-row-div">
            <h1 className = "location-name">{props.locationName}</h1>
          </div>

          <div className = "third-row-div">
            <h4 className = "date-info">{props.dateInfo}</h4>
          </div>

          <div className = "fourth-row-div">
            {props.locationInfo}
          </div>
        </div>
      </div>
    );
}