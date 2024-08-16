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
  Skeleton,
} from "@mui/material";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import BorderColorIcon from "@mui/icons-material/BorderColor";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";

const ClientTable = () => {
  const [clients, setClients] = useState([]);
  const [message, setMessage] = useState(""); // New state to hold the message
  const navigate = useNavigate(); // Initialize useNavigate hook
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetchClients();
  }, []);

  const fetchClients = async () => {
    console.log(process.env.REACT_APP_API_URL)
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_API_URL}/api/cif`
      );
      console.log("API Response:", response.data);

      if (Array.isArray(response.data)) {
        setClients(response.data);
        setLoading(false);
      } else {
        console.error("Expected an array but received:", response.data);
        setClients([]);
        setLoading(false);
      }

      // Set message if available
      if (response.data.message) {
        setMessage(response.data.message);
      }
    } catch (error) {
      console.error("Error fetching clients:", error);
      setClients([]);
      setLoading(false);
    }
  };

  const handleEdit = (client) => {
    navigate(`/cif/edit/${client.id}`); // Navigate to edit form with the correct path
  };

  const handleDelete = async (id) => {
    try {
      const confirmation = window.confirm(
        "Are you sure you want to delete this client?"
      );
      if (!confirmation) return; // Cancel delete operation if not confirmed

      await axios.delete(
        `${process.env.REACT_APP_API_URL}/api/cif`
      );
      fetchClients(); // Refresh the list after deletion
    } catch (error) {
      console.error("Error deleting client:", error);
    }
  };

  const handleAddNew = () => {
    navigate("/client_form/new");
  };
  if (loading) {
    // Show loading indicator if data is being loaded
    return (
      <div>
        <Box
          sx={{
            display: "flex",
            alignItems: "flex-start",
            justifyContent: "space-between",
            marginTop: "100px",
          }}
        >
          {/* Content Box */}
          <Box>
            <h1 style={{ marginTop: "0" }}>
              Client Information Form (CIF)
              <br /> Client Document List (CDL)
            </h1>
            <span>
              Business Made Better, ABN 51 666 810 215 (“<strong>BMB</strong>”)
            </span>
          </Box>
          {/* Logo Box */}
          <Box>
            <img
              src="/images/logo.png"
              alt="Company Logo"
              style={{ maxWidth: "300px", maxHeight: "100px" }} // Adjust size as needed
            />
            <h3 style={{ textAlign: "right", marginBottom: "0" }}>
              (07) 3339 7997
            </h3>
            <p style={{ textAlign: "right", marginTop: "0" }}>
              Level 5, 131 Wickham Terrace<br></br> Brisbane Queensland
              Australia 4000 <br></br>E | accounts@uc8.com.au <br></br>W |
              BusinessMadeBetter.com.au
            </p>
          </Box>
        </Box>
        <Box sx={{ p: 2 }}>
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
                  <TableCell sx={{ textAlign: "center" }}>Actions</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell>
                    <Skeleton variant="text" width="100%" height={40} />
                  </TableCell>
                  <TableCell>
                    <Skeleton variant="text" width="100%" height={40} />
                  </TableCell>
                  <TableCell>
                    <Skeleton variant="text" width="100%" height={40} />
                  </TableCell>
                  <TableCell>
                    <Skeleton variant="text" width="100%" height={40} />
                  </TableCell>
                  <TableCell>
                    <Skeleton variant="text" width="100%" height={40} />
                  </TableCell>
                  <TableCell sx={{ textAlign: "center" }}>
                    <Button
                      color="primary"
                      style={{ marginRight: "8px" }} // Added some spacing for better UI
                    >
                      <BorderColorIcon />
                    </Button>
                    <Button color="warning">
                      <DeleteForeverIcon />
                    </Button>
                  </TableCell>
                </TableRow>
              </TableBody>
              <TableBody>
                <TableRow>
                  <TableCell>
                    <Skeleton variant="text" width="100%" height={40} />
                  </TableCell>
                  <TableCell>
                    <Skeleton variant="text" width="100%" height={40} />
                  </TableCell>
                  <TableCell>
                    <Skeleton variant="text" width="100%" height={40} />
                  </TableCell>
                  <TableCell>
                    <Skeleton variant="text" width="100%" height={40} />
                  </TableCell>
                  <TableCell>
                    <Skeleton variant="text" width="100%" height={40} />
                  </TableCell>
                  <TableCell sx={{ textAlign: "center" }}>
                    <Button
                      color="primary"
                      style={{ marginRight: "8px" }} // Added some spacing for better UI
                    >
                      <BorderColorIcon />
                    </Button>
                    <Button color="warning">
                      <DeleteForeverIcon />
                    </Button>
                  </TableCell>
                </TableRow>
              </TableBody>
              <TableBody>
                <TableRow>
                  <TableCell>
                    <Skeleton variant="text" width="100%" height={40} />
                  </TableCell>
                  <TableCell>
                    <Skeleton variant="text" width="100%" height={40} />
                  </TableCell>
                  <TableCell>
                    <Skeleton variant="text" width="100%" height={40} />
                  </TableCell>
                  <TableCell>
                    <Skeleton variant="text" width="100%" height={40} />
                  </TableCell>
                  <TableCell>
                    <Skeleton variant="text" width="100%" height={40} />
                  </TableCell>
                  <TableCell sx={{ textAlign: "center" }}>
                    <Button
                      color="primary"
                      style={{ marginRight: "8px" }} // Added some spacing for better UI
                    >
                      <BorderColorIcon />
                    </Button>
                    <Button color="warning">
                      <DeleteForeverIcon />
                    </Button>
                  </TableCell>
                </TableRow>
              </TableBody>
              <TableBody>
                <TableRow>
                  <TableCell>
                    <Skeleton variant="text" width="100%" height={40} />
                  </TableCell>
                  <TableCell>
                    <Skeleton variant="text" width="100%" height={40} />
                  </TableCell>
                  <TableCell>
                    <Skeleton variant="text" width="100%" height={40} />
                  </TableCell>
                  <TableCell>
                    <Skeleton variant="text" width="100%" height={40} />
                  </TableCell>
                  <TableCell>
                    <Skeleton variant="text" width="100%" height={40} />
                  </TableCell>
                  <TableCell sx={{ textAlign: "center" }}>
                    <Button
                      color="primary"
                      style={{ marginRight: "8px" }} // Added some spacing for better UI
                    >
                      <BorderColorIcon />
                    </Button>
                    <Button color="warning">
                      <DeleteForeverIcon />
                    </Button>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
      </div>
    );
  }
  return (
    <div style={{ height: "100vh" }}>
      <Box
        sx={{
          display: "flex",
          alignItems: "flex-start",
          justifyContent: "space-between",
          marginTop: "100px",
        }}
      >
        {/* Content Box */}
        <Box>
          <h1 style={{ marginTop: "0" }}>
            Client Information Form (CIF)
            <br /> Client Document List (CDL)
          </h1>
          <span>
            Business Made Better, ABN 51 666 810 215 (“<strong>BMB</strong>”)
          </span>
        </Box>
        {/* Logo Box */}
        <Box>
          <img
            src="/images/logo.png"
            alt="Company Logo"
            style={{ maxWidth: "300px", maxHeight: "100px" }}
          />
          <h3 style={{ textAlign: "right", marginBottom: "0" }}>
            (07) 3339 7997
          </h3>
          <p style={{ textAlign: "right", marginTop: "0" }}>
            Level 5, 131 Wickham Terrace<br></br> Brisbane Queensland Australia
            4000 <br></br>E | accounts@uc8.com.au <br></br>W |
            BusinessMadeBetter.com.au
          </p>
        </Box>
      </Box>
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
              <TableCell
                sx={{
                  color: "primary.main",
                  fontWeight: "700",
                  fontSize: "18px",
                }}
              >
                ID
              </TableCell>
              <TableCell
                sx={{
                  color: "primary.main",
                  fontWeight: "700",
                  fontSize: "18px",
                }}
              >
                Full Name
              </TableCell>
              <TableCell
                sx={{
                  color: "primary.main",
                  fontWeight: "700",
                  fontSize: "18px",
                }}
              >
                Email
              </TableCell>
              <TableCell
                sx={{
                  color: "primary.main",
                  fontWeight: "700",
                  fontSize: "18px",
                }}
              >
                City
              </TableCell>
              <TableCell
                sx={{
                  color: "primary.main",
                  fontWeight: "700",
                  fontSize: "18px",
                }}
              >
                State
              </TableCell>
              <TableCell
                sx={{
                  color: "primary.main",
                  fontWeight: "700",
                  textAlign: "center",
                  fontSize: "18px",
                }}
              >
                Actions
              </TableCell>
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
                  <TableCell sx={{ textAlign: "center" }}>
                    <Button
                      onClick={() => navigate(`/cif/view/${client.id}`)} // Redirect to the view page
                      color="success"
                    >
                      <RemoveRedEyeIcon />
                    </Button>
                    <Button
                      onClick={() => handleEdit(client)}
                      color="primary"
                      style={{ marginRight: "8px" }} // Added some spacing for better UI
                    >
                      <BorderColorIcon />
                    </Button>
                    <Button
                      onClick={() => handleDelete(client.id)}
                      color="warning"
                    >
                      <DeleteForeverIcon />
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
