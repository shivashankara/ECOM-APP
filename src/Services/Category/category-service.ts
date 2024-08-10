import axios from 'axios';
export const getCategory =async()=>{
    const url =`http://localhost:3001/Categories`;
    try {
        const res = await axios.get(url);
        console.log("response", res);
        return res;
      } catch (error) {
        console.error("An error occurred while fetching categories:", error);
        throw error; 
      }
}