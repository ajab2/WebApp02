<template>
  <div>
    <NavOne />
    <PageHeader title="About" image="/assets/images/banner2.jpg" />
    <AboutOne />
   
    <div class="border-bottom"></div>
   
    <CallToActionOne />
    <Footer />
  </div>

</template>
<script>
  import NavOne from "../components/NavOne";
  import PageHeader from "../components/PageHeader";
  import Footer from "../components/Footer";
  import AboutOne from "../components/AboutOne";
  import TeamOne from "../components/TeamOne";
  import VideoOne from "../components/VideoOne";
  import ClientsLogoOne from "../components/ClientsLogoOne";
  import Testimonial from "../components/Testimonial";
  import CallToActionOne from "../components/CallToActionOne";
  export default {
    components: {
      CallToActionOne,
      Testimonial,
      ClientsLogoOne,
      VideoOne,
      TeamOne,
      AboutOne,
      Footer,
      PageHeader,
      NavOne
    },
    head(){
      return {
        title: "ADFG | About Us"
      }
    }
  }
</script>
