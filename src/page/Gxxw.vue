<template>
  <div align>
    <common-head></common-head>

    <div align="center">
      <dj-head v6="true"></dj-head>
    </div>
    <div class="clear"></div>
    <div class="container" style="width: 1200px;height:100%;margin-top:-50px;">
      <div class="plate" style>
        <div class="cl djpannel flex">
          <div class="fl left-pannel">
            <img :src="imgurl2">
          </div>
          <div class="fl right-pannel">
            <div class="left-gx">
              <div
                style="position: relative; width: 300px; height: 100px;margin-left: 15px; margin-top: 178px"
              >
<!--                <router-link to="/Fanying">
                  <img
                    class="photo"
                    style="position: absolute; top: -60px;"
                    src="../assets/img/fanying.png"
                  >
                </router-link>-->

                <router-link to="/Qiuzhu">
                  <img
                    class="photo"
                    style="position: absolute; top: 0px;"
                    src="../assets/img/qiuzhu.png"
                  >
                </router-link>
              </div>
            </div>
            <div class="right-gx">
              <div
                style="position: relative; width: 300px; height: 100px;margin-left: 15px; margin-top: 178px"
              >
                <router-link to="/Baibaoxiang">
                  <img
                    class="photo"
                    style="position: absolute; top: -60px;"
                    src="../assets/img/sel_iconbbx.png"
                  >
                </router-link>

                <router-link to="/Rencai">
                  <img
                    class="photo"
                    style="position: absolute; top: 0px;"
                    src="../assets/img/sel_iconrc.png"
                  >
                </router-link>
              </div>
            </div>

            <!-- <router-link to="/Qiuzhu"><img style="width: 300px; position: relative; left: 80px; top: 20px;" src="../assets/img/h1.png"></router-link> -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import djHead from "../components/djHead";
import commonHead from "../components/commonHead";
import {url} from '@/api/api'
import {mapActions, mapState} from 'vuex'

export default {
  computed: {
    defaultActive: function() {
      return this.$route.path.replace("/", "");
    },
    imgurl2:function(){
      if (!this.$store.state.adminImg){
                    return ''
                }else{
                    return url + this.$store.state.adminImg[6];
                }
		},
  },
  components: {
    djHead,
    commonHead
  },
  methods: {}
};
</script>


<style lang="less" scoped>
@import "../style/main.css";
@import "../style/mainheader.css";
@import "../style/dangjian_window.css";
@import "../style/style.css";
@import "../style/video.css";
@import "../style/bootstrap-3.3.7/css/bootstrap.min.css";

.box {
  float: left;
  width: 350px;
  height: 210px;
  margin: 0 20px 20px 0;
}
.flex{
		display:flex;
		align-items:center;
    padding-top:29px;
    flex-wrap: wrap;
	}
.box img {
  width: 350px;
  height: 210px;
}

.left-pannel img {
  width: 460px;
  height: 440px;
  margin: -20px 0 0 0px;
}

.right-pannel {
  width: 740px;
  margin-left: -40px;
  overflow: hidden;
}

.djpannel {
  margin-top: 60px;
}

.right-gx {
  float: right;
  margin-top: 20px;
  width: 300px;
  height: 335px;
  background-image: url(../assets/img/H2.png);
  background-size: 100%;
}
.left-gx {
  width: 300px;
  float: left;
  margin-top: 20px;
  margin-left: 130px;
  height: 335px;
  background-image: url(../assets/img/h1.png);
  background-size: 100%;
  overflow: hidden;
}
.photo {
  position: relative;
  bottom: 6px;
  left: 203px;
  padding: 15px;
}
.photo:hover {
  animation: mymove 0.2s 1 alternate forwards;
  -webkit-animation: mymove 0.2s 1 alternate forwards; /*Safari and Chrome*/
}

@keyframes mymove {
  to {
    left: 100px;
  }
}
@-webkit-keyframes mymove /*Safari and Chrome*/ {
  to {
    left: 100px;
  }
}
</style>
