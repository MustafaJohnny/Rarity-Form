import { useState } from "react";

const useValidation = () => {
  const [emailError, setEmailError] = useState(false);
  const [collectionError, setCollectionError] = useState(false);
  const [descriptionError, setDescriptionError] = useState(false);
  const [revealError, setRevealError] = useState(false);
  const [discordError, setDiscordError] = useState(false);
  const [idTicketError, setIdTicketError] = useState(false);

  return {
    emailError,
    setEmailError,
    descriptionError,
    revealError,
    discordError,
    idTicketError,
    setIdTicketError,
    setDiscordError,
    setRevealError,
    setDescriptionError,
    collectionError,
    setCollectionError,
  };
};

export default useValidation;
