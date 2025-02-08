import React, { useCallback, useEffect, useState } from "react";
import { useRef } from "react";

const PasswordGenerator = () => {
  const [length, setLength] = useState(8);
  const [isNumberAllowed, setIsNumberAllowed] = useState(false);
  const [isCharAllowed, setIsCharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  //useRef hook
  const passwordRef = useRef(null);

  const generatingPassword = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (isNumberAllowed) str += "0123456789";
    if (isCharAllowed) str += "!@#$%^&*()[]{}";

    for (let i = 0; i <= length; i++) {
      let getChar = Math.floor(Math.random() * str.length);

      pass += str.charAt(getChar);
    }
    // console.log(pass);

    setPassword(pass);
  }, [length, isNumberAllowed, isCharAllowed]);

  useEffect(() => {
    generatingPassword();
  }, [length, isNumberAllowed, isCharAllowed, setPassword]);

  const copyToClipboard = useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, 20);
    navigator.clipboard.writeText(password);
  }, [password]);

  return (
    <div>
      <div className="h-screen w-full max-w-screen bg-zinc-900  flex flex-col justify-start items-center p-10 ">
        <h1 className="text-4xl font-semibold mb-3 text-zinc-600">
          Password Generator
        </h1>
        <div className=" max-w-full bg-zinc-800 rounded-lg px-10 py-5 text-orange-600">
          <div className="flex shadow rounded-lg overflow-hidden mb-4">
            <input
              type="text"
              value={password}
              ref={passwordRef}
              className="w-full outline-none bg-zinc-900 px-3 py-2 rounded-tl-lg rounded-bl-lg "
              readOnly
            />
            <button
              onClick={copyToClipboard}
              className="bg-blue-600 hover:bg-blue-700 px-3 py-2 text-white cursor-pointer"
            >
              copy
            </button>
          </div>
          <div className="flex flex-wrap gap-3 items-center justify-center">
            <label htmlFor="" className=" flex flex-wrap justify-center">
              <input
                type="range"
                min={8}
                max={24}
                value={length}
                onChange={(e) => setLength(e.target.value)}
                className="cursor-pointer"
              />
              <span className=" ml-3">Length: ({length})</span>
            </label>
            <label htmlFor="numberInput" className=" flex">
              <input
                type="checkbox"
                defaultChecked={isNumberAllowed}
                id="numberInput"
                onClick={() => setIsNumberAllowed(!isNumberAllowed)}
              />
              <span className="ml-3">Numbers</span>
            </label>
            <label htmlFor="characterInput" className="flex">
              <input
                type="checkbox"
                defaultChecked={isCharAllowed}
                id="characterInput"
                onClick={() => setIsCharAllowed(!isCharAllowed)}
              />
              <span className="ml-3">Character</span>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PasswordGenerator;
