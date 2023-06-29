<script setup>
  // definePageMeta({
  //   layout: "plain"
  // })
  // const isLoggedIn = userIsLoggedIn();

  const user = useUser();

  // function login() {
  //   user.isLoggedIn = true;

  //   useRouter().push("/")
  // }

</script>

<template>
   <form @submit.prevent="user.login">
    <label for="">
      Username
      <input type="text">
    </label>
    <label for="">
      Password
      <input type="password">
    </label>
    <button>Login</button>
  </form>
</template>