<template>
  <div>
    <NavOne />
    <PageHeader title="Financial Institutions" image="/assets/images/markets.jpg" />
    <Financial />
   
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
  import Financial from "../components/Financial";
   import Gallery from "../components/Gallery";
  
  import CallToActionOne from "../components/CallToActionOne";
  export default {
    components: {
      CallToActionOne,
      Gallery,
      Financial,
      Footer,
      PageHeader,
      NavOne
    },
    head(){
      return {
        title: "ADFG | Financial"
      }
    }
  }
</script>
