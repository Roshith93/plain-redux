import { createStore, combineReducers } from "redux";

// reducers
const personalDetail = {
  name: "",
  age: "",
  sex: ""
};
const personalDetails = (state = personalDetail, action) => {
  switch (action.type) {
    case "USER":
      return {
        ...state,
        name: action.payload
      };
    case "AGE":
      return {
        ...state,
        age: action.payload
      };
    case "SEX":
      return {
        ...state,
        sex: action.payload
      };
    default:
      return state;
  }
};

const jobDetail = {
  companyName: "",
  designation: "",
  isContractor: ""
};
const jobDetails = (state = jobDetail, action) => {
  switch (action.type) {
    case "COMPANY_NAME":
      return {
        ...state,
        companyName: action.payload
      };
    case "DESIGNATION":
      return {
        ...state,
        designation: action.payload
      };
    case "IS_CONTRACT":
      return {
        ...state,
        isContractor: action.payload
      };
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  personalDetails,
  jobDetails
});

// store

const store = createStore(rootReducer);

// subscribe to store
store.subscribe(() => {
  console.log("store data", store.getState());
});

// dispatch actions

// PERONAL DETAILS
const getUserName = () => {
  return {
    type: "USER",
    payload: "ROshith"
  };
};

const getUserAge = () => {
  return {
    type: "AGE",
    payload: 25
  };
};

const getUserSex = () => {
  return {
    type: "SEX",
    payload: "Male"
  };
};

// COMPANY DETAILS

const getCompanyName = () => {
  return {
    type: "COMPANY_NAME",
    payload: "emids"
  };
};
const getUserDesignation = () => {
  return {
    type: "DESIGNATION",
    payload: "sse"
  };
};
const getUserStatus = () => {
  return {
    type: "IS_CONTRACT",
    payload: [{ name: "roshith", age: 25, isMarried: false }]
  };
};

store.dispatch(getUserName());
store.dispatch(getUserAge());
store.dispatch(getUserSex());
store.dispatch(getCompanyName());
store.dispatch(getUserDesignation());
store.dispatch(getUserStatus());
