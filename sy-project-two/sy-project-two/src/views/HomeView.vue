<template>
    <div class="wrapper1">
      <label for="applicationType">Choose a program to apply:</label><br/>
  
      <select v-model="applicationType" class="form-select form-select-sm mb-1" aria-label=".form-select-lg example">
        <option disabled value="" >Select a program</option>
        <option value="MasterApp">Master's Program</option>
        <option value="PhDApp">PhD Program</option>
      </select>
    </div>
  
    <div class="wrapper1" v-if="applicationType === 'MasterApp'">
        <p>Master Application requires</p>
        <li>2-page personal statement</li>
        <li>Resume</li>
        <li>Portfolio of your coding project</li>
        <li>Optional GRE General Test score</li>
        <li>Proof of your English proficiency</li>
        <button class="btn btn-warning" @click="upload, $router.push('/master'), applicationTypeShow=false">
                Go to Master's Application
            </button>
    </div>
  
    <div class="wrapper1" v-if="applicationType === 'PhDApp'">
        <div>
            <p>PhD Application requires</p>
            <li>2-page personal statement</li>
            <li>1-page research plan statement</li>
            <li>Resume</li>
            <li>Optional GRE General Test score</li>
            <li>Proof of your English proficiency</li>
            <button class="btn btn-warning" @click="upload, $router.push('/phd'), applicationTypeShow=false">
                Go to PhD Application
            </button>
        </div>
    </div>
  </template>
  
  <script>
  import db from '../firebase/init.js'
  import { col, onSnapshot, collection, doc, addDoc, deleteDoc, setDoc, updateDoc, query, getDoc, where } from 'firebase/firestore'
  export default {
    name: 'App',
    created() {
          console.log("created: The component just got created.");
    },
    data(){
      return{
        applicationType:"",
        applicationTypeShow: true
      }
    },
    methods:{
      async upload(){
            await addDoc(collection(db, 'applicationTypes'), {
                applicationType: this.applicationType
            })
        }
    }
  }
  </script>
