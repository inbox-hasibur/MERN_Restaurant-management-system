import React, { useEffect, useState } from 'react';
import './List.css';
import axios from 'axios';
import { toast } from 'react-toastify';

const List = () => {
  const url = "http://localhost:4000"; // Make sure URL is correct
  const [list, setList] = useState([]);

  const fetchList = async () => {
    try {
      const response = await axios.get(`${url}/api/food/list`);
      console.log("Fetched List Data:", response.data); // Debugging response

      if (response.data.success) {
        setList(response.data.data); // Update the state with fetched data
      } else {
        toast.error("Error fetching list");
      }
    } catch (err) {
      console.error(err);
      toast.error("Server Error");
    }
  };

  const removeFood = async (foodId) => {
    try {
      const response = await axios.post(`${url}/api/food/remove`, { id: foodId });
      await fetchList(); // Refetch the list after removal

      if (response.data.success) {
        toast.success(response.data.message);
      } else {
        toast.error("Error removing food");
      }
    } catch (err) {
      toast.error("Error removing food");
    }
  };

  useEffect(() => {
    fetchList(); // Call the fetch function when the component mounts
  }, []);

  return (
    <div className="list add flex-col">
      <p>All Foods List</p>
      <div className="list-table">
        <div className="list-table-format title">
          <b>Image</b>
          <b>Name</b>
          <b>Category</b>
          <b>Price</b>
          <b>Action</b>
        </div>

        {list.length > 0 ? (
          list.map((item, index) => (
            <div key={index} className="list-table-format">
              <img src={`${url}/images/${item.image}`} alt={item.name} />
              <p>{item.name}</p>
              <p>{item.category}</p>
              <p>${item.price}</p>
              <button onClick={() => removeFood(item._id)} className="delete-button">
                Delete
              </button>
            </div>
          ))
        ) : (
          <p>No items found.</p> // Show this if list is empty
        )}
      </div>
    </div>
  );
};

export default List;
