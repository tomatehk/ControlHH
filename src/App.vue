<template>
  <div id="app" style="min-width: 500px">

    <!-- roter to main -->
    <router-view />
    <!-- end router to main -->

    <!-- footer -->
    <el-container style="padding: 0em">
      <el-footer style="background-color: white; height: 20px; padding: 0px; text-align: right;" class="footer-float">
        <small>Dearrollado por Brandom Bermudez || <span style="color: red">tomatehk</span></small>
      </el-footer>
    </el-container>
    <!-- end footer -->
  </div>
</template>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

.footer-float {
  z-index: 9999;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  height: 30px;
}
</style>
