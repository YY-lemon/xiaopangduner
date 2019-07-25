<template>
  <div class='login'>
    <div class="title">小胖墩儿管理系统</div>
    <div class="form">
      <el-form ref="userForm"
               :model="userForm"
               :rules="rules">
        <el-form-item prop="username">
          <el-input v-model="userForm.username"
                    placeholder="用户名"
                    prefix-icon="iconfont icon-yonghuming"></el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input v-model="userForm.password"
                    type="password"
                    placeholder="密码"
                    prefix-icon="iconfont icon-mima"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button class="login-btn">登 录</el-button>
        </el-form-item>
        <div class="tip-words">
          <p>温馨提示:</p>
          <p>未登录过的新用户，自动注册</p>
          <p>注册过的用户可凭账号密码登录</p>
        </div>
      </el-form>
    </div>
  </div>
</template>

<script>

export default {
  data() {
    return {
      userForm: {
        username: '',
        password: ''
      },
      rules: {
        username: [
          { required: true, message: '请输入用户名', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' },
        ]
      }
    }
  },
  methods: {

  }
}
</script>
<style lang='less' scoped>
.login {
  width: 100%;
  height: 100%;
  background: url("../assets/bg.jpg") no-repeat;
  background-size: 100% 100%;
  position: relative;
  .title {
    width: 370px;
    height: 30px;
    font-family: cursive;
    font-weight: 700;
    font-size: 26px;
    color: #fff;
    text-align: center;
    position: absolute;
    left: 36%;
    top: 23%;
  }
  .form {
    width: 370px;
    height: 260px;
    background-color: #fff;
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    right: 0;
    margin: auto;
    .login-btn {
      width: 100%;
      color: #fff;
      font-size: 16px;
      background-color: #ff7c1a;
    }
    /deep/.el-input__prefix {
      color: #ff7c1a;
    }
    .el-form {
      padding: 20px 20px 0 20px;
    }
    .el-form-item {
      margin-bottom: 18px;
    }
    p {
      color: #4cbb15;
      font-size: 12px;
      height: 16px;
      &:nth-of-type(2) {
        margin-left: 52px;
      }
      &:nth-of-type(3) {
        margin-left: 52px;
      }
    }
  }
}
</style>