// import React from 'react'
// import Row from 'react-bootstrap/Row'
// import Col from 'react-bootstrap/Col'

// import Container from 'react-bootstrap/Container'
// import i10 from  '../images/i10.jpg'
// import i5 from  '../images/i5.png'


// import i9 from  '../images/i9.jpg'



// import Card from "../Components/Card";


// class Carousel extends React.Component{
//     constructor(props){
//         super(props)
//         this.state={
        
//             items : [

//                 {
//                     id :0,
//                     title :'CodeChef',
//                     imgSrc:i10,
//                     link:'https://www.codechef.com/users/aryanmonger_20',
//                     selected :false
//                 },
//                 {
//                     id:1,
//                     title :'Git-Hub Profile',
//                     imgSrc:i9,
//                     link:'https://github.com/aryanmonger20',
//                     selected:false
//                 },
//                 {
//                     id:2,
//                     title: 'HackerEarth',
//                     imgSrc:i5,
//                   link:'https://www.hackerearth.com/@aryangupta007yo',
//                     selected:false
//                 }
//             ]
//         }
//     }




// handleCardClick =(id,card) => {
//     let items =[...this.state.items];
//     items[id].selected =items[id].selected?false:true;
   
//     items.forEach(item =>
//         {
//             if(item.id!==id)
//             {
//                 item.selected=false
            
//             }
//         })

//         this.setState({
//             items
//         })
//     }
      
    
    
    
//     makeitems =(items)=>{
//            return items.map(item=>{
//             return<Card item={item} click={(e => this.handleCardClick(item.id,e))} key={item.id}/>
//         })
//         }


// render() {
//     return(
//         <Container fluid ={true}>
//           <Col className='justify-content-around d-inline-block '>
//               {this.makeitems(this.state.items)}
//           </Col>
//         </Container>
//     )
//            }
// }
// export default Carousel