//This component allows user to enter personal information.
<template>
    <h3>Personal Information</h3>
    <form @submit.prevent="validateForm">
        <div class="form-group col-md-4">
            <label for="inputCountry">Country</label>
            <select id="inputCountry" class="form-control">
                <option selected>Choose...</option>
                <option>...</option>
            </select>
        </div>
        <div class="form-group col-md-4">
            <label for="inputState">State</label>
            <select id="inputState" class="form-control">
                <option selected>Choose...</option>
                <option>...</option>
            </select>
        </div>
        <div class="col-md-4">
            <label for="inputAddress">Address</label>
            <input type="text" class="form-control" id="inputAddress" placeholder="1234 Main St" v-model="response.address">
        </div>
        <div class="col-md-4">
            <label for="inputAddress2">Address 2</label>
            <input type="text" class="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor">
        </div>
        <div class="col-md-4">
            <div class="form-group col-md-6">
            <label for="inputCity">City</label>
            <input type="text" class="form-control" id="inputCity">
            </div>
            
            <div class="form-group col-md-2">
            <label for="inputZip">Zip</label>
            <input type="text" class="form-control" id="inputZip">
            </div>
        </div>
        <div class="form-group col-md-4">
            <label for="inputInternational">Is English your first language?</label>
            <select id="inputInternational" class="form-control" v-model="this.response.isInternationalStudent" @input="changeInternational">
                <option disabled>Choose...</option>
                <option value="false">Yes (Domestic Student)</option>
                <option value="true">No (International Student)</option>
            </select>
        </div>
        <div>
            <p v-if="this.response.isInternationalStudent===null || this.response.address===''" style="color:red">Missing info!</p>
        </div>
        <button>Submit Personal Information</button>
    </form>

</template>

<script>
import '../assets/my-style.css'
import db from '../firebase/init.js'
import { col, onSnapshot, collection, doc, addDoc, deleteDoc, setDoc, updateDoc, query, getDoc, where } from 'firebase/firestore'
import { useCompletionStore } from '../store/completionStore.js';
import { mapActions } from 'pinia';
export default{
    //emits:['change-International'],
    data(){
        return{
            response:{
                address:'',
                isInternationalStudent:null
            },
            PersonalInfoComplete:false,
        }
    },
    created() {
        this.response.isInternationalStudent=null;
        this.response.address='';
        this.PersonalInfoComplete=false;
        console.log("created: The component just got created.");
    },
    methods:{
        changeInternational(){
            console.log("is international changed")
            this.$emit('change-International', this.response.isInternationalStudent)
        },
        ...mapActions(useCompletionStore, ['PersonalInfoValidate'],['EngValidate']),
        validateForm(){
            this.PersonalInfoValidate(this.response);
        },
        async upload(){
            await addDoc(collection(db, 'applications'), {
                address: this.response.address || null,
                isInternationalStudent: this.isInternationalStudent || null
            })
        }
    }
}
</script>