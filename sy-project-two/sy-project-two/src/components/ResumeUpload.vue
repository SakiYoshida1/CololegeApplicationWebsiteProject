//This component allows user to upload their resume.
<template>
    <h2>Upload Your Resume</h2>
    <p>Your resume should be no more than one page and be uploaded as a PDF document.</p>
    <div class="col-md-4">
        <form @submit.prevent="upload">
            <label for="formFileSm" class="form-label">Resume Upload</label>
            <input class="form-control form-control-sm" id="formFileSm" type="file" ref="myfile">
            <button>Upload</button>
        </form>
        <p v-if="this.ResumeUpload">Resume successfully uploaded.</p>
    </div>
</template>

<script>
import '../assets/my-style.css'
import { storage } from "../firebase/init.js"
import { ref, uploadBytes, getDownloadURL } from "firebase/storage"
export default{
    data(){
        return{
            ResumeUpload: false,
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
            this.ResumeUpload=true;
            this.$emit('Resume-Upload', this.ResumeUpload);
        }
    }
}
</script>