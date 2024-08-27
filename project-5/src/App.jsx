import React, { useEffect, useState } from "react";

import Navbar from "./components/Navbar";
import ContactCard from "./components/ContactCard";
import AddAndUpdate from "./components/AddAndUpdate";
import NotFoundContact from "./components/NotFoundContact";

import { HiOutlineSearch } from "react-icons/hi";
import { FaPlusCircle } from "react-icons/fa";

import { collection, getDocs, onSnapshot } from "firebase/firestore";
import { db } from "./config/firebase";
import useDisclose from "./hooks/useDisclose";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  const [contact, setContact] = useState([]);

  const { isOpen, onOpen, onClose } = useDisclose();

  useEffect(() => {
    const getContacts = async () => {
      try {
        const contactsRef = collection(db, "contact");
        const contactsSnapshot = await getDocs(contactsRef);

        onSnapshot(contactsRef, (snapshot) => {
          const contactList = snapshot.docs.map((doc) => {
            return {
              id: doc.id,
              ...doc.data(),
            };
          });
          setContact(contactList);
          return contactList;
        });

        // console.log(contactList);
      } catch (error) {
        console.log(error);
      }
    };
    getContacts();
  }, []);

  const filterContacts = (e) => {
    const value = e.target.value;
    const contactsRef = collection(db, "contact");

    onSnapshot(contactsRef, (snapshot) => {
      const contactList = snapshot.docs.map((doc) => {
        return {
          id: doc.id,
          ...doc.data(),
        };
      });

      const filteredContacts = contactList.filter((contact) =>
        contact.name.toLowerCase().includes(value.toLowerCase())
      );
      setContact(filterContacts);

      return filteredContacts;
    });
  };

  return (
    <>
      <div className="mx-auto max-w-[370px] px-4">
        <Navbar />
        <div className="flex gap-2">
          <div className="relative flex flex-grow items-center">
            <HiOutlineSearch className="text-2xl text-white absolute ml-1" />
            <input
              onChange={filterContacts}
              className="border border-white bg-transparent rounded-md flex-grow h-10 text-white pl-9"
              type="text"
              placeholder="search contact"
            />
          </div>
          <FaPlusCircle
            onClick={onOpen}
            className="text-5xl text-white cursor-pointer"
          />
        </div>
        <div className="mt-4 gap-4 flex flex-col">
          {contact.length <= 0 ? (
            <NotFoundContact />
          ) : (
            contact.map((con) => <ContactCard key={con.id} contact={con} />)
          )}
        </div>
      </div>
      <AddAndUpdate onClose={onClose} isOpen={isOpen} />
      <ToastContainer position="bottom-center" />
    </>
  );
};

export default App;
