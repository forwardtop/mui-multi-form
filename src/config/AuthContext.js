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
    requestAFS: true,
    requireDN: true,

    uc8Cloud: true,
    softPhone: true,
    ippbx: true,
    premiseHardware: true,
    ipCordless: true,
    ipHandset: true,
    ata: true,
    VoipOther: true,
    VoipOtherText: "",
    otherSpecifyText: "",

    //VAF form 11.Plan and Service Details
    sip_1: true,
    sip_2: false,
    sip_3: false,
    sip_4: false,
    sip_5: false,
    sip_6: false,
    sip_7: false,
    sip_8: false,
    sip_9: false,
    sip_10: false,
    sip_11: false,
    sip_12: false,

    inbound_1: true,
    inbound_2: false,
    inbound_3: false,
    inbound_4: false,
    inbound_5: false,
    inbound_6: false,
    inbound_7: false,
    inbound_8: false,
    inbound_9: false,
    inbound_10: false,
    inbound_11: false,
    inbound_12: false,

    mobile_1: true,
    mobile_2: false,
    mobile_3: false,
    mobile_4: false,
    mobile_5: false,
    mobile_6: false,
    mobile_7: false,
    mobile_8: false,
    mobile_9: false,
    mobile_10: false,
    mobile_11: false,
    mobile_12: false,

    security_1: true,
    security_2: false,
    security_3: false,
    security_4: false,
    security_5: false,
    security_6: false,
    security_7: false,
    security_8: false,
    security_9: false,
    security_10: false,
    security_11: false,
    security_12: false,

    hosting_1: true,
    hosting_2: false,
    hosting_3: false,
    hosting_4: false,
    hosting_5: false,
    hosting_6: false,
    hosting_7: false,
    hosting_8: false,
    hosting_9: false,
    hosting_10: false,
    hosting_11: false,
    hosting_12: false,

    support_1: true,
    support_2: false,
    support_3: false,
    support_4: false,
    support_5: false,
    support_6: false,
    support_7: false,
    support_8: false,
    support_9: false,
    support_10: false,
    support_11: false,
    support_12: false,

    other_1: true,
    other_2: false,
    other_3: false,
    other_4: false,
    other_5: false,
    other_6: false,
    other_7: false,
    other_8: false,
    other_9: false,
    other_10: false,
    other_11: false,
    other_12: false,

    //VAF form 12.Contact Period
    minimumContractPeriod: "1",

    //APA form 1. Please select Payment Method
    creditCard:true,
    bankDebit:false,
    //APA form 2. Card Type
    visaCard:true,
    masterCard:false,
    americanExpressCard:false,
    cardNumber:"",
    cardExpiryDate:new Date().toISOString().split("T")[0],
    cardCSVNumber:"0000",
    nameAsDisplayedOnCard:"",

    //APA form 3. For Direct debt from a bank account.
    bankInstitution:"",
    
    //PAF form 1
    provisioningTicket:"",


    
    qtyOfDIDService: true,
    birthDate: "1989-10-09",
    dateEstablished: new Date().toISOString().split("T")[0],
    expiryDate: new Date().toISOString().split("T")[0],
    signDate: new Date().toISOString().split("T")[0],
    declarationDate: new Date().toISOString().split("T")[0],
  });

  const handleChange = (eventOrDate, name = null) => {
    if (eventOrDate && eventOrDate.target) {
      // Handles input fields like text, checkbox, etc.
      const { name, value, type, checked } = eventOrDate.target;
      setFormData((prevData) => ({
        ...prevData,
        [name]: type === "checkbox" ? checked : value,
      }));
    } else {
      // Handles DatePicker or other cases where eventOrDate is not an event object
      const dateName = name; // Use the name passed as an argument
      setFormData((prevData) => ({
        ...prevData,
        [dateName]: eventOrDate,
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
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};
