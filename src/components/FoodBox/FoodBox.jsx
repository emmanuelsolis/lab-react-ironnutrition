import React from 'react'
import {Card, Col, Button} from 'antd'

const FoodBox = (props) => {
    const {name, servings, calories, image, deleteFood} = props
    console.log("Props: ", props)
    // const sumaCalories = calories * servings;
    return (
      /* ITERATION 1 */
      // <div>
      //   {
      //     <li>
      //       <div >
      //         <p>{name}</p>
      //       </div>
      //       <div>
      //         <img src={image} alt="name" style={{width:'200px', height:'200px'}}/>
      //       </div><hr />
      //     </li>
      //   }
      // </div>
      /* ITERATION 2 */
        <Col>
          <Card title={name} style={{ width: 230, height: 300, margin: 10 }} >
            <img src={image} height={60} alt="food" />
            <p>Calories: {calories}</p>
            <p>Servings:{servings}</p>
            <p>
              <b>Total Calories: {+calories * servings} </b> kcal
            </p>
            <Button  onClick={(event)=> deleteFood(name)} type="primary">
                {' '}
                 Delete{' '} 
            </Button>
          </Card>
        </Col>
    )
}

export default FoodBox
