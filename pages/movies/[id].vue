
<script setup>
  const route = useRoute();
  const {data} = await useFetch(
    `http://www.omdbapi.com/?apikey=277a8905&i=${route.params.id}`,
    {
      pick: ["Plot", "Title", "Error"],
      key: `/movie/${route.params.id}`,

    }
  );

  if(data.value.Error === "Incorrect IMDb ID.") {
    showError({statusCode: 404, statusMessage: "page Not Found"});
  }

  
  // const { data } = useAsyncData(()=> {
  //   return $fetch(`http://www.omdbapi.com/?apikey=277a8905&i=${route.params.id}`)
  // },
  // {
  //   pick: ["Plot", "Title"],
  //   // transform(data) {
  //   //   return {
  //   //     Plot: data.Plot,
  //   //     Title: data.Title
  //   //   }
  //   //   // return data.Title;
  //   // }
  // }
// );

</script>
<template>
  <div>
    <pre>{{ data }}</pre>
  </div>
</template>