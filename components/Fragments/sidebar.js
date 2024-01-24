import React, { useState } from "react";
import Link from "next/link";
import axios from "axios";
import Router from "next/router";
import { useEffect, useRef } from "react";

const Sidebar = ({ navigation }) => {
  const [openIndex, setOpenIndex] = useState(null);
  const [searchResults, setSearchResults] = useState([]);
  const [searchStatus, setSearchStatus] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const toggle = () => setIsVoiceModalOpen(!isVoiceModalOpen); // Function to toggle the modal
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [isRecording, setIsRecording] = useState(false);
  const [recordingComplete, setRecordingComplete] = useState(false);
  const [transcript, setTranscript] = useState("");
  const [voiceSearchTranscript, setVoiceSearchTranscript] = useState("");

  const recognitionRef = useRef(null);

  const startRecording = () => {
    setIsRecording(true);
    recognitionRef.current = new window.webkitSpeechRecognition();
    recognitionRef.current.continuous = true;
    recognitionRef.current.interimResults = true;
  
    recognitionRef.current.onresult = (event) => {
      const { transcript } = event.results[event.results.length - 1][0];
      console.log(event.results);
      setTranscript(transcript);
      setVoiceSearchTranscript(transcript); // Tambahkan baris ini
    };
  
    recognitionRef.current.start();
  };

  useEffect(() => {
    return () => {
      if (recognitionRef.current) {
        recognitionRef.current.stop();
      }
    };
  }, []);

  const stopRecording = () => {
    if (recognitionRef.current) {
      recognitionRef.current.stop();
      setRecordingComplete(true);
    }
  };

  const handleToggleRecording = () => {
    setIsRecording(!isRecording);
    if (!isRecording) {
      startRecording();
    } else {
      stopRecording();
    }
  };

  const handleSearch = async () => { 
    try {
      const response = await axios.get(
        `/api/search_data_by_keyword?keywords=${searchQuery}`
      );
      const { results, route } = response.data;

      if (route) {
        Router.push(`/${route}?keywords=${searchQuery}`);
      } else {
        setSearchResults(results);

        setSearchStatus(
          results.length > 0 ? "Results found" : "No results found"
        );
      }
    } catch (error) {
      console.error(error);
    }
  };
  const openModal = () => {
  setIsModalOpen(true);
};

const closeModal = () => {
  setIsModalOpen(false);
};
  return (
    <>
      <nav className="fixed top-0 z-50 w-full bg-white border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700">
        <div className="px-3 py-3 lg:px-5 lg:pl-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center justify-start rtl:justify-end">
              <div className="absolute bottom-0 inset-x-0 mx-auto m-2 w-1/2 rounded-sm">  
                <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                  <svg
                    className="w-4 h-4"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 20 20"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                    />
                  </svg>
                </div>
                <input
                  type="text"
                  id="voice-search"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Search..."
                  value={voiceSearchTranscript}  // Ubah nilai dari searchQuery ke voiceSearchTranscript
                  onChange={(e) => setVoiceSearchTranscript(e.target.value)}  // Ubah setSearchQuery menjadi setVoiceSearchTranscript
                  required
                />
                <button
                  type="button"
                  className="absolute inset-y-0 end-0 flex items-center pe-3"
                  onClick={handleSearch}
                >
                </button>
                {isModalOpen && (
                  <div className="modal w-full h-full fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-8 border border-gray-300">
                    <div className="w-full">
                      {(isRecording || transcript) && (
                        <div className="w-1/4 m-auto rounded-md border p-4 bg-white">
                          <div className="flex-1 flex w-full justify-between">
                            <div className="space-y-1">
                              <p className="text-sm font-medium leading-none">
                                {recordingComplete ? "Recorded" : "Recording"}
                              </p>
                              <p className="text-sm text-muted-foreground">
                                {recordingComplete
                                  ? "Thanks for talking."
                                  : "Start speaking..."}
                              </p>
                            </div>
                            {isRecording && (
                              <div className="rounded-full w-4 h-4 bg-red-400 animate-pulse" />
                            )}
                          </div>

                          {transcript && (
                            <div className="border rounded-md p-2 h-fullm mt-4">
                              <p className="mb-0">{transcript}</p>
                            </div>
                          )}
                        </div>
                      )}

                      <div className="flex items-center w-full">
                        {isRecording ? (
                          <button
                            onClick={handleToggleRecording}
                            className="mt-10 m-auto flex items-center justify-center bg-red-400 hover:bg-red-500 rounded-full w-20 h-20 focus:outline-none"
                          >
                            <svg
                              className="h-12 w-12 "
                              viewBox="0 0 24 24"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path fill="white" d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
                            </svg>
                          </button>
                        ) : (
                          <button
                            onClick={handleToggleRecording}
                            className="mt-10 m-auto flex items-center justify-center bg-blue-400 hover:bg-blue-500 rounded-full w-20 h-20 focus:outline-none"
                          >
                            <svg
                              viewBox="0 0 256 256"
                              xmlns="http://www.w3.org/2000/svg"
                              className="w-12 h-12 text-white"
                            >
                              <path
                                fill="currentColor"
                                d="M128 176a48.05 48.05 0 0 0 48-48V64a48 48 0 0 0-96 0v64a48.05 48.05 0 0 0 48 48ZM96 64a32 32 0 0 1 64 0v64a32 32 0 0 1-64 0Zm40 143.6V232a8 8 0 0 1-16 0v-24.4A80.11 80.11 0 0 1 48 128a8 8 0 0 1 16 0a64 64 0 0 0 128 0a8 8 0 0 1 16 0a80.11 80.11 0 0 1-72 79.6Z"
                              />
                            </svg>
                          </button>
                        )}
                      </div>
                    </div>
                    <button className="bg-gray-500 text-white px-4 py-2 rounded-md" type="button" onClick={closeModal}>
                      Close Modal
                    </button>
                  </div>
                )}
                <button
                type="button"
                className="absolute inset-y-0 end-0 flex items-center pe-3"
                onClick={openModal}>
                <svg
                    className="w-4 h-4 text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 16 20"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M15 7v3a5.006 5.006 0 0 1-5 5H6a5.006 5.006 0 0 1-5-5V7m7 9v3m-3 0h6M7 1h2a3 3 0 0 1 3 3v5a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3V4a3 3 0 0 1 3-3Z"
                    />
                  </svg>
                </button>
              </div>
              <button
                data-drawer-target="logo-sidebar"
                data-drawer-toggle="logo-sidebar"
                aria-controls="logo-sidebar"
                type="button"
                className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              >
                <span className="sr-only">Open sidebar</span>
                <svg
                  className="w-6 h-6"
                  aria-hidden="true"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    clipRule="evenodd"
                    fillRule="evenodd"
                    d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
                  ></path>
                </svg>
              </button>
              <a href="https://flowbite.com" className="flex ms-2 md:me-24">
                <img
                  src="https://flowbite.com/docs/images/logo.svg"
                  className="h-8 me-3"
                  alt="Website Logo"
                />
                <span className="self-center text-xl font-semibold sm:text-2xl whitespace-nowrap dark:text-white">
                  DEA G-Speech
                </span>
              </a>
            </div>
            <div className="flex items-center">
              <div className="flex items-center ms-3">
                <div>
                  <button
                    type="button"
                    className="flex text-sm bg-gray-800 rounded-full focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
                    aria-expanded="false"
                    data-dropdown-toggle="dropdown-user"
                  >
                    <span className="sr-only">Open user menu</span>
                    <img
                      className="w-8 h-8 rounded-full"
                      src="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                      alt="user photo"
                    />
                  </button>
                </div>
                <div
                  className="z-50 hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded shadow dark:bg-gray-700 dark:divide-gray-600"
                  id="dropdown-user"
                >
                  <div className="px-4 py-3" role="none">
                    <p
                      className="text-sm text-gray-900 dark:text-white"
                      role="none"
                    >
                      Neil Sims
                    </p>
                    <p
                      className="text-sm font-medium text-gray-900 truncate dark:text-gray-300"
                      role="none"
                    >
                      neil.sims@flowbite.com
                    </p>
                  </div>
                  <ul className="py-1" role="none">
                    <li>
                      <a
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
                        role="menuitem"
                      >
                        Dashboard
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
                        role="menuitem"
                      >
                        Settings
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
                        role="menuitem"
                      >
                        Earnings
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
                        role="menuitem"
                      >
                        Sign out
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <aside
        id="logo-sidebar"
        className="fixed top-0 left-0 z-40 w-64 h-screen pt-20 transition-transform -translate-x-full bg-white border-r border-gray-200 sm:translate-x-0 dark:bg-gray-800 dark:border-gray-700"
        aria-label="Sidebar"
      >
        <div className="h-full px-3 pb-4 overflow-y-auto bg-white dark:bg-gray-800">
          <ul className="space-y-2 font-medium">
            {navigation.map((item, index) => (
              <li key={index}>
                <Link
                  href={item[1]}
                  className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                  onClick={(e) => {
                    setOpenIndex(index === openIndex ? null : index);
                  }}
                >
                  {item[2]}
                  <span className="ms-3">{item[0]}</span>
                </Link>
                {index === openIndex && item[3] && (
                  <ul className="pl-4">
                    {item[3].map((subItem, subIndex) => (
                      <li key={subIndex}>
                        <Link
                          href={subItem[1]}
                          className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                        >
                          {subItem[2]}
                          <span className="ms-3">{subItem[0]}</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </div>
        <div className="fixed left-0 bottom-0 w-64 bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700">
          <button className="bg-red-400 p-2 rounded-sm w-full text-white text-center">
            Logout
          </button>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
