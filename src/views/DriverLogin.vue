<template>
    <div class='login-container'>
        <section class='login-section'>
            <h1>Lets start by confirming your identity</h1>
            <section class="credentialSection">
                <label for="driverCredentialInput">Enter your Email, Phone Number or EFM Delivery PIN</label><br>
                <input v-model="driverCredentialInput" name="driverCredentialInput" type="text"
                    @blur="driverCredentialType" />
            </section>
        <div v-show="showPasswordInput">
            <label for="driverCredentialInput">Enter your Password</label><br>
            <input :value="driverPasswordInput" name="driverCredentialInput" type="text" />
        </div>
        <div>
            <button @click="login">Login</button>
            
        </div>
        <div><router-link to="/home">Skip Login</router-link></div>
        </section> 
    </div>
</template>


<script>
export default {
    data() {
        return {
            driverCredentialInput: '',
            driverPasswordInput: '',
        };
    },
    computed: {
        driverCredentialType() {
            let phoneRegEx = /^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$/
            if (this.driverCredentialInput.includes("@")) {
                return "email";
            } else if (this.driverCredentialInput.includes("EFM")) {
                return "deliveryPin";
            } else if (this.driverCredentialInput.match(phoneRegEx)) {
                return "phone";
            } else {
                return undefined;
            }
        },
        showPasswordInput() {
            if (this.driverCredentialType === 'email' || this.driverCredentialType === 'phone') {
                return true
            }
        },
        login() {
            if (this.postLogin) {
                this.$router.push("/home")
            } else {
                console.alert('Sorry those credentials are not correct')
            }
        },
        getUser() {

        },
        postLogin() {
            return true
        }
    },
};
</script>
<style scoped>
.login-container {
    text-align: center;
    line-height: 3em;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin: auto;
}
.login-section{
    display:flex;
    flex-direction: column;
    min-height: 25em
}
.credentialSection {
    margin-top: 3em;
}
h1 {
    font-size: 2em;
}
input {
    padding: .5em;
    border-radius: 8px;
    border: none;
}
button {
    font-size: 1em;
    border: none;
    background-color: transparent;
    color: inherit;
    outline: none;
    cursor: pointer;
}
</style>
