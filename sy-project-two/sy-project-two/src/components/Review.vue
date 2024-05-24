//This component collects variables related to each component's completion.
<template>
    <h1>Review and Submit your Application</h1>
    <table>
        <tr>
            <th>Required Item</th>
            <th>Status</th>
        </tr>
        <tr>
            <td>Personal Information</td>
            <td>{{ getPersonalInfoComplete }}</td>
        </tr>
        <tr>
            <td>Resume</td>
            <td>{{ this.ResumeUpload }}</td>
        </tr>
        <tr>
            <td>Personal Statement</td>
            <td>{{ this.PersonalStatementUpload }}</td>
        </tr>
        <tr>
            <td>English Proficiency</td>
            <td>{{ this.EngTestUpload }}</td>
        </tr>
    </table>
    <button :disabled="!validateForm" @click="upload">Submit</button>
</template>

<script>
import '../assets/my-style.css'
import { useCompletionStore } from '../store/completionStore.js';
import { mapState } from 'pinia';
import PersonalInfo from './PersonalInfo.vue'
import ResumeUpload from './ResumeUpload.vue'
import PersonalStatement from './PersonalStatement.vue'
import EngTest from './EngTest.vue'
import MasterAppView from '@/views/MasterAppView.vue'
export default{
    props:['ResumeUpload', 'PersonalStatementUpload', 'EngTestUpload'],
    components:{
        PersonalInfo,
        ResumeUpload,
        PersonalStatement,
        EngTest,
        MasterAppView
    },
    computed:{
        validateForm(){
            let calledStatus = false;
            if(this.ResumeUpload===false || this.PersonalStatementUpload===false || this.getPersonalInfoComplete===false){
                calledStatus = false;
            }
            else{
                calledStatus = true;
                console.log("okay");
            }
            return calledStatus;
        },
        ...mapState(useCompletionStore, ['getPersonalInfoComplete'])
    },
    methods:{
        upload(){
            this.$emit('submit')
        }
    }
}
</script>