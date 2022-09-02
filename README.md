## Daily Market
#
#### 

Daily Market is an E-commerce application with its global state managed with ContextAPI. 

Firstly there is the log in screen with the first context(UserContext) with Name, and Balance, that are passed to the following screen.

Market is the following screen, has the Shopping Cart context and displays the products that can be added and removed to the cart which has a small icon on the top of the screen with a badge that reacts dynamically showing the number of products in the cart.

Customized hooks were used to centralize the maintenance responsibility of the context out of the components. In order to have a better performance, context provider was applied just where it was needed to be on routes.

Shopping Cart screen has the payment context, where the payment method can be chosen, with different respective fees, and they are automatically applied to the Total in the cart.

Connections among contexts were made aiming to avoid prop drilling.
#

## Project ScreenShot

#### LogIn Screen:   

![Login](/Screenshot_1.png)

#### Main Market Screen:   

![Market](/Screenshot_2.png)

#### Shopping Cart Screen:   

![Cart](/Screenshot_3.png)

#
## Installation and Setup Instructions

Clone down this repository. You will need `node` and `npm` installed globally on your machine.  

Installation:

`npm install`  

To Start Server:

`npm start`  

To Visit App:

`localhost:3000/`   
`localhost:3000/market`  
`localhost:3000/shoppingcart`  
#