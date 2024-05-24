import { defineStore } from 'pinia'

export const useCompletionStore = defineStore('application', {
    state: () =>{
        return{
            PersonalInfoComplete:false,
            response:{
                address:'',
                isInternationalStudent:null
            },
            EngComplete:false
        }
    },
    getters:{
        getPersonalInfoComplete(state){
            return state.PersonalInfoComplete;
        },
        getResponse(state){
            return state.response;
        }
    },
    actions:{
        PersonalInfoValidate(userResponse){
            this.response=userResponse;
            if(this.response.address==='' || this.response.isInternationalStudent===null){
                this.PersonalInfoComplete=false;
            }
            else{
                this.PersonalInfoComplete=true;
            }
        }
    }
})