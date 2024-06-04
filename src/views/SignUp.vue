<template>
    <div class="container">
        <div class="left-part">
            <img src="../assets/images/register.jpg" alt="">
        </div>
        <div class="right-part">
            <div class="buttons">
                <button> <i class="fa-brands fa-google"></i> Start With Google</button>
                <button> <i class="fa-brands fa-facebook-f"></i> Start With Facebook</button>
            </div>
            <div class="or">
                <hr>
                <p>or</p>
                <hr>
            </div>
            <form action="">
                <div class="names" @submit.prevent="register">
                    <div class="first-name">
                        <label for="">First Name</label>
                        <input v-model="firstname" type="text" placeholder="EX: Mohamed">
                    </div>
                    <div class="last-name">
                        <label for="">Second Name</label>
                        <input v-model="lastname" type="text" placeholder="EX: Ali">
                    </div>
                </div>
                <div class="email">
                    <label for="">Your Email</label>
                    <input v-model="email" type="email" placeholder="EX: Bob123@gmail.com">
                </div>
                <div class="password">
                    <div class="first-password">
                        <label for="">Password</label>
                        <input v-model="password" @input="handleInput" type="password">
                        <label v-if="!hasChar" for="" id="password-message">Please use a password that contains letters, special characters, and is at least 8 characters long.</label>
                    </div>
                    <div class="second-password">
                        <label for="">Repeat Your Password</label>
                        <input v-model="secondpassword" type="password">
                    </div>
                </div>
                
                <div class="agree">
                    <input type="checkbox">
                    <p>I agree all statements in Terms of service</p>
                </div>

                <div class="btn">
                    <button type="submit">Register</button>
                </div>
            </form>
            <p v-if="message">{{ message }}</p>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import axios from 'axios';

const firstname = ref('');
const lastname = ref('');
const email = ref('');
const password = ref('');
const secondpassword = ref('');

const register = async () => {
    try {
        const response = await axios.post('http://localhost:3000/register', {
            firstname: firstname.value,
            lastname: lastname.value,
            email: email.value,
            password: password.value,
            secondpassword: secondpassword.value
    });
    message.value = response.data.message;
    } catch (error) {
        message.value = 'Registration failed!';
    }
};


const hasChar = ref(false);

const handleInput = () => {
    hasChar.value = true;
}

</script>

<style scoped>
.container {
    margin: 4rem 6rem;
    border-radius: 10px;
    background: white;
    box-shadow: 10px 10px 20px 0 rgba(0, 0, 0, 0.1);
    display: flex;
    justify-content: space-between;
}

.container .left-part {
    margin: 1rem;
}

.container .left-part img {
    width: 500px;
    height: 625px;
    border-radius: 10px;
}

.container .right-part {
    display: flex;
    flex-direction: column;
    margin: 1rem;
    width: 100%;
}

.container .right-part .buttons {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
}

.container .right-part .buttons button {
    background: black;
    color: white;
    padding: 0.8rem;
    border-radius: 5px;
    border: none;
    cursor: pointer;
    font-size: 14px;
}

.container .right-part .or  {
    display: flex;
    align-items: center;
    margin: 1.5rem 0;
}

.container .right-part .or p {
    margin: 0 5%;
}

.container .right-part .or hr {
    width: 45%;
    background-color: rgb(226, 226, 226);
}

.container .right-part form {
    display: flex;
    flex-direction: column;
}

.container .right-part form input {
    outline: none;
    border: 1px solid gray;
    padding: 0.7rem;
    border-radius: 3px;
}

.container .right-part form .names {
    display: flex;
    justify-content: space-between;
    margin-bottom: 1.5rem;
}

.container .right-part form .names .first-name,
.container .right-part form .names .last-name {
    display: flex;
    flex-direction: column;
    width: 45%;
    gap: 0.5rem;
}

.container .right-part form .names .first-name input,
.container .right-part form .names .last-name input {
    width: 100%;
}

.container .right-part form .email {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    margin-bottom: 1.5rem;
}

.container .right-part form .password {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    margin-bottom: 1.5rem;
}

.container .right-part form .password .first-password,
.container .right-part form .password .second-password {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
}

#password-message {
    color: red;
    font-size: 14px;
}

.container .right-part form .agree {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    margin-bottom: 1.5rem;
}

.container .right-part form .btn {
    width: 100%;
    align-self: flex-end;
}

.container .right-part form .btn button {
    width: 100%;
    background: black;
    color: white;
    padding: 0.8rem;
    border-radius: 5px;
    border: none;
    cursor: pointer;
    font-size: 14px;
}
</style>