import React from "react";
import { Card, Image, Icon } from "semantic-ui-react";

const PropertyCard = (props) => (
  <Card>
    <Image
      src="https://static.dezeen.com/uploads/2020/02/house-in-the-landscape-niko-arcjitect-architecture-residential-russia-houses-khurtin_dezeen_2364_hero.jpg"
      wrapped
      ui={false}
    />
    <Card.Content>
      <Card.Header>${props.price}</Card.Header>
      <Card.Meta>{props.sq_ft}sqft</Card.Meta>
    </Card.Content>
    <Card.Content extra>
      <Icon name="bed" />
      {props.beds}
      <Icon name="bath" />
      {props.baths}
    </Card.Content>
  </Card>
);

export default PropertyCard;