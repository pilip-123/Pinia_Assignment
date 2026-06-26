import { defineStore } from "pinia";

export const useUserStore = defineStore("user", {

state:()=>({

name:"John",

age:20,

email:"john@gmail.com"

}),

actions:{

updateName(name){

this.name=name;

},

updateAge(age){

this.age=age;

},

updateEmail(email){

this.email=email;

}

}

})