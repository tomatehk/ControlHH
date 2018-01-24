<template>
  <el-container style="margin-top: 60px">
    <el-main>
      <el-row>
        <el-col :xs="3" :sm="6" :md="7" :lg="8" :xl="8">
          <div class="grid-content bg-purple"></div>
        </el-col>

        <el-col :xs="18" :sm="12" :md="10" :lg="8" :xl="8" style="background-color: white; padding: 15px; border-radius: 10px">
          <h1 style="text-align: center">
            <i class="el-icon-tickets" style="color: #409EFF"></i> ControlHH || Entrar
          </h1>
          <hr />

          <!-- login -->
          <el-form :model="formData" status-icon :rules="rules" ref="formData" label-width="120px" class="demo-ruleForm white" :label-position="left">
            <el-form-item label="Usuario" prop="user">
              <el-input type="text" v-model="formData.user" auto-complete="off"></el-input>
            </el-form-item>
            <el-form-item label="Contraseña" prop="pass">
              <el-input type="password" v-model="formData.pass" auto-complete="off"></el-input>
            </el-form-item>
            <el-form-item>
              <el-button type="success" @click="submitForm('formData')">Entrar</el-button>
              <el-button type="warning" @click="">Ayuda</el-button>
            </el-form-item>

            <!-- error login -->
            <el-alert
            title="Error"
            type="error"
            description="Nombre de usuario o contraseña incorecto"
            v-show="errorLogin"
            v-on:close="alertLogin"
            show-icon>
          </el-alert>
          <!-- end error login -->

        </el-form>
        <!-- end login -->  
      </el-col>

      <el-col :xs="3" :sm="6" :md="7" :lg="8" :xl="8">
        <div class="grid-content bg-purple"></div>
      </el-col>
    </el-row>
  </el-main>
</el-container>
</template>

<script>
  import { uuid } from 'vue-idb'
  export default {
    data () {
      var validatePass = function (rule, value, callback) {
        if (!value) {
          return callback(new Error('Este campo no puede estar vacio'))
        } else {
          callback()
        }
      }

      var validateUser = function (rule, value, callback) {
        if (!value) {
          return callback(new Error('Este campo no puede estar vacío'))
        } else {
          callback()
        }
      }

      return {
        formData: {
          user: '',
          pass: ''
        },
        // dialog
        // data valif to login on sistem
        errorLogin: false,
        left: 'left',
        rules: {
          pass: [
          { validator: validatePass, trigger: 'blur' }
          ],
          user: [
          { validator: validateUser, trigger: 'blur' }
          ]
        },
        users: ''
      }
    },
    mounted () {
      this.update()
    },
    methods: {
      update() {
        // get defaults user for the login
        this.$db.user.toArray().then( users => {
          if (users[0])
            this.users = users
          else
            this.createDefaultUsers()
        })
      },
      createDefaultUsers() {
        // admin
        this.$db.user.add({
          id: 1,
          name: 'admin',
          password: 'admin'
        }).then(() => this.update())

        // employee
        this.$db.user.add({
          id: 2,
          name: 'recepcionista',
          password: '123456'
        }).then(() => this.update())
      },
      remove () {
        // delete users
        this.$db.user.where({'id': 1}).delete().then(() => this.update())
        this.$db.user.where({'id': 2}).delete().then(() => this.update())
      },
      submitForm(formData) {
        let data = this.formData
        let validUser = false;
        // hidden alert
        this.errorLogin = false

        // comprobate user
        switch (data.user) {
          case this.users[0].name:
            if (this.users[0].password == data.pass) {
              validUser = true
              break
            }

          case this.users[1].name:
            if (this.users[1].password == data.pass) {
              validUser = true
              break
            } 
        }

        if (validUser)
          window.location.href = "#/main"
        else
          alert('nada')
          this.errorLogin = true
          this.$refs[formData].resetFields()
      },
      alertLogin() {
        this.errorLogin = false
      }
    }
  }
</script>

<style>
.grid-content {
  border-radius: 4px;
  min-height: 36px;
} 

.white {
  color: white;
}

body {
  background-image: url("../assets/bg2.jpg");
  background-size: 100% 100%;
  background-attachment: fixed;
  background-repeat: no-repeat;
}

.red {
  background-color: #f56c6c;
  color: white;
}
</style>
