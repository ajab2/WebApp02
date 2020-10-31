<template>
  <div>
    <NavOne />
    <PageHeader title="News Details" />
    <NewsDetails />
    <Footer />
  </div>
</template>
<script>
  import PageHeader from "../components/PageHeader";
  import NavOne from "../components/NavOne";
  import Footer from "../components/Footer";
  import NewsDetails from "../components/NewsDetails";
  export default {
    components: {NewsDetails, Footer, NavOne, PageHeader},
    head(){
      return {
        title: "Kipso | News Details"
      }
    }
  }
</script>
