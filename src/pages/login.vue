
<template>
  <div class="index">
    <div class="sss">
      <div class="login-wrap" v-show="showLogin">
        <h3>登录</h3>
        <p v-show="showTishi">{{tishi}}</p>
        <input type="text" placeholder="请输入用户名" v-model="username">
        <input type="password" placeholder="请输入密码" v-model="password">
        <button v-on:click="login">登录</button>
        <span class="register" v-on:click="ToRegister">没有账号？马上注册</span>
      </div>

      <div class="register-wrap" v-show="showRegister">
        <h3>注册</h3>
        <p v-show="showTishi">{{tishi}}</p>
        <input type="text" placeholder="请输入用户名" v-model="newUsername">
        <input type="password" placeholder="请输入密码" v-model="newPassword">
        <button v-on:click="register">注册</button>
        <span class="register" v-on:click="ToLogin">已有账号？马上登录</span>
      </div>
    </div>

    <!-- <Footer></Footer> -->
  </div>
</template>

 



<script>
import { setCookie, getCookie } from "../assets/js/cookie";
// import Footer from "../components/ctrip/footer"
export default {
  components: {
    // Footer
  },
  data() {
    return {
      showLogin: true,
      showRegister: false,
      showTishi: false,
      tishi: "",
      username: "",
      password: "",
      newUsername: "",
      newPassword: ""
    };
  },
  mounted() {
    /*页面挂载获取cookie，如果存在username的cookie，则跳转到主页，不需登录*/
    if (getCookie("username")) {
      this.$router.push("/index");
    }
  },
  methods: {
    login() {
      if (this.username == "" || this.password == "") {
        alert("请输入用户名或密码");
      } else {
        let data = {
          username: this.username,
          password: this.password
        };
        /*接口请求*/

        this.$http.post("http://localhost:3000/goods/login", data).then(res => {
          console.log(res);
          /*接口的传值是(-1,该用户不存在),(0,密码错误)，同时还会检测管理员账号的值*/
          if (res.body.data == -1) {
            this.tishi = "该用户不存在";
            this.showTishi = true;
          } else if (res.body.data == 0) {
            this.tishi = "密码输入错误";
            this.showTishi = true;
          } else if (res.body.data == 2) {
            this.tishi = "登录成功";
            this.showTishi = true;
            localStorage.setItem("login", true);
            setCookie("username", this.username, 1000 * 60);
            setTimeout(
              function() {
                this.$router.push("/index");
              }.bind(this),
              1000
            );
          }
        });
      }
    },

    ToRegister() {
      this.showRegister = true;
      this.showLogin = false;
    },
    ToLogin() {
      this.showRegister = false;
      this.showLogin = true;
    },

    register() {
      if (this.newUsername == "" || this.newPassword == "") {
        alert("请输入用户名或密码");
      } else {
        let data = {
          username: this.newUsername,
          password: this.newPassword
        };
        this.$http
          .post("http://localhost:3000/goods/register", data)
          .then(res => {
            console.log(res);
            if (res.body.data == 3) {
              this.tishi = "用户名已存在";
            } else if (res.body.data == 1) {
              this.tishi = "注册成功";
              this.showTishi = true;
              this.username = "";
              this.password = "";
              /*注册成功之后再跳回登录页*/
              setTimeout(
                function() {
                  this.showRegister = false;
                  this.showLogin = true;
                  this.showTishi = false;
                }.bind(this),
                1000
              );
            }
          });
      }
    }
  }
};
</script>



<style>
.index {
  /* padding-bottom: .42rem; */
  display: flex;
  flex-direction: column;
  height: 100%;
}

.sss {
  flex: 1;
  overflow-y: auto;
}
h3 {
  font-size: 0.2rem;
  margin-top: 1rem;
  margin-bottom: 0.2rem;
}

.login-wrap {
  text-align: center;
}

.register-wrap {
  text-align: center;
}

input {
  display: block;
  width: 250px;
  height: 40px;
  line-height: 40px;
  margin: 0 auto;
  margin-bottom: 10px;
  outline: none;
  border: 1px solid #888;
  padding: 10px;
  box-sizing: border-box;
}

p {
  color: red;
  font-size: 0.16rem;
}

button {
  display: block;
  width: 250px;
  height: 40px;
  line-height: 40px;
  margin: 0 auto;
  border: none;
  background-color: #41b883;
  color: #fff;
  font-size: 16px;
  margin-bottom: 5px;
}

span {
  cursor: pointer;
}

span:hover {
  color: #41b883;
}

.register {
  font-size: 0.16rem;
}
</style>