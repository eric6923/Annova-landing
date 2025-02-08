import React, { useEffect, useState } from "react";
import Button from "./components/base/Button";
import Vapi from "@vapi-ai/web";
import { isPublicKeyMissingError } from "./utils";


// Define the types we need
interface VapiErrorObject {
  error: {
    code?: string;
    message: string;
  };
}

type AssistantOptions = {
  name: string;
  firstMessage: string;
  transcriber: {
    provider: "deepgram";
    model: string;
    language: string;
  };
  voice: {
    provider: string;
    voiceId: string;
  };
  model: {
    provider: string;
    model: string;
    messages: Array<{
      role: string;
      content: string;
    }>;
  };
};

// Initialize Vapi outside component to prevent multiple instances
const VAPI_KEY = "699cf8b7-8bff-4c5a-b163-0cd4ce140b6f";
const vapi = new Vapi(VAPI_KEY);

const assistantOptions: AssistantOptions = {
  name: "FRIDAY",
  firstMessage: "Hi I am Friday, an advanced artificial intelligence system. How is your day going?",
  transcriber: {
    provider: "deepgram",
    model: "nova-2",
    language: "en-US",
  },
  voice: {
    provider: "playht",
    voiceId: "jennifer",
  },
  model: {
    provider: "groq",
    model: "mixtral-8x7b-32768",
    messages: [
      {
        role: "system",
        content: `You are an intelligent assistant named FRIDAY. You are up to date with all technologies.
You were created by Eric.
Keep the conversations short.

- Be sure to be kind of funny and witty!
- Keep all your responses short and simple. Use casual language, phrases like "Umm...", "Well...", and "I mean" are preferred.
- This is a voice conversation, so keep your responses short, like in a real conversation. Don't ramble for too long.`
      }
    ]
  }
};

// Custom hook for handling public key invalid message
const usePublicKeyInvalid = () => {
  const [showPublicKeyInvalidMessage, setShowPublicKeyInvalidMessage] = useState<boolean>(false);

  useEffect(() => {
    if (showPublicKeyInvalidMessage) {
      const timer = setTimeout(() => {
        setShowPublicKeyInvalidMessage(false);
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [showPublicKeyInvalidMessage]);

  return {
    showPublicKeyInvalidMessage,
    setShowPublicKeyInvalidMessage,
  };
};

// PleaseSetYourPublicKeyMessage component
const PleaseSetYourPublicKeyMessage: React.FC = () => {
  return (
    <div
      style={{
        position: "fixed",
        bottom: "25px",
        left: "25px",
        padding: "10px",
        color: "#fff",
        backgroundColor: "black",
        borderRadius: "5px",
        boxShadow: "0 2px 5px rgba(0,0,0,0.2)",
      }}
    >
      Is your Vapi Public Key missing? (recheck your code)
    </div>
  );
};

const App: React.FC = () => {
  const [connecting, setConnecting] = useState<boolean>(false);
  const [connected, setConnected] = useState<boolean>(false);
  const [buttonText, setButtonText] = useState<string>("Activate System");
  const [error, setError] = useState<string>("");

  const { showPublicKeyInvalidMessage, setShowPublicKeyInvalidMessage } = usePublicKeyInvalid();

  useEffect(() => {
    const handleCallStart = () => {
      setConnecting(false);
      setConnected(true);
      setShowPublicKeyInvalidMessage(false);
      setButtonText("End Call");
      setError("");
    };

    const handleCallEnd = () => {
      setConnecting(false);
      setConnected(false);
      setShowPublicKeyInvalidMessage(false);
      setButtonText("Activate System");
      setError("");
    };

    const handleError = (errorObj: VapiErrorObject) => {
      console.error("Vapi Error:", errorObj);
      setConnecting(false);
      setButtonText("Activate System");
      setError(errorObj.error.message || "An error occurred");
      
      if (isPublicKeyMissingError({ vapiError: errorObj })) {
        setShowPublicKeyInvalidMessage(true);
      }
    };

    vapi.on("call-start", handleCallStart);
    vapi.on("call-end", handleCallEnd);
    vapi.on("error", handleError);

    return () => {
      vapi.off("call-start", handleCallStart);
      vapi.off("call-end", handleCallEnd);
      vapi.off("error", handleError);
    };
  }, [setShowPublicKeyInvalidMessage]);

  const startCallInline = async () => {
    try {
      setConnecting(true);
      setButtonText("Starting System");
      setError("");
      await vapi.start(assistantOptions);
    } catch (err) {
      console.error("Failed to start call:", err);
      setError("Failed to start call");
      setConnecting(false);
      setButtonText("Activate System");
    }
  };

  const endCall = async () => {
    try {
      await vapi.stop();
    } catch (err) {
      console.error("Failed to end call:", err);
      setError("Failed to end call");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center w-screen h-screen">
      {error && (
        <div className="mb-4 p-2 bg-red-100 text-red-700 rounded">
          {error}
        </div>
      )}
      
      {!connected ? (
        <Button onClick={startCallInline} isLoading={connecting}>
          <div className={connecting ? "fade-text" : ""}>
            {buttonText}
          </div>
        </Button>
      ) : (
        <Button onClick={endCall}>
          <div>{buttonText}</div>
        </Button>
      )}

      {showPublicKeyInvalidMessage && <PleaseSetYourPublicKeyMessage />}
    </div>
  );
};

export default App;