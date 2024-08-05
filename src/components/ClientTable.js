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
  Box,
} from "@mui/material";
import { useNavigate } from "react-router-dom"; // Import useNavigate

const ClientTable = () => {
  const [clients, setClients] = useState([]);
  const [message, setMessage] = useState(""); // New state to hold the message
  const navigate = useNavigate(); // Initialize useNavigate hook

  useEffect(() => {
    fetchClients();
  }, []);

  const fetchClients = async () => {
    try {
      const response = await axios.get(
        "https://businessmadebetter.com.au/wp-json/myplugin/v1/clients_form"
      );
      console.log("API Response:", response.data);

      if (Array.isArray(response.data)) {
        setClients(response.data); // Adjust based on actual response structure
      } else {
        console.error("Expected an array but received:", response.data);
        setClients([]); // Fallback to empty array if data is not as expected
      }

      // Set message if available
      if (response.data.message) {
        setMessage(response.data.message);
      }
    } catch (error) {
      console.error("Error fetching clients:", error);
      setClients([]); // Fallback to empty array in case of an error
    }
  };

  const handleEdit = (client) => {
    navigate(`/client_form/edit/${client.id}`); // Navigate to edit form with the correct path
  };

  const handleDelete = async (id) => {
    try {
      const confirmation = window.confirm(
        "Are you sure you want to delete this client?"
      );
      if (!confirmation) return; // Cancel delete operation if not confirmed

      await axios.delete(
        `https://businessmadebetter.com.au/wp-json/myplugin/v1/clients_form/${id}`
      );
      fetchClients(); // Refresh the list after deletion
    } catch (error) {
      console.error("Error deleting client:", error);
    }
  };

  const handleAddNew = () => {
    navigate("/client_form/new");
  };

  return (
    <div>
      <h1>Client Form Manager</h1>

      <Box textAlign={"right"}>
        <Button
          onClick={handleAddNew}
          variant="contained"
          color="primary"
          style={{ marginBottom: "16px" }}
        >
          New Form
        </Button>
      </Box>
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
            {clients.length > 0 ? (
              clients.map((client) => (
                <TableRow key={client.id}>
                  <TableCell>{client.id}</TableCell>
                  <TableCell>{client.fullName}</TableCell>
                  <TableCell>{client.email}</TableCell>
                  <TableCell>{client.city}</TableCell>
                  <TableCell>{client.state}</TableCell>
                  <TableCell>
                    <Button
                      onClick={() => handleEdit(client)}
                      variant="contained"
                      color="primary"
                      style={{ marginRight: "8px" }} // Added some spacing for better UI
                    >
                      Edit
                    </Button>
                    <Button
                      onClick={() => handleDelete(client.id)}
                      variant="contained"
                      color="secondary"
                    >
                      Delete
                    </Button>
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={12} sx={{ textAlign: "center" }}>
                  {message ? message : "No data available"}
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default ClientTable;
