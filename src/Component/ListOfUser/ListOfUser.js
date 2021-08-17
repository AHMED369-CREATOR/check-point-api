import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export const User = ({ user }) => {
    return (
        <div>
            <h2> Name: {user.name}</h2>
            <h2>Last Name: {user.username}</h2>
            <h3>Address: {user.address.street} {user.address.city}</h3>
            <h3>Phone : {user.phone}</h3>

        </div>
    )
}
import {
  faAt,
  faMapMarkerAlt,
  faMobileAlt,
  faGlobe,
  faBuilding,
} from "@fortawesome/free-solid-svg-icons";
import React from "react";
import { Card } from "react-bootstrap";

const User = ({ userData }) => {
  return (
    <div>
      <Card style={{ width: "100%" , backgroundColor:'#eeeeee' }}>
        <Card.Body>
          <h4 className="Name">   {userData.name} </h4>
          <Card.Subtitle className="mb-2 text-muted ">
            <FontAwesomeIcon icon={faAt} color="#80deea" />
            {"  "}
            {userData.email}
          </Card.Subtitle>

          <Card.Text>
            <span>
              {" "}
              <FontAwesomeIcon icon={faMapMarkerAlt} color="#80deea" /> {"  "}
              {userData.address.street} {userData.address.suite}{" "}
              {userData.address.city} {userData.address.zipcode}{" "}
              {userData.address.geo.lat} {userData.address.geo.lng}
            </span>
            <div>
              <FontAwesomeIcon icon={faMobileAlt} color="#80deea" />
              {"  "}
              {userData.phone}
            </div>
            <div>
              <FontAwesomeIcon icon={faGlobe} color="#80deea" />
              {"  "}
              {userData.website}
            </div>
            <div>
              <FontAwesomeIcon icon={faBuilding} color="#80deea" />
              {"  "}
              {userData.company.name}
            </div>
            <div >
              {" "}
              <span className="name-2">Bs : </span>
              {userData.company.bs}
            </div>
            <div className="special">
              <span className="name-2"> </span>
              {userData.company.catchPhrase}
            </div>
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default User;