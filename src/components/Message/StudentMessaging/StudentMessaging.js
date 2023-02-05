import React, { useEffect, useRef, useState } from "react";

import { db } from "../../../firebase";
import firebase from "firebase/compat/app";

import { IoIosSend } from "react-icons/io";

export default function StudentMessaging({ nameOfExperiment }) {
  const [inputMessage, setInputMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const messageEndRef = useRef(null);
  useEffect(() => {
    db.collection("messages")
      .orderBy("timeOfMessage", "asc")
      .onSnapshot((snapshot) => {
        setMessages(
          snapshot.docs.map((doc) => ({ id: doc.id, message: doc.data() }))
        );
      });
  }, []);
  const sendMessage = () => {
    db.collection("messages").add({
      nameOfStudent: "Anish",
      message: inputMessage,
      isStudent: true,
      timeOfMessage: firebase.firestore.FieldValue.serverTimestamp(),
    });
    setInputMessage("");
  };
  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  console.log(messages);
  const scrollToBottom = () => {
    messageEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="w-[400px] bg-white h-[97vh] rounded-[10px] ">
      <h1 className="flex justify-center align-center p-[10px]">
        Teacher Name
      </h1>
      <div className=" flex flex-col h-[83vh] overflow-scroll">
        {messages.map((message) => {
          //move to right for student
          const senderClass = message.message.isStudent
            ? `bg-green-300 ml-[150px] mr-[10px] rounded-[10px] p-[10px] text-white`
            : `bg-custom-gray p-[10px] rounded-[10px] mr-[40%] ml-[10px] `;
          return (
            <div
              className={`${senderClass} my-2 flex flex-col min-w-[5rem]   h-[5rem] pt-[10px]`}>
              <h3
                className={
                  message.message.isStudent === true ? `text-white` : ``
                }>
                {message.message.message}
              </h3>

              <span className="relative left-[70%]">
                {message.message.isStudent === true
                  ? message.message.nameOfStudent
                  : ""}
              </span>
            </div>
          );
        })}
        <div ref={messageEndRef} />
      </div>
      <div className="flex w-[95%] p-[2%] justify-center">
        <input
          className="border-[1px] border-black relative z-[1] w-full h-[42px] pl-[7px] rounded-[10px] left-[10px] focus:outline-none "
          type="text"
          value={inputMessage}
          placeholder="Enter Your Message Here"
          onChange={(e) => setInputMessage(e.target.value)}
        />
        {messages === "" ? (
          ""
        ) : (
          <div
            className="relative flex items-center justify-center z-10 right-[22px]"
            onClick={sendMessage}>
            {/* {!inputMessage || inputMessage.length === 0 ? alert('enter some thing'):  <IoIosSend />} */}
            <IoIosSend />
          </div>
        )}
      </div>
    </div>
  );
}
