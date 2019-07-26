<template>
  <div class='home'>
    <el-container>
      <el-header class="header">Header</el-header>
      <el-main>Main</el-main>
      <el-footer>Footer</el-footer>
    </el-container>
  </div>
</template>
           
<script>
export default {

}
</script>
<style lang='less' scoped>
.home {
  width: 100%;
  height: 100%;
  .header {
    width: 100%;
    height: 60px;
    background: url("../assets/bg-header.png");
  }
}
</style>