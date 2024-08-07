import React from "react";
import HomeSlider from "./_components/HomeSlider";
import OurAim from "./_components/OurAim";
import { getAllEvents } from "@/services/events";
import Events from "./_components/Events";
import Partners from "./_components/Partner";
import Testimonial from "./_components/Testimonial";
import Discord from "./_components/Discord";
import NumbersThatMatter from "./_components/NumbersThatMatter";
import { sendMail } from "@/lib/mail";
import { getServerSession } from "next-auth";
import Gallery from "./_components/Gallery";
import ProfileSection from "./profile/_components/ProfileSection";
import SummaryForm from "./profile/_components/_sub_components/SummaryForm";
import EducationForm from "./profile/_components/_sub_components/EducationForm";
import HomeJavaBootCamp from "@/components/Bootcamps/HomeJavaBootCamp";

const HomePage = async () => {
  const Allevents = await getAllEvents();
  let events = null;
  if(Allevents){
   events = Allevents.sort((a, b) => b.date.getTime() - a.date.getTime());
  }

  return (
    <section className="">
      <HomeSlider />
      <OurAim />
      <Events events={events!} />
      <HomeJavaBootCamp/>
      <Partners />
      <Gallery/>
      <Testimonial />
      <NumbersThatMatter />
      <Discord />
    </section>
  );
};

export default HomePage;
