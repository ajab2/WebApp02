<template>
  <header class="site-header site-header__header-two ">
      <nav class="navbar navbar-expand-lg navbar-light header-navigation stricky">
          <div class="container clearfix">
              <!-- Brand and toggle get grouped for better mobile display -->
              <div class="logo-box clearfix">
                  <a class="navbar-brand" href="/">
                      <img src="/assets/images/logo-dark.png" class="main-logo" width="128" alt="Awesome Image" />
                  </a>
                  <button class="menu-toggler" data-target=".main-navigation">
                      <span class="kipso-icon-menu"></span>
                  </button>
                  <form action="#" class="header__search-form">
                      <input type="text" placeholder="Search courses">
                      <button type="submit"><i class="kipso-icon-magnifying-glass"></i>
                          <!-- /.kipso-icon-magnifying-glass --></button>
                  </form>
              </div><!-- /.logo-box -->
              <!-- Collect the nav links, forms, and other content for toggling -->
            <div class="main-navigation">
                                          <ul class=" navigation-box">
                                              <li class="current">
                                                  <a href="/">Home</a>
                                                  <ul class="sub-menu">
                                                      <li><a href="/">Home 01</a></li>
                                                      <li><a href="/index-2">Home 02</a></li>
                                                      <li><a href="/index-3">Home 03</a></li>
                                                      <li><a href="#">Header Versions</a>
                                                          <ul class="sub-menu">
                                                              <li><a href="/">Header 01</a></li>
                                                              <li><a href="/index-2">Header 02</a></li>
                                                              <li><a href="/index-3">Header 03</a></li>
                                                          </ul><!-- /.sub-menu -->
                                                      </li>
                                                  </ul><!-- /.sub-menu -->
                                              </li>
                                              <li>
                                                  <a href="#">Pages</a>
                                                  <ul class="sub-menu">
                                                      <li><nuxt-link to="/about">About Page</nuxt-link></li>
                                                      <li><nuxt-link to="/gallery">Gallery</nuxt-link></li>
                                                      <li><nuxt-link to="/pricing">Pricing Plans</nuxt-link></li>
                                                      <li><nuxt-link to="/faq">FAQ'S</nuxt-link></li>
                                                  </ul><!-- /.sub-menu -->
                                              </li>
                                              <li>
                                                  <nuxt-link to="/courses">Courses</nuxt-link>
                                                  <ul class="sub-menu">
                                                      <li><nuxt-link to="/courses">Courses</nuxt-link></li>
                                                      <li><nuxt-link to="/course-details">Course Details</nuxt-link></li>
                                                  </ul><!-- /.sub-menu -->
                                              </li>
                                              <li>
                                                  <nuxt-link to="/teachers">Teachers</nuxt-link>
                                                  <ul class="sub-menu">
                                                      <li><nuxt-link to="/teachers">Teachers</nuxt-link></li>
                                                      <li><nuxt-link to="/teacher-details">Teachers Details</nuxt-link></li>
                                                      <li><nuxt-link to="/become-teacher">Become Teacher</nuxt-link></li>
                                                  </ul><!-- /.sub-menu -->
                                              </li>
                                              <li>
                                                  <nuxt-link to="/news">News</nuxt-link>
                                                  <ul class="sub-menu">
                                                      <li><nuxt-link to="/news">News Page</nuxt-link></li>
                                                      <li><nuxt-link to="/news-details">News Details</nuxt-link></li>
                                                  </ul><!-- /.sub-menu -->
                                              </li>
                                              <li>
                                                  <nuxt-link to="/contact">Contact</nuxt-link>
                                              </li>
                                          </ul>
                                      </div><!-- /.navbar-collapse -->
              <div class="right-side-box">
                  <div class="header__social">
                      <a href="#"><i class="fab fa-twitter"></i></a>
                      <a href="#"><i class="fab fa-facebook-square"></i></a>
                      <a href="#"><i class="fab fa-pinterest-p"></i></a>
                      <a href="#"><i class="fab fa-instagram"></i></a>
                  </div><!-- /.header__social -->
              </div><!-- /.right-side-box -->
          </div>
          <!-- /.container -->
      </nav>
      <div class="site-header__decor">
          <div class="site-header__decor-row">
              <div class="site-header__decor-single">
                  <div class="site-header__decor-inner-1"></div><!-- /.site-header__decor-inner -->
              </div><!-- /.site-header__decor-single -->
              <div class="site-header__decor-single">
                  <div class="site-header__decor-inner-2"></div><!-- /.site-header__decor-inner -->
              </div><!-- /.site-header__decor-single -->
              <div class="site-header__decor-single">
                  <div class="site-header__decor-inner-3"></div><!-- /.site-header__decor-inner -->
              </div><!-- /.site-header__decor-single -->
          </div><!-- /.site-header__decor-row -->
      </div><!-- /.site-header__decor -->
  </header>
</template>

<script>
    export default {
        name: "NavTwo"
    }
</script>

<style scoped>

</style>
