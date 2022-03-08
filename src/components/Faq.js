import Collapsible from 'react-collapsible';
import "./styles/Faq.css"
import React, { useEffect } from 'react'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import AOS from 'aos';
import "aos/dist/aos.css"
import { makeStyles } from '@mui/material';




const Faq = () => {

    // const useStyles = makeStyles((theme) => ({
    //     accordianBackground:{
    //         backgroundColor:"#ab203d",
    //     }
    // }));

    // const classes = useStyles();


    useEffect(() => {
  AOS.init({
    duration : 900
  });
}, []);

  return (
    <div id='faq-section' >
        <h1>Frequently Asked Questions</h1>
        <div id='inner'>
            <div data-aos={"fade-left"}><Collapsible  className='collapse-element'  trigger="When is the pre-sale?">
                <p className='para'>
                    Mint date: March 18th, 2022.<br />
                    Mint time: 9pm PST / 11pm CST / 12am EST
                </p>
            </Collapsible></div>
            <div data-aos={"fade-left"}><Collapsible  className='collapse-element'  trigger="When is the public sale?">
                <p className='para'>
                    12 hours after the pre-sale time span.<br/>
                    Time: 9am PST / 11am CST / 12pm EST
                </p>
            </Collapsible></div>
            <div data-aos={"fade-left"}><Collapsible  className='collapse-element'  trigger="How do I get Whitelisted">
                <p className='para'>
                    It's easy to guarantee yourself a spot on the whitelist and there's no grinding or circus-style exercises required. We're now accepting the first 5,000 whitelist entrees who apply on the Website, and the first 100 people to . Anyone can join, and by joining the whitelist you're guaranteed access to the pre-sale.
                </p>
            </Collapsible></div>
            <div data-aos={"fade-left"}><Collapsible  className='collapse-element'  trigger="Who is the team?">
                <p className='para'>
                    The team is a group of diverse professionals with significant experience in social media, technology and community building. Led by CEO, Rachel Khattak, social media titan & founder of Hoenest, and COO Diego Vargas of Goat Marketing. Together they bring over a decade of experience working with world renowned brands like Netflix, Tinder, FitTea, and more.
                    Rachel & Diego assembled a devoted team of professionals to ensure value, quality, and meaningful utility. They reached out to friends and colleagues in Web3 development, community building and the NFT space. The result is a devoted team of 6 people, all of which are experts in their respective fields.
                </p>
            </Collapsible></div>
            <div data-aos={"fade-left"}><Collapsible  className='collapse-element'  trigger="How much will minting cost? How many can I mint?">
                <p className='para'>
                    Minting cost is .09 ETH. There is a limit of 10.
                </p>
            </Collapsible></div>
            <div data-aos={"fade-left"}><Collapsible  className='collapse-element'  trigger="What are the ​perks for holding a Daughters Of Crypto NFT?">
                <p className='para'>
                    For holders there will be many exciting benefits to owning a Daughters Of Crypto. From perks with our partners and IRL events to exclusive content. Other amazing utilities will be laid out <b>Timeline</b> in the .
                </p>
            </Collapsible></div>


            {/* <Accordion>
                <AccordionSummary
                
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
                >
                    <Typography className={classes.accordianBackground}>Accordion 1</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                        malesuada lacus ex, sit amet blandit leo lobortis eget.
                    </Typography>
                </AccordionDetails>
            </Accordion> */}
            
        </div>
    </div> 
    )
}

export default Faq