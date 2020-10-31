<template>
  <div>
    <NavOne />
    <PageHeader title="Become a Teacher" />
    <BecomeTeacher />
    <TeamOne />
    <Footer />
  </div>
</template>
<script>

  import PageHeader from "../components/PageHeader";
  import NavOne from "../components/NavOne";
  import Footer from "../components/Footer";
  import BecomeTeacher from "../components/BecomeTeacher";
  import TeamOne from "../components/TeamOne";
  export default {
    components: {TeamOne, BecomeTeacher, Footer, NavOne, PageHeader},
    head(){
      return {
        title: "Kipso | Become Teacher"
      }
    }
  }
</script>
