import React, { useEffect } from "react";
import { io } from "socket.io-client";

const socket = io("http://localhost:8080");

export default function TestSocket() {
  useEffect(() => {
    socket.on("connect", () => {
      console.log("Socket connected:", socket.id);
    });

    socket.on("connect_error", (err) => {
      console.error("Socket connection error:", err);
    });

    return () => {
      socket.off("connect");
      socket.off("connect_error");
    };
  }, []);

  return <div>Testing socket connection... Check console.</div>;
}
