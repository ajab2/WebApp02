<template>
  <div>
    <NavOne />
    <PageHeader title="Education & STEM" image="/assets/images/markets.jpg" />
    <Education />
   
    <div class="border-bottom"></div>
    <Gallery />
    <CallToActionOne />
    <Footer />
  </div>

</template>
<script>
  import NavOne from "../components/NavOne";
  import PageHeader from "../components/PageHeader";
  import Footer from "../components/Footer";
  import Education from "../components/Education";
   import Gallery from "../components/Gallery";
  
  import CallToActionOne from "../components/CallToActionOne";
  export default {
    components: {
      CallToActionOne,
      Gallery,
      Education,
      Footer,
      PageHeader,
      NavOne
    },
    head(){
      return {
        title: "ADFG | Education"
      }
    }
  }
</script>
