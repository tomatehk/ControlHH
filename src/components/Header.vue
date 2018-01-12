<template>
  <el-container>
    <el-header style="text-align: center; font-size: 12px">
      <el-dropdown>
        <i class="el-icon-setting white" style="margin-right: 15px"></i>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>View</el-dropdown-item>
          <el-dropdown-item>Add</el-dropdown-item>
          <el-dropdown-item>Delete</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
      <span class="white">Opciones</span>
    </el-header>
  </el-container>
</template>

<style>
.el-header {
  background-color: #409EFF;
  color: #333;
  line-height: 60px;
}

.el-aside {
  color: #333;
} 

.white {
  color:  white;
}
</style>