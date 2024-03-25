"use client";
import Image from "next/image";
import hero from '@/public/Dribble.gif';
import styles from './holi.module.css';
import holiup from '@/public/holiUp.png';
import holiDown from '@/public/holiDown.png';
import {useState} from "react";
import {FaWhatsapp} from "react-icons/fa";
import {AiOutlineWhatsApp} from "react-icons/ai";
import {Box, TextField} from "@mui/material";
import {AnimatePresence, motion} from "framer-motion";
import PageWrapper from "@/app/PageWrapper";


export default function Home() {
    const [name, setName] = useState('');

    const holiQuote = `${name} wishes you a Holi filled with joy, love, and vibrant colors. May this festival bring happiness and peace to your life. Have a wonderful and colorful Holi!`;

    const sendWhatsAppMessage = () => {
        const encodedQuote = encodeURIComponent(holiQuote);
        const whatsappUrl = `https://wa.me/?text=${encodedQuote}`;
        window.open(whatsappUrl, '_blank');
    };
  return (
      <PageWrapper>
      <AnimatePresence>

    <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.8 }}
        className={`relative  md:h-[100vh] `}>
        <img src={holiup.src} alt={"holi background"}  className={`absolute top-0 md:h-56 h-32 z-0 bg-transparent`}/>

      <motion.div className={`flex md:flex-row flex-col-reverse pt-20 z-10`}>

          <motion.div
              initial={{ y: 50, opacity: 0,scale:0 }}
              animate={{ y: 0, opacity: 1,scale:1 }}
              exit={{ y: 50, opacity: 0,scale:0 }}
              transition={{ delay: 0.4 }} className={`md:w-1/2 flex flex-col justify-center items-center p-5 md:pl-44 md:mb-0 mb-32`}>

              <h2 className={`w-full text-4xl text-slate-500`}>Use Organic</h2>
              <h2 className={`${styles.mainHead} w-full tracking-tighter`}>Colors This Holi</h2>
              <p className={`text-slate-400`}>Kuldeep Kushwaha wishes you a Holi filled with joy, love, and vibrant
                  colors. May this festival bring happiness and peace to your life. Have a wonderful and colorful
                  Holi!</p>

              <div className={`flex mt-10 gap-3  w-full `}>

                  <button className={`${styles.myBtn} p-3 flex justify-center items-center text-white md:gap-2 transition hover:scale-105  active:scale-90  delay-75`}
                          onClick={sendWhatsAppMessage}><AiOutlineWhatsApp size={25} className={`bg-transparent`}/>Send
                      to WhatsApp
                  </button>

                  <TextField
                      className={`w-1/2`}
                      id="standard-textarea"
                      label="Name :"
                      placeholder="Enter name of receiver"
                      multiline
                      focused
                      variant="standard"
                      value={name}
                      onChange={(e) => setName(e.target.value)}

                  />


              </div>

          </motion.div>
          <div className={`w-full md:w-1/2`}>
              <Image src={hero} alt={'Holi Animation'} priority/>
          </div>
      </motion.div>
        <img src={holiDown.src} alt={"Holi down"} className={`absolute bottom-0 right-0 md:h-56 h-32 bg-transparent`}/>
    </motion.div>
      </AnimatePresence>
      </PageWrapper>
  );
}
