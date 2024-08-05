import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
} from "@mui/material";
import { useNavigate } from "react-router-dom"; // Import useNavigate

const CustomerTable = () => {
  const [customers, setCustomers] = useState([]);
  const navigate = useNavigate(); // Initialize useNavigate hook

  useEffect(() => {
    fetchCustomers();
  }, []);

  const fetchCustomers = async () => {
    try {
      const response = await axios.get(
        "https://businessmadebetter.com.au/wp-json/myplugin/v1/customers"
      );
      setCustomers(response.data);
    } catch (error) {
      console.error("Error fetching customers:", error);
    }
  };

  const handleEdit = (customer) => {
    navigate(`/customer/${customer.id}`); // Navigate to edit form
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(
        `https://businessmadebetter.com.au/wp-json/myplugin/v1/customers/${id}`
      );
      fetchCustomers();
    } catch (error) {
      console.error("Error deleting customer:", error);
    }
  };

  const handleAddNew = () => {
    navigate("/customer/new"); // Navigate to the form for creating a new customer
  };

  return (
    <div>
      <Button
        onClick={handleAddNew}
        variant="contained"
        color="primary"
        style={{ marginBottom: "16px" }}
      >
        Add New Customer
      </Button>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Full Name</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>City</TableCell>
              <TableCell>State</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {customers.map((customer) => (
              <TableRow key={customer.id}>
                <TableCell>{customer.id}</TableCell>
                <TableCell>{customer.full_name}</TableCell>
                <TableCell>{customer.email}</TableCell>
                <TableCell>{customer.city}</TableCell>
                <TableCell>{customer.state}</TableCell>
                <TableCell>
                  <Button
                    onClick={() => handleEdit(customer)}
                    variant="contained"
                    color="primary"
                  >
                    Edit
                  </Button>
                  &nbsp;
                  <Button
                    onClick={() => handleDelete(customer.id)}
                    variant="contained"
                    color="secondary"
                  >
                    Delete
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default CustomerTable;
