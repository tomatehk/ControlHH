<template>
  <div>
    <el-container>
      <el-header style="text-align: right; font-size: 20px; color: white" id="elheader">
        <b><i class="el-icon-tickets"></i> ControlHH</b>
      </el-header>
    </el-container>

    <el-container>
      <el-aside class="menu">
        <el-menu default-active="1" class="el-menu-vertical-demo">
          <el-menu-item index="1">
            <template slot="title">
              <i class="el-icon-menu"></i>
              <span slot="title">Estatus de habitaciones</span>
            </template>
          </el-menu-item>
          <el-menu-item index="2">
            <i class="el-icon-info"></i>
            <span slot="title">Información de Habitaciones</span>
          </el-menu-item>
          <el-menu-item index="3">
            <i class="el-icon-tickets"></i>
            <span slot="title">Historial</span>
          </el-menu-item>
        </el-menu>
      </el-aside>

      <el-container>
        <el-main :style="{overflow: 'scroll', height: height}">
          <el-card>
            <el-table
            :data="tableData"
            style="width: 100%">
            <el-table-column
            type="index"
            :index="indexMethod">
          </el-table-column>
          <el-table-column
          prop="date"
          label="Date"
          width="180">
        </el-table-column>
        <el-table-column
        prop="name"
        label="Name"
        width="180">
      </el-table-column>
      <el-table-column
      prop="address"
      label="Address">
    </el-table-column>
  </el-table>
</el-card>
</el-main>
</el-container>
</el-container>
</div>
</template>

<script>
  // height of the main
  export default {
    data() {
      var getHeight = () => {
        let height = window.innerHeight
        alert(document.body.scrollTop)
        return (height - 60) + 'px'
      }
      return {
        name: 'Main',
        height: getHeight(),
        tableData: [{
          date: '2016-05-03',
          name: 'Tom',
          state: 'California',
          city: 'Los Angeles',
          address: 'No. 189, Grove St, Los Angeles',
          zip: 'CA 90036',
          tag: 'Home'
        }, {
          date: '2016-05-02',
          name: 'Tom',
          state: 'California',
          city: 'Los Angeles',
          address: 'No. 189, Grove St, Los Angeles',
          zip: 'CA 90036',
          tag: 'Office'
        }, {
          date: '2016-05-04',
          name: 'Tom',
          state: 'California',
          city: 'Los Angeles',
          address: 'No. 189, Grove St, Los Angeles',
          zip: 'CA 90036',
          tag: 'Home'
        }, {
          date: '2016-05-04',
          name: 'Tom',
          state: 'California',
          city: 'Los Angeles',
          address: 'No. 189, Grove St, Los Angeles',
          zip: 'CA 90036',
          tag: 'Home'
        }, {
          date: '2016-05-04',
          name: 'Tom',
          state: 'California',
          city: 'Los Angeles',
          address: 'No. 189, Grove St, Los Angeles',
          zip: 'CA 90036',
          tag: 'Home'
        }, {
          date: '2016-05-04',
          name: 'Tom',
          state: 'California',
          city: 'Los Angeles',
          address: 'No. 189, Grove St, Los Angeles',
          zip: 'CA 90036',
          tag: 'Home'
        }, {
          date: '2016-05-04',
          name: 'Tom',
          state: 'California',
          city: 'Los Angeles',
          address: 'No. 189, Grove St, Los Angeles',
          zip: 'CA 90036',
          tag: 'Home'
        }, {
          date: '2016-05-04',
          name: 'Tom',
          state: 'California',
          city: 'Los Angeles',
          address: 'No. 189, Grove St, Los Angeles',
          zip: 'CA 90036',
          tag: 'Home'
        }, {
          date: '2016-05-04',
          name: 'Tom',
          state: 'California',
          city: 'Los Angeles',
          address: 'No. 189, Grove St, Los Angeles',
          zip: 'CA 90036',
          tag: 'Home'
        }, {
          date: '2016-05-04',
          name: 'Tom',
          state: 'California',
          city: 'Los Angeles',
          address: 'No. 189, Grove St, Los Angeles',
          zip: 'CA 90036',
          tag: 'Home'
        }, {
          date: '2016-05-04',
          name: 'Tom',
          state: 'California',
          city: 'Los Angeles',
          address: 'No. 189, Grove St, Los Angeles',
          zip: 'CA 90036',
          tag: 'Home'
        }, {
          date: '2016-05-04',
          name: 'Tom',
          state: 'California',
          city: 'Los Angeles',
          address: 'No. 189, Grove St, Los Angeles',
          zip: 'CA 90036',
          tag: 'Home'
        }, {
          date: '2016-05-04',
          name: 'Tom',
          state: 'California',
          city: 'Los Angeles',
          address: 'No. 189, Grove St, Los Angeles',
          zip: 'CA 90036',
          tag: 'Home'
        }, {
          date: '2016-05-04',
          name: 'Tom',
          state: 'California',
          city: 'Los Angeles',
          address: 'No. 189, Grove St, Los Angeles',
          zip: 'CA 90036',
          tag: 'Home'
        },
        {
          date: '2016-05-01',
          name: 'Tom',
          state: 'California',
          city: 'Los Angeles',
          address: 'No. 189, Grove St, Los Angeles',
          zip: 'CA 90036',
          tag: 'Office'
        }],
      }
    },
    methods: {
      indexMethod(index) {
        return index * 2;
      }
    }
  };
</script>

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