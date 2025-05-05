import { border ,Box } from '@chakra-ui/react'
import React, {useState} from 'react'
import style from './All.module.css'


import { Button, Drawer, Radio, Space } from 'antd';

const AllCard = () => {
   const [open, setOpen] = useState(false);
   const [placement, setPlacement] = useState('left');

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  const onChange = e => {
    setPlacement(e.target.value);
  };
  const imageData = [
    {
      src: 'https://static1.lenskart.com/media/desktop/img/31-jan-25/Classic/Shop%20by%20category/Classic-Eyeglasses.png',
      title: 'Classic Eyeglasses',
      price: '₹999',
    },
    {
      src:"https://static1.lenskart.com/media/desktop/img/31-jan-25/Classic/Shop%20by%20category/Classic-Eyeglasses.png",
      title: 'Stylish Sunglasses',
      price: '₹1,499',
    },
    {
      
          src:"https://static1.lenskart.com/media/desktop/img/31-jan-25/Classic/Shop%20by%20category/Classic-Eyeglasses.png",
          
          title: 'Power Sunglasses',
          price: '₹1,799',
    },
  ];



  return (
    <div>
         <Box style={{  display:"flex",justifyContent:"center" ,textAlign:"center", gap:"20px", marginTop:"10px"}} >
               <div style={{width:"120px" ,height:"50px" ,borderRadius:"12px",border:"1px solid black",boxShadow: "0px 2px 5px rgba(0,0,0,0.10)" }}> 
               <text>
                {/* <AiFillAppstore /> */}
                Buy at <br/> 
                  <span  style={{color:"blue"}} >Home</span></text>
               </div>
               <div style={{width:"120px" ,height:"50px" ,border:"1px solid black",borderRadius:"12px" ,boxShadow: "0px 2px 5px rgba(0,0,0,0.10)"}}> 
               <text>try at <br/> 
                  <span style={{color:"blue"}} >Home</span></text>
               </div>
               
               <div style={{width:"120px" ,height:"50px" ,border:"1px solid black",borderRadius:"12px" ,boxShadow: "0px 2px 5px rgba(0,0,0,0.10)"}}>
                 <text>Buy on <br/> 
                  <span  style={{color:"blue"}} >Home</span></text>
              </div>
           </Box>
        
            <Box style={{
          overflowX: "auto",
          display: "flex",
          gap: "20px",
          padding: "10px",
          scrollBehavior: "smooth",
          width: "520px",
          marginTop:"30px",
        }}>
          <li style={{
            width: "250px",
            height: "250px",
            listStyleType: "none",
            objectFit: "cover",
             flex: "0 0 auto"
            
          }}>
             <img src="https://static5.lenskart.com/media/uploads/Toddlers.gif "alt="" style={{
                 width: "100%",
                 height: "100%",
               objectFit: "cover",
              
            }} />
          </li>
          <li style={{
            width: "250px",
            height: "250px",
            listStyleType: "none",
            flex: "0 0 auto"
          }}>
            <img src="https://static5.lenskart.com/media/uploads/Juniors.gif" alt=""
             style={{
                width: "100%",
               height: "100%",
               objectFit: "cover",
               paddingTop: "-30px"
              
            }} 
             />
          </li>
          <li style={{
            width: "250px",
            height: "250px",
            listStyleType: "none",
            flex: "0 0 auto",
           
          }}>
            <img src="https://static5.lenskart.com/media/uploads/Toddlers.gif" alt="" 
             style={{
              width: "100%",
               height: "100%",
               objectFit: "cover",
              
            }}
            />
          </li>
          <li style={{
            width: "250px",
            height: "250px",
            listStyleType: "none",
            flex: "0 0 auto",
            
          }}>
            <img src="https://static5.lenskart.com/media/uploads/Juniors.gif" alt=""   
             style={{
               width: "100%",
               height: "100%",
               objectFit: "cover",
              
            }}/>
          </li>
          </Box>
           <Box style={{display:"flex",width:"100%" ,Height:"300px", border:"1px solid black" ,gap:"10px"}}>
           <Button type="text" onClick={showDrawer} style={{padding:"0" }}>
          <img
          src="https://static1.lenskart.com/media/desktop/img/31-jan-25/Classic/Shop%20by%20category/Classic-Eyeglasses.png"
          alt="Eyeglasses"
          style={{ height: '100px', width: '100px', objectFit: "cover",}}
        />
      </Button>

      <Drawer
        title="Eyewear Collection"
         placement="bottom"
         closable={true}
          onClose={onClose}
         open={open}
         height={300}
      >
     {imageData.map((item, index) => (
  <div
    key={index}
    style={{
      marginBottom: '20px',
      border: '1px solid red',
      width: '100%',
      display: 'flex',
      alignItems: 'center',
      gap: '10px',
      padding: '10px'
    }}
  >
    <img
      src={item.src}
      alt={item.title}
      style={{ width: '100px', height: 'auto' }}
    />
    <div style={{marginLeft:"30px"}}>
      <strong>{item.title}</strong>
      <div>{item.price}</div>
    </div>
    
    
  </div>
))}

       </Drawer>
           </Box>
        {/* </Box>
         <text style={{color:"blue" , fontSize:"20px" ,marginLeft:"10px" , fontFamily:"sans-serif"}}>the sunglass lens</text>
        <Box style={{display:"flex",width:"100%" ,Height:"150px", border:"1px solid black" ,gap:"10px"}}>
        <img src="https://static1.lenskart.com/media/desktop/img/31-jan-25/Classic/Shop%20by%20category/Classic-Eyeglasses.png" alt="" 
        style={{height:"100px", width:"120px"}} />
           <img src="https://static1.lenskart.com/media/desktop/img/31-jan-25/Classic/Shop%20by%20category/Classic-screen.png" alt="" style={{height:"100px", width:"120px"}} />
           <img src="https://static1.lenskart.com/media/desktop/img/31-jan-25/Classic/Shop%20by%20category/Classic-sunglasses.png" alt="" style={{height:"100px", width:"120px"}} />
           <img src= "https://static1.lenskart.com/media/desktop/img/31-jan-25/Classic/Shop%20by%20category/Classic-powersun.png" alt=""  style={{height:"100px", width:"120px"}}/>
        </Box>
        
         <text style={{color:"blue" , fontSize:"20px" ,marginLeft:"10px" , fontFamily:"sans-serif", }}>the sunglass lens</text>
        <Box style={{display:"flex",width:"100%" ,Height:"100px", border:"1px solid black" ,gap:"10px", }}>
        <img src="https://static1.lenskart.com/media/desktop/img/31-jan-25/Classic/Shop%20by%20category/Classic-Eyeglasses.png" alt="" 
        style={{height:"100px", width:"120px"}} />
           <img src="https://static1.lenskart.com/media/desktop/img/31-jan-25/Classic/Shop%20by%20category/Classic-screen.png" alt="" style={{height:"100px", width:"120px"}} />
           <img src="https://static1.lenskart.com/media/desktop/img/31-jan-25/Classic/Shop%20by%20category/Classic-sunglasses.png" alt="" style={{height:"100px", width:"120px"}} />
           <img src= "https://static1.lenskart.com/media/desktop/img/31-jan-25/Classic/Shop%20by%20category/Classic-powersun.png" alt=""  style={{height:"100px", width:"120px"}}/>
        </Box>
         <text style={{color:"blue" , fontSize:"20px" ,marginLeft:"10px" , fontFamily:"sans-serif"}}>the sunglass lens</text>
         <Box style={{display:"flex",width:"100%" ,Height:"100px", border:"1px solid black" ,gap:"10px"}}> 
          <img src="https://static1.lenskart.com/media/desktop/img/31-jan-25/Classic/Shop%20by%20category/Classic-Eyeglasses.png" alt="" 
           style={{height:"100px", width:"120px"}} />
           <img src="https://static1.lenskart.com/media/desktop/img/31-jan-25/Classic/Shop%20by%20category/Classic-screen.png" alt="" style={{height:"100px", width:"120px"}} />
           <img src="https://static1.lenskart.com/media/desktop/img/31-jan-25/Classic/Shop%20by%20category/Classic-sunglasses.png" alt="" style={{height:"100px", width:"120px"}} />
           <img src= "https://static1.lenskart.com/media/desktop/img/31-jan-25/Classic/Shop%20by%20category/Classic-powersun.png" alt=""  style={{height:"100px", width:"120px"}}/>
        </Box>
          <Box style={{display:"flex",width:"100%" ,Height:"100px", border:"1px solid black" ,gap:"10px"}}> 
          <img src="https://static1.lenskart.com/media/desktop/img/31-jan-25/Classic/Shop%20by%20category/Classic-Eyeglasses.png" alt="" 
           style={{height:"100px", width:"120px"}} />
           <img src="https://static1.lenskart.com/media/desktop/img/31-jan-25/Classic/Shop%20by%20category/Classic-screen.png" alt="" style={{height:"100px", width:"120px"}} />
           <img src="https://static1.lenskart.com/media/desktop/img/31-jan-25/Classic/Shop%20by%20category/Classic-sunglasses.png" alt="" style={{height:"100px", width:"120px"}} />
           <img src= "https://static1.lenskart.com/media/desktop/img/31-jan-25/Classic/Shop%20by%20category/Classic-powersun.png" alt=""  style={{height:"100px", width:"120px"}}/>
        </Box> */}
       
    </div>
  )
}

export default AllCard