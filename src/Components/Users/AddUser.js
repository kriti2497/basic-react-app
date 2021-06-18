import React, { useState, useRef } from "react";
import Button from "../UI/Button";
import Card from "../UI/Card";
import ErrorModal from "../UI/ErrorModal";
import Wrapper from '../Helpers/Wrapper'
import styles from "./AddUser.module.css";

const AddUser = (props) => {

  const nameInputRef = useRef();
  const ageInputRef = useRef();

  // const [enteredUname, setEnteredUName] = useState("");
  // const [enteredAge, setEnteredAge] = useState("");
  const [isViewModal, setViewModal] = useState()


  const addUserHandler = (event) => {
    event.preventDefault();
    const enteredName = nameInputRef.current.value;
    const enteredAgeVal = ageInputRef.current.value;

    if (enteredName.trim().length === 0 || enteredAgeVal.trim().length === 0) {
      setViewModal({
        title: 'Invalid Input',
        message: 'Please enter valid name and age. (Non empty values)'
      })
      return;
    }

    if (+enteredAgeVal < 1) {
      setViewModal({
        title: 'Invalid age',
        message: 'Please enter valid age (> 0)'
      })
      return;
    }
    // console.log(enteredUname, enteredAge);
    props.onAddUser(enteredName, enteredAgeVal);
    nameInputRef.current.value = ''
    ageInputRef.current.value = ''
    // setEnteredUName("");
    // setEnteredAge("");
  };

  // const userNameChangeHandler = (event) => {
  //   setEnteredUName(event.target.value);
  // };

  // const ageChangeHandler = (event) => {
  //   setEnteredAge(event.target.value);
  // };

  const closeModalHandler = () => {
      setViewModal(null)
  }

  return (
    <Wrapper>
      { isViewModal && <ErrorModal onConfirm={closeModalHandler} title={isViewModal.title} message={isViewModal.message} />}
      {/* //card is a component we have created and not like another other component like div or form
      // hence it doesnt know what the cssClass is
      // so we are sending props to Card component
      //which have to be utilised wisely in Card component */}
      <Card cssClass={styles.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          <input
            id="username"
            // value={enteredUname}
            type="text"
            // onChange={userNameChangeHandler}
            ref={nameInputRef}
          />
          <label htmlFor="age">Age (Years)</label>
          <input
            id="age"
            // value={enteredAge}
            type="number"
            // onChange={ageChangeHandler}
            ref={ageInputRef}
          />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </Wrapper>


      // alternate JSX workaround
      // [
      //    isViewModal && <ErrorModal onConfirm={closeModalHandler} title={isViewModal.title} message={isViewModal.message} />,
      
      // <Card cssClass={styles.input}>
      //   <form onSubmit={addUserHandler}>
      //     <label htmlFor="username">Username</label>
      //     <input
      //       id="username"
      //       value={enteredUname}
      //       type="text"
      //       onChange={userNameChangeHandler}
      //     />
      //     <label htmlFor="age">Age (Years)</label>
      //     <input
      //       id="age"
      //       value={enteredAge}
      //       type="number"
      //       onChange={ageChangeHandler}
      //     />
      //     <Button type="submit">Add User</Button>
      //   </form>
      // </Card>

      // ]

  );
};

export default AddUser;
