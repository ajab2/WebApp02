<template>
  <div>
    <NavOne />
    <PageHeader title="Coalition & Nonprofit" image="/assets/images/markets.jpg" />
    <Nonprofit />
   
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
  import Nonprofit from "../components/Nonprofit";
   import Gallery from "../components/Gallery";
  
  import CallToActionOne from "../components/CallToActionOne";
  export default {
    components: {
      CallToActionOne,
      Gallery,
      Nonprofit,
      Footer,
      PageHeader,
      NavOne
    },
    head(){
      return {
        title: "ADFG | Nonprofit"
      }
    }
  }
</script>
