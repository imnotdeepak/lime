import { useAppStore } from "@/store";
import React from "react";
import { Avatar, AvatarImage } from "./ui/avatar";
import { HOST } from "@/utils/constants";
import { getColor } from "@/lib/utils";

const ContactList = ({ contacts = [], isChannel = false }) => {
  const {
    selectedChatData,
    setSelectedChatData,
    setSelectedChatType,
    setSelectedChatMessages,
  } = useAppStore();

  const handleClick = (contact) => {
    if (isChannel) {
      setSelectedChatType("channel");
    } else {
      setSelectedChatType("contact");
    }
    setSelectedChatData(contact);
    if (selectedChatData && selectedChatData._id !== contact._id) {
      setSelectedChatMessages([]);
    }
  };

  return (
    <div className="flex flex-col gap-3">
      {contacts &&
        contacts.map((contact) => (
          <div
            key={contact._id}
            className="flex items-center gap-3 cursor-pointer hover:bg-accent p-2 rounded-md"
            onClick={() => handleClick(contact)}
          >
            <div className="flex items-center gap-3">
              {!isChannel && (
                <Avatar className="h-9 w-9">
                  {contact.image ? (
                    <AvatarImage
                      src={`${HOST}/${contact.image}`}
                      alt="avatar"
                    />
                  ) : (
                    <div
                      className="h-9 w-9 rounded-full flex items-center justify-center text-white"
                      style={{
                        backgroundColor: getColor(
                          contact.firstName || contact.email
                        ),
                      }}
                    >
                      {contact.firstName
                        ? contact.firstName.split("").shift()
                        : contact.email.split("").shift()}
                    </div>
                  )}
                </Avatar>
              )}
              {isChannel && (
                <div className="h-9 w-9 rounded-full bg-primary flex items-center justify-center text-white">
                  #
                </div>
              )}
              {isChannel ? (
                <span>{contact.name}</span>
              ) : (
                <span>{`${contact.firstName} ${contact.lastName}`}</span>
              )}
            </div>
          </div>
        ))}
    </div>
  );
};
export default ContactList;
