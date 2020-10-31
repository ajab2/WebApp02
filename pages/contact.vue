<template>
  <div>
    <NavOne />
    <PageHeader title="Contact" image="/assets/images/markets.jpg"  />
    <Contact />
    <Footer />
  </div>
</template>
<script>
  import PageHeader from "../components/PageHeader";
  import NavOne from "../components/NavOne";
  import Footer from "../components/Footer";
  import Contact from "../components/Contact";
  export default {
    components: {Contact, Footer, NavOne, PageHeader},
    head(){
      return {
        title: "ADFG | Contact"
      }
    }
  }
</script>
