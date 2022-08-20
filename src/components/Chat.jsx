import {
  collection,
  onSnapshot,
  orderBy,
  query,
  QuerySnapshot,
} from "firebase/firestore";
import React, { useRef, useState, useEffect } from "react";
import Message from "./Message";
import { db } from "../firebase";
import SendMessage from "./SendMessage";

const style = {
  main: `flex flex-col p-[10px] relative`,
};

function Chat() {
  const [messages, setMessages] = useState([]);
  const scroll = useRef();

  useEffect(() => {
    const q = query(collection(db, "messages"), orderBy("timestamp"));
    const unsubscribe = onSnapshot(q, (QuerySnapshot) => {
      let messages = [];
      QuerySnapshot.forEach((doc) => {
        messages.push({ ...doc.data(), id: doc.id });
        setMessages(messages);
      });
    });
    return () => unsubscribe();
  }, []);

  return (
    <>
      <main className={style.main}>
        {messages &&
          messages.map((message) => (
            <Message key={message.id} message={message} />
          ))}
      </main>
      <SendMessage />
      <span ref={scroll}></span>
    </>
  );
}

export default Chat;
