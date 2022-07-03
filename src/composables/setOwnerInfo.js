import { ref } from 'vue';

const setOwnerInfo = () => {
  const infos = ref([]);
  const error = ref(null);

  const load = async () => {
    try {
      const data = await fetch('http://localhost:8080/pet/api/v1/');
      if (!data.ok) {
        throw Error('No data available');
      }
      infos.value = await data.json();
    } catch (err) {
      error.value = err.message;
      console.log(error.value);
    }
  };

  return { infos, error, load };
};

export default setOwnerInfo;
