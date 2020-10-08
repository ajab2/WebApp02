<template>
  <div>
    <NavThree />
    <BannerThree />
    <CourseCatThree />
    <CallToActionOne />
    <TeamTab />
    <CourseThree />
    <CallToActionSix />
    <Testimonial />
    <VideoThree />
    <ClientsLogoOne />
    <CallToActionFive />
    <Footer />
  </div>
</template>
<script>
  import NavThree from "../components/NavThree";
  import Footer from "../components/Footer";
  import BannerThree from "../components/BannerThree";
  import CourseCatThree from "../components/CourseCatThree";
  import CallToActionOne from "../components/CallToActionOne";
  import TeamTab from "../components/TeamTab";
  import CourseThree from "../components/CourseThree";
  import CallToActionSix from "../components/CallToActionSix";
  import Testimonial from "../components/Testimonial";
  import VideoThree from "../components/VideoThree";
  import ClientsLogoOne from "../components/ClientsLogoOne";
  import CallToActionFive from "../components/CallToActionFive";

  export default {
    components: {
      Footer,
      NavThree,
      BannerThree,
      CourseCatThree,
      CallToActionOne,
      TeamTab,
      CourseThree,
      CallToActionSix,
      Testimonial,
      VideoThree,
      ClientsLogoOne,
      CallToActionFive,

    },
    head(){
      return{
        title: "Kipso | Home 3"
      }
    }
  }
</script>
