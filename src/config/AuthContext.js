import { createContext, useState } from "react";

export const AuthContext = createContext({
  isAuthenticated: false,
  authToken: "",
  authUser: {},
  formData: {}, // Add formData here for TypeScript/PropTypes consistency
  handleChange: () => {}, // Placeholder for the handleChange function
});

export const AuthProvider = ({ children }) => {
  const [CCFFormData, setCCFFormData] = useState({});
  const [CAAFormData, setCAAFormData] = useState({
    trader: true,
    trust: true,
    partnership: true,
    company: true,
    notForProfit: true,
    entityTypeOther: "entityTypeOther",
    CAADateEstablished: new Date().toISOString().split("T")[0],
    registeredGST: false,
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
    CAAMarketSectorOther:"MarketSector Other",
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
    consumablesOtherText:"Consume",
    monthlyReoccurringCostOtherText:"Monthly Reoccurring",
    equipmentPurchasesOtherText:"Equipment",
  });
  const [VAFFormData, setVAFFormData] = useState({});
  const [PAFFormData, setPAFFormData] = useState({});
  const [IAFFormData, setIAFFormData] = useState({});
  const [OBSFormData, setOBSFormData] = useState({});
  const [AAFFormData, setAAFFormData] = useState({});
  const [APAFormData, setAPAFormData] = useState({});
  const [TCTFormData, setTCTFormData] = useState({});

  const [formData, setFormData] = useState({
    clientAccount: "client account",
    approvedCredit: "approved credit",
    approvedBy: "approved by",
    fullName: "Full Name",
    tradingAs: "Trading As",
    abn: "ABN",
    acn: "ACN",
    addressLine1: "Address Line 1",
    addressLine2: "Address Line 2",
    addressLine3: "Address Line 3",
    suburb: "Suburb",
    postcode: "Post Code",
    city: "City",
    state: "State",
    title: "Title",
    firstName: "First Name",
    position: "Position",
    middleName: "Middle Name",
    surname: "Surname",
    tel: "333333333333",
    fax: "222222222222",
    mobile: "1111111111",
    email: "bmb@bmb.com",
    webUrl: "bmb@website.com",
    bsb: "BSB",
    bank: "BANK",
    accountNumber: "#123123123",
    branch: "Branch",
    accountName: "Account Name",
    idCheck: true,
    copyBills: true,
    faxEndPoint: true,
    telEndPoint: true,

    driverLicenseNumber: "License123",
    stateTerritory:"State Territory",
    dlExpiryDate: "2025-01-01",
    rateNotice: true,
    electricityBill: true,
    telephoneBill: true,
    rentRecept: true,
    card18: true,
    otherSpecify: true,
    requestAFS: true,
    requireDN: true,
    salesperson:"sales person",
    uc8Cloud: true,
    softPhone: true,
    ippbx: true,
    premiseHardware: true,
    ipCordless: true,
    ipHandset: true,
    ata: true,
    VoipOther: true,
    VoipOtherText: "VOIP OTHER",
    otherSpecifyText: "Other Specify",
    //CAA form
    inboundTel: "Inbound Tel",
    fnnTel: "FNN TEL",
    inboundFax: "Inbound Fax",
    fnnFax: "FNN Fax",
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

    serviceNumber1: "",
    serviceNumber2: "",
    serviceNumber3: "",
    serviceNumber4: "",
    serviceNumber5: "",
    serviceNumber6: "",
    serviceNumber7: "",
    serviceNumber8: "",
    serviceNumber9: "",
    serviceNumber10: "",
    serviceNumber11: "",
    serviceNumber12: "",

    serviceDescription1: "",
    serviceDescription2: "",
    serviceDescription3: "",
    serviceDescription4: "",
    serviceDescription5: "",
    serviceDescription6: "",
    serviceDescription7: "",
    serviceDescription8: "",
    serviceDescription9: "",
    serviceDescription10: "",
    serviceDescription11: "",
    serviceDescription12: "",

    simCost1: "",
    simCost2: "",
    simCost3: "",
    simCost4: "",
    simCost5: "",
    simCost6: "",
    simCost7: "",
    simCost8: "",
    simCost9: "",
    simCost10: "",
    simCost11: "",
    simCost12: "",

    mro1: "",
    mro2: "",
    mro3: "",
    mro4: "",
    mro5: "",
    mro6: "",
    mro7: "",
    mro8: "",
    mro9: "",
    mro10: "",
    mro11: "",
    mro12: "",

    planCode1: "",
    planCode2: "",
    planCode3: "",
    planCode4: "",
    planCode5: "",
    planCode6: "",
    planCode7: "",
    planCode8: "",
    planCode9: "",
    planCode10: "",
    planCode11: "",
    planCode12: "",

    monthlySubscription1: "",
    monthlySubscription2: "",
    monthlySubscription3: "",
    monthlySubscription4: "",
    monthlySubscription5: "",
    monthlySubscription6: "",
    monthlySubscription7: "",
    monthlySubscription8: "",
    monthlySubscription9: "",
    monthlySubscription10: "",
    monthlySubscription11: "",
    monthlySubscription12: "",

    //APA form 1. Please select Payment Method
    creditCard: true,
    bankDebit: false,
    //APA form 2. Card Type
    visaCard: true,
    masterCard: false,
    americanExpressCard: false,
    cardNumber: "",
    cardExpiryDate: new Date().toISOString().split("T")[0],
    cardCSVNumber: "0000",
    nameAsDisplayedOnCard: "",

    //APA form 3. For Direct debt from a bank account.
    bankInstitution: "",

    //PAF form 1
    provisioningTicket: "",

    //PAF form 6
    simplePortQty: "1",
    simplePortUnitCost: "9",
    simplePortPortingFee: "",
    complexPortQty: "1",
    complexPortUnitCost: "99",
    complexPortPortingFee: "0",
    numberRangeQty: "0",
    numberRangeUnitCost: "199",
    numberRangePortingFee: "0",
    //PAF form 7
    singleNumber_1: true,
    singleNumber_2: false,
    singleNumber_3: false,
    singleNumber_4: false,
    singleNumber_5: false,
    singleNumber_6: false,
    singleNumber_7: false,
    singleNumber_8: false,
    singleNumber_9: false,
    singleNumber_10: false,
    singleNumber_11: false,
    singleNumber_12: false,
    singleNumber_13: false,
    singleNumber_14: false,
    singleNumber_15: false,
    singleNumber_16: false,
    singleNumber_17: false,
    singleNumber_18: false,

    multiNumbers_1: true,
    multiNumbers_2: false,
    multiNumbers_3: false,
    multiNumbers_4: false,
    multiNumbers_5: false,
    multiNumbers_6: false,
    multiNumbers_7: false,
    multiNumbers_8: false,
    multiNumbers_9: false,
    multiNumbers_10: false,
    multiNumbers_11: false,
    multiNumbers_12: false,
    multiNumbers_13: false,
    multiNumbers_14: false,
    multiNumbers_15: false,
    multiNumbers_16: false,
    multiNumbers_17: false,
    multiNumbers_18: false,

    numbers100_1: true,
    numbers100_2: false,
    numbers100_3: false,
    numbers100_4: false,
    numbers100_5: false,
    numbers100_6: false,
    numbers100_7: false,
    numbers100_8: false,
    numbers100_9: false,
    numbers100_10: false,
    numbers100_11: false,
    numbers100_12: false,
    numbers100_13: false,
    numbers100_14: false,
    numbers100_15: false,
    numbers100_16: false,
    numbers100_17: false,
    numbers100_18: false,

    service1Number: 123123,
    service2Number: "",
    service3Number: "",
    service4Number: "",
    service5Number: "",
    service6Number: "",
    service7Number: "",
    service8Number: "",
    service9Number: "",
    service10Number: "",
    service11Number: "",
    service12Number: "",
    service13Number: "",
    service14Number: "",
    service15Number: "",
    service16Number: "",
    service17Number: "",
    service18Number: "",

    service1LosingCarrier: 123123,
    service2LosingCarrier: "",
    service3LosingCarrier: "",
    service4LosingCarrier: "",
    service5LosingCarrier: "",
    service6LosingCarrier: "",
    service7LosingCarrier: "",
    service8LosingCarrier: "",
    service9LosingCarrier: "",
    service10LosingCarrier: "",
    service11LosingCarrier: "",
    service12LosingCarrier: "",
    service13LosingCarrier: "",
    service14LosingCarrier: "",
    service15LosingCarrier: "",
    service16LosingCarrier: "",
    service17LosingCarrier: "",
    service18LosingCarrier: "",

    service1AccountNumber: 123123,
    service2AccountNumber: "",
    service3AccountNumber: "",
    service4AccountNumber: "",
    service5AccountNumber: "",
    service6AccountNumber: "",
    service7AccountNumber: "",
    service8AccountNumber: "",
    service9AccountNumber: "",
    service10AccountNumber: "",
    service11AccountNumber: "",
    service12AccountNumber: "",
    service13AccountNumber: "",
    service14AccountNumber: "",
    service15AccountNumber: "",
    service16AccountNumber: "",
    service17AccountNumber: "",
    service18AccountNumber: "",

    //PAF form 8 List Current Carrier or Carriage Service Provider
    currentProvider: "",
    currentProviderAccountNumber: "",

    qtyOfDIDService: true,
    birthDate: "1989-10-09",
    dateEstablished: new Date().toISOString().split("T")[0],
    expiryDate: new Date().toISOString().split("T")[0],
    signDate: new Date().toISOString().split("T")[0],
    declarationDate: new Date().toISOString().split("T")[0],
  });
  const sharedFields = ["fullName", "email", "tel"];
  const handleChange = (eventOrDate, name = null) => {
    if (eventOrDate && eventOrDate.target) {
      const { name, value, type, checked } = eventOrDate.target;
      setFormData((prevData) => ({
        ...prevData,
        [name]: type === "checkbox" ? checked : value,
      }));
      if (sharedFields.includes(name)) {
        setCCFFormData((prevData) => ({
          ...prevData,
          [name]: type === "checkbox" ? checked : value,
        }));
        setCAAFormData((prevData) => ({
          ...prevData,
          [name]: type === "checkbox" ? checked : value,
        }));

        setVAFFormData((prevData) => ({
          ...prevData,
          [name]: type === "checkbox" ? checked : value,
        }));

        setPAFFormData((prevData) => ({
          ...prevData,
          [name]: type === "checkbox" ? checked : value,
        }));

        setIAFFormData((prevData) => ({
          ...prevData,
          [name]: type === "checkbox" ? checked : value,
        }));

        setOBSFormData((prevData) => ({
          ...prevData,
          [name]: type === "checkbox" ? checked : value,
        }));

        setAAFFormData((prevData) => ({
          ...prevData,
          [name]: type === "checkbox" ? checked : value,
        }));

        setAPAFormData((prevData) => ({
          ...prevData,
          [name]: type === "checkbox" ? checked : value,
        }));

        setTCTFormData((prevData) => ({
          ...prevData,
          [name]: type === "checkbox" ? checked : value,
        }));
      }
    } else {
      const dateName = name;
      setFormData((prevData) => ({
        ...prevData,
        [dateName]: eventOrDate,
      }));
      if (sharedFields.includes(dateName)) {
        setCCFFormData((prevData) => ({
          ...prevData,
          [dateName]: eventOrDate,
        }));
        setCAAFormData((prevData) => ({
          ...prevData,
          [dateName]: eventOrDate,
        }));
        setVAFFormData((prevData) => ({
          ...prevData,
          [dateName]: eventOrDate,
        }));
        setPAFFormData((prevData) => ({
          ...prevData,
          [dateName]: eventOrDate,
        }));
        setIAFFormData((prevData) => ({
          ...prevData,
          [dateName]: eventOrDate,
        }));
        setOBSFormData((prevData) => ({
          ...prevData,
          [dateName]: eventOrDate,
        }));
        setAAFFormData((prevData) => ({
          ...prevData,
          [dateName]: eventOrDate,
        }));
        setAPAFormData((prevData) => ({
          ...prevData,
          [dateName]: eventOrDate,
        }));
        setTCTFormData((prevData) => ({
          ...prevData,
          [dateName]: eventOrDate,
        }));
      }
    }
  };

  const contextValue = {
    isAuthenticated: false,
    authToken: "",
    authUser: {},
    formData,
    CCFFormData,
    CAAFormData,
    VAFFormData,
    PAFFormData,
    IAFFormData,
    OBSFormData,
    AAFFormData,
    APAFormData,
    TCTFormData,
    handleChange,
  };

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};
