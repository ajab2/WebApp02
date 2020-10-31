<template>
  <div>
    <NavTwo />
    <BannerTwo />
    <CourseCatTwo />
    <AboutOne />
    <CourseTwo />
    <TeamOne />
    <Pricing />
    <Meeting />
    <CallToActionTwo />
    <BlogHome />
    <Footer />
  </div>
</template>
<script>
  import NavTwo from "../components/NavTwo";
  import Footer from "../components/Footer";
  import BannerTwo from "../components/BannerTwo";
  import CourseCatTwo from "../components/CourseCatTwo";
  import AboutOne from "../components/AboutOne";
  import CourseTwo from "../components/CourseTwo";
  import TeamOne from "../components/TeamOne";
  import Pricing from "../components/Pricing";
  import Meeting from "../components/Meeting";
  import CallToActionTwo from "../components/CallToActionTwo";
  import BlogHome from "../components/BlogHome";
  export default {
    components: {
      BlogHome,
      CallToActionTwo,
      Meeting,
      Pricing,
      TeamOne,
      CourseTwo,
      AboutOne,
      CourseCatTwo,
      BannerTwo,
      Footer,
      NavTwo
    },
    head(){
      return{
        title: "Kipso | Home 2"
      }
    }
  }
</script>
