<template>
  <div class="masterApp">
    <h1>Welcome to Master's Program Application</h1>
    <img src="../assets/master.png" height="125">
    <div>
        <p>Master Application requires</p>
        <li>2-page personal statement</li>
        <li>Resume</li>
        <li>Portfolio of your coding project</li>
        <li>Proof of your English proficiency</li>
        <div>
          <router-link to="/home" class="btn btn-warning" @click="applicationTypeShow=true">
            Go back to program selection
          </router-link>
        </div>
      <hr>
      <router-view></router-view>
    </div>
    <div class="wrapper2">
    <PersonalInfo @change-International="changeInternationalStudent" ref="personalinfo"></PersonalInfo>
    <ResumeUpload @Resume-Upload="ResumeUpload"></ResumeUpload>
    <PersonalStatementUpload @PersonalStatement-Upload="PersonalStatementUpload"></PersonalStatementUpload>
    <EngTest @EngTest-Upload="EngTestUpload"></EngTest>
    <Review @submit="submit"
            v-bind:ResumeUpload="this.response.ResumeUpload"
                  :PersonalStatementUpload="this.response.PersonalStatementUpload"
                  :EngTestUpload="this.response.Engtest"></Review>
    </div>
  </div>
</template>

<script>
import '../assets/my-style.css'
import PersonalInfo from '../components/PersonalInfo.vue'
import ResumeUpload from '../components/ResumeUpload.vue'
import PersonalStatementUpload from '../components/PersonalStatement.vue'
import EngTest from '../components/EngTest.vue'
import Review from '../components/Review.vue'

export default{
    components:{
        PersonalInfo,
        ResumeUpload,
        PersonalStatementUpload,
        EngTest,
        Review
    },
    created() {
        this.response.isInternationalStudent=null;
        this.response.PersonalInfoComplete=false;
        this.response.PersonalStatementUpload=false;
        this.response.ResumeUpload=false;
        this.response.Engtest=false;
        console.log("MasterApp created.");
    },
    data(){
      return{
        response:{
          PersonalInfoComplete:false,
          PersonalStatementUpload:false,
          ResumeUpload:false,
          Engtest:false
        },
        isInternationalStudent:null,
      }
    },
    computed:{
      changeInternationalStudent(value){
        this.isInternationalStudent = value
        if(this.isInternationalStudent=false){
          this.response.Engtest=true
        }
      }
    },
    methods:{
      ResumeUpload(value){
        this.response.ResumeUpload=value
      },
      PersonalStatementUpload(value){
        this.response.PersonalStatementUpload=value
      },
      EngTestUpload(value){
        this.response.Engtest=value
        if(this.isInternationalStudent=false){
          this.response.Engtest=true
        }
      },
      submit(){
        this.$refs.personalinfo.upload()
      }
    }
}
</script>