import { createContext, useState } from "react";

export const AuthContext = createContext({
  isAuthenticated: false,
  authToken: "",
  authUser: {},
  formData: {}, // Add formData here for TypeScript/PropTypes consistency
  handleChange: () => {}, // Placeholder for the handleChange function
});

export const AuthProvider = ({ children }) => {
  const [formData, setFormData] = useState({
    clientAccount: "",
    approvedCredit: "",
    approvedBy: "",
    fullName: "",
    tradingAs: "",
    abn: "",
    acn: "",
    addressLine1: "",
    addressLine2: "",
    addressLine3: "",
    suburb: "",
    postcode: "",
    city: "",
    state: "",
    title: "",
    firstName: "",
    position: "",
    middleNames: "",
    surname: "",
    tel: "",
    fax: "",
    mobile: "",
    email: "",
    webUrl: "",
    bsb: "",
    bank: "",
    accountNumber: "",
    branch: "",
    accountName: "",
    idCheck: "",
    copyBills: "",
    birthDate:"1989-10-09",
    expiryDate:new Date().toISOString().split('T')[0],
    signDate:new Date().toISOString().split('T')[0],
    declarationDate:new Date().toISOString().split('T')[0],
  });

  const handleChange = (eventOrDate, name) => {
    if (name) {
      setFormData((prevData) => ({
        ...prevData,
        [name]: eventOrDate, 
      }));
    } else {
      const { name, value, type, checked } = eventOrDate.target;
      setFormData((prevData) => ({
        ...prevData,
        [name]: type === "checkbox" ? checked : value,
      }));
    }
  };

  const contextValue = {
    isAuthenticated: false, 
    authToken: "", 
    authUser: {}, 
    formData, 
    handleChange,
  };

  return (
    <AuthContext.Provider value={contextValue}>
      {children}
    </AuthContext.Provider>
  );
};
