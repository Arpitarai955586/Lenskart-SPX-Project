import React, { useContext } from "react";
import Login from "../../Pages/Login/Login";
import Signup from "../../Pages/Signup/Signup";
import { AuthContext } from "../../ContextApi/AuthContext";
import { Link, Navigate } from "react-router-dom";
import { HamburgerIcon  } from "@chakra-ui/icons";
import style from './nav.module.css'
import {
  DrawerCloseButton,
  Button,
  Box,
  useDisclosure,
  HStack,
  Image,
  Input,
  Drawer,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerFooter,
  DrawerBody,
  Heading,
  Avatar,
  Text,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Flex
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { IoSearch } from "react-icons/io5";
import { FaInstagram } from "react-icons/fa";
import { Tabs } from 'antd';
import { FaGlasses, FaChild, FaSearch } from 'react-icons/fa';
// import FooterPhone from "./FooterPhone";
import ClassicCard from "./ClassicCard";
import EssentialCard from "./EssentialCard";
import PremiumCard from "./PremiumCard";
import ExclusiveCard from "./ExclusivCard";
import HustrilCard from "./HustrilCard";
import ForYouCard from "./ForYouCard";
import SunGlassCard from "./SunGlassCard";
import ContactGlassCard from "./ContactGlassCard";
import SceanGlassCard from "./SceanGlassCard";
import KidsGlassCard from "./KidsGlassCard";
import ReaderGlassCard from "./ReaderGlassCard";
import { AiFillAppstore } from "react-icons/ai";
import AllCard from "./AllCard";
import FooterPhone from "./FooterPhone";
// import {  Grid, Center } from "@chakra-ui/react";

function Nav() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const firstField = React.useRef();
  const { isAuth, setisAuth, Authdata } = useContext(AuthContext);
  const navigate = useNavigate();
  const onChange = (key) => {
  console.log(key);
};

const items = [
  {
    key: '1',
    
    label: (
      <span style={{ display: 'flex', alignItems: 'center' }}>
        <FaSearch style={{ marginRight: 5 }} />
        All
      </span>
    ),
    children:<div>
      <AllCard/>,
     <FooterPhone/>
  </div>,

  },
  {
    key: '2',
    label: '🕶️ Classic',
    children: <div>
       <ClassicCard/>,
        <FooterPhone/>
     </div>,
   },
  {
    key: '3',
    label: '📦 Essentials',
    children:  <div>
    <EssentialCard/>,
     <FooterPhone/>
  </div>,
  },
  {
    key: '4',
    label: '💎 Premium',
    children: <div>
       <PremiumCard/>,
       <FooterPhone/>
  </div>,
  },
  {
    key: '5',
    label: '🌟 Exclusive',
    children: <div>
    <ExclusiveCard/>,
    <FooterPhone/>
       </div>,
  },
  {
    key: '6',
    label: '🔥 Hustir',
    children:  <div>
        <HustrilCard/>,
        <FooterPhone/>
       </div>,
  },
  {
    key: '7',
    label: '❤️ For you',
    children: <div>
        <ForYouCard/>,
        <FooterPhone/>
      </div>,
  },
  {
    key: '8',
   
    label: (
      <span style={{ display: 'flex', alignItems: 'center' }}>
       <FaGlasses style={{ marginRight: 5 }} />
       Sunglass
      </span>
    ),
    children:<div>
    <SunGlassCard/>,
    <FooterPhone/>
  </div>,
  },
  {
    key: '9',
    label: '👁️ Contact Lens',
    children:<div>
         <ContactGlassCard/>,
         <FooterPhone/>
     </div>,
  },
  {
    key: '10',
    label: '💻 Screen Glass',
    children: <div>
         <SceanGlassCard/>,
         <FooterPhone/>
       </div>,
  },
  {
    key: '11',
    label: (
      <span style={{ display: 'flex', alignItems: 'center' }}>
        <FaChild style={{ marginRight: '6px' }} />
        Kids
      </span>
    ),
    children: <div>
      <KidsGlassCard/>,
       <FooterPhone/>
  </div>,
  },
  {
    key: '12',
    label: '📖 Readers',
    children:  <div>
    <ReaderGlassCard/>,
     <FooterPhone/>
    </div>,
  },
];
    
  return (
    <Box
      display={{ lg: "inherit", xl: "none" }}
      cursor="pointer"
      bg="#fbf9f7"
      p={2.5}
    >
      <HStack m="auto" justifyContent="space-between">
        <Box w={{ lg: "20%", md: "20%", sm: "22%", base: "30%" }}>
          <Link to="/">
            <Image
              src="/assets/images/logo3.png"
              alt="logo"
              w={{ lg: "75%", md: "100%", sm: "100%", base: "100%" }}
            />
          </Link>
        </Box>
        <Box w="70%" display={{ sm: "inherit", base: "none" }}>
          <Input
            placeholder="What are you looking for"
            border="1px solid black"
            w="90%"
            fontSize="16px"
            h="35px"
          />
        </Box>

        <Box>
        <Button colorScheme="white" style={{color:"#000"}} p="0" onClick={onOpen}>
            <i className="bi bi-heart" style={{ fontSize: "20px", marginRight:"20px" }} ></i>
          </Button>
          <Button colorScheme="white" style={{color:"#000"}} p="0" onClick={onOpen}>
            <i className="bi bi-bag" style={{ fontSize: "20px", marginRight:"20px"}}></i>
          </Button>
          <Button colorScheme="white" p="0" onClick={onOpen} style={{color:"black"}}>
            <HamburgerIcon fontSize="20px" />
          </Button>
          
          <Drawer
            size="xs"
            isOpen={isOpen}
            placement="right"
            initialFocusRef={firstField}
            onClose={onClose}
          >
            <DrawerOverlay />
            <DrawerContent color="blackAlpha.900">
              <DrawerCloseButton />
              <DrawerHeader bg="whiteAlpha.900">
                {isAuth ? (
                  <Flex
                    borderBottom="2px solid #18CFA8"
                    p="5%"
                    direction="column"
                    justifyContent="center"
                    alignItems="center"
                    w="100%"
                  >
                    <Flex w="100%">
                      <Avatar
                        src="https://bit.ly/broken-link"
                        size="lg"
                        mr="2"
                      />
                      <Flex
                        direction="column"
                        justifyContent="center"
                        alignItems="flex-start"
                      >
                        <Text mt="10px" fontSize="20px" color="blackAlpha.900">
                          {Authdata[0].first_name}
                        </Text>
                        
                        <Text color="gray.500" mt="5%" fontSize="sm">
                          Enjoy Buy 1 Get 1 offer for 365 days
                        </Text>
                      </Flex>
                    </Flex>
                    <Button
                      w="100%"
                      h="35px"
                      mt="5%"
                      colorScheme="blue"
                      fontSize="15px"
                      _hover={{ bg: "blue.400" }}
                    >
                      GET GOLD MEMBERSHIP
                    </Button>
                  </Flex>
                ) : (
                  <Box
                    style={{
                      padding: "5%",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      alignItems: "center",
                      width: "100%"
                    }}
                  >
                    <Box
                      style={{
                        width: "100%",
                        display: "flex",
                        justifyContent: "space-evenly",
                        marginBottom: "-6%"
                      }}
                    >
                      <Box
                        bg="blue.500"
                        p="10px 15px"
                        rounded="lg"
                        _hover={{ bg: "blue.200" }}
                      >
                        <Login />
                      </Box>
                      <Box
                        bg="blue.500"
                        p="10px 15px"
                        rounded="lg"
                        _hover={{ bg: "blue.200" }}
                      >
                        <Signup />
                      </Box>
                    </Box>
                  </Box>
                )}
              </DrawerHeader>
              <DrawerBody borderBottomWidth="1px" bg="whiteAlpha.900">
                <Box display="flex" flexDirection="column" fontSize="16px">
                  <Link to="/orderhistory">
                    <Box
                      borderBottom="0.1px solid gray"
                      fontSize="15px"
                      p="4% 0%"
                      color="black"
                      _hover={{ fontWeight: "bold" }}
                      onClick={() => navigate("/orderhistory")}
                    >
                      My Orders
                    </Box>
                  </Link>
                  <Link to="/cart">
                    <Box
                      borderBottom="0.1px solid gray"
                      fontSize="15px"
                      p="4% 0%"
                      color="black"
                      _hover={{ fontWeight: "bold" }}
                    >
                      Cart
                    </Box>
                  </Link>
                  <Link to="/wishlist">
                    <Box
                      borderBottom="0.1px solid gray"
                      fontSize="15px"
                      p="4% 0%"
                      color="black"
                      _hover={{ fontWeight: "bold" }}
                    >
                      Wishlist
                    </Box>
                  </Link>
                  <Link>
                    <Box
                      borderBottom="0.1px solid gray"
                      fontSize="15px"
                      p="4% 0%"
                      color="black"
                      _hover={{ fontWeight: "bold" }}
                    >
                      Manage Notification
                    </Box>
                  </Link>
                  <Link>
                    <Box
                      borderBottom="1px solid white"
                      fontSize="15px"
                      p="4% 0%"
                      color="black"
                      _hover={{ fontWeight: "bold" }}
                    >
                      Contact Us
                    </Box>
                  </Link>
                </Box>

                <Heading mt="15%" color="black" fontSize="15px" mb="5%">
                  SHOP NOW
                </Heading>
                <Box display="flex" flexDirection="column" fontSize="16px">
                  <Accordion defaultIndex={[0]} allowMultiple w="100%" m="auto">
                    <AccordionItem>
                      <h2>
                        <AccordionButton>
                          <Box
                            as="span"
                            flex="1"
                            textAlign="left"
                            fontWeight="500"
                          >
                            Men
                          </Box>
                          <AccordionIcon />
                        </AccordionButton>
                      </h2>
                      <AccordionPanel pb={4}>
                        <Link to="/products">
                          <Box>
                            <Text pb="2">EYEGLASSES</Text>
                            <Text pb="2">COMPUTER GLASSES</Text>
                            <Text pb="2">CONTACT LENSES</Text>
                            <Text pb="2">SUN GLASSES</Text>
                          </Box>
                        </Link>
                      </AccordionPanel>
                    </AccordionItem>
                    <AccordionItem>
                      <h2>
                        <AccordionButton>
                          <Box
                            as="span"
                            flex="1"
                            textAlign="left"
                            fontWeight="500"
                          >
                            Women
                          </Box>
                          <AccordionIcon />
                        </AccordionButton>
                      </h2>
                      <AccordionPanel pb={5}>
                        <Link to="/products">
                          <Box>
                            <Text pb="2">EYEGLASSES</Text>
                            <Text pb="2">COMPUTER GLASSES</Text>
                            <Text pb="2">CONTACT LENSES</Text>
                            <Text pb="2">SUN GLASSES</Text>
                          </Box>
                        </Link>
                      </AccordionPanel>
                    </AccordionItem>
                    <AccordionItem>
                      <h2>
                        <AccordionButton>
                          <Box
                            as="span"
                            flex="1"
                            textAlign="left"
                            fontWeight="500"
                          >
                            Kids
                          </Box>
                          <AccordionIcon />
                        </AccordionButton>
                      </h2>
                      <AccordionPanel pb={4}>
                        <Link to="/products">
                          <Box>
                            <Text pb="2">EYEGLASSES</Text>
                            <Text pb="2">COMPUTER GLASSES</Text>
                            <Text pb="2">CONTACT LENSES</Text>
                            <Text pb="2">SUN GLASSES</Text>
                          </Box>
                        </Link>
                      </AccordionPanel>
                    </AccordionItem>
                  </Accordion>
                </Box>
                <Heading mt="15%" color="black" fontSize="15px" mb="5%">
                  Our Services
                </Heading>
                <Box display="flex" flexDirection="column" fontSize="16px">
                  <Link>
                    <Box
                      borderBottom="0.1px solid gray"
                      p="5% 0%"
                      fontSize="15px"
                      color="black"
                      _hover={{ fontWeight: "bold" }}
                    >
                      Free Home Trail
                    </Box>
                  </Link>
                  <Link>
                    <Box
                      borderBottom="0.1px solid gray"
                      p="5% 0%"
                      color="black"
                      _hover={{ fontWeight: "bold" }}
                      fontSize="15px"
                    >
                      Home Eye check-up
                    </Box>
                  </Link>
                  <Link>
                    <Box
                      borderBottom="0.1px solid gray"
                      p="5% 0%"
                      color="black"
                      _hover={{ fontWeight: "bold" }}
                      fontSize="15px"
                    >
                      Store Locator
                    </Box>
                  </Link>
                </Box>
                <Heading mt="15%" color="black" mb="5%" fontSize="15px">
                  HIGHLIGHTS
                </Heading>
                <Box display="flex" flexDirection="column" fontSize="16px">
                  <Link>
                    <Box
                      borderBottom="0.1px solid gray"
                      p="5% 0%"
                      color="black"
                      _hover={{ fontWeight: "bold" }}
                      fontSize="15px"
                    >
                      Check Frame Size
                    </Box>
                  </Link>
                  <Link>
                    <Box
                      borderBottom="0.1px solid gray"
                      p="5% 0%"
                      color="black"
                      _hover={{ fontWeight: "bold" }}
                      fontSize="15px"
                    >
                      Gold Membership
                    </Box>
                  </Link>
                  <Link>
                    <Box
                      borderBottom="0.1px solid gray"
                      p="5% 0%"
                      color="black"
                      _hover={{ fontWeight: "bold" }}
                      fontSize="15px"
                    >
                      Try Frames in 3D
                    </Box>
                  </Link>
                  <Link>
                    <Box
                      borderBottom="1px solid white"
                      p="5% 0%"
                      color="black"
                      _hover={{ fontWeight: "bold" }}
                      fontSize="15px"
                    >
                      Dowloads Apps
                    </Box>
                  </Link>
                </Box>
                <Heading mt="15%" color="black" fontSize="15px" mb="5%">
                  FAQ's & POLICIES
                </Heading>
                <Box display="flex" flexDirection="column" fontSize="16px">
                  <Link>
                    <Box
                      borderBottom="0.1px solid gray"
                      p="5% 0%"
                      color="black"
                      _hover={{ fontWeight: "bold" }}
                      fontSize="15px"
                    >
                      Frequently Asked Questions
                    </Box>
                  </Link>
                  <Link>
                    <Box
                      borderBottom="0.1px solid gray"
                      p="5% 0%"
                      color="black"
                      _hover={{ fontWeight: "bold" }}
                      fontSize="15px"
                    >
                      Cancellation & Return Policy
                    </Box>
                  </Link>
                  <Link>
                    <Box
                      p="5% 0%"
                      color="black"
                      _hover={{ fontWeight: "bold" }}
                      fontSize="15px"
                    >
                      Cobrowsing
                    </Box>
                  </Link>
                </Box>

                <Accordion allowMultiple></Accordion>
              </DrawerBody>
              {isAuth && (
                <DrawerFooter bg="whiteAlpha.900">
                  <Button
                    mt="5%"
                    fontSize="18px"
                    colorScheme="blue"
                    borderBottom="1px solid #526171"
                    p="6% 15%"
                    _hover={{ bg: "blue.200" }}
                    onClick={() => {
                      setisAuth(false);
                      return <Navigate to="/" />;
                    }}
                  >
                    Sign Out
                  </Button>
                </DrawerFooter>
              )}
            </DrawerContent>
          </Drawer>
        </Box>
      </HStack>
    <Box
      className={style.searchbar}
      w={{ base: "95%", sm: "70%" }}
      display={{ base: "block", md: "none" }}
      border="1px solid black"
      m="2"
      position="sticky"
      bottom="0"
      borderRadius="10"
      p="2"
      bg="white"
    >
      <Flex align="center" justify="space-between" gap={2}>
        
        {/* Left Icon */}
        <IoSearch size={25} />

        {/* Input field */}
        <input
          type="text"
          placeholder="Enter the no"
          className={style.input}
          style={{ flexGrow: 1, margin: "0 10px",border: "none",
            outline: "none",}}
        />

        {/* Right Icon */}
        <FaInstagram  size={25} />
      </Flex>
    </Box>
    <Box>
    <Tabs defaultActiveKey="1" items={items} onChange={onChange} />
    </Box>
     
 
      
    </Box>
  );
}

export default Nav;
