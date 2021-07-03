<template>
  <div class="IdentitySelectionPage">
    <img
      src="../../assets/IdentitySelection.jpg"
      class="IdentitySelectionBackImage"
    />
    <div class="IdentitySelectionContainer">
      <div>
        <h1>校园场地管理系统</h1>
        <h4>Campus Site Management</h4>
      </div>
      <div>
        <el-row type="flex" justify="center" align="center" class="bottom-margin">
          <router-link
            to="/Login"
            tag="el-button"
            class="el-icon-user IdentitySelectionChooseButton"
            >学生</router-link
          >
          <router-link
            to="/Login"
            tag="el-button"
            class="el-icon-coordinate IdentitySelectionChooseButton"
            >场地管理员</router-link
          >

          <router-link
            to="/Login"
            tag="el-button"
            class="el-icon-s-custom IdentitySelectionChooseButton"
            >组织</router-link
          >
          <router-link
            to="/Login"
            tag="el-button"
            class="el-icon-s-check IdentitySelectionChooseButton"
            >系统管理员</router-link
          >
        </el-row>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
@import "../../css/IdentitySelection.css";

.IdentitySelectionChooseButton {
  width: auto;
  height: 10%;
}
</style>