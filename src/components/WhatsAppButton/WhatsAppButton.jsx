import React from "react";
import styles from "./WhatsAppButton.module.css";

export const WhatsAppButton = () => {
  const phoneNumber = "916302852306";
  const message = "Hi Ganga, I visited your portfolio and would like to connect!";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={styles.whatsappButton}
      aria-label="Chat on WhatsApp"
    >
      <svg
        className={styles.whatsappIcon}
        viewBox="0 0 32 32"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M16.002 0C7.175 0 0.002 7.175 0.002 16c0 2.82.736 5.574 2.138 8.004L.014 32l8.208-2.092A15.908 15.908 0 0016.002 32c8.825 0 16-7.175 16-16s-7.175-16-16-16zm0 29.333c-2.52 0-4.998-.672-7.165-1.946l-.513-.305-5.322 1.357 1.42-5.188-.334-.529A13.26 13.26 0 012.669 16c0-7.353 5.98-13.333 13.333-13.333S29.335 8.647 29.335 16s-5.98 13.333-13.333 13.333zm7.313-9.987c-.4-.2-2.367-1.167-2.733-1.3-.367-.133-.633-.2-.9.2-.267.4-1.033 1.3-1.267 1.567-.233.267-.467.3-.867.1-.4-.2-1.687-.62-3.213-1.98-1.187-1.06-1.987-2.367-2.22-2.767-.233-.4-.025-.617.175-.817.18-.18.4-.467.6-.7.2-.233.267-.4.4-.667.133-.267.067-.5-.033-.7-.1-.2-.9-2.167-1.233-2.967-.325-.78-.655-.675-.9-.688-.233-.012-.5-.015-.767-.015-.267 0-.7.1-1.067.5-.367.4-1.4 1.367-1.4 3.333s1.433 3.867 1.633 4.133c.2.267 2.82 4.307 6.833 6.033.955.412 1.7.658 2.28.842.958.305 1.83.262 2.52.16.77-.115 2.367-.968 2.7-1.902.333-.933.333-1.733.233-1.9-.1-.167-.367-.267-.767-.467z" />
      </svg>
      <span className={styles.tooltip}>Chat with me</span>
    </a>
  );
};
