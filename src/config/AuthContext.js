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
    idCheck: true,
    copyBills: true,
    trader: true,
    trust: true,
    partnership: true,
    company: true,
    notForProfit: true,
    education: true,
    healthCare: true,
    retail: true,
    manufacturing: true,
    government: true,
    transport: true,
    finance: true,
    residential: true,
    hospitality: true,
    legal: true,
    advertising: true,
    building: true,
    entertainment: true,
    industry: true,
    faxEndPoint: true,
    telEndPoint: true,
    transferChurn: true,
    newOwners: true,
    relocateServices: true,
    newServices: true,
    monthlyReoccurringCost14Days: true,
    monthlyReoccurringCostOther: true,
    equipmentPurchasesCOD: true,
    equipmentPurchases7Days: true,
    equipmentPurchases14Days: true,
    equipmentPurchasesOther: true,
    consumablesCOD: true,
    consumables7Days: true,
    consumables14Days: true,
    consumablesOther: true,
    rateNotice: true,
    electricityBill: true,
    telephoneBill: true,
    rentRecept: true,
    card18: true,
    otherSpecify: true,
    otherSpecifyText:"",

    birthDate:"1989-10-09",
    expiryDate:new Date().toISOString().split('T')[0],
    signDate:new Date().toISOString().split('T')[0],
    declarationDate:new Date().toISOString().split('T')[0],
  });

  const handleChange = (eventOrDate, name = null) => {
    if (eventOrDate && eventOrDate.target) {
      const { name, value, type, checked } = eventOrDate.target;
      setFormData((prevData) => ({
        ...prevData,
        [name]: type === "checkbox" ? checked : value,
      }));
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [name]: eventOrDate, // For DatePicker, set the value using the name passed in
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
