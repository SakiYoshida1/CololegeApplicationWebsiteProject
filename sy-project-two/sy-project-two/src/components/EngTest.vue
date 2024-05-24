<template>
    <h2>Send a Proof of English Proficiency</h2>
    <p>Send your English test score from ETS website.
    Our school code is 000-0000.

    <br/><br/>If you've been enrolled at English-speaking educational institution for more than one year,
    you will be exempted from the English-testing requirement. To receive the waiver, upload an official or unofficial
    transcript from the school you enrolled at.
    </p>
    <form @submit.prevent="changeEng">
    <div class="form-group col-md-4">
            <label for="inputEng">Please choose what English test score you will submit. If you are submitting a transcript,
    please choose "Waiver."</label>
            <select id="inputEng" class="form-control" v-model="EngTestUpload" @input="changeEng">
                <option disabled selected>Choose...</option>
                <option value="TOEFL">TOEFL</option>
                <option value="transcript">Upload your transcript of English-speaking educational institution</option>
            </select>
        </div>
    <div class="mb-3" v-if="EngTestUpload==='transcript'">
        <form @submit.prevent="upload">
            <label for="formFileSm" class="form-label">Transcript Upload</label>
            <input class="form-control form-control-sm" id="formFileSm" type="file" ref="myfile">
            <button>Upload</button>
        </form>
        <p v-if="this.EngTranscriptUpload">Transcript successfully uploaded.</p>
    </div>
    <button>Submit Proof of English Proficiency</button>
    </form>
</template>

<script>
import '../assets/my-style.css'
import { storage } from "../firebase/init.js"
import { ref, uploadBytes, getDownloadURL } from "firebase/storage"
export default{
    data(){
        return{
            EngTestUpload: '',
            EngTranscriptUpload: false,
            EngComplete:false,
            url: [],
            i: 0
        }
    },
    methods:{
        async upload(){
            const storageRef = ref(storage, '/fold/myfile/' + this.i + '/gif')
            await uploadBytes(storageRef, this.$refs.myfile.files[0])
            .then((snapshot) => {
                console.log("uploaded")
            })
            this.i=this.i+1
            await getDownloadURL(storageRef)
            .then((purl) => {
                console.log('url is: ', purl)
                this.url.push(purl)
            })
            this.EngTranscriptUpload=true;
        },
        changeEng(){
            if(this.EngTestUpload==='TOEFL'){
                this.EngComplete=true
            }
            else if(this.EngTestUpload==='transcript'&&this.EngTranscriptUpload===true){
                this.EngComplete=true
            }
            else{
                this.EngComplete=false
            }
            this.$emit('EngTest-Upload', this.EngComplete)
        }
    }
}
</script>