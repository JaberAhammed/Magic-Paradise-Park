import { useState } from "react";


const useCart = () => {
    const [selectedCourse, setSelectedCourse] = useState([]);


    function addToCart(course) {
        const isHave = selectedCourse.find(
          (selected) => selected.key === course.key
        );
    
        if (isHave) {
          alert("course has been selected!");
        } else {
          const newSelection = [...selectedCourse, course];
          localStorage.setItem("cart", JSON.stringify(newSelection));
          setSelectedCourse(newSelection);
        }
      }

      function remove(key) {
        const selectAfterRemove = selectedCourse.filter(
          (course) => course.key !== key
        );
        localStorage.setItem("cart", JSON.stringify(selectAfterRemove));
        setSelectedCourse(selectAfterRemove);
      }
    return {addToCart,selectedCourse,remove}
};

export default useCart;