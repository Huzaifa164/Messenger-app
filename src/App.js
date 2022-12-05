import { useEffect, useState } from "react";
import "./App.css";
import Nav from "./components/Nav";
import { FormControl, Input, IconButton } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import Message from "./components/Message";
import {
  collection,
  query,
  onSnapshot,
  querySnapshot,
  addDoc,
  serverTimestamp,
  orderBy,
} from "firebase/firestore";
import db from "./firebase";
import FlipMove from 'react-flip-move';

function App() {
  const [username, setUserName] = useState("");
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const q = query(collection(db, "messeges"), orderBy("timestamp", "desc"));
    onSnapshot(q, (querySnapshot) => {
      setMessages(
        querySnapshot.docs.map((doc) => ({ id: doc.id, message: doc.data() }))
      );
      // setUserName(querySnapshot.docs.map((doc) => doc.data().username));
    });
  }, []);

  useEffect(() => {
    setUserName(prompt("Enter your name:"));
  }, []);

  const sendMessage = async (e) => {
    e.preventDefault();
    // setMessages([...messages, input])

    await addDoc(collection(db, "messeges"), {
      username: username,
      message: input,
      timestamp: serverTimestamp(),
    });

    setInput("");
  };

  return (
    <div className="app">
      <Nav username={username || "Unknown user"} />
      <form className="form">
        <FormControl className="form_control">
          <Input
            className="form_input"
            placeholder="Enter Your Message"
            value={input}
            onChange={(e) => {
              setInput(e.target.value);
            }}
          />
          <IconButton
            className="icon_button"
            disabled={input === ""}
            type="submit"
            onClick={sendMessage}
          >
            <SendIcon className="icon" />
          </IconButton>
        </FormControl>
      </form>
      <div className="messages">
        <FlipMove>
          {messages.map(({ id, message }) => (
            <Message key={id} username={username} message={message} />
          ))}
        </FlipMove>
      </div>
    </div>
  );
}

export default App;
