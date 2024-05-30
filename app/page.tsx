"use client";
import { CSSProperties, useEffect, useRef, useState } from 'react';
import Bubble from '../components/Bubble';
import { useChat, Message } from 'ai/react';
import Footer from '../components/Footer';
import Configure from '../components/Configure';
import PromptSuggestionRow from '../components/PromptSuggestions/PromptSuggestionsRow';
import ThemeButton from '../components/ThemeButton';
import useConfiguration from './hooks/useConfiguration';
import { BubbleChat } from "flowise-embed-react"


export default function Home() {
  
  return (
      <BubbleChat
          chatflowid="e4c10533-7add-47a2-9ea7-f99c8fcd6b25"
          apiHost="https://flowiseai-railway-bizai-development.up.railway.app"
          theme={{
              button: {
                  backgroundColor: "#3B81F6",
                  right: 20,
                  bottom: 20,
                  size: "medium",
                  iconColor: "white",
                  customIconSrc: "https://raw.githubusercontent.com/walkxcode/dashboard-icons/main/svg/google-messages.svg",
              },
              chatWindow: {
                  welcomeMessage: "Hello! I'm here to help you with your marketing needs. Can we start with a few questions about your business",
                  backgroundColor: "#ffffff",
                  height: 700,
                  width: 400,
                  fontSize: 16,
                  poweredByTextColor: "#ffffff",
                  botMessage: {
                      backgroundColor: "#f7f8ff",
                      textColor: "#303235",
                      showAvatar: false,
                      avatarSrc: "https://raw.githubusercontent.com/zahidkhawaja/langchain-chat-nextjs/main/public/parroticon.png",
                  },
                  userMessage: {
                      backgroundColor: "#3B81F6",
                      textColor: "#ffffff",
                      showAvatar: true,
                      avatarSrc: "https://raw.githubusercontent.com/zahidkhawaja/langchain-chat-nextjs/main/public/usericon.png",
                  },
                  textInput: {
                      placeholder: "Type your question",
                      backgroundColor: "#ffffff",
                      textColor: "#303235",
                      sendButtonColor: "#3B81F6",
                  }
              }
          }}
      />
  );
};